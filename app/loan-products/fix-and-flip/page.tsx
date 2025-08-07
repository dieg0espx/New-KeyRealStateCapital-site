"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp, Users, Clock, Star, ChevronDown } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import { LoanHeroSection } from "@/components"

export default function FixAndFlipPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
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
        />

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$100K - $2M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">6-18 Months</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">8.5%</div>
              <div className="text-gray-600 font-light">Starting Rate</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">7-14 Days</div>
              <div className="text-gray-600 font-light">Close Time</div>
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">How Fix-and-Flip Financing Works</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                    <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                  <h4 className="font-medium text-gray-900 mr-2">Sarah & Mike Johnson</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "We purchased a distressed 3-bedroom home for $180,000 and secured a $270,000 fix-and-flip loan 
                  covering both acquisition and renovation costs. After 4 months of renovations, we sold the property 
                  for $420,000, netting a $95,000 profit after all costs and loan repayment."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Purchase Price:</span>
                    <div className="font-medium text-gray-900">$180,000</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Renovation Cost:</span>
                    <div className="font-medium text-gray-900">$45,000</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sale Price:</span>
                    <div className="font-medium text-gray-900">$420,000</div>
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
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
                Apply for Fix-and-Flip Loan
              </Button>
            </Link>
            <Button
              onClick={openModal}
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
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
