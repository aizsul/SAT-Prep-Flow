import { db } from "./db";
import { sql } from "drizzle-orm";
import { storage } from "./storage";
import { SAMPLE_QUESTIONS } from "./data";
import type { InsertQuestion, ModuleType } from "@shared/schema";
import { MODULE_IDS } from "@shared/schema";

// Ensure all tables this code uses actually exist before we query them.
// Drizzle-kit push handles this in dev, but production environments (e.g.
// Render) don't run db:push automatically, so we make startup self-healing.
async function ensureTables(): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS results (
      id            serial PRIMARY KEY,
      student_name  text NOT NULL,
      student_email text NOT NULL,
      verbal_mod1_score      integer,
      verbal_mod2_difficulty text,
      verbal_mod2_score      integer,
      math_mod1_score        integer,
      math_mod2_difficulty   text,
      math_mod2_score        integer,
      total_score   integer,
      completed_at  timestamp DEFAULT now()
    );
  `);

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS questions (
      id                 serial PRIMARY KEY,
      external_id        text NOT NULL UNIQUE,
      module             text NOT NULL,
      order_index        integer NOT NULL DEFAULT 0,
      text               text NOT NULL,
      image_url          text,
      choices            jsonb NOT NULL,
      correct_choice_id  text NOT NULL,
      domain             text
    );
  `);
}

export async function seedQuestionsIfEmpty(): Promise<void> {
  await ensureTables();

  const existing = await storage.countQuestions();
  if (existing > 0) return;

  const rows: InsertQuestion[] = [];
  for (const module of MODULE_IDS) {
    const list = (SAMPLE_QUESTIONS as Record<ModuleType, typeof SAMPLE_QUESTIONS.verbal_mod1>)[module] || [];
    list.forEach((q, idx) => {
      rows.push({
        externalId: q.id,
        module,
        orderIndex: idx,
        text: q.text,
        imageUrl: q.imageUrl ?? null,
        choices: q.choices,
        correctChoiceId: q.correctChoiceId,
        domain: q.domain ?? null,
      });
    });
  }

  await storage.bulkInsertQuestions(rows);
  console.log(`[seed] Inserted ${rows.length} questions from data.ts`);
}
