import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SendIcon } from "lucide-react"

export default function SupportPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Support Chat</h1>
        <Card>
          <CardHeader>
            <CardTitle>Chat with our Support Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] mb-4 p-4 border rounded-md overflow-y-auto">
              {/* Chat messages will be displayed here */}
              <p className="text-muted-foreground">Welcome to Vedsala support! How can we help you today?</p>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Type your message here..." className="flex-grow" />
              <Button>
                <SendIcon className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

