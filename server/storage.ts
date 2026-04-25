
import { db } from "./db";
import {
  results,
  questions,
  type InsertResult,
  type Result,
  type InsertQuestion,
  type UpdateQuestion,
  type QuestionRow,
  type Question,
  type ModuleType,
  MODULE_IDS,
} from "@shared/schema";
import { eq, asc, desc } from "drizzle-orm";

const VERBAL_MODS = new Set<ModuleType>([
  "verbal_mod1",
  "verbal_mod2_easy",
  "verbal_mod2_hard",
]);

function rowToQuestion(row: QuestionRow): Question {
  const module = row.module as ModuleType;
  const section = VERBAL_MODS.has(module) ? "verbal" : "math";
  const stage = module.includes("mod1") ? 1 : 2;
  const module2Type = module.endsWith("hard")
    ? "hard"
    : module.endsWith("easy")
    ? "easy"
    : undefined;

  return {
    id: row.externalId,
    section,
    stage: stage as 1 | 2,
    ...(module2Type ? { module2Type } : {}),
    text: row.text,
    ...(row.imageUrl ? { imageUrl: row.imageUrl } : {}),
    choices: row.choices,
    correctChoiceId: row.correctChoiceId,
    ...(row.domain ? { domain: row.domain } : {}),
  };
}

export type GroupedQuestions = Record<ModuleType, Question[]>;

export interface IStorage {
  createResult(result: InsertResult): Promise<Result>;
  getResults(): Promise<Result[]>;

  // Questions
  getGroupedQuestions(): Promise<GroupedQuestions>;
  listQuestions(): Promise<QuestionRow[]>;
  getQuestion(id: number): Promise<QuestionRow | undefined>;
  createQuestion(data: InsertQuestion): Promise<QuestionRow>;
  updateQuestion(id: number, data: UpdateQuestion): Promise<QuestionRow | undefined>;
  deleteQuestion(id: number): Promise<boolean>;
  countQuestions(): Promise<number>;
  bulkInsertQuestions(rows: InsertQuestion[]): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createResult(insertResult: InsertResult): Promise<Result> {
    const [result] = await db.insert(results).values(insertResult).returning();
    return result;
  }

  async getResults(): Promise<Result[]> {
    return await db.select().from(results).orderBy(desc(results.completedAt));
  }

  async getGroupedQuestions(): Promise<GroupedQuestions> {
    const rows = await db
      .select()
      .from(questions)
      .orderBy(asc(questions.module), asc(questions.orderIndex), asc(questions.id));

    const grouped = MODULE_IDS.reduce((acc, m) => {
      acc[m] = [];
      return acc;
    }, {} as GroupedQuestions);

    for (const row of rows) {
      const m = row.module as ModuleType;
      if (!grouped[m]) continue;
      grouped[m].push(rowToQuestion(row));
    }
    return grouped;
  }

  async listQuestions(): Promise<QuestionRow[]> {
    return await db
      .select()
      .from(questions)
      .orderBy(asc(questions.module), asc(questions.orderIndex), asc(questions.id));
  }

  async getQuestion(id: number): Promise<QuestionRow | undefined> {
    const [row] = await db.select().from(questions).where(eq(questions.id, id));
    return row;
  }

  async createQuestion(data: InsertQuestion): Promise<QuestionRow> {
    const [row] = await db.insert(questions).values(data).returning();
    return row;
  }

  async updateQuestion(
    id: number,
    data: UpdateQuestion,
  ): Promise<QuestionRow | undefined> {
    const [row] = await db
      .update(questions)
      .set(data)
      .where(eq(questions.id, id))
      .returning();
    return row;
  }

  async deleteQuestion(id: number): Promise<boolean> {
    const result = await db.delete(questions).where(eq(questions.id, id)).returning();
    return result.length > 0;
  }

  async countQuestions(): Promise<number> {
    const rows = await db.select().from(questions);
    return rows.length;
  }

  async bulkInsertQuestions(rows: InsertQuestion[]): Promise<void> {
    if (rows.length === 0) return;
    // Insert in chunks to avoid parameter limits
    const chunkSize = 100;
    for (let i = 0; i < rows.length; i += chunkSize) {
      await db.insert(questions).values(rows.slice(i, i + chunkSize));
    }
  }
}

export const storage = new DatabaseStorage();
