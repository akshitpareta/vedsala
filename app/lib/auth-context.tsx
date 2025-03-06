"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'

interface AuthContextType {
  user: any | null
  isGuest: boolean
  login: (credentials: any) => Promise<void>
  loginAsGuest: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check for guest status in cookies
    const guestStatus = Cookies.get("isGuest")
    if (guestStatus === "true") {
      setIsGuest(true)
    }
  }, [])

  const login = async (credentials: any) => {
    // Implement actual login logic here
    setUser({ name: credentials.username })
    setIsGuest(false)
    Cookies.remove("isGuest")
  }

  const loginAsGuest = () => {
    setIsGuest(true)
    Cookies.set("isGuest", "true", { expires: 7 }) // Expires in 7 days
  }

  const logout = () => {
    setUser(null)
    setIsGuest(false)
    Cookies.remove("isGuest")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isGuest, login, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 