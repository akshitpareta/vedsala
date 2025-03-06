"use client"

import { ReactNode } from 'react'
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { useSidebar } from "./sidebar-provider"
import { Footer } from "@/components/footer"
import { FloatingActionBar } from "@/components/floating-action-bar"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isVisible } = useSidebar()
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!isLandingPage && <Navbar />}
      <div className="flex flex-1">
        {!isLandingPage && <Sidebar />}
        <main className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          !isLandingPage && (isVisible ? "ml-64" : "ml-0")
        )}>
          {children}
        </main>
      </div>
      {!isLandingPage && <FloatingActionBar />}
      <Footer />
    </div>
  )
}

