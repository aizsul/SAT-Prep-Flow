import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useTest } from "@/lib/test-context";
import { useQuestions, type Question } from "@/hooks/use-questions";
import { useSubmitResult } from "@/hooks/use-results";
import { TopBar } from "@/components/TopBar";
import { QuestionNavigation } from "@/components/QuestionNavigation";
import { Calculator } from "@/components/Calculator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";

function BreakScreen({ onComplete }: { onComplete: () => void }) {
  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Verbal Section Complete</h1>
      <div className="text-6xl font-mono mb-8 font-bold text-blue-600">
        {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
      <p className="text-xl text-gray-600 mb-8">Take a 10-minute break before the Math section begins.</p>
      <Button size="lg" onClick={onComplete}>Resume Early</Button>
    </div>
  );
}
export default function TestPage() {
  const { state, dispatch } = useTest();
  const { data: questionSet, isLoading, error } = useQuestions();
  const submitResult = useSubmitResult();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!state.studentName) {
      // setLocation("/");
    }
  }, [state.studentName, setLocation]);
  // The "Don't Leave Me" Warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // If the test is already completed, let them leave safely!
      if (state.currentStatus === 'completed') return;

      // Otherwise, trigger the browser's warning popup
      e.preventDefault();
      e.returnValue = ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the alarm when the component unmounts
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state.currentStatus]);
  // The "Don't Click Back" Warning
  useEffect(() => {
    if (state.currentStatus === 'completed') return;

    // Build a "speed bump" in the browser's history
    window.history.pushState(null, document.title, window.location.href);

    const handlePopState = () => {
      // Show a standard browser confirmation dialog
      const confirmLeave = window.confirm("Are you sure you want to leave? Your test progress will be lost.");
      
      if (confirmLeave) {
        // If they click OK, let them go back to the home page
        setLocation("/");
      } else {
        // If they click Cancel, rebuild the speed bump so they stay on the test!
        window.history.pushState(null, document.title, window.location.href);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Clean up the speed bump if the test ends naturally
    return () => window.removeEventListener('popstate', handlePopState);
  }, [state.currentStatus, setLocation]);
  let currentQuestions: Question[] = [];
  if (questionSet && state.currentModule) {
    currentQuestions = questionSet[state.currentModule as keyof typeof questionSet] || [];
  }

  const currentQuestion = currentQuestions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === currentQuestions.length - 1;
  const isFirstQuestion = state.currentQuestionIndex === 0;

  const handleNext = () => {
    if (isLastQuestion) {
      if (state.currentModule === 'verbal_mod1') {
        const correctCount = currentQuestions.reduce((acc, q) => acc + (state.answers[q.id] === q.correctChoiceId ? 1 : 0), 0);
        dispatch({ type: 'FINISH_VERBAL_MOD1', payload: { score: correctCount } });
      } else if (state.currentModule?.startsWith('verbal_mod2')) {
        dispatch({ type: 'FINISH_VERBAL_SECTION' });
      } else if (state.currentModule === 'math_mod1') {
        const correctCount = currentQuestions.reduce((acc, q) => acc + (state.answers[q.id] === q.correctChoiceId ? 1 : 0), 0);
        dispatch({ type: 'FINISH_MATH_MOD1', payload: { score: correctCount } });
      } else if (state.currentModule?.startsWith('math_mod2')) {
        dispatch({ type: 'FINISH_TEST' });
        handleSubmit();
      }
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  const handleSubmit = async () => {
    const calcScore = (qs: Question[]) => qs.reduce((acc, q) => acc + (state.answers[q.id] === q.correctChoiceId ? 1 : 0), 0);
    
    const vMod2Qs = state.verbalDifficulty === 'hard' ? questionSet?.verbal_mod2_hard : questionSet?.verbal_mod2_easy;
    const mMod2Qs = state.mathDifficulty === 'hard' ? questionSet?.math_mod2_hard : questionSet?.math_mod2_easy;
    
    const vMod2Score = vMod2Qs ? calcScore(vMod2Qs) : 0;
    const mMod2Score = mMod2Qs ? calcScore(mMod2Qs) : 0;

    const totalScore = 400 + (state.verbalMod1Score * 10) + (vMod2Score * 10) + (state.mathMod1Score * 15) + (mMod2Score * 15);

    try {
      await submitResult.mutateAsync({
        studentName: state.studentName,
        studentEmail: state.studentEmail,
        verbalMod1Score: state.verbalMod1Score,
        verbalMod2Difficulty: state.verbalDifficulty || 'easy',
        verbalMod2Score: vMod2Score,
        mathMod1Score: state.mathMod1Score,
        mathMod2Difficulty: state.mathDifficulty || 'easy',
        mathMod2Score: mMod2Score,
        totalScore: totalScore
      });
    } catch (e) {
      console.error("Failed to submit", e);
    }
  };

  if (isLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  if (state.currentStatus === 'break') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Module 1 Complete</h1>
        <Button onClick={() => {
          const isVerbal = state.currentModule?.startsWith('verbal');
          const score = isVerbal ? state.verbalMod1Score : state.mathMod1Score;
          const total = isVerbal ? 27 : 22;
          const difficulty = score >= total * 0.6 ? 'hard' : 'easy';
          dispatch({ type: isVerbal ? 'START_VERBAL_MOD2' : 'START_MATH_MOD2', payload: { difficulty } });
        }}>Continue to Module 2</Button>
      </div>
    );
  }

  if (state.currentStatus === 'section_transition') {
    return <BreakScreen onComplete={() => dispatch({ type: 'START_MATH' })} />;
  }

  if (state.currentStatus === 'completed') {
    return <div className="min-h-screen flex items-center justify-center"><h1>Test Complete</h1></div>;
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <TopBar 
        currentQuestionId={currentQuestion?.id}
        onMarkReview={() => {
          if (currentQuestion) {
            dispatch({ type: 'TOGGLE_FLAG', payload: { questionId: currentQuestion.id } });
          }
        }}
      />
      <main className="flex-1 overflow-auto p-8">
        {currentQuestion && (
          <div className="max-w-2xl mx-auto">
            <p 
  className="text-lg text-gray-800 whitespace-pre-wrap" 
  dangerouslySetInnerHTML={{ __html: currentQuestion.text }} 
/>
            <div className="space-y-4">
              {currentQuestion.choices.map((choice: { id: string, text: string }) => (
                <Button 
                  key={choice.id}
                  variant={state.answers[currentQuestion.id] === choice.id ? "default" : "outline"}
                  className="w-full text-left justify-start"
                  onClick={() => dispatch({ type: 'ANSWER_QUESTION', payload: { questionId: currentQuestion.id, choiceId: choice.id } })}
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
      <footer className="h-auto bg-white border-t border-gray-200 flex flex-col shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
        <div className="h-20 flex items-center justify-between px-6 md:px-12">
            <div className="flex items-center font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-gray-500 mr-2">Question</span>
                {state.currentQuestionIndex + 1} of {currentQuestions.length}
            </div>

            <div className="flex gap-4">
                {!isFirstQuestion && (
                    <Button 
                        variant="bluebook" 
                        onClick={() => dispatch({ type: 'PREV_QUESTION' })}
                        className="px-6"
                    >
                        Back
                    </Button>
                )}
                
                <Button 
                    variant="bluebook"
                    onClick={handleNext}
                    className="px-8 bg-blue-600 hover:bg-blue-700 text-white border-none"
                >
                    {isLastQuestion ? (state.currentModule?.includes('mod1') ? "End Module" : "Finish Section") : "Next"}
                </Button>
            </div>
        </div>
        
        <div className="pb-4">
            <QuestionNavigation totalQuestions={currentQuestions.length} currentQuestions={currentQuestions} />
        </div>
      </footer>
      <Calculator isOpen={state.isCalculatorOpen} onClose={() => dispatch({ type: 'TOGGLE_CALCULATOR' })} />
    </div>
  );
}
