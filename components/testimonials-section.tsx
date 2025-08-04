"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
import { useAnimationControl } from "@/hooks/use-mobile"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  company?: string
}

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    company: "Johnson Properties LLC",
    content: "Key Real Estate Capital made our fix-and-flip project seamless. Their expertise and quick turnaround time were exactly what we needed. We closed in just 10 days!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    company: "Chen Development Group",
    content: "Outstanding service and competitive rates. They understood our vision and provided the perfect financing solution for our multi-family project. Highly recommend!",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Portfolio Investor",
    company: "Rodriguez Investment Partners",
    content: "Professional, reliable, and always available when we need them. Key Real Estate Capital has been instrumental in growing our rental portfolio from 5 to 25 properties.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Commercial Investor",
    company: "Thompson Commercial Real Estate",
    content: "The team at Key Real Estate Capital is exceptional. They provided us with a bridge loan that allowed us to acquire a prime commercial property before our competitors.",
    rating: 5
  },
  {
    name: "Jennifer Park",
    role: "Fix-and-Flip Specialist",
    company: "Park Renovation Co.",
    content: "I've worked with many lenders, but Key Real Estate Capital stands out. Their construction loan process is streamlined and their rates are unbeatable.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    role: "Multi-Family Developer",
    company: "Martinez Development",
    content: "Key Real Estate Capital financed our 24-unit apartment complex. Their understanding of multi-family projects and quick approval process made all the difference.",
    rating: 5
  },
  {
    name: "Amanda Foster",
    role: "Rental Property Investor",
    company: "Foster Property Management",
    content: "They've helped us acquire 15 rental properties over the past 2 years. Their rental portfolio loans are perfect for scaling our business.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Construction Developer",
    company: "Wilson Construction",
    content: "Their new construction loan program is exactly what we needed. The team is knowledgeable about construction financing and made the process smooth.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Real Estate Entrepreneur",
    company: "Garcia Ventures",
    content: "Key Real Estate Capital has been our go-to lender for all our projects. Their flexibility and understanding of our business model is unmatched.",
    rating: 5
  }
]

export function TestimonialsSection({
  title = "Client Testimonials",
  description = "What our clients say about working with us",
  testimonials = defaultTestimonials
}: TestimonialsSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const sliderRef = useRef<Slider>(null)
  const { disableOnMobile } = useAnimationControl()

  const containerVariants = disableOnMobile({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  })

  const cardVariants = disableOnMobile({
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

  const testimonialAnimationProps = disableOnMobile({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  })

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const next = () => {
    sliderRef.current?.slickNext()
  }

  const previous = () => {
    sliderRef.current?.slickPrev()
  }

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          {...titleAnimationProps}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light">{description}</p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
       

          {/* Carousel */}
          <div className="testimonials-carousel">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="px-3 py-5"
                >
                  <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="flex mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <p className="text-gray-700 font-light leading-relaxed mb-6 italic h-[150px]">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 font-light">{testimonial.role}</div>
                        {testimonial.company && (
                          <div className="text-sm text-gray-500">{testimonial.company}</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 