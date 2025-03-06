import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, Clock, Star, BarChart, BookOpen } from "lucide-react"

export default function TrendingPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Trending Now</h1>
          <p className="text-muted-foreground">Discover what's popular in the learning community</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Last 7 Days
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Active Learners",
            value: "12.5K",
            trend: "+15%",
            icon: Users
          },
          {
            title: "Hours Learned",
            value: "45.2K",
            trend: "+23%",
            icon: Clock
          },
          {
            title: "Course Completions",
            value: "2.8K",
            trend: "+18%",
            icon: Star
          },
          {
            title: "Learning Score",
            value: "92",
            trend: "+5%",
            icon: BarChart
          }
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {stat.trend} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList>
          <TabsTrigger value="courses">Popular Courses</TabsTrigger>
          <TabsTrigger value="topics">Hot Topics</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Machine Learning Fundamentals",
                instructor: "Dr. Sarah Chen",
                enrolled: "2.5K students",
                rating: 4.8,
                duration: "8 weeks"
              },
              {
                title: "Web Development Bootcamp",
                instructor: "John Smith",
                enrolled: "1.8K students",
                rating: 4.7,
                duration: "12 weeks"
              },
              {
                title: "Data Science Masterclass",
                instructor: "Alex Johnson",
                enrolled: "2.1K students",
                rating: 4.9,
                duration: "10 weeks"
              }
            ].map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{course.enrolled}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <Button className="w-full mt-4">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="topics">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Most searched topics this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      topic: "Artificial Intelligence",
                      searches: "25.6K",
                      trend: "+45%"
                    },
                    {
                      topic: "Cloud Computing",
                      searches: "18.2K",
                      trend: "+32%"
                    },
                    {
                      topic: "Blockchain",
                      searches: "15.8K",
                      trend: "+28%"
                    },
                    {
                      topic: "Cybersecurity",
                      searches: "14.3K",
                      trend: "+25%"
                    }
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span>{topic.topic}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{topic.searches}</span>
                        <span className="text-sm text-green-500">{topic.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Activity</CardTitle>
                <CardDescription>Most active learning times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      time: "Morning (6 AM - 12 PM)",
                      percentage: "35%",
                      learners: "8.2K"
                    },
                    {
                      time: "Afternoon (12 PM - 6 PM)",
                      percentage: "28%",
                      learners: "6.5K"
                    },
                    {
                      time: "Evening (6 PM - 12 AM)",
                      percentage: "25%",
                      learners: "5.8K"
                    },
                    {
                      time: "Night (12 AM - 6 AM)",
                      percentage: "12%",
                      learners: "2.8K"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{activity.time}</span>
                        <span className="text-sm text-muted-foreground">{activity.learners} learners</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: activity.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="paths">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full-Stack Developer",
                courses: 12,
                duration: "6 months",
                level: "Intermediate"
              },
              {
                title: "Data Scientist",
                courses: 15,
                duration: "8 months",
                level: "Advanced"
              },
              {
                title: "Cloud Architect",
                courses: 10,
                duration: "5 months",
                level: "Advanced"
              }
            ].map((path, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>Career Path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{path.courses} courses</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{path.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {path.level}
                      </span>
                    </div>
                    <Button className="w-full">View Path</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 