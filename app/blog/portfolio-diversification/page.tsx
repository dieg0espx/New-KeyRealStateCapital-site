import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, Home, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioDiversificationPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Michael Chen
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              March 5, 2024
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              10 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Building a Diversified Real Estate Portfolio
          </h1>

          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            How to balance different property types and markets to create a resilient real estate investment portfolio
            that performs well across various economic conditions.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                Portfolio Management
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                Investment Strategy
              </span>
            </div>
            <Button variant="outline" size="sm" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Real+Estate+Portfolio"
            alt="Building a Diversified Real Estate Portfolio"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Diversification is a fundamental principle of successful investing, and real estate is no exception. A
            well-diversified real estate portfolio can provide steady cash flow, reduce risk, and position you for
            long-term wealth building across different market cycles.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Why Diversification Matters</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Real estate markets can be cyclical and localized. What affects one property type or geographic area may not
            impact another. By spreading your investments across different property types, locations, and investment
            strategies, you can reduce overall portfolio risk while maintaining strong return potential.
          </p>

          <Card className="my-8 border-l-4 border-l-sky-600 bg-sky-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Key Benefit</h3>
              <p className="text-gray-700 font-light">
                A diversified portfolio can continue generating income even if one segment underperforms, providing more
                stable and predictable returns over time.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Property Type Diversification</h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <Home className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-3">Residential</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Single-family rentals</li>
                  <li>Small multi-family</li>
                  <li>Condominiums</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-3">Commercial</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Office buildings</li>
                  <li>Retail centers</li>
                  <li>Industrial properties</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-3">Specialty</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Self-storage</li>
                  <li>Mobile home parks</li>
                  <li>Mixed-use properties</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Geographic Diversification</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Don't put all your properties in one city or region. Different markets have different economic drivers,
            population trends, and growth patterns. Consider diversifying across:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Primary markets:</strong> Major metropolitan areas with stable economies
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Secondary markets:</strong> Smaller cities with growth potential
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Different regions:</strong> Various climate zones and economic bases
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Investment Strategy Mix</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Balance different investment approaches within your portfolio:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Cash Flow Focus (60-70%)</h4>
                <p className="text-gray-600 font-light text-sm mb-3">
                  Properties that generate immediate positive cash flow
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Established rental properties</li>
                  <li>• Multi-family buildings</li>
                  <li>• Commercial properties with long-term leases</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Growth Focus (30-40%)</h4>
                <p className="text-gray-600 font-light text-sm mb-3">Properties with appreciation potential</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fix-and-flip projects</li>
                  <li>• Development opportunities</li>
                  <li>• Properties in emerging neighborhoods</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Building Your Portfolio Over Time</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Start with one property type and market you understand well, then gradually expand. Here's a typical
            progression:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Foundation (1-3 properties)</h4>
                <p className="text-gray-600 font-light">
                  Start with single-family rentals in your local market to learn the basics.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expansion (4-8 properties)</h4>
                <p className="text-gray-600 font-light">
                  Add different property types and consider expanding to nearby markets.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Diversification (9+ properties)</h4>
                <p className="text-gray-600 font-light">
                  Achieve true diversification across property types, markets, and strategies.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Financing Your Diversified Portfolio</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            As your portfolio grows, consider portfolio financing options that can provide better terms and simplified
            management. Portfolio loans allow you to leverage your entire portfolio for better rates and terms.
          </p>

          <Card className="my-8 border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Diversify Your Portfolio?</h3>
              <p className="text-gray-600 font-light mb-6">
                Our portfolio financing solutions can help you scale and diversify your real estate investments
                efficiently.
              </p>
              <Link href="/loan-products/rental-portfolio">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">
                  Explore Portfolio Loans
                </Button>
              </Link>
            </CardContent>
          </Card>

          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Building a diversified real estate portfolio takes time and patience, but the long-term benefits of reduced
            risk and stable returns make it a worthwhile strategy for serious real estate investors.
          </p>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Michael Chen"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Michael Chen</h4>
                <p className="text-sky-600 font-medium mb-3">Senior Loan Officer</p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Michael specializes in construction and development loans, with extensive experience in project
                  financing and risk assessment. He has successfully funded over $150M in construction projects across
                  California and Florida.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
