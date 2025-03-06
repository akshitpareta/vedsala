"use client"

import { Heart, MoreHorizontal, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Article } from "@/types/news"
import { useState } from 'react'

interface TrendingArticleProps {
  article: Article
}

export function TrendingArticle({ article }: TrendingArticleProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 group">
      <div className="relative aspect-[4/3] w-16 sm:w-20 md:w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-1 left-1 bg-white/90 text-[6px] sm:text-[8px] px-1 py-0"
        >
          {article.category}
        </Badge>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-medium mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] text-muted-foreground mb-1">
          <span>{article.author.name}</span>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[8px] sm:text-xs text-muted-foreground">{article.publishedAt}</span>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5 sm:h-6 sm:w-6 hover:bg-accent"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-2 w-2 sm:h-3 sm:w-3 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5 sm:h-6 sm:w-6 hover:bg-accent"
            >
              <MoreHorizontal className="h-2 w-2 sm:h-3 sm:w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

