"use client"

import { useState, useEffect } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MoreVertical, Search, Plus, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { FilterDialog } from "@/components/filter-dialog"

interface Question {
  id: number
  title: string
  type: "multiple-choice" | "true-false" | "short-answer"
  options: string[]
  correctAnswer: number
  topic: string
  participants: number
  timeLimit: number
  userAnswer?: number
  explanation: string
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    title: "What is the capital of France?",
    type: "multiple-choice",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    topic: "Geography",
    participants: 1500,
    timeLimit: 30,
    explanation: "Paris is the capital and largest city of France, known for its iconic landmarks like the Eiffel Tower and the Louvre Museum."
  },
  {
    id: 2,
    title: "Which planet is known as the Red Planet?",
    type: "multiple-choice",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    topic: "Astronomy",
    participants: 1200,
    timeLimit: 30,
    explanation: "Mars is known as the Red Planet due to the iron oxide prevalent on its surface, giving it a reddish appearance."
  },
  {
    id: 3,
    title: "Who painted the Mona Lisa?",
    type: "multiple-choice",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
    topic: "Art History",
    participants: 1800,
    timeLimit: 30,
    explanation: "Leonardo da Vinci, a renowned Renaissance artist, painted the Mona Lisa, one of the most famous and enigmatic paintings in the world."
  },
  {
    id: 4,
    title: "What is the largest ocean on Earth?",
    type: "multiple-choice",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    topic: "Geography",
    participants: 2000,
    timeLimit: 30,
    explanation: "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south."
  },
  {
    id: 5,
    title: "Which element has the chemical symbol 'O'?",
    type: "multiple-choice",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    correctAnswer: 2,
    topic: "Chemistry",
    participants: 1600,
    timeLimit: 30,
    explanation: "Oxygen is a chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms oxides with most elements."
  },
  {
    id: 6,
    title: "Who wrote 'Romeo and Juliet'?",
    type: "multiple-choice",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    topic: "Literature",
    participants: 2200,
    timeLimit: 30,
    explanation: "William Shakespeare, the famous English playwright and poet, wrote 'Romeo and Juliet', a timeless tragedy about two young lovers from feuding families."
  },
  {
    id: 7,
    title: "What is the largest planet in our solar system?",
    type: "multiple-choice",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    topic: "Astronomy",
    participants: 1900,
    timeLimit: 30,
    explanation: "Jupiter is the largest planet in our solar system, a gas giant with a mass more than twice that of all the other planets combined."
  },
  {
    id: 8,
    title: "Which country is home to the kangaroo?",
    type: "multiple-choice",
    options: ["New Zealand", "South Africa", "Australia", "Brazil"],
    correctAnswer: 2,
    topic: "Zoology",
    participants: 1700,
    timeLimit: 30,
    explanation: "Australia is home to kangaroos, iconic marsupials known for their powerful legs and hopping gait."
  },
  {
    id: 9,
    title: "What is the main ingredient in guacamole?",
    type: "multiple-choice",
    options: ["Tomato", "Avocado", "Onion", "Lemon"],
    correctAnswer: 1,
    topic: "Culinary Arts",
    participants: 1400,
    timeLimit: 30,
    explanation: "Avocado is the main ingredient in guacamole, a creamy dip made from mashed avocado, often combined with lime juice, onions, cilantro, and spices."
  },
  {
    id: 10,
    title: "Who invented the telephone?",
    type: "multiple-choice",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
    correctAnswer: 1,
    topic: "History of Technology",
    participants: 2100,
    timeLimit: 30,
    explanation: "Alexander Graham Bell is credited with inventing and patenting the first practical telephone, revolutionizing communication."
  }
]

const topics = Array.from(new Set(sampleQuestions.map(q => q.topic)))

export default function LiveQuizPage() {
  const [questions, setQuestions] = useState<Question[]>(sampleQuestions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [quizProgress, setQuizProgress] = useState(0)
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    subcategory: "",
    section: ""
  })
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showReport, setShowReport] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics")
  const [showExplanation, setShowExplanation] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isQuizStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      handleNextQuestion()
    }
    return () => clearInterval(timer)
  }, [isQuizStarted, timeRemaining, currentQuestionIndex])

  const handleStartQuiz = () => {
    const filteredQuestions = selectedTopic === "All Topics" 
      ? questions 
      : questions.filter(q => q.topic === selectedTopic)
    setQuestions(filteredQuestions)
    setIsQuizStarted(true)
    setCurrentQuestionIndex(0)
    setQuizProgress(0)
    setUserAnswers([])
    setTimeRemaining(filteredQuestions[0].timeLimit)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setTimeRemaining(questions[currentQuestionIndex + 1].timeLimit)
      setQuizProgress(((currentQuestionIndex + 2) / questions.length) * 100)
      setShowExplanation(false)
    } else {
      setShowReport(true)
      setIsQuizStarted(false)
    }
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    const updatedQuestions = [...questions]
    updatedQuestions[currentQuestionIndex].userAnswer = index
    setQuestions(updatedQuestions)
    setShowExplanation(true)

    const isCorrect = index === currentQuestion.correctAnswer
    const delay = isCorrect ? 3000 : 6000 // 3 seconds for correct, 6 for incorrect

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        handleNextQuestion()
      } else {
        setShowReport(true)
        setIsQuizStarted(false)
      }
    }, delay)
  }

  const handleRetry = () => {
    setSelectedAnswer(null)
    const updatedQuestions = [...questions]
    updatedQuestions[currentQuestionIndex].userAnswer = undefined
    setQuestions(updatedQuestions)
    setTimeRemaining(questions[currentQuestionIndex].timeLimit)
    setShowExplanation(false)
  }

  const handleGenerateQuiz = () => {
    // In a real application, this would call an API to generate questions
    alert("Generating a new quiz based on your search and filters...")
    // For now, we'll just shuffle the existing questions
    setQuestions([...questions].sort(() => Math.random() - 0.5))
  }

  const currentQuestion = questions[currentQuestionIndex]

  const FeedbackReport = () => {
    const correctAnswers = questions.filter((q) => q.userAnswer === q.correctAnswer).length
    const score = (correctAnswers / questions.length) * 100

    return (
      <div className="space-y-3 text-sm">
        <h3 className="text-xl font-bold">Quiz Completed!</h3>
        <p>Your score: {score.toFixed(2)}%</p>
        <p>{correctAnswers} out of {questions.length} correct.</p>
        <h4 className="text-lg font-semibold mt-4">Performance Analysis:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Strong areas: Geography, Literature</li>
          <li>Improve: Chemistry, History of Technology</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Recommendations:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Study basic chemical elements and symbols</li>
          <li>Review key inventions and inventors</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Suggested Resources:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>"The Periodic Table: Elements with Style!" by Simon Basher</li>
          <li>"Top 10 Inventions That Changed the World" on History.com</li>
          <li>"Introduction to Chemistry" on Coursera</li>
          <li>"The Men Who Built America" documentary</li>
        </ul>
        <Button onClick={() => {
          setShowReport(false)
          setCurrentQuestionIndex(0)
          setQuizProgress(0)
          setSelectedTopic("All Topics")
        }} className="mt-4">
          Start New Quiz
        </Button>
      </div>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-4rem)] lg:flex-row">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          <h1 className="text-lg font-semibold">Live Quiz</h1>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Left Sidebar */}
        <div className={cn(
          "w-full lg:w-64 border-r border-border bg-background flex-shrink-0",
          "lg:flex lg:flex-col",
          isSidebarOpen ? "fixed inset-0 z-50 flex flex-col" : "hidden"
        )}>
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium">QUESTIONS ({questions.length})</h2>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className={cn(
                    "flex items-center w-full rounded-lg p-3 text-sm transition-colors",
                    currentQuestionIndex === index ? "bg-accent" : "hover:bg-accent/50"
                  )}
                >
                  <div
                    className="flex flex-1 items-center cursor-pointer"
                    onClick={() => {
                      setCurrentQuestionIndex(index)
                      setIsSidebarOpen(false)
                    }}
                  >
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border text-xs">
                      {index + 1}
                    </span>
                    <span className="flex-1 truncate">{question.title}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-background overflow-hidden">
          <ScrollArea className="h-full">
            <div className="max-w-3xl mx-auto p-2 sm:p-4 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <h1 className="text-xl font-bold">Live Quiz</h1>
                <div className="flex flex-wrap items-center gap-2">
                  <FilterDialog onFiltersChange={setSelectedFilters}>
                    <Button variant="outline" size="sm" className="text-xs">
                      {selectedFilters.category || "Filter"}
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </FilterDialog>
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Search topic..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-32 sm:w-48 text-sm"
                    />
                    <Button size="sm" onClick={handleGenerateQuiz}>Generate</Button>
                  </div>
                </div>
              </div>

              {!isQuizStarted && !showReport && (
                <div className="text-center p-4">
                  <h2 className="text-xl font-bold mb-2">Ready to start?</h2>
                  <p className="mb-4 text-sm">Choose a topic and begin!</p>
                  <div className="flex flex-col items-center gap-3">
                    <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Topics">All Topics</SelectItem>
                        {topics.map((topic) => (
                          <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={handleStartQuiz}>Start Quiz</Button>
                  </div>
                </div>
              )}

              {isQuizStarted && currentQuestion && (
                <div className="space-y-4">
                  <Progress value={quizProgress} className="w-full" />
                  <div className="border rounded-lg p-4 bg-card">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold">
                        Q{currentQuestionIndex + 1}/{questions.length}
                      </h2>
                      <span className="text-sm font-medium">Time: {timeRemaining}s</span>
                    </div>
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Topic: {currentQuestion.topic}</p>
                    <p className="mb-4 text-base font-medium">{currentQuestion.title}</p>
                    <div className="space-y-2">
                      {currentQuestion.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === index ? "default" : "outline"}
                          className={cn(
                            "w-full justify-start text-left py-2 px-3 h-auto text-sm",
                            currentQuestion.userAnswer !== undefined && (
                              index === currentQuestion.correctAnswer
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : currentQuestion.userAnswer === index
                                  ? "bg-red-500 hover:bg-red-600 text-white"
                                  : ""
                            )
                          )}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={currentQuestion.userAnswer !== undefined}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                          <span className="ml-2">{option}</span>
                        </Button>
                      ))}
                    </div>
                    {currentQuestion.userAnswer !== undefined && showExplanation && (
                      <div className={`mt-4 p-3 rounded-lg text-sm ${
                        currentQuestion.userAnswer === currentQuestion.correctAnswer
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                          : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                      }`}>
                        <p className="font-semibold mb-1">
                          {currentQuestion.userAnswer === currentQuestion.correctAnswer
                            ? "Correct!"
                            : "Incorrect."}
                        </p>
                        <p className="text-xs">{currentQuestion.explanation}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="text-xs text-muted-foreground">
                            Next in {currentQuestion.userAnswer === currentQuestion.correctAnswer ? "3" : "6"}s...
                          </p>
                          <Button 
                            onClick={handleNextQuestion}
                            variant="outline"
                            size="sm"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {showReport && <FeedbackReport />}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  )
}

