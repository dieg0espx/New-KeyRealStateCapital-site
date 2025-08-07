import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, TrendingUp, Home } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"

export default function CommercialPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Multi-Family & Commercial Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Comprehensive financing solutions for larger multi-family properties, office buildings, retail centers, and
            mixed-use developments. Designed for experienced investors and developers seeking institutional-quality
            financing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$1M - $20M</div>
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
              <div className="text-2xl font-semibold text-gray-900 mb-1">80% LTV</div>
              <div className="text-gray-600 font-light">Max Financing</div>
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
                    "Up to $20M loan amounts",
                    "Competitive institutional rates",
                    "Flexible amortization terms",
                    "Interest-only options available",
                    "Experienced underwriting team",
                    "Recourse and non-recourse options",
                    "Fast approval process",
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
                    "Minimum $1M loan amount",
                    "Strong sponsor experience",
                    "Stabilized cash flow preferred",
                    "Comprehensive financial analysis",
                    "Professional property management",
                    "Market-rate debt service coverage",
                    "Property inspection reports",
                    "Environmental assessments",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Commercial Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Property Evaluation</h4>
                      <p className="text-gray-600 font-light">
                        We conduct comprehensive property analysis including market position, cash flow, and value assessment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Sponsor Review</h4>
                      <p className="text-gray-600 font-light">
                        Evaluate sponsor experience, track record, and financial capacity to ensure project success.
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
                      <h4 className="font-medium text-gray-900 mb-2">Loan Structuring</h4>
                      <p className="text-gray-600 font-light">
                        Design customized loan terms that align with your investment strategy and property performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Ongoing Support</h4>
                      <p className="text-gray-600 font-light">
                        Provide ongoing relationship management and support throughout the loan term.
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
                  <h4 className="font-medium text-gray-900 mr-2">Metropolitan Investment Partners</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "We secured a $12M loan at 6.75% for a 48-unit apartment complex. The 25-year amortization 
                  with 5-year interest-only period provided optimal cash flow. The property generates $1.2M 
                  annually with strong occupancy and appreciation potential."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Loan Amount:</span>
                    <div className="font-medium text-gray-900">$12M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Annual Revenue:</span>
                    <div className="font-medium text-gray-900">$1.2M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Interest Rate:</span>
                    <div className="font-medium text-gray-900">6.75%</div>
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
                  question: "What is the minimum loan amount for commercial properties?",
                  answer: "We require a minimum loan amount of $1 million for commercial and multi-family properties, with maximum loan amounts up to $20 million."
                },
                {
                  question: "What types of commercial properties do you finance?",
                  answer: "We finance multi-family properties, office buildings, retail centers, industrial facilities, and mixed-use developments."
                },
                {
                  question: "How is the loan amount determined?",
                  answer: "Loan amounts are based on property value, cash flow, debt service coverage ratio, and sponsor strength. We typically lend up to 80% LTV."
                },
                {
                  question: "What documentation is required?",
                  answer: "We require property financials, rent rolls, property management agreements, environmental reports, and comprehensive sponsor financials."
                },
                {
                  question: "How long does the approval process take?",
                  answer: "Commercial loan approvals typically take 4-6 weeks depending on property complexity and documentation completeness."
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Property Types We Finance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Multi-Family</h4>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Apartment complexes (5+ units)</li>
                  <li>• Student housing</li>
                  <li>• Senior living facilities</li>
                  <li>• Affordable housing projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Commercial</h4>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Office buildings</li>
                  <li>• Retail centers</li>
                  <li>• Industrial properties</li>
                  <li>• Mixed-use developments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Benefits */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Our Commercial Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Institutional Quality</h4>
                <p className="text-gray-600 font-light">
                  Access institutional-quality financing with competitive rates and flexible terms designed for experienced investors.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Experienced Team</h4>
                <p className="text-gray-600 font-light">
                  Work with commercial loan specialists who understand complex transactions and can guide you through every step.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Flexible Terms</h4>
                <p className="text-gray-600 font-light">
                  Customize your loan structure with interest-only periods, flexible amortization, and competitive rates.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Fast Approvals</h4>
                <p className="text-gray-600 font-light">
                  Benefit from our streamlined approval process and experienced underwriting team for faster closings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loan Comparison */}
        <Card className="mb-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Commercial Loan Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-semibold text-gray-900">Property Type</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Loan Amount</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Max LTV</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Rate Range</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Term</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Multi-Family (5-50 units)</td>
                    <td className="py-3 text-gray-700">$1M - $10M</td>
                    <td className="py-3 text-gray-700">80%</td>
                    <td className="py-3 text-gray-700">6.5% - 7.5%</td>
                    <td className="py-3 text-gray-700">5-30 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Multi-Family (50+ units)</td>
                    <td className="py-3 text-gray-700">$5M - $20M</td>
                    <td className="py-3 text-gray-700">75%</td>
                    <td className="py-3 text-gray-700">6.0% - 7.0%</td>
                    <td className="py-3 text-gray-700">5-30 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Office Buildings</td>
                    <td className="py-3 text-gray-700">$1M - $15M</td>
                    <td className="py-3 text-gray-700">70%</td>
                    <td className="py-3 text-gray-700">6.75% - 7.75%</td>
                    <td className="py-3 text-gray-700">5-25 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Retail Centers</td>
                    <td className="py-3 text-gray-700">$1M - $12M</td>
                    <td className="py-3 text-gray-700">70%</td>
                    <td className="py-3 text-gray-700">7.0% - 8.0%</td>
                    <td className="py-3 text-gray-700">5-25 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Industrial Properties</td>
                    <td className="py-3 text-gray-700">$1M - $20M</td>
                    <td className="py-3 text-gray-700">75%</td>
                    <td className="py-3 text-gray-700">6.5% - 7.5%</td>
                    <td className="py-3 text-gray-700">5-30 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Commercial Loan
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
