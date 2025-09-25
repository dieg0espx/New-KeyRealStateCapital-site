"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ThankYouPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Handle video loading and initial play
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      // Try to play the video immediately when loaded
      video.play().catch((error) => {
        console.log('Autoplay failed:', error)
      })
    }

    const handleCanPlay = () => {
      // Video is ready to play - play immediately
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
            // Section is visible, ensure video is playing
            console.log('Section visible - ensuring video is playing')
            if (video.paused) {
              video.play().catch((error) => {
                console.log('Play failed:', error)
              })
            }
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
    <div className="min-h-screen bg-white">
      {/* Navbar - copied from calendly-book-a-call */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/cash-flow-freedom" className="flex items-center">
                <img 
                  src="/logo-white.png" 
                  alt="New Key Real Estate Capital" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            {/* Optional: Add a back button */}
            <div className="flex items-center">
              <Link href="/cash-flow-freedom">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#02736D] text-[#02736D] hover:bg-[#02736D] hover:text-white font-normal px-4 py-2 text-sm rounded-lg"
                >
                  ← Back to Landing Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - copied from cash-flow-freedom but with Thank You video */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 pt-36 sm:pt-28 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Sub-heading */}
          <p className="text-[#02736D] text-lg sm:text-xl lg:text-[22px] font-normal mb-6 sm:mb-8 leading-relaxed">
            For investors with $30k or more who want a complete done-for-you service
          </p>
          
          {/* Main Heading */}
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
                <source src="https://res.cloudinary.com/dhuhpf3wq/video/upload/v1758821243/Thank_you_page_1_w6rfqh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Attribution Text */}
          <p className="text-black text-base sm:text-lg lg:text-[20px] font-normal mb-8 sm:mb-12 leading-relaxed">
            From <span className="font-semibold text-[#02736D]">Real Estate Millionaire</span> <span className="text-black">Keyan Chang</span>
          </p>
          
        </div>
      </section>
    </div>
  )
}
