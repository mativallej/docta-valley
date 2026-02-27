import { SITE } from 'src/config';
import Providers from '@/context/providers';
import { cn } from "@/lib/utils"
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080A07',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://doctavalley.vercel.app'),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: 'Docta Valley' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cn("scroll-smooth", GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <link rel="preconnect" href="https://doctavalley.vercel.app" />
        <link rel="dns-prefetch" href="https://doctavalley.vercel.app" />
        <link rel="preconnect" href="https://pbs.twimg.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://pbs.twimg.com" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
      </head>
      <body
        className={cn(
          "min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </Providers>
        <Analytics />
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
