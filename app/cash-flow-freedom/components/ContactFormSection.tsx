"use client"

import { Button } from '@/components/ui/button'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'

export default function ContactFormSection() {
  const { openModal } = useCalendlyModal()

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Left side - Contact Form */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight">
                If you've made it this far, you're obviously serious about this…
              </h2>
              
              {/* Contact Form */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02736D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02736D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02736D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#02736D] resize-none"
                  />
                </div>
                <div>
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-4 sm:px-8 lg:px-16 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl w-full rounded-lg"
                  >
                    Book Free Investor Qualifying Call →
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center">
              <div className="w-full h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/landing-page/L3.png" 
                  alt="Contact Section" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
