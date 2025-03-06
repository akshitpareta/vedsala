import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Search, Filter, FolderOpen, Clock, Star, Share2, MoreVertical, FileText } from "lucide-react"

export default function NotesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-muted-foreground">Organize and manage your study notes</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search notes..." className="pl-9" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            New Note
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Folders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "All Notes", count: 45 },
                { name: "Recent", count: 12 },
                { name: "Starred", count: 8 },
                { name: "Shared with me", count: 5 },
                { name: "Computer Science", count: 15 },
                { name: "Mathematics", count: 10 },
                { name: "Physics", count: 8 },
                { name: "Chemistry", count: 7 }
              ].map((folder, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{folder.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{folder.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="col-span-3">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Notes</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-4">
                {[
                  {
                    title: "Data Structures Overview",
                    folder: "Computer Science",
                    lastModified: "2 hours ago",
                    shared: true,
                    starred: true
                  },
                  {
                    title: "Calculus Integration Methods",
                    folder: "Mathematics",
                    lastModified: "1 day ago",
                    shared: false,
                    starred: true
                  },
                  {
                    title: "Quantum Mechanics Notes",
                    folder: "Physics",
                    lastModified: "3 days ago",
                    shared: true,
                    starred: false
                  }
                ].map((note, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          {note.title}
                        </CardTitle>
                        <CardDescription>{note.folder}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {note.starred && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </Button>
                        )}
                        {note.shared && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Last modified {note.lastModified}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent">
              <div className="grid gap-4">
                {[
                  {
                    title: "Machine Learning Algorithms",
                    folder: "Computer Science",
                    lastModified: "1 hour ago",
                    shared: false,
                    starred: true
                  },
                  {
                    title: "Statistical Analysis",
                    folder: "Mathematics",
                    lastModified: "3 hours ago",
                    shared: true,
                    starred: false
                  }
                ].map((note, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          {note.title}
                        </CardTitle>
                        <CardDescription>{note.folder}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {note.starred && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </Button>
                        )}
                        {note.shared && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Last modified {note.lastModified}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shared">
              <div className="grid gap-4">
                {[
                  {
                    title: "Group Project Notes",
                    folder: "Computer Science",
                    lastModified: "5 hours ago",
                    sharedWith: ["Alex K.", "Sarah M."],
                    starred: false
                  },
                  {
                    title: "Study Group Summary",
                    folder: "Physics",
                    lastModified: "1 day ago",
                    sharedWith: ["John D.", "Emma W."],
                    starred: true
                  }
                ].map((note, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          {note.title}
                        </CardTitle>
                        <CardDescription>
                          Shared with {note.sharedWith.join(", ")}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {note.starred && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        Last modified {note.lastModified}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 