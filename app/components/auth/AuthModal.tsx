"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, User, Chrome, Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isGuestLoading, setIsGuestLoading] = useState(false)
  const router = useRouter()
  const { loginAsGuest } = useAuth()

  if (!isOpen) return null

  const handleGuestAccess = async () => {
    setIsGuestLoading(true)
    try {
      loginAsGuest()
      setTimeout(() => {
        router.push("/dashboard")
        onClose()
      }, 1000)
    } catch (error) {
      console.error("Error during guest access:", error)
      setIsGuestLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
    router.push("/dashboard")
    onClose()
  }

  const handlePhoneLogin = () => {
    // TODO: Implement phone login
    router.push("/dashboard")
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gray-900/95 border-gray-800 p-6 rounded-2xl z-50">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Get Started</h2>
              <p className="text-gray-400">Choose how you want to continue</p>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full py-6 border-gray-700 hover:bg-gray-800"
                onClick={handleGuestAccess}
                disabled={isGuestLoading}
              >
                <User className="h-5 w-5 mr-3 text-gray-400" />
                <span className="flex-1 text-left">Continue as Guest</span>
                {isGuestLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-400 border-t-white" />
                ) : (
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                )}
              </Button>

              <Button
                variant="outline"
                className="w-full py-6 border-gray-700 hover:bg-gray-800"
                onClick={handleGoogleLogin}
              >
                <Chrome className="h-5 w-5 mr-3 text-blue-500" />
                <span className="flex-1 text-left">Continue with Google</span>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </Button>

              <Button
                variant="outline"
                className="w-full py-6 border-gray-700 hover:bg-gray-800"
                onClick={handlePhoneLogin}
              >
                <Phone className="h-5 w-5 mr-3 text-green-500" />
                <span className="flex-1 text-left">Continue with Phone</span>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
} 