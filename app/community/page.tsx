"use client"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronRight,
  Plus,
  Search,
  MessageSquare,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Star,
  Sparkles,
  TrendingUp,
  BookOpen,
  Zap,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

const categories = [
  "All Groups",
  "Study Groups",
  "Subject Discussions",
  "Exam Preparation",
  "Career Guidance",
  "Research",
  "Projects",
]

const featuredGroups = [
  {
    id: 1,
    title: "UPSC Preparation 2025",
    description: "Join fellow aspirants preparing for UPSC Civil Services Examination 2025",
    members: 1250,
    activity: "Very Active",
    category: "Exam Preparation",
    lastActive: "2m ago",
    image: "/placeholder.svg?height=200&width=400",
    verified: true,
    trending: true,
  },
  {
    id: 2,
    title: "Computer Science Hub",
    description: "Discuss programming, algorithms, and computer science concepts",
    members: 890,
    activity: "Active",
    category: "Subject Discussions",
    lastActive: "5m ago",
    image: "/placeholder.svg?height=200&width=400",
    trending: true,
  },
  {
    id: 3,
    title: "Research Methodology",
    description: "Learn and discuss research methods, paper writing, and publications",
    members: 567,
    activity: "Moderate",
    category: "Research",
    lastActive: "15m ago",
    image: "/placeholder.svg?height=200&width=400",
    verified: true,
  },
]

const recommendedGroups = [
  {
    id: 4,
    title: "Data Science Projects",
    members: 456,
    category: "Projects",
    lastActive: "1h ago",
    image: "/placeholder.svg?height=100&width=100",
    description: "Collaborate on real-world data science projects and expand your portfolio",
  },
  {
    id: 5,
    title: "Economics Study Circle",
    members: 789,
    category: "Study Groups",
    lastActive: "30m ago",
    image: "/placeholder.svg?height=100&width=100",
    description: "Discuss economic theories, current affairs, and prepare for exams together",
  },
  {
    id: 6,
    title: "Career in IT",
    members: 1023,
    category: "Career Guidance",
    lastActive: "45m ago",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
    description: "Get insights into IT career paths, job opportunities, and industry trends",
  },
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Groups")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-background">
          <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Discover Your Learning Community
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Connect, collaborate, and grow with peers from around the world.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" className="gap-2">
                  Explore Groups <Sparkles className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Create New Group <Plus className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Categories */}
          <div className="mb-8 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search groups..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured Groups */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Featured Groups</h2>
              <Button variant="ghost" className="gap-2">
                View all <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {featuredGroups.map((group) => (
                  <motion.div
                    key={group.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden h-full group">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={group.image || "/placeholder.svg"}
                          alt={group.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-primary/20 text-primary">
                              {group.category}
                            </Badge>
                            {group.trending && (
                              <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                            {group.title}
                            {group.verified && (
                              <Star className="inline-block h-4 w-4 ml-1 text-yellow-500 fill-yellow-500" />
                            )}
                          </h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{group.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span>{group.members}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MessageSquare className="h-4 w-4" />
                              <span>{group.activity}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{group.lastActive}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Recommended Groups */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Recommended for You</h2>
              <Button variant="ghost" className="gap-2">
                View all <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {recommendedGroups.map((group) => (
                  <motion.div
                    key={group.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 rounded-lg">
                            <AvatarImage src={group.image} alt={group.title} />
                            <AvatarFallback>GP</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
                                {group.title}
                              </h3>
                              {group.verified && (
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {group.members}
                              </span>
                              <span>•</span>
                              <span>{group.category}</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                            onClick={() => router.push(`/community/${group.id}`)}
                          >
                            Join
                          </Button>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{group.description}</p>
                        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Active {group.lastActive}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            Join the discussion
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Community Highlights */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Community Highlights</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Top Study Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {["UPSC Notes Collection", "Data Structures Cheat Sheet", "Economics Crash Course"].map(
                      (resource, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span>{resource}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Trending Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {["AI in Education", "Climate Change Solutions", "Cryptocurrency Future"].map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Active Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(5)].map((_, index) => (
                      <Avatar key={index} className="h-8 w-8">
                        <AvatarImage src={`/placeholder.svg?text=${index + 1}`} />
                        <AvatarFallback>U{index + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    <Button variant="outline" size="sm" className="rounded-full">
                      +120 more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

