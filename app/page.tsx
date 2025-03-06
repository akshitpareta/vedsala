"use client"

import { NavigationBar } from "./components/sections/NavigationBar"
import { HeroSection } from "./components/sections/HeroSection"
import { ExperienceSection } from "./components/sections/ExperienceSection"
import { FeaturesSection } from "./components/sections/FeaturesSection"
import { AIFeaturesSection } from "./components/sections/AIFeaturesSection"
import { SolutionsGrid } from "./components/sections/SolutionsGrid"
import { WhyChooseUs } from "./components/sections/WhyChooseUs"
import { KeyMetrics } from "./components/sections/KeyMetrics"
import { LearningPath } from "./components/sections/LearningPath"
import { QuickAccess } from "./components/QuickAccess"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { 
  Heart,
  Trophy,
  Users,
  MapPin,
  MessageCircle,
  Share2,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <main className="min-h-screen bg-[#0A0F17]">
      <NavigationBar />
      <QuickAccess />
      
      <div id="home">
        <HeroSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="solutions">
        <SolutionsGrid />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="learning-path">
        <LearningPath />
      </div>

      <KeyMetrics />

      <div id="ai-features">
        <AIFeaturesSection />
      </div>

      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      {/* Community Section */}
      <section id="community" className="py-24 bg-[#0A0F17] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="relative aspect-square overflow-hidden rounded-3xl bg-gray-900/40 group">
              <img
                src="/placeholder.jpg"
                alt="Community"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <img
                        key={i}
                        src="/placeholder-user.jpg"
                        alt="Community Member"
                        className="w-10 h-10 rounded-full border-2 border-gray-800"
                      />
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium">Active Members</div>
                    <div className="text-xs text-gray-300">Join 10,000+ students</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {["UPSC", "SSC", "Banking"].map((level, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/60 rounded-full text-white text-xs"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Join Our Community
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Be Part of Our Growing<br />
                Learning Community
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Learning Is Better Together<br />
                Be part of our community and excel in your educational journey.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Access to premium study materials",
                  "Connect with expert educators",
                  "Participate in live doubt clearing sessions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 rounded-xl px-8"
                  onClick={() => setShowAuthModal(true)}
                >
                  Join Now
                </Button>
                <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800/60 rounded-xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0A0F17] text-white border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Contact Us
            </span>
            <h2 className="text-4xl font-bold mt-6 text-white">Get In Touch!</h2>
            <p className="text-gray-300 mt-4">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-gray-900/40 border-gray-800 p-6 rounded-2xl">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full p-4 pr-12 rounded-lg bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600 rounded-lg w-8 h-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
            {[
              { title: "ADDRESS", icon: MapPin, content: ["123 Education St,", "New Delhi, India"] },
              { title: "PHONE", icon: MessageCircle, content: ["(+91) 98765-43210"] },
              { title: "EMAIL", icon: Share2, content: ["contact@vedsala.com"] }
            ].map((item, i) => (
              <Card key={i} className="bg-gray-900/40 border-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <item.icon className="h-4 w-4 text-orange-500" />
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                {item.content.map((line, j) => (
                  <p key={j} className="text-sm text-gray-300">{line}</p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A0F17] text-white border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-sm text-gray-400 order-3 md:order-2">
              © Copyright 2024 All Rights Reserved
            </p>
            <div className="flex items-center gap-4 order-2 md:order-3">
              {[
                { icon: Facebook, href: "#facebook" },
                { icon: Twitter, href: "#twitter" },
                { icon: Instagram, href: "#instagram" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {showAuthModal && <AuthModal />}
    </main>
  )
} 