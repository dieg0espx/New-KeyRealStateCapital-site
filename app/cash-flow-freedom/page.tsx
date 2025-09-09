"use client"

import { useEffect } from 'react'
import CalendlyModal from '@/components/calendly-modal'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  HeroSection,
  CaseStudiesSection,
  CallForYouSection,
  TestimonialsSection,
  GuaranteeSection,
  CallBenefitsSection,
  ContactFormSection
} from './components'

export default function CashFlowFreedomPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  
  
  // Modal state is managed by the useCalendlyModal hook

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ transition: 'none' }}>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Vertical */}
          <div className="flex flex-col items-center py-4 sm:hidden">
            {/* Logo */}
            <div className="flex items-center mb-3">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo-white.png" 
                  alt="New Key Real Estate" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <Button
                onClick={openModal}
                size="sm"
                className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-4 py-2 text-sm rounded-lg"
              >
                Book Free Investor Qualifying Call →
              </Button>
            </div>
          </div>
          
          {/* Desktop Layout - Horizontal */}
          <div className="hidden sm:flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo-white.png" 
                  alt="New Key Real Estate" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <Button
                onClick={openModal}
                size="sm"
                className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-6 py-2 text-base rounded-lg"
              >
                Book Free Investor Qualifying Call →
              </Button>
            </div>
          </div>
        </div>
      </nav>
      

      <HeroSection />
      <CaseStudiesSection />
      <CallForYouSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <CallBenefitsSection />
      <ContactFormSection />


      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
      
      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Newsletter Section */}
        <div className="border-b border-light-green/20 bg-perry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Stay Informed</h3>
              <p className="text-white font-light mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Get the latest market insights, investment strategies, and financing updates delivered to your inbox.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={openModal}
                  className="bg-light-green hover:bg-white text-white hover:text-perry font-light px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-full sm:w-auto"
                >
                  Join Our Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Company Info */}
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src="/logo-transparent.png"
                    alt="Key Real Estate Capital"
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <p className="text-white font-light leading-relaxed mb-2 max-w-md text-sm sm:text-base">
                  Unlock Freedom
                </p>
                <p className="text-white font-light leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                  Sophisticated financing solutions for real estate investors nationwide. We empower your success with
                  flexible lending options and expert guidance.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:(619) 649-6933" className="flex items-start">
                    <span className="text-gray-300 font-light">(619) 649-6933</span>
                  </a>
                  <a href="mailto:loans@keyrealestatecapital.com" className="flex items-start">
                    <span className="text-gray-300 font-light break-words">loans@keyrealestatecapital.com</span>
                  </a>
                  <div className="flex items-start">
                    <div>
                      <div className="text-gray-300 font-light">401 W A St Ste 200</div>
                      <div className="text-gray-300 font-light">San Diego, CA 92101</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/" className="block text-white hover:text-white transition-colors font-light">
                    Home
                  </Link>
                  <Link href="/loan-products" className="block text-white hover:text-white transition-colors font-light">
                    Loan Types
                  </Link>
                  <Link href="/team" className="block text-white hover:text-white transition-colors font-light">
                    About Us
                  </Link>
                  <Link href="/blog" className="block text-white hover:text-white transition-colors font-light">
                    Blog
                  </Link>
                  <Link href="/contact" className="block text-white hover:text-white transition-colors font-light">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Loan Types & Programs */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Loan Types & Programs</h4>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/loan-products/fix-and-flip" className="block text-white hover:text-white transition-colors font-light">
                    Fix & Flip
                  </Link>
                  <Link href="/loan-products/single-rental" className="block text-white hover:text-white transition-colors font-light">
                    DSCR Rental
                  </Link>
                  <Link href="/loan-products/stabilized-bridge" className="block text-white hover:text-white transition-colors font-light">
                    Bridge
                  </Link>
                  <Link href="/loan-products/new-construction" className="block text-white hover:text-white transition-colors font-light">
                    New Construction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <div className="text-white font-light text-xs sm:text-sm mb-3 sm:mb-0">
                &copy; 2025 Key Real Estate Capital. All rights reserved.
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <span className="text-white font-light">NMLS ID #2676974</span>
                <span className="text-white font-light">Equal Housing Lender</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}