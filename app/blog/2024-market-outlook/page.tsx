import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPostPage() {
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
              John Smith
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              March 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />8 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            2024 Real Estate Market Outlook: Trends and Opportunities
          </h1>

          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Comprehensive analysis of market trends, interest rate impacts, and emerging opportunities for real estate
            investors in 2024.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                Market Analysis
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
            src="/placeholder.svg?height=400&width=800"
            alt="2024 Real Estate Market Outlook"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            As we navigate through 2024, the real estate investment landscape continues to evolve with new challenges
            and opportunities. Interest rate fluctuations, changing demographics, and emerging market trends are
            reshaping how investors approach real estate financing and acquisition strategies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Interest Rate Environment</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            The Federal Reserve's monetary policy continues to influence real estate markets significantly. While rates
            have stabilized compared to the volatility of 2022-2023, investors must adapt their strategies to the new
            normal of higher borrowing costs. This environment creates both challenges and opportunities for savvy
            investors.
          </p>

          <Card className="my-8 border-l-4 border-l-sky-600 bg-sky-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Key Insight</h3>
              <p className="text-gray-700 font-light">
                Higher interest rates are creating opportunities for cash buyers and investors with strong relationships
                with private lenders. Competition has decreased in many markets, leading to better acquisition
                opportunities.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Emerging Market Trends</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Several key trends are shaping the 2024 real estate landscape:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Secondary Market Growth:</strong> Investors are increasingly looking beyond primary markets to
                secondary cities with strong fundamentals and lower entry costs.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Build-to-Rent Expansion:</strong> The BTR sector continues to grow as institutional investors
                recognize the long-term rental demand.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-sky-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Technology Integration:</strong> PropTech solutions are becoming essential for efficient
                property management and investment analysis.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Investment Opportunities</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Despite market challenges, 2024 presents several compelling opportunities for real estate investors:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Fix-and-Flip Opportunities</h4>
                <p className="text-gray-600 font-light text-sm">
                  Reduced competition and motivated sellers create favorable conditions for experienced flippers with
                  access to capital.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Rental Property Demand</h4>
                <p className="text-gray-600 font-light text-sm">
                  Strong rental demand continues across most markets, supporting cash flow for buy-and-hold investors.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Financing Strategies</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            In today's environment, having diverse financing options is crucial. Private lenders like Key Real Estate
            Capital are filling gaps left by traditional banks, offering faster closings and more flexible terms for
            investment properties.
          </p>

          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Successful investors in 2024 are those who can move quickly when opportunities arise, have strong
            relationships with reliable lenders, and understand their local markets deeply.
          </p>

          <Card className="my-8 border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Capitalize on 2024 Opportunities?</h3>
              <p className="text-gray-600 font-light mb-6">
                Our team can help you secure the financing you need to take advantage of today's market conditions.
              </p>
              <Link href="/apply">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">
                  Get Pre-Qualified Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="John Smith"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">John Smith</h4>
                <p className="text-sky-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  With over 15 years in real estate finance, John founded Key Real Estate Capital to provide
                  sophisticated lending solutions for investors nationwide. His expertise spans commercial lending, real
                  estate development, and investment strategy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
