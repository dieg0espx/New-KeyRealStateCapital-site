import type { MetadataRoute } from "next"

const baseUrl = "https://keyrealestatecapital.com"

const staticRoutes = [
  "",
  "/loan-products",
  "/loan-products/fix-and-flip",
  "/loan-products/single-rental",
  "/loan-products/new-construction",
  "/loan-products/rental-portfolio",
  "/loan-products/stabilized-bridge",
  "/loan-products/commercial",
  "/blog",
  "/faq",
  "/team",
  "/calculator",
  "/contact",
  "/apply",
  "/privacy",
  "/terms",
  "/cash-flow-freedom",
]

const blogSlugs = [
  "2024-market-outlook",
  "fix-flip-strategies",
  "portfolio-diversification",
  "understanding-bridge-loans",
  "multi-family-investment-guide",
  "tax-benefits-real-estate",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
