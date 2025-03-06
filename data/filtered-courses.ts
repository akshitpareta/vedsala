import { Course } from './courses'

const createCourseTemplate = (
  title: string,
  description: string,
  tags: string[],
  views: number = Math.floor(Math.random() * 1000),
  likes: number = Math.floor(Math.random() * 1000)
): Course => ({
  title,
  description,
  price: "$0", // Not used anymore but kept for type compatibility
  views,
  likes,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20133316-AthiDnEdmxmrlK5GhCtGqpJipKAtFQ.png",
  tags
})

export const filteredCourses: Record<string, Record<string, Record<string, Course[]>>> = {
  "Current Affairs": {
    "Sports": {
      "National Achievements": [
        createCourseTemplate(
          "Indian Sports Excellence",
          "Comprehensive coverage of India's sporting achievements across disciplines.",
          ["Sports", "National"]
        ),
        createCourseTemplate(
          "Olympic Success Stories",
          "Detailed analysis of Indian athletes' Olympic journey and victories.",
          ["Olympics", "Sports"]
        ),
        createCourseTemplate(
          "Cricket Milestones",
          "Exploring India's cricket achievements and memorable moments.",
          ["Cricket", "Sports"]
        ),
        createCourseTemplate(
          "Rising Sports Stars",
          "Profiles of emerging Indian athletes and their achievements.",
          ["Sports", "Athletes"]
        )
      ],
      "Major Events": [
        createCourseTemplate(
          "FIFA World Cup History",
          "A comprehensive look at the history and highlights of FIFA World Cups.",
          ["Football", "World Cup"]
        ),
        createCourseTemplate(
          "Olympic Games Through the Ages",
          "Exploring the evolution and significance of the Olympic Games.",
          ["Olympics", "History"]
        ),
        createCourseTemplate(
          "Cricket World Cup Moments",
          "Reliving the most exciting moments from Cricket World Cups.",
          ["Cricket", "World Cup"]
        )
      ]
    },
    "Science and Technology": {
      "Recent Innovations": [
        createCourseTemplate(
          "AI Breakthroughs",
          "Exploring recent advancements in Artificial Intelligence and their implications.",
          ["AI", "Technology"]
        ),
        createCourseTemplate(
          "Renewable Energy Technologies",
          "Understanding the latest developments in sustainable energy solutions.",
          ["Energy", "Sustainability"]
        ),
        createCourseTemplate(
          "Biotech Innovations",
          "Discovering groundbreaking advancements in biotechnology and their potential impacts.",
          ["Biotech", "Science"]
        )
      ],
      "Space Missions": [
        createCourseTemplate(
          "Mars Exploration Updates",
          "Latest developments in Mars missions and discoveries.",
          ["Space", "Mars"]
        ),
        createCourseTemplate(
          "Private Space Industry",
          "The rise of commercial space travel and its implications.",
          ["Space", "Industry"]
        ),
        createCourseTemplate(
          "Deep Space Missions",
          "Exploring ongoing and planned missions to the outer solar system.",
          ["Space", "Exploration"]
        )
      ]
    }
  },
  "History": {
    "Ancient History": {
      "Prehistoric Period": [
        createCourseTemplate(
          "Early Human Societies",
          "Understanding the development of early human communities.",
          ["Prehistory", "Civilization"]
        ),
        createCourseTemplate(
          "Stone Age Developments",
          "Exploring technological advances in prehistoric times.",
          ["Stone Age", "Technology"]
        ),
        createCourseTemplate(
          "Prehistoric Art",
          "Analysis of early human artistic expressions.",
          ["Art", "Culture"]
        ),
        createCourseTemplate(
          "Hunter-Gatherer Societies",
          "Study of early human survival and social structures.",
          ["Society", "Prehistory"]
        )
      ],
      "Indus Valley Civilization": [
        createCourseTemplate(
          "Indus Valley Architecture",
          "Discover the architectural marvels of the Indus Valley Civilization.",
          ["Architecture", "Ancient"]
        ),
        createCourseTemplate(
          "Harappan Culture",
          "Explore the rich cultural heritage of the Harappan civilization.",
          ["Culture", "Harappa"]
        ),
        createCourseTemplate(
          "Indus Valley Trade Networks",
          "Understanding the extensive trade systems of the Indus Valley Civilization.",
          ["Trade", "Ancient History"]
        )
      ]
    },
    "Modern History": {
      "Industrial Revolution": [
        createCourseTemplate(
          "Technological Innovations",
          "Exploring the key inventions that drove the Industrial Revolution.",
          ["Technology", "Industry"]
        ),
        createCourseTemplate(
          "Social Impact of Industrialization",
          "Analyzing how the Industrial Revolution changed society and work.",
          ["Society", "Labor"]
        ),
        createCourseTemplate(
          "Industrial Revolution in Different Countries",
          "Comparing the progress and impact of industrialization across nations.",
          ["Global", "Industry"]
        )
      ]
    }
  },
  "Geography": {
    "Physical Geography": {
      "Landforms": [
        createCourseTemplate(
          "Mountain Formation",
          "Understanding the processes behind mountain formation.",
          ["Mountains", "Geology"]
        ),
        createCourseTemplate(
          "Coastal Landscapes",
          "Study of coastal features and processes.",
          ["Coast", "Landforms"]
        ),
        createCourseTemplate(
          "River Systems",
          "Analysis of river formation and characteristics.",
          ["Rivers", "Hydrology"]
        ),
        createCourseTemplate(
          "Desert Landscapes",
          "Exploration of desert formation and features.",
          ["Desert", "Geography"]
        )
      ],
      "Climate Systems": [
        createCourseTemplate(
          "Global Climate Patterns",
          "Understanding the major climate systems of the world.",
          ["Climate", "Global"]
        ),
        createCourseTemplate(
          "Monsoons and Their Impact",
          "Exploring the formation and effects of monsoon systems.",
          ["Monsoon", "Weather"]
        ),
        createCourseTemplate(
          "Climate Change Science",
          "Analyzing the causes and impacts of global climate change.",
          ["Climate Change", "Environment"]
        )
      ]
    }
  },
  "Polity": {
    "Constitution": {
      "Preamble": [
        createCourseTemplate(
          "Understanding the Preamble",
          "A comprehensive study of the Indian Constitution's Preamble.",
          ["Constitution", "Preamble", "India"]
        ),
      ],
    },
  },
  "Economics": {
    "Basics of Economics": {
      "Microeconomics and Macroeconomics": [
        createCourseTemplate(
          "Introduction to Microeconomics",
          "Learn the fundamentals of microeconomic theory and its applications.",
          ["Economics", "Microeconomics"]
        ),
      ],
    },
  },
  "Logical Reasoning": {
    "Verbal Reasoning": {
      "Syllogisms": [
        createCourseTemplate(
          "Introduction to Syllogisms",
          "Understanding the basic structure and types of syllogisms.",
          ["Logic", "Reasoning"]
        ),
        createCourseTemplate(
          "Venn Diagrams in Syllogisms",
          "Using Venn diagrams to solve and represent syllogisms.",
          ["Venn Diagram", "Logic"]
        ),
        createCourseTemplate(
          "Complex Syllogisms",
          "Tackling advanced syllogism problems and techniques.",
          ["Advanced", "Reasoning"]
        )
      ],
      "Analogies": [
        createCourseTemplate(
          "Verbal Analogy Basics",
          "Understanding and solving simple verbal analogies.",
          ["Analogy", "Language"]
        ),
        createCourseTemplate(
          "Advanced Analogy Techniques",
          "Strategies for solving complex verbal analogies.",
          ["Advanced", "Analogy"]
        ),
        createCourseTemplate(
          "Analogies in Standardized Tests",
          "Preparing for analogy questions in competitive exams.",
          ["Exam Prep", "Analogy"]
        )
      ]
    },
    "Non-Verbal Reasoning": {
      "Pattern Recognition": [
        createCourseTemplate(
          "Visual Pattern Basics",
          "Identifying and understanding simple visual patterns.",
          ["Pattern", "Visual"]
        ),
        createCourseTemplate(
          "Sequence Completion",
          "Techniques for completing visual and numerical sequences.",
          ["Sequence", "Logic"]
        ),
        createCourseTemplate(
          "Abstract Reasoning Patterns",
          "Solving complex abstract reasoning problems.",
          ["Abstract", "Advanced"]
        )
      ],
      "Spatial Reasoning": [
        createCourseTemplate(
          "3D Visualization",
          "Developing skills to manipulate 3D objects mentally.",
          ["3D", "Spatial"]
        ),
        createCourseTemplate(
          "Map and Direction Problems",
          "Solving problems related to directions and map reading.",
          ["Maps", "Directions"]
        ),
        createCourseTemplate(
          "Paper Folding and Cutting",
          "Understanding complex paper folding and cutting problems.",
          ["Paper Folding", "Visualization"]
        )
      ]
    }
  }
}

