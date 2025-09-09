"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onOpenModal: () => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Ensure video auto-plays
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
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
          onClick={onOpenModal}
          size="lg"
          className="bg-[#02736D] hover:bg-[#025a54] text-white font-normal px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl lg:text-[20px] rounded-lg w-full sm:w-auto"
        >
          Book Free Investor Qualifying Call →
        </Button>
      </div>
    </section>
  )
}
