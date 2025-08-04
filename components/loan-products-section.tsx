"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, Hammer, TrendingUp, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnimationControl } from "@/hooks/use-mobile"

interface LoanProduct {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

interface LoanProductsSectionProps {
  title?: string
  description?: string
  products?: LoanProduct[]
}

const defaultProducts: LoanProduct[] = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Fix-and-Flip",
    description: "Short-term financing for property renovation and resale projects",
    link: "/loan-products/fix-and-flip"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Single Property Rental",
    description: "Financing for individual rental property acquisitions",
    link: "/loan-products/single-rental"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "New Construction",
    description: "Construction loans for ground-up development projects",
    link: "/loan-products/new-construction"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Rental Portfolio",
    description: "Portfolio financing for multiple rental properties",
    link: "/loan-products/rental-portfolio"
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Stabilized Bridge",
    description: "Bridge financing for stabilized income-producing properties",
    link: "/loan-products/stabilized-bridge"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Multi-Family / Commercial",
    description: "Financing for larger multi-family and commercial properties",
    link: "/loan-products/commercial"
  }
]

export function LoanProductsSection({
  title = "Loan Products",
  description = "Comprehensive financing solutions tailored to your real estate investment strategy",
  products = defaultProducts
}: LoanProductsSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const { disableOnMobile } = useAnimationControl()

  const containerVariants = disableOnMobile({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15
      }
    }
  })

  const cardVariants = disableOnMobile({
    hidden: { opacity: 0, y: 40 },
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

  const cardHoverVariants = disableOnMobile({
    scale: 1.02,
    transition: { duration: 0.4 }
  })

  const iconHoverVariants = disableOnMobile({
    rotate: 3,
    scale: 1.1,
    transition: { duration: 0.4 }
  })

  const arrowHoverVariants = disableOnMobile({
    x: 3,
    transition: { duration: 0.4 }
  })

  return (
    <section className="py-24 bg-gray-50/30">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={cardHoverVariants}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="text-sky-600 mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={iconHoverVariants}
                    transition={{ duration: 0.4 }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{product.description}</p>
                  <Link href={product.link}>
                                          <motion.div
                        whileHover={arrowHoverVariants}
                        transition={{ duration: 0.4 }}
                      >
                      <Button variant="ghost" className="mt-4 p-0 text-sky-600 hover:text-sky-700 font-light">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 