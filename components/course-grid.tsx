import { CourseCard } from "./course-card"
import { courses } from "@/data/courses"
import { filteredCourses } from "@/data/filtered-courses"

interface CourseGridProps {
  filters?: {
    category: string;
    subcategory: string;
    section: string;
  };
}

export function CourseGrid({ filters }: CourseGridProps) {
  const getFilteredCourses = () => {
    if (!filters || !filters.category || !filters.subcategory || !filters.section) {
      return courses.slice(0, 8);
    }

    try {
      const filteredContent = filteredCourses[filters.category]?.[filters.subcategory]?.[filters.section];
      if (!filteredContent || filteredContent.length === 0) {
        console.warn('No specific content found for the selected filters, showing default courses');
        // Fallback: Try to find courses from the same category or subcategory
        const categoryContent = Object.values(filteredCourses[filters.category] || {}).flatMap(subcategory => 
          Object.values(subcategory).flat()
        );
        if (categoryContent.length > 0) {
          return categoryContent.slice(0, 8);
        }
        // If still no content, return default courses
        return courses.slice(0, 8);
      }
      return filteredContent;
    } catch (error) {
      console.error('Error getting filtered courses:', error);
      return courses.slice(0, 8);
    }
  };

  const displayedCourses = getFilteredCourses();

  const getGridColumns = () => {
    const courseCount = displayedCourses.length;
    if (courseCount === 1) return 'grid-cols-1';
    if (courseCount === 2) return 'grid-cols-1 sm:grid-cols-2';
    if (courseCount === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <div className="p-4 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`grid ${getGridColumns()} gap-4 sm:gap-6`}>
          {displayedCourses.map((course, index) => (
            <CourseCard key={`${course.title}-${index}`} {...course} />
          ))}
        </div>
      </div>
    </div>
  )
}

