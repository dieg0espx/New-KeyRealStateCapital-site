import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/animations.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutContent } from "@/components/layout-content"
import { BlogProvider } from "@/contexts/blog-context"
import "@/lib/error-handler"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Key Real Estate Capital - Luxury Real Estate Financing",
  description:
    "Capital Solutions for Real Estate Investors",
  generator: 'v0.dev',
  keywords: ['real estate financing', 'fix and flip loans', 'rental property loans', 'construction loans', 'commercial real estate', 'investment financing'],
  authors: [{ name: 'Key Real Estate Capital' }],
  creator: 'Key Real Estate Capital',
  publisher: 'Key Real Estate Capital',

  metadataBase: new URL('https://keyrealestatecapital.com'),
  alternates: {
    canonical: 'https://keyrealestatecapital.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keyrealestatecapital.com',
    siteName: 'Key Real Estate Capital',
    title: 'Key Real Estate Capital - Luxury Real Estate Financing',
    description: 'Capital Solutions for Real Estate Investors',
    images: [
      {
        url: '/miniature.png',
        width: 1200,
        height: 630,
        alt: 'Key Real Estate Capital - Luxury Real Estate Financing',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@keyrealestatecapital',
    creator: '@keyrealestatecapital',
    title: 'Key Real Estate Capital - Luxury Real Estate Financing',
    description: 'Capital Solutions for Real Estate Investors',
    images: ['/miniature.png'],
  },
  other: {
    'facebook-domain-verification': 'your-facebook-domain-verification-code',
    'google-site-verification': 'your-google-site-verification-code',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/favicon/browserconfig.xml',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'apple-mobile-web-app-title': 'Key Real Estate Capital',
    'application-name': 'Key Real Estate Capital',
    'msapplication-TileImage': '/favicon/mstile-144x144.png',
    'msapplication-square70x70logo': '/favicon/mstile-70x70.png',
    'msapplication-square150x150logo': '/favicon/mstile-150x150.png',
    'msapplication-wide310x150logo': '/favicon/mstile-310x150.png',
    'msapplication-square310x310logo': '/favicon/mstile-310x310.png',
    // iOS specific meta tags for better sharing
    'apple-touch-fullscreen': 'yes',
    'apple-mobile-web-app-orientations': 'portrait',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no,email=no,address=no',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Key Real Estate Capital',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning={true}>
        <BlogProvider>
          <LayoutContent>{children}</LayoutContent>
        </BlogProvider>
      </body>
    </html>
  )
}
