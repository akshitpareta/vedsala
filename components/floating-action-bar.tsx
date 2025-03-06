"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Bell, Home, BookOpen, Users, Briefcase, Sparkles, Newspaper } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useSidebar } from "./sidebar-provider"
import { ExpandableTabs } from "@/components/ui/expandable-tabs"
import { useMediaQuery } from "@/hooks/use-media-query"

const actions = [
  { label: "Home", count: "", href: "/profile", icon: Home }, // Updated href
  { label: "Live Quiz", count: "32", href: "/live-quiz", icon: Bell },
  { label: "New", count: "455", href: "/new", icon: Newspaper },
  { label: "Courses", count: "12", href: "/courses", icon: BookOpen },
  { label: "Community", count: "89", href: "/community", icon: Users },
  { label: "Jobs", count: "67", href: "/jobs", icon: Briefcase },
  { label: "AI Guide", count: "45", href: "/ai-guide", icon: Sparkles },
]

export function FloatingActionBar() {
  const router = useRouter()
  const pathname = usePathname()
  const { isVisible } = useSidebar()
  const [activeTab, setActiveTab] = React.useState<number | null>(() => {
    const index = actions.findIndex((action) => action.href === pathname)
    return index >= 0 ? index : null
  })
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = React.useState(false)
  const [showRightArrow, setShowRightArrow] = React.useState(true)

  const isMobile = useMediaQuery("(max-width: 640px)")

  const checkScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  React.useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll])

  React.useEffect(() => {
    const index = actions.findIndex((action) => action.href === pathname)
    setActiveTab(index >= 0 ? index : null)
  }, [pathname])

  const handleScroll = () => {
    checkScroll()
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 200
    const newScrollLeft =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  const handleActionClick = (index: number) => {
    setActiveTab(index)
    router.push(actions[index].href)
  }

  const tabsContent = actions.map((action) => ({
    title: action.label,
    icon: action.icon,
  }))

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${isVisible ? "translate-y-full md:translate-y-0" : "translate-y-0"}`}
    >
      <div className="relative mx-auto max-w-7xl">
        <AnimatePresence>
          {!isMobile && showLeftArrow && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex items-center justify-center"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/95 backdrop-blur-sm border-border shadow-lg"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
          {!isMobile && showRightArrow && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex items-center justify-center"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/95 backdrop-blur-sm border-border shadow-lg"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="relative mx-auto"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)",
            maskImage: "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)",
          }}
        >
          <motion.div ref={scrollContainerRef} className="overflow-x-auto pb-2 no-scrollbar" onScroll={handleScroll}>
            <ExpandableTabs
              tabs={tabsContent}
              activeColor="text-primary-foreground"
              className="border-primary/20 dark:border-primary/20 w-max mx-auto"
              onChange={handleActionClick}
              activeTab={activeTab}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

