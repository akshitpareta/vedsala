import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Zap } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: "trophy" | "star" | "zap"
  unlockedAt: string | null
}

interface AchievementsProps {
  achievements: Achievement[]
}

export function Achievements({ achievements }: AchievementsProps) {
  const iconMap = {
    trophy: Trophy,
    star: Star,
    zap: Zap,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {achievements.map((achievement) => {
        const Icon = iconMap[achievement.icon]
        return (
          <Card key={achievement.id} className={achievement.unlockedAt ? "bg-primary/5" : "opacity-50"}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Icon className={`h-8 w-8 ${achievement.unlockedAt ? "text-primary" : "text-muted-foreground"}`} />
              <div>
                <CardTitle className="text-base">{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {achievement.unlockedAt ? (
                <Badge variant="secondary">Unlocked on {achievement.unlockedAt}</Badge>
              ) : (
                <Badge variant="outline">Locked</Badge>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

