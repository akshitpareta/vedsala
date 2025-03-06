import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
        <p className="text-muted-foreground">Select the perfect learning plan for your needs</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For individual learners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2">
              {["Access to basic courses", "Limited study materials", "Community support", "Basic progress tracking"].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For serious learners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">$19.99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            <ul className="space-y-2">
              {[
                "Access to all courses",
                "Premium study materials",
                "Priority community support",
                "Advanced progress tracking",
                "1-on-1 mentoring sessions",
                "Certification preparation"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">Subscribe Now</Button>
          </CardFooter>
        </Card>
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">Custom<span className="text-lg font-normal text-muted-foreground"> pricing</span></div>
            <ul className="space-y-2">
              {[
                "Custom learning paths",
                "Dedicated support team",
                "Analytics dashboard",
                "API access",
                "Custom integrations",
                "Bulk licensing"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 