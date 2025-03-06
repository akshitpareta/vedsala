import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsArticles = [
  {
    title: "Latest Government Job Opportunities",
    description: "New openings in various government departments with detailed eligibility criteria.",
    date: "January 15, 2025",
    category: "Jobs"
  },
  {
    title: "Upcoming Competitive Exams",
    description: "Complete schedule of all major competitive exams for the year 2025.",
    date: "January 14, 2025",
    category: "Exams"
  },
  // Add more news articles
]

export default function NewsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{article.description}</p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {article.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

