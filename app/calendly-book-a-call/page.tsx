"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CalendlyModal from '@/components/calendly-modal'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'
import { useRouter } from 'next/navigation'

export default function CalendlyBookACallPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  const router = useRouter()

  // Handle Calendly completion
  useEffect(() => {
    const handleCalendlyEvent = (event: MessageEvent) => {
      // Check if the message is from Calendly
      if (event.origin !== 'https://calendly.com') return
      
      if (event.data.event && event.data.event.indexOf('calendly.event_scheduled') === 0) {
        console.log('Calendly event scheduled, redirecting to thank-you page...')
        router.push('/thank-you')
      }
    }

    // Listen for Calendly events
    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [router])

  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/cash-flow-freedom" className="flex items-center">
                <img 
                  src="/logo-white.png" 
                  alt="New Key Real Estate Capital" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            {/* Optional: Add a back button */}
            <div className="flex items-center">
              <Link href="/cash-flow-freedom">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#02736D] text-[#02736D] hover:bg-[#02736D] hover:text-white font-normal px-4 py-2 text-sm rounded-lg"
                >
                  ← Back to Landing Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Header Section */}
        <div className="bg-[#02736D] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Book Your Free Investor Qualifying Call
            </h1>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              Schedule a 15-minute consultation to discuss your real estate investment goals and how we can help you achieve cash flow freedom.
            </p>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Note about refreshing */}
          <div className="text-center mb-4">
            <p className="text-sm text-white bg-[#02736D] border border-[#02736D] rounded-lg px-4 py-2 inline-block">
              <strong>Note:</strong> Please refresh the page if the calendar does not load
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div 
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/helanerhae/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#02736D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#02736D] mb-2">15 Minutes</h3>
                <p className="text-gray-600 text-sm">Quick and focused consultation to understand your needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#02736D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#02736D] mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">Get personalized advice from our real estate investment experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#02736D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#02736D] mb-2">No Commitment</h3>
                <p className="text-gray-600 text-sm">Free consultation with no obligation to proceed</p>
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
