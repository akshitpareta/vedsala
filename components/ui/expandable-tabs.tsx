"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { type LucideIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Tab {
  title: string
  icon: LucideIcon
  content?: React.ReactNode
}

interface ExpandableTabsProps {
  tabs: Tab[]
  className?: string
  activeColor?: string
  onChange?: (index: number) => void
  activeTab: number | null
}

const buttonVariants = {
  initial: { width: 40 },
  expanded: { width: "auto" },
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  expanded: { width: "auto", opacity: 1 },
}

const transition = { type: "spring", stiffness: 500, damping: 30 }

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
  activeTab,
}: ExpandableTabsProps) {
  const handleSelect = (index: number) => {
    onChange?.(index)
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border bg-background/95 backdrop-blur-sm p-1 shadow-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon
        const isActive = activeTab === index
        return (
          <motion.button
            key={tab.title}
            layout
            variants={buttonVariants}
            initial="initial"
            animate={isActive ? "expanded" : "initial"}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center justify-center rounded-full px-2 py-1.5 text-sm font-medium transition-colors duration-300",
              isActive
                ? cn("bg-primary text-primary-foreground", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon size={20} className="flex-shrink-0" />
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="expanded"
                  exit="initial"
                  transition={transition}
                  className="ml-2 overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )
      })}
    </div>
  )
}

