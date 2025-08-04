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
    image: "homes/1.jpg",
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
    image: "homes/2.jpg",
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
    image: "homes/3.jpg",
    slug: "portfolio-diversification",
    category: "Investment Strategies",
    tags: ["portfolio", "diversification", "risk management"],
    featured: true
  },
  {
    id: "4",
    title: "Understanding Bridge Loans",
    excerpt: "A comprehensive guide to bridge financing for real estate investors.",
    content: "Full content for bridge loans...",
    author: "Key Real Estate Team",
    date: "February 28, 2024",
    image: "homes/4.jpg",
    slug: "understanding-bridge-loans",
    category: "Loan Products",
    tags: ["bridge loans", "financing", "short-term"],
    featured: false
  },
  {
    id: "5",
    title: "Multi-Family Investment Guide",
    excerpt: "Strategies for successful multi-family property investments.",
    content: "Full content for multi-family investments...",
    author: "Key Real Estate Team",
    date: "February 20, 2024",
    image: "homes/5.jpg",
    slug: "multi-family-investment-guide",
    category: "Investment Strategies",
    tags: ["multi-family", "apartments", "scaling"],
    featured: false
  },
  {
    id: "6",
    title: "Tax Benefits of Real Estate Investing",
    excerpt: "Maximizing your tax advantages as a real estate investor.",
    content: "Full content for tax benefits...",
    author: "Key Real Estate Team",
    date: "February 15, 2024",
    image: "homes/6.jpg",
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