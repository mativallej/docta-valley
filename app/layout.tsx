import { SITE } from 'src/config';
import Providers from '@/context/providers';
import { cn } from "@/lib/utils"

import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';

import { Inter as CustomFont } from 'next/font/google';

import '@/styles/globals.css';

const customFont = CustomFont({
  subsets: ['latin'],
  variable: '--font-custom',
  weight: ['400', '500', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <body className={cn("min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased", customFont.variable)}>
        <Providers>{children}</Providers>
        <Analytics /> 
        <Toaster richColors />
      </body>
    </html>
  );
}
