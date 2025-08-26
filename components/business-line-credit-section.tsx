"use client"

import { motion } from "framer-motion"
import { CreditCard, TrendingUp, DollarSign, CheckCircle, Zap, Building2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

interface BusinessLineCreditSectionProps {
  title?: string
  subtitle?: string
  benefits?: Benefit[]
}

const defaultBenefits: Benefit[] = [
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "0% Interest Rate",
    description: "Access capital without paying any interest on your business line of credit."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Scale Your Business",
    description: "Fuel growth and expansion with flexible funding when you need it most."
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Real Estate Deals",
    description: "Secure funding quickly for property acquisitions and development projects."
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Simple Requirements",
    description: "Just need a credit score over 700 to qualify for this exclusive offer."
  }
]

export function BusinessLineCreditSection({
  title = "0% Business Line of Credit",
  subtitle = "Have a credit score over 700? Inquire with us about our exclusive 0% line of credit business funding to help fuel and scale your business, real estate deals, and more.",
  benefits = defaultBenefits
}: BusinessLineCreditSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const benefitVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-light-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]"
              variants={benefitVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-light-green mb-4 flex justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
