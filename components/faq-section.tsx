"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Gradient } from "@/components/gradient"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What types of properties do you finance?",
    answer: "We finance a wide range of investment properties including single-family homes, multi-family properties (up to 4 units), commercial buildings, mixed-use developments, and land for construction. Our focus is on income-producing properties and fix-and-flip projects across residential and light commercial sectors."
  },
  {
    question: "How quickly can you close a loan?",
    answer: "Our typical closing timeline is 7-14 days for most loan products. For complex transactions or new construction projects, the timeline may extend to 21-30 days. We pride ourselves on fast, efficient closings and can expedite for qualified borrowers."
  },
  {
    question: "What are your minimum credit score requirements?",
    answer: "Generally, we require a minimum credit score of 680 for most loan products. However, we evaluate each application holistically, considering factors like real estate experience, down payment amount, property cash flow, and overall financial strength."
  },
  {
    question: "What are your interest rates?",
    answer: "Interest rates vary by loan type and borrower qualifications: Fix-and-flip loans typically range from 8.5-12%, rental property loans from 6.5-9%, and construction loans from 9-12%. Rates are based on loan amount, borrower experience, property type, and market conditions."
  },
  {
    question: "Do you offer interest-only payments?",
    answer: "Yes, most of our loan products offer interest-only payment options, particularly beneficial for fix-and-flip and bridge loans. This helps improve cash flow during the investment period. For rental property loans, we offer both interest-only and fully amortizing payment options."
  },
  {
    question: "What are your maximum loan amounts?",
    answer: "Our maximum loan amounts vary by product: Fix-and-flip loans up to $2M, rental property loans up to $1.5M, construction loans up to $3M, and commercial loans up to $5M. Larger amounts may be available for experienced investors with strong track records."
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
    <Gradient direction="top">
      <Gradient direction="bottom">
    <section className="py-[200px] bg-gray-50">
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
              <Card key={index} className="border-0 shadow hover:shadow-lg transition-shadow">
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
              <Link href="/faq">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-3">
                  View All FAQs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Gradient>
    </Gradient>
  )
} 