import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertResult } from "@shared/schema";

export function useSubmitResult() {
  return useMutation({
    mutationFn: async (data: InsertResult) => {
      const res = await fetch(api.results.create.path, {
        method: api.results.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit results");
      }
      
      return await res.json();
    },
  });
}
