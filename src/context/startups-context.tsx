'use client';
import type React from 'react';
import { createContext, useContext, useReducer, useEffect } from 'react';
import type { CommunityStartup } from '@/types/startup';
import { StartupService } from '@/services/startups-service';

// Define the state type
export interface StartupsState {
  startups: CommunityStartup[];
  filteredStartups: CommunityStartup[];
  selectedStartup: CommunityStartup | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategory: string;
  filters: {
    status: string;
    location: string;
    fundingStage: string;
    teamSize: string;
  };
}

// Define action types
export type StartupsAction =
  | { type: 'FETCH_STARTUPS_START' }
  | { type: 'FETCH_STARTUPS_SUCCESS'; payload: CommunityStartup[] }
  | { type: 'FETCH_STARTUPS_ERROR'; payload: string }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_FILTER'; payload: { filterType: string; value: string } }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'SELECT_STARTUP'; payload: CommunityStartup | null }
  | { type: 'APPLY_FILTERS' };

// Initial state
const initialState: StartupsState = {
  startups: [],
  filteredStartups: [],
  selectedStartup: null,
  loading: true,
  error: null,
  searchTerm: '',
  selectedCategory: 'all',
  filters: {
    status: 'all',
    location: 'all',
    fundingStage: 'all',
    teamSize: 'all',
  },
};

// Create the context
const StartupsContext = createContext<
  | {
      state: StartupsState;
      dispatch: React.Dispatch<StartupsAction>;
    }
  | undefined
>(undefined);

// Reducer function
function startupsReducer(state: StartupsState, action: StartupsAction): StartupsState {
  switch (action.type) {
    case 'FETCH_STARTUPS_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_STARTUPS_SUCCESS':
      return {
        ...state,
        startups: action.payload,
        filteredStartups: action.payload,
        loading: false,
      };
    case 'FETCH_STARTUPS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.value,
        },
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          status: 'all',
          location: 'all',
          fundingStage: 'all',
          teamSize: 'all',
        },
        searchTerm: '',
      };
    case 'SELECT_STARTUP':
      return {
        ...state,
        selectedStartup: action.payload,
      };
    case 'APPLY_FILTERS': {
      let result = [...state.startups];

      // Apply search
      if (state.searchTerm.trim() !== '') {
        const searchLower = state.searchTerm.toLowerCase();
        result = result.filter(
          (startup) =>
            startup.name.toLowerCase().includes(searchLower) ||
            startup.description.toLowerCase().includes(searchLower) ||
            startup.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) ||
            startup.category?.label.toLowerCase().includes(searchLower),
        );
      }

      // Apply category filter
      if (state.selectedCategory !== 'all') {
        result = result.filter((startup) => startup.category?.id.toString() === state.selectedCategory);
      }

      // Apply status filter
      if (state.filters.status !== 'all') {
        result = result.filter((startup) => startup.status === state.filters.status);
      }

      // Apply location filter
      if (state.filters.location !== 'all') {
        result = result.filter((startup) =>
          startup.location?.toLowerCase().includes(state.filters.location.toLowerCase()),
        );
      }

      // Apply funding stage filter
      if (state.filters.fundingStage !== 'all') {
        result = result.filter((startup) =>
          startup.funding?.toLowerCase().includes(state.filters.fundingStage.toLowerCase()),
        );
      }

      // Apply team size filter
      if (state.filters.teamSize !== 'all') {
        const sizeRanges = {
          small: (size: string) => {
            const num = Number.parseInt(size);
            return num > 0 && num <= 10;
          },
          medium: (size: string) => {
            const num = Number.parseInt(size);
            return num > 10 && num <= 50;
          },
          large: (size: string) => {
            const num = Number.parseInt(size);
            return num > 50;
          },
        };

        if (state.filters.teamSize in sizeRanges) {
          result = result.filter(
            (startup) =>
              startup.teamSize && sizeRanges[state.filters.teamSize as keyof typeof sizeRanges](startup.teamSize),
          );
        }
      }

      return {
        ...state,
        filteredStartups: result,
      };
    }
    default:
      return state;
  }
}

// Provider component
export function StartupsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(startupsReducer, initialState);

  // Fetch startups on mount
  useEffect(() => {
    async function fetchStartups() {
      dispatch({ type: 'FETCH_STARTUPS_START' });
      try {
        const startupService = new StartupService();
        const fetchedStartups = await startupService.getStartups();
        dispatch({ type: 'FETCH_STARTUPS_SUCCESS', payload: fetchedStartups });
      } catch (error) {
        console.error('Error fetching startups:', error);
        dispatch({
          type: 'FETCH_STARTUPS_ERROR',
          payload: error instanceof Error ? error.message : 'Failed to fetch startups',
        });
      }
    }

    fetchStartups();
  }, []);

  // Apply filters whenever search term or filters change
  useEffect(() => {
    dispatch({ type: 'APPLY_FILTERS' });
  }, [state.searchTerm, state.selectedCategory, state.filters]);

  return <StartupsContext.Provider value={{ state, dispatch }}>{children}</StartupsContext.Provider>;
}

// Custom hook to use the context
export function useStartups() {
  const context = useContext(StartupsContext);
  if (context === undefined) {
    throw new Error('useStartups must be used within a StartupsProvider');
  }
  return context;
}
