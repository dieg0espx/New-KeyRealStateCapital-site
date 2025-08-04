"use client"

import { motion } from "framer-motion"
import { TrendingUp, Star, Phone, Building } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnimationControl } from "@/hooks/use-mobile"

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
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Expertise",
    description: "Deep market knowledge and industry experience"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Speed",
    description: "Quick decisions and fast funding timelines"
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Service",
    description: "Personalized attention and dedicated support"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Solutions",
    description: "Flexible financing tailored to your needs"
  }
]

export function WhyChooseSection({
  title = "Why Choose Key",
  description = "Our mission is to provide sophisticated, reliable financing solutions that empower your real estate success",
  features = defaultFeatures
}: WhyChooseSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const { disableOnMobile } = useAnimationControl()

  const containerVariants = disableOnMobile({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25
      }
    }
  })

  const featureVariants = disableOnMobile({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  })

  const titleAnimationProps = disableOnMobile({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6 }
  })

  const hoverVariants = disableOnMobile({
    scale: 1.03,
    transition: { duration: 0.4 }
  })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          {...titleAnimationProps}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={featureVariants}
              whileHover={hoverVariants}
            >
                              <motion.div 
                  className="text-sky-600 mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 3,
                    transition: { duration: 0.4 }
                  }}
                >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 