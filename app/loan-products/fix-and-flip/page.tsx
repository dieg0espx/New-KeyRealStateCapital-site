"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, ChevronDown, Zap, Hammer, Percent, Clock3, Shield, FileText } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function FixAndFlipPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="Fix & Flip Loans"
          description="Fix & Flip loans that move as fast as you do. Get Maximum Leverage with Minimal Money Down."
          image="/loan-products/fixAndFlip.jpg"
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
              title: "Quick Turnaround",
              subtitle: "7-14 Days",
              icon: <Zap className="h-6 w-6 text-white" />,
              position: "top-left"
            },
            {
              title: "Maximum Leverage",
              subtitle: "95% Purchase Price",
              icon: <Hammer className="h-6 w-6 text-white" />,
              position: "bottom-right"
            }
          ]}
        />

        {/* First-time investor message */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-light-green/10 to-perry/10">
          <CardContent className="p-6 text-center">
            <p className="text-lg text-gray-800 font-medium">
              First-time investor or seasoned pro – we're at your side.
            </p>
          </CardContent>
        </Card>

        {/* Rates & Terms */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Rates & Terms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Percent className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Rates as low as 8.9%</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Up to 95% of purchase price</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">6, 12, 18 + 24 month terms</p>
                  <p className="text-sm text-gray-600">Interest only, no prepayment penalty</p>
                </div>
              </div>
                             <div className="flex items-center space-x-3">
                 <DollarSign className="h-6 w-6 text-light-green" />
                 <div>
                   <p className="font-semibold text-gray-900">Loans from $75K - $10M</p>
                 </div>
               </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Up to 75% of after-repair value</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Hammer className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">100% of rehab covered</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Perks */}
        <Card className="mb-12 border-0 shadow-lg bg-gradient-to-r from-light-green/5 to-perry/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">Additional Perks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-light-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-light-green" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">No Up Front Fees</h3>
                <p className="text-gray-600 font-light text-sm">Start your project without any upfront costs or hidden charges</p>
              </div>
              <div className="text-center group">
                <div className="bg-light-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-light-green" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">No Appraisal</h3>
                <p className="text-gray-600 font-light text-sm">Skip the traditional appraisal process and move faster</p>
              </div>
              <div className="text-center group">
                <div className="bg-light-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-light-green" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">No Income Verification</h3>
                <p className="text-gray-600 font-light text-sm">Focus on the property value, not personal income requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Stats */}
        <LoanParameterCards
          columns={4}
          parameters={[
                         {
               icon: DollarSign,
               value: "$75K - $10M",
               label: "Loan Amount"
             },
            {
              icon: Calendar,
              value: "6-24 Months",
              label: "Loan Term"
            },
            {
              icon: TrendingUp,
              value: "8.9%",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                                     {[
                     "Rates as low as 8.9%",
                     "Up to 95% of purchase price",
                     "100% of rehab covered",
                     "6, 12, 18 + 24 month terms",
                     "Interest only, no prepayment penalty",
                     "Up to 75% of after-repair value",
                     "Easy, streamlined photo rehab draws",
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
                     "No income verification",
                     "No appraisal",
                     "No up front fees",
                     "No experience required",
                     "Detailed renovation budget",
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
                       <h4 className="font-medium text-gray-900 mb-2">Property Sale or Refinance</h4>
                       <p className="text-gray-600 font-light">
                         List and sell the renovated property or easily refinance and hold it as a cash-flowing rental – with cash-out.
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
           testimonial="We purchased a distressed 3-bedroom home for $180,000 and secured a $220,000 fix-and-flip loan covering both acquisition and renovation costs. After 4 months of renovations, we sold the property for $360,000, netting a $95,000 profit after all costs and loan repayment."
           metrics={[
             { label: "Purchase Price", value: "$180,000" },
             { label: "Renovation Cost", value: "$58,000" },
             { label: "Sale Price", value: "$360,000" }
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
