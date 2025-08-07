"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building, Users, Clock, Star, Hammer, TrendingUp } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import { LoanHeroSection } from "@/components"

export default function NewConstructionPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <LoanHeroSection
          title="New Construction Loans"
          description="Finance your ground-up development projects with flexible construction loans that convert to permanent financing. Perfect for experienced developers and investors building new properties."
          primaryCta={{
            text: "Apply Now",
            href: "/apply"
          }}
          secondaryCta={{
            text: "Schedule Consultation",
            href: "#"
          }}
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$200K - $5M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">12-24 Months</div>
              <div className="text-gray-600 font-light">Construction Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">80% LTC</div>
              <div className="text-gray-600 font-light">Max Financing</div>
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
                    "Interest-only during construction",
                    "Flexible draw schedule",
                    "Convert to permanent financing",
                    "Up to 80% loan-to-cost ratio",
                    "Experienced construction team",
                    "Fast approval process",
                    "Builder's risk insurance included",
                    "Site inspection services",
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
                    "Minimum 700 credit score",
                    "Construction experience required",
                    "Detailed construction plans",
                    "Licensed general contractor",
                    "Builder's risk insurance",
                    "20% down payment minimum",
                    "Comprehensive project budget",
                    "Market feasibility study",
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
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Construction Loan Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                                  <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pre-Approval & Planning</h4>
                  <p className="text-gray-600 font-light">
                    Submit plans, budgets, and contractor information for loan approval. Our team reviews your project feasibility and construction timeline.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                                  <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Construction Phase</h4>
                  <p className="text-gray-600 font-light">
                    Receive funds through scheduled draws as construction milestones are completed. Our team monitors progress and ensures quality standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                                  <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
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
                  <h4 className="font-medium text-gray-900 mr-2">Maria Rodriguez Development</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light mb-4">
                  "We secured a $1.2M construction loan to build a 4-unit townhouse project. The 18-month 
                  construction period went smoothly with regular draws, and we converted to permanent financing 
                  upon completion. The project generated $45,000 in annual cash flow after conversion."
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Construction Cost:</span>
                    <div className="font-medium text-gray-900">$1.2M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Construction Time:</span>
                    <div className="font-medium text-gray-900">18 Months</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Annual Cash Flow:</span>
                    <div className="font-medium text-gray-900">$45,000</div>
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
                  <Building className="h-6 w-6 text-sky-600 mr-3" />
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
                  <Hammer className="h-6 w-6 text-sky-600 mr-3" />
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
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
                Apply for Construction Loan
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
