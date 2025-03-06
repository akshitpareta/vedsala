import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Lightbulb, GraduationCap, BarChart } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access world-class education from anywhere, breaking geographical barriers for quality learning.",
    stats: "150+ Countries"
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description: "Personalized learning paths designed to match your unique goals and learning style.",
    stats: "100+ Courses"
  },
  {
    icon: GraduationCap,
    title: "Expert-Led Learning",
    description: "Learn from industry experts and experienced educators who guide your journey.",
    stats: "500+ Experts"
  },
  {
    icon: BarChart,
    title: "Proven Success",
    description: "Track record of successful outcomes with data-driven learning approaches.",
    stats: "95% Success"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-orange-600 text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold mb-6">
                We specialize in providing<br />
                reliable and efficient<br />
                <span className="text-orange-500">learning solutions</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you need to enhance your skills, prepare for exams, or expand your knowledge globally, we're here to help you achieve your goals with precision and speed.
              </p>
              <Button 
                className="rounded-full group"
                variant="outline"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                      <feature.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {feature.stats}
                    </span>
                    <div className="w-12 h-1 bg-orange-500 rounded-full" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 