'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

const ThemeProvider = ({ children, ...props }: ProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
