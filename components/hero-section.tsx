"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Gradient } from "./gradient"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  videoUrl?: string
}

export function HeroSection({
  title = "Luxury Real State",
  subtitle = "Capital Solutions",
  description = "Empowering your real estate investments with sophisticated financing solutions",
  primaryButtonText = "Explore Loan Products",
  primaryButtonLink = "/loan-products",
  secondaryButtonText = "Get Free Consultation",
  secondaryButtonLink = "/contact",
  videoUrl = "https://res.cloudinary.com/dku1gnuat/video/upload/v1755631033/Untitled_design_2_qq6trg.mp4"
}: HeroSectionProps) {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <Gradient direction="bottom">
      <section className="relative min-h-screen h-screen lg:h-[calc(100vh+200px)] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20 lg:pt-0 lg:-mt-[150px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
            {title}
            <br />
            <span className="text-light-green/50">{subtitle}</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 font-light max-w-2xl mx-auto px-2 sm:px-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link href={primaryButtonLink} className="block w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-light-green text-white hover:bg-perry hover:text-white font-light px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  {primaryButtonText}
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link href={secondaryButtonLink} className="block w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white bg-white text-perry  hover:bg-perry hover:text-white font-light px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg "
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-[250px] left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/70" />
        </motion.button>
      </section>
    </Gradient>
  )
} 