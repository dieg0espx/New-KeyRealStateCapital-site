"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onOpenModal: () => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Handle video loading and initial play
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      // Try to play the video when it's loaded
      video.play().catch((error) => {
        console.log('Autoplay failed:', error)
        // If autoplay fails, we'll handle it in the intersection observer
      })
    }

    const handleCanPlay = () => {
      // Video is ready to play
      video.play().catch((error) => {
        console.log('Video play failed:', error)
      })
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  // Handle video play/pause based on section visibility
  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    
    if (!video || !section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is visible, play video
            console.log('Section visible - playing video')
            video.play().catch((error) => {
              console.log('Play failed:', error)
            })
          } else {
            // Section is not visible, pause video
            console.log('Section not visible - pausing video')
            video.pause()
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px 0px 0px'
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [isVideoLoaded])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 pt-36 sm:pt-28 lg:pt-32">
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
              preload="auto"
            >
              <source src="https://res.cloudinary.com/dhuhpf3wq/video/upload/v1758821244/Vsl_1_tvmcxh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Attribution Text */}
        <p className="text-black text-base sm:text-lg lg:text-[20px] font-normal mb-8 sm:mb-12 leading-relaxed">
          From <span className="font-semibold text-[#02736D]">Real Estate Millionaire</span> <span className="text-black">Keyan Chang</span>
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
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
