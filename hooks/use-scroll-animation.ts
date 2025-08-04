import { useInView } from "framer-motion"
import { useRef } from "react"
import { useIsMobile } from "./use-mobile"

export function useScrollAnimation() {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.3
  })

  // Disable scroll animations on mobile
  const shouldAnimate = !isMobile

  return { ref, isInView: shouldAnimate ? isInView : true }
} 