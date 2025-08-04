# Section Components

This directory contains reusable section components that can be used across the site. Each component is fully customizable with props and has sensible defaults.

## Available Components

### HeroSection
A full-screen hero section with video background and call-to-action buttons.

```tsx
import { HeroSection } from "@/components"

<HeroSection 
  title="Custom Title"
  subtitle="Custom Subtitle"
  description="Custom description"
  primaryButtonText="Custom Button"
  primaryButtonLink="/custom-link"
/>
```

### LoanProductsSection
Displays loan products in a grid layout with icons and descriptions.

```tsx
import { LoanProductsSection } from "@/components"

<LoanProductsSection 
  title="Custom Title"
  description="Custom description"
  products={customProducts}
/>
```

### StatsSection
Shows statistics in a grid layout with animated numbers.

```tsx
import { StatsSection } from "@/components"

<StatsSection 
  stats={[
    { number: "100+", label: "Custom Stat" },
    { number: "50+", label: "Another Stat" }
  ]}
/>
```

### TestimonialsSection
Displays client testimonials with star ratings.

```tsx
import { TestimonialsSection } from "@/components"

<TestimonialsSection 
  title="Custom Title"
  description="Custom description"
  testimonials={customTestimonials}
/>
```

### WhyChooseSection
Shows company features with icons and descriptions.

```tsx
import { WhyChooseSection } from "@/components"

<WhyChooseSection 
  title="Custom Title"
  description="Custom description"
  features={customFeatures}
/>
```

### LoanCalculatorSection
Interactive loan calculator with benefits and call-to-action.

```tsx
import { LoanCalculatorSection } from "@/components"

<LoanCalculatorSection 
  title="Custom Title"
  description="Custom description"
  benefits={customBenefits}
  ctaTitle="Custom CTA"
  ctaDescription="Custom CTA description"
/>
```

### BlogPreviewSection
Displays blog posts in a grid layout with images.

```tsx
import { BlogPreviewSection } from "@/components"

<BlogPreviewSection 
  title="Custom Title"
  description="Custom description"
  posts={customPosts}
/>
```

### CTASection
Call-to-action section with customizable buttons and background.

```tsx
import { CTASection } from "@/components"

<CTASection 
  title="Custom Title"
  description="Custom description"
  primaryButtonText="Primary Button"
  primaryButtonLink="/primary-link"
  secondaryButtonText="Secondary Button"
  secondaryButtonLink="/secondary-link"
  backgroundColor="bg-blue-600"
/>
```

## Usage Examples

### Basic Usage
All components have sensible defaults and can be used without props:

```tsx
import { HeroSection, LoanProductsSection, StatsSection } from "@/components"

export default function Page() {
  return (
    <div>
      <HeroSection />
      <LoanProductsSection />
      <StatsSection />
    </div>
  )
}
```

### Customized Usage
Components can be fully customized with props:

```tsx
import { HeroSection } from "@/components"

export default function CustomPage() {
  return (
    <HeroSection 
      title="Custom Real Estate Solutions"
      subtitle="Investment Capital"
      description="Tailored financing for your investment needs"
      primaryButtonText="Get Started"
      primaryButtonLink="/apply"
      secondaryButtonText="Learn More"
      secondaryButtonLink="/about"
    />
  )
}
```

## Component Structure

Each component follows these patterns:
- TypeScript interfaces for type safety
- Default props for easy usage
- Responsive design with Tailwind CSS
- Consistent styling with the design system
- Accessibility considerations
- Hover effects and animations

## Adding New Components

When adding new section components:
1. Create the component file in this directory
2. Add TypeScript interfaces for props
3. Include default props
4. Export from `index.ts`
5. Add documentation to this README
6. Follow the existing naming and structure patterns 