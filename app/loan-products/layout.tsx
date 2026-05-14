import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loan Products | Key Real Estate Capital",
  description:
    "Explore Key Real Estate Capital's loan products: fix-and-flip, single rental DSCR, new construction, rental portfolio, stabilized bridge, and commercial financing for real estate investors.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products" },
}

export default function LoanProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
