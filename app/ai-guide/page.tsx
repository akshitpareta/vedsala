"use client"

import { Layout } from "@/components/layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Mic, Send, Save, ImageIcon, Languages, FileText, Video, Music, BarChart3 } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  {
    icon: Save,
    title: "Saved Prompt Templates",
    description: "Users save AI mode prompt templates for faster responses."
  },
  {
    icon: ImageIcon,
    title: "Media Type Selection",
    description: "Users select media type for tailored interactions."
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Choose language for better interaction."
  }
]

const tabs = [
  { value: "all", label: "All" },
  { value: "text", label: "Text", icon: FileText },
  { value: "image", label: "Image", icon: ImageIcon },
  { value: "video", label: "Video", icon: Video },
  { value: "music", label: "Music", icon: Music },
  { value: "analytics", label: "Analytics", icon: BarChart3 }
]

export default function AIGuidePage() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-black/95 text-white p-2 sm:p-4">
        <div className="max-w-[340px] sm:max-w-[400px] md:max-w-[500px] mx-auto space-y-4 sm:space-y-6">
          {/* Logo and Title */}
          <div className="text-center space-y-3 sm:space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-10 h-10 mx-auto bg-gradient-to-r from-green-500/20 to-green-500/40 rounded-full flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-full bg-green-500 animate-pulse" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight px-2">
                How can i help you today?
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-[300px] sm:max-w-[350px] mx-auto px-2">
                This code will display a prompt asking the user for their name, and then will display a greeting message with the name entered by the user.
              </p>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-3 px-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900 transition-colors">
                  <CardContent className="p-3 sm:p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                      <feature.icon className="w-4 h-4 text-green-500" />
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-zinc-200">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="px-2 sm:px-0"
          >
            <Tabs defaultValue="all" className="w-full">
              <ScrollArea className="w-full">
                <TabsList className="w-full flex justify-start h-9 sm:h-10 bg-zinc-900/50 border border-zinc-800 rounded-lg p-1">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={cn(
                        "flex-1 h-full data-[state=active]:bg-green-500",
                        "data-[state=active]:text-white data-[state=active]:shadow-none",
                        "text-[10px] sm:text-xs font-medium"
                      )}
                    >
                      {tab.icon && <tab.icon className="w-3 h-3 mr-1" />}
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" className="hidden" />
              </ScrollArea>
            </Tabs>
          </motion.div>

          {/* Input Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative px-2 sm:px-0"
          >
            <Input
              placeholder="Type your prompt here..."
              className="w-full bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-400 pr-16 h-9 sm:h-10 text-xs"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 hover:bg-zinc-800"
              >
                <Mic className="w-3 h-3 text-zinc-400" />
              </Button>
              <Button
                size="icon"
                className="h-7 w-7 bg-green-500 hover:bg-green-600"
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

