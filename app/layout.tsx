import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/animations.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutContent } from "@/components/layout-content"
import { BlogProvider } from "@/contexts/blog-context"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Key Real Estate Capital - Luxury Real Estate Financing",
  description:
    "Sophisticated financing solutions for real estate investors. Specializing in fix-and-flip, rental properties, construction loans, and commercial real estate.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>
          <LayoutContent>{children}</LayoutContent>
        </BlogProvider>
      </body>
    </html>
  )
}
