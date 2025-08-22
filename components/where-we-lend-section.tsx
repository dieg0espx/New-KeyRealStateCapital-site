"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Building2, Globe, CheckCircle } from "lucide-react"
import { useState } from "react"
import { USAMap } from '@mirawision/usa-map-react'
import { Card, CardContent } from "@/components/ui/card"

interface WhereWeLendSectionProps {
  title?: string
  description?: string
}

export function WhereWeLendSection({
  title = "Where We Lend",
  description = "Personal Service. Nationwide Reach."
}: WhereWeLendSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  // States we lend in (all except ND and SD)
  const coveredStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "OH", "OK", "OR", "PA", "RI", "SC", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ]

  // States we don't lend in
  const notCoveredStates = ["ND", "SD"]

  const getStateColor = (stateCode: string) => {
    if (notCoveredStates.includes(stateCode)) {
      return "#e5e7eb" // Gray for not covered
    }
    if (coveredStates.includes(stateCode)) {
      return "#10b981" // Light green for covered
    }
    return "#f3f4f6" // Light gray for default
  }

  const getStateOpacity = (stateCode: string) => {
    if (hoveredState === stateCode) {
      return 1
    }
    if (notCoveredStates.includes(stateCode)) {
      return 0.3
    }
    return 0.8
  }

  const handleStateClick = (stateCode: string) => {
    console.log(`Clicked on ${stateCode}`)
  }

  const handleStateHover = (stateCode: string) => {
    setHoveredState(stateCode)
  }

  const handleStateLeave = () => {
    setHoveredState(null)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-light-green/10 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">{title}</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {description}
          </p>
          
          {/* Coverage Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-6 sm:mt-8 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-light-green">48</div>
              <div className="text-xs sm:text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-400">2</div>
              <div className="text-xs sm:text-sm text-gray-600">Not Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-light-green">96%</div>
              <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-light-green">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative mt-4 sm:mt-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* US Map Section */}
          <motion.div 
            className=""
            variants={itemVariants}
          >
            {/* Interactive US Map */}
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-lg">
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px]">
                  <USAMap
                    defaultState={{
                      fill: '#f3f4f6',
                      stroke: '#ffffff',
                      onHover: handleStateHover,
                      onLeave: handleStateLeave,
                      onClick: handleStateClick
                    }}
                    customStates={{
                      AL: { fill: getStateColor("AL") },
                      AK: { fill: getStateColor("AK") },
                      AZ: { fill: getStateColor("AZ") },
                      AR: { fill: getStateColor("AR") },
                      CA: { fill: getStateColor("CA") },
                      CO: { fill: getStateColor("CO") },
                      CT: { fill: getStateColor("CT") },
                      DE: { fill: getStateColor("DE") },
                      FL: { fill: getStateColor("FL") },
                      GA: { fill: getStateColor("GA") },
                      HI: { fill: getStateColor("HI") },
                      ID: { fill: getStateColor("ID") },
                      IL: { fill: getStateColor("IL") },
                      IN: { fill: getStateColor("IN") },
                      IA: { fill: getStateColor("IA") },
                      KS: { fill: getStateColor("KS") },
                      KY: { fill: getStateColor("KY") },
                      LA: { fill: getStateColor("LA") },
                      ME: { fill: getStateColor("ME") },
                      MD: { fill: getStateColor("MD") },
                      MA: { fill: getStateColor("MA") },
                      MI: { fill: getStateColor("MI") },
                      MN: { fill: getStateColor("MN") },
                      MS: { fill: getStateColor("MS") },
                      MO: { fill: getStateColor("MO") },
                      MT: { fill: getStateColor("MT") },
                      NE: { fill: getStateColor("NE") },
                      NV: { fill: getStateColor("NV") },
                      NH: { fill: getStateColor("NH") },
                      NJ: { fill: getStateColor("NJ") },
                      NM: { fill: getStateColor("NM") },
                      NY: { fill: getStateColor("NY") },
                      NC: { fill: getStateColor("NC") },
                      OH: { fill: getStateColor("OH") },
                      OK: { fill: getStateColor("OK") },
                      OR: { fill: getStateColor("OR") },
                      PA: { fill: getStateColor("PA") },
                      RI: { fill: getStateColor("RI") },
                      SC: { fill: getStateColor("SC") },
                      TN: { fill: getStateColor("TN") },
                      TX: { fill: getStateColor("TX") },
                      UT: { fill: getStateColor("UT") },
                      VT: { fill: getStateColor("VT") },
                      VA: { fill: getStateColor("VA") },
                      WA: { fill: getStateColor("WA") },
                      WV: { fill: getStateColor("WV") },
                      WI: { fill: getStateColor("WI") },
                      WY: { fill: getStateColor("WY") },
                      ND: { fill: getStateColor("ND") },
                      SD: { fill: getStateColor("SD") }
                    }}
                    mapSettings={{
                      width: "100%",
                      height: "100%"
                    }}
                  />
                  
                  {/* Tooltip */}
                  {hoveredState && (
                    <div 
                      className="absolute bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg z-10"
                      style={{
                        left: '50%',
                        top: '10px',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {hoveredState}
                      {coveredStates.includes(hoveredState) ? (
                        <div className="text-light-green">✓ Available</div>
                      ) : notCoveredStates.includes(hoveredState) ? (
                        <div className="text-red-400">✗ Not Available</div>
                      ) : (
                        <div className="text-gray-400">Unknown</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 sm:mt-6 flex justify-center px-4">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-light-green"></div>
                  <span className="text-gray-700">Available (48 states)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300"></div>
                  <span className="text-gray-700">Not Available (ND, SD)</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 font-light px-4">
              * Not available in North Dakota and South Dakota
            </div>
          </motion.div>

          {/* Headquarters Section */}
          <motion.div 
            className="mt-12 sm:mt-16"
            variants={itemVariants}
          >
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
                             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">Headquarters</h3>
              <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Strategic locations coast to coast to serve you better
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.4 }
                }}
              >
                <Card className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-light-green mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">San Diego, CA</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm sm:text-base">Corporate Headquarters</p>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Main Operations Center</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Underwriting & Processing</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Customer Support Hub</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                        <span className="text-gray-500">Pacific Time Zone</span>
                        <span className="text-light-green font-medium">Primary Office</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.4 }
                }}
              >
                <Card className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-perry mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Delray Beach, FL</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm sm:text-base">East Coast Office</p>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-perry mr-3"></div>
                        <span>Regional Operations</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-perry mr-3"></div>
                        <span>Client Relations</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-perry mr-3"></div>
                        <span>Market Development</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                        <span className="text-gray-500">Eastern Time Zone</span>
                        <span className="text-perry font-medium">Regional Hub</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.4 }
                }}
              >
                <Card className="group hover:shadow-custom transition-all duration-300 border-0 shadow-md bg-white h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-light-green mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Miami, FL</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Lorem ipsum consectetur adipiscing</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Sed do eiusmod tempor incididunt</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-light-green mr-3"></div>
                        <span>Ut labore et dolore magna aliqua</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm space-y-1 sm:space-y-0">
                        <span className="text-gray-500">Eastern Time Zone</span>
                        <span className="text-light-green font-medium">Lorem ipsum</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
