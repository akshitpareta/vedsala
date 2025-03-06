"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { NewsCard } from "./news-card"

const trendingNews = [
  {
    title: "Record-Breaking Performance Leads The Swimmer To A Victory, Securing Their Place in History",
    description: "An extraordinary display of athleticism and determination as the swimmer breaks multiple records in a single competition.",
    image: "/images/news/swimming.jpg",
    category: "Sports",
    readTime: "5 min read",
    href: "/news/swimming-victory",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/avatars/sarah.jpg"
    }
  },
  {
    title: "Innovative Farming Technology Transforms Local Agriculture Practices",
    description: "New sustainable farming methods are revolutionizing how local farmers approach crop cultivation and resource management.",
    image: "/images/news/farming.jpg",
    category: "Technology",
    readTime: "4 min read",
    href: "/news/farming-innovation",
    author: {
      name: "Michael Chen",
      avatar: "/images/avatars/michael.jpg"
    }
  },
  {
    title: "Cultural Festival Highlights Diversity Through Food and Performances",
    description: "A vibrant celebration of multicultural traditions brings communities together through shared experiences.",
    image: "/images/news/festival.jpg",
    category: "Culture",
    readTime: "6 min read",
    href: "/news/cultural-festival",
    author: {
      name: "Priya Patel",
      avatar: "/images/avatars/priya.jpg"
    }
  }
]

export function TrendingNews() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold">Trending News</CardTitle>
            <p className="text-muted-foreground">Stay updated with the most popular stories</p>
          </CardHeader>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2">
            See all news
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingNews.map((news, index) => (
            <NewsCard
              key={index}
              {...news}
              featured={index === 0}
            />
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4 sm:hidden">
          See all news
        </Button>
      </div>
    </section>
  )
} 