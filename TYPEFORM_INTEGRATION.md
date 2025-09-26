# Typeform Modal Integration

This document explains how to use the new TypeformModal component for CTA buttons on the Cash Flow Freedom landing page.

## Components Created

1. **TypeformModal** (`components/typeform-modal.tsx`) - The main modal component
2. **useTypeformModal** (`hooks/use-typeform-modal.ts`) - Hook for managing modal state

## How to Use

### 1. Set Environment Variable

Add your Typeform embed URL to your environment variables:

```bash
# .env.local
NEXT_PUBLIC_TYPEFORM_URL=your_typeform_embed_id_here
```

### 2. Usage in Cash Flow Freedom Page

The Cash Flow Freedom page (`app/cash-flow-freedom/page.tsx`) has been updated to use the TypeformModal instead of CalendlyModal.

```tsx
import TypeformModal from '@/components/typeform-modal'
import { useTypeformModal } from '@/hooks/use-typeform-modal'

export default function CashFlowFreedomPage() {
  const { isOpen, openModal, closeModal } = useTypeformModal()
  
  return (
    <div>
      {/* Your page content */}
      <Button onClick={openModal}>
        Book Free Investor Qualifying Call →
      </Button>
      
      {/* Typeform Modal */}
      <TypeformModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        typeformUrl={process.env.NEXT_PUBLIC_TYPEFORM_URL}
      />
    </div>
  )
}
```

## Modal Features

- **Responsive Design**: Works on desktop and mobile
- **Brand Colors**: Uses your site's color palette (perry, light-green)
- **Placeholder State**: Shows helpful instructions when no Typeform URL is provided
- **Clean Integration**: Matches your existing design system

## Getting Your Typeform URL

1. Go to your Typeform dashboard
2. Select the form you want to embed
3. Click "Embed" in the top right
4. Choose "Standard embed" or "Popup embed"
5. Copy the form ID from the embed code (the long string after `data-tf-live=`)
6. Add it as `NEXT_PUBLIC_TYPEFORM_URL` in your environment variables

## Example Typeform URL Format

```
01K1BX3QEFS7RAQYWRJR1KJV9X
```

## Testing

1. Navigate to `/cash-flow-freedom`
2. Click any CTA button (they all use the same modal)
3. The modal should open with your Typeform embedded
4. If no URL is set, you'll see the placeholder with integration instructions

## Styling

The modal uses your existing color palette:
- Header: Gradient from perry to light-green
- Background: White with subtle shadows
- Close button: White with hover effects
- Form container: Full height with proper overflow handling
