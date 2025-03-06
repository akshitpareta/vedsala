import * as React from "react"
import { cn } from "@/lib/utils"

interface RadialProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  size?: "sm" | "md" | "lg"
  color?: string
  trackColor?: string
  className?: string
}

export function RadialProgress({
  value,
  size = "md",
  color = "stroke-orange-500",
  trackColor = "stroke-gray-700",
  className,
  ...props
}: RadialProgressProps) {
  const radius = size === "sm" ? 20 : size === "md" ? 30 : 40
  const strokeWidth = size === "sm" ? 4 : size === "md" ? 6 : 8
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset: 0 }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={trackColor}
        />
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={cn(
            "transition-all duration-300 ease-in-out",
            color
          )}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
        {value}%
      </div>
    </div>
  )
} 