"use client"

import { useAutoScroll } from '../hooks/useAutoScroll'
import { Button } from '@/components/ui/button'

interface CaseStudiesSectionProps {
  onOpenModal: () => void
}

export default function CaseStudiesSection({ onOpenModal }: CaseStudiesSectionProps) {
  const { scrollContainerRef } = useAutoScroll()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F2F2F2]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-black mb-4 sm:mb-6">
            Case Studies
          </h2>
        </div>

        <div className="relative w-full">
          <div ref={scrollContainerRef} className="overflow-x-auto mb-8 sm:mb-12 scrollbar-hide w-full" style={{ scrollBehavior: 'smooth' }}>
            <div className="flex gap-4 sm:gap-6 pb-4 px-2 sm:px-4" style={{ width: 'max-content' }}>
              {/* Case Study 1 - person4 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Lauren</h3>
                  <p className="text-xs sm:text-sm text-gray-600">March 15, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Lauren, a nurse with 3 kids, picked up her first rental with 35k she had saved, refinanced right after, and now that place covers $1,050/month in cash flow.
                </p>
              </div>

              {/* Case Study 2 - person6 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Carlos</h3>
                  <p className="text-xs sm:text-sm text-gray-600">April 8, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  After retiring from the fire department, Carlos used a VA loan to snag 2 duplexes, and today they bring in around $2,200/month on top of his pension.
                </p>
              </div>

              {/* Case Study 3 - person5 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Jasmine</h3>
                  <p className="text-xs sm:text-sm text-gray-600">May 22, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  At 26, Jasmine bought a 4-plex with her savings, did a light renovation, and now she's pulling in $1,600/month cash flow.
                </p>
              </div>

              {/* Case Study 4 - person3 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Mark</h3>
                  <p className="text-xs sm:text-sm text-gray-600">June 10, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Mark already had 1 rental, refinanced it, rolled the equity into 3 more, and now his portfolio spits out an extra $3,400/month.
                </p>
              </div>

              {/* Case Study 5 - person7 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Sarah</h3>
                  <p className="text-xs sm:text-sm text-gray-600">July 15, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Sarah, a teacher, used her savings to purchase a duplex. After refinancing, she now generates $1,800/month in passive income while living in one unit.
                </p>
              </div>

              {/* Case Study 6 - person1 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Michael</h3>
                  <p className="text-xs sm:text-sm text-gray-600">August 3, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Michael, an engineer, invested in a 6-unit apartment building. With strategic renovations, he now earns $4,200/month in rental income.
                </p>
              </div>

              {/* Case Study 7 - person8 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Jennifer</h3>
                  <p className="text-xs sm:text-sm text-gray-600">September 12, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Jennifer, a marketing executive, bought her first rental property and now receives $1,300/month in cash flow, allowing her to quit her corporate job.
                </p>
              </div>

              {/* Case Study 8 - person2 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">David</h3>
                  <p className="text-xs sm:text-sm text-gray-600">October 28, 2024</p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  David, a small business owner, acquired 3 single-family rentals in 6 months. His portfolio now generates $2,700/month in passive income.
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-[#00C282] opacity-60 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-8 py-4 text-lg rounded-lg"
          >
            Book Free Investor Qualifying Call →
          </Button>
        </div>

      </div>
    </section>
  )
}
