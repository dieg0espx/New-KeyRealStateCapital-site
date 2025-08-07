"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Gradient } from "@/components/gradient"
import { homePageFAQ } from "@/data/faq-data"

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
              {homePageFAQ.map((item, index) => (
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