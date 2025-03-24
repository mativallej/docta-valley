'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { Store } from '@reduxjs/toolkit';

interface ProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: ProviderProps) {
  const storeRef = useRef<Store>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}