"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LoanCalculator } from "./loan-calculator"
import { Gradient } from "./gradient"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface LoanCalculatorSectionProps {
  title?: string
  description?: string
  benefits?: Array<{
    icon: string
    title: string
    description: string
  }>
  ctaTitle?: string
  ctaDescription?: string
  ctaFeatures?: string[]
  ctaButtonText?: string
  ctaButtonLink?: string
}

const defaultBenefits = [
  {
    icon: "⚡",
    title: "Instant Results",
    description: "Get real-time calculations as you adjust your loan parameters"
  },
  {
    icon: "🎯",
    title: "Accurate Estimates",
    description: "Based on current market rates and our actual loan programs"
  },
  {
    icon: "📊",
    title: "Multiple Loan Types",
    description: "Calculate payments for all our loan products in one place"
  },
  {
    icon: "💡",
    title: "Smart Defaults",
    description: "Pre-filled with typical values for each loan type"
  }
]

const defaultCtaFeatures = [
  "Quick 7-14 day closings",
  "Competitive rates starting at 6.5%",
  "Loans up to $20M available"
]

export function LoanCalculatorSection({
  title = "Calculate Your Loan",
  description = "Get an instant estimate of your monthly payments and total costs with our interactive loan calculator",
  benefits = defaultBenefits,
  ctaTitle = "Ready to Apply?",
  ctaDescription = "Our loan officers are ready to help you get pre-qualified and find the perfect financing solution for your real estate investment.",
  ctaFeatures = defaultCtaFeatures,
  ctaButtonText = "Speak with a Loan Officer",
  ctaButtonLink = "/contact"
}: LoanCalculatorSectionProps) {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  return (
    <Gradient direction="top">
      <Gradient direction="bottom">
        <section className="py-[200px] bg-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-stretch"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Calculator */}
              <motion.div 
                className="order-2 lg:order-1"
                variants={itemVariants}
              >
                <LoanCalculator />
              </motion.div>
              
              {/* Benefits & Features */}
              <motion.div 
                className="order-1 lg:order-2 space-y-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white p-8 shadow-lg border border-gray-100"
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.4 }
                  }}
                >
                  <h3 className="text-2xl font-light text-gray-900 mb-6">Why Use Our Calculator?</h3>
                  <div className="space-y-4">
                    {benefits.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4"
                        variants={featureVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 font-light text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-sky-600 p-8 text-white"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-2xl font-light mb-6">{ctaTitle}</h3>
                  <p className="text-sky-100 font-light mb-6">
                    {ctaDescription}
                  </p>
                  <div className="space-y-3">
                    {ctaFeatures.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center text-sky-100"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-sky-200 rounded-full mr-3"></div>
                        <span className="font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Link href={ctaButtonLink} className="inline-block mt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-white text-sky-600 hover:bg-gray-100 font-light px-6 py-3">
                        {ctaButtonText}
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                  <span>No application fees</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                  <span>Pre-qualification in 24 hours</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                  <span>15 states covered</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Gradient>
    </Gradient>
  )
} 