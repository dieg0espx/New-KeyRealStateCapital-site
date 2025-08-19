import { Star, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SuccessStoryCardProps {
  title: string
  name: string
  testimonial: string
  metrics: {
    label: string
    value: string
  }[]
}

export default function SuccessStoryCard({
  title,
  name,
  testimonial,
  metrics
}: SuccessStoryCardProps) {
  return (
    <Card className="mb-12 border-0 shadow-lg bg-perry">
      <CardContent className="p-8">
        <h2 className="text-2xl font-medium text-gray-900 mb-6 text-white">{title}</h2>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-light-green rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <h4 className="font-medium text-white mr-2 ">{name}</h4>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-white font-light mb-4">
              {testimonial}
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <span className="text-white">{metric.label}:</span>
                  <div className="font-medium text-light-green">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
