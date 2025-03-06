import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { useState } from "react"
import { AuthModal } from "../../components/auth/AuthModal"

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Experience", href: "#experience" },
  { label: "Learning Path", href: "#learning-path" },
  { label: "Community", href: "#community" }
]

export function NavigationBar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F17]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/placeholder-logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">VedSala</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-400 hover:text-white hidden md:flex"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-gray-800 hidden md:flex"
                onClick={() => window.location.href = '/login'}
              >
                Sign In
              </Button>
              <Button 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  )
} 