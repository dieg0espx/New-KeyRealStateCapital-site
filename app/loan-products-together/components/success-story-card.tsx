"use client"

import { Card, CardContent } from "@/components/ui/card"

interface Metric {
  label: string
  value: string
}

interface SuccessStoryCardProps {
  title: string
  name: string
  testimonial: string
  metrics: Metric[]
}

export default function SuccessStoryCard({
  title,
  name,
  testimonial,
  metrics
}: SuccessStoryCardProps) {
  return (
    <Card className="mb-12 border-0 shadow-lg bg-gradient-to-r from-light-green/5 to-perry/5">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">{title}</h2>
          <p className="text-light-green font-medium">{name}</p>
        </div>
        
        <blockquote className="text-lg text-gray-700 font-light leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          "{testimonial}"
        </blockquote>
        
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-light-green mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
