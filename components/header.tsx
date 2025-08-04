"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAnimationControl } from "@/hooks/use-mobile"

interface HeaderProps {
  isHomePage?: boolean
}

export function Header({ isHomePage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { disableOnMobile, shouldAnimate } = useAnimationControl()

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

  const navAnimationProps = disableOnMobile({
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.8 }
  })

  const logoAnimationProps = disableOnMobile({
    whileHover: { scale: 1.03 },
    transition: { duration: 0.4 }
  })

  const linkAnimationProps = disableOnMobile({
    whileHover: { y: -1 },
    transition: { duration: 0.4 }
  })

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
      {...navAnimationProps}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div {...logoAnimationProps}>
              <Link href="/" className={`text-2xl font-light transition-colors ${
                isScrolled || !isHomePage ? "text-gray-900 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}>
                Key Real Estate Capital
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div {...linkAnimationProps}>
              <Link
                href="/"
                className={`transition-colors font-light ${
                  pathname === "/" 
                    ? (isScrolled || !isHomePage ? "text-sky-600" : "text-white") 
                    : (isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white")
                }`}
              >
                Home
              </Link>
            </motion.div>

            <div className="relative group">
              <button 
                className={`flex items-center transition-colors font-light ${
                  isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white"
                }`}
              >
                Loan Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <div className="py-2">
                  {loanProducts.map((product) => (
                    <div key={product.href}>
                      <Link
                        href={product.href}
                        className="block px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                      >
                        {product.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div {...linkAnimationProps}>
              <Link
                href="/team"
                className={`transition-colors font-light ${
                  pathname === "/team" 
                    ? (isScrolled || !isHomePage ? "text-sky-600" : "text-white") 
                    : (isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white")
                }`}
              >
                Team
              </Link>
            </motion.div>
            <motion.div {...linkAnimationProps}>
              <Link
                href="/faq"
                className={`transition-colors font-light ${
                  pathname === "/faq" 
                    ? (isScrolled || !isHomePage ? "text-sky-600" : "text-white") 
                    : (isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white")
                }`}
              >
                FAQ
              </Link>
            </motion.div>
            <motion.div {...linkAnimationProps}>
              <Link
                href="/blog"
                className={`transition-colors font-light ${
                  pathname === "/blog" 
                    ? (isScrolled || !isHomePage ? "text-sky-600" : "text-white") 
                    : (isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white")
                }`}
              >
                Blog
              </Link>
            </motion.div>
            <motion.div {...linkAnimationProps}>
              <Link
                href="/contact"
                className={`transition-colors font-light ${
                  pathname === "/contact" 
                    ? (isScrolled || !isHomePage ? "text-sky-600" : "text-white") 
                    : (isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white/90 hover:text-white")
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              {...disableOnMobile({
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.98 }
              })}
            >
              <Link href="/contact">
                <Button className="hidden md:inline-flex font-light transition-all duration-300 bg-sky-600 hover:bg-sky-700 text-white">
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className={`md:hidden p-2 transition-colors ${
                isScrolled || !isHomePage ? "text-gray-700 hover:text-sky-600" : "text-white hover:text-sky-200"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              {...disableOnMobile({
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 }
              })}
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
            {...disableOnMobile({
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.3 }
            })}
          >
            <div className="px-4 py-2 space-y-1">
              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1 }
                })}
              >
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 }
                })}
              >
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-medium mb-2">Loan Products</div>
                  <div className="pl-4 space-y-1">
                    {loanProducts.map((product, index) => (
                      <motion.div
                        key={product.href}
                        {...disableOnMobile({
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: 0.3 + index * 0.05 }
                        })}
                      >
                        <Link
                          href={product.href}
                          className="block py-1 text-gray-600 hover:text-sky-600 transition-colors font-light text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.4 }
                })}
              >
                <Link
                  href="/team"
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </motion.div>
              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.5 }
                })}
              >
                <Link
                  href="/faq"
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.6 }
                })}
              >
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div
                {...disableOnMobile({
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.7 }
                })}
              >
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div 
                className="pt-4 pb-2"
                {...disableOnMobile({
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8 }
                })}
              >
                <Link href="/contact">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-light">Get Started</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
