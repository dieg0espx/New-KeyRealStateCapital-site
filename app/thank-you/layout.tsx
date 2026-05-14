import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Key Real Estate Capital",
  description: "Thanks for reaching out to Key Real Estate Capital. A loan officer will follow up with you shortly.",
  robots: { index: false, follow: false },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children
}
