import { Button } from "@/components/ui/button"
import { 
  Home,
  Lightbulb,
  BookOpen,
  Users,
  MessageSquare,
  Mail,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const menuItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Lightbulb, label: "Features", href: "#features" },
  { icon: BookOpen, label: "Solutions", href: "#solutions" },
  { icon: Users, label: "Experience", href: "#experience" },
  { icon: MessageSquare, label: "Community", href: "#community" },
  { icon: Mail, label: "Contact", href: "#contact" }
]

export function QuickAccess() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-2 space-y-2">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 group relative"
            >
              <item.icon className="h-5 w-5" />
              <span className="absolute right-full mr-2 px-2 py-1 rounded-lg bg-gray-900 text-white text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
} 