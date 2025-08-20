"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, Building, Home, Zap, ArrowRight, Percent } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function StabilizedBridgePage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="Stabilized Bridge"
          description="A fix-and-flip loan is a short-term financing option for real estate investors on non-owner occupied investment property."
          image="/loan-products/stabilizedBridge.jpg"
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
              title: "Bridge Financing",
              subtitle: "Quick Capital Access",
              icon: <Zap className="h-6 w-6 text-white" />,
              position: "top-left"
            },
            {
              title: "Strategic Exit",
              subtitle: "Permanent Financing Ready",
              icon: <ArrowRight className="h-6 w-6 text-white" />,
              position: "bottom-right"
            }
          ]}
        />

        <LoanParameterCards
          parameters={[
            {
              icon: DollarSign,
              value: "$75k - $4MM",
              label: "Loan Amount"
            },
            {
              icon: Calendar,
              value: "6-24 Months",
              label: "Loan Term"
            },
            {
              icon: TrendingUp,
              value: "85% LTC",
              label: "Max Financing"
            }
          ]}
        />

        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                  {[
                    "Loan Amounts: $75k to $4MM (higher on exception)",
                    "Loan Terms: 6 or 12 months, extendable up to 24 months",
                    "Single-Family, 2-4 Unit, Townhomes, PUDs, Warrantable Condos",
                    "Max LTC: 85% of purchase price + verified completed CAPEX",
                    "Max LTV: Up to 70% (based on DSCR Exit or No DSCR terms)",
                    "Minimum FICO: 660",
                    "DSCR Requirement: 1.10 Exit DSCR for rental-ready properties",
                    "Additional Perks: Free or Waived Appraisals",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Minimum 660 credit score",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Bridge Financing Works</h2>
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
                        We assess your stabilized property's value, cash flow, and market position to determine bridge financing options.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
        <SuccessStoryCard
          title="Success Story"
          name="Anderson Real Estate Holdings"
          testimonial="We needed quick capital to acquire a distressed property while our permanent financing was being processed. We secured a $1.2M bridge loan at 8.0% with interest-only payments. After 8 months, we refinanced into permanent financing at 6.5%, saving $18,000 annually in interest costs."
          metrics={[
            { label: "Bridge Loan", value: "$1.2M" },
            { label: "Bridge Term", value: "8 Months" },
            { label: "Annual Savings", value: "$18,000" }
          ]}
        />

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
                <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
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
                <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
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
                <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
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
                  <Home className="h-6 w-6 text-light-green mr-3" />
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
                  <Building className="h-6 w-6 text-light-green mr-3" />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply" className="w-full sm:w-auto">
              <Button size="lg" className="bg-light-green hover:bg-perry text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
                Apply for Bridge Loan
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
