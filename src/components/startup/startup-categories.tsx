"use client"
import { startupCategories } from "@/data/layout"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface StartupCategoriesProps {
  onFilterChange: (value: string) => void;
  selectedCategory: string;
  children: React.ReactNode;
}

export function StartupCategories({ onFilterChange, selectedCategory, children }: StartupCategoriesProps) {
  return (
    <div className="w-full space-y-8">
      <ScrollArea className="w-full pb-4">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => onFilterChange("all")}
          >
            Todas
          </Badge>
          {startupCategories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id.toString() ? "default" : "outline"}
              className="cursor-pointer hover:opacity-75 transition-opacity flex items-center gap-2"
              onClick={() => onFilterChange(category.id.toString())}
            >
              <span className="text-base">{category.emoji}</span>
              <span>{category.label}</span>
            </Badge>
          ))}
        </div>
      </ScrollArea>
      {children}
    </div>
  )
}
