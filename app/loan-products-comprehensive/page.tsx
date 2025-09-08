"use client"

import { useRef } from 'react'
import PDFGenerator from '@/components/pdf-generator'
import CalendlyModal from '@/components/calendly-modal'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'
import MainHeroSection from '@/components/main-hero-section'
import ComprehensiveNavbar from '@/components/comprehensive-navbar'
import { Button } from '@/components/ui/button'
import { Building, TrendingUp, Shield, Download } from 'lucide-react'

// Import all loan sections
import FixAndFlipSection from '@/components/loan-sections/fix-and-flip-section'
import SingleRentalSection from '@/components/loan-sections/single-rental-section'
import NewConstructionSection from '@/components/loan-sections/new-construction-section'
import RentalPortfolioSection from '@/components/loan-sections/rental-portfolio-section'
import BridgeLoanSection from '@/components/loan-sections/bridge-loan-section'
import CommercialSection from '@/components/loan-sections/commercial-section'

export default function ComprehensiveLoanProductsPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ComprehensiveNavbar />
      <div ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="pt-8">
          
          {/* Main Hero Section */}
          <MainHeroSection
            title="Comprehensive Loan Products"
            description="Detailed financing solutions tailored to your real estate investment strategy and goals"
            image=""
            primaryCta={{
              text: "Get Started Today",
              href: "/apply"
            }}
            secondaryCta={{
              text: "Download as PDF",
              href: "#",
              icon: <Download className="h-5 w-5" />
            }}
            onSecondaryClick={() => {
              if (contentRef.current) {
                // Trigger PDF download
                const event = new Event('click');
                const pdfButton = document.querySelector('[data-pdf-button]') as HTMLButtonElement;
                if (pdfButton) {
                  pdfButton.click();
                }
              }
            }}
            badges={[
              {
                title: "Fast Approval",
                subtitle: "7-14 Days",
                icon: <TrendingUp className="h-6 w-6 text-white" />,
                position: "top-left"
              },
              {
                title: "Expert Support",
                subtitle: "Dedicated Team",
                icon: <Shield className="h-6 w-6 text-white" />,
                position: "top-right"
              },
              {
                title: "Flexible Terms",
                subtitle: "Tailored Solutions",
                icon: <Building className="h-6 w-6 text-white" />,
                position: "bottom-right"
              }
            ]}
          />

          {/* Fix & Flip Section */}
          <div id="fix-and-flip">
            <FixAndFlipSection onSecondaryClick={openModal} />
          </div>

          {/* Single Property Rental Section */}
          <div id="single-rental">
            <SingleRentalSection onSecondaryClick={openModal} />
          </div>

          {/* New Construction Section */}
          <div id="new-construction">
            <NewConstructionSection onSecondaryClick={openModal} />
          </div>

          {/* Rental Portfolio Section */}
          <div id="rental-portfolio">
            <RentalPortfolioSection onSecondaryClick={openModal} />
          </div>

          {/* Bridge Loan Section */}
          <div id="bridge-loans">
            <BridgeLoanSection onSecondaryClick={openModal} />
          </div>

          {/* Multi-Family / Commercial Section */}
          <div id="commercial">
            <CommercialSection onSecondaryClick={openModal} />
          </div>

          {/* Contact Section */}
          <div id="contact" className="mt-16">
            <div className="text-center py-16 bg-light-green rounded-2xl">
              <h2 className="text-3xl font-medium text-white mb-4">Contact Us</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to get started with your real estate investment? Our team is here to help you find the perfect financing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={openModal}
                  size="lg"
                  variant="outline"
                  className="border-light-green text-light-green hover:bg-perry/50 font-light px-8 py-4 bg-transparent"
                >
                  Schedule Consultation
                </Button>
                <a
                  href="tel:+1234567890"
                  className="border border-white text-white hover:bg-white hover:text-light-green font-medium px-8 py-3 rounded-lg transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}