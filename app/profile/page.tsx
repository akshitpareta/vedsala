"use client"

import { Inter } from "next/font/google"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart } from "@/components/ui/chart"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  Users,
  MessageSquare,
  Briefcase,
  Newspaper,
  Brain,
  Edit,
  Camera,
} from "lucide-react"
import { FeatureBlock } from "@/components/feature-block"
import { useAuth } from "@/lib/auth-context"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// Mock data
const userData = {
  name: "Rahul Sharma",
  username: "rahul_sharma",
  email: "rahul.sharma@example.com",
  avatar: "/placeholder.svg",
  level: "Advanced",
  points: 3250,
  examsAttempted: 12,
  hoursStudied: 320,
  rankImprovement: 150,
}

const examProgress = [
  { name: "UPSC Civil Services", progress: 75 },
  { name: "SSC CGL", progress: 60 },
  { name: "IBPS PO", progress: 90 },
  { name: "RRB NTPC", progress: 40 },
]

const studyData = [
  { name: "Mon", hours: 4 },
  { name: "Tue", hours: 5 },
  { name: "Wed", hours: 3 },
  { name: "Thu", hours: 6 },
  { name: "Fri", hours: 4 },
  { name: "Sat", hours: 7 },
  { name: "Sun", hours: 5 },
]

const subjectPerformance = [
  { name: "General Studies", level: 85 },
  { name: "CSAT", level: 70 },
  { name: "Indian Polity", level: 90 },
  { name: "Indian Economy", level: 75 },
  { name: "Indian History", level: 80 },
]

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else {
      setIsLoading(false)
    }
  }, [user, router])

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <Layout className={inter.className}>
      <div className="container mx-auto p-6 space-y-8 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
        {/* User Info Section */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          <CardContent className="pt-36 pb-8 px-6 relative">
            <div className="absolute -top-12 left-6">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src={user?.avatar || userData.avatar} alt={user?.name || userData.name} />
                <AvatarFallback>{user?.name.charAt(0) || userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{user?.name || userData.name}</h1>
                <p className="text-muted-foreground">@{user?.email.split("@")[0] || userData.username}</p>
                <Badge variant="secondary" className="mt-1">
                  {user?.level || userData.level}
                </Badge>
              </div>
              <Button className="flex items-center gap-2 bg-primary/80 backdrop-blur-sm hover:bg-primary/90 transition-colors">
                <Edit className="h-4 w-4" />
                Edit Your Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Points",
              icon: Award,
              value: user?.points || userData.points,
              change: "+250 from last week",
            },
            {
              title: "Exams Attempted",
              icon: BookOpen,
              value: user?.examsAttempted || userData.examsAttempted,
              change: "2 more scheduled",
            },
            {
              title: "Hours Studied",
              icon: Clock,
              value: user?.hoursStudied || userData.hoursStudied,
              change: "+15 hours this week",
            },
            {
              title: "Rank Improvement",
              icon: TrendingUp,
              value: `+${user?.rankImprovement || userData.rankImprovement}`,
              change: "In last mock test",
            },
          ].map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
                <Progress value={25} className="mt-2 h-1" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Blocks */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Take a Live Quiz",
              icon: Brain,
              description: "Test your knowledge with our interactive quizzes.",
              stats: [
                { label: "Quizzes Completed", value: "42" },
                { label: "Average Score", value: "78%" },
              ],
              linkHref: "/live-quiz",
              linkText: "Start Quiz Now",
            },
            {
              title: "View Current Affairs",
              icon: Newspaper,
              description: "Stay updated with the latest news relevant to your exams.",
              highlight: "New economic policy announced by the government",
              linkHref: "/news",
              linkText: "Read Updates",
            },
            {
              title: "Attempt Mock Test",
              icon: BookOpen,
              description: "Practice with full-length mock tests for your target exams.",
              highlight: "UPSC Prelims Mock - June 5, 2025",
              linkHref: "/mock-tests",
              linkText: "Begin Test",
            },
            {
              title: "Chat with AI Assistant",
              icon: MessageSquare,
              description: "Get instant answers and study help from our AI.",
              tags: ["Indian Polity", "Economics", "Current Affairs"],
              linkHref: "/ai-guide",
              linkText: "Start Chatting",
            },
            {
              title: "Explore Job Opportunities",
              icon: Briefcase,
              description: "Get notified about the latest government job openings.",
              highlight: "UPSC Civil Services 2025 Notification",
              linkHref: "/jobs",
              linkText: "View Openings",
            },
            {
              title: "View Study Planner",
              icon: Calendar,
              description: "Personalized study schedules tailored to your exam goals.",
              focus: "Indian Constitution - Fundamental Rights",
              progress: 65,
              linkHref: "/study-planner",
              linkText: "Check Your Plan",
            },
          ].map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              icon={<feature.icon className="h-6 w-6 text-primary" />}
              linkHref={feature.linkHref}
              linkText={feature.linkText}
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                {feature.stats && (
                  <div className="flex justify-between text-sm">
                    {feature.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="text-muted-foreground">{stat.label}:</span>
                        <span className="font-medium text-foreground ml-1">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {feature.highlight && (
                  <div>
                    <div className="text-sm font-medium text-foreground">Today's Highlight:</div>
                    <p className="text-sm text-muted-foreground">{feature.highlight}</p>
                  </div>
                )}
                {feature.tags && (
                  <div>
                    <div className="text-sm font-medium text-foreground">Popular Topics:</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {feature.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {feature.focus && (
                  <div>
                    <div className="text-sm font-medium text-foreground">Today's Focus:</div>
                    <p className="text-sm text-muted-foreground">{feature.focus}</p>
                    {feature.progress && (
                      <>
                        <Progress value={feature.progress} className="h-2 mt-1" />
                        <p className="text-xs text-right text-muted-foreground">
                          {feature.progress}% of today's goal completed
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </FeatureBlock>
          ))}
        </div>

        {/* Exam Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Track Your Exam Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              {examProgress.map((exam, index) => (
                <div key={index} className="mb-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-foreground">{exam.name}</h3>
                    <Badge variant={exam.progress === 100 ? "default" : "secondary"}>
                      {exam.progress === 100 ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <Progress value={exam.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{exam.progress}% Complete</span>
                    <span>{Math.round((100 - exam.progress) / 5)} topics left</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Study Activity and Subject Performance */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Analyze Your Study Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <BarChart data={studyData.map((day) => ({ name: day.name, value: day.hours }))} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Review Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{subject.name}</span>
                      <span className="text-muted-foreground">{subject.level}%</span>
                    </div>
                    <Progress value={subject.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements and Upcoming Events Tabs */}
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">View Upcoming Events</TabsTrigger>
            <TabsTrigger value="achievements">Check Recent Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {[
                    {
                      icon: Calendar,
                      title: "UPSC Mains Mock Test",
                      description: "Full-length practice test for Civil Services Mains",
                      date: "Tomorrow, 9:00 AM",
                    },
                    {
                      icon: Users,
                      title: "Group Discussion: Indian Economy",
                      description: "Interactive session on current economic trends",
                      date: "Friday, 4:00 PM",
                    },
                    {
                      icon: BookOpen,
                      title: "SSC CGL Tier I Exam",
                      description: "Actual examination day",
                      date: "Next Monday, 10:00 AM",
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <event.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p className="text-sm font-medium text-primary">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {[
                    {
                      icon: Award,
                      title: "Top Performer: UPSC Prelims Mock Test",
                      description: "Scored in the top 5% of all test takers",
                      date: "2 days ago",
                    },
                    {
                      icon: TrendingUp,
                      title: "Milestone: 100 Days Streak",
                      description: "Consistently studied for 100 days in a row",
                      date: "1 week ago",
                    },
                    {
                      icon: Users,
                      title: "Community Contributor",
                      description: "Helped 50 peers in the discussion forum",
                      date: "2 weeks ago",
                    },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-sm font-medium text-primary">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

