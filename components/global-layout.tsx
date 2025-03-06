"use client"

import { useState, useEffect } from 'react'
import { Sidebar } from "@/components/sidebar"
import { FloatingActionBar } from "@/components/floating-action-bar"
import { useSidebar } from "./sidebar-provider"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [showCategoryBar, setShowCategoryBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { isVisible } = useSidebar()
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  const controlCategoryBar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowCategoryBar(false)
      } else {
        setShowCategoryBar(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlCategoryBar)
      return () => {
        window.removeEventListener('scroll', controlCategoryBar)
      }
    }
  }, [lastScrollY])

  if (isLandingPage) {
    return <>{children}</>
  }

  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar />
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        isVisible ? "ml-64" : "ml-0"
      )}>
        <main className="relative">
          {children}
        </main>
      </div>
      <div className={cn(
        "fixed bottom-0 left-0 right-0 transition-all duration-300",
        showCategoryBar ? "translate-y-0" : "translate-y-full md:translate-y-0"
      )}>
        <FloatingActionBar />
      </div>
    </div>
  )
}

