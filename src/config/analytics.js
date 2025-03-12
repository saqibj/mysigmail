// New file for analytics configuration
export const getAnalyticsConfig = () => {
  const gaId = process.env.VUE_APP_GA
  
  if (!gaId && process.env.NODE_ENV === 'production') {
    console.warn('Google Analytics ID not configured in production')
  }

  return {
    id: gaId || 'XX-XXXXXXXX-X',
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  }
} 