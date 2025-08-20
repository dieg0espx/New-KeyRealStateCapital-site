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
    <section className="py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-8">
            {description}
          </p>
          
          {/* <div className="flex items-center justify-center mb-8">
            <Globe className="h-8 w-8 mr-3 text-light-green" />
            <h3 className="text-3xl font-light text-gray-900">Nationwide Coverage</h3>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            We lend in <span className="font-semibold text-light-green">48 states</span> across the country
          </p> */}
          
          {/* Coverage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-light-green">48</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">2</div>
              <div className="text-sm text-gray-600">Not Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-green">96%</div>
              <div className="text-sm text-gray-600">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-green">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
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
            <div className="relative  mx-auto">
              <div className="">
                <div className="relative">
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
                      height: 650
                    }}
                  />
                  
                  {/* Tooltip */}
                  {hoveredState && (
                    <div 
                      className="absolute bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-10"
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
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-light-green"></div>
                  <span className="text-gray-700">Available (48 states)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300"></div>
                  <span className="text-gray-700">Not Available (ND, SD)</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-gray-500 font-light">
              * Not available in North Dakota and South Dakota
            </div>
          </motion.div>

          {/* Headquarters Section */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Headquarters</h3>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Strategic locations coast to coast to serve you better
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <CardContent className="p-8">
                    <div className="text-light-green mb-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">San Diego, CA</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">Corporate Headquarters</p>
                    <div className="space-y-2 text-sm text-gray-500">
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
                      <div className="flex items-center justify-between text-sm">
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
                  <CardContent className="p-8">
                    <div className="text-perry mb-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Delray Beach, FL</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">East Coast Office</p>
                    <div className="space-y-2 text-sm text-gray-500">
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Eastern Time Zone</span>
                        <span className="text-perry font-medium">Regional Hub</span>
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
