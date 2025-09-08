import { useEffect, useRef, useState } from 'react'

export function useAutoScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isUserScrolling, setIsUserScrolling] = useState(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollInterval: NodeJS.Timeout
    let userScrollTimeout: NodeJS.Timeout

    const startAutoScroll = () => {
      if (isUserScrolling) return
      
      scrollInterval = setInterval(() => {
        if (container && !isUserScrolling) {
          const maxScroll = container.scrollWidth - container.clientWidth
          const currentScroll = container.scrollLeft
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning when reaching the end
            container.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            // Scroll to the right
            container.scrollBy({ left: 360, behavior: 'smooth' })
          }
        }
      }, 3000) // Auto-scroll every 3 seconds
    }

    const handleUserScroll = () => {
      setIsUserScrolling(true)
      clearInterval(scrollInterval)
      
      // Resume auto-scroll after user stops scrolling for 5 seconds
      clearTimeout(userScrollTimeout)
      userScrollTimeout = setTimeout(() => {
        setIsUserScrolling(false)
        startAutoScroll()
      }, 5000)
    }

    // Start auto-scroll initially
    startAutoScroll()

    // Add scroll event listener
    container.addEventListener('scroll', handleUserScroll)
    container.addEventListener('wheel', handleUserScroll)
    container.addEventListener('touchstart', handleUserScroll)

    return () => {
      clearInterval(scrollInterval)
      clearTimeout(userScrollTimeout)
      container.removeEventListener('scroll', handleUserScroll)
      container.removeEventListener('wheel', handleUserScroll)
      container.removeEventListener('touchstart', handleUserScroll)
    }
  }, [isUserScrolling])

  return { scrollContainerRef }
}
