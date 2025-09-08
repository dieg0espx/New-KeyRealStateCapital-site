// Error handler for common ad blocker and tracking script errors
export function setupErrorHandling() {
  // Suppress common ad blocker errors
  const originalConsoleError = console.error
  
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || ''
    
    // Skip logging common ad blocker errors
    const blockedPatterns = [
      'ERR_BLOCKED_BY_CLIENT',
      'net::ERR_BLOCKED_BY_CLIENT',
      'connect.facebook.net',
      'googleads.g.doubleclick.net',
      'px.ads.linkedin.com',
      'ad.doubleclick.net'
    ]
    
    const shouldSuppress = blockedPatterns.some(pattern => 
      message.includes(pattern)
    )
    
    if (!shouldSuppress) {
      originalConsoleError.apply(console, args)
    }
  }
  
  // Handle unhandled promise rejections from blocked scripts
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason?.toString() || ''
    
    const blockedPatterns = [
      'ERR_BLOCKED_BY_CLIENT',
      'net::ERR_BLOCKED_BY_CLIENT',
      'connect.facebook.net',
      'googleads.g.doubleclick.net',
      'px.ads.linkedin.com',
      'ad.doubleclick.net'
    ]
    
    const shouldSuppress = blockedPatterns.some(pattern => 
      reason.includes(pattern)
    )
    
    if (shouldSuppress) {
      event.preventDefault()
    }
  })
}

// Initialize error handling
if (typeof window !== 'undefined') {
  setupErrorHandling()
}
