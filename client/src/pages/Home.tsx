import { useState } from "react";
import { useLocation } from "wouter";
import { useTest } from "@/lib/test-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [, setLocation] = useLocation();
  const { dispatch } = useTest();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate a brief loading state for effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    dispatch({ 
      type: 'START_TEST', 
      payload: { 
        name: formData.name, 
        email: formData.email 
      } 
    });
    dispatch({ type: 'START_VERBAL' });
    
    setLocation("/test");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="h-16 border-b border-gray-100 flex items-center px-6 lg:px-12">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-900">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span>NisAlash</span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-gray-50">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              New Digital SAT Format
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Master the <span className="text-blue-600">Digital SAT</span> with confidence.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the realistic adaptive test interface. 
              Practice Reading, Writing, and Math in a distraction-free environment just like the real exam.
            </p>

            <div className="space-y-4 pt-4">
              {['Realistic Timer & Tools', 'Adaptive Difficulty Logic', 'Instant Performance Analytics'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Start Practice Test</h2>
              <p className="text-gray-500">Enter your details to begin a new session.</p>
            </div>

            <form onSubmit={handleStart} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <Input 
                  id="name"
                  placeholder="Kairat Nurtas" 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="jane@student.com" 
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg h-14 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200/50"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Begin Test <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-8">
              Made by the Ministry of Education
              <br />This is a practice environment.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
