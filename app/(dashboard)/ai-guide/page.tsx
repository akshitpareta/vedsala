"use client"

import { useEffect, useState, useRef } from "react";
import { AISearchWithSuggestions, SearchParams } from "@/components/ui/ai-search-with-suggestions";
import { AIChatInterface } from "@/components/ui/ai-chat-interface";
import { useAIService } from "@/lib/ai-service";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Lightbulb, Sparkles, Book, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function AIGuidePage() {
  const { loading: isLoading, error, generateResponse } = useAIService();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  
  // Check if online
  const [isOnline, setIsOnline] = useState(true);
  
  useEffect(() => {
    // Check if user has seen welcome dialog before
    const hasSeenDialog = localStorage.getItem('hasSeenAIGuideDialog');
    if (!hasSeenDialog) {
      setShowWelcomeDialog(true);
      // Set flag in localStorage to not show again
      localStorage.setItem('hasSeenAIGuideDialog', 'true');
    }
    
    // Add welcome message if no messages
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          content: "👋 Welcome to the AI Learning Assistant! I'm here to help with your educational journey. Ask any question or choose from the suggestions below.",
          role: "assistant",
          timestamp: new Date()
        }
      ]);
    }
    
    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    // Online status
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };
    
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, [messages.length]);

  const onSendMessage = async (content: string) => {
    // Don't send empty messages
    if (!content.trim()) return;
    
    // Create new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date()
    };
    
    // Add to messages
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input
    setInputValue("");
    
    try {
      // Get AI response
      const response = await generateResponse(content);
      
      // Create assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text || "I'm sorry, I couldn't generate a response. Please try again.",
        role: "assistant",
        timestamp: new Date()
      };
      
      // Add to messages
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      // Handle error
      console.error("Error generating response:", err);
      
      // Create error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your request. Please try again later.",
        role: "assistant",
        timestamp: new Date()
      };
      
      // Add to messages
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  
  // Common subjects for quick access
  const commonSubjects = [
    { name: "Mathematics", icon: <Book className="h-4 w-4" /> },
    { name: "Physics", icon: <Sparkles className="h-4 w-4" /> },
    { name: "Computer Science", icon: <Brain className="h-4 w-4" /> },
    { name: "History", icon: <Book className="h-4 w-4" /> },
    { name: "Biology", icon: <Lightbulb className="h-4 w-4" /> }
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-background relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 -z-10" />
      
      {/* Offline warning */}
      {!isOnline && (
        <div className="bg-destructive/20 text-destructive p-1 text-sm text-center">
          You are currently offline. Some features may be limited.
        </div>
      )}
      
      {/* Page header - Reduced padding */}
      <div className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="flex h-12 items-center px-3 md:px-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 mr-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          
          <PageHeader
            title="AI Learning Assistant"
            description="Get help with any educational topic"
            className="py-1"
            showBackButton={true}
            backHref="/dashboard"
            backLabel="Back"
          />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Collapsible */}
        <div 
          className={cn(
            "border-r bg-background/95 backdrop-blur-sm",
            "transition-all duration-300 ease-in-out",
            isSidebarOpen ? "w-64" : "w-0",
            isMobile ? "absolute z-20 h-full" : ""
          )}
        >
          <div className="flex flex-col h-full overflow-hidden">
            <div className="p-3">
              <AISearchWithSuggestions 
                onSearch={(params: SearchParams) => {
                  onSendMessage(params.query);
                  if (isMobile) {
                    setIsSidebarOpen(false);
                  }
                }}
                placeholder="Ask anything..."
              />
            </div>
            
            <Separator />
            
            <div className="flex-1 overflow-auto p-3">
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium mb-2">Common Subjects</h3>
                  <div className="grid grid-cols-1 gap-1">
                    {commonSubjects.map((subject) => (
                      <Button
                        key={subject.name}
                        variant="ghost"
                        className="justify-start h-8 text-sm"
                        onClick={() => {
                          onSendMessage(`Help me learn about ${subject.name}`);
                          if (isMobile) {
                            setIsSidebarOpen(false);
                          }
                        }}
                      >
                        {subject.icon}
                        <span className="ml-2">{subject.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Learning Resources</h3>
                  <div className="space-y-2">
                    <Card className="p-2">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Study Strategies</h4>
                        <p className="text-xs text-muted-foreground">Effective techniques for better learning</p>
                        <Button 
                          variant="link" 
                          className="h-6 p-0 text-xs" 
                          onClick={() => onSendMessage("What are the most effective study strategies?")}
                        >
                          Explore <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-2">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">Practice Exercises</h4>
                        <p className="text-xs text-muted-foreground">Improve skills with guided practice</p>
                        <Button 
                          variant="link" 
                          className="h-6 p-0 text-xs"
                          onClick={() => onSendMessage("Give me practice exercises for my current study topic")}
                        >
                          Get started <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile sidebar overlay */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-background/80 z-10"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Chat interface */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {isMobile && isSidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-30 h-8 w-8"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          )}
          
          {/* Toggle sidebar button for non-mobile view - Visible when sidebar is closed */}
          {!isMobile && !isSidebarOpen && (
            <Button
              variant="outline"
              size="icon"
              className="absolute top-3 left-3 z-30 h-8 w-8 rounded-full opacity-70 hover:opacity-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Open sidebar</span>
            </Button>
          )}
          
          <AIChatInterface
            messages={messages}
            isLoading={isLoading}
            onSendMessage={onSendMessage}
            inputValue={inputValue}
            setInputValue={setInputValue}
            suggestions={[
              "How do I solve quadratic equations?",
              "Explain photosynthesis in simple terms",
              "What are the key events of World War II?",
              "Help me understand JavaScript promises"
            ]}
          />
        </div>
      </div>
      
      {/* Welcome dialog - Only shown first time */}
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome to the AI Learning Assistant</DialogTitle>
            <DialogDescription>
              Your personal AI tutor for all educational topics. Ask questions, get explanations, and improve your understanding.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-3">
            <p className="text-sm">Here are some ways the AI Learning Assistant can help you:</p>
            
            <div className="grid gap-2 sm:grid-cols-2">
              <Card className="p-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Brain className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Explain Concepts</h3>
                    <p className="text-xs text-muted-foreground">Break down complex topics</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Lightbulb className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Answer Questions</h3>
                    <p className="text-xs text-muted-foreground">Get help with homework</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Book className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Study Guides</h3>
                    <p className="text-xs text-muted-foreground">Create personalized plans</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Practice Problems</h3>
                    <p className="text-xs text-muted-foreground">Test your knowledge</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => setShowWelcomeDialog(false)}>
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 