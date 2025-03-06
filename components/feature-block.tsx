import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

interface FeatureBlockProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  linkHref: string
  linkText: string
}

export function FeatureBlock({ title, icon, children, linkHref, linkText }: FeatureBlockProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">{children}</CardContent>
      <CardFooter>
        <Button asChild className="ml-auto">
          <Link href={linkHref}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

