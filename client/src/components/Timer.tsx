import { useEffect } from "react";
import { Clock } from "lucide-react";
import { useTest } from "@/lib/test-context";

export function Timer() {
  const { state, dispatch } = useTest();
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (state.timeRemaining > 0 && (state.currentModule?.includes("mod1") || state.currentModule?.includes("mod2"))) {
        dispatch({ type: 'TICK_TIMER' });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [state.timeRemaining, state.currentModule, dispatch]);

  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  
  // Format MM:SS
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const isLowTime = state.timeRemaining < 300; // 5 minutes

  return (
    <div className={`flex items-center gap-2 font-mono text-xl font-bold ${isLowTime ? 'text-red-600 animate-pulse' : 'text-white'}`}>
      <Clock className="w-5 h-5" />
      <span>{timeString}</span>
    </div>
  );
}
