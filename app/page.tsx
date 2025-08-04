"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Building, Hammer, TrendingUp, MapPin, Star, ChevronDown, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { LoanCalculator } from "@/components/loan-calculator"
import Link from "next/link"
import { Gradient } from "@/components/gradient"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Gradient direction="bottom">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dku1gnuat/video/upload/v1754308818/Untitled_design_fsosaf.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Luxury Real Estate
            <br />
            <span className="text-sky-200">Capital Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Empowering your real estate investments with sophisticated financing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/loan-products">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4 text-lg">
                Explore Loan Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-light px-8 py-4 text-lg bg-transparent"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/70" />
        </div>
      </section>
      </Gradient>

      {/* Loan Products */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Loan Products</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Comprehensive financing solutions tailored to your real estate investment strategy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer className="h-8 w-8" />,
                title: "Fix-and-Flip",
                description: "Short-term financing for property renovation and resale projects",
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Single Property Rental",
                description: "Financing for individual rental property acquisitions",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "New Construction",
                description: "Construction loans for ground-up development projects",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Rental Portfolio",
                description: "Portfolio financing for multiple rental properties",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Stabilized Bridge",
                description: "Bridge financing for stabilized income-producing properties",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Multi-Family / Commercial",
                description: "Financing for larger multi-family and commercial properties",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white"
              >
                <CardContent className="p-8">
                  <div className="text-sky-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{product.description}</p>
                  <Link href="/loan-products/fix-and-flip">
                    <Button variant="ghost" className="mt-4 p-0 text-sky-600 hover:text-sky-700 font-light">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Loans Funded" },
              { number: "1,200+", label: "Clients Served" },
              { number: "15", label: "States Covered" },
              { number: "10+", label: "Years in Business" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-light text-sky-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-light text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600 font-light">What our clients say about working with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Real Estate Investor",
                content:
                  "Key Real Estate Capital made our fix-and-flip project seamless. Their expertise and quick turnaround time were exactly what we needed.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Property Developer",
                content:
                  "Outstanding service and competitive rates. They understood our vision and provided the perfect financing solution for our multi-family project.",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                role: "Portfolio Investor",
                content:
                  "Professional, reliable, and always available when we need them. Key Real Estate Capital has been instrumental in growing our rental portfolio.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 font-light">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Key */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Why Choose Key</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Our mission is to provide sophisticated, reliable financing solutions that empower your real estate
              success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Expertise",
                description: "Deep market knowledge and industry experience",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Speed",
                description: "Quick decisions and fast funding timelines",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Service",
                description: "Personalized attention and dedicated support",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Solutions",
                description: "Flexible financing tailored to your needs",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-sky-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <Gradient direction="top">
        <Gradient direction="bottom">
          <section className="py-[200px] bg-sky-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Calculate Your Loan</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Get an instant estimate of your monthly payments and total costs with our interactive loan calculator
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Calculator */}
            <div className="order-2 lg:order-1">
              <LoanCalculator />
            </div>
            
            {/* Benefits & Features */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-white p-8  shadow-lg border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Why Use Our Calculator?</h3>
                <div className="space-y-4">
                  {[
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
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 font-light text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-sky-600 p-8  text-white">
                <h3 className="text-2xl font-light mb-6">Ready to Apply?</h3>
                <p className="text-sky-100 font-light mb-6">
                  Our loan officers are ready to help you get pre-qualified and find the perfect financing solution for your real estate investment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sky-100">
                    <div className="w-2 h-2 bg-sky-200 rounded-full mr-3"></div>
                    <span className="font-light">Quick 7-14 day closings</span>
                  </div>
                  <div className="flex items-center text-sky-100">
                    <div className="w-2 h-2 bg-sky-200 rounded-full mr-3"></div>
                    <span className="font-light">Competitive rates starting at 6.5%</span>
                  </div>
                  <div className="flex items-center text-sky-100">
                    <div className="w-2 h-2 bg-sky-200 rounded-full mr-3"></div>
                    <span className="font-light">Loans up to $20M available</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-block mt-6">
                  <Button className="bg-white text-sky-600 hover:bg-gray-100 font-light px-6 py-3">
                    Speak with a Loan Officer
                  </Button>
                </Link>
              </div>
            </div>
              </div>

              {/* Additional Info */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                    <span>No application fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                    <span>Pre-qualification in 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mr-2"></div>
                    <span>15 states covered</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Gradient>
      </Gradient>

    

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600 font-light">
              Stay informed with our latest market insights and investment strategies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2024 Real Estate Market Outlook",
                excerpt: "Key trends and opportunities for real estate investors in the coming year.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Fix-and-Flip Success Strategies",
                excerpt: "Essential tips for maximizing returns on your renovation projects.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Portfolio Diversification Guide",
                excerpt: "How to build a balanced real estate investment portfolio.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">{post.excerpt}</p>
                  <Link href="/blog/2024-market-outlook">
                    <Button variant="ghost" className="mt-4 p-0 text-sky-600 hover:text-sky-700 font-light">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 font-light mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help finance your next real estate investment opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 font-light px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/loan-products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sky-600 font-light px-8 py-4 text-lg bg-transparent"
              >
                View Loan Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
