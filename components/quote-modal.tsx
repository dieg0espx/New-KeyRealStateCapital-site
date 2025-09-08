"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
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
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-medium text-gray-900">Get in Touch</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-0">
          <div 
            key={modalKey}
            data-tf-live="01K1BX3QEFS7RAQYWRJR1KJV9X"
            data-tf-source="localhost"
            data-tf-medium="embed-sdk"
            data-tf-medium-version="next"
            className="w-full h-[600px] rounded-lg overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  )
}
