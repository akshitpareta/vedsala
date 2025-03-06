"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: Question[]
  onComplete: (score: number) => void
}

export function InteractiveQuiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      onComplete(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0))
    }
  }

  const question = questions[currentQuestion]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">{question.text}</p>
        <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        {showResult && (
          <div className="mt-4 flex items-center">
            {selectedAnswer === question.correctAnswer ? (
              <>
                <CheckCircle className="text-green-500 mr-2" />
                <span className="text-green-500">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="text-red-500 mr-2" />
                <span className="text-red-500">Incorrect. The correct answer was: {question.options[question.correctAnswer]}</span>
              </>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => {
            if (!showResult) {
              setShowResult(true)
            } else {
              handleAnswer()
            }
          }} 
          disabled={selectedAnswer === null}
        >
          {!showResult ? "Check Answer" : currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </Button>
      </CardFooter>
    </Card>
  )
}

