import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Key Real Estate - Loan Products',
  description: 'Comprehensive financing solutions for real estate investments',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-96x96.png',
    apple: '/favicon/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <img 
                  src="/logo/logo-white.png" 
                  alt="New Key Real Estate" 
                  className="h-12 w-auto"
                />
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#fix-and-flip" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  Fix & Flip
                </a>
                <a href="#single-rental" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  Single Rental
                </a>
                <a href="#new-construction" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  New Construction
                </a>
                <a href="#rental-portfolio" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  Rental Portfolio
                </a>
                <a href="#bridge-loans" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  Bridge Loans
                </a>
                <a href="#commercial" className="text-gray-600 hover:text-light-green transition-colors text-sm">
                  Commercial
                </a>
                <a href="#contact" className="bg-light-green text-white hover:bg-perry transition-colors text-sm px-4 py-0.5 rounded-lg">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
