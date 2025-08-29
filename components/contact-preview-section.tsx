"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Schedule Consultation */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-light-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                                 <h3 className="text-xl font-medium text-gray-900 mb-4">Schedule a Call</h3>
                <p className="text-gray-600 font-light mb-4">
                  Book a consultation with our team
                </p>
                <Button 
                  onClick={openModal}
                  className="bg-light-green hover:bg-perry text-white font-light w-full"
                >
                  Schedule Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Information */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Office Info and Buttons */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Visit Our Office</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Key Real Estate Capital</p>
                        <p className="text-gray-600 font-light">401 W A St Ste 200, San Diego, CA 92101</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Service Hours</p>
                        <p className="text-gray-600 font-light">24/7 Service | Monday - Sunday</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">NMLS ID</p>
                        <p className="text-gray-600 font-light">#2676974</p>
                      </div>
                    </div>
                  </div>

                  {/* Ready to discuss section */}
                  <div>
                    <p className="text-gray-600 font-light mb-6">
                      Ready to discuss your financing needs?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

                                                   {/* Right Side - Account Executive Info */}
                  <div className="text-left">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 max-w-sm mx-auto">
                      <div className="flex items-start space-x-4">
                        {/* Placeholder for headshot */}
                        <div className="w-16 h-16 bg-light-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-light-green text-2xl font-semibold">JD</div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1 text-left">John Doe</h4>
                          <p className="text-sm text-gray-600 mb-2 text-left">Account Executive</p>
                          
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center text-gray-600">
                              <span className="font-medium">Phone:</span>
                              <span className="ml-2">(555) 123-4567</span>
                            </div>
                            <div className="flex items-start text-gray-600">
                              <span className="font-medium flex-shrink-0">Email:</span>
                              <span className="ml-2 break-all">john.doe@keyrealstate.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                     {/* QR Code placeholder */}
                     <div className="mt-4 pt-4 border-t border-gray-200">
                       <div className="bg-gray-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto">
                         <div className="text-gray-400 text-xs text-center">
                           QR Code
                         </div>
                       </div>
                       <p className="text-xs text-gray-500 text-center mt-2">Scan for quick contact</p>
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