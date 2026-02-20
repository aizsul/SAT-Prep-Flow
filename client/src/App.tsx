import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TestProvider } from "@/lib/test-context";
import Home from "@/pages/Home";
import TestPage from "@/pages/Test";
import NotFound from "@/pages/not-found";
import Instructions from "./pages/Instructions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Instructions" component={Instructions} />
      <Route path="/test" component={TestPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </TestProvider>
    </QueryClientProvider>
  );
}

export default App;
