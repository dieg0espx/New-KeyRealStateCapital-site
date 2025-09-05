"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Clock, DollarSign } from "lucide-react"

interface BadgeProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

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
  badges?: BadgeProps[]
  onSecondaryClick?: () => void
}

export default function LoanHeroSection({
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  badges = [],
  onSecondaryClick
}: LoanHeroSectionProps) {
  const handleSecondaryClick = () => {
    if (secondaryCta.href === "#" && onSecondaryClick) {
      onSecondaryClick()
    }
  }

  return (
    <div className="mb-12 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-green/20 via-light-green/10 to-transparent rounded-2xl -m-4"></div>
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <Link href={primaryCta.href} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-light-green hover:bg-perry text-white px-8 py-3 font-medium transition-colors">
                {primaryCta.text}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            {secondaryCta.href === "#" ? (
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-light-green text-light-green hover:bg-perry/50 px-8 py-3 font-medium transition-colors"
                onClick={handleSecondaryClick}
              >
                {secondaryCta.text}
              </Button>
            ) : (
              <Link href={secondaryCta.href} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-light-green text-light-green hover:bg-perry/50 px-8 py-3 font-medium transition-colors">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          )}
          
          {badges.map((badge, index) => {
            const positionClasses = {
              'top-left': 'top-2 left-2 md:-top-6 md:-left-6',
              'top-right': 'top-2 right-2 md:-top-6 md:-right-6',
              'bottom-left': 'bottom-2 left-2 md:-bottom-6 md:-left-6',
              'bottom-right': 'bottom-2 right-2 md:-bottom-6 md:-right-6'
            }
            
            return (
              <div 
                key={index}
                className={`absolute ${positionClasses[badge.position]} bg-white shadow-md p-3 md:p-4 max-w-[200px] md:max-w-[250px] z-10`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-light-green rounded-full p-2">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">{badge.title}</div>
                    <div className="text-gray-600 text-sm">{badge.subtitle}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  )
} 