import { getCurrentUser } from "@/lib/session"
import { getLearningPath } from "@/lib/learning-path"
import { LearningPathView } from "@/components/learning-path-view"

export default async function LearningPathPage() {
  const user = await getCurrentUser()
  const learningPath = await getLearningPath(user.id)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Learning Path</h1>
      <LearningPathView path={learningPath} />
    </div>
  )
}

