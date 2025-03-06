"use client"

import { Search, Bell, Plus, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
import { useSidebar } from "./sidebar-provider"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()
  const isLandingPage = pathname === "/"
  const { user, logout } = useAuth()

  if (isLandingPage) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4 lg:px-6">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Link href="/profile" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%2019.04.03_67f3fc33.jpg-zWpuGC3dFWYpVIuP5qmkhH6BQEPOlz.jpeg"
              alt="Vedsala Logo"
              className="h-8 w-auto"
            />
            <span className="hidden font-bold md:inline-block">Vedsala</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center gap-4 md:gap-6 md:px-6">
          <div className="relative hidden flex-1 md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="h-9 pl-8 md:w-2/3 lg:w-1/2" />
          </div>
          <nav className="hidden gap-2 md:flex">
            <Button variant="ghost">Full access</Button>
            <Button variant="ghost">University</Button>
            <Button variant="ghost">News</Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Plus className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name || "User"} />
                  <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile" className="flex w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="grid grid-flow-row auto-rows-max p-4">
            <Button variant="ghost" className="justify-start">
              Full access
            </Button>
            <Button variant="ghost" className="justify-start">
              University
            </Button>
            <Button variant="ghost" className="justify-start">
              News
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

