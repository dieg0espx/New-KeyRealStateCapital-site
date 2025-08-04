"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const loanProducts = [
    { name: "Fix-and-Flip", href: "/loan-products/fix-and-flip" },
    { name: "Single Property Rental", href: "/loan-products/single-rental" },
    { name: "New Construction", href: "/loan-products/new-construction" },
    { name: "Rental Portfolio", href: "/loan-products/rental-portfolio" },
    { name: "Stabilized Bridge", href: "/loan-products/stabilized-bridge" },
    { name: "Multi-Family / Commercial", href: "/loan-products/commercial" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light text-gray-900 hover:text-sky-600 transition-colors">
              Key Real Estate Capital
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors font-light ${
                pathname === "/" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-sky-600 transition-colors font-light">
                Loan Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {loanProducts.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/team"
              className={`transition-colors font-light ${
                pathname === "/team" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
              }`}
            >
              Team
            </Link>
            <Link
              href="/faq"
              className={`transition-colors font-light ${
                pathname === "/faq" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className={`transition-colors font-light ${
                pathname === "/blog" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-light ${
                pathname === "/contact" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button className="hidden md:inline-flex bg-sky-600 hover:bg-sky-700 text-white font-light">
                Get Started
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-sky-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-3 py-2">
              <div className="text-gray-700 font-medium mb-2">Loan Products</div>
              <div className="pl-4 space-y-1">
                {loanProducts.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block py-1 text-gray-600 hover:text-sky-600 transition-colors font-light text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/team"
              className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 pb-2">
              <Link href="/contact">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
