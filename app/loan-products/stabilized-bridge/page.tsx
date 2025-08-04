import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function StabilizedBridgePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Stabilized Bridge Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Bridge financing for stabilized income-producing properties. Ideal for investors who need quick access to
            capital while arranging permanent financing or preparing for a strategic exit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$250K - $3M</div>
              <div className="text-gray-600 font-light">Loan Amount</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">12-36 Months</div>
              <div className="text-gray-600 font-light">Loan Term</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">8.0%</div>
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
                    "Interest-only payments",
                    "Quick 10-14 day closings",
                    "Up to 75% LTV financing",
                    "No prepayment penalties",
                    "Flexible exit strategies",
                    "Experienced underwriting",
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
                    "Stabilized income property",
                    "Minimum 680 credit score",
                    "Strong debt service coverage",
                    "Clear exit strategy",
                    "Property appraisal required",
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Use Cases</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Acquisition Bridge</h4>
                  <p className="text-gray-600 font-light">
                    Quickly acquire income-producing properties while arranging long-term financing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cash-Out Refinancing</h4>
                  <p className="text-gray-600 font-light">
                    Access equity from stabilized properties for new investments or improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pre-Sale Financing</h4>
                  <p className="text-gray-600 font-light">
                    Bridge financing while preparing a property for sale or 1031 exchange.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Bridge Loan
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
