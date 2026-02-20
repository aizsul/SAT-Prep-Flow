import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Calculator({ isOpen, onClose }: CalculatorProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] z-50 bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out">
      <div className="h-10 bg-gray-100 border-b flex items-center justify-between px-4">
        <span className="font-semibold text-sm text-gray-600">Calculator</span>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="w-4 h-4" />
        </Button>
      </div>
      <div className="h-[calc(100%-40px)] w-full">
        <iframe 
          src="https://www.desmos.com/testing/cb-sat-ap/graphing" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          title="Desmos Calculator"
        />
      </div>
    </div>
  );
}
