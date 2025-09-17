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
    // Leadership Team
    {
      name: "Keyan Chang",
      title: "Founder & CEO",
      bio: "With extensive experience in real estate lending and investment, Keyan is an entrepreneur passionate about helping people unlock opportunities and grow their portfolios. In addition to founding Key Real Estate Capital, he personally owns and manages over 100+ properties, giving him a unique perspective as both lender and investor. He specializes in creative financing solutions—ranging from fix-and-flip loans to DSCR and micro-loans—always with a focus on speed, transparency, and long-term relationships. Keyan also founded InvestWithKey, an educational platform that teaches investors proven strategies like BRRRR, Airbnb, and creative financing to accelerate wealth building.",
      phone: "(619) 649-6933",
      email: "keyan@keyrealestatecapital.com",
      image: "/team/keyan.png",
    },
    {
      name: "Lindsay Milano",
      title: "President",
      bio: "A Boston native now based in Miami, Lindsay Milano brings over 7 years of expertise in the private lending space. She combines deep industry knowledge with a hands-on approach, guiding clients through every step of the lending process with clarity and care. Lindsay is passionate about building strong relationships, delivering tailored financing solutions, and helping real estate investors achieve lasting success. Her well-rounded background ensures clients benefit from both strategic insight and seamless execution.",
      phone: "(619) 649-6933",
      email: "lindsay@keyrealestatecapital.com",
      image: "/team/lindsayMilano.png",
    },
    {
      name: "Daniel Frank",
      title: "Senior Vice President",
      bio: "With nearly a decade of experience in private capital lending and real estate investment, Daniel is a relationship-focused professional dedicated to helping his clients achieve lasting success. His mission goes beyond closing loans; it's about building partnerships and empowering investors with sound advice, streamlined processes and the best possible terms on every deal. Outside of work, Daniel enjoys paddle boarding, live music, and exploring the outdoors with his dog, Sukhi.",
      phone: "(555) 123-4569",
      email: "daniel@keyrealestatecapital.com",
      image: "/team/danielFrank.jpeg",
    },
    {
      name: "Nicole LaVau",
      title: "Vice President",
      bio: "Nicole LaVau's seasoned background in finance has positioned her as a trusted ally in the hard money real estate sector, where she not only delivers expertise but fosters trust and client relationships focused on mutual prosperity. She is dedicated to providing her clients with personalized support at every stage of the process whether they're seasoned investors or first-time borrowers.\n\nNicole's roots in sales and customer service have instilled in her an unwavering commitment to client satisfaction. She treats every borrower at Key Real Estate Capital like a partner, meaning she'll go above and beyond to ensure that they not only achieve their financial goals but do so with confidence and peace of mind.\n\nWhen she steps away from the closing table, Nicole enjoys a fulfilling personal life as a loving mother, devoted wife, sister, and friend. Aside from helping her partners build an abundant life, her other passion is creating music. She uses her voice & her words as a conduit to convey emotions and offer perspective on the human experience we all share. This passion for music reflects her belief in the power of connection, whether through the melodies she creates or the financial partnerships she's nurturing.",
      phone: "(661) 406-2529",
      email: "nicole@keyrealestatecapital.com",
      image: "/team/nicoleLaVau.jpeg",
    },
    {
      name: "Tommy Loutzenheiser",
      title: "Chief Technology Officer",
      bio: "Tommy drives growth at Key Real Estate Capital by blending strategic lending knowledge with efficient technology integration and automation. His work focuses on building marketing systems, streamlining workflows, and creating messaging that converts—helping the company scale efficiently while facilitating smooth deal flow. By combining tech with clear communication, Tommy ensures Key Real Estate Capital operates at its highest level. Away from work, Tommy enjoys surfing, hitting the gym and spending time outdoors.",
      phone: "(619) 649-6933",
      email: "tommy@keyrealestatecapital.com",
      image: "/team/tommyLoutzenheiser.png",
    },
    // Senior Account Executives (alphabetical by last name)
    {
      name: "Raj Vora",
      title: "Senior Account Executive",
      bio: "Raj Vora is a versatile professional who has successfully transitioned from leadership in the alternative healthcare industry to the realm of hard money lending in real estate. With a strong background in business management and client relations, Raj brings a wealth of experience and expertise to his position at Key Real Estate Capital.\n\nDriven by his passion for real estate investing and a deep commitment to community service, Raj is dedicated to providing innovative and reliable lending solutions to real estate investors and developers. His unique perspective, honed through years in alternative healthcare, allows him to offer personalized and tailored financing options that cater to the specific needs of his clients.\n\nRaj's core values of integrity, transparency, and exceptional customer service set him apart in the competitive landscape of hard money lending. His goal is to establish enduring relationships with his clients, guiding them towards success in their real estate ventures with confidence and ease. With a fresh outlook, strong business acumen, and a genuine desire to help others succeed, Raj Vora is making a significant impact in the world of hard money lending.\n\nIn his personal time, Raj enjoys creating a fulfilling life with his girlfriend and their beloved goldendoodle, Biscuit. Together, they embrace new adventures, cherish lasting memories, and prioritize the simple joys of everyday life. Raj's commitment to fostering strong relationships extends beyond his professional endeavors, emphasizing the importance of balance, connection, and happiness in all aspects of his life.",
      phone: "(409) 651-9491",
      email: "raj@keyrealestatecapital.com",
      image: "/team/rajVora.jpeg",
    },
    // Account Executives (alphabetical by last name)
    {
      name: "Paulo Bermudez",
      title: "Account Executive",
      bio: "With a background spanning military service, aviation mechanics, and over half a decade in real estate investing, Paulo brings discipline, precision, and real-world experience to the world of private capital lending. At Xoan Capital, he is committed to helping investors secure the funding they need with speed, transparency, and terms that make sense. His approach is simple: build trust, deliver results, and create lasting relationships that fuel long-term success.\n\nOutside of lending, Paulo is a dedicated family man who enjoys travel, weight training, building homes, and expanding his portfolio of rental properties.",
      phone: "(619) 751-4972",
      email: "paulo@keyrealestatecapital.com",
      image: "/team/pauloBermudez.png",
    },
    {
      name: "Frank Estrada",
      title: "Account Executive",
      bio: "With over a decade in fintech and lending, Frank has built a reputation for partnerships that made capital more accessible for small businesses. Now, he applies that same expertise to real estate, bringing a technical eye to property financing and long-term value for entrepreneurs. At Key Real Estate Capital, Frank is committed to making financing simple, transparent, and relationship-driven—fueled by the same dedication he brings to his family.",
      phone: "(555) 123-4575",
      email: "frank@keyrealestatecapital.com",
      image: "/team/frankEstrada.PNG",
    },
    {
      name: "Jorge Florez",
      title: "Account Executive",
      bio: "Jorge Florez is a dedicated real estate lender in Broward County, Florida, with two years of experience helping individuals and families achieve their homeownership and investment goals.\n\nWith a strong background in customer service spanning nine years, Jorge is committed to providing a seamless and stress-free lending process.\n\nFluent in both English and Spanish, specializes in guiding a diverse range of clients through every step of their financing journey, ensuring they feel confident and informed from application to closing.",
      phone: "(954) 736-6867",
      email: "jorge@keyrealestatecapital.com",
      image: "/team/jorgeFlores.png",
    },
    {
      name: "Chelsea Juda",
      title: "Operations Manager",
      bio: "Chelsea spent nearly a decade in corporate program management before moving into property management operations, building her career around driving efficiency and creating meaningful client experiences. Today she applies her operations expertise to the mortgage and private capital lending industry, managing client relationships while also overseeing operational processes that ensure a seamless experience. Based in San Diego, she enjoys yoga, customizing travel getaways for private clients, and adventures with her dog, Bodie.",
      phone: "(716) 949-5116",
      email: "chelsea@keyrealestatecapital.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alex Kryukov",
      title: "Account Executive",
      bio: "With over a decade of experience in the business financing industry, Alex brings a wealth of knowledge and a strategic approach to every deal. Since 2014, he has worked in business and asset based funding, helping businesses secure the capital they need to grow and thrive.\n\nOver the past two years, Alex has specialized in underwriting and structuring real estate transactions and helping investors navigate and get favorable terms from private and institutional funders.\n\nAt the core of Alex's professional philosophy are two key strengths: rigorous underwriting and the ability to build and maintain strong, trust-based relationships.",
      phone: "(303) 392-2012",
      email: "alex@keyrealestatecapital.com",
      image: "/team/alex.png",
    },
    {
      name: "Adam Lucart",
      title: "Account Executive",
      bio: "Meet Adam Lucart. His seasoned background in the financial industry as a series 7 and 66 licensed investment advisor has positioned him as a trusted ally in the hard money real estate sector, where he not only delivers expertise but fosters trust and client relationships focused on mutual prosperity. He is dedicated to providing his clients with personalized support at every stage of the process whether they're seasoned investors or first-time borrowers.\n\nDriven by his passion for real estate investing, Adam is dedicated to providing innovative and reliable lending solutions to real estate investors and developers. His unique perspective, honed through 14 years in investment real estate, allows him to offer personalized and tailored financing options that cater to the specific needs of his clients.",
      phone: "(940) 765-2015",
      email: "adam@keyrealestatecapital.com",
      image: "/team/adamLucart.jpeg",
    },
    {
      name: "Jennifer Myers",
      title: "Account Executive",
      bio: "As a dedicated professional in the field of hard money lending, Jennifer Myers brings a deep passion for helping individuals achieve their goals and navigate their financial journeys. With a background as a licensed therapist managing her own private practice, she has honed skills in connecting people with the support and resources they need. This experience has fueled her desire to broaden her impact by exploring new modalities of assistance.\n\nShe is committed to offering personalized and effective solutions, drawing from her extensive experience in understanding and addressing diverse needs. Jennifer's enthusiasm for helping others is matched by her love for nature and an active lifestyle, which keeps her grounded and energized. As a lifelong seeker of wisdom, she is continually expanding her knowledge through reading and exploring spiritual development, which enriches her approach to both personal and professional growth.\n\nIn her role as a hard money loan officer, she leverages her background in therapy to provide compassionate, insightful, and practical support to clients as they navigate their financial opportunities and challenges.",
      phone: "(561) 254-8033",
      email: "jen@keyrealestatecapital.com",
      image: "/team/jenniferMayers.png",
    },
    {
      name: "Sebastian Muenda",
      title: "Account Executive",
      bio: "At Key Real Estate Capital, Sebastian blends his passion for financial empowerment with a client-first philosophy rooted in empathy, overdelivering, and unwavering commitment. He believes that clear communication and affordable financing solutions are the foundation for helping individuals and families achieve true financial freedom. Sebastian cares deeply about people growing their wealth, not just for the sake of money, but to create a life filled with more time, joy, and connection with loved ones.",
      phone: "(555) 123-4573",
      email: "sebastian@keyrealestatecapital.com",
      image: "/team/Sebastian Muenda headshot.png",
    },
    {
      name: "Trey Victor",
      title: "Account Executive",
      bio: "Trey Victor is a leading figure in real estate investment financing, distinguished by his blend of confidence, discipline, and integrity. With a reputation for excellence, he crafts innovative financial solutions tailored to each investor's unique needs. Trey's meticulous attention to detail and unwavering work ethic set him apart, as does his commitment to building long-term relationships based on trust and ethical practices. Navigating the complexities of real estate with finesse, Trey offers sharp, insightful strategies that reflect his deep market understanding. He's the go-to partner for investors who seek not just optimal outcomes, but a trusted advisor who delivers with both precision and a personal touch. Outside of his professional pursuits, Trey is an accomplished artist and devoted single father of two boys. His passions for painting and gardening further enrich his life, reflecting a balanced and well-rounded approach that mirrors his commitment to excellence and personal integrity in his professional endeavors.",
      phone: "(925) 483-1415",
      email: "trey@keyrealestatecapital.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Wencelblat",
      title: "Account Executive",
      bio: "With a strong background in real estate, Emily brings deep market knowledge and a client-first focus to hard money lending. At Key Real Estate Capital, she specializes in structuring loans that allow investors to move quickly and confidently on opportunities. Bilingual and detail-oriented, Emily ensures the lending process is transparent, efficient, and tailored to each client's goals—delivering smooth closings and lasting relationships.",
      phone: "(561) 350-7327",
      email: "emily@keyrealestatecapital.com",
      image: "/team/emily.jpeg",
    },
    {
      name: "Hazel Wilder",
      title: "Account Executive",
      bio: "I help people make smart moves in real estate with the right financing—whether it's a first home, a refinance, or building an investment portfolio. As a licensed Loan Originator, I offer both traditional and creative options like DSCR, fix & flip, and bridge loans. My background in case management and real estate investing taught me the value of clear, honest communication. I aim to make lending simple, transparent, and partnership-driven.",
      phone: "(555) 123-4574",
      email: "hazel@keyrealestatecapital.com",
      image: "/team/hazelWilder.jpeg",
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
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      member.name === "Tommy Loutzenheiser" 
                        ? "object-top scale-150" 
                        : member.name === "Lindsay Milano"
                        ? "object-center"
                        : member.name === "Keyan Chang"
                        ? "object-top scale-[2.5] transform translate-x-6 translate-y-40"
                        : member.name === "Raj Vora"
                        ? "object-top scale-125 transform translate-y-8"
                        : member.name === "Jorge Florez"
                        ? "object-center scale-110 transform translate-y-4"
                        : member.name === "Jennifer Myers"
                        ? "object-center scale-125"
                        : member.name === "Nicole LaVau"
                        ? "object-center scale-150 transform translate-x-4 translate-y-12"
                        : member.name === "Daniel Frank"
                        ? "object-center scale-125 transform translate-y-8"
                        : member.name === "Paulo Bermudez"
                        ? "object-[50%_30%] transform translate"
                        : member.name === "Frank Estrada"
                        ? "object-[50%_0%] scale-[2] transform translate-x-12 translate-y-20"
                        : member.name === "Alex Kryukov"
                        ? "object-[50%_0%] scale-150 transform translate-y-12"
                        : "object-top"
                    }`}
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
