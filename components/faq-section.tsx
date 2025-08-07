"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What types of loans do you offer?",
    answer: "We offer a comprehensive range of real estate loans including Fix-and-Flip, Single Property Rental, New Construction, Rental Portfolio, Stabilized Bridge, and Multi-Family/Commercial financing. Each loan type is designed for specific investment strategies and timelines."
  },
  {
    question: "How quickly can I get approved for a loan?",
    answer: "Our streamlined approval process typically takes 7-14 days for most loan types. We offer fast closings and have experienced underwriters who understand real estate investment needs. Pre-approval can often be completed within 24-48 hours."
  },
  {
    question: "What are the minimum requirements for loan approval?",
    answer: "Requirements vary by loan type, but generally include a minimum 680 credit score, proof of income or assets, property appraisal, and clear exit strategy. We evaluate each application individually and can work with various financial situations."
  },
  {
    question: "Do you offer loans for first-time investors?",
    answer: "Yes! We work with both experienced investors and first-time buyers. Our team provides guidance throughout the process and can help structure loans that work for your specific situation and investment goals."
  },
  {
    question: "What are your interest rates and terms?",
    answer: "Rates start as low as 7.0% and vary based on loan type, property type, and borrower qualifications. Terms range from 6 months for fix-and-flip projects to 30 years for rental properties. We offer competitive rates and flexible terms."
  },
  {
    question: "Can I refinance an existing property?",
    answer: "Absolutely! We offer cash-out refinancing and rate-and-term refinancing for existing properties. This can be a great way to access equity for additional investments or improve your loan terms."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Get answers to common questions about our loan programs and application process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.question}</span>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-light mb-6">
              Still have questions? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">
                  Contact Us
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light px-8 py-3">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 