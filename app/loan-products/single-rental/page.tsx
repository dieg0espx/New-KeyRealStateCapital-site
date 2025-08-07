import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, Building, Home } from "lucide-react"
import Link from "next/link"

export default function SingleRentalPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Single Property Rental Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Secure financing for individual rental property acquisitions with competitive rates and flexible terms.
            Perfect for investors looking to build their rental portfolio one property at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$75K - $1.5M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">30 Years</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">7.25%</div>
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
                    "Up to 80% LTV financing",
                    "30-year amortization available",
                    "Competitive interest rates",
                    "Cash-out refinancing options",
                    "No prepayment penalties",
                    "DSCR-based underwriting",
                    "Interest-only options available",
                    "Streamlined application process",
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
                    "Minimum 680 credit score",
                    "1.2x debt service coverage ratio",
                    "Property appraisal required",
                    "Rent roll documentation",
                    "Property management experience",
                    "Adequate cash reserves",
                    "Title insurance and survey",
                    "Property inspection report",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Single Rental Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Property Selection</h4>
                      <p className="text-gray-600 font-light">
                        Choose a rental property that meets our criteria and fits your investment strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Loan Application</h4>
                      <p className="text-gray-600 font-light">
                        Submit your application with property details, financial information, and rent roll.
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
                      <h4 className="font-medium text-gray-900 mb-2">Property Acquisition</h4>
                      <p className="text-gray-600 font-light">
                        Close on the property and begin generating rental income to cover your mortgage payments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Portfolio Growth</h4>
                      <p className="text-gray-600 font-light">
                        Build equity and cash flow while preparing for your next rental property investment.
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
                  <h4 className="font-medium text-gray-900 mr-2">David Chen</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "I purchased a 2-bedroom rental property for $285,000 with a $228,000 loan at 7.25%. 
                  The property generates $2,200/month in rent, providing $800/month in positive cash flow 
                  after all expenses. In just 2 years, the property has appreciated to $320,000."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Purchase Price:</span>
                    <div className="font-medium text-gray-900">$285,000</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Monthly Rent:</span>
                    <div className="font-medium text-gray-900">$2,200</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Current Value:</span>
                    <div className="font-medium text-gray-900">$320,000</div>
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
                  question: "What types of properties qualify for single rental loans?",
                  answer: "We finance single-family homes, townhouses, condos, and small multi-family properties (2-4 units) that are suitable for rental use."
                },
                {
                  question: "How is the loan amount determined?",
                  answer: "Loan amounts are based on the property's value, rental income potential, and your debt service coverage ratio (DSCR)."
                },
                {
                  question: "Can I use this loan for properties I already own?",
                  answer: "Yes, we offer cash-out refinancing for existing rental properties to access equity for new investments."
                },
                {
                  question: "What is the minimum down payment required?",
                  answer: "Down payments typically range from 20-25% depending on the property type and your financial profile."
                },
                {
                  question: "How long does the application process take?",
                  answer: "Our streamlined process typically takes 2-3 weeks from application to closing, depending on documentation completeness."
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Single Property Rental Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Build Wealth Gradually</h4>
                <p className="text-gray-600 font-light">
                  Start small and scale your rental portfolio over time with manageable financing.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Predictable Cash Flow</h4>
                <p className="text-gray-600 font-light">
                  Generate steady monthly income from quality rental properties in strong markets.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tax Benefits</h4>
                <p className="text-gray-600 font-light">
                  Take advantage of depreciation, interest deductions, and other tax advantages.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Long-term Appreciation</h4>
                <p className="text-gray-600 font-light">
                  Benefit from property appreciation while tenants pay down your mortgage.
                </p>
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
                  <h4 className="font-medium text-gray-900">Single-Family Homes</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Traditional single-family residences</li>
                  <li>• Townhouses and row houses</li>
                  <li>• Detached homes with yards</li>
                  <li>• Properties in established neighborhoods</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-sky-600 mr-3" />
                  <h4 className="font-medium text-gray-900">Small Multi-Family</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Duplexes and triplexes</li>
                  <li>• Fourplex properties</li>
                  <li>• Small apartment buildings</li>
                  <li>• Mixed-use properties</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Single Rental Loan
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
