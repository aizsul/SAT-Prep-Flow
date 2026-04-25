import { storage } from "./storage";
import { SAMPLE_QUESTIONS } from "./data";
import type { InsertQuestion, ModuleType } from "@shared/schema";
import { MODULE_IDS } from "@shared/schema";

export async function seedQuestionsIfEmpty(): Promise<void> {
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
