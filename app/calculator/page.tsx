import type { Metadata } from "next"
import { LoanCalculatorSection } from '@/components/loan-calculator-section'

export const metadata: Metadata = {
  title: "Loan Rate Calculator | Key Real Estate Capital",
  description:
    "Estimate your DSCR loan rate by state, FICO, LTV, property type, and loan structure. Free, instant pricing from Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/calculator" },
}

export default function CalculatorPage() {
  return (
    <div className="[&_section]:pb-16">
      <LoanCalculatorSection />
    </div>
  )
}