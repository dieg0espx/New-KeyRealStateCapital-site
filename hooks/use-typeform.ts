import { useEffect, useState } from 'react'

// Extend Window interface to include Typeform
declare global {
  interface Window {
    tf: any
  }
}

let scriptLoaded = false
let scriptLoading = false

export function useTypeform() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(scriptLoaded)

  useEffect(() => {
    if (scriptLoaded) {
      setIsScriptLoaded(true)
      return
    }

    if (scriptLoading) {
      // Wait for existing loading to complete
      const checkLoaded = setInterval(() => {
        if (scriptLoaded) {
          setIsScriptLoaded(true)
          clearInterval(checkLoaded)
        }
      }, 100)
      
      return () => clearInterval(checkLoaded)
    }

    scriptLoading = true
    const existingScript = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://embed.typeform.com/next/embed.js'
      script.async = true
      script.onload = () => {
        scriptLoaded = true
        scriptLoading = false
        setIsScriptLoaded(true)
      }
      script.onerror = () => {
        scriptLoading = false
        console.error('Failed to load Typeform script')
      }
      document.head.appendChild(script)
    } else {
      scriptLoaded = true
      scriptLoading = false
      setIsScriptLoaded(true)
    }
  }, [])

  return { isScriptLoaded }
}
