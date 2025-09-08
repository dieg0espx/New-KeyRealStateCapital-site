"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"
import Link from "next/link"

interface BadgeProps {
  title: string
  subtitle: string
  icon: ReactNode
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

interface LoanHeroSectionProps {
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
  }
  onSecondaryClick: () => void
  badges: BadgeProps[]
}

export default function LoanHeroSection({
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  onSecondaryClick,
  badges
}: LoanHeroSectionProps) {
  return (
    <div className="relative mb-16">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-200"
          style={{
            backgroundImage: `url('${image}')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Badges */}
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${
              badge.position === "top-left" ? "top-4 left-4" :
              badge.position === "top-right" ? "top-4 right-4" :
              badge.position === "bottom-left" ? "bottom-4 left-4" :
              "bottom-4 right-4"
            }`}
          >
            <Badge className="bg-white/90 text-gray-900 hover:bg-white/95 px-4 py-2">
              <div className="flex items-center space-x-2">
                {badge.icon}
                <div className="text-left">
                  <div className="font-semibold text-sm">{badge.title}</div>
                  <div className="text-xs text-gray-600">{badge.subtitle}</div>
                </div>
              </div>
            </Badge>
          </div>
        ))}
      </div>

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
            {secondaryCta.text}
          </Button>
        </div>
      </div>
    </div>
  )
}
