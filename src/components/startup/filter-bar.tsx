"use client"
import { startupCategories } from "@/data/layout"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FilterBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="w-full pt-4">
      <ScrollArea className="pb-6">
        <div className="flex flex-wrap gap-2 pb-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => onCategoryChange("all")}
          >
            Todas
          </Badge>
          {startupCategories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id.toString() ? "default" : "outline"}
              className="cursor-pointer hover:opacity-75 transition-opacity flex items-center gap-2"
              onClick={() => onCategoryChange(category.id.toString())}
            >
              <span className="text-base">{category.emoji}</span>
              <span>{category.label}</span>
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
