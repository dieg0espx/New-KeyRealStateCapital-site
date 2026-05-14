import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Key Real Estate Capital",
  description: "How Key Real Estate Capital collects, uses, and protects your personal information.",
  alternates: { canonical: "https://keyrealestatecapital.com/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
