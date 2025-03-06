"use client"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  MapPin,
  Building2,
  Clock,
  ChevronDown,
  X,
  Heart,
  MoreHorizontal,
  Search,
  Briefcase,
  ArrowUpDown,
  Filter,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  BookOpen,
  Users,
  Laptop,
  Target,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

const jobTypes = [
  { id: "full-time", label: "Full Time Jobs", count: 155 },
  { id: "part-time", label: "Part Time Jobs", count: 35 },
  { id: "remote", label: "Remote Jobs", count: 52 },
  { id: "training", label: "Training Jobs", count: 15 },
]

const seniorityLevels = [
  { id: "student", label: "Student Level", count: 48 },
  { id: "entry", label: "Entry Level", count: 91 },
  { id: "mid", label: "Mid Level", count: 150 },
  { id: "senior", label: "Senior Level", count: 35 },
  { id: "director", label: "Directors", count: 20 },
  { id: "vp", label: "VP or Above", count: 15 },
]

const jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "MAGIC UNICORN",
    location: "ESTONIA, TELLIN",
    type: "Remote Job",
    salary: "$120,000/PA",
    level: "Senior",
    featured: true,
    urgent: true,
    description:
      "Join our dynamic team to lead product design initiatives and shape the future of our digital products...",
    requirements: ["5+ years of experience", "Strong portfolio", "Team leadership"],
    benefits: ["Health insurance", "Remote work", "Stock options"],
    tags: ["Design", "Product", "Leadership"],
    postedDate: "2 hours ago",
    applicants: 45,
    logo: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    title: "UI Artist",
    company: "PROGRESS CORPORATE",
    location: "DENMARK, COPENHAGEN",
    type: "Remote Job",
    salary: "$62500/PA",
    level: "Mid-Senior",
    description:
      "With deep professional at all levels of our organization including senior leadership, your impact will be valued and recognized. Join a well-established design organization.",
    tags: ["Design", "Senior", "Remote"],
    postedDate: "24 March 2024",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20154432-mPRnUreIwkRIwnEnfDhEoSYpUzhAwj.png",
  },
  {
    id: 3,
    title: "Senior Product Designer",
    company: "SINTRA GROUP",
    location: "ALBANIA, TIRANA",
    type: "Full-Time",
    salary: "$60520/PA",
    level: "Mid-Senior",
    description:
      "Since our inception in 2016, founded by a team of scientists from CERN, we have dedicated ourselves to providing free and open-source technology to millions worldwide and freedom online.",
    tags: ["Design", "Senior", "AI"],
    postedDate: "23 March 2024",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20154432-mPRnUreIwkRIwnEnfDhEoSYpUzhAwj.png",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "MAGIC UNICORN",
    location: "ESTONIA, TELLIN",
    type: "Remote Job",
    salary: "$50250/PA",
    level: "Student Entry",
    description:
      "In this position, you will work closely with cross-functional stakeholders including Product Managers, Data Analysts, and Engineers to make offers, bundles, and messaging efficient and seamless.",
    tags: ["Design", "UX", "UI"],
    postedDate: "24 March 2024",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20154432-mPRnUreIwkRIwnEnfDhEoSYpUzhAwj.png",
  },
]

const popularSearches = [
  "UI/UX Designer",
  "Product Manager",
  "Frontend Developer",
  "Data Scientist",
  "Marketing Manager",
  "DevOps Engineer",
  "Content Writer",
]

export default function JobsPage() {
  const router = useRouter()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [salaryRange, setSalaryRange] = useState([5000, 300000])
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterVisible, setIsFilterVisible] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 py-6 sm:py-12">
            <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
              <motion.h1
                className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Find Your Dream Job
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Discover opportunities that match your experience and career goals
              </motion.p>

              {/* Search Bar */}
              <motion.div
                className="relative max-w-[calc(100vw-2rem)] sm:max-w-xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Job title, keywords, or company"
                      className="pl-9 pr-20"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={() => setSearchQuery("")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full sm:w-auto">
                          <Filter className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-full sm:max-w-lg">
                        <SheetHeader>
                          <SheetTitle>Filter Jobs</SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
                          <div className="mt-4 space-y-6">
                            {/* Employment Type */}
                            <div className="space-y-2">
                              <h3 className="font-semibold text-sm">Employment Type</h3>
                              {jobTypes.map((type) => (
                                <div key={type.id} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-${type.id}`}
                                    checked={selectedTypes.includes(type.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedTypes([...selectedTypes, type.id])
                                        toggleFilter(type.label)
                                      } else {
                                        setSelectedTypes(selectedTypes.filter((t) => t !== type.id))
                                        toggleFilter(type.label)
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`mobile-${type.id}`}
                                    className="flex-1 flex items-center justify-between text-sm"
                                  >
                                    {type.label}
                                    <Badge variant="secondary" className="ml-2">
                                      {type.count}
                                    </Badge>
                                  </label>
                                </div>
                              ))}
                            </div>
                            {/* Seniority Level */}
                            <div className="space-y-2">
                              <h3 className="font-semibold text-sm">Seniority Level</h3>
                              {seniorityLevels.map((level) => (
                                <div key={level.id} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-${level.id}`}
                                    checked={selectedLevels.includes(level.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedLevels([...selectedLevels, level.id])
                                        toggleFilter(level.label)
                                      } else {
                                        setSelectedLevels(selectedLevels.filter((l) => l !== level.id))
                                        toggleFilter(level.label)
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`mobile-${level.id}`}
                                    className="flex-1 flex items-center justify-between text-sm"
                                  >
                                    {level.label}
                                    <Badge variant="secondary" className="ml-2">
                                      {level.count}
                                    </Badge>
                                  </label>
                                </div>
                              ))}
                            </div>
                            {/* Salary Range */}
                            <div className="space-y-2">
                              <h3 className="font-semibold text-sm">Salary Range</h3>
                              <Slider
                                value={salaryRange}
                                max={300000}
                                min={5000}
                                step={1000}
                                onValueChange={setSalaryRange}
                              />
                              <div className="flex items-center justify-between text-sm">
                                <span>${salaryRange[0].toLocaleString()}</span>
                                <span>${salaryRange[1].toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                        <div className="flex gap-2 mt-4">
                          <Button className="flex-1">Apply</Button>
                          <Button variant="outline" className="flex-1">
                            Reset
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                    <Button className="w-full sm:w-auto">Search</Button>
                  </div>
                </div>

                {/* Popular Searches */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {popularSearches.map((term) => (
                    <Badge
                      key={term}
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Briefcase, label: "Open Positions", value: "2,500+" },
                { icon: Building2, label: "Companies", value: "1,800+" },
                { icon: Users, label: "Job Seekers", value: "1M+" },
                { icon: Zap, label: "Jobs Filled", value: "50K+" },
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-5 w-5 mb-2 mx-auto text-primary" />
                    <div className="text-lg sm:text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Only visible on larger screens */}
            <motion.div
              className="hidden lg:block w-64 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filter) => (
                    <Badge key={filter} variant="secondary" className="flex items-center gap-1 text-xs">
                      {filter}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(filter)} />
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="text-xs" onClick={() => setActiveFilters([])}>
                    Clear all
                  </Button>
                </div>
              )}

              {/* Collapsible Filter Sections */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                  <h3 className="font-semibold text-sm">Employment Type</h3>
                  <ChevronRight className="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 space-y-2">
                  {jobTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={type.id}
                        checked={selectedTypes.includes(type.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTypes([...selectedTypes, type.id])
                            toggleFilter(type.label)
                          } else {
                            setSelectedTypes(selectedTypes.filter((t) => t !== type.id))
                            toggleFilter(type.label)
                          }
                        }}
                      />
                      <label htmlFor={type.id} className="flex-1 flex items-center justify-between text-sm">
                        {type.label}
                        <Badge variant="secondary" className="ml-2">
                          {type.count}
                        </Badge>
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
                  <h3 className="font-semibold text-sm">Seniority Level</h3>
                  <ChevronRight className="h-4 w-4 transition-transform ui-expanded:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 space-y-2">
                  {seniorityLevels.map((level) => (
                    <div key={level.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={level.id}
                        checked={selectedLevels.includes(level.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLevels([...selectedLevels, level.id])
                            toggleFilter(level.label)
                          } else {
                            setSelectedLevels(selectedLevels.filter((l) => l !== level.id))
                            toggleFilter(level.label)
                          }
                        }}
                      />
                      <label htmlFor={level.id} className="flex-1 flex items-center justify-between text-sm">
                        {level.label}
                        <Badge variant="secondary" className="ml-2">
                          {level.count}
                        </Badge>
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <div>
                <h3 className="font-semibold text-sm mb-4">Salary Range</h3>
                <div className="space-y-4">
                  <Slider value={salaryRange} max={300000} min={5000} step={1000} onValueChange={setSalaryRange} />
                  <div className="flex items-center justify-between text-sm">
                    <span>${salaryRange[0].toLocaleString()}</span>
                    <span>${salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-xl font-semibold">{jobs.length.toLocaleString()} Jobs Found</h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Sort by: Newest Post</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <Card className="group hover:shadow-md transition-all duration-300">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-8 h-8 rounded" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="text-sm sm:text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                                    {job.title}
                                  </h3>
                                  <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground mt-1">
                                    <span className="font-medium">{job.company}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {job.location}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                                  >
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>

                              <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                                {job.description}
                              </p>

                              {/* Requirements and Benefits */}
                              <div className="mt-4 space-y-4">
                                <div className="space-y-2">
                                  <div className="text-xs sm:text-sm font-medium">Requirements</div>
                                  <div className="flex flex-wrap gap-2">
                                    {job.requirements?.slice(0, 3).map((req, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {req}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-xs sm:text-sm font-medium">Benefits</div>
                                  <div className="flex flex-wrap gap-2">
                                    {job.benefits?.slice(0, 3).map((benefit, index) => (
                                      <Badge
                                        key={index}
                                        variant="secondary"
                                        className="bg-primary/10 text-primary text-xs"
                                      >
                                        {benefit}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                                <div className="flex items-center gap-4 text-xs sm:text-sm">
                                  <Badge variant="outline" className="rounded-full text-xs">
                                    {job.type}
                                  </Badge>
                                  <span className="text-primary font-medium">{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {job.postedDate}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {job.applicants} applicants
                                  </span>
                                </div>
                                <Button
                                  className="w-full sm:w-auto text-xs sm:text-sm mt-2 sm:mt-0"
                                  onClick={() => router.push(`/jobs/${job.id}/apply`)}
                                >
                                  Apply Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

