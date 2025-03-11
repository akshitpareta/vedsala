"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SearchParams {
  query: string;
  context?: any;
}

interface AISearchWithSuggestionsProps {
  onSearch: (params: SearchParams) => void;
  onSuggestionSelect?: (suggestion: string) => void;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

type Suggestion = {
  id: string;
  text: string;
  category: string;
};

export function AISearchWithSuggestions({
  onSearch,
  onSuggestionSelect,
  inputValue: externalInputValue,
  setInputValue: externalSetInputValue,
  isLoading = false,
  disabled = false,
  placeholder = "Search...",
  className
}: AISearchWithSuggestionsProps) {
  // Use internal state if external state is not provided
  const [internalInputValue, setInternalInputValue] = useState("");
  const inputValue = externalInputValue !== undefined ? externalInputValue : internalInputValue;
  const setInputValue = externalSetInputValue || setInternalInputValue;

  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Sample suggestions database
  const suggestionsDB: Suggestion[] = [
    // Education
    { id: "1", text: "How to improve study habits?", category: "Education" },
    { id: "2", text: "What are effective note-taking techniques?", category: "Education" },
    { id: "3", text: "How to prepare for exams efficiently?", category: "Education" },
    { id: "4", text: "What are the best resources for online learning?", category: "Education" },
    { id: "5", text: "How to stay motivated while studying?", category: "Education" },
    
    // Science
    { id: "6", text: "Explain quantum physics in simple terms", category: "Science" },
    { id: "7", text: "How does photosynthesis work?", category: "Science" },
    { id: "8", text: "What is the theory of relativity?", category: "Science" },
    { id: "9", text: "How do vaccines work?", category: "Science" },
    { id: "10", text: "What are black holes?", category: "Science" },
    
    // History
    { id: "11", text: "What caused World War I?", category: "History" },
    { id: "12", text: "Who was Alexander the Great?", category: "History" },
    { id: "13", text: "How did the Roman Empire fall?", category: "History" },
    { id: "14", text: "What was the Renaissance period?", category: "History" },
    { id: "15", text: "Explain the Industrial Revolution", category: "History" },
    
    // Mathematics
    { id: "16", text: "How to solve quadratic equations?", category: "Mathematics" },
    { id: "17", text: "What is calculus used for?", category: "Mathematics" },
    { id: "18", text: "Explain the Pythagorean theorem", category: "Mathematics" },
    { id: "19", text: "What is probability theory?", category: "Mathematics" },
    { id: "20", text: "How to understand statistics?", category: "Mathematics" },
    
    // Quizzes
    { id: "21", text: "Give me a quiz on world capitals", category: "Quizzes" },
    { id: "22", text: "Test my knowledge of periodic table", category: "Quizzes" },
    { id: "23", text: "Quiz me on famous literature", category: "Quizzes" },
    { id: "24", text: "Create a math challenge for me", category: "Quizzes" },
    { id: "25", text: "Test my knowledge of historical dates", category: "Quizzes" }
  ];
  
  // Filter suggestions based on input
  useEffect(() => {
    if (!inputValue.trim()) {
      // Show random suggestions when input is empty
      const randomSuggestions = [...suggestionsDB]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setFilteredSuggestions(randomSuggestions);
      return;
    }
    
    const filtered = suggestionsDB
      .filter(suggestion => 
        suggestion.text.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 3); // Limit to 3 suggestions
    
    setFilteredSuggestions(filtered);
  }, [inputValue]);
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFocused(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch({ query: inputValue });
      if (!externalSetInputValue) {
        setInputValue(''); // Only clear if using internal state
      }
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setIsFocused(false);
    
    if (onSuggestionSelect) {
      onSuggestionSelect(suggestion);
    } else {
      onSearch({ query: suggestion });
    }
  };
  
  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative glass-effect rounded-full shadow-sm">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
            disabled={disabled || isLoading}
            className="w-full bg-transparent py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-0 rounded-full"
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={disabled || isLoading}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Search className="h-3.5 w-3.5" />
            )}
            <span className="sr-only">Search</span>
          </Button>
        </div>
        
        {/* Suggestions dropdown */}
        <AnimatePresence>
          {isFocused && filteredSuggestions.length > 0 && (
            <motion.div
              ref={suggestionsRef}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 mt-1 rounded-lg bg-card shadow-lg z-10 overflow-hidden"
            >
              <div className="p-1.5">
                {filteredSuggestions.map((suggestion) => (
                  <motion.button
                    key={suggestion.id}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="w-full text-left px-2 py-1.5 rounded-md hover:bg-muted transition-colors flex items-start gap-1.5 group text-sm"
                    whileHover={{ x: 2 }}
                  >
                    <Sparkles className="h-3.5 w-3.5 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="text-sm font-medium">{suggestion.text}</p>
                      <p className="text-xs text-muted-foreground">{suggestion.category}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
} 