import { useTest } from "@/lib/test-context";
import { Timer } from "./Timer";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon, Flag, MoreVertical } from "lucide-react";

interface TopBarProps {
  currentQuestionId?: string;
  onMarkReview?: () => void;
}

export function TopBar({ currentQuestionId, onMarkReview }: TopBarProps) {
  const { state, dispatch } = useTest();
  
  const isFlagged = currentQuestionId ? state.flagged[currentQuestionId] : false;

  const getModuleTitle = () => {
    if (!state.currentModule) return "";
    if (state.currentModule?.startsWith('verbal')) return "Reading & Writing";
    if (state.currentModule?.startsWith('math')) return "Math";
    return "";
  };

  return (
    <header className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-md z-40 relative">
      <div className="flex items-center gap-4">
        <h1 className="font-sans font-bold text-lg tracking-wide">{getModuleTitle()}</h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Timer />
      </div>

      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 h-9 gap-2"
          onClick={() => dispatch({ type: 'TOGGLE_CALCULATOR' })}
        >
          <CalcIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Calculator</span>
        </Button>

        <div className="h-6 w-px bg-white/20 mx-1" />

        <Button 
          variant="ghost" 
          className={isFlagged ? "text-yellow-400 hover:bg-white/10 h-9 gap-2" : "text-white hover:bg-white/10 h-9 gap-2"}
          onClick={onMarkReview}
        >
          <Flag className={isFlagged ? "fill-yellow-400 w-4 h-4" : "w-4 h-4"} />
          <span className="hidden sm:inline">{isFlagged ? "Marked" : "Mark for Review"}</span>
        </Button>
        
        <Button variant="ghost" className="text-white hover:bg-white/10 h-9 w-9 p-0">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
