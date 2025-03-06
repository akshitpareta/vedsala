"use client"

import * as React from "react"
import { usePathname, useRouter } from 'next/navigation'
import { 
  ChevronRight, 
  Home, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  Info, 
  Mail, 
  FileText, 
  Settings, 
  HelpCircle, 
  Newspaper, 
  ShoppingBag, 
  CreditCard, 
  LifeBuoy,
  ChevronLeft,
  Route,
  Send
} from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"

interface MenuSection {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  subsections?: { label: string; href: string }[]
}

const mainMenuSections: MenuSection[] = [
  { 
    label: 'Home',
    href: '/dashboard',
    icon: Home
  },
  { 
    label: 'Learning',
    href: '/learning',
    icon: GraduationCap,
    subsections: [
      { label: 'Courses', href: '/courses' },
      { label: 'Learning Path', href: '/learning-path' },
      { label: 'Live Quiz', href: '/live-quiz' },
      { label: 'Notes', href: '/notes' },
      { label: 'Library', href: '/library' }
    ]
  },
  { 
    label: 'Resources',
    href: '/resources',
    icon: BookOpen,
    subsections: [
      { label: 'AI Guide', href: '/ai-guide' },
      { label: 'YouTube Playlists', href: '/youtube-playlists' },
      { label: 'Programmes', href: '/programmes' }
    ]
  },
  { 
    label: 'News & Updates',
    href: '/news',
    icon: Newspaper,
    subsections: [
      { label: 'Current Affairs', href: '/current-affairs' },
      { label: 'Trending', href: '/trending' }
    ]
  }
]

const communityLinks: MenuSection[] = [
  { label: 'Community', icon: Users, href: '/community' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Forums', icon: MessageSquare, href: '/forums' }
]

const userLinks: MenuSection[] = [
  { label: 'Profile', icon: Users, href: '/profile' },
  { label: 'Career', icon: Route, href: '/career' },
  { label: 'Shopping', icon: ShoppingBag, href: '/shopping' },
  { label: 'Subscription', icon: CreditCard, href: '/subscription' }
]

const helpLinks: MenuSection[] = [
  { label: 'Help Center', icon: HelpCircle, href: '/help' },
  { label: 'Support', icon: LifeBuoy, href: '/support' },
  { label: 'Send Feedback', icon: Send, href: '/feedback' },
  { label: 'Settings', icon: Settings, href: '/settings' }
]

const footerLinks: MenuSection[] = [
  { label: 'About', icon: Info, href: '/about' },
  { label: 'Our Story', icon: BookOpen, href: '/our-story' },
  { label: 'Team', icon: Users, href: '/team' },
  { label: 'Contact Us', icon: Mail, href: '/contact' },
  { label: 'Terms of Service', icon: FileText, href: '/terms' },
  { label: 'Privacy Policy', icon: FileText, href: '/privacy' },
  { label: 'Disclaimer', icon: FileText, href: '/disclaimer' }
]

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [openSection, setOpenSection] = React.useState<string | null>(null)
  const { isVisible, toggleSidebar } = useSidebar()

  React.useEffect(() => {
    const currentSection = mainMenuSections.find(section => 
      pathname.startsWith(section.href) || 
      section.subsections?.some(subsection => pathname === subsection.href)
    )
    if (currentSection) {
      setOpenSection(currentSection.label)
    }
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href)

  const renderMenuSection = (section: MenuSection) => {
    if (section.subsections) {
      return (
        <Collapsible
          key={section.label}
          open={openSection === section.label}
          onOpenChange={(isOpen) => setOpenSection(isOpen ? section.label : null)}
        >
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "flex items-center w-full py-1.5 px-2 text-sm rounded-md transition-colors",
                isActive(section.href) ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary hover:bg-accent'
              )}
            >
              {section.icon && <section.icon className="h-4 w-4 mr-2" />}
              <ChevronRight 
                className={cn(
                  "h-4 w-4 mr-1 transition-transform",
                  openSection === section.label ? "rotate-90" : ""
                )} 
              />
              {section.label}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-4 pl-2 border-l border-border">
              {section.subsections.map((subsection) => (
                <Link
                  key={subsection.label}
                  href={subsection.href}
                  className={cn(
                    "flex items-center w-full py-1.5 px-2 text-sm rounded-md transition-colors",
                    isActive(subsection.href) ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  )}
                >
                  {subsection.label}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <Link
        key={section.label}
        href={section.href}
        className={cn(
          "flex items-center w-full py-1.5 px-2 text-sm rounded-md transition-colors",
          isActive(section.href) ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary hover:bg-accent'
        )}
      >
        {section.icon && <section.icon className="h-4 w-4 mr-2" />}
        {section.label}
      </Link>
    )
  }

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-background pt-16 transition-all duration-300 ease-in-out overflow-hidden",
      isVisible ? "translate-x-0" : "-translate-x-full"
    )}>
      <ScrollArea className="flex-1 overflow-hidden">
        <nav className="p-4">
          {/* Main Menu */}
          <div className="mb-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Main Menu
            </div>
            <div className="space-y-0.5">
              {mainMenuSections.map(renderMenuSection)}
            </div>
          </div>

          {/* Community */}
          <div className="mb-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Community
            </div>
            <div className="space-y-0.5">
              {communityLinks.map(renderMenuSection)}
            </div>
          </div>

          {/* User */}
          <div className="mb-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              User
            </div>
            <div className="space-y-0.5">
              {userLinks.map(renderMenuSection)}
            </div>
          </div>

          {/* Help & Support */}
          <div className="mb-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Help & Support
            </div>
            <div className="space-y-0.5">
              {helpLinks.map(renderMenuSection)}
            </div>
          </div>

          {/* Footer Links */}
          <div className="space-y-0.5">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Information
            </div>
            <div className="space-y-0.5">
              {footerLinks.map(renderMenuSection)}
            </div>
          </div>
        </nav>
      </ScrollArea>
      <Button
        onClick={toggleSidebar}
        className={cn(
          "fixed top-20 z-50 h-10 w-10 rounded-r-full bg-primary text-primary-foreground transition-all duration-300",
          isVisible 
            ? "left-64 hover:bg-primary/90" 
            : "left-0 hover:bg-primary/90"
        )}
      >
        <ChevronLeft className={cn(
          "h-6 w-6 transition-transform duration-300",
          isVisible ? "" : "rotate-180"
        )} />
      </Button>
    </aside>
  )
}

