"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAnimationControl } from "@/hooks/use-mobile"

export default function TeamPage() {
  const { shouldAnimate } = useAnimationControl()

  const teamMembers = [
    {
      name: "David Thompson",
      title: "CEO & Founder",
      bio: "David has over 15 years of experience in real estate finance, having funded over $500M in loans across residential and commercial properties.",
      phone: "(555) 123-4567",
      email: "david@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      title: "VP of Lending",
      bio: "Sarah brings 12 years of commercial lending experience, specializing in fix-and-flip and rental property financing.",
      phone: "(555) 123-4568",
      email: "sarah@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      title: "Senior Loan Officer",
      bio: "Michael specializes in construction and development loans, with extensive experience in project financing and risk assessment.",
      phone: "(555) 123-4569",
      email: "michael@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lisa Rodriguez",
      title: "Portfolio Manager",
      bio: "Lisa manages our rental portfolio financing division, helping investors scale their rental property portfolios efficiently.",
      phone: "(555) 123-4570",
      email: "lisa@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center mb-16 ${shouldAnimate() ? 'animate-fade-in-up' : ''}`}>
          <h1 className={`text-4xl md:text-5xl font-light text-gray-900 mb-6 ${shouldAnimate() ? 'animate-fade-in-up-delay-1' : ''}`}>
            Our Team
          </h1>
          <p className={`text-xl text-gray-600 font-light max-w-3xl mx-auto ${shouldAnimate() ? 'animate-fade-in-up-delay-2' : ''}`}>
            Meet the experienced professionals dedicated to your real estate financing success
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${shouldAnimate() ? 'animate-fade-in-up-delay-3' : ''}`}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${shouldAnimate() ? `animate-fade-in-up-delay-${4 + index} hover:transform hover:-translate-y-2 transition-all duration-300` : ''}`}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden flex flex-col h-full">
                <div className="aspect-square overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm line-clamp-4">{member.bio}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm group-hover:translate-x-1 transition-transform duration-200">
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm group-hover:translate-x-1 transition-transform duration-200">
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-auto">
                    <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                      <Link href="/contact">
                        <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white font-light flex-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Call
                        </Button>
                      </Link>
                    </div>
                    <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
