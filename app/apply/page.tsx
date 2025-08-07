import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, FileText, DollarSign, Home, User } from "lucide-react"
import Link from "next/link"

export default function ApplicationPage() {
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
            <form className="space-y-8">
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
                      id="firstName"
                      required
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      required
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="(619) 567-1385"
                    />
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
                    <Select required>
                      <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fix-flip">Fix-and-Flip</SelectItem>
                        <SelectItem value="rental">Single Property Rental</SelectItem>
                        <SelectItem value="construction">New Construction</SelectItem>
                        <SelectItem value="portfolio">Rental Portfolio</SelectItem>
                        <SelectItem value="bridge">Stabilized Bridge</SelectItem>
                        <SelectItem value="commercial">Multi-Family / Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                      Requested Loan Amount *
                    </Label>
                    <Select required>
                      <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600">
                        <SelectValue placeholder="Select amount range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100k">$100K - $250K</SelectItem>
                        <SelectItem value="250k">$250K - $500K</SelectItem>
                        <SelectItem value="500k">$500K - $1M</SelectItem>
                        <SelectItem value="1m">$1M - $2M</SelectItem>
                        <SelectItem value="2m">$2M - $5M</SelectItem>
                        <SelectItem value="5m">$5M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-gray-700 font-medium">
                      Funding Timeline *
                    </Label>
                    <Select required>
                      <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600">
                        <SelectValue placeholder="When do you need funding?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="30days">Within 30 days</SelectItem>
                        <SelectItem value="60days">Within 60 days</SelectItem>
                        <SelectItem value="90days">Within 90 days</SelectItem>
                        <SelectItem value="exploring">Just exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-gray-700 font-medium">
                      Real Estate Experience
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First-time investor</SelectItem>
                        <SelectItem value="1-3">1-3 properties</SelectItem>
                        <SelectItem value="4-10">4-10 properties</SelectItem>
                        <SelectItem value="10plus">10+ properties</SelectItem>
                        <SelectItem value="professional">Professional developer</SelectItem>
                      </SelectContent>
                    </Select>
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
                      id="propertyAddress"
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyValue" className="text-gray-700 font-medium">
                      Estimated Property Value
                    </Label>
                    <Input
                      id="propertyValue"
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="$500,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="purchasePrice" className="text-gray-700 font-medium">
                      Purchase Price
                    </Label>
                    <Input
                      id="purchasePrice"
                      className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                      placeholder="$400,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="downPayment" className="text-gray-700 font-medium">
                      Down Payment Amount
                    </Label>
                    <Input
                      id="downPayment"
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
                  id="additionalInfo"
                  className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 min-h-[120px]"
                  placeholder="Tell us more about your project, timeline, or any specific requirements..."
                />
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent" className="mt-1" />
                  <Label htmlFor="consent" className="text-sm text-gray-600 font-light leading-relaxed">
                    I consent to Key Real Estate Capital contacting me about my loan application via phone, email, or
                    text message. I understand this is not a commitment to lend.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="creditCheck" className="mt-1" />
                  <Label htmlFor="creditCheck" className="text-sm text-gray-600 font-light leading-relaxed">
                    I authorize Key Real Estate Capital to obtain my credit report and verify information provided in
                    this application.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-light px-12 py-4 text-lg"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
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
