import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Clock, Users, BookOpen, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { AuthModal } from "../../components/auth/AuthModal"

const stats = [
  { label: "Active Students", value: "10K+", icon: Users, color: "orange" },
  { label: "Success Rate", value: "95%", icon: Target, color: "green" },
  { label: "Expert Mentors", value: "100+", icon: BookOpen, color: "blue" }
]

export function HeroSection() {
  const router = useRouter()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleGetStarted = () => {
    // For now, we'll show the auth modal
    setIsAuthModalOpen(true)
    // Alternatively, you can directly redirect to dashboard
    // router.push("/dashboard")
  }

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  Join 10,000+ Students
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Your Learning Journey
                </h1>
                <p className="mt-6 text-lg text-gray-400 max-w-lg">
                  Experience personalized learning with AI-powered guidance and expert mentorship. Start your success story today.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 rounded-xl text-lg">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/40 border-gray-800 p-4 rounded-xl hover:bg-gray-900/60 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center`}>
                        <stat.icon className={`h-5 w-5 text-${stat.color}-400`} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-[40px] blur-3xl" />
              <div className="relative h-full">
                <img
                  src="/hero-image.jpg"
                  alt="Learning Platform"
                  className="w-full h-full object-cover rounded-[32px] shadow-2xl"
                />
                
                {/* Floating Cards */}
                <Card className="absolute top-8 -left-4 bg-gray-900/90 border-gray-800 p-4 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Next Session</div>
                      <div className="text-xs text-gray-400">In 15 minutes</div>
                    </div>
                  </div>
                </Card>

                <Card className="absolute bottom-8 -right-4 bg-gray-900/90 border-gray-800 p-4 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          src={`/avatar-${i}.jpg`}
                          alt={`Student ${i}`}
                          className="w-8 h-8 rounded-full border-2 border-gray-900"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Active Now</div>
                      <div className="text-xs text-gray-400">Join the session</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  )
} 