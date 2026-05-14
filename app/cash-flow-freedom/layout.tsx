import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cash Flow Freedom | Key Real Estate Capital",
  description:
    "Build cash-flowing real estate portfolios with creative financing from Key Real Estate Capital.",
  alternates: { canonical: "https://keyrealestatecapital.com/cash-flow-freedom" },
}

export default function CashFlowFreedomLayout({ children }: { children: React.ReactNode }) {
  return children
}
