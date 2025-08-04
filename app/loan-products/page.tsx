import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Building,
  Hammer,
  TrendingUp,
  MapPin,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function LoanProductsPage() {
  const loanProducts = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Fix-and-Flip",
      description: "Short-term financing for property renovation and resale projects",
      features: ["Up to $2M loan amounts", "6-18 month terms", "Interest-only payments", "Fast 7-14 day closings"],
      loanRange: "$100K - $2M",
      term: "6-18 months",
      rate: "Starting at 8.5%",
      href: "/loan-products/fix-and-flip",
      popular: true,
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Single Property Rental",
      description: "Financing for individual rental property acquisitions",
      features: ["Up to 80% LTV", "30-year amortization", "Competitive rates", "Cash-out refinancing available"],
      loanRange: "$75K - $1.5M",
      term: "30 years",
      rate: "Starting at 7.25%",
      href: "/loan-products/single-rental",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "New Construction",
      description: "Construction loans for ground-up development projects",
      features: [
        "Interest-only during construction",
        "Flexible draw schedule",
        "Convert to permanent financing",
        "Up to 80% LTC",
      ],
      loanRange: "$200K - $5M",
      term: "12-24 months",
      rate: "Starting at 9.0%",
      href: "/loan-products/new-construction",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Rental Portfolio",
      description: "Portfolio financing for multiple rental properties",
      features: [
        "Cross-collateralized loans",
        "Blanket financing options",
        "Portfolio cash-out refinancing",
        "Streamlined underwriting",
      ],
      loanRange: "$500K - $10M",
      term: "5-30 years",
      rate: "Starting at 7.5%",
      href: "/loan-products/rental-portfolio",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Stabilized Bridge",
      description: "Bridge financing for stabilized income-producing properties",
      features: ["Interest-only payments", "Quick closings", "Up to 75% LTV", "12-36 month terms"],
      loanRange: "$250K - $3M",
      term: "12-36 months",
      rate: "Starting at 8.0%",
      href: "/loan-products/stabilized-bridge",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Multi-Family / Commercial",
      description: "Financing for larger multi-family and commercial properties",
      features: ["Up to $20M loan amounts", "Competitive rates", "Flexible terms", "Experienced underwriting team"],
      loanRange: "$1M - $20M",
      term: "5-30 years",
      rate: "Starting at 7.0%",
      href: "/loan-products/commercial",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">Loan Products</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-8">
            Comprehensive financing solutions tailored to your real estate investment strategy and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-light px-8 py-4">
                Get Pre-Qualified
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-50 font-light px-8 py-4 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-sky-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">{product.description}</p>

                  {/* Loan Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Loan Range:</span>
                      <span className="font-medium text-gray-900">{product.loanRange}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Term:</span>
                      <span className="font-medium text-gray-900">{product.term}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-sky-600">{product.rate}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-sky-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href={product.href}>
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light group-hover:bg-sky-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Loans */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Why Choose Our Loans</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              We provide more than just financing - we're your partner in real estate success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Closings",
                description: "Close in as little as 7-14 days with our streamlined process",
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Competitive Rates",
                description: "Market-leading rates with flexible terms to fit your strategy",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Team",
                description: "Dedicated loan officers with deep real estate expertise",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Flexible Terms",
                description: "Customized loan structures to match your investment goals",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-sky-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 font-light mb-8 max-w-2xl mx-auto">
            Let's discuss which loan product is the perfect fit for your next real estate investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 font-light px-8 py-4 text-lg">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sky-600 font-light px-8 py-4 text-lg bg-transparent"
              >
                Schedule Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
