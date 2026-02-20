import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type Question } from "@shared/schema";

export type { Question };

export type QuestionSet = {
  verbal_mod1: Question[];
  verbal_mod2_easy: Question[];
  verbal_mod2_hard: Question[];
  math_mod1: Question[];
  math_mod2_easy: Question[];
  math_mod2_hard: Question[];
};

export function useQuestions() {
  return useQuery<QuestionSet>({
    queryKey: [api.questions.list.path],
    queryFn: async () => {
      const res = await fetch(api.questions.list.path);
      if (!res.ok) throw new Error("Failed to fetch questions");
      return (await res.json()) as QuestionSet;
    },
    staleTime: Infinity,
  });
}
