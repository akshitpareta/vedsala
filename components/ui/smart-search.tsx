"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface UserContext {
  educationLevel?: string;
  interests?: string[];
  location?: string;
}

interface SmartSearchProps {
  onSearch: (params: { query: string; context?: UserContext }) => void;
  userContext?: UserContext | null;
  placeholder?: string;
  className?: string;
}

export function SmartSearch({
  onSearch,
  userContext,
  placeholder = "What would you like to learn today?",
  className
}: SmartSearchProps) {
  const [query, setQuery] = useState("");
  const [localContext, setLocalContext] = useState<UserContext | null>(null);
  const [showContextForm, setShowContextForm] = useState(false);
  
  // Initialize local context from props
  useEffect(() => {
    if (userContext) {
      setLocalContext(userContext);
    }
  }, [userContext]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    // If no context available and query is substantive, show context form
    if (!localContext && query.length > 3) {
      setShowContextForm(true);
      return;
    }
    
    // Process search with context
    onSearch({
      query,
      context: localContext || undefined
    });
  };
  
  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        {/* Search input */}
        <div className="relative glass-effect rounded-full">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="border-0 bg-transparent pl-4 pr-12 py-6 focus:ring-0 text-base sm:text-lg placeholder:text-muted-foreground"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </form>
      
      {/* Context collection modal */}
      <ContextCollectionModal
        open={showContextForm}
        onSubmit={(context) => {
          setLocalContext(context);
          setShowContextForm(false);
          onSearch({ query, context });
        }}
        onCancel={() => setShowContextForm(false)}
      />
    </div>
  );
}

interface ContextModalProps {
  open: boolean;
  onSubmit: (context: UserContext) => void;
  onCancel: () => void;
}

function ContextCollectionModal({ 
  open, 
  onSubmit, 
  onCancel 
}: ContextModalProps) {
  const [educationLevel, setEducationLevel] = useState("");
  const [location, setLocation] = useState("");
  
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Help us personalize your results</DialogTitle>
          <DialogDescription>
            Tell us a bit about yourself so we can tailor content to your needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="education">Education Level</Label>
            <Select value={educationLevel} onValueChange={setEducationLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select your education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school">High School</SelectItem>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="graduate">Graduate</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., United States, India, etc."
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>Skip</Button>
          <Button onClick={() => onSubmit({
            educationLevel,
            location
          })}>
            Personalize My Results
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 