"use client"

import React, { useState } from "react"
import { Star, MoreHorizontal, ArrowRight, Sparkles, ChevronDown, BookOpen, Users, Clock, CheckCircle, AlertCircle, Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FilterDialog } from "./filter-dialog"
import { CourseGrid } from "./course-grid"
import Link from "next/link"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Comprehensive Courses",
    description: "Access a wide range of courses tailored for competitive exams and professional growth.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced educators.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace with our on-demand video lectures and resources.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress reports and analytics.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Interactive Quizzes",
    description: "Reinforce your knowledge with our engaging quiz system.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "24/7 Support",
    description: "Get assistance anytime with our dedicated support team.",
    icon: <AlertCircle className="h-6 w-6" />,
  },
]

export function CourseHero() {
  const [selectedFilters, setSelectedFilters] = useState<{
    category: string;
    subcategory: string;
    section: string;
  }>({ category: "Current Affairs", subcategory: "Sports", section: "National Achievements" })

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
      <div className="relative p-4 md:p-8 border-b border-border bg-background/80 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 ring-2 ring-offset-2 ring-offset-background ring-primary/20">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%2019.04.03_67f3fc33.jpg-zWpuGC3dFWYpVIuP5qmkhH6BQEPOlz.jpeg" alt="Vedsala" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl md:text-2xl font-semibold mb-1 text-foreground">Vedsala</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-foreground">4.9</span>
                  </div>
                  <span className="text-muted-foreground">(148 reviews)</span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-muted-foreground hidden sm:inline">Education Platform</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/government-jobs">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm">
                  Government Job
                </Button>
              </Link>
              <Link href="/private-jobs">
                <Button variant="outline" className="border-input hover:bg-accent hover:text-accent-foreground transition-colors text-sm">
                  Private Job
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Welcome to Vedsala</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Your comprehensive learning platform for competitive exams and professional growth
              </p>
              <div className="relative space-y-6">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <FilterDialog onFiltersChange={setSelectedFilters}>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        Filter Content
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </Button>
                    </FilterDialog>
                    <div className="hidden sm:block">
                      <ArrowRight className="h-5 w-5 text-primary animate-bounce-x" />
                    </div>
                    <div className="relative inline-block group cursor-pointer mt-2 sm:mt-0">
                      <div className="relative z-10 text-foreground font-medium flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-sm">Filter questions and content for your exam preparation</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg blur-sm -z-10 group-hover:animate-shimmer" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-accent/50 backdrop-blur-sm border border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Active Filter Path
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="text-primary font-medium">{selectedFilters.category || 'All Categories'}</span>
                    {selectedFilters.subcategory && (
                      <>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="text-primary font-medium">{selectedFilters.subcategory}</span>
                      </>
                    )}
                    {selectedFilters.section && (
                      <>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="text-primary font-medium">{selectedFilters.section}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-accent">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png"
                alt="Course preview"
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
      <CourseGrid filters={selectedFilters} />
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 relative group/feature rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg",
        index % 2 === 0 ? "hover:bg-primary/5" : "hover:bg-secondary/5"
      )}
    >
      <div className="mb-4 relative z-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary/30 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};

