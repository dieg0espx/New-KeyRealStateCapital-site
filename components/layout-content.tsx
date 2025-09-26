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
  const isComprehensiveLoanPage = pathname === "/loan-products-comprehensive"
  const isCashFlowFreedomPage = pathname === "/cash-flow-freedom"
  const isCalendlyPage = pathname === "/calendly-book-a-call"
  const isThankYouPage = pathname === "/thank-you"

  return (
    <>
      {!isComprehensiveLoanPage && !isCashFlowFreedomPage && !isCalendlyPage && !isThankYouPage && <Header isHomePage={isHomePage} />}
      <main>{children}</main>
      {!isComprehensiveLoanPage && !isCashFlowFreedomPage && !isCalendlyPage && !isThankYouPage && <Footer />}
    </>
  )
} 