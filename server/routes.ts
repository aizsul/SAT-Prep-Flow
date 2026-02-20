
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { SAMPLE_QUESTIONS } from "./data";
import { insertResultSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Get all questions
  app.get("/api/questions", (_req, res) => {
    res.json(SAMPLE_QUESTIONS);
  });

  // Submit test results
  app.post("/api/results", async (req, res) => {
    try {
      const data = insertResultSchema.parse(req.body);
      const result = await storage.createResult(data);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        // THIS IS THE NEW LINE WE NEED:
        console.error("CRITICAL DB ERROR:", error); 
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get results (optional, for debugging/admin)
  app.get("/api/results", async (_req, res) => {
    try {
      const results = await storage.getResults();
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
