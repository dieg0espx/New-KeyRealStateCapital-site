"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface HeaderProps {
  isHomePage?: boolean
}

export function Header({ isHomePage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial mobile state
    handleResize()
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const loanTypes = [
    { name: "Fix & Flip", href: "/loan-products/fix-and-flip" },
    { name: "Single Property Rental", href: "/loan-products/single-rental" },
    { name: "New Construction", href: "/loan-products/new-construction" },
    { name: "Rental Portfolio", href: "/loan-products/rental-portfolio" },
    { name: "Bridge", href: "/loan-products/stabilized-bridge" },
    { name: "Multi-Family / Commercial", href: "/loan-products/commercial" },
    // COMMENTED OUT - These are not in the main /loan-products page
    // { name: "Conventional | Primary Loans", href: "/loan-products/single-rental" },
    // { name: "0% Interest Business Funding", href: "/loan-products/commercial" },
  ]

  const moreOptions = [
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: isMobile ? 0 : -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src={isScrolled || !isHomePage || isMobileMenuOpen ? "/logo-white.png" : "/logo-transparent.png"}
                  alt="Key Real Estate Capital"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.4 }}>
              <Link
                href="/"
                className={`transition-colors font-light ${
                  pathname === "/" 
                    ? (isScrolled || !isHomePage || isMobileMenuOpen ? "text-light-green" : "text-white") 
                    : (isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white/90 hover:text-white")
                }`}
              >
                Home
              </Link>
            </motion.div>

            <div className="relative group">
              <button 
                className={`flex items-center transition-colors font-light ${
                  isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white/90 hover:text-white"
                }`}
              >
                Loan Types <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="py-2">
                  {loanTypes.map((type) => (
                    <div key={type.href}>
                      <Link
                        href={type.href}
                        className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-perry transition-colors font-light"
                      >
                        {type.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.4 }}>
              <Link
                href="/team"
                className={`transition-colors font-light ${
                  pathname === "/team" 
                    ? (isScrolled || !isHomePage || isMobileMenuOpen ? "text-light-green" : "text-white") 
                    : (isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white/90 hover:text-white")
                }`}
              >
                About Us
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.4 }}>
              <Link
                href="/calculator"
                className={`transition-colors font-light ${
                  pathname === "/calculator" 
                    ? (isScrolled || !isHomePage || isMobileMenuOpen ? "text-light-green" : "text-white") 
                    : (isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white/90 hover:text-white")
                }`}
              >
                Calculator
              </Link>
            </motion.div>

            {/* More Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center transition-colors font-light ${
                  isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white/90 hover:text-white"
                }`}
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="py-2">
                  {moreOptions.map((option) => (
                    <div key={option.href}>
                      <Link
                        href={option.href}
                        className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-perry transition-colors font-light"
                      >
                        {option.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact">
                <Button className="hidden md:inline-flex font-light transition-all duration-300 bg-light-green hover:bg-perry text-white">
                  Contact
                </Button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className={`md:hidden p-2 transition-colors ${
                isScrolled || !isHomePage || isMobileMenuOpen ? "text-gray-700 hover:text-light-green" : "text-white hover:text-sky-200"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-light-green hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-medium mb-2">Loan Types</div>
                  <div className="pl-4 space-y-1">
                    {loanTypes.map((type, index) => (
                      <motion.div
                        key={type.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <Link
                          href={type.href}
                          className="block py-1 text-gray-600 hover:text-light-green transition-colors font-light text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {type.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/team"
                  className="block px-3 py-2 text-gray-700 hover:text-light-green hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/calculator"
                  className="block px-3 py-2 text-gray-700 hover:text-light-green hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Calculator
                </Link>
              </motion.div>

              {/* More Options */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-medium mb-2">More</div>
                  <div className="pl-4 space-y-1">
                    {moreOptions.map((option, index) => (
                      <motion.div
                        key={option.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        <Link
                          href={option.href}
                          className="block py-1 text-gray-600 hover:text-light-green transition-colors font-light text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {option.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="pt-4 pb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-light-green hover:bg-perry text-white font-light">Contact</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
