import { useTest } from "@/lib/test-context";
import { cn } from "@/lib/utils";
import { Flag } from "lucide-react";
import { type Question } from "@shared/schema";

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestions: Question[];
}

export function QuestionNavigation({ totalQuestions, currentQuestions }: QuestionNavigationProps) {
  const { state, dispatch } = useTest();

  // Create array of question indices
  const questions = Array.from({ length: totalQuestions }, (_, i) => i);

  return (
    <div className="w-full bg-white border-t border-gray-200 p-2 overflow-x-auto">
      <div className="flex justify-center gap-2 min-w-max px-4">
        {questions.map((index) => {
          const question = currentQuestions[index];
          if (!question) return null;

          const isCurrent = state.currentQuestionIndex === index;
          const isAnswered = !!state.answers[question.id];
          const isFlagged = state.flagged[question.id];

          return (
            <button
              key={index}
              onClick={() => dispatch({ type: 'JUMP_TO_QUESTION', payload: index })}
              className={cn(
                "relative flex items-center justify-center w-8 h-8 rounded text-sm font-medium transition-all duration-200",
                isCurrent 
                  ? "bg-blue-600 text-white shadow-lg ring-2 ring-blue-600 ring-offset-2" 
                  : isAnswered
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              <span className={cn(isFlagged && "mt-1")}>{index + 1}</span>
              {isFlagged && (
                <Flag className="absolute top-0.5 right-0.5 w-2 h-2 fill-red-500 text-red-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
