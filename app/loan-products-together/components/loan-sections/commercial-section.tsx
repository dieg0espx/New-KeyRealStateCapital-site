"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Calendar, Building2, Users2, Percent } from "lucide-react"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

interface CommercialSectionProps {
  onSecondaryClick: () => void
}

export default function CommercialSection({ onSecondaryClick }: CommercialSectionProps) {
  return (
    <>
      {/* Multi-Family / Commercial Section */}
      <LoanHeroSection
        title="Multi-Family / Commercial"
        description="Financing for larger multi-family and commercial properties with competitive rates and flexible terms."
        image="/loan-products/multiFamily.jpg"
        primaryCta={{
          text: "Get a Quote",
          href: "/apply"
        }}
        secondaryCta={{
          text: "Schedule Consultation",
          href: "#"
        }}
        onSecondaryClick={onSecondaryClick}
        badges={[
          {
            title: "Large Scale",
            subtitle: "Up to $20M",
            icon: <Building2 className="h-6 w-6 text-white" />,
            position: "top-right"
          },
          {
            title: "Experienced Team",
            subtitle: "Commercial Expertise",
            icon: <Users2 className="h-6 w-6 text-white" />,
            position: "bottom-left"
          }
        ]}
      />

      <LoanParameterCards
        parameters={[
          {
            icon: DollarSign,
            value: "$1M - $20M",
            label: "Loan Amount"
          },
          {
            icon: Calendar,
            value: "5-30 Years",
            label: "Loan Term"
          },
          {
            icon: Percent,
            value: "7.0%",
            label: "Starting Rate"
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
                  "Loan Amounts: $1M to $20M",
                  "Eligible Property Types: Multi-Family, Office, Retail, Industrial, Mixed-Use",
                  "Loan Terms: 5-30 years",
                  "Maximum LTV: Up to 80%",
                  "Interest Rates: Starting at 7.0%",
                  "Minimum DSCR: 1.20",
                  "Minimum FICO: 680",
                  "Experienced underwriting team",
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
                  "Commercial real estate experience",
                  "Property appraisal",
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
        name="Metro Commercial Partners"
        testimonial="We acquired a 24-unit apartment complex for $3.2M with a $2.4M commercial loan at 7.25%. The property generates $28,000 in monthly rent with strong occupancy rates. The team's commercial expertise made the complex transaction smooth and efficient."
        metrics={[
          { label: "Property Value", value: "$3.2M" },
          { label: "Monthly Rent", value: "$28,000" },
          { label: "Occupancy Rate", value: "96%" }
        ]}
      />

      {/* FAQ Section */}
      <Card className="mb-16 border-0 shadow-lg">
        <CardContent className="p-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What types of commercial properties do you finance?",
                answer: "We finance multi-family properties (5+ units), office buildings, retail centers, industrial properties, and mixed-use developments."
              },
              {
                question: "What is the minimum loan amount for commercial financing?",
                answer: "Our commercial loan program starts at $1 million, with maximum loan amounts up to $20 million."
              },
              {
                question: "How is the loan amount determined for commercial properties?",
                answer: "Loan amounts are based on the property's appraised value, net operating income, debt service coverage ratio, and market conditions."
              },
              {
                question: "What documentation is required for commercial loans?",
                answer: "We require property financials, rent rolls, property management agreements, environmental reports, and comprehensive property appraisals."
              },
              {
                question: "How long does the commercial loan process take?",
                answer: "Commercial loan approvals typically take 4-6 weeks depending on property complexity, documentation completeness, and market conditions."
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
    </>
  )
}
