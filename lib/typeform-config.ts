// Typeform configuration
export const TYPEFORM_CONFIG = {
  // Replace this with your actual Typeform ID
  FORM_ID: '01K1BX3QEFS7RAQYWRJR1KJV9X',
  
  // Embed options
  EMBED_OPTIONS: {
    source: 'localhost',
    medium: 'embed-sdk',
    mediumVersion: 'next',
    width: '100%',
    height: '100%'
  }
}

// Helper function to get embed attributes
export function getTypeformAttributes(additionalProps: Record<string, string> = {}) {
  return {
    'data-tf-live': TYPEFORM_CONFIG.FORM_ID,
    'data-tf-source': TYPEFORM_CONFIG.EMBED_OPTIONS.source,
    'data-tf-medium': TYPEFORM_CONFIG.EMBED_OPTIONS.medium,
    'data-tf-medium-version': TYPEFORM_CONFIG.EMBED_OPTIONS.mediumVersion,
    ...additionalProps
  }
}
