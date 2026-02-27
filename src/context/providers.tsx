import StoreProvider from './store-provider';
import ThemeProvider from './theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
      </StoreProvider>
    </>
  );
}
