import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fix and Flip Loans | Key Real Estate Capital",
  description:
    "Fast, flexible fix-and-flip financing up to 90% LTC with no income verification. Close in days, not weeks, with Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/loan-products/fix-and-flip" },
}

export default function FixAndFlipLayout({ children }: { children: React.ReactNode }) {
  return children
}
