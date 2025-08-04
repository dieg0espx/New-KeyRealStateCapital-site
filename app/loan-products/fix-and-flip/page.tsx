import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FixAndFlipPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Fix-and-Flip Loans</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Short-term financing solutions designed specifically for property renovation and resale projects. Get the
            capital you need to acquire, renovate, and sell properties quickly and profitably.
          </p>
        </div>

        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Features</h3>
                <ul className="space-y-3">
                  {[
                    "Loan amounts up to $2M",
                    "Terms from 6-18 months",
                    "Interest-only payments",
                    "No prepayment penalties",
                    "Fast 7-14 day closings",
                    "Up to 90% ARV financing",
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
                    "Proof of renovation experience",
                    "Detailed renovation budget",
                    "Exit strategy documentation",
                    "Property appraisal required",
                    "Title insurance and survey",
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

        <div className="text-center">
          <Link href="/apply">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg">
              Apply for Fix-and-Flip Loan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
