"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Home, DollarSign, Clock, FileText } from "lucide-react"
import { useEffect } from "react"

export default function ApplicationPage() {
  
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = 'https://embed.typeform.com/next/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Apply for a Loan</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to get started? Complete our application form and we'll get back to you within 24 hours with a personalized quote.
          </p>
        </div>

        {/* Typeform Application Form */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <div 
              data-tf-live="01K1BX3QEFS7RAQYWRJR1KJV9X"
              data-tf-source="localhost"
              data-tf-medium="embed-sdk"
              data-tf-medium-version="next"
              className="w-full min-h-[600px] rounded-lg overflow-hidden"
              style={{ height: 'auto' }}
            ></div>
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