"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChevronRight, BookOpen, Trophy } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string
  progress: number
}

interface LearningPathProps {
  path: {
    completedCourses: Course[]
    currentCourse: Course
    upcomingCourses: Course[]
  }
}

export function LearningPathView({ path }: LearningPathProps) {
  const [expandedSection, setExpandedSection] = useState<"completed" | "upcoming" | null>(null)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Current Course</CardTitle>
          <CardDescription>Continue where you left off</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">{path.currentCourse.title}</h3>
          <p className="text-muted-foreground mb-4">{path.currentCourse.description}</p>
          <Progress value={path.currentCourse.progress} className="mb-4" />
          <Button>Continue Learning</Button>
        </CardContent>
      </Card>

      <div>
        <Button
          variant="ghost"
          onClick={() => setExpandedSection(expandedSection === "completed" ? null : "completed")}
          className="w-full justify-between mb-2"
        >
          <span className="flex items-center">
            <Trophy className="mr-2 h-4 w-4" />
            Completed Courses ({path.completedCourses.length})
          </span>
          <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === "completed" ? "rotate-90" : ""}`} />
        </Button>
        {expandedSection === "completed" && (
          <div className="space-y-4 mt-4">
            {path.completedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div>
        <Button
          variant="ghost"
          onClick={() => setExpandedSection(expandedSection === "upcoming" ? null : "upcoming")}
          className="w-full justify-between mb-2"
        >
          <span className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Upcoming Courses ({path.upcomingCourses.length})
          </span>
          <ChevronRight className={`h-4 w-4 transition-transform ${expandedSection === "upcoming" ? "rotate-90" : ""}`} />
        </Button>
        {expandedSection === "upcoming" && (
          <div className="space-y-4 mt-4">
            {path.upcomingCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

