
import { db } from "./db";
import { results, type InsertResult, type Result } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Results
  createResult(result: InsertResult): Promise<Result>;
  getResults(): Promise<Result[]>;
}

export class DatabaseStorage implements IStorage {
  async createResult(insertResult: InsertResult): Promise<Result> {
    const [result] = await db
      .insert(results)
      .values(insertResult)
      .returning();
    return result;
  }

  async getResults(): Promise<Result[]> {
    return await db.select().from(results).orderBy(results.completedAt);
  }
}

export const storage = new DatabaseStorage();
