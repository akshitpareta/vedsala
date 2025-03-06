import { Card } from "@/components/ui/card"
import { Users, BookOpen, Trophy, Star, Clock, Target } from "lucide-react"

const metrics = [
  {
    icon: Users,
    label: "Active Students",
    value: "10,000+",
    subtext: "Learning Daily",
    color: "blue"
  },
  {
    icon: Trophy,
    label: "Success Rate",
    value: "95%",
    subtext: "Course Completion",
    color: "orange"
  },
  {
    icon: BookOpen,
    label: "Course Library",
    value: "500+",
    subtext: "Expert-Led Courses",
    color: "purple"
  },
  {
    icon: Star,
    label: "Student Rating",
    value: "4.8/5",
    subtext: "Average Rating",
    color: "yellow"
  },
  {
    icon: Clock,
    label: "Learning Hours",
    value: "1M+",
    subtext: "Hours Completed",
    color: "green"
  },
  {
    icon: Target,
    label: "Career Success",
    value: "85%",
    subtext: "Placement Rate",
    color: "pink"
  }
]

export function KeyMetrics() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-medium">
            <Target className="h-4 w-4" />
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Transforming Education<br />Through Innovation
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our platform has helped thousands of students achieve their learning goals through personalized education and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-gray-900/40 border-gray-800 p-6 rounded-2xl hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-${metric.color}-500/20 flex items-center justify-center`}>
                  <metric.icon className={`h-6 w-6 text-${metric.color}-400`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.subtext}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 