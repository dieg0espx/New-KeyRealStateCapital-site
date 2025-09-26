"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useRef, useState, useEffect } from "react"

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
    name: "Daniel Kim",
    role: "Property Investor",
    content: "I've had an excellent experience working with Keyswag Lending. From start to finish, their team was responsive, knowledgeable, and incredibly supportive throughout the entire process. They made what could have been a stressful transaction feel seamless and efficient. I appreciated how transparent they were with every step, and their turnaround time exceeded my expectations. I highly recommend Keyswag Lending to anyone looking for a reliable and trustworthy lending partner!",
    rating: 5
  },
  {
    name: "Catricia Roberson",
    role: "Real Estate Investor",
    content: "Even though we didn't end up closing this particular deal, I truly appreciated working with Michelle. She was fast, responsive, and highly professional throughout the entire process. Her communication was clear, consistent, and respectful — which made a big difference. I also understand that many of the requirements and decisions come from higher up, and she handled those situations with grace while still advocating on my behalf. Michelle gets things done quickly and efficiently, and I absolutely respect that level of execution. Would definitely work with her again on future deals. Thank you, Michelle!",
    rating: 5
  },
  {
    name: "Kam",
    role: "Real Estate Investor",
    content: "Had a phenomenal experience working with Keyswag Lending. Lindsay was incredibly supportive, communicative, and truly understood my needs — helping me close six properties in under 60 days. She worked around the clock to make it happen and made the process feel seamless. Contrary to what many believe, underwriting doesn't have to take 30 days. With your documents in order, it can be done in just a few days — and that was exactly my experience. Their DSCR products are the best in the market for rental property investors. Highly recommend Keyswag to both new and experienced investors looking for reliable, fast, and professional service.",
    rating: 5
  },
  {
    name: "Nicholas Rossi",
    role: "Fix & Flip Investor",
    content: "I had an excellent experience with Keyswag Lending! They quickly secured my Fix and Flip loan at the lowest rates and fastest turnaround available in the market. Michelle, the processor, was exceptionally helpful and always available, ensuring the transaction went smoothly from start to finish. Highly recommended!",
    rating: 5
  },
  {
    name: "Eric Paz",
    role: "First-Time Investor",
    content: "I went through Keyswag for my first property and I got to say, 10/10. Michelle guided and educated me every step of the way and went far above my expectations. Professional, responsive, knowledgeable. This is exactly the type of service that has me dedicated to building a stronger relationship with this lender. There's a 100% chance I'll continue to go with them.",
    rating: 5
  },
  {
    name: "Adiel Tyson",
    role: "Licensed Real Estate Agent",
    content: "I'm a licensed real estate agent in Pennsylvania and I must say Michelle, Daisy and team were phenomenal to say the least. We started out with one Lender that had already surpassed their timeline. My client went to them with a week to go before the extended closing date and they got it done expeditiously! They've got my referral 100%.",
    rating: 5
  },
  {
    name: "Alexis Beltran",
    role: "Real Estate Investor",
    content: "Lindsay did a great job from start to finish. Communication was very key for me and she made me feel like a priority. Is definitely recommend. I hope to do business again in the future.",
    rating: 5
  },
  {
    name: "Tammy Huynh",
    role: "Real Estate Investor",
    content: "Keyswag Lending is hands down one of the best lenders out there! Keyan and Sina are absolutely on point—always responsive, professional, and genuinely committed to making the lending process smooth and stress-free. From start to finish, they answered all of our questions promptly and with great detail, ensuring we felt confident every step of the way. Their expertise and dedication truly set them apart. If you're looking for a lender who goes above and beyond, look no further—Keyswag Lending is the way to go! Highly recommend!",
    rating: 5
  },
  {
    name: "New Lyfe Holdings",
    role: "Real Estate Investor",
    content: "I had to course correct and sought out another lender a week before we were scheduled to close. KeySwag put a rush on my file and handled all affairs timely with stellar professionalism. Looking forward to more opportunities to collaborate!!",
    rating: 5
  },
  {
    name: "Melissa Covarrubias",
    role: "Local Guide",
    content: "Exceptional Mortgage Broker – Highly Recommended! I had the pleasure of watching Keyan work with clients, and his expertise and dedication are unmatched. He navigates even the most complex loan situations with confidence, ensuring clients feel informed and supported every step of the way. His ability to problem-solve and secure the best terms sets him apart in the industry. No matter how tough the deal, he remains proactive, professional, and committed to finding solutions. His deep knowledge of loan products and market trends makes him a valuable resource for anyone seeking a mortgage. If you need a broker who truly cares and delivers results, Keyan is the one to trust!",
    rating: 5
  },
  {
    name: "Merry Sunny",
    role: "Real Estate Investor",
    content: "Keyan and his team were instrumental in helping us find and close on our first multi single family home deal. They helped source a great lead to an off market listing and helped us secure the right financing options. Throughout the process, they provided clear communication, worked directly with the seller to streamline negotiations, and made sure every step was handled smoothly. Their expertise and dedication made what could have been a stressful experience feel seamless. If you're looking for a team that is knowledgeable, proactive, and truly invested in your success, we would highly recommend working with Keyan and his team!",
    rating: 5
  },
  {
    name: "Xavier Vega",
    role: "Real Estate Investor",
    content: "Lindsay, Chelsea and Keyan are all absolute badasses. I have referred them to absolutely everyone I know because of their punctuality, speed, and great moral. They are the best in the business, and great people with a ton of integrity. Regardless of the purchase, whether you are getting a home to occupy or an investment property they are the people to go through. I have had bad experiences with other lenders in the past but working with these individuals is definitely like a breath of fresh air!",
    rating: 5
  },
  {
    name: "Diane Halfman",
    role: "Real Estate Investor",
    content: "How fortunate I was to have Lindsay of Keyswag Lending to make my investment property process go so smoothly. Lindsay personally walked me through many of the details of the lending process even outside of her scope to help move my loan along, including giving me a heads up on important documents to sign, answering questions and letting me know what to expect so that I could be comfortable in what felt like an intimidating process. She made me feel supported the whole way. I wouldn't use anyone else for lending! What a trusted resource!",
    rating: 5
  },
  {
    name: "Mike Nguyen",
    role: "Real Estate Investor",
    content: "Lindsay helped me with 2 loans. On both occasions she was always there when I had questions and concerns. I will most definitely reach out to her again with my next investment property.",
    rating: 5
  },
  {
    name: "Marvin Crowder Jr",
    role: "Real Estate Investor",
    content: "Michelle was amazing. Great customer service and was on top of all the steps along the way. I'll definitely do business with Key Real Estate Capital again.",
    rating: 5
  },
  {
    name: "Ryan Hill",
    role: "Real Estate Investor",
    content: "Had a great experience with the team. Keyan and Michelle are rockstars! Highly recommend them for any lending needs!",
    rating: 5
  },
  {
    name: "Hassan Alamar",
    role: "Real Estate Investor",
    content: "I had a great experience working with Keyswag Lending. Lindsay and Keyan were awesome—knowledgeable, responsive, and easy to work with. They made the whole process smooth and stress-free, and their turnaround time was faster than I expected. I'd definitely recommend them to anyone looking for a reliable lending partner!",
    rating: 5
  }
]

export function TestimonialsSection({
  title = "Client Testimonials",
  description = "From first-time investors to seasoned vets, we take care of our people.",
  testimonials = defaultTestimonials
}: TestimonialsSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Handle responsive slides
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(3)
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])


  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }

  // Get the testimonials to display based on screen size
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }


  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light mb-2">{description}</p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div className={`flex ${slidesToShow === 1 ? 'justify-center' : 'gap-6'}`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className={slidesToShow === 1 ? "w-full max-w-md" : "flex-1 min-w-0"}
                >
                  <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-[585px] flex flex-col">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 font-light leading-relaxed mb-6 italic flex-grow">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 font-light">{testimonial.role}</div>
                        {testimonial.company && (
                          <div className="text-sm text-gray-500">{testimonial.company}</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}