
import { Question } from "@shared/schema";

const generatePlaceholders = (section: 'verbal' | 'math', stage: 1 | 2, count: number, module2Type?: 'easy' | 'hard'): Question[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${section}_s${stage}${module2Type ? `_${module2Type}` : ''}_q${i + 1}`,
    section,
    stage,
    module2Type,
    text: `Sample ${section} question ${i + 1} for stage ${stage}${module2Type ? ` (${module2Type})` : ''}.`,
    choices: [
      { id: "A", text: "Choice A" },
      { id: "B", text: "Choice B" },
      { id: "C", text: "Choice C" },
      { id: "D", text: "Choice D" }
    ],
    correctChoiceId: "A",
    domain: section === 'verbal' ? 'Reading & Writing' : 'Math'
  }));
};

export const SAMPLE_QUESTIONS: {
  verbal_mod1: Question[];
  verbal_mod2_easy: Question[];
  verbal_mod2_hard: Question[];
  math_mod1: Question[];
  math_mod2_easy: Question[];
  math_mod2_hard: Question[];
} = {
  verbal_mod1: generatePlaceholders('verbal', 1, 27),
  verbal_mod2_easy: generatePlaceholders('verbal', 2, 27, 'easy'),
  verbal_mod2_hard: generatePlaceholders('verbal', 2, 27, 'hard'),
  math_mod1: generatePlaceholders('math', 1, 22),
  math_mod2_easy: generatePlaceholders('math', 2, 22, 'easy'),
  math_mod2_hard: generatePlaceholders('math', 2, 22, 'hard'),
};
