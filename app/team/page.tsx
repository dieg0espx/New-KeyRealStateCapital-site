"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TeamMemberModal } from "@/components/team-member-modal"
import { useState } from "react"

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const teamMembers = [
    {
      name: "Keyan Chang",
      title: "Founder & CEO",
      bio: "With over 15 years in real estate finance, Keyan founded Key Real Estate Capital to provide sophisticated lending solutions for investors nationwide.",
      phone: "(555) 123-4567",
      email: "keyan@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lindsay Milano",
      title: "President",
      bio: "A Boston native now based in Miami, Lindsay Milano brings over 7 years of expertise in the private lending space. She combines deep industry knowledge with a hands-on approach, guiding clients through every step of the lending process with clarity and care. Lindsay is passionate about building strong relationships, delivering tailored financing solutions, and helping real estate investors achieve lasting success. Her well-rounded background ensures clients benefit from both strategic insight and seamless execution.",
      phone: "(555) 123-4568",
      email: "lindsay@keyrec.com",
      image: "/team/lindsayMilano.png",
    },
    {
      name: "Daniel Frank",
      title: "Senior Vice President",
      bio: "With nearly a decade of experience in private capital lending and real estate investment, Daniel is a relationship-focused professional dedicated to helping his clients achieve lasting success. His mission goes beyond closing loans; it's about building partnerships and empowering investors with sound advice, streamlined processes and the best possible terms on every deal. Outside of work, Daniel enjoys paddle boarding, live music, and exploring the outdoors with his dog, Sukhi.",
      phone: "(555) 123-4569",
      email: "daniel@keyrec.com",
      image: "/team/danielFrank.jpeg",
    },
    {
      name: "Michelle Gusov",
      title: "Lead Processor",
      bio: "Michelle manages our loan processing division, ensuring smooth and efficient loan closings for all our clients.",
      phone: "(555) 123-4570",
      email: "michelle@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Tommy Loutzenheiser",
      title: "Chief Technology Officer",
      bio: "Tommy drives growth at Key Real Estate Capital by blending strategic lending knowledge with efficient technology integration and automation. His work focuses on building marketing systems, streamlining workflows, and creating messaging that converts—helping the company scale efficiently while facilitating smooth deal flow. By combining tech with clear communication, Tommy ensures Key Real Estate Capital operates at its highest level. Away from work, Tommy enjoys surfing, hitting the gym and spending time outdoors.",
      phone: "(555) 123-4571",
      email: "tommy@keyrec.com",
      image: "/team/tommyLoutzenheiser.jpeg",
    },

    {
      name: "Sebastian Muendo",
      title: "Account Executive",
      bio: "At Key Real Estate Capital, Sebastian blends his passion for financial empowerment with a client-first philosophy rooted in empathy, overdelivering, and unwavering commitment. He believes that clear communication and affordable financing solutions are the foundation for helping individuals and families achieve true financial freedom. Sebastian cares deeply about people growing their wealth, not just for the sake of money, but to create a life filled with more time, joy, and connection with loved ones.",
      phone: "(555) 123-4573",
      email: "sebastian@keyrec.com",
      image: "/team/Sebastian Muenda headshot.png",
    },
    {
      name: "Hazel Wilder",
      title: "Account Executive",
      bio: "I help people make smart moves in real estate with the right financing—whether it's a first home, a refinance, or building an investment portfolio. As a licensed Loan Originator, I offer both traditional and creative options like DSCR, fix & flip, and bridge loans. My background in case management and real estate investing taught me the value of clear, honest communication. I aim to make lending simple, transparent, and partnership-driven.",
      phone: "(555) 123-4574",
      email: "hazel@keyrec.com",
      image: "/team/hazelWilder.jpeg",
    },
    {
      name: "Frank Estrada",
      title: "Account Executive",
      bio: "With over a decade in fintech and lending, Frank has built a reputation for partnerships that made capital more accessible for small businesses. Now, he applies that same expertise to real estate, bringing a technical eye to property financing and long-term value for entrepreneurs. At Key Real Estate Capital, Frank is committed to making financing simple, transparent, and relationship-driven—fueled by the same dedication he brings to his family.",
      phone: "(555) 123-4575",
      email: "frank@keyrec.com",
      image: "/team/frankEstrada.PNG",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 animate-fade-in-up-delay-1">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto animate-fade-in-up-delay-2">
            Meet the experienced professionals dedicated to your real estate success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up-delay-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${4 + index} hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              <Card 
                className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => {
                  setSelectedMember(member)
                  setIsModalOpen(true)
                }}
              >
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
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-light-green font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm line-clamp-4">
                      {member.bio}
                    </p>
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
                        <Button size="sm" className="bg-light-green hover:bg-perry text-white font-light flex-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book a Call
                        </Button>
                      </Link>
                    </div>
                    <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-light-green text-light-green hover:bg-perry/50 bg-transparent"
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
      
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedMember(null)
        }}
      />
    </div>
  )
}
