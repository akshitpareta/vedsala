import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Users, BookOpen, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const experienceCards = [
  {
    title: "Rookie Ready",
    description: "Perfect for beginners starting their learning journey",
    image: "/experience-1.jpg",
    link: "/courses/rookie"
  },
  {
    title: "Advanced Track",
    description: "For intermediate learners ready to level up",
    image: "/experience-2.jpg",
    link: "/courses/advanced"
  },
  {
    title: "Expert Path",
    description: "Master advanced concepts and techniques",
    image: "/experience-3.jpg",
    link: "/courses/expert"
  }
]

const upcomingEvents = [
  {
    title: "Live Masterclass",
    date: "March 15",
    time: "10:00 AM",
    status: "Open",
    icon: Users
  },
  {
    title: "Group Study Session",
    date: "March 16",
    time: "2:00 PM",
    status: "Full",
    icon: BookOpen
  },
  {
    title: "Mock Test Series",
    date: "March 18",
    time: "9:00 AM",
    status: "Open",
    icon: Calendar
  }
]

export function ExperienceSection() {
  return (
    <section className="py-24 bg-[#0A0F17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium">
            <Users className="h-4 w-4" />
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Cycling World<br />
            Welcome
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Experience the future of education with our cutting-edge platform designed to enhance your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Experience Card */}
          <Card className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-900/40 border-gray-800 group">
            <img
              src="/experience.jpg"
              alt="Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-white font-medium">Experience</span>
              </div>
              <div>
                <div className="flex -space-x-3 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      src={`/avatar-${i + 1}.jpg`}
                      alt={`Student ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-gray-800"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">01/12</span>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl h-10 w-10"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-purple-500 hover:bg-purple-600 rounded-xl h-10 w-10"
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right Side Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Expert-led Courses Card */}
            <Card className="col-span-2 bg-gray-900/40 border-gray-800 rounded-3xl p-6 hover:bg-gray-900/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert-led Courses</h3>
                  <p className="text-sm text-gray-400">
                    Learn from industry experts and experienced educators
                  </p>
                </div>
              </div>
            </Card>

            {/* Course Details Card */}
            <Card className="col-span-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-gray-800 text-white rounded-3xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Course Details</h3>
                  <p className="text-sm text-gray-400">
                    Structured learning paths for every level
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded-xl h-10 w-10"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm text-gray-400">Join Live Sessions</span>
              <h3 className="text-2xl font-bold text-white mt-2">Upcoming Events</h3>
            </div>
            <Button 
              variant="outline" 
              className="text-white border-gray-800 hover:bg-gray-800/60"
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/40 border-gray-800 rounded-2xl p-6 hover:bg-gray-900/60 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-400">{event.date} at {event.time}</p>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    event.status === "Open" 
                      ? "bg-green-500/10 text-green-400"
                      : "bg-gray-500/10 text-gray-400"
                  )}>
                    {event.status}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-purple-400 hover:text-purple-300 group"
                >
                  Join Event
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 