"use client"

import { createContext, useContext, ReactNode } from "react"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  slug: string
  category: string
  tags: string[]
  featured?: boolean
}

interface BlogContextType {
  posts: BlogPost[]
  getFeaturedPosts: (limit?: number) => BlogPost[]
  getPostsByCategory: (category: string) => BlogPost[]
  getPostBySlug: (slug: string) => BlogPost | undefined
  getRecentPosts: (limit?: number) => BlogPost[]
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "2024 Real Estate Market Outlook",
    excerpt: "Key trends and opportunities for real estate investors in the coming year.",
    content: "Full content for 2024 market outlook...",
    author: "Key Real Estate Team",
    date: "March 15, 2024",
    image: "/homes/1.jpg",
    slug: "2024-market-outlook",
    category: "Market Analysis",
    tags: ["market trends", "investment", "2024"],
    featured: true
  },
  {
    id: "2",
    title: "Fix-and-Flip Success Strategies",
    excerpt: "Essential tips for maximizing returns on your renovation projects.",
    content: "Full content for fix-and-flip strategies...",
    author: "Key Real Estate Team",
    date: "March 10, 2024",
    image: "/homes/2.jpg",
    slug: "fix-flip-strategies",
    category: "Investment Strategies",
    tags: ["fix-and-flip", "renovation", "profit"],
    featured: true
  },
  {
    id: "3",
    title: "Portfolio Diversification Guide",
    excerpt: "How to build a balanced real estate investment portfolio.",
    content: "Full content for portfolio diversification...",
    author: "Key Real Estate Team",
    date: "March 5, 2024",
    image: "/homes/3.jpg",
    slug: "portfolio-diversification",
    category: "Investment Strategies",
    tags: ["portfolio", "diversification", "risk management"],
    featured: true
  },
  {
    id: "4",
    title: "Understanding Bridge Loans",
    excerpt: "A comprehensive guide to bridge financing for real estate investors.",
    content: "Bridge loans are short-term financing solutions that help real estate investors bridge the gap between purchasing a new property and selling or refinancing an existing one. These loans are essential tools for investors who need quick access to capital to secure time-sensitive deals.\n\nKey Benefits of Bridge Loans\n\nBridge loans offer several advantages for real estate investors:\n\n• Fast approval and funding (often within days)\n• Flexible terms and conditions\n• No prepayment penalties\n• Can be used for various property types\n\nAt Key Real Estate Capital, we specialize in providing bridge financing solutions tailored to your investment needs. Our experienced team understands the urgency of real estate transactions and works quickly to get you the funding you need.\n\nWhether you're looking to acquire a fix-and-flip property, secure a rental investment, or bridge the gap between properties, our bridge loan programs offer competitive rates and flexible terms to help you succeed in today's competitive market.",
    author: "Key Real Estate Team",
    date: "February 28, 2024",
    image: "/homes/4.jpg",
    slug: "understanding-bridge-loans",
    category: "Loan Products",
    tags: ["bridge loans", "financing", "short-term"],
    featured: false
  },
  {
    id: "5",
    title: "Multi-Family Investment Guide",
    excerpt: "Strategies for successful multi-family property investments.",
    content: "Multi-family properties offer investors the opportunity to scale their real estate portfolio while diversifying risk across multiple units. These investments can provide stable cash flow, tax benefits, and long-term appreciation potential.\n\nKey Advantages of Multi-Family Investing\n\nMulti-family properties offer several strategic benefits:\n\n• Multiple income streams from one property\n• Economies of scale in management and maintenance\n• Lower vacancy risk compared to single-family properties\n• Professional property management opportunities\n\nSuccess Strategies for Multi-Family Investors\n\nSuccessful multi-family investors focus on several key areas:\n\n• Location analysis and market research\n• Property condition and renovation potential\n• Cash flow projections and rent roll analysis\n• Financing options and loan structuring\n\nAt Key Real Estate Capital, we understand the unique financing needs of multi-family investors. Our loan programs are designed to help you acquire and improve multi-family properties, whether you're starting with a duplex or scaling to larger apartment complexes.\n\nOur team can help you structure financing that maximizes your investment potential while maintaining healthy cash flow and building long-term wealth through real estate.",
    author: "Key Real Estate Team",
    date: "February 20, 2024",
    image: "/homes/5.jpg",
    slug: "multi-family-investment-guide",
    category: "Investment Strategies",
    tags: ["multi-family", "apartments", "scaling"],
    featured: false
  },
  {
    id: "6",
    title: "Tax Benefits of Real Estate Investing",
    excerpt: "Maximizing your tax advantages as a real estate investor.",
    content: "Real estate investing offers some of the most powerful tax advantages available to investors. Understanding and leveraging these benefits can significantly improve your overall returns and reduce your tax burden.\n\nKey Tax Benefits\n\nReal estate investors can take advantage of several important tax benefits:\n\n• Depreciation deductions on rental properties\n• 1031 exchanges for tax-deferred exchanges\n• Deductible expenses for property management\n• Capital gains treatment for long-term holds\n• Pass-through deductions for LLC structures\n\nDepreciation Benefits\n\nDepreciation is one of the most valuable tax benefits, allowing you to deduct a portion of the property's value each year, even while the property appreciates in value. This creates a paper loss that can offset other income.\n\n1031 Exchanges\n\n1031 exchanges allow you to defer capital gains taxes when selling one investment property and purchasing another of equal or greater value. This powerful tool enables you to build wealth while deferring taxes indefinitely.\n\nAt Key Real Estate Capital, we work with investors to structure financing that maximizes these tax benefits. Our loan programs are designed to work with your overall investment and tax strategy, helping you build wealth while minimizing your tax burden.\n\nConsult with your tax advisor to understand how these benefits apply to your specific situation and investment goals.",
    author: "Key Real Estate Team",
    date: "February 15, 2024",
    image: "/homes/6.jpg",
    slug: "tax-benefits-real-estate",
    category: "Tax & Legal",
    tags: ["tax benefits", "deductions", "legal"],
    featured: false
  }
]

export function BlogProvider({ children }: { children: ReactNode }) {
  const getFeaturedPosts = (limit?: number) => {
    const featured = defaultPosts.filter(post => post.featured)
    return limit ? featured.slice(0, limit) : featured
  }

  const getPostsByCategory = (category: string) => {
    return defaultPosts.filter(post => post.category === category)
  }

  const getPostBySlug = (slug: string) => {
    return defaultPosts.find(post => post.slug === slug)
  }

  const getRecentPosts = (limit?: number) => {
    const sorted = [...defaultPosts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    return limit ? sorted.slice(0, limit) : sorted
  }

  const value: BlogContextType = {
    posts: defaultPosts,
    getFeaturedPosts,
    getPostsByCategory,
    getPostBySlug,
    getRecentPosts
  }

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider")
  }
  return context
} 