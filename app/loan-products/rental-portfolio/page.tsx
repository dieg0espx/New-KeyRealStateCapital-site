import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, TrendingUp, Home } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"

export default function RentalPortfolioPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Rental Portfolio Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Scale your rental property investments with portfolio financing solutions. Perfect for experienced investors
            looking to acquire multiple properties or refinance existing portfolios for better terms and cash flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$500K - $10M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">5-30 Years</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">4+ Properties</div>
              <div className="text-gray-600 font-light">Minimum Portfolio</div>
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
                    "Cross-collateralized financing",
                    "Blanket loan options available",
                    "Portfolio cash-out refinancing",
                    "Streamlined underwriting process",
                    "Competitive portfolio rates",
                    "Flexible amortization schedules",
                    "Interest-only payment options",
                    "Portfolio management tools",
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
                    "Minimum 4 rental properties",
                    "700+ credit score preferred",
                    "Strong portfolio performance",
                    "Experienced property management",
                    "Adequate cash reserves",
                    "Comprehensive rent rolls",
                    "Property inspection reports",
                    "Portfolio financial statements",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Portfolio Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Portfolio Assessment</h4>
                      <p className="text-gray-600 font-light">
                        We evaluate your existing rental portfolio, cash flow, and property performance to determine financing options.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Loan Structure</h4>
                      <p className="text-gray-600 font-light">
                        Design a customized loan structure that consolidates multiple properties or provides cash-out for new acquisitions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Portfolio Growth</h4>
                      <p className="text-gray-600 font-light">
                        Use the financing to acquire additional properties or improve existing ones to increase portfolio value.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Ongoing Management</h4>
                      <p className="text-gray-600 font-light">
                        Benefit from simplified loan management and reporting while building long-term wealth through your portfolio.
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
                  <h4 className="font-medium text-gray-900 mr-2">Thompson Investment Group</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "We consolidated 8 rental properties worth $2.8M into a single portfolio loan of $2.1M at 7.5%. 
                  This reduced our monthly payments by $8,500 and freed up $700K in equity for new acquisitions. 
                  Our portfolio now generates $125,000 in annual cash flow."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Portfolio Value:</span>
                    <div className="font-medium text-gray-900">$2.8M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Monthly Savings:</span>
                    <div className="font-medium text-gray-900">$8,500</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Annual Cash Flow:</span>
                    <div className="font-medium text-gray-900">$125,000</div>
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
                  question: "How many properties do I need for portfolio financing?",
                  answer: "We require a minimum of 4 rental properties to qualify for portfolio financing, with a combined value of at least $500,000."
                },
                {
                  question: "Can I include properties with existing mortgages?",
                  answer: "Yes, we can refinance properties with existing mortgages as part of the portfolio loan consolidation."
                },
                {
                  question: "What are the benefits of portfolio financing?",
                  answer: "Portfolio financing offers simplified management, better terms, cash-out options, and easier qualification compared to individual property loans."
                },
                {
                  question: "How is the loan amount determined?",
                  answer: "Loan amounts are based on the total portfolio value, cash flow, and debt service coverage ratio across all properties."
                },
                {
                  question: "Can I add new properties to my portfolio loan?",
                  answer: "Yes, we offer portfolio expansion options to add new properties to your existing portfolio financing structure."
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio Financing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Simplified Management</h4>
                <p className="text-gray-600 font-light">
                  Consolidate multiple property loans into a single portfolio loan for easier management and reporting.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Better Terms</h4>
                <p className="text-gray-600 font-light">
                  Leverage your entire portfolio to secure better rates and terms than individual property loans.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Cash-Out Options</h4>
                <p className="text-gray-600 font-light">
                  Access equity from your portfolio to fund new acquisitions or property improvements.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Scalability</h4>
                <p className="text-gray-600 font-light">
                  Easily add new properties to your existing portfolio loan structure as you grow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Types */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Portfolio Types We Finance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-sky-600 mr-3" />
                  <h4 className="font-medium text-gray-900">Residential Portfolios</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Single-family home portfolios</li>
                  <li>• Multi-family property groups</li>
                  <li>• Mixed residential portfolios</li>
                  <li>• Student housing portfolios</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-sky-600 mr-3" />
                  <h4 className="font-medium text-gray-900">Commercial Portfolios</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Office building portfolios</li>
                  <li>• Retail center groups</li>
                  <li>• Industrial property portfolios</li>
                  <li>• Mixed-use property groups</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Portfolio Loan
            </Button>
          </Link>
          <Button
            onClick={openModal}
            size="lg"
            variant="outline"
            className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 text-lg bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
      
      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}
