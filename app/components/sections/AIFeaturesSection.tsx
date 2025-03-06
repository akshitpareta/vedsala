import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Brain, Target, Zap, ArrowRight } from "lucide-react"

const aiFeatures = [
  {
    title: "AI Study Assistant",
    description: "Get instant answers to your questions and personalized explanations 24/7.",
    icon: Bot,
    color: "blue"
  },
  {
    title: "Smart Progress Tracking",
    description: "AI-powered analytics to identify your strengths and areas for improvement.",
    icon: Target,
    color: "orange"
  },
  {
    title: "Adaptive Learning",
    description: "Customized learning paths that adapt to your pace and learning style.",
    icon: Brain,
    color: "purple"
  },
  {
    title: "Quick Concept Mastery",
    description: "Break down complex topics into easily digestible learning modules.",
    icon: Zap,
    color: "green"
  }
]

export function AIFeaturesSection() {
  return (
    <section className="py-24 bg-[#0A0F17] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium">
            <Bot className="h-4 w-4" />
            AI-Powered Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Supercharge Your Learning with AI
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Experience the future of education with our cutting-edge AI features designed to enhance your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 p-6 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {feature.description}
              </p>
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 p-0 h-auto group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Demo Card */}
        <Card className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-gray-800 p-8 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Try Our AI Assistant Now
              </h3>
              <p className="text-gray-400 mb-6">
                Experience how our AI can help you learn faster and more effectively. Get instant answers to your questions.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Start Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-64 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl" />
              <img
                src="/ai-demo.jpg"
                alt="AI Demo"
                className="w-full h-full object-cover rounded-xl relative z-10"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 