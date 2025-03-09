"use client"
import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StartupCardSkeleton } from "@/components/skeletons/startup-card-skeleton"
import { StartupList } from "@/components/startup/startup-list"
import { FilterBar } from "@/components/startup/filter-bar"
import { SearchFilterBar } from "@/components/startup/search-filter-bar"
import { StartupsProvider, useStartups } from "@/context/startups-context"
import { CommunityStartup } from "@/types/startup"

// Wrapper component that uses the context
function StartupsPageContent() {
  const { state, dispatch } = useStartups()

  // Extract unique locations and funding stages from startups
  const locations = Array.from(new Set(
    state.startups
      .filter((s): s is CommunityStartup & { location: string } => Boolean(s?.location))
      .map(s => s.location)
  ));

  const fundingStages = Array.from(new Set(
    state.startups
      .filter((s): s is CommunityStartup & { funding: string } => Boolean(s?.funding))
      .map(s => s.funding)
  ));

  const handleSearchChange = (value: string) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: value })
  }

  const handleCategoryChange = (category: string) => {
    dispatch({ type: "SET_CATEGORY", payload: category })
  }

  const handleFilterChange = (filterType: string, value: string) => {
    dispatch({
      type: "SET_FILTER",
      payload: { filterType, value },
    })
  }

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        {/* Title and CTA button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-10">
          {/* Mobile navigation buttons */}
          <div className="w-full flex justify-between sm:hidden mb-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="lg" 
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Inicio
              </Button>
            </Link>
            <Link href="mailto:doctavalley@gmail.com">
              <Button size="lg">
                <Plus className="mr-2 h-4 w-4" /> Publica tu Startup
              </Button>
            </Link>
          </div>
          
          {/* Desktop home button */}
          <div className="hidden sm:block sm:w-auto order-none">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="lg" 
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Inicio
              </Button>
            </Link>
          </div>
          
          <div className="w-full text-center order-0 sm:order-none">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Startups de Docta 🇦🇷
            </h1>
          </div>
          
          {/* Desktop add startup button */}
          <div className="hidden sm:block sm:w-auto">
            <Link href="mailto:doctavalley@gmail.com">
              <Button size="lg">
                <Plus className="mr-2 h-4 w-4" /> Publica tu Startup
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and filters */}
        <div className="space-y-4">
          <SearchFilterBar
            value={state.searchTerm}
            onChange={handleSearchChange}
            filters={state.filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            locations={locations}
            fundingStages={fundingStages}
            placeholder="Buscar startups..."
          />
          <FilterBar
            selectedCategory={state.selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Content */}
        {state.loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <StartupCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <StartupList startups={state.filteredStartups} />
        )}
      </div>
    </div>
  )
}

// Main page component that provides the context
export default function StartupsPage() {
  return (
    <StartupsProvider>
      <StartupsPageContent />
    </StartupsProvider>
  )
}

