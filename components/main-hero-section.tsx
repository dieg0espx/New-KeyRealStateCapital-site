"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"
import { Download } from "lucide-react"
import Link from "next/link"

interface BadgeProps {
  title: string
  subtitle: string
  icon: ReactNode
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

interface MainHeroSectionProps {
  title: string
  description: string
  image: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
    icon?: ReactNode
  }
  onSecondaryClick: () => void
  badges: BadgeProps[]
}

export default function MainHeroSection({
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  onSecondaryClick,
  badges
}: MainHeroSectionProps) {
  return (
    <div className="relative mb-16">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCta.href} className="w-full sm:w-auto">
            <Button size="lg" className="bg-light-green hover:bg-perry text-white font-light px-8 py-4 text-lg w-full sm:w-auto">
              {primaryCta.text}
            </Button>
          </Link>
          <Button
            onClick={onSecondaryClick}
            size="lg"
            variant="outline"
            className="border-light-green text-light-green hover:bg-perry/50 font-light px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
          >
            {secondaryCta.icon && <span className="mr-2">{secondaryCta.icon}</span>}
            {secondaryCta.text}
          </Button>
        </div>
      </div>
    </div>
  )
}
