"use client"

import { useEffect } from 'react'

export default function ContactFormSection() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.typeform.com/next/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F2F2] rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Left side - Contact Form */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight">
                If you've made it this far, you're obviously serious about this…
              </h2>
              
              {/* Inline Typeform embed using the same CTA form */}
              <div>
                <div
                  data-tf-live="01K61N3M1E95RKBX7R2A8VNTFH"
                  className="w-full min-h-[500px] rounded-lg overflow-hidden bg-white"
                ></div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center">
              <div className="w-full h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/landing-page/L3.png" 
                  alt="Contact Section" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
