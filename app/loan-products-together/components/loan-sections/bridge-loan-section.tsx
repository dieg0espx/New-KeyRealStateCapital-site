"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Calendar, TrendingUp, Zap, ArrowRight } from "lucide-react"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

interface BridgeLoanSectionProps {
  onSecondaryClick: () => void
}

export default function BridgeLoanSection({ onSecondaryClick }: BridgeLoanSectionProps) {
  return (
    <>
      {/* Bridge Loan Section */}
      <LoanHeroSection
        title="Bridge Loans"
        description="Bridge financing for stabilized income-producing properties with quick capital access and strategic exit planning."
        image="/loan-products/stabilizedBridge.jpg"
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
            value: "$100k - $10M",
            label: "Loan Amount"
          },
          {
            icon: Calendar,
            value: "6-24 Months",
            label: "Loan Term"
          },
          {
            icon: TrendingUp,
            value: "85% LTV",
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
                  "Loan Amounts: $100k to $10M",
                  "Loan Terms: 6 or 12 months, extendable up to 24 months",
                  "All asset types",
                  "Maximum Leverage: 85% Loan-to-Value (LTV)",
                  "Minimum FICO: None",
                  "No minimum DSCR requirement",
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
                  "No minimum credit score",
                  "Clean background",
                  "Property evaluation",
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
                      In 3-10 days
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
        testimonial="We needed quick capital to acquire a distressed property while our permanent financing was being processed. We secured a $1.2M bridge loan at 9.0% with interest-only payments. After 6 weeks we refinanced into a 30 year fixed loan at 6.375% and the property is cash-flowing very strong."
        metrics={[
          { label: "Bridge Loan", value: "$1.2M" },
          { label: "Bridge Term", value: "6 Months" },
          { label: "Time to Close", value: "6 Days" }
        ]}
      />

      {/* FAQ Section */}
      <Card className="mb-16 border-0 shadow-lg">
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
    </>
  )
}
