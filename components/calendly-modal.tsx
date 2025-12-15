"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Declare Calendly global
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string
        parentElement: Element | null
        prefill: object
        utm: object
      }) => void
    }
  }
}

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  calendlyUrl?: string
}

const DEFAULT_CALENDLY_URL = 'https://calendly.com/keyan-keyrealestatecapital/30min'

export default function CalendlyModal({ isOpen, onClose, calendlyUrl = DEFAULT_CALENDLY_URL }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      console.log('Modal opened, initializing Calendly...')
      
      // Load Calendly script if not already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (!existingScript) {
        console.log('Loading Calendly script...')
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => {
          console.log('Calendly script loaded successfully')
          // Initialize Calendly widget after script loads with a delay
          setTimeout(() => {
            console.log('Attempting to initialize Calendly widget...')
            if (window.Calendly) {
              const widgetElement = document.querySelector('.calendly-inline-widget')
              console.log('Widget element found:', !!widgetElement)
              if (widgetElement) {
                try {
                  window.Calendly.initInlineWidget({
                    url: calendlyUrl,
                    parentElement: widgetElement,
                    prefill: {},
                    utm: {}
                  })
                  console.log('Calendly widget initialized successfully')
                } catch (error) {
                  console.error('Error initializing Calendly widget:', error)
                }
              }
            } else {
              console.error('Calendly object not found on window')
            }
          }, 500)
        }
        script.onerror = () => {
          console.error('Failed to load Calendly script')
        }
        document.head.appendChild(script)
      } else {
        console.log('Calendly script already loaded, initializing widget...')
        // Script already exists, try to initialize widget with a delay
        setTimeout(() => {
          if (window.Calendly) {
            const widgetElement = document.querySelector('.calendly-inline-widget')
            console.log('Widget element found (existing script):', !!widgetElement)
            if (widgetElement) {
              try {
                window.Calendly.initInlineWidget({
                  url: calendlyUrl,
                  parentElement: widgetElement,
                  prefill: {},
                  utm: {}
                })
                console.log('Calendly widget initialized successfully (existing script)')
              } catch (error) {
                console.error('Error initializing Calendly widget (existing script):', error)
              }
            }
          } else {
            console.error('Calendly object not found on window (existing script)')
          }
        }, 500)
      }
    }
  }, [isOpen, calendlyUrl])

  if (!isOpen) return null
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.8)', 
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
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Schedule a Consultation</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        
        {/* Calendly Widget */}
        <div className="flex-1 h-full overflow-hidden p-4">
          <div 
            key={isOpen ? 'calendly-open' : 'calendly-closed'}
            className="calendly-inline-widget h-full w-full"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
} 