"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutContentProps {
  children: React.ReactNode
}

export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <>
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  )
} 