import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Clock, Users, Calendar, BookOpen, Filter, Star } from "lucide-react"

export default function ProgrammesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Educational Programmes</h1>
          <p className="text-muted-foreground">Discover comprehensive learning paths and certifications</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input placeholder="Search programmes..." />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="featured" className="space-y-6">
        <TabsList>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
          <TabsTrigger value="specializations">Specializations</TabsTrigger>
        </TabsList>

        <TabsContent value="featured">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full Stack Development",
                type: "Professional Certificate",
                duration: "6 months",
                students: "2.5K",
                rating: 4.8,
                modules: 12
              },
              {
                title: "Data Science & Analytics",
                type: "Specialization",
                duration: "8 months",
                students: "1.8K",
                rating: 4.7,
                modules: 15
              },
              {
                title: "Cloud Computing",
                type: "Professional Certificate",
                duration: "5 months",
                students: "2.1K",
                rating: 4.9,
                modules: 10
              }
            ].map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {program.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">{program.title}</CardTitle>
                  <CardDescription>
                    Professional certification program with hands-on projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {program.students} enrolled
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {program.modules} modules
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Flexible schedule
                      </div>
                    </div>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI & Machine Learning",
                provider: "Tech Institute",
                level: "Advanced",
                duration: "4 months",
                price: "$599"
              },
              {
                title: "Cybersecurity Fundamentals",
                provider: "Security Academy",
                level: "Intermediate",
                duration: "3 months",
                price: "$499"
              },
              {
                title: "Digital Marketing",
                provider: "Marketing School",
                level: "Beginner",
                duration: "2 months",
                price: "$399"
              }
            ].map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {cert.level}
                    </span>
                    <span className="text-lg font-bold">{cert.price}</span>
                  </div>
                  <CardTitle className="mt-2">{cert.title}</CardTitle>
                  <CardDescription>{cert.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {cert.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Certificate
                      </div>
                    </div>
                    <Button className="w-full">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bootcamps">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development Bootcamp",
                startDate: "Apr 1, 2025",
                duration: "12 weeks",
                mode: "Online",
                price: "$1999"
              },
              {
                title: "UX/UI Design Bootcamp",
                startDate: "Apr 15, 2025",
                duration: "10 weeks",
                mode: "Hybrid",
                price: "$1799"
              },
              {
                title: "Data Science Bootcamp",
                startDate: "May 1, 2025",
                duration: "14 weeks",
                mode: "Online",
                price: "$2199"
              }
            ].map((bootcamp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {bootcamp.mode}
                    </span>
                    <span className="text-lg font-bold">{bootcamp.price}</span>
                  </div>
                  <CardTitle className="mt-2">{bootcamp.title}</CardTitle>
                  <CardDescription>Intensive hands-on training program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Starts {bootcamp.startDate}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {bootcamp.duration}
                      </div>
                    </div>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specializations">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cloud Architecture",
                courses: 5,
                skills: ["AWS", "Azure", "DevOps"],
                level: "Advanced"
              },
              {
                title: "Mobile App Development",
                courses: 4,
                skills: ["React Native", "Flutter", "iOS"],
                level: "Intermediate"
              },
              {
                title: "Blockchain Development",
                courses: 6,
                skills: ["Ethereum", "Solidity", "Web3"],
                level: "Advanced"
              }
            ].map((spec, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {spec.level}
                    </span>
                  </div>
                  <CardTitle className="mt-2">{spec.title}</CardTitle>
                  <CardDescription>{spec.courses} courses specialization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {spec.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-sm rounded-full bg-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full">View Details</Button>
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