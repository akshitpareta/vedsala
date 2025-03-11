"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

export function BackButton({ 
  href = "/dashboard", 
  label = "Back",
  className,
  onClick
}: BackButtonProps) {
  if (onClick) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClick}
        className={cn("gap-1 px-2 h-8", className)}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only sm:not-sr-only sm:inline-block">{label}</span>
      </Button>
    );
  }
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      asChild
      className={cn("gap-1 px-2 h-8", className)}
    >
      <Link href={href}>
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only sm:not-sr-only sm:inline-block">{label}</span>
      </Link>
    </Button>
  );
} 