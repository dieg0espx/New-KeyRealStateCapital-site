import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building } from "lucide-react"
import Link from "next/link"

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Multi-Family & Commercial Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Comprehensive financing solutions for larger multi-family properties, office buildings, retail centers, and
            mixed-use developments. Designed for experienced investors and developers seeking institutional-quality
            financing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$1M - $20M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">5-30 Years</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">80% LTV</div>
              <div className="text-gray-600 font-light">Max Financing</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                  {[
                    "Up to $20M loan amounts",
                    "Competitive institutional rates",
                    "Flexible amortization terms",
                    "Interest-only options available",
                    "Experienced underwriting team",
                    "Recourse and non-recourse options",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Minimum $1M loan amount",
                    "Strong sponsor experience",
                    "Stabilized cash flow preferred",
                    "Comprehensive financial analysis",
                    "Professional property management",
                    "Market-rate debt service coverage",
                  ].map((requirement, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 border-0 shadow-lg bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Property Types We Finance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Multi-Family</h4>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Apartment complexes (5+ units)</li>
                  <li>• Student housing</li>
                  <li>• Senior living facilities</li>
                  <li>• Affordable housing projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Commercial</h4>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Office buildings</li>
                  <li>• Retail centers</li>
                  <li>• Industrial properties</li>
                  <li>• Mixed-use developments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Commercial Loan
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
