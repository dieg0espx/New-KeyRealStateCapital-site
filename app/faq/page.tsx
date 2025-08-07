import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, CheckCircle, Building, Home, Calculator } from "lucide-react"
import { faqCategories } from "@/data/faq-data"

export default function FAQPage() {

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      description: "Speak with a loan officer",
      action: "Call Now",
      href: "tel:(619) 567-1385",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      description: "Send us your questions",
      action: "Send Email",
      href: "mailto:loans@keyrealestatecapital.com",
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
                <div className="text-sky-600">
                  {category.icon === "Building" && <Building className="h-6 w-6" />}
                  {category.icon === "Home" && <Home className="h-6 w-6" />}
                  {category.icon === "CheckCircle" && <CheckCircle className="h-6 w-6" />}
                  {category.icon === "Calculator" && <Calculator className="h-6 w-6" />}
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-gray-200 px-6  bg-white transition-shadow"
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
