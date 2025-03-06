"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LogOut, User, Users, BookOpen, TrendingUp, Plus, ChevronDown, 
  ArrowRight, Clock, Target, Calendar, Bell, Brain, Star,
  BarChart as ChartIcon, Activity, CheckCircle, FileText,
  Search, Sparkles, GraduationCap, Building2, MapPin,
  Trophy, Timer, Zap, Gift, MessageCircle, Lightbulb,
  Rocket, Medal, Target as TargetIcon, Flame, Book,
  Puzzle, Network, Microscope, Code, Laptop, Glasses,
  Briefcase, Cpu, Database, Share2, Heart, ThumbsUp,
  Cloud, Filter, SortAsc, MessageSquare, Eye, LayoutGrid, Table, List
} from "lucide-react"
import { BarChart, LineChart } from "@/components/ui/chart"
import { FloatingActionBar } from "@/components/floating-action-bar"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadialProgress } from "@/components/ui/radial-progress"
import { AreaChart } from "@/components/ui/area-chart"
import { HeatMap } from "@/components/ui/heat-map"
import { useToast } from "@/components/ui/use-toast"

const insights = {
  studentsReached: "5,192,879",
  newEnrollments: "+2,953",
  engagementRate: "98.2%",
  totalCourses: "339",
  completedTasks: "147",
  targetCompletion: "89.75%",
  daysInTraining: "257",
  completedCourses: "31",
  totalHours: "286",
  certificates: "12"
}

const lineChartData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 90 },
  { name: "Apr", value: 170 },
  { name: "May", value: 130 },
  { name: "Jun", value: 160 },
]

const barChartData = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 140 },
  { name: "Wed", value: 120 },
  { name: "Thu", value: 180 },
  { name: "Fri", value: 160 },
]

const activityData = {
  classes: 687,
  posts: 189,
  events: 24
}

const recentCourses = [
  {
    title: "UI/UX Design Fundamentals",
    progress: 75,
    lastAccessed: "2 hours ago",
    image: "https://via.placeholder.com/100"
  },
  {
    title: "Frontend Development",
    progress: 45,
    lastAccessed: "Yesterday",
    image: "https://via.placeholder.com/100"
  },
  {
    title: "React Advanced Patterns",
    progress: 90,
    lastAccessed: "3 days ago",
    image: "https://via.placeholder.com/100"
  }
]

const topMentors = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Expert",
    rating: 4.9,
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    rating: 4.8,
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Emma Wilson",
    role: "React Specialist",
    rating: 4.7,
    image: "https://via.placeholder.com/100"
  }
]

// Learning paths suggestions
const learningPaths = [
  {
    id: "gov-exam",
    title: "California Government Officer",
    icon: Building2,
    description: "Prepare for California Civil Service Examinations",
    topics: ["Public Administration", "California Law", "Civil Service Rules"]
  },
  {
    id: "undergrad",
    title: "Undergraduate Studies",
    icon: GraduationCap,
    description: "College degree preparation and courses",
    topics: ["Major Subjects", "General Education", "Research Skills"]
  },
  // Add more paths as needed
]

// Add new data structures
const achievements = [
  {
    title: "Quick Learner",
    description: "Completed 5 courses in a week",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Top Performer",
    description: "Ranked in top 3% this month",
    icon: Trophy,
    color: "text-purple-500"
  },
  {
    title: "Consistent",
    description: "30 days study streak",
    icon: Timer,
    color: "text-green-500"
  }
]

const nearbyEvents = [
  {
    title: "Tech Meetup",
    location: "San Francisco",
    date: "Mar 15",
    attendees: 45,
    type: "Networking"
  },
  {
    title: "Code Workshop",
    location: "Online",
    date: "Mar 18",
    attendees: 120,
    type: "Workshop"
  }
]

// AI Recommendation System
const aiRecommendations = {
  personalizedPaths: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      confidence: 0.92,
      reason: "Based on your interest in data structures and algorithms",
      icon: Brain,
      skills: ["Python", "TensorFlow", "Neural Networks"],
      estimatedTime: "6 months"
    },
    {
      id: "cloud-arch",
      title: "Cloud Architecture",
      confidence: 0.87,
      reason: "Complements your backend development skills",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes"],
      estimatedTime: "4 months"
    }
  ],
  skillGaps: [
    {
      skill: "System Design",
      importance: 0.9,
      currentLevel: 0.4,
      resources: ["System Design Interview", "Distributed Systems Course"]
    },
    {
      skill: "Data Science",
      importance: 0.85,
      currentLevel: 0.3,
      resources: ["Statistics Fundamentals", "Python for Data Science"]
    }
  ]
}

// Anomaly Detection Data
const anomalyMetrics = {
  learningPace: {
    current: 2.3,
    average: 1.8,
    isAnomaly: true,
    trend: "positive",
    details: "Learning 28% faster than your usual pace"
  },
  focusAreas: {
    frontend: {
      hoursSpent: 45,
      efficiency: 0.92,
      isAnomaly: true,
      insight: "Exceptional progress in React concepts"
    },
    backend: {
      hoursSpent: 32,
      efficiency: 0.78,
      isAnomaly: false,
      insight: "Consistent with your normal learning pattern"
    }
  },
  engagementScores: [
    { date: "2024-03-01", score: 85, isAnomaly: false },
    { date: "2024-03-02", score: 88, isAnomaly: false },
    { date: "2024-03-03", score: 95, isAnomaly: true },
    { date: "2024-03-04", score: 92, isAnomaly: false },
    { date: "2024-03-05", score: 89, isAnomaly: false }
  ]
}

// Interactive Features Data
const interactiveElements = {
  challenges: [
    {
      id: "algo-1",
      title: "Algorithm Challenge",
      difficulty: "Medium",
      points: 100,
      timeLimit: "30 mins",
      participants: 234,
      type: "Coding"
    },
    {
      id: "quiz-1",
      title: "Architecture Quiz",
      difficulty: "Hard",
      points: 150,
      timeLimit: "45 mins",
      participants: 156,
      type: "Quiz"
    }
  ],
  peerReviews: [
    {
      id: "review-1",
      projectName: "E-commerce API",
      reviewer: "John Doe",
      rating: 4.5,
      feedback: "Great code structure and documentation"
    }
  ],
  practiceProjects: [
    {
      id: "proj-1",
      title: "Build a REST API",
      difficulty: "Intermediate",
      estimatedHours: 8,
      technologies: ["Node.js", "Express", "MongoDB"],
      mentorAvailable: true
    }
  ]
}

// Enhanced Learning Path Visualization
const learningPathVisualization = {
  currentNode: "frontend-basics",
  completed: ["html-css", "javascript-core", "git-basics"],
  inProgress: ["react-fundamentals"],
  next: ["advanced-react", "vue-basics", "angular-intro"],
  dependencies: [
    { from: "html-css", to: "javascript-core" },
    { from: "javascript-core", to: "react-fundamentals" },
    { from: "react-fundamentals", to: "advanced-react" }
  ],
  milestones: [
    {
      id: "frontend-dev",
      title: "Frontend Developer",
      progress: 0.65,
      requiredSkills: ["HTML", "CSS", "JavaScript", "React"],
      achievedSkills: ["HTML", "CSS", "JavaScript"],
      certificationType: "Professional"
    }
  ]
}

// Community Features
const communityData = {
  studyGroups: [
    {
      id: "group-1",
      name: "React Masters",
      members: 128,
      activeTopic: "Advanced Hooks",
      nextMeeting: "2024-03-15T10:00:00Z"
    }
  ],
  discussions: [
    {
      id: "disc-1",
      title: "Best Practices for State Management",
      participants: 45,
      replies: 23,
      lastActive: "2024-03-10T15:30:00Z"
    }
  ],
  mentorship: {
    availableMentors: 12,
    activePrograms: 8,
    popularTopics: ["Web Development", "System Design", "Cloud Computing"]
  }
}

interface StudyGroup {
  id: string
  name: string
  members: number
  activeTopic: string
  nextMeeting: string
}

interface Discussion {
  id: string
  title: string
  participants: number
  replies: number
  lastActive: string
}

export default function DashboardPage() {
  const { user, isGuest, logout } = useAuth()
  const [learningPath, setLearningPath] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [viewMode, setViewMode] = useState("board")

  // Function to adapt content based on learning path
  const getAdaptedContent = (pathId: string) => {
    switch(pathId) {
      case "gov-exam":
        return {
          courses: [
            {
              title: "California Civil Service Exam Prep",
              progress: 45,
              lastAccessed: "1 hour ago",
              image: "/placeholder.svg"
            },
            {
              title: "Public Administration Fundamentals",
              progress: 60,
              lastAccessed: "Yesterday",
              image: "/placeholder.svg"
            },
            {
              title: "Government Ethics & Procedures",
              progress: 30,
              lastAccessed: "2 days ago",
              image: "/placeholder.svg"
            }
          ],
          schedule: [
            { time: "9:00 AM", title: "Mock Exam: Civil Service", type: "Exam", duration: "3h" },
            { time: "2:00 PM", title: "CA Gov Structure Review", type: "Class", duration: "1h 30m" },
            { time: "4:30 PM", title: "Practice Interview", type: "Workshop", duration: "1h" }
          ]
        }
      // Add more cases for other paths
      default:
        return {
          courses: recentCourses,
          schedule: [
            { time: "10:00 AM", title: "JavaScript Basics", type: "Class", duration: "1h 30m" },
            { time: "2:00 PM", title: "UI/UX Workshop", type: "Workshop", duration: "2h" },
            { time: "4:00 PM", title: "React Advanced", type: "Class", duration: "1h" }
          ]
        }
    }
  }

  const currentContent = learningPath ? getAdaptedContent(learningPath) : null

  return (
    <div className="min-h-screen bg-[#0A0F17] text-white overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-4 py-6 md:p-6 space-y-8 pb-20 sm:pb-6">
        {/* Global Search Bar */}
        <div className="w-full">
          <div className="relative">
            <div className={cn(
              "p-4 rounded-xl bg-card/40 border border-border transition-all duration-300",
              isSearching ? "ring-2 ring-primary" : ""
            )}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  <h2 className="text-base sm:text-lg font-medium">What do you want to learn today?</h2>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="w-full pl-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  placeholder="Search courses, skills, or learning paths..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearching(true)}
                  onBlur={() => setIsSearching(false)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location & Profile Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
          <div>
              <h2 className="text-lg font-medium">San Francisco</h2>
              <p className="text-sm text-muted-foreground">within 20 miles</p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button variant="outline" className="border-border hover:bg-accent w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Ongoing Courses</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold">5</h3>
                  <div className="flex items-center text-primary text-sm">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Active
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Completed Courses</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold">37</h3>
                  <div className="flex items-center text-green-500 text-sm">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Done
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Certificates Earned</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold">25</h3>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Trophy className="h-4 w-4 mr-1" />
                    Earned
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Hours Spent</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold">705</h3>
                  <div className="flex items-center text-primary text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    Total
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* View Mode Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <ScrollArea className="w-full sm:w-auto">
            <div className="flex items-center bg-card/40 rounded-xl border border-border p-1 min-w-max">
              {[
                { id: "board", icon: LayoutGrid, label: "Board" },
                { id: "table", icon: Table, label: "Table" },
                { id: "timeline", icon: Calendar, label: "Timeline" },
                { id: "list", icon: List, label: "List" }
              ].map((mode) => (
                <Button
                  key={mode.id}
                  variant={viewMode === mode.id ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "flex items-center gap-2 rounded-lg whitespace-nowrap",
                    viewMode === mode.id ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                  )}
                  onClick={() => setViewMode(mode.id)}
                >
                  <mode.icon className="h-4 w-4" />
                  {mode.label}
                </Button>
              ))}
          </div>
          </ScrollArea>
          <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
            <Button variant="outline" className="border-border hover:bg-accent w-full sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="border-border hover:bg-accent w-full sm:w-auto">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="w-full">
          <ScrollArea className="w-full">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-card/40 border-border w-full flex">
                <TabsTrigger value="overview" className="flex-1 min-w-[100px]">Overview</TabsTrigger>
                <TabsTrigger value="courses" className="flex-1 min-w-[100px]">Courses</TabsTrigger>
                <TabsTrigger value="achievements" className="flex-1 min-w-[100px]">Achievements</TabsTrigger>
                <TabsTrigger value="community" className="flex-1 min-w-[100px]">Community</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8 mt-8">
                {/* Course Topics Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors col-span-1 lg:col-span-2">
                    <CardHeader className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <ChartIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Course Topics</CardTitle>
                            <p className="text-sm text-muted-foreground">Distribution of your learning focus</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center justify-center">
                          <div className="w-32 h-32 sm:w-48 sm:h-48 relative">
                            <RadialProgress value={100} size="md" className="absolute inset-0" />
                            <RadialProgress value={70} size="md" className="absolute inset-0 rotate-45" color="text-purple-500" />
                            <RadialProgress value={40} size="md" className="absolute inset-0 rotate-90" color="text-blue-500" />
                            <RadialProgress value={20} size="md" className="absolute inset-0 rotate-180" color="text-green-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-bold">42</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">Total Courses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <span>Design</span>
                              </div>
                              <span>40%</span>
                            </div>
                            <Progress value={40} className="h-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-purple-500" />
                                <span>Code</span>
                              </div>
                              <span>30%</span>
                            </div>
                            <Progress value={30} className="h-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span>Business</span>
                              </div>
                              <span>20%</span>
                            </div>
                            <Progress value={20} className="h-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span>Data</span>
                              </div>
                              <span>10%</span>
                            </div>
                            <Progress value={10} className="h-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Learning Goals</CardTitle>
                            <p className="text-sm text-muted-foreground">Track your progress</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        {[
                          { name: "Complete Frontend Path", progress: 75, total: "12/16 Lessons" },
                          { name: "Master React", progress: 60, total: "20/30 Lessons" },
                          { name: "Learn Data Analysis", progress: 40, total: "8/20 Lessons" }
                        ].map((goal, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm sm:text-base">{goal.name}</h4>
                              <span className="text-xs sm:text-sm text-muted-foreground">{goal.total}</span>
                            </div>
                            <Progress value={goal.progress} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Popular Courses */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-semibold">Popular Courses</h2>
                    <Button variant="ghost" className="hover:bg-accent w-full sm:w-auto">View All</Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Create 3D With Blender",
                        category: "DESIGN",
                        price: "$400",
                        lessons: "16 Lessons",
                        duration: "48 Hours",
                        image: "https://via.placeholder.com/400x300"
                      },
                      {
                        title: "Digital Marketing",
                        category: "BUSINESS",
                        price: "$100",
                        lessons: "30 Lessons",
                        duration: "48 Hours",
                        image: "https://via.placeholder.com/400x300"
                      },
                      {
                        title: "Slicing UI Design With Tailwind",
                        category: "CODE",
                        price: "$100",
                        lessons: "30 Lessons",
                        duration: "48 Hours",
                        image: "https://via.placeholder.com/400x300"
                      }
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden bg-card/40 border border-border hover:bg-accent/5 transition-colors"
                      >
                        <div className="aspect-video relative">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary">{course.price}</Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-4">
                              <Button variant="default">Start Learning</Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-accent">
                            {course.category}
                          </Badge>
                          <h3 className="font-medium mb-2 text-sm sm:text-base line-clamp-2">{course.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {course.lessons}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Learning */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-semibold">Continue Learning</h2>
                    <Button variant="ghost" className="hover:bg-accent w-full sm:w-auto">View All</Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "UI/UX Design",
                        progress: 75,
                        lessons: "12/16 Lessons",
                        category: "DESIGN",
                        image: "/placeholder.svg"
                      },
                      {
                        title: "Cyber Security",
                        progress: 60,
                        lessons: "20/30 Lessons",
                        category: "CODE",
                        image: "/placeholder.svg"
                      },
                      {
                        title: "Learn Data Analyst",
                        progress: 40,
                        lessons: "8/20 Lessons",
                        category: "DATA",
                        image: "/placeholder.svg"
                      }
                    ].map((course, index) => (
                      <Card key={index} className="bg-card/40 border-border hover:bg-accent/5 transition-colors">
                        <CardContent className="p-4">
          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge variant="secondary" className="mb-2 bg-accent">
                                {course.category}
                              </Badge>
                              <h3 className="font-medium mb-2 text-sm sm:text-base truncate">{course.title}</h3>
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-muted-foreground truncate">{course.lessons}</span>
                                <span className="text-primary">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-1 mt-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* AI Insights Section */}
                <Card className="bg-gray-900/40 border-gray-800 mb-8">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Brain className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-medium">AI Learning Insights</CardTitle>
                          <p className="text-sm text-gray-400">Personalized analytics and recommendations</p>
                        </div>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" className="border-gray-700">
                              <Lightbulb className="h-4 w-4 mr-2" />
                              How it works
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>AI-powered insights based on your learning patterns</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Learning Pace Analysis */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Learning Pace</h3>
                          {anomalyMetrics.learningPace.isAnomaly && (
                            <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                              Exceptional Progress
                            </Badge>
                          )}
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1">
                              <p className="text-sm text-gray-400 mb-1">Current Pace</p>
                              <div className="text-2xl font-bold">{anomalyMetrics.learningPace.current}x</div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-400 mb-1">Average Pace</p>
                              <div className="text-2xl font-bold">{anomalyMetrics.learningPace.average}x</div>
                            </div>
                            <div className="w-20">
                              <RadialProgress
                                value={Math.round((anomalyMetrics.learningPace.current / anomalyMetrics.learningPace.average) * 100)}
                                size="md"
                                className="text-green-500"
                              />
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">{anomalyMetrics.learningPace.details}</p>
                        </div>
                      </div>

                      {/* Focus Areas Analysis */}
                      <div className="space-y-4">
                        <h3 className="font-medium">Focus Areas</h3>
                        <div className="space-y-3">
                          {Object.entries(anomalyMetrics.focusAreas).map(([area, metrics]) => (
                            <div key={area} className="p-4 rounded-lg bg-gray-800/50">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="capitalize">{area}</h4>
                                {metrics.isAnomaly && (
                                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                                    Trending
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex-1">
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Efficiency</span>
                                    <span>{Math.round(metrics.efficiency * 100)}%</span>
                                  </div>
                                  <div className="h-2 rounded-full bg-gray-700">
                                    <div
                                      className="h-full rounded-full bg-orange-500"
                                      style={{ width: `${metrics.efficiency * 100}%` }}
                                    />
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-gray-400">Hours Spent</p>
                                  <p className="text-lg font-bold">{metrics.hoursSpent}h</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 mt-2">{metrics.insight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Engagement Score Trend */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Engagement Score Trend</h3>
                        <Button variant="ghost" size="sm">
                          <Activity className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                      <div className="h-[200px]">
                        <AreaChart
                          data={anomalyMetrics.engagementScores.map(score => ({
                            name: new Date(score.date).toLocaleDateString(),
                            value: score.score
                          }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Learning Path Selector */}
                <div className="mb-8">
                  <div className="relative">
                    <div 
                      className={cn(
                        "p-4 rounded-lg bg-gray-900/60 border border-gray-800 transition-all duration-300",
                        isSearching ? "ring-2 ring-orange-500" : ""
                      )}
                    >
                      {!learningPath ? (
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="h-5 w-5 text-orange-500" />
                            <h2 className="text-lg font-medium">What do you want to learn?</h2>
                          </div>
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              className="w-full pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                              placeholder="Search for a course, exam, or certification..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onFocus={() => setIsSearching(true)}
                              onBlur={() => setIsSearching(false)}
                            />
                          </div>
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {learningPaths.map((path) => (
                              <button
                                key={path.id}
                                onClick={() => setLearningPath(path.id)}
                                className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 transition-colors text-left"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 rounded-lg bg-orange-500/10">
                                    <path.icon className="h-5 w-5 text-orange-500" />
                                  </div>
                                  <h3 className="font-medium">{path.title}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">{path.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {path.topics.map((topic, i) => (
                                    <Badge key={i} variant="secondary" className="bg-gray-700">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-orange-500/10">
                              <Building2 className="h-5 w-5 text-orange-500" />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                {learningPaths.find(p => p.id === learningPath)?.title}
                              </h3>
                              <p className="text-sm text-gray-400">
                                AI-powered learning path
                              </p>
                            </div>
            </div>
            <Button 
              variant="outline" 
                            size="sm"
                            onClick={() => setLearningPath(null)}
                            className="border-gray-700 hover:bg-gray-800"
            >
                            Change Path
            </Button>
                        </div>
                      )}
                    </div>
          </div>
        </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Profile and Progress */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Learning Progress</CardTitle>
                        <Button variant="ghost" size="sm">
                          <Activity className="h-4 w-4 mr-2" />
                          View Stats
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Overall Progress</span>
                              <span className="text-orange-500">78%</span>
          </div>
                            <Progress value={78} className="h-2" />
        </div>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-2">
                              <p className="text-xs text-gray-400">Courses Completed</p>
                              <p className="text-2xl font-bold">24/32</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs text-gray-400">Hours Spent</p>
                              <p className="text-2xl font-bold">286h</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                        <Button variant="ghost" size="sm">See All</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { icon: FileText, text: "Completed JavaScript Basics quiz", time: "2 hours ago" },
                            { icon: BookOpen, text: "Started new course: React Advanced", time: "Yesterday" },
                            { icon: Star, text: "Earned Frontend Developer badge", time: "2 days ago" }
                          ].map((activity, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className="p-2 rounded-lg bg-gray-800">
                                <activity.icon className="h-4 w-4 text-orange-500" />
                              </div>
                              <div>
                                <p className="text-sm">{activity.text}</p>
                                <p className="text-xs text-gray-400">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-6">
                    {/* Continue Learning */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Continue Learning</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {currentContent?.courses.map((course, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <img
                                  src={course.image}
                                  alt={course.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm mb-1">{course.title}</h4>
                                  <div className="flex items-center justify-between">
                                    <Progress value={course.progress} className="h-1.5 w-24" />
                                    <span className="text-xs text-gray-400">{course.lastAccessed}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Learning Stats */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Learning Analytics</CardTitle>
                        <Button variant="ghost" size="sm">
                          <ChartIcon className="h-4 w-4 mr-2" />
                          Full Report
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px]">
                          <LineChart data={lineChartData} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Top Mentors */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Top Mentors</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topMentors.map((mentor, index) => (
                            <div key={index} className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage src={mentor.image} />
                                <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{mentor.name}</h4>
                                <p className="text-xs text-gray-400">{mentor.role}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{mentor.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Upcoming Schedule */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Upcoming Schedule</CardTitle>
                        <Button variant="ghost" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Calendar
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[300px]">
                          {currentContent?.schedule.map((event, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50">
                                <div className="flex flex-col items-center">
                                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                                    {event.time}
                                  </Badge>
                                  <span className="text-xs text-gray-400 mt-1">{event.duration}</span>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm">{event.title}</h4>
                                  <p className="text-xs text-gray-400">{event.type}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </ScrollArea>
                      </CardContent>
                    </Card>

                    {/* Achievements */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Recent Achievements</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {achievements.map((achievement, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50"
                            >
                              <div className="p-2 rounded-lg bg-gray-900">
                                <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                              </div>
                              <div>
                                <h4 className="font-medium">{achievement.title}</h4>
                                <p className="text-xs text-gray-400">{achievement.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Nearby Events */}
                    <Card className="bg-gray-900/40 border-gray-800">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">Nearby Events</CardTitle>
                        <Button variant="ghost" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          View Map
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {nearbyEvents.map((event, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-sm">{event.title}</h4>
                                <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                                  {event.type}
                                </Badge>
                              </div>
                              <div className="flex items-center justify-between text-xs text-gray-400">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-3 w-3" />
                                  {event.attendees} attending
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                {/* Course Search and Filters */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      className="w-full pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                      placeholder="Search courses, topics, or skills..."
                    />
                  </div>
                  <Button variant="outline" className="border-gray-700">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" className="border-gray-700">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </div>

                {/* AI Course Recommendations */}
                <Card className="bg-gray-900/40 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Brain className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-medium">Recommended for You</CardTitle>
                          <p className="text-sm text-gray-400">Based on your learning goals and progress</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {aiRecommendations.personalizedPaths.map((path) => (
                        <div
                          key={path.id}
                          className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-orange-500/50"
                        >
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-orange-500/20 text-orange-500"
                            >
                              {Math.round(path.confidence * 100)}% Match
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-orange-500/10">
                              <path.icon className="h-5 w-5 text-orange-500" />
                            </div>
                            <div>
                              <h3 className="font-medium">{path.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="h-3 w-3" />
                                {path.estimatedTime}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 mb-3">{path.reason}</p>
                          <div className="flex flex-wrap gap-2">
                            {path.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="bg-gray-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button className="w-full" variant="default">
                              Start Learning
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Interactive Learning Hub */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Daily Challenges */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-orange-500/10">
                            <Target className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Daily Challenges</CardTitle>
                            <p className="text-sm text-gray-400">Complete challenges to earn points</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {interactiveElements.challenges.map((challenge) => (
                          <div
                            key={challenge.id}
                            className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gray-900">
                                  {challenge.type === "Coding" ? (
                                    <Code className="h-4 w-4 text-orange-500" />
                                  ) : (
                                    <FileText className="h-4 w-4 text-blue-500" />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-medium">{challenge.title}</h4>
                                  <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Clock className="h-3 w-3" />
                                    {challenge.timeLimit}
                                  </div>
                                </div>
                              </div>
                              <Badge
                                variant="secondary"
                                className={cn(
                                  "bg-gray-700",
                                  challenge.difficulty === "Hard" && "bg-red-500/20 text-red-500",
                                  challenge.difficulty === "Medium" && "bg-yellow-500/20 text-yellow-500",
                                  challenge.difficulty === "Easy" && "bg-green-500/20 text-green-500"
                                )}
                              >
                                {challenge.difficulty}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Trophy className="h-4 w-4 text-yellow-500" />
                                {challenge.points} points
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {challenge.participants} participants
                              </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button className="w-full" variant="default">
                                Start Challenge
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Practice Projects */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-orange-500/10">
                            <Rocket className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Practice Projects</CardTitle>
                            <p className="text-sm text-gray-400">Build real-world projects</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {interactiveElements.practiceProjects.map((project) => (
                          <div
                            key={project.id}
                            className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gray-900">
                                  <Code className="h-4 w-4 text-orange-500" />
                                </div>
                                <div>
                                  <h4 className="font-medium">{project.title}</h4>
                                  <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Clock className="h-3 w-3" />
                                    Est. {project.estimatedHours} hours
                                  </div>
                                </div>
                              </div>
                              {project.mentorAvailable && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                                  Mentor Available
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="bg-gray-700">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button className="w-full" variant="default">
                                Start Project
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Learning Analytics */}
                <Card className="bg-gray-900/40 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <ChartIcon className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-medium">Learning Analytics</CardTitle>
                          <p className="text-sm text-gray-400">Track your progress and performance</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Weekly Activity</h3>
                        <div className="h-[200px]">
                          <BarChart data={barChartData} />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium">Learning Hours</h3>
                        <div className="h-[200px]">
                          <LineChart data={lineChartData} />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium">Activity Heatmap</h3>
                        <HeatMap
                          data={[
                            { date: "2024-03-01", value: 5, intensity: "medium" },
                            { date: "2024-03-02", value: 3, intensity: "low" },
                            { date: "2024-03-03", value: 8, intensity: "high" },
                            // Add more data points...
                          ]}
                          className="h-[200px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                {/* Achievement Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-orange-500/10">
                          <Trophy className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Total Achievements</p>
                          <h3 className="text-2xl font-bold">24</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-500/10">
                          <Medal className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Total Points</p>
                          <h3 className="text-2xl font-bold">1,234</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/10">
                          <Target className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Current Streak</p>
                          <h3 className="text-2xl font-bold">8 days</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10">
                          <Star className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Global Rank</p>
                          <h3 className="text-2xl font-bold">#256</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Achievement Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Achievements */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-orange-500/10">
                            <Medal className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Recent Achievements</CardTitle>
                            <p className="text-sm text-gray-400">Your latest accomplishments</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-lg bg-gray-900">
                                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium">{achievement.title}</h4>
                                <p className="text-sm text-gray-400">{achievement.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievement Progress */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-orange-500/10">
                            <Target className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Achievement Progress</CardTitle>
                            <p className="text-sm text-gray-400">Track your milestones</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          { category: "Learning", completed: 12, total: 20 },
                          { category: "Engagement", completed: 8, total: 15 },
                          { category: "Projects", completed: 4, total: 10 },
                        ].map((category, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{category.category}</h4>
                              <span className="text-sm text-gray-400">
                                {category.completed}/{category.total}
                              </span>
                            </div>
                            <Progress
                              value={(category.completed / category.total) * 100}
                              className="h-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Achievement Timeline */}
                <Card className="bg-gray-900/40 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Clock className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-medium">Achievement Timeline</CardTitle>
                          <p className="text-sm text-gray-400">Your journey so far</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />
                      <div className="space-y-8">
                        {[
                          {
                            date: "March 15, 2024",
                            title: "Completed Frontend Basics",
                            description: "Finished all modules with distinction",
                            icon: Code,
                            color: "text-blue-500",
                          },
                          {
                            date: "March 10, 2024",
                            title: "First Project Submission",
                            description: "Built and deployed a full-stack application",
                            icon: Rocket,
                            color: "text-orange-500",
                          },
                          {
                            date: "March 5, 2024",
                            title: "30-Day Streak",
                            description: "Consistent learning for a month",
                            icon: Timer,
                            color: "text-green-500",
                          },
                        ].map((event, index) => (
                          <div key={index} className="relative pl-8">
                            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                              <event.icon className={`h-4 w-4 ${event.color}`} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">{event.date}</p>
                              <h4 className="font-medium mt-1">{event.title}</h4>
                              <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                {/* Community Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/10">
                          <Users className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Study Groups</p>
                          <h3 className="text-2xl font-bold">8</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10">
                          <MessageSquare className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Active Discussions</p>
                          <h3 className="text-2xl font-bold">24</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-500/10">
                          <GraduationCap className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Mentors</p>
                          <h3 className="text-2xl font-bold">12</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-orange-500/10">
                          <Heart className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Contributions</p>
                          <h3 className="text-2xl font-bold">156</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Active Study Groups */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Users className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Active Study Groups</CardTitle>
                            <p className="text-sm text-gray-400">Join or create a study group</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-gray-700">
                          <Plus className="h-4 w-4 mr-2" />
                          Create Group
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {communityData.studyGroups.map((group) => (
                          <div
                            key={group.id}
                            className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <Avatar>
                                  <AvatarImage src={`/avatars/group-${group.id}.png`} />
                                  <AvatarFallback>{group.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-medium">{group.name}</h4>
                                  <p className="text-sm text-gray-400">{group.activeTopic}</p>
                                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                      <Users className="h-4 w-4" />
                                      {group.members} members
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {new Date(group.nextMeeting).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                Join
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Featured Mentors */}
                  <Card className="bg-gray-900/40 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <GraduationCap className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-medium">Featured Mentors</CardTitle>
                            <p className="text-sm text-gray-400">Connect with experienced developers</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Sarah Johnson",
                            role: "Senior Frontend Developer",
                            expertise: ["React", "TypeScript", "UI/UX"],
                            rating: 4.9,
                          },
                          {
                            name: "Michael Chen",
                            role: "Full Stack Engineer",
                            expertise: ["Node.js", "Python", "AWS"],
                            rating: 4.8,
                          },
                          {
                            name: "Emma Davis",
                            role: "Mobile Developer",
                            expertise: ["React Native", "Flutter", "iOS"],
                            rating: 4.7,
                          },
                        ].map((mentor, index) => (
                          <div
                            key={index}
                            className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <Avatar>
                                  <AvatarImage src={`/avatars/mentor-${index + 1}.png`} />
                                  <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-medium">{mentor.name}</h4>
                                  <p className="text-sm text-gray-400">{mentor.role}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                  <Star className="h-4 w-4 fill-current" />
                                  <span className="font-medium">{mentor.rating}</span>
                                </div>
                                <Button variant="ghost" size="sm">
                                  Schedule
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Active Discussions */}
                <Card className="bg-gray-900/40 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10">
                          <MessageSquare className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-medium">Active Discussions</CardTitle>
                          <p className="text-sm text-gray-400">Join the conversation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" className="border-gray-700">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" className="border-gray-700">
                          <Plus className="h-4 w-4 mr-2" />
                          New Topic
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {communityData.discussions.map((discussion) => (
                        <div
                          key={discussion.id}
                          className="group relative p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{discussion.title}</h4>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {discussion.participants} participants
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  {discussion.replies} replies
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                Join
                              </Button>
                              <div className="text-sm text-gray-400">
                                <Clock className="h-4 w-4 inline mr-1" />
                                {new Date(discussion.lastActive).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 sm:bottom-4 right-0 sm:right-4 z-50 w-full sm:w-auto p-4 sm:p-0 bg-background/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border-t sm:border-t-0 border-border">
        <FloatingActionBar />
      </div>
    </div>
  )
} 