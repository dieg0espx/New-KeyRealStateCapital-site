"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TypeformModalProps {
  isOpen: boolean
  onClose: () => void
  typeformUrl?: string
}

export default function TypeformModal({ isOpen, onClose, typeformUrl }: TypeformModalProps) {
  const [modalKey, setModalKey] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setModalKey(prev => prev + 1)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      // Load Typeform embed script
      const script = document.createElement('script')
      script.src = 'https://embed.typeform.com/next/embed.js'
      script.async = true
      document.head.appendChild(script)

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[85vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-medium text-[#02736D]">
            Answer a Few Short Questions Before Booking Your Call
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Typeform Content */}
        <div className="flex-1 h-full overflow-hidden">
          {typeformUrl ? (
            <div 
              key={modalKey}
              className="w-full h-full"
              data-tf-live={typeformUrl}
              data-tf-source="website"
              data-tf-medium="embed-sdk"
              data-tf-medium-version="next"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-50">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-[#02736D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#02736D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#02736D] mb-2">Typeform Placeholder</h3>
                <p className="text-gray-600 mb-4">
                  Ready to integrate your Typeform embed. Just provide the URL and it will work seamlessly.
                </p>
                <div className="bg-[#02736D]/10 border border-[#02736D]/20 rounded-lg p-4 text-sm text-gray-700">
                  <p className="font-medium mb-1">Integration Instructions:</p>
                  <p>1. Get your Typeform embed URL</p>
                  <p>2. Pass it as the <code className="bg-gray-200 px-1 rounded">typeformUrl</code> prop</p>
                  <p>3. The form will automatically load and be styled to match your brand</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
