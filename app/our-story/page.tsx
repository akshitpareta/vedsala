import { Layout } from "@/components/layout"

export default function OurStoryPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Story</h1>
        <p className="mb-4">
          Vedsala was founded in 2020 with a vision to revolutionize online education. 
          Our journey began when a group of passionate educators and technologists came together, 
          united by the belief that quality education should be accessible to everyone, everywhere.
        </p>
        <p className="mb-4">
          From our humble beginnings, we've grown into a global platform serving millions of learners. 
          Our commitment to innovation in education technology and pedagogical methods has allowed us 
          to create a unique learning experience that adapts to each student's needs.
        </p>
        <p>
          Today, we continue to push the boundaries of what's possible in online education, 
          always with our core mission in mind: to empower individuals through knowledge and skills.
        </p>
      </div>
    </Layout>
  )
}

