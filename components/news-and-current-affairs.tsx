"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "New UPSC Exam Pattern Announced",
    category: "UPSC",
    date: "2025-01-20",
    summary: "The Union Public Service Commission has announced changes to the Civil Services Examination pattern...",
  },
  {
    title: "SSC Releases CGL 2025 Notification",
    category: "SSC",
    date: "2025-01-18",
    summary:
      "The Staff Selection Commission has released the notification for Combined Graduate Level Examination 2025...",
  },
  {
    title: "Banking Sector to Recruit 50,000 Candidates",
    category: "Banking",
    date: "2025-01-15",
    summary: "Public sector banks announce a massive recruitment drive for various positions...",
  },
]

const currentAffairs = [
  {
    title: "India's New Foreign Policy Initiative",
    category: "International Relations",
    date: "2025-01-19",
    summary:
      "The Government of India launches a new foreign policy initiative aimed at strengthening ties with neighboring countries...",
  },
  {
    title: "Major Economic Reforms Announced",
    category: "Economy",
    date: "2025-01-17",
    summary: "Finance Ministry unveils a series of economic reforms to boost growth and attract foreign investment...",
  },
  {
    title: "Breakthrough in Renewable Energy Technology",
    category: "Science & Technology",
    date: "2025-01-16",
    summary: "Indian scientists develop a new, highly efficient solar cell technology...",
  },
]

export function NewsAndCurrentAffairs() {
  const [activeTab, setActiveTab] = useState("news")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>News & Current Affairs</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="current-affairs">Current Affairs</TabsTrigger>
          </TabsList>
          <TabsContent value="news">
            {newsItems.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2 my-1">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="current-affairs">
            {currentAffairs.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2 my-1">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
        <div className="mt-4">
          <Button asChild>
            <Link href="/news">
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

