import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function SingleRentalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Single Property Rental Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Secure financing for individual rental property acquisitions with competitive rates and flexible terms.
            Perfect for investors looking to build their rental portfolio one property at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$75K - $1.5M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">30 Years</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">7.25%</div>
              <div className="text-gray-600 font-light">Starting Rate</div>
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
                    "Up to 80% LTV financing",
                    "30-year amortization available",
                    "Competitive interest rates",
                    "Cash-out refinancing options",
                    "No prepayment penalties",
                    "DSCR-based underwriting",
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
                    "Minimum 680 credit score",
                    "1.2x debt service coverage ratio",
                    "Property appraisal required",
                    "Rent roll documentation",
                    "Property management experience",
                    "Adequate cash reserves",
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Single Property Rental Loans?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Build Wealth Gradually</h4>
                <p className="text-gray-600 font-light">
                  Start small and scale your rental portfolio over time with manageable financing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Predictable Cash Flow</h4>
                <p className="text-gray-600 font-light">
                  Generate steady monthly income from quality rental properties in strong markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tax Benefits</h4>
                <p className="text-gray-600 font-light">
                  Take advantage of depreciation, interest deductions, and other tax advantages.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Long-term Appreciation</h4>
                <p className="text-gray-600 font-light">
                  Benefit from property appreciation while tenants pay down your mortgage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Single Rental Loan
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
