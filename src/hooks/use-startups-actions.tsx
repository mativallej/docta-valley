"use client"

import { useStartups } from "@/contexts/startups-context"
import type { CommunityStartup } from "@/types/startup"

// Custom hook to provide actions for the startups context
export function useStartupsActions() {
  const { dispatch } = useStartups()

  const setSearchTerm = (searchTerm: string) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm })
  }

  const setFilter = (filterType: string, value: string) => {
    dispatch({
      type: "SET_FILTER",
      payload: { filterType, value },
    })
  }

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" })
  }

  const selectStartup = (startup: CommunityStartup | null) => {
    dispatch({ type: "SELECT_STARTUP", payload: startup })
  }

  return {
    setSearchTerm,
    setFilter,
    clearFilters,
    selectStartup,
  }
}

