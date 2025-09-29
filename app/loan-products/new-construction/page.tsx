"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, Hammer, TrendingUp, Wrench, Target, Percent, Clock3, Shield } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import LoanHeroSection from "@/components/loan-hero-section"
import SuccessStoryCard from "@/components/success-story-card"
import LoanParameterCards from "@/components/loan-parameter-cards"

export default function NewConstructionPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-light-green hover:text-perry mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="New Construction"
          description="A new construction loan is short-term financing that covers the cost of land, labor, and materials for building a property until completion and refinancing or sale."
          image="/loan-products/newConstruction.jpg"
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
              title: "Ground Up",
              subtitle: "From Foundation to Finish",
              icon: <Wrench className="h-6 w-6 text-white" />,
              position: "top-left"
            },
            {
              title: "Conversion Ready",
              subtitle: "To Permanent Financing",
              icon: <Target className="h-6 w-6 text-white" />,
              position: "bottom-right"
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
                  <p className="font-semibold text-gray-900">Interest Rates: Starting at 10.25% (Non-Dutch / As-Disbursed)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Loan to Cost (LTC): Up to 92.5% of Total Cost Basis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Loan Terms: 12, 18, or 24 months</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-light-green" />
                <div>
                  <p className="font-semibold text-gray-900">Loan Amounts: $100k to $20M</p>
                </div>
              </div>
                             <div className="flex items-center space-x-3">
                 <TrendingUp className="h-6 w-6 text-light-green" />
                 <div>
                   <p className="font-semibold text-gray-900">Loan to After Repair Value (LTARV): Up to 75%</p>
                 </div>
               </div>
               <div className="flex items-center space-x-3">
                 <Users className="h-6 w-6 text-light-green" />
                 <div>
                   <p className="font-semibold text-gray-900">Minimum Credit Score: 600 FICO</p>
                 </div>
               </div>
            </div>
          </CardContent>
        </Card>

        <LoanParameterCards
          parameters={[
            {
              icon: DollarSign,
              value: "$100K - $20M",
              label: "Loan Amount"
            },
            {
              icon: Calendar,
              value: "12-24 Months",
              label: "Construction Term"
            },
            {
              icon: Building,
              value: "90% LTC",
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
                    "Interest Rates: Starting at 10.25% (Non-Dutch / As-Disbursed)",
                    "Loan Amounts: $100k to $20M",
                    "Eligible Property Types: All non-owner occupied real estate",
                    "Loan Terms: 12, 18, or 24 months",
                    "Loan to Cost (LTC): Up to 90% of Total Cost Basis",
                    "Loan to After Repair Value (LTARV): Up to 75%",
                    "Minimum Credit Score: 660 FICO",
                    "Additional Perks: Photo Inspections | Advanced Construction Draws",
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
                    "No experience required",
                    "Detailed construction budget",
                    "Builder's risk insurance",
                    "GC Verification",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Construction Loan Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                                  <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pre-approval and Funding</h4>
                  <p className="text-gray-600 font-light">
                    Submit plans and the line item budget; we'll order the appraisal and fund your loan in a timely manner.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                                  <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Construction Phase</h4>
                  <p className="text-gray-600 font-light">
                    Easily request draws with your phone as construction milestones are completed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                                  <div className="bg-light-green text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Conversion or Exit</h4>
                  <p className="text-gray-600 font-light">
                    Convert to permanent financing or sell/refinance upon completion. We offer seamless conversion options to maximize your project's success.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Story */}
        <SuccessStoryCard
          title="Success Story"
          name="Maria Rodriguez Development"
          testimonial="We secured a $1.2M construction loan to build a 4-unit townhouse project. The 18-month construction period went smoothly with regular draws, and we converted to permanent financing upon completion. We were able to pull out almost $100,000 in cash-out at the refinance, and the townhomes are generating around $45,000 in annual cash flow."
          metrics={[
            { label: "Construction Cost", value: "$1.2M" },
            { label: "Construction Time", value: "18 Months" },
            { label: "Annual Cash Flow", value: "$45,000" }
          ]}
        />

        {/* FAQ Section */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What types of construction projects do you finance?",
                  answer: "We finance residential and commercial construction projects including single-family homes, multi-family developments, office buildings, and mixed-use properties."
                },
                {
                  question: "How are construction draws disbursed?",
                  answer: "Draws are disbursed based on completed construction milestones. We work with your contractor to verify progress before releasing funds."
                },
                {
                  question: "Can I convert to permanent financing upon completion?",
                  answer: "Yes, we offer seamless conversion to permanent financing with competitive rates and flexible terms."
                },
                {
                  question: "What documentation is required for construction loans?",
                  answer: "We require detailed construction plans, contractor licensing, builder's risk insurance, and comprehensive project budgets."
                },
                {
                  question: "How long does the approval process take?",
                  answer: "Construction loan approvals typically take 2-4 weeks depending on project complexity and documentation completeness."
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

        {/* Project Types */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Project Types We Finance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-light-green mr-3" />
                  <h4 className="font-medium text-gray-900">Residential Construction</h4>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Single-family homes</li>
                  <li>• Multi-family developments</li>
                  <li>• Townhouse projects</li>
                  <li>• Custom home builds</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Hammer className="h-6 w-6 text-light-green mr-3" />
                  <h4 className="font-medium text-gray-900">Commercial Construction</h4>
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Our Construction Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Experienced Team</h4>
                <p className="text-gray-600 font-light">
                  Work with construction loan specialists who understand the development process and can guide you through every phase.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Flexible Terms</h4>
                <p className="text-gray-600 font-light">
                  Customize your loan structure to match your project timeline and construction needs.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Competitive Rates</h4>
                <p className="text-gray-600 font-light">
                  Starting at 9.0% with interest-only payments during construction to minimize your carrying costs.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Seamless Conversion</h4>
                <p className="text-gray-600 font-light">
                  Convert to permanent financing upon completion with our streamlined conversion process.
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
