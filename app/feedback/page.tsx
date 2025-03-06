import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MessageSquare, ThumbsUp, ThumbsDown, Star } from "lucide-react"

export default function FeedbackPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Feedback</h1>
        <p className="text-muted-foreground">Help us improve your learning experience</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Share Your Feedback
              </CardTitle>
              <CardDescription>Tell us what you think about our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your thoughts, suggestions, or concerns..."
                    className="min-h-[150px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rate Your Experience</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button
                        key={rating}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                      >
                        <Star className={`h-4 w-4 ${rating <= 3 ? 'text-muted-foreground' : 'text-yellow-400'}`} />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Would you recommend us?</Label>
                  <RadioGroup defaultValue="yes" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="flex items-center gap-1">
                        <ThumbsDown className="h-4 w-4" />
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button className="w-full">Submit Feedback</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>What others are saying</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "John Doe",
                    rating: 5,
                    comment: "Great platform for learning! The AI recommendations are spot on."
                  },
                  {
                    name: "Jane Smith",
                    rating: 4,
                    comment: "Love the interactive features. Would like to see more practice exercises."
                  },
                  {
                    name: "Mike Johnson",
                    rating: 5,
                    comment: "The community features are excellent. Really helps with motivation."
                  }
                ].map((feedback, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{feedback.name}</span>
                      <div className="flex">
                        {Array(feedback.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feedback Statistics</CardTitle>
              <CardDescription>Overview of user satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Average Rating</span>
                  <div className="flex items-center">
                    <span className="font-bold mr-2">4.7</span>
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total Feedback</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Would Recommend</span>
                  <span className="font-bold">95%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 