import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FixFlipStrategiesPage() {
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
              Sarah Johnson
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              March 10, 2024
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />6 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Fix-and-Flip Success: 10 Essential Strategies
          </h1>

          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Learn the key strategies that separate successful fix-and-flip investors from those who struggle to turn a
            profit. These proven techniques will help you maximize returns and minimize risks.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                Investment Strategy
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Fix-and-Flip</span>
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
            src="/placeholder.svg?height=400&width=800&text=Fix-and-Flip+Renovation"
            alt="Fix-and-Flip Success Strategies"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Fix-and-flip investing can be highly profitable, but success requires more than just buying low and selling
            high. The most successful flippers follow proven strategies that help them identify the right properties,
            manage renovations efficiently, and maximize their returns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Master the 70% Rule</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Never pay more than 70% of the after-repair value (ARV) minus renovation costs. This rule provides a safety
            margin for unexpected expenses and ensures adequate profit potential.
          </p>

          <Card className="my-8 border-l-4 border-l-sky-600 bg-sky-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Example Calculation</h3>
              <p className="text-gray-700 font-light mb-2">ARV: $300,000</p>
              <p className="text-gray-700 font-light mb-2">Renovation costs: $50,000</p>
              <p className="text-gray-700 font-light mb-2">
                Maximum purchase price: ($300,000 × 0.70) - $50,000 = $160,000
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            2. Focus on Location and Neighborhood Trends
          </h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Choose properties in desirable neighborhoods with strong fundamentals. Look for areas with good schools, low
            crime rates, and signs of gentrification or improvement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Build a Reliable Contractor Network</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Your success depends heavily on having reliable, skilled contractors who can deliver quality work on time
            and within budget. Develop relationships with multiple contractors in each trade.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Essential Renovation Strategies</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">High-Impact Improvements</h4>
                <ul className="space-y-2">
                  {[
                    "Kitchen renovations",
                    "Bathroom updates",
                    "Fresh paint throughout",
                    "New flooring",
                    "Curb appeal enhancements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-sky-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Cost-Effective Updates</h4>
                <ul className="space-y-2">
                  {[
                    "Light fixture upgrades",
                    "Cabinet hardware replacement",
                    "Landscaping improvements",
                    "Power washing exterior",
                    "Interior staging",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-sky-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Secure Reliable Financing</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Having pre-approved financing allows you to move quickly on good deals. Hard money lenders and private
            lenders often provide the speed and flexibility that fix-and-flip investors need.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Plan Your Exit Strategy</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Before you buy, know exactly how you'll sell. Research comparable sales, understand your target buyer
            demographic, and have a marketing plan ready.
          </p>

          <Card className="my-8 border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Next Flip?</h3>
              <p className="text-gray-600 font-light mb-6">
                Our fix-and-flip loans provide the fast, flexible financing you need to capitalize on opportunities.
              </p>
              <Link href="/apply">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">
                  Get Pre-Approved Today
                </Button>
              </Link>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Over-improving for the neighborhood:</strong> Don't make your property the most expensive on the
                block.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Underestimating renovation costs:</strong> Always add a 20% contingency buffer.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 font-light">
                <strong>Ignoring permit requirements:</strong> Unpermitted work can derail your sale.
              </span>
            </li>
          </ul>

          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Success in fix-and-flip investing comes from careful planning, reliable partnerships, and disciplined
            execution. By following these strategies and avoiding common pitfalls, you'll be well-positioned to build a
            profitable flipping business.
          </p>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Sarah Johnson"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sarah Johnson</h4>
                <p className="text-sky-600 font-medium mb-3">VP of Lending</p>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Sarah brings 12 years of commercial lending experience, specializing in fix-and-flip and rental
                  property financing. She has originated over $200M in real estate loans and is known for her
                  personalized approach to client service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
