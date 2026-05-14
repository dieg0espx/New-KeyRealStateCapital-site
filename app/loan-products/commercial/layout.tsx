import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Real Estate Loans | Key Real Estate Capital",
  description:
    "Commercial financing for multifamily, mixed-use, retail, office, and industrial properties. Flexible private capital from Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products/commercial" },
}

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return children
}
