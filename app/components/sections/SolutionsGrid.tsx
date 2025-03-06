import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, BookOpen, Bot, ChartBar, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    title: "Interactive Learning",
    description: "Our state-of-the-art interactive learning platform provides real-time feedback and personalized study paths.",
    image: "/solutions/interactive.jpg",
    icon: Lightbulb,
    color: "orange",
    size: "large"
  },
  {
    title: "Study Materials & Resources",
    description: "Comprehensive study materials with flexible access options to suit your learning style.",
    image: "/solutions/materials.jpg",
    icon: BookOpen,
    color: "blue",
    size: "large"
  },
  {
    title: "AI Study Assistant",
    description: "24/7 AI-powered study assistance to help you overcome challenges.",
    image: "/solutions/ai.jpg",
    icon: Bot,
    color: "purple",
    size: "small"
  },
  {
    title: "Progress Tracking",
    description: "Real-time progress monitoring and performance analytics.",
    image: "/solutions/progress.jpg",
    icon: ChartBar,
    color: "green",
    size: "small"
  },
  {
    title: "Expert Support",
    description: "Direct access to subject matter experts and mentors.",
    image: "/solutions/expert.jpg",
    icon: Users,
    color: "pink",
    size: "small"
  }
]

export function SolutionsGrid() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium">
              <Lightbulb className="h-4 w-4" />
              Learning Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
              Tailored solutions for<br />diverse needs of learners
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl">
              Choose from our comprehensive range of learning solutions designed to help you succeed.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="text-white border-gray-800 hover:bg-gray-800/60 hidden md:flex"
          >
            View All Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-gray-900/40 border-gray-800",
                solution.size === "large" ? "lg:col-span-2" : ""
              )}
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-${solution.color}-500/20 flex items-center justify-center`}>
                      <solution.icon className={`h-5 w-5 text-${solution.color}-400`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <Button
                    variant="ghost"
                    className={`w-fit text-${solution.color}-400 hover:text-${solution.color}-300 hover:bg-${solution.color}-500/10 group/btn p-0 h-auto`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button 
            variant="outline" 
            className="text-white border-gray-800 hover:bg-gray-800/60"
          >
            View All Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 