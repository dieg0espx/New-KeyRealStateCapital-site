"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, ExternalLink, Linkedin, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Extend Window interface to include Typeform
declare global {
  interface Window {
    tf: any
  }
}

export function Footer() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)
  const [modalKey, setModalKey] = useState(0)

  useEffect(() => {
    // Load Typeform embed script only once
    const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
    if (!existingScript) {
      console.log('Loading Typeform script...')
      const script = document.createElement('script')
      script.src = 'https://embed.typeform.com/next/embed.js'
      script.async = true
      script.onload = () => {
        console.log('Typeform script loaded successfully')
        console.log('window.tf available:', !!window.tf)
        if (window.tf) {
          console.log('window.tf methods:', Object.keys(window.tf))
        }
      }
      script.onerror = () => {
        console.error('Failed to load Typeform script')
      }
      document.head.appendChild(script)
    } else {
      console.log('Typeform script already loaded')
    }
  }, [])

  // Handle Typeform initialization when modal opens
  useEffect(() => {
    if (isNewsletterModalOpen) {
      console.log('Modal opened, modalKey:', modalKey)
      
      // Inject the Typeform script when modal opens
      const script = document.createElement('script')
      script.src = 'https://embed.typeform.com/next/embed.js'
      script.async = true
      script.onload = () => {
        console.log('Typeform script loaded in modal')
      }
      document.head.appendChild(script)
      
      // Wait for the DOM to be ready, then trigger Typeform initialization
      const timer = setTimeout(() => {
        console.log('Attempting to initialize Typeform embed...')
        
        // Check if Typeform div exists
        const typeformDiv = document.querySelector('[data-tf-live="01K1BX3QEFS7RAQYWRJR1KJV9X"]')
        console.log('Typeform div found:', !!typeformDiv)
        
        // Force the Typeform to initialize by removing and re-adding the data attribute
        if (typeformDiv) {
          const formId = typeformDiv.getAttribute('data-tf-live')
          typeformDiv.removeAttribute('data-tf-live')
          
          // Re-add the attribute to trigger initialization
          setTimeout(() => {
            if (typeformDiv) {
              typeformDiv.setAttribute('data-tf-live', formId || '')
              console.log('Re-added data-tf-live attribute')
            }
          }, 100)
        }
      }, 300)
      
      return () => {
        clearTimeout(timer)
        // Clean up the script when modal closes
        const scriptToRemove = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove)
        }
      }
    }
  }, [isNewsletterModalOpen, modalKey])

  const openNewsletterModal = () => {
    console.log('Button clicked - opening newsletter modal')
    setModalKey(prev => prev + 1) // Force re-render of Typeform
    setIsNewsletterModalOpen(true)
  }

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false)
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
            <div className="flex justify-center">
              <Button 
                onClick={openNewsletterModal}
                className="bg-light-green hover:bg-white text-white hover:text-perry font-light px-8 py-4 text-lg"
              >
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                   href="https://www.linkedin.com/company/keyswag/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-white hover:text-white transition-colors"
                 >
                   <Linkedin className="h-5 w-5" />
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
                <Link href="tel:(619) 649-6933" className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-light-green flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-light">(619) 649-6933</div>
                    <div className="text-white text-sm">Key Real Estate Capital</div>
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
                    <div className="text-white text-sm">
                      <a 
                        href="https://nmlsconsumeraccess.org/TuringTestPage.aspx?ReturnUrl=/EntityDetails.aspx/COMPANY/2676974" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-light-green transition-colors"
                      >
                        NMLS ID #2676974
                      </a>
                    </div>
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
                  Fix & Flip
                </Link>
                <Link
                  href="/loan-products/single-rental"
                  className="block text-white hover:text-white transition-colors font-light"
                >
                  DSCR Rental
                </Link>
                <Link
                  href="/loan-products/stabilized-bridge"
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
                  href="/loan-products/single-rental"
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
              &copy; 2025 Key Real Estate Capital. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="https://nmlsconsumeraccess.org/TuringTestPage.aspx?ReturnUrl=/EntityDetails.aspx/COMPANY/2676974" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-light hover:text-light-green transition-colors"
              >
                NMLS ID #2676974
              </a>
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

      {/* Newsletter Modal */}
      {isNewsletterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-medium text-gray-900">Join Our Newsletter</h3>
              <button
                onClick={closeNewsletterModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              {isNewsletterModalOpen && (
                <div 
                  key={modalKey}
                  data-tf-live="01K1BX3QEFS7RAQYWRJR1KJV9X"
                  className="w-full h-[500px] rounded-lg overflow-hidden"
                ></div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
