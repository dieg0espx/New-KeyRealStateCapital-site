import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, DollarSign, Calendar, Building } from "lucide-react"
import Link from "next/link"

export default function RentalPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/loan-products" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Loan Products
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Rental Portfolio Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Scale your rental property investments with portfolio financing solutions. Perfect for experienced investors
            looking to acquire multiple properties or refinance existing portfolios for better terms and cash flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-sky-50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-2xl font-semibold text-gray-900 mb-1">$500K - $10M</div>
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
              <div className="text-2xl font-semibold text-gray-900 mb-1">4+ Properties</div>
              <div className="text-gray-600 font-light">Minimum Portfolio</div>
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
                    "Cross-collateralized financing",
                    "Blanket loan options available",
                    "Portfolio cash-out refinancing",
                    "Streamlined underwriting process",
                    "Competitive portfolio rates",
                    "Flexible amortization schedules",
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
                    "Minimum 4 rental properties",
                    "700+ credit score preferred",
                    "Strong portfolio performance",
                    "Experienced property management",
                    "Adequate cash reserves",
                    "Comprehensive rent rolls",
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio Financing Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplified Management</h4>
                <p className="text-gray-600 font-light">
                  Consolidate multiple property loans into a single portfolio loan for easier management and reporting.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Better Terms</h4>
                <p className="text-gray-600 font-light">
                  Leverage your entire portfolio to secure better rates and terms than individual property loans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cash-Out Options</h4>
                <p className="text-gray-600 font-light">
                  Access equity from your portfolio to fund new acquisitions or property improvements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
                <p className="text-gray-600 font-light">
                  Easily add new properties to your existing portfolio loan structure as you grow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg mr-4">
              Apply for Portfolio Loan
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
