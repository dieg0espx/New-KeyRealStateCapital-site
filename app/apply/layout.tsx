import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply for a Loan | Key Real Estate Capital",
  description:
    "Start your loan application with Key Real Estate Capital. Fast pre-qualification for fix-and-flip, DSCR rental, construction, bridge, and commercial loans.",
  alternates: { canonical: "https://keyrealestatecapital.com/apply" },
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children
}
