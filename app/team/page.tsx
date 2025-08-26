import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TeamPage() {
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
      bio: "Lindsay brings 12 years of commercial lending experience, specializing in fix-and-flip and rental property financing.",
      phone: "(555) 123-4568",
      email: "lindsay@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Daniel Frank",
      title: "Senior Vice President",
      bio: "Daniel specializes in construction and development loans, with extensive experience in project financing and risk assessment.",
      phone: "(555) 123-4569",
      email: "daniel@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
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
      name: "Tommy Donuts",
      title: "Chief Technology Officer",
      bio: "Tommy leads our technology initiatives, ensuring our digital platforms provide seamless experiences for our clients.",
      phone: "(555) 123-4571",
      email: "tommy@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bailey Girouard",
      title: "Senior Account Executive",
      bio: "Bailey specializes in helping investors scale their portfolios with creative financing solutions and personalized service.",
      phone: "(555) 123-4572",
      email: "bailey@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sebastian Muendo",
      title: "Account Executive",
      bio: "Sebastian works closely with investors to find the perfect financing solutions for their real estate projects.",
      phone: "(555) 123-4573",
      email: "sebastian@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hazel Wilder",
      title: "Account Executive",
      bio: "Hazel provides expert guidance to investors, helping them navigate the lending process with confidence.",
      phone: "(555) 123-4574",
      email: "hazel@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Frank Estrada",
      title: "Account Executive",
      bio: "Frank brings years of experience in real estate finance, offering tailored solutions for investors at every level.",
      phone: "(555) 123-4575",
      email: "frank@keyrec.com",
      image: "/placeholder.svg?height=300&width=300",
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
              <Card className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white overflow-hidden flex flex-col h-full">
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
    </div>
  )
}
