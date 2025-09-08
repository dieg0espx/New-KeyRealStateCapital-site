"use client"

import { useEffect, useRef, useState } from 'react'
import CalendlyModal from '@/components/calendly-modal'
import { useCalendlyModal } from '@/hooks/use-calendly-modal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CashFlowFreedomPage() {
  const { isOpen, openModal, closeModal } = useCalendlyModal()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const testimonialsScrollRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [isTestimonialsScrolling, setIsTestimonialsScrolling] = useState(false)

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollInterval: NodeJS.Timeout
    let userScrollTimeout: NodeJS.Timeout

    const startAutoScroll = () => {
      if (isUserScrolling) return
      
      scrollInterval = setInterval(() => {
        if (container && !isUserScrolling) {
          const maxScroll = container.scrollWidth - container.clientWidth
          const currentScroll = container.scrollLeft
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning when reaching the end
            container.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            // Scroll to the right
            container.scrollBy({ left: 360, behavior: 'smooth' })
          }
        }
      }, 3000) // Auto-scroll every 3 seconds
    }

    const handleUserScroll = () => {
      setIsUserScrolling(true)
      clearInterval(scrollInterval)
      
      // Resume auto-scroll after user stops scrolling for 5 seconds
      clearTimeout(userScrollTimeout)
      userScrollTimeout = setTimeout(() => {
        setIsUserScrolling(false)
        startAutoScroll()
      }, 5000)
    }

    // Start auto-scroll initially
    startAutoScroll()

    // Add scroll event listener
    container.addEventListener('scroll', handleUserScroll)
    container.addEventListener('wheel', handleUserScroll)
    container.addEventListener('touchstart', handleUserScroll)

    return () => {
      clearInterval(scrollInterval)
      clearTimeout(userScrollTimeout)
      container.removeEventListener('scroll', handleUserScroll)
      container.removeEventListener('wheel', handleUserScroll)
      container.removeEventListener('touchstart', handleUserScroll)
    }
  }, [isUserScrolling])

  // Auto-scroll functionality for testimonials
  useEffect(() => {
    const container = testimonialsScrollRef.current
    if (!container) return

    let scrollInterval: NodeJS.Timeout
    let userScrollTimeout: NodeJS.Timeout

    const startAutoScroll = () => {
      if (isTestimonialsScrolling) return
      
      scrollInterval = setInterval(() => {
        if (container && !isTestimonialsScrolling) {
          const maxScroll = container.scrollWidth - container.clientWidth
          const currentScroll = container.scrollLeft
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning when reaching the end
            container.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            // Scroll to the right
            container.scrollBy({ left: 360, behavior: 'smooth' })
          }
        }
      }, 3000) // Auto-scroll every 3 seconds
    }

    const handleUserScroll = () => {
      setIsTestimonialsScrolling(true)
      clearInterval(scrollInterval)
      
      // Resume auto-scroll after user stops scrolling for 5 seconds
      clearTimeout(userScrollTimeout)
      userScrollTimeout = setTimeout(() => {
        setIsTestimonialsScrolling(false)
        startAutoScroll()
      }, 5000)
    }

    // Start auto-scroll initially
    startAutoScroll()

    // Add scroll event listener
    container.addEventListener('scroll', handleUserScroll)
    container.addEventListener('wheel', handleUserScroll)
    container.addEventListener('touchstart', handleUserScroll)

    return () => {
      clearInterval(scrollInterval)
      clearTimeout(userScrollTimeout)
      container.removeEventListener('scroll', handleUserScroll)
      container.removeEventListener('wheel', handleUserScroll)
      container.removeEventListener('touchstart', handleUserScroll)
    }
  }, [isTestimonialsScrolling])

  // Ensure video auto-plays
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo-white.png" 
                  alt="New Key Real Estate" 
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </div>

          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Sub-heading */}
          <p className="text-[#02736D] text-lg sm:text-xl lg:text-[22px] font-normal mb-6 sm:mb-8 leading-relaxed">
            For investors with $30k or more who want a complete done-for-you service
          </p>
          
          {/* Main Heading/Guarantee */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-12 sm:mb-16 leading-tight max-w-6xl mx-auto">
            We guarantee placing you in one or more high cash-flowing investment properties in the next 90 days, or we will contractually buy the property back from you
          </h1>
          
          {/* Video Player */}
          <div className="relative mb-6 sm:mb-8">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#02736D] max-w-6xl mx-auto">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                poster="/placeholder.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="https://res.cloudinary.com/dku1gnuat/video/upload/v1755631033/Untitled_design_2_qq6trg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Attribution Text */}
          <p className="text-black text-base sm:text-lg lg:text-[20px] font-normal mb-8 sm:mb-12 leading-relaxed">
            From <span className="font-semibold text-[#02736D]">Real Estate Millionaire</span> <span className="text-black">Keyan Chang</span>
          </p>
          
          {/* Call-to-Action Button */}
          <Button
            onClick={openModal}
            size="lg"
            className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl lg:text-[20px] rounded-lg w-full sm:w-auto"
          >
            Book Free Investor Qualifying Call →
          </Button>
        </div>
      </section>

      {/* Case Studies Section */}
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
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person4.png" alt="Case Study 1" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Lauren</h3>
                    <p className="text-xs sm:text-sm text-gray-600">March 15, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Lauren, a nurse with 3 kids, picked up her first rental with 35k she had saved, refinanced right after, and now that place covers $1,050/month in cash flow.
                </p>
              </div>

              {/* Case Study 2 - person6 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person6.png" alt="Case Study 2" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Carlos</h3>
                    <p className="text-xs sm:text-sm text-gray-600">April 8, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  After retiring from the fire department, Carlos used a VA loan to snag 2 duplexes, and today they bring in around $2,200/month on top of his pension.
                </p>
              </div>

              {/* Case Study 3 - person5 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person5.png" alt="Case Study 3" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Jasmine</h3>
                    <p className="text-xs sm:text-sm text-gray-600">May 22, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  At 26, Jasmine bought a 4-plex with her savings, did a light renovation, and now she's pulling in $1,600/month cash flow.
                </p>
              </div>

              {/* Case Study 4 - person3 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person3.png" alt="Case Study 4" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Mark</h3>
                    <p className="text-xs sm:text-sm text-gray-600">June 10, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Mark already had 1 rental, refinanced it, rolled the equity into 3 more, and now his portfolio spits out an extra $3,400/month.
                </p>
              </div>

              {/* Case Study 5 - person7 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person7.png" alt="Case Study 5" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Sarah</h3>
                    <p className="text-xs sm:text-sm text-gray-600">July 15, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Sarah, a teacher, used her savings to purchase a duplex. After refinancing, she now generates $1,800/month in passive income while living in one unit.
                </p>
              </div>

              {/* Case Study 6 - person1 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person1.jpeg" alt="Case Study 6" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Michael</h3>
                    <p className="text-xs sm:text-sm text-gray-600">August 3, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Michael, an engineer, invested in a 6-unit apartment building. With strategic renovations, he now earns $4,200/month in rental income.
                </p>
              </div>

              {/* Case Study 7 - person8 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person8.png" alt="Case Study 7" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">Jennifer</h3>
                    <p className="text-xs sm:text-sm text-gray-600">September 12, 2024</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
                  Jennifer, a marketing executive, bought her first rental property and now receives $1,300/month in cash flow, allowing her to quit her corporate job.
                </p>
              </div>

              {/* Case Study 8 - person2 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 border-2 border-[#00C282] overflow-hidden">
                    <img src="/people/person2.jpeg" alt="Case Study 8" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#02736D]">David</h3>
                    <p className="text-xs sm:text-sm text-gray-600">October 28, 2024</p>
                  </div>
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

          {/* Pagination Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#00C282] rounded-full"></div>
              <div className="w-3 h-3 bg-[#00C282]/25 rounded-full"></div>
            </div>
          </div>

           {/* CTA Button */}
           <div className="text-center">
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

      {/* This Call is For You Section */}
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
              <div className="rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[830px]">
                <img 
                  src="/landing-page/LP1.png" 
                  alt="Real Estate Investing" 
                  className="w-full h-full object-cover"
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

      {/* Students Who Started With Nothing Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F2F2F2]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-medium text-black mb-4 sm:mb-6">
              Students Who Started With Nothing And Made It Happen
            </h2>
          </div>

          <div className="relative w-full">
            <div ref={testimonialsScrollRef} className="overflow-x-auto mb-8 sm:mb-12 scrollbar-hide w-full" style={{ scrollBehavior: 'smooth' }}>
              <div className="flex gap-4 sm:gap-6 pb-4 px-2 sm:px-4" style={{ width: 'max-content' }}>
            {/* Testimonial 1 - Longest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person9.png" alt="Robert L." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Robert L.</h3>
                  <p className="text-sm text-gray-600">Experienced Investor</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                I've been investing for over 10 years, but working with your team has been the smoothest experience ever. Adding 12 properties without dealing with contractors, tenants, or financing issues blew my mind. Your system is unlike anything I've tried, and scaling my portfolio has never been easier. Truly grateful and excited for what's next.
              </p>
            </div>

            {/* Testimonial 2 - Second Longest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person10.png" alt="Daniel R." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Daniel R.</h3>
                  <p className="text-sm text-gray-600">Retired Professional</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                Keyan just wanted to say, after being in here for a while, I've been burned before so I was nervous about all this to start... but the guarantee gave me the confidence to move forward. Now I've literally got a steady income from two properties that basically cover my living expenses. It feels amazing to finally enjoy retirement without stressing about money every day.
              </p>
            </div>

            {/* Testimonial 3 - Third Longest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person11.png" alt="Jessica M." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Jessica M.</h3>
                  <p className="text-sm text-gray-600">Real Estate Investor</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                Keyan!! I honestly can't thank you enough for this. I went from having cash just sitting there to now owning 3 doors in 90 days. It's crazy. I've already been telling friends about it because I honestly didn't think something like this was possible without taking on a ton of risk – you're the best!!!
              </p>
            </div>

            {/* Testimonial 4 - Fourth Longest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person12.png" alt="Priya D." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Priya D.</h3>
                  <p className="text-sm text-gray-600">First-Time Investor</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                I still think it's so funny how 3 months ago I had $100k saved but no clue how to get started in real estate and now I own two properties bringing in $2,500/month combined. I'm already planning my next call with the team to line up more properties.
              </p>
            </div>

            {/* Testimonial 5 - Fifth Longest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person14.png" alt="Amanda K." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Amanda K.</h3>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                Honestly Keyan, I never thought I'd be able to invest in real estate while working full-time and raising three kids haha but your process has been amazing so far. Like the fact I already have a rental property in my name this early on is actually crazy to think about. Many more soon!!
              </p>
            </div>

            {/* Testimonial 6 - Shortest */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 border-2 border-[#00C282] overflow-hidden">
                  <img src="/people/person15.png" alt="Marcus T." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02736D]">Marcus T.</h3>
                  <p className="text-sm text-gray-600">New Investor</p>
                </div>
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

          {/* Pagination Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#00C282] rounded-full"></div>
              <div className="w-3 h-3 bg-[#00C282]/25 rounded-full"></div>
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

      {/* How Our Property Buy Back Guarantee Works */}
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
                onClick={openModal}
                size="lg"
                className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-4 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-6 text-sm sm:text-lg lg:text-2xl rounded-lg w-full sm:w-auto"
              >
                Book Free Investor Qualifying Call →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away From The Call With */}
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

      {/* Contact Form Section */}
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


      {/* Calendly Modal */}
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
      
      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Newsletter Section */}
        <div className="border-b border-light-green/20 bg-perry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Stay Informed</h3>
              <p className="text-white font-light mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Get the latest market insights, investment strategies, and financing updates delivered to your inbox.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={openModal}
                  className="bg-light-green hover:bg-white text-white hover:text-perry font-light px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-full sm:w-auto"
                >
                  Join Our Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Company Info */}
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src="/logo-transparent.png"
                    alt="Key Real Estate Capital"
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <p className="text-white font-light leading-relaxed mb-2 max-w-md text-sm sm:text-base">
                  Unlock Freedom
                </p>
                <p className="text-white font-light leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                  Sophisticated financing solutions for real estate investors nationwide. We empower your success with
                  flexible lending options and expert guidance.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:(619) 649-6933" className="flex items-start">
                    <span className="text-gray-300 font-light">(619) 649-6933</span>
                  </a>
                  <a href="mailto:loans@keyrealestatecapital.com" className="flex items-start">
                    <span className="text-gray-300 font-light break-words">loans@keyrealestatecapital.com</span>
                  </a>
                  <div className="flex items-start">
                    <div>
                      <div className="text-gray-300 font-light">401 W A St Ste 200</div>
                      <div className="text-gray-300 font-light">San Diego, CA 92101</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/" className="block text-white hover:text-white transition-colors font-light">
                    Home
                  </Link>
                  <Link href="/loan-products" className="block text-white hover:text-white transition-colors font-light">
                    Loan Types
                  </Link>
                  <Link href="/team" className="block text-white hover:text-white transition-colors font-light">
                    About Us
                  </Link>
                  <Link href="/blog" className="block text-white hover:text-white transition-colors font-light">
                    Blog
                  </Link>
                  <Link href="/contact" className="block text-white hover:text-white transition-colors font-light">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Loan Types & Programs */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Loan Types & Programs</h4>
                <div className="space-y-2 sm:space-y-3">
                  <Link href="/loan-products/fix-and-flip" className="block text-white hover:text-white transition-colors font-light">
                    Fix & Flip
                  </Link>
                  <Link href="/loan-products/single-rental" className="block text-white hover:text-white transition-colors font-light">
                    DSCR Rental
                  </Link>
                  <Link href="/loan-products/stabilized-bridge" className="block text-white hover:text-white transition-colors font-light">
                    Bridge
                  </Link>
                  <Link href="/loan-products/new-construction" className="block text-white hover:text-white transition-colors font-light">
                    New Construction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <div className="text-white font-light text-xs sm:text-sm mb-3 sm:mb-0">
                &copy; 2025 Key Real Estate Capital. All rights reserved.
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <span className="text-white font-light">NMLS ID #2676974</span>
                <span className="text-white font-light">Equal Housing Lender</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
