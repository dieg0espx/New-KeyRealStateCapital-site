import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to discuss your real estate financing needs? Our team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-gray-900">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600"
                  placeholder="(619) 567-1385"
                />
              </div>

              <div>
                <Label htmlFor="loanType" className="text-gray-700 font-medium">
                  Loan Type of Interest
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600">
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fix-flip">Fix-and-Flip</SelectItem>
                    <SelectItem value="rental">Single Property Rental</SelectItem>
                    <SelectItem value="construction">New Construction</SelectItem>
                    <SelectItem value="portfolio">Rental Portfolio</SelectItem>
                    <SelectItem value="bridge">Stabilized Bridge</SelectItem>
                    <SelectItem value="commercial">Multi-Family / Commercial</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="loanAmount" className="text-gray-700 font-medium">
                  Estimated Loan Amount
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600">
                    <SelectValue placeholder="Select amount range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100k">$100K - $250K</SelectItem>
                    <SelectItem value="250k">$250K - $500K</SelectItem>
                    <SelectItem value="500k">$500K - $1M</SelectItem>
                    <SelectItem value="1m">$1M - $2M</SelectItem>
                    <SelectItem value="2m">$2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline" className="text-gray-700 font-medium">
                  Timeline
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600">
                    <SelectValue placeholder="When do you need funding?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="30days">Within 30 days</SelectItem>
                    <SelectItem value="60days">Within 60 days</SelectItem>
                    <SelectItem value="90days">Within 90 days</SelectItem>
                    <SelectItem value="exploring">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="mt-2 border-gray-200 focus:border-sky-600 focus:ring-sky-600 min-h-[120px]"
                  placeholder="Tell us about your project and financing needs..."
                />
              </div>

              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light py-3 text-lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Location</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">San Diego Headquarters</h4>
                      <p className="text-gray-600 font-light mt-1">
                        401 W A St Ste 200
                        <br />
                        San Diego, CA 92101
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">(619) 567-1385</div>
                      <div className="text-gray-600 font-light text-sm">Main line</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">loans@keyrealestatecapital.com</div>
                      <div className="text-gray-600 font-light text-sm">General inquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-sky-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">24/7 Service | Monday - Sunday</div>
                      <div className="text-gray-600 font-light text-sm">Always available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-sky-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 font-light mb-6">
                  Schedule a call with one of our loan specialists to discuss your project in detail.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Call
                    </Button>
                  </Link>
                  <Link href="tel:(619) 567-1385">
                    <Button
                      variant="outline"
                      className="w-full border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
