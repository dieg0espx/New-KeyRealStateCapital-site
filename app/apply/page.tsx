"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, FileText, DollarSign, Home, User, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

// Form validation schema
const applicationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  loanType: z.string().min(1, "Loan type is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  timeline: z.string().min(1, "Timeline is required"),
  experience: z.string().optional(),
  propertyAddress: z.string().optional(),
  propertyValue: z.string().optional(),
  purchasePrice: z.string().optional(),
  downPayment: z.string().optional(),
  additionalInfo: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
  creditCheck: z.boolean().refine((val) => val === true, "You must authorize credit check"),
})

type ApplicationFormData = z.infer<typeof applicationFormSchema>

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Application submitted successfully! We'll contact you within 24 hours.")
        reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setSubmitMessage(errorData.message || "Failed to submit application. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Loan Application</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Start your loan application process. Our team will review your information and contact you within 24 hours.
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-sky-600 text-white">
            <CardTitle className="text-2xl font-light flex items-center">
              <FileText className="h-6 w-6 mr-3" />
              Loan Application Form
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-red-800">{submitMessage}</p>
                </div>
              )}
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-sky-600" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name *
                    </Label>
                    <Input
                      {...register("firstName")}
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.firstName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name *
                    </Label>
                    <Input
                      {...register("lastName")}
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.lastName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      {...register("email")}
                      type="email"
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      {...register("phone")}
                      type="tel"
                      className={`mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 ${
                        errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Loan Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-sky-600" />
                  Loan Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="loanType" className="text-gray-700 font-medium">
                      Loan Type *
                    </Label>
                    <select
                      {...register("loanType")}
                      className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                        errors.loanType ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <option value="">Select loan type</option>
                      <option value="fix-flip">Fix-and-Flip</option>
                      <option value="rental">Single Property Rental</option>
                      <option value="construction">New Construction</option>
                      <option value="portfolio">Rental Portfolio</option>
                      <option value="bridge">Stabilized Bridge</option>
                      <option value="commercial">Multi-Family / Commercial</option>
                    </select>
                    {errors.loanType && (
                      <p className="text-red-600 text-sm mt-1">{errors.loanType.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                      Requested Loan Amount *
                    </Label>
                    <select
                      {...register("loanAmount")}
                      className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                        errors.loanAmount ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <option value="">Select amount range</option>
                      <option value="100k">$100K - $250K</option>
                      <option value="250k">$250K - $500K</option>
                      <option value="500k">$500K - $1M</option>
                      <option value="1m">$1M - $2M</option>
                      <option value="2m">$2M - $5M</option>
                      <option value="5m">$5M+</option>
                    </select>
                    {errors.loanAmount && (
                      <p className="text-red-600 text-sm mt-1">{errors.loanAmount.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-gray-700 font-medium">
                      Funding Timeline *
                    </Label>
                    <select
                      {...register("timeline")}
                      className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 ${
                        errors.timeline ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <option value="">When do you need funding?</option>
                      <option value="asap">ASAP</option>
                      <option value="30days">Within 30 days</option>
                      <option value="60days">Within 60 days</option>
                      <option value="90days">Within 90 days</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                    {errors.timeline && (
                      <p className="text-red-600 text-sm mt-1">{errors.timeline.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-gray-700 font-medium">
                      Real Estate Experience
                    </Label>
                    <select
                      {...register("experience")}
                      className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                    >
                      <option value="">Select experience level</option>
                      <option value="first-time">First-time investor</option>
                      <option value="1-3">1-3 properties</option>
                      <option value="4-10">4-10 properties</option>
                      <option value="10plus">10+ properties</option>
                      <option value="professional">Professional developer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-sky-600" />
                  Property Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="propertyAddress" className="text-gray-700 font-medium">
                      Property Address
                    </Label>
                    <Input
                      {...register("propertyAddress")}
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyValue" className="text-gray-700 font-medium">
                      Estimated Property Value
                    </Label>
                    <Input
                      {...register("propertyValue")}
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="$500,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="purchasePrice" className="text-gray-700 font-medium">
                      Purchase Price
                    </Label>
                    <Input
                      {...register("purchasePrice")}
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="$400,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="downPayment" className="text-gray-700 font-medium">
                      Down Payment Amount
                    </Label>
                    <Input
                      {...register("downPayment")}
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="$100,000"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo" className="text-gray-700 font-medium">
                  Additional Information
                </Label>
                <Textarea
                  {...register("additionalInfo")}
                  className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 min-h-[120px]"
                  placeholder="Tell us more about your project, timeline, or any specific requirements..."
                />
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="mt-1 h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="consent" className="text-sm text-gray-600 font-light leading-relaxed">
                    I consent to Key Real Estate Capital contacting me about my loan application via phone, email, or
                    text message. I understand this is not a commitment to lend.
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-red-600 text-sm">{errors.consent.message}</p>
                )}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register("creditCheck")}
                    className="mt-1 h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="creditCheck" className="text-sm text-gray-600 font-light leading-relaxed">
                    I authorize Key Real Estate Capital to obtain my credit report and verify information provided in
                    this application.
                  </Label>
                </div>
                {errors.creditCheck && (
                  <p className="text-red-600 text-sm">{errors.creditCheck.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-light px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Your information is secure and will only be used for loan processing purposes.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <Card className="mt-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Application Review</h4>
                <p className="text-gray-600 font-light text-sm">Our team reviews your application within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Initial Consultation</h4>
                <p className="text-gray-600 font-light text-sm">We schedule a call to discuss your project in detail</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibred mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pre-Approval</h4>
                <p className="text-gray-600 font-light text-sm">Receive your pre-approval letter and loan terms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
