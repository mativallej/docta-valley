import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { createClient } from '@/lib/supabase/client';

export function useSupabaseAuth() {
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    const supabase = createClient();
    let authListener;

    const setupAuthListener = async () => {
      const { data, error } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session) {
          const decodedJwt = jwtDecode(session.access_token);
          setJwt(decodedJwt);
        } else {
          setJwt(null);
        }
      });

      if (error) {
        console.error('Error setting up auth listener:', error);
      } else {
        authListener = data;
      }
    };

    setupAuthListener();

    // Cleanup function
    return () => {
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      } else {
        console.warn('Unable to unsubscribe auth listener');
      }
    };
  }, []);

  return { jwt };
}