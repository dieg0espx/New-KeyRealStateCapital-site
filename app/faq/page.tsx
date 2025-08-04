import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, CheckCircle, Building, Home, Calculator } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Lending",
      icon: <Building className="h-6 w-6" />,
      faqs: [
        {
          question: "What types of properties do you finance?",
          answer:
            "We finance a wide range of investment properties including single-family homes, multi-family properties (up to 4 units), commercial buildings, mixed-use developments, and land for construction. Our focus is on income-producing properties and fix-and-flip projects across residential and light commercial sectors.",
        },
        {
          question: "What states do you lend in?",
          answer:
            "We currently lend in 15 states across the US, with primary focus on California, Florida, Texas, Arizona, Nevada, and Georgia. Our coverage includes major metropolitan areas and growing markets. Contact us to confirm if we lend in your target market.",
        },
        {
          question: "What are your minimum credit score requirements?",
          answer:
            "Generally, we require a minimum credit score of 680 for most loan products. However, we evaluate each application holistically, considering factors like real estate experience, down payment amount, property cash flow, and overall financial strength. We may consider lower scores for experienced investors with strong compensating factors.",
        },
        {
          question: "Do you require personal guarantees?",
          answer:
            "Personal guarantees are typically required for most loan products to ensure alignment of interests. However, the specific terms depend on the loan amount, borrower experience, property type, and overall transaction structure. We can discuss alternatives during the application process.",
        },
      ],
    },
    {
      title: "Loan Products",
      icon: <Home className="h-6 w-6" />,
      faqs: [
        {
          question: "What is the difference between fix-and-flip and rental property loans?",
          answer:
            "Fix-and-flip loans are short-term (6-18 months) designed for purchasing, renovating, and quickly selling properties. They typically have higher interest rates but faster approval. Rental property loans are longer-term (5-30 years) for properties you plan to hold and rent out, with lower rates and longer terms.",
        },
        {
          question: "Do you offer construction loans?",
          answer:
            "Yes, we offer construction loans for ground-up development projects. These loans typically have a 12-18 month term and are structured with interest-only payments during construction, converting to permanent financing upon completion. We require detailed construction budgets and timelines.",
        },
        {
          question: "Can you finance properties held in an LLC?",
          answer:
            "Yes, we regularly finance properties held in LLCs and other business entities. We'll need to review the entity structure, operating agreements, and may require personal guarantees from the principals. This is common for real estate investors and we have streamlined processes for entity-based lending.",
        },
        {
          question: "What are your maximum loan amounts?",
          answer:
            "Our maximum loan amounts vary by product: Fix-and-flip loans up to $2M, rental property loans up to $1.5M, construction loans up to $3M, and commercial loans up to $5M. Larger amounts may be available for experienced investors with strong track records.",
        },
      ],
    },
    {
      title: "Application & Process",
      icon: <CheckCircle className="h-6 w-6" />,
      faqs: [
        {
          question: "How quickly can you close a loan?",
          answer:
            "Our typical closing timeline is 7-14 days for most loan products. For complex transactions or new construction projects, the timeline may extend to 21-30 days. We pride ourselves on fast, efficient closings and can expedite for qualified borrowers.",
        },
        {
          question: "What documentation do you require?",
          answer:
            "Standard documentation includes: Personal tax returns (2 years), business tax returns if applicable, bank statements (3 months), property appraisal, renovation budgets (for fix-and-flip), rent rolls (for rental properties), proof of insurance, and entity documents if applicable. Our loan officers will provide a complete checklist tailored to your specific loan type.",
        },
        {
          question: "Do you require appraisals?",
          answer:
            "Yes, we require professional appraisals for all properties. For fix-and-flip loans, we require both 'as-is' and 'after-repair' value appraisals. For rental properties, we typically require a standard appraisal. We work with approved appraisers to ensure accurate valuations.",
        },
        {
          question: "What are your down payment requirements?",
          answer:
            "Down payment requirements vary by loan type: Fix-and-flip loans typically require 20-25% down, rental property loans require 25-30% down, and construction loans require 30-35% down. Lower down payments may be available for experienced investors with strong track records.",
        },
      ],
    },
    {
      title: "Terms & Payments",
      icon: <Calculator className="h-6 w-6" />,
      faqs: [
        {
          question: "Do you offer interest-only payments?",
          answer:
            "Yes, most of our loan products offer interest-only payment options, particularly beneficial for fix-and-flip and bridge loans. This helps improve cash flow during the investment period. For rental property loans, we offer both interest-only and fully amortizing payment options.",
        },
        {
          question: "What are your interest rates?",
          answer:
            "Interest rates vary by loan type and borrower qualifications: Fix-and-flip loans typically range from 8.5-12%, rental property loans from 6.5-9%, and construction loans from 9-12%. Rates are based on loan amount, borrower experience, property type, and market conditions.",
        },
        {
          question: "Are there prepayment penalties?",
          answer:
            "Our loans typically have no prepayment penalties, allowing you to pay off the loan early without additional costs. This is especially beneficial for fix-and-flip investors who may sell properties quickly. Some construction loans may have minimal prepayment penalties during the first 6 months.",
        },
        {
          question: "How do you handle loan servicing?",
          answer:
            "We service our own loans, providing direct communication and flexible payment options. You can make payments online, by phone, or by mail. We offer automatic payment options and can accommodate special payment arrangements when needed.",
        },
      ],
    },
  ]

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      description: "Speak with a loan officer",
      action: "Call Now",
      href: "tel:+1-800-555-0123",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      description: "Send us your questions",
      action: "Send Email",
      href: "mailto:info@keyrealestatecapital.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Apply",
      description: "Start your application",
      action: "Apply Now",
      href: "/apply",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50/30 pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Find answers to common questions about our lending process, requirements, and loan products. 
            Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-sky-600">{category.icon}</div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-gray-200 rounded-lg px-6 shadow-sm bg-white hover:shadow-md transition-shadow"
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
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Our experienced loan officers are here to help. Contact us for personalized assistance with your specific situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="text-sky-600 mb-4 flex justify-center">{contact.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 font-light mb-6">{contact.description}</p>
                  <Link href={contact.href}>
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light">
                      {contact.action}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "7-14", label: "Days to Close" },
              { number: "15", label: "States Covered" },
              { number: "680+", label: "Min Credit Score" },
              { number: "500+", label: "Loans Funded" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-light text-sky-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
