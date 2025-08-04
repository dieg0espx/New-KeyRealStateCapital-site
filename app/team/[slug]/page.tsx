import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Calendar, ArrowLeft, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const teamMembers = {
  "john-smith": {
    name: "John Smith",
    title: "CEO & Founder",
    bio: "With over 15 years in real estate finance, John founded Key Real Estate Capital to provide sophisticated lending solutions for investors nationwide. His expertise spans commercial lending, real estate development, and investment strategy.",
    phone: "(555) 123-4567",
    email: "john@keyrec.com",
    image: "/placeholder.svg?height=400&width=400",
    location: "Los Angeles, CA",
    experience: "15+ years",
    specialties: ["Commercial Lending", "Real Estate Development", "Investment Strategy", "Portfolio Management"],
    education: "MBA Finance, UCLA Anderson School of Management",
    licenses: "NMLS #123456",
  },
  "sarah-johnson": {
    name: "Sarah Johnson",
    title: "VP of Lending",
    bio: "Sarah brings 12 years of commercial lending experience, specializing in fix-and-flip and rental property financing. She has originated over $200M in real estate loans and is known for her personalized approach to client service.",
    phone: "(555) 123-4568",
    email: "sarah@keyrec.com",
    image: "/placeholder.svg?height=400&width=400",
    location: "Los Angeles, CA",
    experience: "12+ years",
    specialties: ["Fix-and-Flip Loans", "Rental Property Financing", "DSCR Loans", "Portfolio Lending"],
    education: "BS Finance, USC Marshall School of Business",
    licenses: "NMLS #123457",
  },
  "michael-chen": {
    name: "Michael Chen",
    title: "Senior Loan Officer",
    bio: "Michael specializes in construction and development loans, with extensive experience in project financing and risk assessment. He has successfully funded over $150M in construction projects across California and Florida.",
    phone: "(555) 123-4569",
    email: "michael@keyrec.com",
    image: "/placeholder.svg?height=400&width=400",
    location: "Miami, FL",
    experience: "10+ years",
    specialties: ["Construction Loans", "Development Financing", "Risk Assessment", "Project Management"],
    education: "MS Real Estate Development, University of Miami",
    licenses: "NMLS #123458",
  },
  "lisa-rodriguez": {
    name: "Lisa Rodriguez",
    title: "Portfolio Manager",
    bio: "Lisa manages our rental portfolio financing division, helping investors scale their rental property portfolios efficiently. She has expertise in multi-family financing and has helped clients acquire over $300M in rental properties.",
    phone: "(555) 123-4570",
    email: "lisa@keyrec.com",
    image: "/placeholder.svg?height=400&width=400",
    location: "Los Angeles, CA",
    experience: "8+ years",
    specialties: ["Portfolio Financing", "Multi-Family Loans", "Rental Properties", "Investment Analysis"],
    education: "MBA Real Estate, Pepperdine University",
    licenses: "NMLS #123459",
  },
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers[params.slug as keyof typeof teamMembers]

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/team" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Team
        </Link>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-light text-gray-900 mb-2">{member.name}</h1>
            <p className="text-xl text-sky-600 font-medium mb-6">{member.title}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-sky-600" />
                {member.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-sky-600" />
                {member.experience}
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-sky-600" />
                {member.phone}
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-sky-600" />
                {member.email}
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <Link href="/contact">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white font-light">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href={`tel:${member.phone}`}>
                <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Direct
                </Button>
              </Link>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bio */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About {member.name.split(" ")[0]}</h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">{member.bio}</p>
          </CardContent>
        </Card>

        {/* Specialties & Credentials */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialties</h3>
              <div className="space-y-2">
                {member.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                    {specialty}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Credentials</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Education</h4>
                  <p className="text-gray-600 font-light">{member.education}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Licenses</h4>
                  <p className="text-gray-600 font-light">{member.licenses}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="mt-12 border-0 shadow-lg bg-sky-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Work with {member.name.split(" ")[0]}?
            </h3>
            <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your real estate financing needs and learn how we can help you achieve
              your investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href={`tel:${member.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {member.phone}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
