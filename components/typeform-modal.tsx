"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface TypeformModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TypeformModal({ isOpen, onClose }: TypeformModalProps) {
  const [modalKey, setModalKey] = useState(0)
  const router = useRouter()

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      setModalKey(prev => prev + 1)
      // Save current scroll position
      const scrollY = window.scrollY
      // Lock body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scroll position
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  // Handle Typeform completion
  useEffect(() => {
    if (!isOpen) return

    const handleTypeformSubmit = (event: MessageEvent) => {
      if (event.origin !== 'https://form.typeform.com' && event.origin !== 'https://embed.typeform.com') return
      
      if (
        event.data.type === 'form-submit' || 
        event.data.type === 'form-complete' ||
        event.data.type === 'form-submitted' ||
        (event.data.event && event.data.event.includes('form-submit'))
      ) {
        console.log('Typeform completed, redirecting to Calendly...', event.data)
        onClose()
        router.push('/calendly-book-a-call')
      }
    }

    window.addEventListener('message', handleTypeformSubmit)
    return () => window.removeEventListener('message', handleTypeformSubmit)
  }, [isOpen, onClose, router])

  // Load Typeform embed script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script')
      script.src = '//embed.typeform.com/next/embed.js'
      script.async = true
      document.head.appendChild(script)

      return () => {
        const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[85vh] mx-4 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white">
          <h2 className="text-lg md:text-2xl font-medium text-[#02736D]">
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
        <div className="flex-1 h-full overflow-hidden relative">
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
