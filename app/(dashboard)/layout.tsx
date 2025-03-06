"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isGuest } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Allow access if user is logged in or is a guest
    if (!user && !isGuest) {
      router.push("/")
    }
  }, [user, isGuest, router])

  // Show loading state while checking authentication
  if (!user && !isGuest) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0F17]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#0A0F17]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </div>
  )
} 