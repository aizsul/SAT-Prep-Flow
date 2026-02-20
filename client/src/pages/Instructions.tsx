import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useSearch } from "wouter";
import { BookOpen, Clock, AlertCircle } from "lucide-react";

export default function Instructions() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Test Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>This test consists of Reading and Writing / Math sections.</li>
            <li>You cannot pause the test once it has started.</li>
            <li>Ensure you have a stable internet connection.</li>
            <li>Have a scratchpad and pencil ready for calculations.</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={() => setLocation("/test")} 
            className="w-full md:w-auto px-8 py-6 text-lg"
          >
            I'm Ready, Start Test
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}