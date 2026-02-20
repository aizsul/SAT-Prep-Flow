
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type SectionStatus = 'verbal' | 'math' | 'intro' | 'break' | 'section_transition' | 'completed';
type ModuleID = 'verbal_mod1' | 'verbal_mod2_easy' | 'verbal_mod2_hard' | 'math_mod1' | 'math_mod2_easy' | 'math_mod2_hard';

interface TestState {
  studentName: string;
  studentEmail: string;
  currentStatus: SectionStatus;
  currentModule: ModuleID | null;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
  verbalMod1Score: number;
  mathMod1Score: number;
  verbalDifficulty: 'easy' | 'hard' | null;
  mathDifficulty: 'easy' | 'hard' | null;
  timeRemaining: number;
  isCalculatorOpen: boolean;
}

type Action =
  | { type: 'START_TEST'; payload: { name: string; email: string } }
  | { type: 'START_VERBAL' }
  | { type: 'FINISH_VERBAL_MOD1'; payload: { score: number } }
  | { type: 'START_VERBAL_MOD2'; payload: { difficulty: 'easy' | 'hard' } }
  | { type: 'FINISH_VERBAL_SECTION' }
  | { type: 'START_MATH' }
  | { type: 'FINISH_MATH_MOD1'; payload: { score: number } }
  | { type: 'START_MATH_MOD2'; payload: { difficulty: 'easy' | 'hard' } }
  | { type: 'FINISH_TEST' }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; choiceId: string } }
  | { type: 'TOGGLE_FLAG'; payload: { questionId: string } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'JUMP_TO_QUESTION'; payload: number }
  | { type: 'TICK_TIMER' }
  | { type: 'TOGGLE_CALCULATOR' };

const VERBAL_TIME = 32 * 60;
const MATH_TIME = 35 * 60;

const initialState: TestState = {
  studentName: '',
  studentEmail: '',
  currentStatus: 'intro',
  currentModule: null,
  currentQuestionIndex: 0,
  answers: {},
  flagged: {},
  verbalMod1Score: 0,
  mathMod1Score: 0,
  verbalDifficulty: null,
  mathDifficulty: null,
  timeRemaining: 0,
  isCalculatorOpen: false,
};

function testReducer(state: TestState, action: Action): TestState {
  switch (action.type) {
    case 'START_TEST':
      return { ...state, studentName: action.payload.name, studentEmail: action.payload.email };
    case 'START_VERBAL':
      return { ...state, currentStatus: 'verbal', currentModule: 'verbal_mod1', timeRemaining: VERBAL_TIME, currentQuestionIndex: 0 };
    case 'FINISH_VERBAL_MOD1':
      return { ...state, currentStatus: 'break', verbalMod1Score: action.payload.score };
    case 'START_VERBAL_MOD2':
      return { ...state, currentStatus: 'verbal', currentModule: action.payload.difficulty === 'easy' ? 'verbal_mod2_easy' : 'verbal_mod2_hard', verbalDifficulty: action.payload.difficulty, timeRemaining: VERBAL_TIME, currentQuestionIndex: 0 };
    case 'FINISH_VERBAL_SECTION':
      return { ...state, currentStatus: 'section_transition' };
    case 'START_MATH':
      return { ...state, currentStatus: 'math', currentModule: 'math_mod1', timeRemaining: MATH_TIME, currentQuestionIndex: 0 };
    case 'FINISH_MATH_MOD1':
      return { ...state, currentStatus: 'break', mathMod1Score: action.payload.score };
    case 'START_MATH_MOD2':
      return { ...state, currentStatus: 'math', currentModule: action.payload.difficulty === 'easy' ? 'math_mod2_easy' : 'math_mod2_hard', mathDifficulty: action.payload.difficulty, timeRemaining: MATH_TIME, currentQuestionIndex: 0 };
    case 'FINISH_TEST':
      return { ...state, currentStatus: 'completed' };
    case 'ANSWER_QUESTION':
      return { ...state, answers: { ...state.answers, [action.payload.questionId]: action.payload.choiceId } };
    case 'TOGGLE_FLAG':
      return { ...state, flagged: { ...state.flagged, [action.payload.questionId]: !state.flagged[action.payload.questionId] } };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'PREV_QUESTION':
      return { ...state, currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) };
    case 'JUMP_TO_QUESTION':
      return { ...state, currentQuestionIndex: action.payload };
    case 'TICK_TIMER':
      return { ...state, timeRemaining: Math.max(0, state.timeRemaining - 1) };
    case 'TOGGLE_CALCULATOR':
      return { ...state, isCalculatorOpen: !state.isCalculatorOpen };
    default:
      return state;
  }
}

const TestContext = createContext<{ state: TestState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(testReducer, initialState);
  return <TestContext.Provider value={{ state, dispatch }}>{children}</TestContext.Provider>;
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) throw new Error('useTest must be used within a TestProvider');
  return context;
}
