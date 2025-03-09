'use client';

import { createContext, useContext, useReducer } from 'react';

const MembersContext = createContext();

const initialState = {
  members: [],
  filters: {
    search: '',
    role: 'all',
  },
  isLoading: true,
};

function membersReducer(state, action) {
  switch (action.type) {
    case 'SET_MEMBERS':
      return { ...state, members: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_FILTER':
      return {
        ...state,
        filters: { ...state.filters, [action.payload.key]: action.payload.value },
      };
    default:
      return state;
  }
}

export function MembersProvider({ children }) {
  const [state, dispatch] = useReducer(membersReducer, initialState);

  return (
    <MembersContext.Provider value={{ state, dispatch }}>
      {children}
    </MembersContext.Provider>
  );
}

export const useMembers = () => useContext(MembersContext); 