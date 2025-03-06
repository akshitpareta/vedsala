"use client"

import { Layout } from "@/components/layout"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Play,
  Pause,
  MoreHorizontal,
  Star,
  Clock,
  Users,
  BookOpen,
  Download,
  Share2,
  Heart,
  MessageCircle,
  ChevronDown,
  Filter,
  Sparkles,
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

const languages = [
  { name: "English", code: "en", flag: "🇬🇧", count: 245 },
  { name: "Spanish", code: "es", flag: "🇪🇸", count: 132 },
  { name: "French", code: "fr", flag: "🇫🇷", count: 89 },
  { name: "Chinese", code: "zh", flag: "🇨🇳", count: 67 },
]

const courses = [
  {
    id: 1,
    title: "Learning strategy: how instead of what",
    description:
      "This course discusses the main units and principles of the human nervous system that underlie our language...",
    rating: 4.8,
    reviews: 1250,
    level: "All levels",
    image: "/placeholder.svg?height=80&width=80",
    duration: "2h 15m",
    students: 12890,
    lastUpdated: "2 weeks ago",
    progress: 65,
  },
  {
    id: 2,
    title: "English for career development",
    description: "This course is designed for non-native English speakers who are interested in advancing their...",
    rating: 4.5,
    reviews: 890,
    level: "Intermediate",
    image: "/placeholder.svg?height=80&width=80",
    duration: "1h 45m",
    students: 8567,
    lastUpdated: "3 days ago",
    progress: 32,
  },
  {
    id: 3,
    title: "First steps in Chinese",
    description:
      "This is an elementary-level Korean language course consisting of 5 lessons, and covers 4 skills reading...",
    rating: 4.2,
    reviews: 675,
    level: "Beginner",
    image: "/placeholder.svg?height=80&width=80",
    duration: "3h 20m",
    students: 5432,
    lastUpdated: "1 week ago",
    progress: 89,
  },
]

const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Highest Rated", value: "rated" },
  { label: "Newest", value: "newest" },
  { label: "Longest Duration", value: "duration" },
]

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"]

export default function CoursesPage() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSort, setSelectedSort] = useState("popular")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const duration = 120 // 2 hours in seconds
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  const handleSortChange = (value: string) => {
    setIsLoading(true)
    setSelectedSort(value)
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <Layout>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold">Courses</h1>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9 w-[200px] bg-background" placeholder="Search courses..." />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Tabs defaultValue="all" className="w-auto">
                <TabsList className="h-9 bg-muted/50 p-1">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="active" className="text-xs">
                    Active
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="text-xs">
                    Completed
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Select value={selectedSort} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[140px] h-9 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-xs">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
              <div className="flex w-max space-x-2 p-2">
                {languages.map((lang) => (
                  <Button key={lang.code} variant="ghost" className="flex items-center gap-2 h-9">
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {lang.count}
                    </Badge>
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-2.5" />
            </ScrollArea>

            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className="text-xs"
                >
                  {level}
                </Button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-lg p-4 border">
                      <div className="flex gap-4">
                        <Skeleton className="w-20 h-20 rounded-lg" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {courses.map((course) => (
                    <motion.div
                      key={course.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="group relative bg-card rounded-lg p-4 border hover:border-primary transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold mb-1 truncate group-hover:text-primary transition-colors">
                              {course.title}
                            </h3>
                            <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{course.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{course.level}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(course.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">({course.reviews})</span>
                            </div>
                            <span className="text-xs text-muted-foreground">Updated {course.lastUpdated}</span>
                          </div>
                          {course.progress > 0 && (
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-primary font-medium">Progress</span>
                                <span className="text-muted-foreground">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-1" />
                            </div>
                          )}
                          <Button
                            className="w-full sm:w-auto text-xs sm:text-sm mt-2 sm:mt-0"
                            onClick={() => router.push(`/courses/${course.id}`)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-3/5">
            <div className="rounded-xl overflow-hidden bg-card border shadow-lg">
              <div className="relative aspect-video group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20121803-jjOnzcZRdmTVPujPtqYsAIkvV8GNGh.png"
                  alt="Course video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="h-16 w-16 rounded-full shadow-lg bg-primary/90 hover:bg-primary hover:scale-105 transition-all duration-300"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-primary-foreground" />
                    ) : (
                      <Play className="h-8 w-8 ml-1 text-primary-foreground" />
                    )}
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Progress value={(currentTime / duration) * 100} className="h-1 mb-4" />
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm">02:15 / 45:30</span>
                    <div className="flex items-center gap-4">
                      <Button size="sm" variant="ghost" className="h-8 w-8 text-white hover:text-white">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 text-white hover:text-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 text-white hover:text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        Featured
                      </Badge>
                      <Badge variant="secondary">Intermediate</Badge>
                      <Badge variant="outline" className="gap-1">
                        <Users className="h-3 w-3" />
                        12.5K students
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">(251 reviews)</span>
                    </div>
                    <h2 className="text-2xl font-bold">English for career development</h2>
                    <p className="text-muted-foreground">
                      In this course, you will learn about the job search, application, and interview process in the
                      United States, while comparing and contrasting the same process in your home country. This course
                      will also give you the opportunity to explore your global career path, while building your
                      vocabulary and improving your language skills to achieve your professional goals.
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Cortney McGregor</p>
                      <p className="text-sm text-muted-foreground">Professional English Teacher</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" className="h-8">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Course content</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        12 lectures
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        2 hours
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Introduction to the Course", duration: "02:29", isPlaying: true },
                      { title: "Getting Started with Career Planning", duration: "05:42" },
                      { title: "Understanding Job Market Basics", duration: "10:15" },
                    ].map((lecture, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
                          lecture.isPlaying ? "bg-primary/10 border border-primary/20" : "hover:bg-accent"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            lecture.isPlaying ? "bg-primary/20" : "bg-secondary"
                          }`}
                        >
                          <Play
                            className={`h-5 w-5 ${lecture.isPlaying ? "text-primary" : "text-secondary-foreground"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${lecture.isPlaying ? "text-primary" : ""}`}>{lecture.title}</p>
                          <p className="text-sm text-muted-foreground">{lecture.duration} mins</p>
                        </div>
                        {lecture.isPlaying && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Playing
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

