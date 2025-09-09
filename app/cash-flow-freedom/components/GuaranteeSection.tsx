"use client"

import { Button } from '@/components/ui/button'

interface GuaranteeSectionProps {
  onOpenModal: () => void
}

export default function GuaranteeSection({ onOpenModal }: GuaranteeSectionProps) {

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Content */}
          <div className="lg:order-1">
            <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]">
              <img 
                src="/landing-page/LP2.png" 
                alt="Property Buy Back Guarantee" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:order-2">
            <p className="text-[#02736D] text-base sm:text-lg font-normal mb-3 sm:mb-4">
              Backed By Our Guarantee
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">
              How Our Property Buy Back Guarantee Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light mb-6 sm:mb-8">
              When you sign up for our complete done-for-you service, we guarantee to place you into a cash-flowing investment property within 90 days, or we will contractually buy back the property from you, leaving you with no liability or responsibility thereafter.
            </p>
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl lg:text-[20px] rounded-lg w-full sm:w-auto"
            >
              Book Free Investor Qualifying Call →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
