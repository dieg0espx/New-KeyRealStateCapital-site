"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundColor?: string
}

export function CTASection({
  title = "Ready to Get Started?",
  description = "Let's discuss how we can help finance your next real estate investment opportunity",
  primaryButtonText = "Get Free Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Loan Products",
  secondaryButtonLink = "/loan-products",
  backgroundColor = "bg-sky-600"
}: CTASectionProps) {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
        duration: 0.4
      }
    }
  }

  return (
    <section className={`py-24 ${backgroundColor}`}>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-light text-white mb-6"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-xl text-sky-100 font-light mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants}>
            <Link href={primaryButtonLink}>
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 font-light px-8 py-4 text-lg">
                {primaryButtonText}
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link href={secondaryButtonLink}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sky-600 font-light px-8 py-4 text-lg bg-transparent"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 