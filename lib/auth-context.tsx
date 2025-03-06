"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isGuest: boolean
  login: (user: User) => void
  loginAsGuest: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session on component mount
    const storedUser = localStorage.getItem("user")
    const storedGuest = localStorage.getItem("isGuest")
    const authToken = Cookies.get('auth-token')
    
    if (storedUser && authToken) {
      setUser(JSON.parse(storedUser))
      setIsGuest(false)
    } else if (storedGuest === 'true' && authToken) {
      setIsGuest(true)
      setUser(null)
    }
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    setIsGuest(false)
    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.removeItem("isGuest")
    Cookies.set('auth-token', 'true', { expires: 7 })
    router.push('/dashboard')
  }

  const loginAsGuest = () => {
    setIsGuest(true)
    setUser(null)
    localStorage.setItem("isGuest", "true")
    localStorage.removeItem("user")
    Cookies.set('auth-token', 'true', { expires: 1 }) // Guest token expires in 1 day
    router.push('/dashboard')
  }

  const logout = () => {
    setUser(null)
    setIsGuest(false)
    localStorage.removeItem("user")
    localStorage.removeItem("isGuest")
    Cookies.remove('auth-token')
    router.push('/')
  }

  const value = {
    user,
    isGuest,
    login,
    loginAsGuest,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
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

