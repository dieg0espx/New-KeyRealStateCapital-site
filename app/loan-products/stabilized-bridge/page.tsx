import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, Building, Home } from "lucide-react"
import Link from "next/link"

export default function StabilizedBridgePage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Stabilized Bridge Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Bridge financing for stabilized income-producing properties. Ideal for investors who need quick access to
            capital while arranging permanent financing or preparing for a strategic exit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$250K - $3M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">12-36 Months</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">8.0%</div>
              <div className="text-gray-600 font-light">Starting Rate</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                  {[
                    "Interest-only payments",
                    "Quick 10-14 day closings",
                    "Up to 75% LTV financing",
                    "No prepayment penalties",
                    "Flexible exit strategies",
                    "Experienced underwriting",
                    "Fast approval process",
                    "Competitive bridge rates",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Stabilized income property",
                    "Minimum 680 credit score",
                    "Strong debt service coverage",
                    "Clear exit strategy",
                    "Property appraisal required",
                    "Adequate cash reserves",
                    "Property inspection report",
                    "Market analysis documentation",
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Bridge Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Property Evaluation</h4>
                      <p className="text-gray-600 font-light">
                        We assess your stabilized property's value, cash flow, and market position to determine bridge financing options.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Quick Funding</h4>
                      <p className="text-gray-600 font-light">
                        Access capital in 10-14 days to meet your immediate financing needs while maintaining property ownership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Strategic Planning</h4>
                      <p className="text-gray-600 font-light">
                        Use the bridge period to arrange permanent financing, prepare for sale, or execute your exit strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Exit Strategy</h4>
                      <p className="text-gray-600 font-light">
                        Execute your planned exit through refinancing, property sale, or other strategic options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Story */}
        <Card className="mb-12 border-0 shadow-lg bg-gradient-to-r from-sky-50 to-blue-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Success Story</h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h4 className="font-medium text-gray-900 mr-2">Anderson Real Estate Holdings</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "We needed quick capital to acquire a distressed property while our permanent financing was being processed. 
                  We secured a $1.2M bridge loan at 8.0% with interest-only payments. After 8 months, we refinanced 
                  into permanent financing at 6.5%, saving $18,000 annually in interest costs."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Bridge Loan:</span>
                    <div className="font-medium text-gray-900">$1.2M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Bridge Term:</span>
                    <div className="font-medium text-gray-900">8 Months</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Annual Savings:</span>
                    <div className="font-medium text-gray-900">$18,000</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What is a stabilized bridge loan?",
                  answer: "A bridge loan provides short-term financing for income-producing properties that are already generating stable cash flow, allowing time to arrange permanent financing or execute an exit strategy."
                },
                {
                  question: "How quickly can I close on a bridge loan?",
                  answer: "Our streamlined process allows for closings in 10-14 days, depending on property documentation and market conditions."
                },
                {
                  question: "What exit strategies are acceptable?",
                  answer: "Common exit strategies include refinancing to permanent financing, selling the property, or executing a 1031 exchange. We work with you to ensure your strategy is viable."
                },
                {
                  question: "Can I extend the bridge loan if needed?",
                  answer: "Yes, we offer extension options for qualified borrowers, though it's important to have a clear exit strategy in place."
                },
                {
                  question: "What types of properties qualify?",
                  answer: "We finance stabilized residential and commercial properties that are generating consistent income and have strong market fundamentals."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Use Cases</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Acquisition Bridge</h4>
                  <p className="text-gray-600 font-light">
                    Quickly acquire income-producing properties while arranging long-term financing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cash-Out Refinancing</h4>
                  <p className="text-gray-600 font-light">
                    Access equity from stabilized properties for new investments or improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pre-Sale Financing</h4>
                  <p className="text-gray-600 font-light">
                    Bridge financing while preparing a property for sale or 1031 exchange.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Types */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Property Types We Finance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-sky-600 mr-3" />
                  <h4 className="font-medium text-gray-900">Residential Properties</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Single-family rental homes</li>
                  <li>• Multi-family properties</li>
                  <li>• Student housing</li>
                  <li>• Senior living facilities</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-sky-600 mr-3" />
                  <h4 className="font-medium text-gray-900">Commercial Properties</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Office buildings</li>
                  <li>• Retail centers</li>
                  <li>• Industrial facilities</li>
                  <li>• Mixed-use developments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Benefits */}
        <Card className="mb-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Our Bridge Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Fast Closings</h4>
                <p className="text-gray-600 font-light">
                  Close in 10-14 days with our streamlined underwriting process and experienced team.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Flexible Terms</h4>
                <p className="text-gray-600 font-light">
                  Customize your bridge loan structure to match your specific timeline and exit strategy.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Competitive Rates</h4>
                <p className="text-gray-600 font-light">
                  Starting at 8.0% with interest-only payments to minimize your carrying costs during the bridge period.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Exit Strategy Support</h4>
                <p className="text-gray-600 font-light">
                  Our team helps you plan and execute your exit strategy for a smooth transition to permanent financing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Bridge Loan
            </Button>
          </Link>
          <Link href="https://calendly.com/keyan-keyrealestatecapital/30min?month=2025-08" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
