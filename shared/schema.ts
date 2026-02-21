
import { pgTable, text, serial, integer, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  studentEmail: text("student_email").notNull(),
  
  // Verbal Section
  verbalMod1Score: integer("verbal_mod1_score"),
  verbalMod2Difficulty: text("verbal_mod2_difficulty"), // 'easy' | 'hard'
  verbalMod2Score: integer("verbal_mod2_score"),
  
  // Math Section
  mathMod1Score: integer("math_mod1_score"),
  mathMod2Difficulty: text("math_mod2_difficulty"), // 'easy' | 'hard'
  mathMod2Score: integer("math_mod2_score"),
  
  totalScore: integer("total_score"), // 400-1600
  completedAt: timestamp("completed_at").defaultNow(),
});

export const insertResultSchema = createInsertSchema(results).omit({ 
  id: true, 
  completedAt: true 
});

export type InsertResult = z.infer<typeof insertResultSchema>;
export type Result = typeof results.$inferSelect;

export interface Question {
  id: string;
  section: 'verbal' | 'math';
  stage: 1 | 2;
  module2Type?: 'easy' | 'hard';
  text: string;
  imageUrl?: string;
  choices: {
    id: string;
    text: string;
  }[];
  correctChoiceId: string;
  domain?: string;
}

export type ModuleType = 'verbal_mod1' | 'verbal_mod2_easy' | 'verbal_mod2_hard' | 'math_mod1' | 'math_mod2_easy' | 'math_mod2_hard';
