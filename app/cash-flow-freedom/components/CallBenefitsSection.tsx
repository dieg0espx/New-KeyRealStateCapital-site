"use client"

import { Button } from '@/components/ui/button'

interface CallBenefitsSectionProps {
  onOpenModal: () => void
}

export default function CallBenefitsSection({ onOpenModal }: CallBenefitsSectionProps) {

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight text-center">
            What You'll Walk Away From The Call With
          </h2>
          
          {/* Mobile Grid - Single column */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                A clear, actionable 90-day plan of exactly how we're going to place you into one or more cash-flowing properties <span className="text-[#02736D] font-semibold">($2,497 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                The secret system we use that allows us to guarantee we place you in a cash-flowing property, or we'll contractually buy the property back <span className="text-[#02736D] font-semibold">($9,997 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                The investment loophole we use that allows you to not spend a dime of your own money and get into your first cash-flowing property in less than 90 days <span className="text-[#02736D] font-semibold">($29,997 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                The confidence you need to finally get off the sidelines and start building the wealth you deserve <span className="text-[#02736D] font-semibold">(Priceless)</span>
              </p>
            </div>
          </div>
          
          {/* Mobile CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-full sm:w-auto"
            >
              Book Free Investor Qualifying Call →
            </Button>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Left side - Heading and Button */}
          <div>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium text-gray-900 mb-8 xl:mb-10 leading-tight">
              What You'll Walk Away From The Call With
            </h2>
            
            {/* Desktop CTA Button */}
            <div>
              <Button
                onClick={onOpenModal}
                size="lg"
                className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-8 xl:px-10 py-4 xl:py-5 text-lg xl:text-xl rounded-lg"
              >
                Book Free Investor Qualifying Call →
              </Button>
            </div>
          </div>

          {/* Right side - 2x2 Grid of Benefits */}
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg">
              <p className="text-base xl:text-lg text-gray-900 leading-relaxed">
                A clear, actionable 90-day plan of exactly how we're going to place you into one or more cash-flowing properties <span className="text-[#02736D] font-semibold">($2,497 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg">
              <p className="text-base xl:text-lg text-gray-900 leading-relaxed">
                The secret system we use that allows us to guarantee we place you in a cash-flowing property, or we'll contractually buy the property back <span className="text-[#02736D] font-semibold">($9,997 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg">
              <p className="text-base xl:text-lg text-gray-900 leading-relaxed">
                The investment loophole we use that allows you to not spend a dime of your own money and get into your first cash-flowing property in less than 90 days <span className="text-[#02736D] font-semibold">($29,997 value)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg">
              <p className="text-base xl:text-lg text-gray-900 leading-relaxed">
                The confidence you need to finally get off the sidelines and start building the wealth you deserve <span className="text-[#02736D] font-semibold">(Priceless)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
