import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">Stay Informed</h3>
            <p className="text-gray-400 font-light mb-6 max-w-2xl mx-auto">
              Get the latest market insights, investment strategies, and financing updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent rounded-md"
                required
              />
              <Button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-6 py-3 h-[52px] rounded-md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-light mb-6">Key Real Estate Capital</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6 max-w-md">
                Sophisticated financing solutions for real estate investors nationwide. We empower your success with
                flexible lending options and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/investwithkey/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.skool.com/investwithkey/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
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
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-sky-600 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">(619) 567-1385</div>
                    <div className="text-gray-400 text-sm">24/7 Service | Monday - Sunday</div>
                  </div>
                </Link>
                <Link href="mailto:loans@keyrealestatecapital.com" className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-sky-600 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">loans@keyrealestatecapital.com</div>
                    <div className="text-gray-400 text-sm">24/7 support</div>
                  </div>
                </Link>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-sky-600 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">401 W A St Ste 200</div>
                    <div className="text-gray-300 font-light">San Diego, CA 92101</div>
                    <div className="text-gray-400 text-sm">Corporate Headquarters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/loan-products"
                  className="block text-gray-400 hover:text-white transition-colors font-light"
                >
                  Loan Products
                </Link>
                <Link href="/team" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Our Team
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors font-light">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Blog
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Contact Us
                </Link>
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors font-light">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-light text-sm mb-4 md:mb-0">
              &copy; 2024 Key Real Estate Capital. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400 font-light">NMLS ID #2676974</span>
              <span className="text-gray-400 font-light">Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Disclaimer: The fictitious name "Key Real Estate Capital" is registered under Keyswag Capital Inc. and is used in all states where Keyswag Capital Inc. is licensed, except California.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
