"use client";

import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Trophy, 
  MessageSquare, 
  CheckCircle, 
  Calendar, 
  User, 
  FileText, 
  Heart,
  PenLine,
  Flag,
  LucideIcon
} from "lucide-react";
import { ReactNode } from "react";
import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

// Activity types and their corresponding icons
const ACTIVITY_ICONS: Record<string, LucideIcon> = {
  course_started: BookOpen,
  course_completed: Trophy,
  comment_posted: MessageSquare,
  module_completed: CheckCircle,
  joined_event: Calendar,
  profile_updated: User,
  note_created: FileText,
  post_liked: Heart,
  forum_post: PenLine,
  achievement: Flag
};

export interface Activity {
  id: string;
  type: keyof typeof ACTIVITY_ICONS | string;
  title: string;
  description?: string;
  timestamp: Date | string;
  link?: {
    href: string;
    label: string;
  };
  user?: {
    name: string;
    image?: string;
  };
  metadata?: Record<string, any>;
}

interface ActivityFeedProps {
  activities: Activity[];
  className?: string;
  emptyState?: ReactNode;
  showDateSeparators?: boolean;
  maxItems?: number;
}

export function ActivityFeed({
  activities,
  className,
  emptyState,
  showDateSeparators = false,
  maxItems
}: ActivityFeedProps) {
  const sortedActivities = [...activities]
    .sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, maxItems);
  
  if (sortedActivities.length === 0) {
    return (
      <div className={cn("text-center py-8", className)}>
        {emptyState || (
          <div className="text-muted-foreground">
            <p>No recent activity</p>
          </div>
        )}
      </div>
    );
  }
  
  // Group activities by date if needed
  let currentDate: string | null = null;
  
  return (
    <div className={cn("space-y-1", className)}>
      {sortedActivities.map((activity, index) => {
        const date = new Date(activity.timestamp);
        
        // Date separator logic
        let dateSeparator = null;
        if (showDateSeparators) {
          const dateStr = isToday(date)
            ? "Today"
            : isYesterday(date)
            ? "Yesterday"
            : format(date, "MMMM d, yyyy");
            
          if (dateStr !== currentDate) {
            currentDate = dateStr;
            dateSeparator = (
              <div key={`date-${dateStr}`} className="pt-4 pb-2 first:pt-0">
                <h3 className="text-sm font-medium text-muted-foreground">{dateStr}</h3>
              </div>
            );
          }
        }
        
        // Activity time display
        const timeDisplay = isToday(date)
          ? formatDistanceToNow(date, { addSuffix: true })
          : format(date, "h:mm a");
        
        // Get icon for activity type
        const IconComponent = ACTIVITY_ICONS[activity.type] || FileText;
        
        return (
          <>
            {dateSeparator}
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <IconComponent className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <p className="font-medium text-sm">
                    {activity.title}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {timeDisplay}
                  </span>
                </div>
                
                {activity.description && (
                  <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                    {activity.description}
                  </p>
                )}
                
                {activity.link && (
                  <a 
                    href={activity.link.href} 
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    {activity.link.label}
                  </a>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
} 