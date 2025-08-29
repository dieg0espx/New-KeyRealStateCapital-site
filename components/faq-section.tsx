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
        <section className="py-[100px ] lg:py-[200px] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
                You've got questions – we've got answers.
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Get answers to common questions about our loan programs and application process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
              {homePageFAQ.map((item, index) => (
              <Card key={index} className="border-0 shadow  transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
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
                      <div className="text-gray-600 font-light leading-relaxed">
                        {(() => {
                          const lines = item.answer.split('\n');
                          const bulletIndex = lines.findIndex(line => line.trim().startsWith('•'));
                          
                          if (bulletIndex === -1) {
                            // No bullet points, render as regular text
                            return <p>{item.answer}</p>;
                          }
                          
                          // Split into intro text and bullet points
                          const introText = lines.slice(0, bulletIndex).join('\n');
                          const bulletLines = lines.slice(bulletIndex);
                          const listItems = bulletLines
                            .filter(line => line.trim().startsWith('•'))
                            .map(line => line.trim().substring(1).trim());
                          
                          return (
                            <>
                              {introText && <p className="mb-4">{introText}</p>}
                              <ul className="list-disc list-inside space-y-2">
                                {listItems.map((listItem, itemIndex) => (
                                  <li key={itemIndex} className="text-gray-600 font-light">
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Ready to go?</h3>
                <p className="text-gray-600 font-light mb-6">
                  We're here to help.
                </p>
                <div className="flex justify-center">
                  <Link href="/apply">
                    <Button className="bg-light-green hover:bg-perry text-white font-light px-8 py-3">
                      Apply Now
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