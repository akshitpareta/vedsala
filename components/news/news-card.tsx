"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface NewsCardProps {
  title: string
  description: string
  image: string
  category: string
  readTime: string
  href: string
  author?: {
    name: string
    avatar: string
  }
  layout?: "horizontal" | "vertical"
  featured?: boolean
}

export function NewsCard({
  title,
  description,
  image,
  category,
  readTime,
  href,
  author,
  layout = "vertical",
  featured = false,
}: NewsCardProps) {
  return (
    <Link href={href}>
      <Card className={`overflow-hidden transition-all hover:shadow-lg ${
        layout === "horizontal" ? "flex" : "flex-col"
      } ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}>
        <div className={`relative ${
          layout === "horizontal" ? "w-1/3" : "w-full aspect-video"
        }`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        <div className={`flex-1 ${layout === "horizontal" ? "p-4" : ""}`}>
          <CardHeader>
            <CardTitle className={`line-clamp-2 ${featured ? "text-2xl" : "text-lg"}`}>
              {title}
            </CardTitle>
            {author && (
              <CardDescription className="flex items-center gap-2">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{author.name}</span>
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-muted-foreground">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
} 