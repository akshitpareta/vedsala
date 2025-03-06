import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Newspaper, TrendingUp, Calendar, BookOpen, Filter } from "lucide-react"

export default function CurrentAffairsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Current Affairs</h1>
          <p className="text-muted-foreground">Stay updated with the latest news and events</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input placeholder="Search current affairs..." />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="daily" className="space-y-6">
        <TabsList>
          <TabsTrigger value="daily" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Daily Updates
          </TabsTrigger>
          <TabsTrigger value="trending" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="magazines" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            Magazines
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global Economic Summit 2025",
                category: "Economy",
                description: "World leaders gather to discuss post-pandemic economic recovery strategies",
                date: "Mar 6, 2025"
              },
              {
                title: "Breakthrough in Quantum Computing",
                category: "Technology",
                description: "Scientists achieve new milestone in quantum computing research",
                date: "Mar 6, 2025"
              },
              {
                title: "Climate Change Agreement",
                category: "Environment",
                description: "Nations sign new accord to combat climate change",
                date: "Mar 6, 2025"
              }
            ].map((news, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {news.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="mt-2">{news.title}</CardTitle>
                  <CardDescription>{news.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Most discussed current affairs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      topic: "AI in Education",
                      mentions: "15.2K",
                      trend: "↑ 25%"
                    },
                    {
                      topic: "Space Exploration",
                      mentions: "12.8K",
                      trend: "↑ 18%"
                    },
                    {
                      topic: "Renewable Energy",
                      mentions: "10.5K",
                      trend: "↑ 15%"
                    }
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span>{topic.topic}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{topic.mentions}</span>
                        <span className="text-sm text-green-500">{topic.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Study Notes</CardTitle>
                <CardDescription>Key points for competitive exams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "International Organizations",
                      type: "PDF",
                      pages: 12
                    },
                    {
                      title: "Economic Policies 2025",
                      type: "PDF",
                      pages: 8
                    },
                    {
                      title: "Science & Technology Updates",
                      type: "PDF",
                      pages: 15
                    }
                  ].map((note, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{note.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{note.type}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{note.pages} pages</span>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Politics",
                icon: Globe,
                articles: 156
              },
              {
                category: "Technology",
                icon: Globe,
                articles: 89
              },
              {
                category: "Science",
                icon: Globe,
                articles: 124
              },
              {
                category: "Economy",
                icon: Globe,
                articles: 92
              },
              {
                category: "Sports",
                icon: Globe,
                articles: 78
              },
              {
                category: "Environment",
                icon: Globe,
                articles: 103
              }
            ].map((category, index) => (
              <Card key={index} className="hover:bg-muted/50 cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.articles} articles</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="magazines">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Current Affairs Monthly",
                issue: "March 2025",
                pages: 45
              },
              {
                title: "Economic Review",
                issue: "Q1 2025",
                pages: 32
              },
              {
                title: "Science Digest",
                issue: "March 2025",
                pages: 28
              }
            ].map((magazine, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{magazine.title}</CardTitle>
                  <CardDescription>Issue: {magazine.issue}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{magazine.pages} pages</span>
                    <Button variant="outline" size="sm">Preview</Button>
                  </div>
                  <Button className="w-full">Read Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 