import { Layout } from "@/components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          Welcome to Vedsala, your premier destination for comprehensive online education. 
          We are dedicated to providing high-quality, accessible learning experiences to students worldwide.
        </p>
        <p className="mb-4">
          Our mission is to empower individuals through knowledge, offering a wide range of courses 
          from academic subjects to professional skills development.
        </p>
        <p>
          With expert instructors, interactive content, and a supportive community, 
          we're here to help you achieve your educational and career goals.
        </p>
      </div>
    </Layout>
  )
}

