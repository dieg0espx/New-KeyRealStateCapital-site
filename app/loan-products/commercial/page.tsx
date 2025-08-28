"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, TrendingUp, Home, Building2, Users2, Percent } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function CommercialPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="Multi-Family, Mixed-Use & Commercial"
          description="We offer aggressive terms on a variety of scenarios ranging from multi-family value-add to long term commercial DSCR."
          image="/loan-products/multiFamily.jpg"
          primaryCta={{
            text: "Get a Quote",
            href: "/apply"
          }}
          secondaryCta={{
            text: "Schedule Consultation",
            href: "#"
          }}
          onSecondaryClick={openModal}
          badges={[
            {
              title: "Institutional Quality",
              subtitle: "Large Scale Projects",
              icon: <Building2 className="h-6 w-6 text-white" />,
              position: "top-right"
            },
            {
              title: "Multi-Unit Focus",
              subtitle: "Office & Retail Centers",
              icon: <Users2 className="h-6 w-6 text-white" />,
              position: "bottom-left"
            }
          ]}
        />

        <LoanParameterCards
          parameters={[
            {
              icon: DollarSign,
              value: "$150K - $20M",
              label: "Loan Amount"
            },
            {
              icon: Calendar,
              value: "6-30 Years",
              label: "Loan Term"
            },
            {
              icon: Building,
              value: "80% LTV",
              label: "Max Financing"
            }
          ]}
        />

        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                  {[
                    "Loan Amounts: $150k to $20M",
                    "Multi-Family (5+) | Mixed-Use | All Commercial asset types",
                    "Loan Terms: 6, 12, 24 month bridge; 25 & 30 year FRM",
                    "Purchase/Rate & Term Refinance Maximum: Up to 80% LTV",
                    "Cash-Out Refinance Maximum: Up to 75% LTV",
                    "Minimum DSCR: 1.0x",
                    "Minimum FICO: 680",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Minimum 680 credit score",
                    "DSCR-based underwriting",
                    "Property appraisal required",
                    "Title insurance and survey",
                    "Adequate cash reserves",
                    "Exit strategy documentation",
                    "Property management plan",
                    "Insurance coverage verification",
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
        <SuccessStoryCard
          title="Success Story"
          name="Metropolitan Investment Partners"
          testimonial="We secured a $12M loan at 6.75% for a 48-unit apartment complex. The 25-year amortization with 5-year interest-only period provided optimal cash flow. The property generates $1.2M annually with strong occupancy and appreciation potential."
          metrics={[
            { label: "Loan Amount", value: "$12M" },
            { label: "Annual Revenue", value: "$1.2M" },
            { label: "Interest Rate", value: "6.75%" }
          ]}
        />

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply" className="w-full sm:w-auto">
                              <Button size="lg" className="bg-light-green hover:bg-perry text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
                  Free Consultation
                </Button>
            </Link>
            <Button
              onClick={openModal}
              size="lg"
              variant="outline"
              className="border-light-green text-light-green hover:bg-perry/50 font-light px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}
