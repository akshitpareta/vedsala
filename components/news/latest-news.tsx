"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { NewsCard } from "./news-card"

const latestNews = [
  {
    title: "Art Gallery Showcases Emerging Local Artists",
    description: "A curated exhibition featuring breakthrough works from the city's most promising artistic talents.",
    image: "/images/news/art-gallery.jpg",
    category: "Arts",
    readTime: "3 min read",
    href: "/news/art-exhibition",
    author: {
      name: "Emma Wilson",
      avatar: "/images/avatars/emma.jpg"
    }
  },
  {
    title: "Innovative Startup Addresses Climate Change Solutions",
    description: "Tech company launches groundbreaking platform for tracking and reducing carbon emissions.",
    image: "/images/news/startup.jpg",
    category: "Business",
    readTime: "5 min read",
    href: "/news/startup-climate",
    author: {
      name: "Alex Rivera",
      avatar: "/images/avatars/alex.jpg"
    }
  },
  {
    title: "Tech Company Unveils Latest Smartphone Innovation",
    description: "Revolutionary features and advanced AI capabilities set new standards in mobile technology.",
    image: "/images/news/tech.jpg",
    category: "Technology",
    readTime: "7 min read",
    href: "/news/smartphone-launch",
    author: {
      name: "David Kim",
      avatar: "/images/avatars/david.jpg"
    }
  }
]

export function LatestNews() {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold">Latest Updates</CardTitle>
            <p className="text-muted-foreground">Breaking news and recent developments</p>
          </CardHeader>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2">
            View all updates
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-6">
          {latestNews.map((news, index) => (
            <NewsCard
              key={index}
              {...news}
              layout="horizontal"
            />
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4 sm:hidden">
          View all updates
        </Button>
      </div>
    </section>
  )
} 