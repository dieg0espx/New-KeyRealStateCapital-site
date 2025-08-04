import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Utility to disable animations on mobile
export function useAnimationControl() {
  const isMobile = useIsMobile()
  
  const disableOnMobile = React.useCallback((animationProps: any) => {
    if (isMobile) {
      return {
        initial: false,
        animate: false,
        exit: false,
        whileHover: {},
        whileTap: {},
        transition: { duration: 0 }
      }
    }
    return animationProps
  }, [isMobile])

  const shouldAnimate = React.useCallback(() => !isMobile, [isMobile])

  return {
    isMobile,
    disableOnMobile,
    shouldAnimate
  }
}
