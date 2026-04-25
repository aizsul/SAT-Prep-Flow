
import type { Express, Request, Response, NextFunction } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertResultSchema,
  insertQuestionSchema,
  updateQuestionSchema,
  MODULE_IDS,
  type ModuleType,
} from "@shared/schema";
import { z } from "zod";
import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { seedQuestionsIfEmpty } from "./seed";

const UPLOAD_DIR = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const ALLOWED_MIME = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
  "image/svg+xml",
]);

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase() || ".bin";
      const safe = crypto.randomBytes(12).toString("hex");
      cb(null, `${Date.now()}-${safe}${ext}`);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      cb(new Error("Unsupported image type"));
      return;
    }
    cb(null, true);
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Seed DB from data.ts on first boot if empty
  try {
    await seedQuestionsIfEmpty();
  } catch (err) {
    console.error("[seed] Failed to seed questions:", err);
  }

  // Serve uploaded files
  app.use("/uploads", express.static(UPLOAD_DIR, { maxAge: "7d" }));

  // === Test taker endpoints ===

  app.get("/api/questions", async (_req, res) => {
    try {
      const grouped = await storage.getGroupedQuestions();
      res.json(grouped);
    } catch (error) {
      console.error("[questions] failed:", error);
      res.status(500).json({ message: "Failed to load questions" });
    }
  });

  app.post("/api/results", async (req, res) => {
    try {
      const data = insertResultSchema.parse(req.body);
      const result = await storage.createResult(data);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        console.error("CRITICAL DB ERROR:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/results", async (_req, res) => {
    try {
      const results = await storage.getResults();
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // === Admin endpoints ===

  app.get("/api/admin/questions", async (_req, res) => {
    try {
      const rows = await storage.listQuestions();
      res.json(rows);
    } catch (error) {
      console.error("[admin] list failed:", error);
      res.status(500).json({ message: "Failed to list questions" });
    }
  });

  app.get("/api/admin/questions/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ message: "Invalid id" });
    const row = await storage.getQuestion(id);
    if (!row) return res.status(404).json({ message: "Not found" });
    res.json(row);
  });

  app.post("/api/admin/questions", async (req, res) => {
    try {
      const data = insertQuestionSchema.parse({
        ...req.body,
        externalId:
          req.body?.externalId && String(req.body.externalId).trim().length > 0
            ? req.body.externalId
            : `q_${Date.now()}_${crypto.randomBytes(3).toString("hex")}`,
      });
      ensureChoiceConsistency(data.choices, data.correctChoiceId);
      const row = await storage.createQuestion(data);
      res.status(201).json(row);
    } catch (error) {
      handleAdminError(res, error, "create");
    }
  });

  app.patch("/api/admin/questions/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (!Number.isInteger(id)) return res.status(400).json({ message: "Invalid id" });
      const data = updateQuestionSchema.parse(req.body);
      if (data.choices && data.correctChoiceId) {
        ensureChoiceConsistency(data.choices, data.correctChoiceId);
      }
      const row = await storage.updateQuestion(id, data);
      if (!row) return res.status(404).json({ message: "Not found" });
      res.json(row);
    } catch (error) {
      handleAdminError(res, error, "update");
    }
  });

  app.delete("/api/admin/questions/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ message: "Invalid id" });
    const ok = await storage.deleteQuestion(id);
    if (!ok) return res.status(404).json({ message: "Not found" });
    res.status(204).end();
  });

  app.get("/api/admin/modules", (_req, res) => {
    res.json(MODULE_IDS);
  });

  // Image upload — returns the public URL of the saved file
  app.post(
    "/api/admin/upload",
    (req: Request, res: Response, next: NextFunction) => {
      upload.single("image")(req, res, (err: any) => {
        if (err) {
          const message =
            err instanceof multer.MulterError
              ? err.message
              : err?.message || "Upload failed";
          return res.status(400).json({ message });
        }
        next();
      });
    },
    (req, res) => {
      if (!req.file) {
        return res.status(400).json({ message: "No file provided" });
      }
      const url = `/uploads/${req.file.filename}`;
      res.status(201).json({ url, filename: req.file.filename });
    },
  );

  return httpServer;
}

function ensureChoiceConsistency(
  choices: { id: string; text: string }[],
  correctChoiceId: string,
) {
  const ids = new Set(choices.map((c) => c.id));
  if (ids.size !== choices.length) {
    throw new ValidationError("Choice IDs must be unique");
  }
  if (!ids.has(correctChoiceId)) {
    throw new ValidationError("Correct choice must match one of the choices");
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function handleAdminError(res: Response, error: unknown, action: string) {
  if (error instanceof z.ZodError) {
    res.status(400).json({ message: "Invalid data", errors: error.errors });
    return;
  }
  if (error instanceof ValidationError) {
    res.status(400).json({ message: error.message });
    return;
  }
  console.error(`[admin] ${action} failed:`, error);
  res.status(500).json({ message: "Internal server error" });
}

// Re-export for convenience
export { MODULE_IDS };
export type { ModuleType };
