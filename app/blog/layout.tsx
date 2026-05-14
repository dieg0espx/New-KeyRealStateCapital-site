import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Key Real Estate Capital",
  description:
    "Insights, market analysis, and strategies for real estate investors. Read the latest from Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/blog" },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
