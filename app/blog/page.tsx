import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "2024 Real Estate Market Outlook: Trends and Opportunities",
      excerpt:
        "Comprehensive analysis of market trends, interest rate impacts, and emerging opportunities for real estate investors in 2024.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Market Analysis",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "8 min read",
      link: "/blog/2024-market-outlook",
    },
    {
      title: "Fix-and-Flip Success: 10 Essential Strategies",
      excerpt:
        "Learn the key strategies that separate successful fix-and-flip investors from those who struggle to turn a profit.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Investment Strategy",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "6 min read",
      link: "/blog/fix-flip-strategies",
    },
    {
      title: "Building a Diversified Real Estate Portfolio",
      excerpt:
        "How to balance different property types and markets to create a resilient real estate investment portfolio.",
      author: "Michael Chen",
      date: "March 5, 2024",
      category: "Portfolio Management",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "10 min read",
      link: "/blog/portfolio-diversification",
    },
    {
      title: "Construction Loan Basics: What Investors Need to Know",
      excerpt:
        "Understanding the fundamentals of construction financing, from ground-up development to major renovations.",
      author: "Lisa Rodriguez",
      date: "February 28, 2024",
      category: "Financing",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "7 min read",
      link: "/blog/construction-loan-basics",
    },
    {
      title: "Tax Strategies for Real Estate Investors",
      excerpt:
        "Maximize your returns with these essential tax planning strategies for real estate investment properties.",
      author: "John Smith",
      date: "February 20, 2024",
      category: "Tax Planning",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "9 min read",
      link: "/blog/tax-strategies",
    },
    {
      title: "Market Spotlight: Emerging Opportunities in Secondary Cities",
      excerpt:
        "Why secondary markets are becoming increasingly attractive for real estate investors seeking higher yields.",
      author: "Sarah Johnson",
      date: "February 15, 2024",
      category: "Market Analysis",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "5 min read",
      link: "/blog/market-spotlight",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Real Estate Insights</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Stay informed with expert analysis, market trends, and investment strategies from our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-sky-100 text-sky-800">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link href={post.link}>
                  <Button variant="ghost" className="p-0 text-sky-600 hover:text-sky-700 font-light">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-3 bg-transparent"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
