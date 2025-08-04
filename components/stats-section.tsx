"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Stat {
  number: string
  label: string
}

interface StatsSectionProps {
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  { number: "500+", label: "Loans Funded" },
  { number: "1,200+", label: "Clients Served" },
  { number: "15", label: "States Covered" },
  { number: "10+", label: "Years in Business" }
]

export function StatsSection({ stats = defaultStats }: StatsSectionProps) {
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

  const statVariants = {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 text-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={statVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
            >
                              <motion.div 
                  className="text-4xl md:text-5xl font-light text-sky-600 mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-light text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 