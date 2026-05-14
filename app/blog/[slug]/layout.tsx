import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

const slugTitleMap: Record<string, { title: string; description: string }> = {
  "2024-market-outlook": {
    title: "2024 Real Estate Market Outlook",
    description: "Key trends and opportunities for real estate investors in the coming year.",
  },
  "fix-flip-strategies": {
    title: "Fix-and-Flip Success Strategies",
    description: "Essential tips for maximizing returns on your renovation projects.",
  },
  "portfolio-diversification": {
    title: "Portfolio Diversification Guide",
    description: "How to build a balanced real estate investment portfolio.",
  },
  "understanding-bridge-loans": {
    title: "Understanding Bridge Loans",
    description: "When and how to use bridge financing in real estate.",
  },
  "multi-family-investment-guide": {
    title: "Multi-Family Investment Guide",
    description: "A practical guide to investing in multi-family properties.",
  },
  "tax-benefits-real-estate": {
    title: "Tax Benefits of Real Estate Investing",
    description: "Key tax advantages every real estate investor should know.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = slugTitleMap[params.slug]
  const title = entry ? `${entry.title} | Key Real Estate Capital` : "Blog | Key Real Estate Capital"
  const description = entry?.description ?? "Insights and analysis from Key Real Estate Capital."
  const canonical = `https://keyrealestatecapital.com/blog/${params.slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children
}
