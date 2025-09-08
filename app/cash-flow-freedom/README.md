# Cash Flow Freedom Page - Component Structure

This page has been reorganized into separate components for better maintainability and organization.

## File Structure

```
app/cash-flow-freedom/
├── page.tsx                    # Main page component
├── components/
│   ├── index.ts               # Component exports
│   ├── HeroSection.tsx        # Hero section with video
│   ├── CaseStudiesSection.tsx # Case studies carousel
│   ├── CallForYouSection.tsx  # Target audience section
│   ├── TestimonialsSection.tsx # Testimonials carousel
│   ├── GuaranteeSection.tsx   # Property buy back guarantee
│   ├── CallBenefitsSection.tsx # Call benefits grid
│   └── ContactFormSection.tsx # Contact form
└── hooks/
    └── useAutoScroll.ts       # Auto-scroll functionality hook
```

## Components

### HeroSection
- Contains the main hero content with video
- Includes the guarantee headline and CTA button
- Handles video autoplay functionality

### CaseStudiesSection
- Displays case studies in a horizontal scrolling carousel
- Uses the `useAutoScroll` hook for automatic scrolling
- Includes pagination indicators and CTA button

### CallForYouSection
- Shows target audience criteria in text boxes
- Includes an image and CTA button
- Uses a two-column layout

### TestimonialsSection
- Displays customer testimonials in a scrolling carousel
- Uses the `useAutoScroll` hook for automatic scrolling
- Includes pagination indicators and CTA button

### GuaranteeSection
- Explains the property buy back guarantee
- Uses a two-column layout with image and text
- Includes CTA button

### CallBenefitsSection
- Shows what users get from the call in a 2x2 grid
- Includes different CTA button placement for mobile/desktop
- Uses responsive grid layout

### ContactFormSection
- Contains the contact form with input fields
- Includes an image and CTA button
- Uses a two-column layout

## Hooks

### useAutoScroll
- Custom hook that provides auto-scrolling functionality
- Handles user interaction (pauses auto-scroll when user scrolls)
- Resumes auto-scroll after user stops interacting
- Returns a ref to attach to scrollable containers

## Benefits of This Structure

1. **Maintainability**: Each section is in its own file, making it easier to find and modify specific content
2. **Reusability**: Components can be reused in other pages if needed
3. **Separation of Concerns**: Each component has a single responsibility
4. **Code Organization**: Related functionality is grouped together
5. **Easier Testing**: Individual components can be tested in isolation
6. **Better Performance**: Components can be optimized individually

## Usage

The main page imports all components from the `./components` index file and renders them in the correct order. The `useCalendlyModal` hook is shared across all components that need the modal functionality.
