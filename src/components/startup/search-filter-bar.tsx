"use client"
import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { statusOptions, teamSizeOptions } from "@/data/layout"

interface SearchFilterBarProps {
  value: string
  onChange: (value: string) => void
  filters: {
    status: string
    location: string
    fundingStage: string
    teamSize: string
  }
  onFilterChange: (filterType: string, value: string) => void
  onClearFilters: () => void
  locations: string[]
  fundingStages: string[]
  placeholder?: string
}

export function SearchFilterBar({
  value,
  onChange,
  filters,
  onFilterChange,
  onClearFilters,
  locations,
  fundingStages,
  placeholder = "Search...",
}: SearchFilterBarProps) {
  const [inputValue, setInputValue] = useState(value)

  const getActiveFilterCount = () => {
    return Object.values(filters).filter((value) => value !== "all").length
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange(e.target.value)
  }

  const getActiveFilters = () => {
    const active = []
    if (filters.status !== "all") {
      active.push({
        type: "status",
        value: statusOptions.find(s => s.id === filters.status)?.label || filters.status
      })
    }
    if (filters.location !== "all") {
      active.push({ type: "location", value: filters.location })
    }
    if (filters.fundingStage !== "all") {
      active.push({ type: "fundingStage", value: filters.fundingStage })
    }
    if (filters.teamSize !== "all") {
      active.push({
        type: "teamSize",
        value: teamSizeOptions.find(s => s.id === filters.teamSize)?.label || filters.teamSize
      })
    }
    return active
  }

  return (
    <div className="w-full space-y-3">
      <div className="relative w-full flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder={placeholder}
            className="pl-10 h-[48px] text-base border-2 focus-visible:ring-2 focus-visible:ring-offset-2 w-full"
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant={getActiveFilterCount() > 0 ? "default" : "outline"} 
              size="lg" 
              className="gap-2 h-[48px] w-full sm:w-[140px] border-2 justify-center"
            >
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[calc(100vw-2rem)] sm:w-[340px] p-4 sm:p-5" align="end">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base sm:text-lg">Filtros</h4>
                {getActiveFilterCount() > 0 && (
                  <Button variant="ghost" size="sm" onClick={onClearFilters} className="h-8 px-2 text-xs">
                    <X className="h-4 w-4 mr-1" />
                    Limpiar filtros
                  </Button>
                )}
              </div>
              
              {/* Status */}
              <div className="space-y-2 sm:space-y-3">
                <h5 className="font-medium text-sm sm:text-base">Estado</h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Badge
                    variant={filters.status === "all" ? "default" : "outline"}
                    className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                    onClick={() => onFilterChange("status", "all")}
                  >
                    Todos
                  </Badge>
                  {statusOptions.map((status) => (
                    <Badge
                      key={status.id}
                      variant={filters.status === status.id ? "default" : "outline"}
                      className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                      onClick={() => onFilterChange("status", status.id)}
                    >
                      {status.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2 sm:space-y-3">
                <h5 className="font-medium text-sm sm:text-base">Ubicación</h5>
                <ScrollArea className="h-[100px] sm:h-[120px]">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pr-4">
                    <Badge
                      variant={filters.location === "all" ? "default" : "outline"}
                      className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                      onClick={() => onFilterChange("location", "all")}
                    >
                      Todas
                    </Badge>
                    {locations.map((location) => (
                      <Badge
                        key={location}
                        variant={filters.location === location ? "default" : "outline"}
                        className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                        onClick={() => onFilterChange("location", location)}
                      >
                        {location}
                      </Badge>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Funding Stage */}
              <div className="space-y-2 sm:space-y-3">
                <h5 className="font-medium text-sm sm:text-base">Etapa de financiación</h5>
                <ScrollArea className="h-[100px] sm:h-[120px]">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pr-4">
                    <Badge
                      variant={filters.fundingStage === "all" ? "default" : "outline"}
                      className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                      onClick={() => onFilterChange("fundingStage", "all")}
                    >
                      Todas
                    </Badge>
                    {fundingStages.map((stage) => (
                      <Badge
                        key={stage}
                        variant={filters.fundingStage === stage ? "default" : "outline"}
                        className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                        onClick={() => onFilterChange("fundingStage", stage)}
                      >
                        {stage}
                      </Badge>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Team Size */}
              <div className="space-y-2 sm:space-y-3">
                <h5 className="font-medium text-sm sm:text-base">Tamaño del equipo</h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Badge
                    variant={filters.teamSize === "all" ? "default" : "outline"}
                    className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                    onClick={() => onFilterChange("teamSize", "all")}
                  >
                    Todos
                  </Badge>
                  {teamSizeOptions.map((size) => (
                    <Badge
                      key={size.id}
                      variant={filters.teamSize === size.id ? "default" : "outline"}
                      className="cursor-pointer hover:opacity-80 transition-opacity text-xs sm:text-sm py-1"
                      onClick={() => onFilterChange("teamSize", size.id)}
                    >
                      {size.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active filters */}
      {getActiveFilterCount() > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
          <span className="text-xs sm:text-sm text-muted-foreground">Filtros activos:</span>
          {getActiveFilters().map((filter, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 text-xs sm:text-sm py-1"
              onClick={() => onFilterChange(filter.type, "all")}
            >
              {filter.value}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-7 px-2 text-xs sm:text-sm"
          >
            Limpiar todo
          </Button>
        </div>
      )}
    </div>
  )
} 