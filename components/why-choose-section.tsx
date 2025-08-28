"use client"

import { motion } from "framer-motion"
import { TrendingUp, Star, Phone, Building, Lightbulb, Handshake, Wind, DollarSign, Users, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface WhyChooseSectionProps {
  title?: string
  description?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Creative Solutions",
    description: "Flexible underwriting to get your deals across the finish line."
  },
  {
    icon: <Handshake className="h-8 w-8" />,
    title: "Compassionate Lending",
    description: "Work with a capital partner who wants to see you win."
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Competitive Terms",
    description: "Make the most out of your investments."
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Streamlined Process",
    description: "We take the headache and hassle out of the equation."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Dedicated Support",
    description: "Leverage our team of experts to make your life easier."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Fast Closing",
    description: "In as little as 3 days – we'll get it done."
  }
]

export function WhyChooseSection({
  title = "Why Choose Key",
  description = "Low rates, good communication and follow-through - We're here for the long-haul.",
  features = defaultFeatures
}: WhyChooseSectionProps) {
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

  const featureVariants = {
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
    <section className="py-24 bg-gradient-to-b from-light-green/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
                     <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={featureVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
            >
                              <motion.div 
                  className="text-light-green mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 3,
                    transition: { duration: 0.4 }
                  }}
                >
                {feature.icon}
              </motion.div>
                             <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 