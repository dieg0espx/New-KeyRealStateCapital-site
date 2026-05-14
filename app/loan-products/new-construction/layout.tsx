import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Construction Loans | Key Real Estate Capital",
  description:
    "Ground-up construction financing for builders and developers. Flexible draw schedules, competitive rates, and fast closings from Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products/new-construction" },
}

export default function NewConstructionLayout({ children }: { children: React.ReactNode }) {
  return children
}
