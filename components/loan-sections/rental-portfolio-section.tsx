"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Calendar, Building, TrendingUp, Layers, BarChart3 } from "lucide-react"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"
import QuoteModal from "@/components/quote-modal"
import { useState } from "react"

interface RentalPortfolioSectionProps {
  onSecondaryClick: () => void
}

export default function RentalPortfolioSection({ onSecondaryClick }: RentalPortfolioSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
  }

  return (
    <>
      {/* Rental Portfolio Section */}
      <LoanHeroSection
        title="Rental Portfolio"
        description="A blanket loan for the purchase or refinance of a portfolio of rental properties."
        image="/loan-products/rentalPortfolio.jpg"
        primaryCta={{
          text: "Get a Quote",
          href: "#",
          onClick: openQuoteModal
        }}
        secondaryCta={{
          text: "Schedule Consultation",
          href: "#"
        }}
        onSecondaryClick={onSecondaryClick}
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
            value: "$250K - $100M",
            label: "Loan Amount"
          },
          {
            icon: Calendar,
            value: "30 Years",
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
                  "Loan Amounts: $250k to $100M",
                  "Eligible Property Types: SFR | Condo | Multi-Family",
                  "Loan Terms: 30-year Fixed | Interest-Only & ARM",
                  "Purchase/Rate & Term Refinance Maximum LTV: Up to 80%",
                  "Cash-Out Refinance Maximum LTV: Up to 75%",
                  "Low or No prepayment penalty",
                  "Minimum DSCR: 1.0",
                  "Minimum FICO: 660",
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
                  "Minimum 660 credit score",
                  "Common sense underwriting",
                  "Appraisal not always required",
                  "Title & property insurance",
                  "Adequate cash reserves",
                  "Planned exit strategy",
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

      {/* Success Story */}
      <SuccessStoryCard
        title="Success Story"
        name="Thompson Investment Group"
        testimonial="We consolidated 8 rental properties worth $2.8M into a single portfolio loan of $2.1M at 7.5%. This reduced our monthly payments by $8,500 and freed up $700K in equity for new acquisitions. Our portfolio now generates $110,000 in annual cash flow."
        metrics={[
          { label: "Portfolio Value", value: "$2.8M" },
          { label: "Monthly Savings", value: "$8,500" },
          { label: "Annual Cash Flow", value: "$110,000" }
        ]}
      />

      {/* FAQ Section */}
      <Card className="mb-16 border-0 shadow-lg">
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

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  )
}
