import { Button } from "@/components/ui/button"

interface StatsProps {
  programs: number
  followers: number
  reviews: number
  availableDates: number
  forumPosts: number
}

export function CourseStats({ programs, followers, reviews, availableDates, forumPosts }: StatsProps) {
  return (
    <div className="border-b border-border bg-background overflow-x-auto">
      <div className="flex items-center justify-start md:justify-center gap-8 py-3 px-4 md:px-0 min-w-max">
        <Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Programs <span className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{programs}</span>
        </Button>
        <Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Followers <span className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{followers}</span>
        </Button>
        <Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Reviews <span className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{reviews}</span>
        </Button>
        <Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Available dates <span className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{availableDates}</span>
        </Button>
        <Button variant="ghost" className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Forum posts <span className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{forumPosts}</span>
        </Button>
      </div>
    </div>
  )
}

