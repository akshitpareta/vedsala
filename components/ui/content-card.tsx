"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  footer?: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ContentCard({
  title,
  description,
  image,
  tags = [],
  footer,
  onClick,
  href,
  className,
}: ContentCardProps) {
  // Common content that will go inside the wrapper
  const cardContent = (
    <>
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        
        {description && (
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {footer && (
        <div className="border-t bg-muted/50 p-3">
          {footer}
        </div>
      )}
    </>
  );
  
  // Common className for all wrappers
  const cardClassName = cn(
    "group flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all",
    (href || onClick) && "cursor-pointer hover:border-primary/50 hover:shadow-md",
    className
  );
  
  // Return the appropriate wrapper based on props
  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }
  
  if (onClick) {
    return (
      <button 
        type="button" 
        onClick={onClick} 
        className={cardClassName}
      >
        {cardContent}
      </button>
    );
  }
  
  // Default div wrapper
  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
} 