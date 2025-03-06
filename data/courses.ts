export interface Course {
  title: string;
  description: string;
  price: string;
  views: number;
  likes: number;
  image: string;
  tags: string[];
  enrolledCount?: number;
  accuracy?: number;
  completionRate?: number;
  questionCount?: number;
  isUrgent?: boolean;
  lastEdited?: string;
  category?: string;
  status?: 'completed' | 'in-progress' | 'not-started';
}

export const courses: Course[] = [
  {
    title: "Mastering UI Design for Impactful Solutions",
    description: "Learn advanced UI design principles and create stunning user interfaces",
    price: "$99.99",
    views: 1200,
    likes: 450,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png",
    tags: ["UI/UX", "Design", "Web"],
    enrolledCount: 10,
    accuracy: 40,
    completionRate: 60,
    questionCount: 10,
    isUrgent: false,
    lastEdited: "2h ago",
    category: "UI/UX",
    status: 'in-progress'
  },
  {
    title: "A Symphony of Colors in UI Design",
    description: "Master color theory and create harmonious user interfaces",
    price: "$79.99",
    views: 980,
    likes: 320,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png",
    tags: ["Color Theory", "UI Design", "Web"],
    enrolledCount: 21,
    accuracy: 20,
    completionRate: 80,
    questionCount: 15,
    isUrgent: false,
    lastEdited: "5h ago",
    category: "Instructional Design",
    status: 'completed'
  },
  {
    title: "Bridging Users and UI in Design Harmony",
    description: "Create user-centered designs that delight and engage",
    price: "$89.99",
    views: 1500,
    likes: 600,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png",
    tags: ["UX Design", "UI Design", "User Research"],
    enrolledCount: 15,
    accuracy: 100,
    completionRate: 100,
    questionCount: 25,
    isUrgent: true,
    lastEdited: "23h ago",
    category: "Experience Design",
    status: 'not-started'
  }
]

// Function to generate a random course
function generateRandomCourse(index: number): Course {
  const subjects = ['Math', 'Science', 'History', 'Literature', 'Art', 'Music', 'Computer Science', 'Philosophy'];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const enrolledCount = Math.floor(Math.random() * 30) + 5;
  const accuracy = Math.floor(Math.random() * 100);
  const completionRate = Math.floor(Math.random() * 100);
  const questionCount = Math.floor(Math.random() * 30) + 5;
  const isUrgent = Math.random() > 0.7;
  const timeAgo = Math.floor(Math.random() * 72);
  const statuses: ('completed' | 'in-progress' | 'not-started')[] = ['completed', 'in-progress', 'not-started'];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    title: `${subject} Course ${index + 1}`,
    description: `Learn about ${subject} in this comprehensive course.`,
    price: `$${Math.floor(Math.random() * 100 + 50)}.99`,
    views: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 500),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png",
    tags: [subject, 'Education', 'Online Learning'],
    enrolledCount,
    accuracy,
    completionRate,
    questionCount,
    isUrgent,
    lastEdited: `${timeAgo}h ago`,
    category: subject,
    status
  };
}

// Generate additional random courses
for (let i = 0; i < 17; i++) {
  courses.push(generateRandomCourse(i + 3));
}

