import * as React from "react"
import { cn } from "@/lib/utils"

interface HeatMapProps {
  data: {
    date: string
    value: number
    intensity: "low" | "medium" | "high"
  }[]
  className?: string
}

export function HeatMap({ data, className }: HeatMapProps) {
  const getIntensityColor = (intensity: "low" | "medium" | "high") => {
    switch (intensity) {
      case "low":
        return "bg-orange-500/20"
      case "medium":
        return "bg-orange-500/50"
      case "high":
        return "bg-orange-500"
      default:
        return "bg-gray-700"
    }
  }

  return (
    <div className={cn("grid grid-cols-7 gap-1", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          className={cn(
            "aspect-square rounded-sm cursor-pointer transition-colors",
            getIntensityColor(item.intensity)
          )}
          title={`${item.date}: ${item.value}`}
        />
      ))}
    </div>
  )
} 