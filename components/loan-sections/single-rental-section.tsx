"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Calendar, TrendingUp, Users, Building, Home, Shield, Percent } from "lucide-react"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"
import QuoteModal from "@/components/quote-modal"
import { useState } from "react"

interface SingleRentalSectionProps {
  onSecondaryClick: () => void
}

export default function SingleRentalSection({ onSecondaryClick }: SingleRentalSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false)
  }

  return (
    <>
      {/* Single Property Rental Section */}
      <LoanHeroSection
        title="Single Property Rental"
        description="Low interest rate financing to help you purchase or refinance a short or long-term rental property."
        image="/loan-products/singlePropertyRental.jpg"
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
            title: "Stable Cash Flow",
            subtitle: "Long-term Returns",
            icon: <TrendingUp className="h-6 w-6 text-white" />,
            position: "top-right"
          },
          {
            title: "Portfolio Building",
            subtitle: "One Property at a Time",
            icon: <Shield className="h-6 w-6 text-white" />,
            position: "bottom-left"
          }
        ]}
      />

      {/* Rates & Terms */}
      <Card className="mb-12 border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Rates & Terms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Percent className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Rates starting at 6.00%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Loans from $75K – $4M (up to $10M on exception)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Eligible Property Types: SFR / Multi-Family / Condo / Commercial</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Purchase / Rate-Term Refinance: up to 85% LTV</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Cash-out Refinance: up to 80% LTV</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Loan Terms: 30-year Fixed | Interest-only & ARM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">Minimum FICO: 620</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-light-green" />
              <div>
                <p className="font-semibold text-gray-900">No minimum DSCR | No seasoning required</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <LoanParameterCards
        parameters={[
          {
            icon: DollarSign,
            value: "$75K - $4M",
            label: "Loan Amount"
          },
          {
            icon: Calendar,
            value: "30 Years",
            label: "Loan Term"
          },
          {
            icon: TrendingUp,
            value: "6.00%",
            label: "Starting Rate"
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
                  "Rates starting at 6.00%",
                  "Loans from $75K – $4M (up to $10M on exception)",
                  "Eligible Property Types: SFR / Multi-Family / Condo / Commercial",
                  "Purchase / Rate-Term Refinance: up to 85% LTV",
                  "Cash-out Refinance: up to 80% LTV",
                  "Loan Terms: 30-year Fixed | Interest-only & ARM",
                  "Minimum FICO: 620",
                  "No minimum DSCR | No seasoning required",
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
                  "Minimum 620 credit score",
                  "No minimum DSCR requirement",
                  "No experience required",
                  "Property valuation",
                  "Title and property insurance",
                  "Adequate cash reserves",
                  "Exit strategy documentation",
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
        name="David Chen"
        testimonial="I purchased a 2-bedroom rental property for $285,000 with a $228,000 loan at 6.25%. The property generates $2,200/month in rent, providing $800/month in positive cash flow after all expenses. The team at Key made the process simple and kept their word from start to finish."
        metrics={[
          { label: "Purchase Price", value: "$285,000" },
          { label: "Monthly Rent", value: "$2,200" },
          { label: "Current Value", value: "$320,000" }
        ]}
      />

      {/* FAQ Section */}
      <Card className="mb-16 border-0 shadow-lg">
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

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  )
}
