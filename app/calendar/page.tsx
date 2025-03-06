"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, ChevronDown, Users, BookOpen, CalendarIcon, ArrowRight, TrendingUp } from 'lucide-react'
import { BarChart, LineChart } from "@/components/ui/chart"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"
]

const scheduledEvents = [
  {
    time: "09:15",
    title: "Introduction to UI/UX Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20222114-z0cNRoY3jZxpqZpQbL8xEPbrpFbaaz.png",
    type: "Class"
  },
  {
    time: "12:30",
    title: "Advanced JavaScript Workshop",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20222114-z0cNRoY3jZxpqZpQbL8xEPbrpFbaaz.png",
    type: "Workshop"
  }
]

const activityData = {
  stories: 687,
  posts: 189,
  reels: 24
}

const insights = {
  studentsReached: "5,192,879",
  newEnrollments: "+2,953",
  engagementRate: "98.2%"
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

export default function CalendarPage() {
  const [currentDate] = useState(new Date())

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Stats Card */}
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">278,534</h2>
                    <p className="text-sm text-muted-foreground">Active Students</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">United States</span>
                  <span className="text-sm font-medium">197,520</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Brazil</span>
                  <span className="text-sm font-medium">32,985</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Switzerland</span>
                  <span className="text-sm font-medium">10,254</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }} />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-4">Student Activity</h3>
                <div className="h-[200px]">
                  <LineChart data={lineChartData} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Calendar Card */}
          <Card className="col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-base font-medium">Activity Calendar</CardTitle>
              <Button variant="outline" size="sm" className="text-xs">
                Change Period
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{activityData.stories}</div>
                  <div className="text-xs text-muted-foreground">Classes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{activityData.posts}</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{activityData.reels}</div>
                  <div className="text-xs text-muted-foreground">Events</div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div key={i} className="text-center text-sm text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-full flex items-center justify-center text-sm
                      ${i % 7 === 3 ? 'bg-primary/20' : ''}
                      ${i % 5 === 0 ? 'bg-primary/40' : ''}
                      ${i % 11 === 0 ? 'bg-primary' : ''}
                    `}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Schedule Card */}
          <Card className="col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-base font-medium">Schedule</CardTitle>
              <Button size="sm" variant="default">
                + Add Event
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {timeSlots.map((time) => (
                  <div key={time} className="relative mb-8 last:mb-0">
                    <div className="absolute left-0 w-12 text-sm text-muted-foreground">
                      {time}
                    </div>
                    <div className="ml-16 border-l border-border pl-4">
                      {scheduledEvents.find(event => event.time.startsWith(time.split(":")[0])) ? (
                        <div className="relative bg-accent rounded-lg p-3">
                          <Badge variant="secondary" className="absolute -left-[40px] top-1/2 -translate-y-1/2">
                            {scheduledEvents.find(event => event.time.startsWith(time.split(":")[0]))?.time}
                          </Badge>
                          <div className="flex items-center gap-3">
                            <img
                              src="/placeholder.svg"
                              alt="Event"
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-sm">
                                {scheduledEvents.find(event => event.time.startsWith(time.split(":")[0]))?.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {scheduledEvents.find(event => event.time.startsWith(time.split(":")[0]))?.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Insights Card */}
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-base font-medium">Analytics Insights</CardTitle>
              <Button variant="outline" size="sm">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Students Reached</span>
                  </div>
                  <div className="text-2xl font-bold">{insights.studentsReached}</div>
                  <div className="h-[60px]">
                    <BarChart data={barChartData} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">New Enrollments</span>
                  </div>
                  <div className="text-2xl font-bold text-green-500">{insights.newEnrollments}</div>
                  <div className="h-[60px]">
                    <BarChart data={barChartData} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Engagement Rate</span>
                  </div>
                  <div className="text-2xl font-bold">{insights.engagementRate}</div>
                  <div className="h-[60px]">
                    <BarChart data={barChartData} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

