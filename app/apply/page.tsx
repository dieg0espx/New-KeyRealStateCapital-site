"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, User, Home, DollarSign, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const applicationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  propertyAddress: z.string().min(1, "Property address is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  purchasePrice: z.string().min(1, "Purchase price is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  loanPurpose: z.string().min(1, "Please select a loan purpose"),
  annualIncome: z.string().min(1, "Annual income is required"),
  creditScore: z.string().min(1, "Credit score is required"),
  additionalInfo: z.string().optional(),
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Apply for a Loan</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to get started? Complete our application form and we'll get back to you within 24 hours with a personalized quote.
          </p>
        </div>

        {/* Application Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
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
                  <User className="h-5 w-5 mr-2 text-light-green" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name *
                    </Label>
                    <Input
                      {...register("firstName")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
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
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
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
                      type="email"
                      {...register("email")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="your@email.com"
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
                      type="tel"
                      {...register("phone")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
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

              {/* Property Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-light-green" />
                  Property Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="propertyAddress" className="text-gray-700 font-medium">
                      Property Address *
                    </Label>
                    <Input
                      {...register("propertyAddress")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.propertyAddress ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="123 Main St, City, State 12345"
                    />
                    {errors.propertyAddress && (
                      <p className="text-red-600 text-sm mt-1">{errors.propertyAddress.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="propertyType" className="text-gray-700 font-medium">
                      Property Type *
                    </Label>
                    <select
                      {...register("propertyType")}
                      className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green focus:border-light-green ${
                        errors.propertyType ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <option value="">Select property type</option>
                      <option value="Single-family">Single-family</option>
                      <option value="2-4 unit">2-4 unit</option>
                      <option value="5-8 unit">5-8 unit</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    {errors.propertyType && (
                      <p className="text-red-600 text-sm mt-1">{errors.propertyType.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="purchasePrice" className="text-gray-700 font-medium">
                      Purchase Price *
                    </Label>
                    <Input
                      type="number"
                      {...register("purchasePrice")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.purchasePrice ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="500000"
                    />
                    {errors.purchasePrice && (
                      <p className="text-red-600 text-sm mt-1">{errors.purchasePrice.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                      Requested Loan Amount *
                    </Label>
                    <Input
                      type="number"
                      {...register("loanAmount")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.loanAmount ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="400000"
                    />
                    {errors.loanAmount && (
                      <p className="text-red-600 text-sm mt-1">{errors.loanAmount.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="loanPurpose" className="text-gray-700 font-medium">
                      Loan Purpose *
                    </Label>
                    <select
                      {...register("loanPurpose")}
                      className={`mt-2 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green focus:border-light-green ${
                        errors.loanPurpose ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <option value="">Select loan purpose</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Refinance">Refinance</option>
                      <option value="Cash-out Refinance">Cash-out Refinance</option>
                    </select>
                    {errors.loanPurpose && (
                      <p className="text-red-600 text-sm mt-1">{errors.loanPurpose.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-light-green" />
                  Financial Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="annualIncome" className="text-gray-700 font-medium">
                      Annual Income *
                    </Label>
                    <Input
                      type="number"
                      {...register("annualIncome")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.annualIncome ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="100000"
                    />
                    {errors.annualIncome && (
                      <p className="text-red-600 text-sm mt-1">{errors.annualIncome.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="creditScore" className="text-gray-700 font-medium">
                      Credit Score *
                    </Label>
                    <Input
                      type="number"
                      {...register("creditScore")}
                      className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                        errors.creditScore ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="750"
                      min="300"
                      max="850"
                    />
                    {errors.creditScore && (
                      <p className="text-red-600 text-sm mt-1">{errors.creditScore.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-light-green" />
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="additionalInfo" className="text-gray-700 font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    {...register("additionalInfo")}
                    className={`mt-2 border-gray-200 focus:border-light-green focus:ring-light-green ${
                      errors.additionalInfo ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""
                    }`}
                    placeholder="Please provide any additional information about your loan request..."
                    rows={4}
                  />
                  {errors.additionalInfo && (
                    <p className="text-red-600 text-sm mt-1">{errors.additionalInfo.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-light-green hover:bg-perry text-white font-medium px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
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
                <div className="bg-light-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-light-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Review</h4>
                <p className="text-gray-600 text-sm">
                  Our team reviews your application and property details within 24 hours.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-light-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-light-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Property Analysis</h4>
                <p className="text-gray-600 text-sm">
                  We analyze your property and provide a detailed loan proposal.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-light-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-light-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Funding</h4>
                <p className="text-gray-600 text-sm">
                  Once approved, we can close in as little as 7-14 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-light-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-light-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 mb-2">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <div className="bg-light-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-light-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 mb-2">info@keyrealstatecapital.com</p>
                <p className="text-sm text-gray-500">We respond within 2 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}