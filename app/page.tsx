"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { LoanProductsSection } from "@/components/loan-products-section"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhereWeLendSection } from "@/components/where-we-lend-section"
import { LoanCalculatorSection } from "@/components/loan-calculator-section"
import { CTASection } from "@/components/cta-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { FAQSection } from "@/components/faq-section"
import { ContactPreviewSection } from "@/components/contact-preview-section"

export default function HomePage() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <LoanProductsSection />
      <StatsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <WhereWeLendSection />
      <LoanCalculatorSection />
      <CTASection />
      <FAQSection />
      <BlogPreviewSection limit={3} featured={true} />
      <ContactPreviewSection />
    </motion.div>
  )
}
