"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, ChevronDown, Zap, Hammer } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function FixAndFlipPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="Fix-and-Flip Loans"
          description="Short-term financing solutions designed specifically for property renovation and resale projects. Get the capital you need to acquire, renovate, and sell properties quickly and profitably."
          image="/loan-products/fixAndFlip.jpg"
          primaryCta={{
            text: "Apply Now",
            href: "/apply"
          }}
          secondaryCta={{
            text: "Schedule Consultation",
            href: "#"
          }}
          onSecondaryClick={openModal}
          badges={[
            {
              title: "Quick Turnaround",
              subtitle: "7-14 Days",
              icon: <Zap className="h-6 w-6 text-white" />,
              position: "top-left"
            },
            {
              title: "Renovation Funds",
              subtitle: "Up to 90% ARV",
              icon: <Hammer className="h-6 w-6 text-white" />,
              position: "bottom-right"
            }
          ]}
        />

        {/* Key Stats */}
        <LoanParameterCards
          columns={4}
          parameters={[
            {
              icon: DollarSign,
              value: "$100K - $2M",
              label: "Loan Amount"
            },
            {
              icon: Calendar,
              value: "6-18 Months",
              label: "Loan Term"
            },
            {
              icon: TrendingUp,
              value: "8.5%",
              label: "Starting Rate"
            },
            {
              icon: Clock,
              value: "7-14 Days",
              label: "Close Time"
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
                    "Loan amounts up to $2M",
                    "Terms from 6-18 months",
                    "Interest-only payments",
                    "No prepayment penalties",
                    "Fast 7-14 day closings",
                    "Up to 90% ARV financing",
                    "Renovation funds included",
                    "Flexible draw schedules",
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
                    "Minimum 680 credit score",
                    "Proof of renovation experience",
                    "Detailed renovation budget",
                    "Exit strategy documentation",
                    "Property appraisal required",
                    "Title insurance and survey",
                    "Contractor licensing verification",
                    "Adequate cash reserves",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Fix-and-Flip Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Property Acquisition</h4>
                      <p className="text-gray-600 font-light">
                        Purchase distressed properties below market value using our acquisition financing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Renovation Phase</h4>
                      <p className="text-gray-600 font-light">
                        Access renovation funds through scheduled draws as work progresses and milestones are met.
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
                      <h4 className="font-medium text-gray-900 mb-2">Property Sale</h4>
                      <p className="text-gray-600 font-light">
                        List and sell the renovated property at market value to maximize your profit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Loan Repayment</h4>
                      <p className="text-gray-600 font-light">
                        Pay off the loan with proceeds from the sale and keep your profit.
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
          name="Sarah & Mike Johnson"
          testimonial="We purchased a distressed 3-bedroom home for $180,000 and secured a $270,000 fix-and-flip loan covering both acquisition and renovation costs. After 4 months of renovations, we sold the property for $420,000, netting a $95,000 profit after all costs and loan repayment."
          metrics={[
            { label: "Purchase Price", value: "$180,000" },
            { label: "Renovation Cost", value: "$45,000" },
            { label: "Sale Price", value: "$420,000" }
          ]}
        />

        {/* FAQ Section */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What is the maximum loan amount for fix-and-flip projects?",
                  answer: "We offer fix-and-flip loans up to $2 million, with loan amounts typically based on the After Repair Value (ARV) of the property."
                },
                {
                  question: "How quickly can I close on a fix-and-flip loan?",
                  answer: "Our streamlined process allows for closings in 7-14 days, depending on the complexity of your project and documentation completeness."
                },
                {
                  question: "Do I need renovation experience to qualify?",
                  answer: "While renovation experience is preferred, we work with both experienced flippers and those new to the business. We'll review your team and project plan."
                },
                {
                  question: "How are renovation funds disbursed?",
                  answer: "Renovation funds are disbursed through scheduled draws based on completed milestones. We work with your contractor to ensure timely funding."
                },
                {
                  question: "What happens if the property doesn't sell as quickly as expected?",
                  answer: "We offer loan extensions and can work with you to adjust the timeline. However, it's important to have a realistic exit strategy in place."
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

        {/* Additional Benefits */}
        <Card className="mb-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Our Fix-and-Flip Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Fast Approval Process</h4>
                <p className="text-gray-600 font-light">
                  Get pre-approved in 24-48 hours and close in as little as 7 days with our streamlined underwriting.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Competitive Rates</h4>
                <p className="text-gray-600 font-light">
                  Starting at 8.5% with flexible terms and no hidden fees or prepayment penalties.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Experienced Team</h4>
                <p className="text-gray-600 font-light">
                  Work with loan officers who understand fix-and-flip projects and can guide you through the process.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Flexible Terms</h4>
                <p className="text-gray-600 font-light">
                  Customize your loan structure to match your project timeline and renovation needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply" className="w-full sm:w-auto">
              <Button size="lg" className="bg-light-green hover:bg-perry text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
                Apply for Fix-and-Flip Loan
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
