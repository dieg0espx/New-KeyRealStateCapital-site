"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TypeformModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TypeformModal({ isOpen, onClose }: TypeformModalProps) {
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
      script.src = '//embed.typeform.com/next/embed.js'
      script.async = true
      document.head.appendChild(script)

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')
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
          <div 
            key={modalKey}
            className="w-full h-full"
            data-tf-live="01K61N3M1E95RKBX7R2A8VNTFH"
          />
        </div>
      </div>
    </div>
  )
}
