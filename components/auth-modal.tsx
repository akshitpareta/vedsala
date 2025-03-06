"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function AuthModal() {
  const [isLoading, setIsLoading] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login, loginAsGuest } = useAuth()

  const handleGuestAccess = async () => {
    setIsLoading(true)
    try {
      // Simulate loading
      await new Promise(resolve => setTimeout(resolve, 1000))
      loginAsGuest()
    } catch (error) {
      setError("Failed to login as guest")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    alert("Google login not implemented yet")
  }

  const handlePhoneLogin = () => {
    // Implement phone login logic here
    alert("Phone login not implemented yet")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
    // Demo login - in production, this would validate against a backend
    if (email === "demo@example.com" && password === "demo123") {
      login({
        id: "1",
        name: "Demo User",
        email: email
      })
    } else {
      setError("Invalid credentials. Use demo@example.com / demo123")
    }
  }

  if (showLoginForm) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-background border rounded-lg shadow-lg max-w-md w-full p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@example.com"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Login
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowLoginForm(false)}>
                Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <div className="space-y-3">
          <Button
            className="w-full"
            onClick={handleGuestAccess}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Continue as Guest"
            )}
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowLoginForm(true)}
          >
            Login with Email
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={handlePhoneLogin}
          >
            Continue with Phone
          </Button>
        </div>
      </div>
    </div>
  )
} 