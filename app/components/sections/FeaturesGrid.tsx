import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, ChartBar, Users } from "lucide-react"

const learningFeatures = [
  {
    title: "Interactive Learning",
    description: "Our state-of-the-art interactive learning platform provides real-time feedback and personalized study paths.",
    image: "/features/interactive.jpg",
    icon: Users,
    link: "/interactive-learning"
  },
  {
    title: "Study Materials & Resources",
    description: "Comprehensive study materials with flexible access options to suit your learning style.",
    image: "/features/materials.jpg",
    icon: BookOpen,
    link: "/study-materials"
  },
  {
    title: "AI Study Assistant",
    description: "24/7 AI-powered study assistance to help you overcome challenges.",
    image: "/features/ai.jpg",
    icon: ChartBar,
    link: "/ai-assistant"
  }
]

const additionalFeatures = [
  {
    title: "Progress Tracking",
    description: "Real-time progress monitoring and performance analytics.",
    link: "/progress"
  },
  {
    title: "Expert Support",
    description: "Direct access to subject matter experts and mentors.",
    link: "/expert-support"
  },
  {
    title: "Mock Test Series",
    description: "Practice with comprehensive mock tests and get detailed analysis.",
    link: "/mock-tests"
  }
]

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm text-gray-400">Learning Solutions</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            Tailored solutions for diverse needs of learners
          </h2>
        </div>

        {/* Main Learning Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-900/40 border-gray-800 overflow-hidden group hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    {feature.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-400 p-0 h-auto group mt-4"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-900/40 border-gray-800 p-6 hover:bg-gray-900/60 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {feature.description}
              </p>
              <Button
                variant="ghost"
                className="text-orange-500 hover:text-orange-400 p-0 h-auto group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Button 
            variant="outline"
            className="text-white border-gray-700 hover:bg-gray-800/60"
          >
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
} 