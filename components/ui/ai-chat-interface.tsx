"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface AIChatInterfaceProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (content: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  suggestions?: string[];
  className?: string;
  placeholder?: string;
  showTimestamps?: boolean;
}

export function AIChatInterface({
  messages,
  isLoading,
  onSendMessage,
  inputValue,
  setInputValue,
  suggestions = [],
  className,
  placeholder = "Type your message...",
  showTimestamps = false
}: AIChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Handle scroll position to show/hide scroll button
  useEffect(() => {
    const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
    if (!scrollArea) return;
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    };
    
    scrollArea.addEventListener('scroll', handleScroll);
    return () => scrollArea.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);
  
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage(suggestion);
  };
  
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Messages area */}
      <ScrollArea className="flex-1 p-2 md:p-3">
        <div className="space-y-3 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-full max-w-3xl mx-auto",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "flex gap-2 max-w-[85%]",
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <Avatar className="h-7 w-7 mt-0.5 flex-shrink-0">
                  {message.role === "assistant" ? (
                    <>
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
                      <AvatarImage src="/ai-avatar.png" alt="AI Assistant" />
                    </>
                  ) : (
                    <AvatarFallback className="bg-muted text-xs">U</AvatarFallback>
                  )}
                </Avatar>
                
                <div>
                  <div
                    className={cn(
                      "rounded-lg p-2",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="whitespace-pre-wrap text-sm">
                      {message.content}
                    </div>
                  </div>
                  
                  {showTimestamps && (
                    <div className="mt-1 text-xs text-muted-foreground">
                      {format(new Date(message.timestamp), 'h:mm a')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex w-full max-w-3xl mx-auto justify-start">
              <div className="flex gap-2">
                <Avatar className="h-7 w-7 mt-0.5 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-2">
                  <div className="flex items-center gap-1.5">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Anchor for auto-scroll */}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Scroll to bottom button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 right-3 z-10"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 rounded-full shadow-md"
              onClick={scrollToBottom}
            >
              <ChevronDown className="h-3.5 w-3.5" />
              <span className="sr-only">Scroll to bottom</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Suggestions */}
      {messages.length > 0 && suggestions.length > 0 && (
        <div className="px-3 py-1.5">
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-auto py-1 px-2 text-xs bg-background"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Sparkles className="mr-1 h-3 w-3 text-primary" />
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="border-t bg-background p-3">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              className="min-h-[40px] w-full resize-none rounded-md py-2 pr-10 text-sm"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isLoading}
              className="absolute bottom-1 right-1 h-7 w-7"
            >
              <Send className="h-3.5 w-3.5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
        <div className="mt-1 text-xs text-center text-muted-foreground">
          AI responses are generated and may not always be accurate.
        </div>
      </div>
    </div>
  );
} 