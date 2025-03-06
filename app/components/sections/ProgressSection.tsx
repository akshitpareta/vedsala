import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChartLine, Users, Clock, Target, Shield } from "lucide-react"
import { motion } from "framer-motion"

const progressFeatures = [
  {
    title: "Progress Tracking",
    description: "Real-time progress monitoring and performance analytics",
    icon: ChartLine,
    stats: "95%",
    statsLabel: "Accuracy"
  },
  {
    title: "Expert Support",
    description: "Direct access to subject matter experts and mentors",
    icon: Users,
    stats: "24/7",
    statsLabel: "Support"
  }
]

const upcomingEvents = [
  {
    title: "Live Masterclass",
    time: "10:00 AM",
    date: "Today",
    status: "Open",
    attendees: 45
  },
  {
    title: "Group Study Session",
    time: "2:00 PM",
    date: "Tomorrow",
    status: "Full",
    attendees: 30
  },
  {
    title: "Mock Test Series",
    time: "9:00 AM",
    date: "Mar 18",
    status: "Open",
    attendees: 25
  }
]

export function ProgressSection() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Features */}
          <div className="space-y-6">
            {progressFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 rounded-2xl hover:bg-gray-900/80 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-500">
                            {feature.stats}
                          </div>
                          <div className="text-sm text-gray-400">
                            {feature.statsLabel}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        {feature.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 p-0 h-auto group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Upcoming Events
                  </h3>
                  <p className="text-sm text-gray-400">
                    Join live sessions with experts
                  </p>
                </div>
                <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 p-4 rounded-xl hover:bg-gray-800 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white group-hover:text-orange-500 transition-colors">
                              {event.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {event.time} · {event.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.status === 'Open' 
                              ? 'bg-green-500/10 text-green-500' 
                              : 'bg-gray-500/10 text-gray-400'
                          }`}>
                            {event.status}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-white"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>Next session in 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Expert verified</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 