"use client"

import { Heart, Share2, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Article } from "@/types/news"
import { useState } from "react"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [isLiked, setIsLiked] = useState(article.isLiked)

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-white/90 text-xs font-medium"
          >
            {article.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{article.excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          <span>{article.readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center text-xs text-muted-foreground">
          <img src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} className="w-6 h-6 rounded-full mr-2" />
          <span className="truncate">{article.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

