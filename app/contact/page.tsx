"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"
import { getTypeformAttributes } from "@/lib/typeform-config"

export default function ContactPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = 'https://embed.typeform.com/next/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to discuss your real estate financing needs? Our team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Typeform Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-medium text-gray-900">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                {...getTypeformAttributes({ style: { height: '600px' } })}
                className="w-full h-[600px] rounded-lg overflow-hidden"
              ></div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Office Location</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-light-green mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">San Diego Office</h4>
                      <p className="text-gray-600 mt-1">
                        123 Business District<br />
                        San Diego, CA 92101
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-light-green mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <Link href="tel:(555) 123-4567" className="text-gray-600 hover:text-light-green">
                        (555) 123-4567
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-light-green mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <Link href="mailto:info@keyrealstatecapital.com" className="text-gray-600 hover:text-light-green">
                        info@keyrealstatecapital.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-light-green mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 font-light mb-6">
                  Schedule a call with one of our loan specialists to discuss your project in detail.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={openModal}
                    className="w-full bg-light-green hover:bg-perry text-white font-light"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Free Consultation
                  </Button>
                  <Link href="tel:(619) 649-6933">
                    <Button
                      variant="outline"
                      className="w-full border-light-green text-light-green hover:bg-perry hover:text-perry bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}