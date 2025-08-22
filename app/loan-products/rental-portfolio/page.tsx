"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, TrendingUp, Home, Layers, BarChart3, Percent } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function RentalPortfolioPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="Rental Portfolio Loan"
          description="A fix-and-flip loan is a short-term financing option for real estate investors to purchase and renovate non-owner occupied residential investment property."
          image="/loan-products/rentalPortfolio.jpg"
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
              title: "Portfolio Scale",
              subtitle: "Multiple Properties",
              icon: <Layers className="h-6 w-6 text-white" />,
              position: "top-right"
            },
            {
              title: "Cash Flow Boost",
              subtitle: "Better Terms & Rates",
              icon: <BarChart3 className="h-6 w-6 text-white" />,
              position: "bottom-left"
            }
          ]}
        />

        <LoanParameterCards
          parameters={[
            {
              icon: DollarSign,
              value: "$100K - $5M",
              label: "Loan Amount"
            },
            {
              icon: Calendar,
              value: "5-30 Years",
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
                    "Loan Amounts: $100,000 to $2,000,000 (up to $5MM for 30-year FRM loans)",
                    "1-4 Unit, PUDs, Warrantable Condos, Townhomes (No vacation rentals)",
                    "Loan Terms: 5/6 ARM, 10/6 ARM, or Fixed Rate Mortgage (5, 10, or 30 years)",
                    "Purchase/Rate & Term Refinance Maximum LTV: Up to 80%",
                    "Cash-Out Refinance Maximum LTV: Up to 75%",
                    "Minimum DSCR: 1.0x",
                    "Minimum FICO: 680",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Portfolio Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
        <SuccessStoryCard
          title="Success Story"
          name="Thompson Investment Group"
          testimonial="We consolidated 8 rental properties worth $2.8M into a single portfolio loan of $2.1M at 7.5%. This reduced our monthly payments by $8,500 and freed up $700K in equity for new acquisitions. Our portfolio now generates $125,000 in annual cash flow."
          metrics={[
            { label: "Portfolio Value", value: "$2.8M" },
            { label: "Monthly Savings", value: "$8,500" },
            { label: "Annual Cash Flow", value: "$125,000" }
          ]}
        />

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
                  <Home className="h-6 w-6 text-light-green mr-3" />
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
                  <Building className="h-6 w-6 text-light-green mr-3" />
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
