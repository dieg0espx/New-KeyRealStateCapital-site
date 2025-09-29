"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"

export function ContactPreviewSection() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Our team is here to help you find the perfect financing solution for your real estate investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-light-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                                 <h3 className="text-xl font-medium text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 font-light mb-4">
                  Speak directly with our loan specialists
                </p>
                <Link href="tel:(619) 649-6933">
                                      <Button className="bg-light-green hover:bg-perry text-white font-light w-full">
                      (619) 649-6933
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-light-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                                 <h3 className="text-xl font-medium text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 font-light mb-4">
                  Send us your questions or loan requirements
                </p>
                <Link href="mailto:loans@keyrealestatecapital.com">
                  <Button className="bg-light-green hover:bg-perry text-white font-light w-full">
                    Send Email
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Office Information */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto">
                {/* Centered Office Info */}
                <div className="text-center">
                  <h3 className="text-3xl font-medium text-gray-900 mb-8">Visit Our Office</h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center">
                      <div className="bg-light-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-gray-900 mb-1">Key Real Estate Capital</p>
                        <p className="text-gray-600 font-light text-sm">401 W A St Ste 200, San Diego, CA 92101</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-light-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-gray-900 mb-1">Service Hours</p>
                        <p className="text-gray-600 font-light text-sm">24/7 Service | Monday - Sunday</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-light-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-gray-900 mb-1">NMLS ID</p>
                        <p className="text-gray-600 font-light text-sm">#2676974</p>
                      </div>
                    </div>
                  </div>

                  {/* Ready to discuss section */}
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <p className="text-gray-600 font-light mb-6 text-lg">
                      Ready to discuss your financing needs?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/apply">
                        <Button className="bg-light-green hover:bg-perry text-white font-light px-8 py-3">
                          Free Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light px-8 py-3">
                          Contact Form
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  )
} 