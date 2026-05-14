import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Single Rental DSCR Loans | Key Real Estate Capital",
  description:
    "Long-term DSCR loans for single-family rentals and short-term rentals. Qualify on property cash flow, not personal income. 30-year terms available.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products/single-rental" },
}

export default function SingleRentalLayout({ children }: { children: React.ReactNode }) {
  return children
}
