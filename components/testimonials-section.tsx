"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"

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
    name: "Kam",
    role: "Real Estate Investor",
    content: "Lindsay was incredibly supportive and helped me close six properties in under 60 days. Their DSCR products are the best in the market. Highly recommend!",
    rating: 5
  },
  {
    name: "Daniel Kim",
    role: "Property Investor",
    content: "Excellent experience from start to finish. The team was responsive, knowledgeable, and made the process seamless. Their turnaround time exceeded my expectations!",
    rating: 5
  },
  {
    name: "Catricia Roberson",
    role: "Real Estate Investor",
    content: "Michelle was fast, responsive, and highly professional. Her communication was clear and respectful. Would definitely work with her again on future deals.",
    rating: 5
  },
  {
    name: "Eric Paz",
    role: "First-Time Investor",
    content: "10/10 experience for my first property. Michelle guided me every step of the way and exceeded my expectations. 100% chance I'll continue with them.",
    rating: 5
  },
  {
    name: "Adiel Tyson",
    role: "Licensed Real Estate Agent",
    content: "Michelle, Daisy and team were phenomenal. My client had a week to close and they got it done expeditiously! They've got my referral 100%.",
    rating: 5
  },
  {
    name: "Nicholas Rossi",
    role: "Fix & Flip Investor",
    content: "Secured my Fix and Flip loan at the lowest rates and fastest turnaround. Michelle was exceptionally helpful and always available. Highly recommended!",
    rating: 5
  },
  {
    name: "Alexis Beltran",
    role: "Real Estate Investor",
    content: "Lindsay did a great job from start to finish. Communication was key and she made me feel like a priority. Hope to do business again!",
    rating: 5
  },
  {
    name: "Melissa Covarrubias",
    role: "Local Guide",
    content: "Keyan's expertise and dedication are unmatched. He navigates complex loan situations with confidence and secures the best terms. Highly recommended!",
    rating: 5
  }
]

export function TestimonialsSection({
  title = "Client Testimonials",
  description = "From first-time investors to seasoned vets, we take care of our people.",
  testimonials = defaultTestimonials
}: TestimonialsSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const sliderRef = useRef<Slider>(null)

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

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipe: true,
    touchMove: true,
    draggable: true,
    swipeToSlide: true,
    useCSS: true,
    useTransform: true,
    cssEase: 'ease-out',
    touchThreshold: 10,
    beforeChange: (current: number, next: number) => {
      console.log('Sliding from', current, 'to', next)
    },
    afterChange: (current: number) => {
      console.log('Now on slide', current)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
          draggable: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
          draggable: true,
          swipeToSlide: true
        }
      }
    ]
  }



  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light mb-2">{description}</p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
       

                     {/* Carousel */}
            <div 
              className="testimonials-carousel relative"
              style={{ touchAction: 'pan-x' }}
            >
              <Slider 
                ref={sliderRef} 
                {...sliderSettings}
                onSwipe={(direction) => console.log('Swiped', direction)}
                onTouchStart={() => console.log('Touch started')}
                onTouchEnd={() => console.log('Touch ended')}
                onTouchMove={() => console.log('Touch moving')}
              >
               {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="px-3 py-5"
                >
                  <Card className="bg-white border-0 shadow-md hover:shadow-custom transition-shadow duration-300 h-full">
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
        <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 font-light px-4">
              * Click and drag to see more
            </div>
      </div>
    </section>
  )
} 