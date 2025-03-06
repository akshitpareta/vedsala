import { Eye, Heart, Sparkles, Brain, Newspaper, Globe, Calendar, Users, Clock, CheckCircle, AlertCircle, BookOpen, LayoutGrid } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Course } from '@/data/courses'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

interface ExtendedCourse extends Course {
  enrolledCount?: number;
  accuracy?: number;
  completionRate?: number;
  questionCount?: number;
  isUrgent?: boolean;
  lastEdited?: string;
  category?: string;
  status?: 'completed' | 'in-progress' | 'not-started';
}

export function CourseCard({ 
  title, 
  description, 
  views, 
  likes, 
  image, 
  tags,
  enrolledCount = 0,
  accuracy = 0,
  completionRate = 0,
  questionCount = 0,
  isUrgent = false,
  lastEdited = "",
  category = "UI/UX",
  status = 'not-started'
}: ExtendedCourse) {

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'ui/ux':
        return LayoutGrid;
      case 'instructional design':
        return BookOpen;
      default:
        return LayoutGrid;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <motion.div 
      className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          <Badge 
            className="bg-primary/90 text-primary-foreground font-medium"
          >
            <Users className="w-3 h-3 mr-1" />
            {enrolledCount} Enrolled
          </Badge>
          <Badge 
            variant="outline"
            className={cn(
              "border font-medium",
              getStatusColor(status)
            )}
          >
            {status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
            {status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
            {status === 'not-started' && <AlertCircle className="w-3 h-3 mr-1" />}
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
          </Badge>
        </div>

        {/* Category and Urgency Badges */}
        <div className="absolute top-2 right-2 flex flex-wrap gap-2">
          <Badge 
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-primary/20 text-primary font-medium"
          >
            <CategoryIcon className="w-3 h-3 mr-1" />
            {category}
          </Badge>
          {isUrgent && (
            <Badge 
              variant="destructive"
              className="font-medium"
            >
              Urgent
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 2 && (
            <Badge 
              variant="secondary" 
              className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors text-xs font-medium"
            >
              +{tags.length - 2}
            </Badge>
          )}
        </div>

        <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        {/* Progress and Stats */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">Accuracy</span>
              <span className="text-primary font-semibold">{accuracy}%</span>
            </div>
            <motion.div className="h-1.5 rounded-full bg-secondary/30 overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${accuracy}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">Completion</span>
              <span className="text-green-500 font-semibold">{completionRate}%</span>
            </div>
            <motion.div className="h-1.5 rounded-full bg-secondary/30 overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-1 pt-2">
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs font-medium">
            <Brain className="h-3 w-3 mr-1" />
            Quiz
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs font-medium">
            <Newspaper className="h-3 w-3 mr-1" />
            News
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs font-medium">
            <Globe className="h-3 w-3 mr-1" />
            Current Affairs
          </Button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-300 text-xs font-medium"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              AI Guide
            </Button>
            {questionCount > 0 && (
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                {questionCount} Questions
              </span>
            )}
          </div>
          {lastEdited && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Edited {lastEdited}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

