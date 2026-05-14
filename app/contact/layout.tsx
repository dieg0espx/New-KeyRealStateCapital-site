import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Key Real Estate Capital",
  description:
    "Get in touch with Key Real Estate Capital. Speak with a loan officer about fix-and-flip, DSCR rental, construction, bridge, or commercial financing.",
  alternates: { canonical: "https://keyrealestatecapital.com/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
