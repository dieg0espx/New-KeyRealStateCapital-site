"use client"

import CalendlyModal from '@/components/calendly-modal'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'
import MainHeroSection from '@/components/main-hero-section'
import ComprehensiveNavbar from '@/components/comprehensive-navbar'
import { Footer } from '@/components/footer'
import { Building, TrendingUp, Shield, Download, Phone, Mail, MapPin } from 'lucide-react'

// Import all loan sections
import FixAndFlipSection from '@/components/loan-sections/fix-and-flip-section'
import SingleRentalSection from '@/components/loan-sections/single-rental-section'
import NewConstructionSection from '@/components/loan-sections/new-construction-section'
import RentalPortfolioSection from '@/components/loan-sections/rental-portfolio-section'
import BridgeLoanSection from '@/components/loan-sections/bridge-loan-section'
import CommercialSection from '@/components/loan-sections/commercial-section'

export default function ComprehensiveLoanProductsPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ComprehensiveNavbar />
      
      {/* Page 1: Hero + Fix & Flip Section */}
      <div id="page-1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
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
              // Open the existing PDF file
              window.open('/NewKeyRealState.pdf', '_blank');
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
        </div>
      </div>

      {/* Page 2: Single Property Rental Section */}
      <div id="single-rental" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SingleRentalSection onSecondaryClick={openModal} />
      </div>

      {/* Page 3: New Construction Section */}
      <div id="new-construction" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewConstructionSection onSecondaryClick={openModal} />
      </div>

      {/* Page 4: Rental Portfolio Section */}
      <div id="rental-portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RentalPortfolioSection onSecondaryClick={openModal} />
      </div>

      {/* Page 5: Bridge Loan Section */}
      <div id="bridge-loans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BridgeLoanSection onSecondaryClick={openModal} />
      </div>

      {/* Page 6: Multi-Family / Commercial Section */}
      <div id="commercial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CommercialSection onSecondaryClick={openModal} />
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}