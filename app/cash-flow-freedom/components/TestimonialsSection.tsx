"use client"

import { useAutoScroll } from '../hooks/useAutoScroll'
import { Button } from '@/components/ui/button'

interface TestimonialsSectionProps {
  onOpenModal: () => void
}

export default function TestimonialsSection({ onOpenModal }: TestimonialsSectionProps) {
  const { scrollContainerRef } = useAutoScroll()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F2F2F2]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-medium text-black mb-4 sm:mb-6">
            Students Who Started With Nothing And Made It Happen
          </h2>
        </div>

        <div className="relative w-full">
          <div ref={scrollContainerRef} className="overflow-x-auto mb-8 sm:mb-12 scrollbar-hide w-full" style={{ scrollBehavior: 'smooth' }}>
            <div className="flex gap-4 sm:gap-6 pb-4 px-2 sm:px-4" style={{ width: 'max-content' }}>
              {/* Testimonial 1 - Longest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Robert L.</h3>
                  <p className="text-sm text-gray-600">Experienced Investor</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  I've been investing for over 10 years, but working with your team has been the smoothest experience ever. Adding 12 properties without dealing with contractors, tenants, or financing issues blew my mind. Your system is unlike anything I've tried, and scaling my portfolio has never been easier. Truly grateful and excited for what's next.
                </p>
              </div>

              {/* Testimonial 2 - Second Longest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Daniel R.</h3>
                  <p className="text-sm text-gray-600">Retired Professional</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  Keyan just wanted to say, after being in here for a while, I've been burned before so I was nervous about all this to start... but the guarantee gave me the confidence to move forward. Now I've literally got a steady income from two properties that basically cover my living expenses. It feels amazing to finally enjoy retirement without stressing about money every day.
                </p>
              </div>

              {/* Testimonial 3 - Third Longest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Jessica M.</h3>
                  <p className="text-sm text-gray-600">Real Estate Investor</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  Keyan!! I honestly can't thank you enough for this. I went from having cash just sitting there to now owning 3 doors in 90 days. It's crazy. I've already been telling friends about it because I honestly didn't think something like this was possible without taking on a ton of risk – you're the best!!!
                </p>
              </div>

              {/* Testimonial 4 - Fourth Longest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Priya D.</h3>
                  <p className="text-sm text-gray-600">First-Time Investor</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  I still think it's so funny how 3 months ago I had $100k saved but no clue how to get started in real estate and now I own two properties bringing in $2,500/month combined. I'm already planning my next call with the team to line up more properties.
                </p>
              </div>

              {/* Testimonial 5 - Fifth Longest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Amanda K.</h3>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  Honestly Keyan, I never thought I'd be able to invest in real estate while working full-time and raising three kids haha but your process has been amazing so far. Like the fact I already have a rental property in my name this early on is actually crazy to think about. Many more soon!!
                </p>
              </div>

              {/* Testimonial 6 - Shortest */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#02736D]">Marcus T.</h3>
                  <p className="text-sm text-gray-600">New Investor</p>
                </div>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  Hey Keyan, just wanted to say thank you again. A couple months ago I was literally just sitting on 40k in the bank not knowing what to do with it... and now I actually own a duplex. Rent already came in and I was honestly shocked seeing that hit my account. I can't believe how quickly this all happened, feels pretty surreal.
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
