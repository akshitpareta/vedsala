import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle, FileText, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions and get support</p>
      </div>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for help articles..." className="pl-9" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Documentation
            </CardTitle>
            <CardDescription>Browse our comprehensive guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Find detailed guides and tutorials for all features</p>
              <Button variant="outline" className="w-full">View Docs</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </CardTitle>
            <CardDescription>Chat with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Get instant help from our support team</p>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Support
            </CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Contact us via email or phone</p>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="grid gap-4">
          {[
            {
              question: "How do I reset my password?",
              answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email."
            },
            {
              question: "How do I track my progress?",
              answer: "Your progress is automatically tracked in your dashboard. You can view detailed analytics and progress reports in the 'Progress' section."
            },
            {
              question: "Can I download course materials?",
              answer: "Yes, most course materials are available for download. Look for the download icon next to the course content."
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 