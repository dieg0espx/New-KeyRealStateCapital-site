"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface Parameter {
  icon: LucideIcon
  value: string
  label: string
}

interface LoanParameterCardsProps {
  parameters: Parameter[]
  columns?: number
}

export default function LoanParameterCards({ 
  parameters, 
  columns = 3 
}: LoanParameterCardsProps) {
  const gridCols = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
  
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6 mb-12`}>
      {parameters.map((param, index) => {
        const Icon = param.icon
        return (
          <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-custom transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-light-green mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {param.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {param.label}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
