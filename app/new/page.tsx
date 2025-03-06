"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleCard } from "@/components/news/article-card"
import { TrendingArticle } from "@/components/news/trending-article"
import { articles, currentAffairs, importantDates } from "@/data/news"
import { Settings2, ChevronDown } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import { FilterDialog } from "@/components/filter-dialog"

const categories = ["ALL", "NEWS", "SPORT", "TECHNOLOGY", "TRAVEL", "LIFESTYLE"]

export default function NewPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    subcategory: "",
    section: ""
  })
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric'
  }
  const formattedDate = today.toLocaleDateString('en-US', options)

  return (
    <>
      <Navbar />
      {/* Top Navigation */}
      <div className="sticky top-16 z-30 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-2 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <h2 className="text-sm sm:text-base font-medium">{formattedDate}</h2>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FilterDialog onFiltersChange={setSelectedFilters}>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-grow sm:flex-grow-0">
                  {selectedFilters.category || "All Categories"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </FilterDialog>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 sm:py-6">
        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-2 xl:col-span-3">
            <Tabs defaultValue="latest" className="mb-6">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger 
                    value="latest"
                    className="text-sm font-medium data-[state=active]:bg-transparent data-[state=active]:text-primary px-0 mr-4"
                  >
                    LATEST NEWS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="important"
                    className="text-sm font-medium text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary px-0"
                  >
                    IMPORTANT DATES
                  </TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Settings2 className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              </div>
              <TabsContent value="latest" className="m-0">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="important" className="m-0">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                  {importantDates.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Current Affairs Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Current Affairs</h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Settings2 className="h-4 w-4 mr-2" />
                Customize
              </Button>
            </div>
            <div className="space-y-6">
              {currentAffairs.map((article) => (
                <TrendingArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

