import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Key Real Estate Capital",
  description:
    "Meet the lending team at Key Real Estate Capital — relationship-focused professionals helping investors close fast with creative financing.",
  alternates: { canonical: "https://keyrealestatecapital.com/team" },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
