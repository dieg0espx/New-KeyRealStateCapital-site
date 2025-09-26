"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, Hammer, TrendingUp, MapPin, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface LoanProduct {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
  hasButton?: boolean
  buttonText?: string
}

interface LoanProductsSectionProps {
  title?: string
  description?: string
  products?: LoanProduct[]
}

const defaultProducts: LoanProduct[] = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Fix & Flip",
    description: "Up to 100% leverage. Competitive terms and fast closings.",
    link: "/loan-products/fix-and-flip"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Single Property Rental",
    description: "Rock-bottom rates, flexible terms. Easy processes to scale your portfolio.",
    link: "/loan-products/single-rental"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "New Construction",
    description: "High leverage, competitive rates & easy draws – even for first timers.",
    link: "/loan-products/new-construction"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Rental Portfolio",
    description: "Stabilized term, value add, ground up – we've got you covered.",
    link: "/loan-products/rental-portfolio"
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Bridge",
    description: "Quick, temporary financing to get you to the next step.",
    link: "/loan-products/stabilized-bridge"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Multi-Family / Commercial",
    description: "Creative financing for experienced investors in all asset types.",
    link: "/loan-products/commercial"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "2nd Position Cash-out",
    description: "Keep your current low-rate mortgage in place and liquidate some equity."
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Conventional | Primary Loans",
    description: "Get the best rate on the purchase or refinance of your primary residence."
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "0% Interest Business Funding",
    description: "Good credit, but short on capital? We can help you there."
  }
]

export function LoanProductsSection({
  title = "Loan Products",
  description = "Comprehensive financing solutions tailored to your real estate investment strategy",
  products = defaultProducts
}: LoanProductsSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-24">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.4 }
              }}
            >
              <Card className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="text-light-green mb-6">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm flex-grow">{product.description}</p>
                  
                  {product.link && (
                    <div className="mt-4">
                      <Link href={product.link}>
                        <Button variant="ghost" className="p-0 text-perry font-light">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 