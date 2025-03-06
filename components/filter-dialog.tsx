"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Section {
  name: string
}

interface Subcategory {
  name: string
  sections: Section[]
}

interface Category {
  id: string // Added id field for unique keys
  name: string
  subcategories: Subcategory[]
}

const categories: Category[] = [
  {
    id: "current-affairs-1",
    name: "Current Affairs",
    subcategories: [
      {
        name: "Sports",
        sections: [
          { name: "National Achievements" },
          { name: "Major Events" }
        ]
      },
      {
        name: "Science and Technology",
        sections: [
          { name: "Recent Innovations" },
          { name: "Space Missions" }
        ]
      }
    ]
  },
  {
    id: "history",
    name: "History",
    subcategories: [
      {
        name: "Ancient History",
        sections: [
          { name: "Prehistoric Period" },
          { name: "Indus Valley Civilization" },
          { name: "Vedic Period" },
          { name: "Rise of Mahajanapadas" },
          { name: "Mauryan Empire" },
          { name: "Gupta Empire" },
          { name: "Post-Gupta Period (Harsha, Chalukyas, Pallavas)" }
        ]
      },
      {
        name: "Medieval History",
        sections: [
          { name: "Delhi Sultanate" },
          { name: "Mughal Empire" },
          { name: "Regional Kingdoms (Vijayanagara, Bahmani, Rajputs)" },
          { name: "Bhakti and Sufi Movements" },
          { name: "European Arrival in India" }
        ]
      },
      {
        name: "Modern History",
        sections: [
          { name: "British Expansion in India" },
          { name: "Social and Religious Reform Movements" },
          { name: "Revolt of 1857" },
          { name: "Indian National Movement (Extremist, Moderate, Revolutionary)" },
          { name: "Gandhian Era (Non-Cooperation, Civil Disobedience, Quit India Movement)" },
          { name: "Post-1947 Developments (Reorganization of States, Green Revolution, etc.)" }
        ]
      }
    ]
  },
  {
    id: "geography",
    name: "Geography",
    subcategories: [
      {
        name: "Physical Geography",
        sections: [
          { name: "Landforms" },
          { name: "Climate Systems" }
        ]
      },
      {
        name: "Indian Geography",
        sections: [
          { name: "River Systems" },
          { name: "Monsoons and Climate" },
          { name: "Agriculture and Irrigation" }
        ]
      }
    ]
  },
  {
    id: "polity",
    name: "Polity",
    subcategories: [
      {
        name: "Constitution",
        sections: [
          { name: "Preamble" },
          { name: "Fundamental Rights and Duties" }
        ]
      }
    ]
  },
  {
    id: "economics",
    name: "Economics",
    subcategories: [
      {
        name: "Basics of Economics",
        sections: [
          { name: "Microeconomics and Macroeconomics" },
          { name: "National Income Accounting" }
        ]
      }
    ]
  },
  {
    id: "logical-reasoning",
    name: "Logical Reasoning",
    subcategories: [
      {
        name: "Verbal Reasoning",
        sections: [
          { name: "Syllogisms" },
          { name: "Analogies" }
        ]
      },
      {
        name: "Non-Verbal Reasoning",
        sections: [
          { name: "Pattern Recognition" },
          { name: "Spatial Reasoning" }
        ]
      }
    ]
  },
  {
    id: "current-affairs-2",
    name: "Current Affairs",
    subcategories: [
      {
        name: "National and International",
        sections: [
          { name: "Government Policies and Schemes" },
          { name: "International Summits" }
        ]
      },
      {
        name: "Sports",
        sections: [
          { name: "Major Events" },
          { name: "National Achievements" }
        ]
      }
    ]
  }
]

interface FilterDialogProps {
  children: React.ReactNode;
  onFiltersChange?: (filters: { category: string; subcategory: string; section: string }) => void;
}

export function FilterDialog({ children, onFiltersChange }: FilterDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string>("")
  const [selectedSection, setSelectedSection] = React.useState<string>("")

  const currentCategory = categories.find(c => c.name === selectedCategory)
  const currentSubcategory = currentCategory?.subcategories.find(s => s.name === selectedSubcategory)

  const handleConfirm = () => {
    if (onFiltersChange) {
      onFiltersChange({
        category: selectedCategory,
        subcategory: selectedSubcategory,
        section: selectedSection
      })
    }
    setOpen(false)
  }

  const handleReset = () => {
    setSelectedCategory("")
    setSelectedSubcategory("")
    setSelectedSection("")
    if (onFiltersChange) {
      onFiltersChange({ category: "", subcategory: "", section: "" })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Content</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value)
              setSelectedSubcategory("")
              setSelectedSection("")
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {selectedCategory && (
            <Select
              value={selectedSubcategory}
              onValueChange={(value) => {
                setSelectedSubcategory(value)
                setSelectedSection("")
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Subcategories</SelectLabel>
                  {currentCategory?.subcategories.map((sub) => (
                    <SelectItem key={sub.name} value={sub.name}>
                      {sub.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          {selectedSubcategory && (
            <Select
              value={selectedSection}
              onValueChange={setSelectedSection}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sections</SelectLabel>
                  {currentSubcategory?.sections.map((section) => (
                    <SelectItem key={section.name} value={section.name}>
                      {section.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleConfirm}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

