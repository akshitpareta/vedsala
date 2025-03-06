"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart } from "@/components/ui/chart"
import { Search, Clock, BookOpen, TrendingUp } from 'lucide-react'

// Mock data for demonstration
const students = [
  { id: 1, name: "Alice Johnson", username: "alice_j", avatar: "/avatars/01.png", timeInvested: 120, improvement: 15, categories: { "UI/UX": 40, "Web Design": 30, "Development": 35, "3D Design": 15 } },
  { id: 2, name: "Bob Smith", username: "bob_s", avatar: "/avatars/02.png", timeInvested: 95, improvement: 12, categories: { "UI/UX": 25, "Web Design": 40, "Development": 20, "3D Design": 10 } },
  { id: 3, name: "Charlie Brown", username: "charlie_b", avatar: "/avatars/03.png", timeInvested: 150, improvement: 20, categories: { "UI/UX": 50, "Web Design": 35, "Development": 45, "3D Design": 20 } },
  // Add more mock students...
]

const leaderboard = students.sort((a, b) => b.timeInvested - a.timeInvested).slice(0, 25)
const otherStudents = students.slice(25)

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Students</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Student List */}
        <ScrollArea className="h-[400px]">
          {filteredStudents.map(student => (
            <Card key={student.id} className="mb-4">
              <CardContent className="flex items-center p-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">@{student.username}</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Time Invested: {student.timeInvested} hours</span>
                    </div>
                    <Progress value={student.timeInvested / 2} className="h-2" />
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(student.categories).map(([category, time]) => (
                        <Badge key={category} variant="secondary">
                          {category}: {time}h
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge className="ml-4">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {student.improvement}%
                </Badge>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard (Top 25)</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {leaderboard.map((student, index) => (
                <div key={student.id} className="flex items-center py-2">
                  <span className="w-8 text-center font-bold">{index + 1}</span>
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="flex-1">{student.name}</span>
                  <span>{student.timeInvested} hours</span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Other Students Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Other Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart 
                data={otherStudents.map(student => ({ name: student.username, value: student.timeInvested }))}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

