import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Book, Download, Clock, BookOpen, FileText, Video, Newspaper, Globe } from "lucide-react"

export default function LibraryPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Digital Library</h1>
          <p className="text-muted-foreground">Access comprehensive study materials and resources</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-9" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Video Lectures</TabsTrigger>
          <TabsTrigger value="papers">Research Papers</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Introduction to Machine Learning",
                type: "Book",
                author: "Dr. Sarah Chen",
                lastAccessed: "2 hours ago",
                size: "15.2 MB",
                icon: Book
              },
              {
                title: "Advanced Data Structures",
                type: "Video Lecture",
                author: "Prof. John Smith",
                lastAccessed: "1 day ago",
                duration: "1.5 hours",
                icon: Video
              },
              {
                title: "Latest Developments in AI",
                type: "Article",
                author: "Tech Review",
                lastAccessed: "3 days ago",
                readTime: "10 mins",
                icon: Newspaper
              }
            ].map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <resource.icon className="h-4 w-4" />
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {resource.lastAccessed}
                      </div>
                      <div className="flex items-center gap-2">
                        {resource.size && <span>{resource.size}</span>}
                        {resource.duration && <span>{resource.duration}</span>}
                        {resource.readTime && <span>{resource.readTime}</span>}
                      </div>
                    </div>
                    <Button className="w-full">Access Resource</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="books">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Data Science Fundamentals",
                author: "Dr. Michael Brown",
                publisher: "Tech Publications",
                year: 2024,
                pages: 450,
                format: "PDF"
              },
              {
                title: "Web Development Guide",
                author: "Emma Wilson",
                publisher: "Code Press",
                year: 2024,
                pages: 380,
                format: "EPUB"
              },
              {
                title: "Artificial Intelligence Basics",
                author: "Prof. David Lee",
                publisher: "AI Institute",
                year: 2024,
                pages: 320,
                format: "PDF"
              }
            ].map((book, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {book.format}
                    </span>
                    <span className="text-sm text-muted-foreground">{book.year}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {book.title}
                  </CardTitle>
                  <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{book.publisher}</span>
                      <span>{book.pages} pages</span>
                    </div>
                    <Button className="w-full">Download Book</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Future of Online Learning",
                source: "Education Weekly",
                date: "Mar 6, 2025",
                readTime: "8 mins",
                category: "EdTech"
              },
              {
                title: "Best Practices in Remote Education",
                source: "Learning Insights",
                date: "Mar 5, 2025",
                readTime: "12 mins",
                category: "Pedagogy"
              },
              {
                title: "AI in Education: A New Era",
                source: "Tech Review",
                date: "Mar 4, 2025",
                readTime: "15 mins",
                category: "Technology"
              }
            ].map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      {article.readTime} read
                    </div>
                    <Button className="w-full">Read Article</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understanding Neural Networks",
                instructor: "Prof. Alex Johnson",
                duration: "45 mins",
                level: "Intermediate",
                views: "12.5K"
              },
              {
                title: "Database Design Principles",
                instructor: "Dr. Lisa Chen",
                duration: "1 hour",
                level: "Advanced",
                views: "8.2K"
              },
              {
                title: "Introduction to React",
                instructor: "Mark Wilson",
                duration: "55 mins",
                level: "Beginner",
                views: "15.8K"
              }
            ].map((video, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {video.level}
                    </span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    {video.title}
                  </CardTitle>
                  <CardDescription>{video.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {video.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {video.views} views
                      </div>
                    </div>
                    <Button className="w-full">Watch Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="papers">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advances in Deep Learning",
                authors: "Chen et al.",
                journal: "AI Review",
                year: 2025,
                citations: 156
              },
              {
                title: "Educational Technology Trends",
                authors: "Smith et al.",
                journal: "Education Research",
                year: 2025,
                citations: 89
              },
              {
                title: "Online Learning Effectiveness",
                authors: "Johnson et al.",
                journal: "Digital Education",
                year: 2025,
                citations: 124
              }
            ].map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Research Paper
                    </span>
                    <span className="text-sm text-muted-foreground">{paper.year}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {paper.title}
                  </CardTitle>
                  <CardDescription>{paper.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{paper.journal}</span>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {paper.citations} citations
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Read Paper</Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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