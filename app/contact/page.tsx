"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Phone, Mail, MapPin, Clock, Calendar, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import CalendlyModal from "@/components/calendly-modal"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  loanType: z.string().min(1, "Please select a loan type"),
  loanAmount: z.string().min(1, "Please select a loan amount"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const { isOpen, openModal, closeModal } = useCalendlyModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.')
        reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to discuss your real estate financing needs? Our team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-gray-900">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800 font-medium">{submitMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-red-800 font-medium">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Smith"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                      errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                      errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="(619) 567-1385"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="loanType" className="text-gray-700 font-medium">
                    Loan Type of Interest
                  </Label>
                  <select
                    id="loanType"
                    {...register('loanType')}
                    className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                      errors.loanType ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  >
                    <option value="">Select loan type</option>
                    <option value="Fix-and-Flip">Fix-and-Flip</option>
                    <option value="Single Property Rental">Single Property Rental</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Rental Portfolio">Rental Portfolio</option>
                    <option value="Stabilized Bridge">Stabilized Bridge</option>
                    <option value="Multi-Family / Commercial">Multi-Family / Commercial</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.loanType && (
                    <p className="mt-1 text-sm text-red-600">{errors.loanType.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                    Estimated Loan Amount
                  </Label>
                  <select
                    id="loanAmount"
                    {...register('loanAmount')}
                    className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                      errors.loanAmount ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  >
                    <option value="">Select amount range</option>
                    <option value="$100K - $250K">$100K - $250K</option>
                    <option value="$250K - $500K">$250K - $500K</option>
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M - $2M">$1M - $2M</option>
                    <option value="$2M+">$2M+</option>
                  </select>
                  {errors.loanAmount && (
                    <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-gray-700 font-medium">
                    Timeline
                  </Label>
                  <select
                    id="timeline"
                    {...register('timeline')}
                    className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                      errors.timeline ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  >
                    <option value="">When do you need funding?</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 30 days">Within 30 days</option>
                    <option value="Within 60 days">Within 60 days</option>
                    <option value="Within 90 days">Within 90 days</option>
                    <option value="Just exploring options">Just exploring options</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 min-h-[120px] ${
                      errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="Tell us about your project and financing needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Location</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">San Diego Headquarters</h4>
                      <p className="text-gray-600 font-light mt-1">
                        401 W A St Ste 200
                        <br />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">(619) 567-1385</div>
                      <div className="text-gray-600 font-light text-sm">Main line</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">loans@keyrealestatecapital.com</div>
                      <div className="text-gray-600 font-light text-sm">General inquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">24/7 Service | Monday - Sunday</div>
                      <div className="text-gray-600 font-light text-sm">Always available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-sky-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 font-light mb-6">
                  Schedule a call with one of our loan specialists to discuss your project in detail.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={openModal}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Link href="tel:(619) 567-1385">
                    <Button
                      variant="outline"
                      className="w-full border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent"
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
