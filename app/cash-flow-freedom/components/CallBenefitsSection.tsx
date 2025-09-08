"use client"

import { Button } from '@/components/ui/button'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'

export default function CallBenefitsSection() {
  const { openModal } = useCalendlyModal()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left side - Heading and Button (Desktop) */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight">
              What You'll Walk Away From The Call With
            </h2>
            {/* CTA Button - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={openModal}
                size="lg"
                className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-6 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-2xl rounded-lg w-auto"
              >
                Book Free Investor Qualifying Call →
              </Button>
            </div>
          </div>

          {/* Right side - 2x2 Grid of Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full sm:w-[120%]">
            {/* Top-Left Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                A clear, actionable 90-day plan of exactly how we're going to place you into one or more cash-flowing properties <span className="text-[#02736D] font-semibold">($2,497 value)</span>
              </p>
            </div>

            {/* Top-Right Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                The secret system we use that allows us to guarantee we place you in a cash-flowing property, or we'll contractually buy the property back <span className="text-[#02736D] font-semibold">($9,997 value)</span>
              </p>
            </div>

            {/* Bottom-Left Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                The investment loophole we use that allows you to not spend a dime of your own money and get into your first cash-flowing property in less than 90 days <span className="text-[#02736D] font-semibold">($29,997 value)</span>
              </p>
            </div>

            {/* Bottom-Right Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                The confidence you need to finally get off the sidelines and start building the wealth you deserve <span className="text-[#02736D] font-semibold">(Priceless)</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button - Mobile only */}
        <div className="text-center mt-12 sm:mt-16 lg:hidden">
          <Button
            onClick={openModal}
            size="lg"
            className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-auto max-w-sm sm:max-w-none"
          >
            Book Free Investor Qualifying Call →
          </Button>
        </div>
      </div>
    </section>
  )
}
