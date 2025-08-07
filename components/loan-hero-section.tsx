"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCalendlyModal } from "@/hooks/use-calendly-modal"

interface LoanHeroSectionProps {
  title: string
  description: string
  image?: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
}

export default function LoanHeroSection({
  title,
  description,
  image,
  primaryCta,
  secondaryCta
}: LoanHeroSectionProps) {
  const { openModal } = useCalendlyModal()

  const handleSecondaryClick = () => {
    if (secondaryCta.href === "#") {
      openModal()
    }
  }

  return (
    <div className="mb-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <Link href={primaryCta.href} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 font-medium transition-colors">
                {primaryCta.text}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            {secondaryCta.href === "#" ? (
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 font-medium transition-colors"
                onClick={handleSecondaryClick}
              >
                {secondaryCta.text}
              </Button>
            ) : (
              <Link href={secondaryCta.href} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 font-medium transition-colors">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          )}
        </div>
      </div>
    </div>
  )
} 