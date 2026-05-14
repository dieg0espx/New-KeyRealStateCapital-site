import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Key Real Estate Capital",
  description: "Terms of service for the Key Real Estate Capital website and lending services.",
  alternates: { canonical: "https://keyrealestatecapital.com/terms" },
  robots: { index: true, follow: true },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
