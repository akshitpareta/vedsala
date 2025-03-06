"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const features = [
  "Personalized Learning Paths",
  "Interactive Video Lessons",
  "Real-time Progress Tracking",
  "Expert-led Webinars",
  "Collaborative Study Groups",
  "Adaptive Quizzes and Assessments"
]

export function FeatureExploration({ onClose }: { onClose: () => void }) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentFeature < features.length - 1) {
      setCurrentFeature(currentFeature + 1)
    } else {
      onClose()
      router.push("/profile")
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Explore Our Features</h3>
      <p className="text-muted-foreground">
        {features[currentFeature]}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Feature {currentFeature + 1} of {features.length}
        </span>
        <Button onClick={handleNext}>
          {currentFeature < features.length - 1 ? "Next Feature" : "Start Learning"}
        </Button>
      </div>
    </div>
  )
}

