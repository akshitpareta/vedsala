import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  Trophy,
  ArrowRight,
  ChevronRight
} from "lucide-react"

const pathSteps = [
  {
    icon: BookOpen,
    title: "Foundation",
    description: "Master the basics with interactive lessons",
    duration: "4-6 weeks",
    color: "blue",
    status: "Available"
  },
  {
    icon: Target,
    title: "Intermediate",
    description: "Build on your knowledge with advanced concepts",
    duration: "8-10 weeks",
    color: "purple",
    status: "Available"
  },
  {
    icon: GraduationCap,
    title: "Advanced",
    description: "Specialize in your chosen track",
    duration: "10-12 weeks",
    color: "orange",
    status: "Coming Soon"
  },
  {
    icon: Trophy,
    title: "Expert",
    description: "Master advanced techniques and become an expert",
    duration: "12-14 weeks",
    color: "green",
    status: "Coming Soon"
  }
]

export function LearningPath() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium">
            <GraduationCap className="h-4 w-4" />
            Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Your Path to Success
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Follow our structured learning path designed to take you from beginner to expert with comprehensive support at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathSteps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-900/40 border-gray-800 p-6 rounded-2xl hover:bg-gray-900/60 transition-all duration-300 relative group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/20 flex items-center justify-center mb-4`}>
                <step.icon className={`h-6 w-6 text-${step.color}-400`} />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {step.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {step.duration}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  step.status === 'Available'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-gray-500/10 text-gray-400'
                }`}>
                  {step.status}
                </span>
              </div>

              {index < pathSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 