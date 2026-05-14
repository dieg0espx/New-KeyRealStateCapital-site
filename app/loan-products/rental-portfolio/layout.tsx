import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rental Portfolio Loans | Key Real Estate Capital",
  description:
    "Consolidate multiple rentals into one DSCR portfolio loan. Streamlined underwriting, blanket financing, and scale-friendly terms.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products/rental-portfolio" },
}

export default function RentalPortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
