
import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  studentEmail: text("student_email").notNull(),

  // Verbal Section
  verbalMod1Score: integer("verbal_mod1_score"),
  verbalMod2Difficulty: text("verbal_mod2_difficulty"),
  verbalMod2Score: integer("verbal_mod2_score"),

  // Math Section
  mathMod1Score: integer("math_mod1_score"),
  mathMod2Difficulty: text("math_mod2_difficulty"),
  mathMod2Score: integer("math_mod2_score"),

  totalScore: integer("total_score"),
  completedAt: timestamp("completed_at").defaultNow(),
});

export const insertResultSchema = createInsertSchema(results).omit({
  id: true,
  completedAt: true,
});

export type InsertResult = z.infer<typeof insertResultSchema>;
export type Result = typeof results.$inferSelect;

// === Questions ===

export const MODULE_IDS = [
  "verbal_mod1",
  "verbal_mod2_easy",
  "verbal_mod2_hard",
  "math_mod1",
  "math_mod2_easy",
  "math_mod2_hard",
] as const;

export type ModuleType = (typeof MODULE_IDS)[number];

export const choiceSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
});

export const choicesSchema = z
  .array(choiceSchema)
  .min(2, "At least 2 choices are required");

export type Choice = z.infer<typeof choiceSchema>;

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  externalId: text("external_id").notNull().unique(),
  module: text("module").notNull(),
  orderIndex: integer("order_index").notNull().default(0),
  text: text("text").notNull(),
  imageUrl: text("image_url"),
  choices: jsonb("choices").$type<Choice[]>().notNull(),
  correctChoiceId: text("correct_choice_id").notNull(),
  domain: text("domain"),
});

export const insertQuestionSchema = createInsertSchema(questions, {
  module: z.enum(MODULE_IDS),
  choices: choicesSchema,
}).omit({ id: true });

export const updateQuestionSchema = insertQuestionSchema.partial();

export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type UpdateQuestion = z.infer<typeof updateQuestionSchema>;
export type QuestionRow = typeof questions.$inferSelect;

// Frontend-facing question shape (kept identical to the previous contract)
export interface Question {
  id: string;
  section: "verbal" | "math";
  stage: 1 | 2;
  module2Type?: "easy" | "hard";
  text: string;
  imageUrl?: string;
  choices: Choice[];
  correctChoiceId: string;
  domain?: string;
}
