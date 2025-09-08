"use client"

import { Button } from '@/components/ui/button'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'

export default function CallForYouSection() {
  const { openModal } = useCalendlyModal()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-medium text-[#02736D] mb-4 sm:mb-6">
            This Call is For You
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-8 sm:mb-12 leading-tight">
            This call is for you if you want to get into real estate investing and…
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left side - Text boxes */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
                Know that investing in real estate is the path to freedom you're looking for, but you don't know how to get started with little to no risk.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
                Want to get into one or more high cash-flowing investment properties guaranteed within the next 90 days, all done for you
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
                Have between $30k - $100k+ sitting in the bank, ready to deploy into one or more cash-flowing investment properties
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
                You're a current investor who wants to add an additional 10-50+ high cash-flowing properties to their portfolio within the next 6 months
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:order-2">
            <div className="rounded-2xl overflow-hidden h-auto">
              <img 
                src="/landing-page/LP1.png" 
                alt="Real Estate Investing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

         {/* CTA Button */}
         <div className="text-center mt-12 sm:mt-16">
           <Button
             onClick={openModal}
             size="lg"
             className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-4 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-6 text-sm sm:text-lg lg:text-2xl rounded-lg w-full sm:w-auto"
           >
             Book Free Investor Qualifying Call →
           </Button>
         </div>
      </div>
    </section>
  )
}
