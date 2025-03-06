import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Calendar, 
  Target, 
  BarChart, 
  Bot, 
  Layout,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  PenTool
} from "lucide-react"

const features = [
  {
    title: "AI Study Assistant",
    description: "Get personalized learning recommendations and instant doubt resolution",
    icon: Bot,
    color: "purple",
    stats: "95%",
    statsLabel: "Accuracy"
  },
  {
    title: "Smart Calendar",
    description: "Organize your study schedule and track important events",
    icon: Calendar,
    color: "blue",
    stats: "2x",
    statsLabel: "Productivity"
  },
  {
    title: "Progress Analytics",
    description: "Track your progress with detailed performance metrics",
    icon: BarChart,
    color: "green",
    stats: "360°",
    statsLabel: "Insights"
  },
  {
    title: "Live Practice",
    description: "Test your knowledge with real-time interactive quizzes",
    icon: Target,
    color: "orange",
    stats: "10K+",
    statsLabel: "Questions"
  },
  {
    title: "Resource Library",
    description: "Access comprehensive study materials and guides",
    icon: BookOpen,
    color: "pink",
    stats: "5K+",
    statsLabel: "Resources"
  },
  {
    title: "Expert Connect",
    description: "Connect with subject matter experts for guidance",
    icon: MessageSquare,
    color: "yellow",
    stats: "24/7",
    statsLabel: "Support"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Everything You Need to<br />Excel in Your Learning Journey
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our comprehensive platform offers a wide range of features designed to enhance your learning experience
            and help you achieve your educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/40 border-gray-800 p-6 rounded-2xl hover:bg-gray-900/60 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold text-${feature.color}-400`}>
                    {feature.stats}
                  </div>
                  <div className="text-xs text-gray-500">
                    {feature.statsLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {feature.description}
              </p>

              <Button
                variant="ghost"
                className="w-full justify-between text-orange-400 hover:text-orange-300 group/btn"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 