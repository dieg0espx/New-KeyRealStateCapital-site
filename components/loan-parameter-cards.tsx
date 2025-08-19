import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface LoanParameter {
  icon: LucideIcon
  value: string
  label: string
}

interface LoanParameterCardsProps {
  parameters: LoanParameter[]
  columns?: 3 | 4
}

export default function LoanParameterCards({ 
  parameters, 
  columns = 3 
}: LoanParameterCardsProps) {
  const gridCols = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
  
  return (
    <div className={`grid ${gridCols} gap-6 mb-12`}>
      {parameters.map((param, index) => {
        const IconComponent = param.icon
        return (
          <Card key={index} className="border-0 shadow-md bg-perry">
            <CardContent className="p-6 text-center">
              <IconComponent className="h-8 w-8 text-light-green mx-auto mb-3" />
              <div className="text-2xl font-semibold text-white mb-1">{param.value}</div>
              <div className="text-gray-300 font-light">{param.label}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
