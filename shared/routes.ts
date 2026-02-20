
import { z } from 'zod';
import { insertResultSchema, results } from './schema';

// ============================================
// API CONTRACT
// ============================================
export const api = {
  results: {
    create: {
      method: 'POST' as const,
      path: '/api/results' as const,
      input: insertResultSchema,
      responses: {
        201: z.custom<typeof results.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
    // Optional: Get leaderboard or history
    list: {
      method: 'GET' as const,
      path: '/api/results' as const,
      responses: {
        200: z.array(z.custom<typeof results.$inferSelect>()),
      },
    }
  },
  // Endpoint to fetch questions (could be static, but API is better for future)
  questions: {
    list: {
      method: 'GET' as const,
      path: '/api/questions' as const,
      responses: {
        200: z.object({
          module1: z.array(z.any()), // Typed as Question[] in frontend
          module2Easy: z.array(z.any()),
          module2Hard: z.array(z.any()),
        }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
