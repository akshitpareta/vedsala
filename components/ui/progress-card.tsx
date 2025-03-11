"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Award } from "lucide-react";
import { useEffect, useState } from "react";

const progressCardVariants = cva(
  "rounded-xl p-5 transition-shadow hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        highlight: "bg-primary/10 text-primary-foreground border border-primary/20",
        subdued: "bg-muted/50 text-muted-foreground",
        glass: "glass-effect"
      },
      size: {
        sm: "p-3",
        default: "p-5",
        lg: "p-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

interface ProgressCardProps extends VariantProps<typeof progressCardVariants> {
  title: string;
  description?: string;
  progress: number; // 0-100
  totalItems?: number;
  completedItems?: number;
  estimatedTime?: string;
  className?: string;
  showAnimation?: boolean;
}

export function ProgressCard({
  title,
  description,
  progress,
  totalItems,
  completedItems,
  estimatedTime,
  className,
  variant,
  size,
  showAnimation = true
}: ProgressCardProps) {
  // For animated progress bar
  const [displayProgress, setDisplayProgress] = useState(0);
  
  useEffect(() => {
    if (!showAnimation) {
      setDisplayProgress(progress);
      return;
    }
    
    // Animate progress from 0 to actual value
    let start = 0;
    const end = progress;
    const duration = 1000; // 1 second animation
    const step = 10; // Update every 10ms
    const increment = end * step / duration;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayProgress(start);
    }, step);
    
    return () => clearInterval(timer);
  }, [progress, showAnimation]);

  // Calculate status based on progress
  const status = progress === 100 ? "completed" : progress > 0 ? "in-progress" : "not-started";

  return (
    <div className={cn(progressCardVariants({ variant, size }), className)}>
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{title}</h3>
          {status === "completed" && (
            <span className="text-success inline-flex items-center gap-1 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Completed
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        
        <div className="pt-1">
          <Progress value={displayProgress} className="h-2" />
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-sm text-muted-foreground">
          {totalItems !== undefined && completedItems !== undefined && (
            <div className="inline-flex items-center gap-1">
              <Award className="h-4 w-4" />
              <span>
                {completedItems}/{totalItems} items
              </span>
            </div>
          )}
          
          {estimatedTime && (
            <div className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 