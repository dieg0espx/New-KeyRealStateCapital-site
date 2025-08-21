"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, ExternalLink, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setSubmitStatus("error")
      setSubmitMessage("Please enter your email address")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! You've been subscribed to our newsletter.")
        setEmail("")
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setSubmitMessage(errorData.message || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-light-green/20 bg-perry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">Stay Informed</h3>
            <p className="text-white font-light mb-6 max-w-2xl mx-auto">
              Get the latest market insights, investment strategies, and financing updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="w-full bg-green-50 border border-green-200 rounded-lg p-4 flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-green-800 text-sm">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="w-full bg-red-50 border border-red-200 rounded-lg p-4 flex items-center mb-4">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-red-800 text-sm">{submitMessage}</p>
                </div>
              )}
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-gray-700 placeholder-gray focus:outline-none focus:ring-2 focus:ring-light-green focus:border-transparent"
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="bg-light-green hover:bg-white text-white hover:text-perry font-light px-6 py-3 h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo-transparent.png"
                  alt="Key Real Estate Capital"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white font-light leading-relaxed mb-2 max-w-md">
                Unlock Freedom
              </p>
              <p className="text-white font-light leading-relaxed mb-6 max-w-md">
                Sophisticated financing solutions for real estate investors nationwide. We empower your success with
                flexible lending options and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/investwithkey/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.skool.com/investwithkey/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <Link href="tel:(619) 567-1385" className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-light-green flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">(619) 567-1385</div>
                    <div className="text-white text-sm">24/7 Service | Monday - Sunday</div>
                  </div>
                </Link>
                <Link href="mailto:loans@keyrealestatecapital.com" className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-light-green flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-300 font-light break-words">loans@keyrealestatecapital.com</div>
                    <div className="text-white text-sm">24/7 support</div>
                  </div>
                </Link>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-light-green flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">401 W A St Ste 200</div>
                    <div className="text-gray-300 font-light">San Diego, CA 92101</div>
                    <div className="text-white text-sm">Corporate Headquarters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Home
                </Link>
                <Link
                  href="/loan-products"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Loan Types
                </Link>
                <Link href="/team" className="block text-white hover:text-white transition-colors font-light">
                  About Us
                </Link>
                <Link href="/blog" className="block text-white hover:text-white transition-colors font-light">
                  Blog
                </Link>
                <Link href="/faq" className="block text-white hover:text-white transition-colors font-light">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-white hover:text-white transition-colors font-light">
                  Contact
                </Link>
                <Link href="/privacy" className="block text-white hover:text-white transition-colors font-light">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-white hover:text-white transition-colors font-light">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Loan Types & Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Loan Types & Programs</h4>
              <div className="space-y-3">
                <Link
                  href="/loan-products/fix-and-flip"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Fix and Flip
                </Link>
                <Link
                  href="/loan-products/single-rental"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  DSCR Rental
                </Link>
                <Link
                  href="/loan-products/fix-and-flip"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Bridge
                </Link>
                <Link
                  href="/loan-products/new-construction"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  New Construction
                </Link>
                <Link
                  href="/loan-products/rental-portfolio"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Rental Portfolio
                </Link>
                <Link
                  href="/loan-products/stabilized-bridge"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  Conventional / Primary
                </Link>
                <Link
                  href="/loan-products/commercial"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  0% Business Funding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-light text-sm mb-4 md:mb-0">
              &copy; 2024 Key Real Estate Capital. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-white font-light">NMLS ID #2676974</span>
              <span className="text-white font-light">Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-800 py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white font-light text-sm leading-relaxed">
              Disclaimer: The fictitious name "Key Real Estate Capital" is registered under Keyswag Capital Inc. and is used in all states where Keyswag Capital Inc. is licensed, except California.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
