import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of properties do you finance?",
      answer:
        "We finance a wide range of investment properties including single-family homes, multi-family properties, commercial buildings, and mixed-use developments. Our focus is on income-producing properties and fix-and-flip projects.",
    },
    {
      question: "How quickly can you close a loan?",
      answer:
        "Our typical closing timeline is 7-14 days for most loan products. For complex transactions or new construction projects, the timeline may extend to 21-30 days. We pride ourselves on fast, efficient closings.",
    },
    {
      question: "What are your minimum credit score requirements?",
      answer:
        "Generally, we require a minimum credit score of 680 for most loan products. However, we evaluate each application holistically, considering factors like experience, down payment, and property cash flow.",
    },
    {
      question: "Do you require personal guarantees?",
      answer:
        "Personal guarantees are typically required for most loan products. However, the specific terms depend on the loan amount, borrower experience, and property type. We can discuss alternatives during the application process.",
    },
    {
      question: "What states do you lend in?",
      answer:
        "We currently lend in 15 states across the US, with primary focus on California and Florida markets. Contact us to confirm if we lend in your target market.",
    },
    {
      question: "Can you finance properties held in an LLC?",
      answer:
        "Yes, we regularly finance properties held in LLCs and other business entities. We'll need to review the entity structure and may require personal guarantees from the principals.",
    },
    {
      question: "What documentation do you require?",
      answer:
        "Standard documentation includes tax returns, bank statements, property appraisal, renovation budgets (for fix-and-flip), rent rolls (for rental properties), and proof of insurance. Our loan officers will provide a complete checklist.",
    },
    {
      question: "Do you offer interest-only payments?",
      answer:
        "Yes, most of our loan products offer interest-only payment options, particularly beneficial for fix-and-flip and bridge loans. This helps improve cash flow during the investment period.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 font-light">
            Find answers to common questions about our lending process and requirements
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-sky-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <p className="text-gray-600 font-light mb-6">Don't see your question answered here?</p>
          <Link href="/contact">
            <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 rounded-md transition-colors">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
