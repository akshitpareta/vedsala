import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, Filter, Youtube, Bookmark, ThumbsUp, Eye } from "lucide-react"

export default function YouTubePlaylistsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Educational Playlists</h1>
          <p className="text-muted-foreground">Curated YouTube content for enhanced learning</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input placeholder="Search playlists..." />
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
          <TabsTrigger value="subjects">By Subject</TabsTrigger>
          <TabsTrigger value="instructors">Top Instructors</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="featured">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Complete Web Development 2025",
                instructor: "Tech Academy",
                videos: 45,
                duration: "15 hours",
                views: "125K",
                likes: "12K"
              },
              {
                title: "Data Structures & Algorithms",
                instructor: "CS Hub",
                videos: 32,
                duration: "12 hours",
                views: "98K",
                likes: "8.5K"
              },
              {
                title: "Machine Learning Essentials",
                instructor: "AI Learning",
                videos: 38,
                duration: "14 hours",
                views: "110K",
                likes: "10K"
              }
            ].map((playlist, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="relative aspect-video rounded-lg bg-muted mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Youtube className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <CardTitle>{playlist.title}</CardTitle>
                  <CardDescription>{playlist.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Play className="h-4 w-4" />
                          {playlist.videos} videos
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {playlist.duration}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {playlist.views} views
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {playlist.likes} likes
                      </div>
                    </div>
                    <Button className="w-full">Start Learning</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="subjects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                subject: "Computer Science",
                playlists: 45,
                totalHours: 180
              },
              {
                subject: "Mathematics",
                playlists: 32,
                totalHours: 120
              },
              {
                subject: "Physics",
                playlists: 28,
                totalHours: 95
              },
              {
                subject: "Chemistry",
                playlists: 25,
                totalHours: 85
              },
              {
                subject: "Biology",
                playlists: 30,
                totalHours: 110
              },
              {
                subject: "Economics",
                playlists: 22,
                totalHours: 75
              },
              {
                subject: "History",
                playlists: 20,
                totalHours: 65
              },
              {
                subject: "Geography",
                playlists: 18,
                totalHours: 60
              }
            ].map((subject, index) => (
              <Card key={index} className="hover:bg-muted/50 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{subject.subject}</CardTitle>
                  <CardDescription>
                    {subject.playlists} playlists • {subject.totalHours} hours
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="instructors">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Tech Academy",
                specialty: "Web Development",
                subscribers: "500K",
                totalVideos: 450
              },
              {
                name: "CS Hub",
                specialty: "Computer Science",
                subscribers: "350K",
                totalVideos: 320
              },
              {
                name: "AI Learning",
                specialty: "Machine Learning & AI",
                subscribers: "420K",
                totalVideos: 380
              }
            ].map((instructor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {instructor.name[0]}
                      </span>
                    </div>
                    <div>
                      <CardTitle>{instructor.name}</CardTitle>
                      <CardDescription>{instructor.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{instructor.subscribers} subscribers</span>
                      <span>{instructor.totalVideos} videos</span>
                    </div>
                    <Button className="w-full">View Channel</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced JavaScript Concepts",
                progress: "60%",
                lastWatched: "2 days ago",
                remainingTime: "4.5 hours"
              },
              {
                title: "Python for Data Science",
                progress: "35%",
                lastWatched: "1 week ago",
                remainingTime: "8 hours"
              },
              {
                title: "React.js Masterclass",
                progress: "75%",
                lastWatched: "1 day ago",
                remainingTime: "2.5 hours"
              }
            ].map((saved, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{saved.title}</CardTitle>
                  <CardDescription>Last watched {saved.lastWatched}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{saved.progress}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: saved.progress }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{saved.remainingTime} remaining</span>
                    </div>
                    <Button className="w-full">Continue Learning</Button>
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