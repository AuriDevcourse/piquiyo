# Complete Website Structure & Styling Guide

## 🏗️ Overall Architecture

### Tech Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **File Structure**: Component-based sections

### Project Structure
```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhoWeWorkWith.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── Services.tsx
│   │   ├── OurApproach.tsx
│   │   ├── FAQ.tsx
│   │   ├── About.tsx
│   │   ├── WhyPiquiyo.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   └── Button.tsx
│   └── layout/
│       └── Navbar.tsx
├── lib/
│   └── cx.ts
└── pages/
    └── Home.tsx
```

---

## 🎨 Global Styling System

### Color Palette
```css
--brand: #FF4937 (orange)
--text: #2e2c2f (dark gray)
--text-muted: #3A3D42 (medium gray)
--bg-dark: #202020 (dark)
--bg-light: #f2f2f2 (light gray)
--bg-white: #FFFFFF (white)
```

### Typography
```css
/* Font Families */
--font-heading: 'Red Hat Display'
--font-body: 'Inter'

/* Fluid Typography */
clamp(36px, 5vw, 80px)  /* H2 mobile to desktop */
clamp(48px, 8vw, 160px)  /* H1 mobile to desktop */

/* Line Heights */
leading-[1.2]  /* Tight for headlines */
leading-normal  /* 1.5 for body text */
```

### Spacing System
```css
/* Base: 8px grid */
--spacing-xs: 8px   /* py-2 */
--spacing-sm: 16px  /* py-4 */
--spacing-md: 24px  /* py-6 */
--spacing-lg: 32px  /* py-8 */
--spacing-xl: 64px  /* py-16 */
```

### Breakpoints
```css
--mobile: < 640px
--tablet: 768px+
--desktop: 1024px+
--large: 1280px+
```

### Container Widths
```css
--container-sm: 90%  /* Standard sections */
--container-md: 80%  /* Content sections */
--container-lg: 70%  /* Cards/featured content */
--container-xl: max-w-4xl  /* FAQ/centered content */
```

---

## 📄 Section-by-Section Breakdown

### 1. Hero Section
**File**: `src/components/sections/Hero.tsx`

#### Content Structure
```jsx
<section className="relative overflow-hidden bg-white">
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
    <div className="flex flex-col items-start justify-center space-y-8 py-16 md:py-24">
      {/* Left side - Text content */}
      <div className="flex-1 text-left lg:text-left space-y-6 lg:w-[60%]">
        <h1 className="font-heading text-[clamp(48px,8vw,160px)] font-black tracking-tight text-[#2e2c2f] leading-tight">
          <div className="font-black">Delivering</div>
          <div>
            <span className="font-normal italic">Faster</span>
            <span className="font-black">Results</span>
          </div>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mt-6">
          The complete development platform for building modern web applications. 
          Ship faster with our intuitive tools and comprehensive documentation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button size="lg" className="group">Book a free growth audit</Button>
          <Button variant="outline" size="lg">Watch Demo</Button>
        </div>
      </div>
      {/* Right side - Stats card */}
      <div className="flex-1 flex justify-center lg:justify-end relative">
        <div className="bg-[#2e2c2f] rounded-md shadow-xl p-6 text-center w-48 h-48">
          <div className="text-[#FF4937] font-black text-4xl">91%</div>
          <div className="text-white text-sm">Growth Rate</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: White (`bg-white`)
- **Container**: 90% width, responsive padding
- **Typography**: Fluid H1 (48px-160px), 18px body text
- **Layout**: Flexbox, left-aligned on mobile, two-column on desktop
- **Colors**: `#2e2c2f` (dark text), `#FF4937` (brand orange)

---

### 2. Who We Work With Section
**File**: `src/components/sections/WhoWeWorkWith.tsx`

#### Content Structure
```jsx
<section className="py-24 bg-[#202020] relative overflow-hidden">
  {/* Background Image */}
  <img src="/icons/V4.png" className="absolute right-[50px] top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20" />
  
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
    <div className="mb-16 text-center lg:text-left">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-black tracking-tight leading-[1.2] mb-6 max-w-[70%] mx-auto lg:mx-0 text-white lg:text-[#2e2c2f]">
        <div className="font-black">Who we</div>
        <div className="flex items-center justify-center lg:justify-start">
          <span className="font-normal italic">work</span>
          <span className="font-black ml-[20px]">with</span>
        </div>
      </h2>
      <h3 className="mt-4 text-white font-semibold text-2xl">We partner with post-seed B2B startups...</h3>
      <p className="mt-2 text-white/80 max-w-[460px]">Short, sharp, confident teams ready to scale.</p>
    </div>
    
    {/* Cards Row - 70% width */}
    <div className="w-[70%] mx-auto lg:ml-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ideal Client Card */}
        <div className="bg-[#2e2b2f] rounded-[12px] p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <Users className="w-5 h-5 text-[#FF4937] mr-2" />
            <h4 className="font-heading text-white font-bold text-2xl">Ideal Clients</h4>
          </div>
          <ul className="space-y-2 text-white">
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> Post-seed B2B startups</li>
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> $1M-$10M ARR</li>
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> Product-market fit</li>
          </ul>
        </div>
        
        {/* Industries Card */}
        <div className="bg-[#2e2b2f] rounded-[12px] p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <Building className="w-5 h-5 text-[#FF4937] mr-2" />
            <h4 className="font-heading text-white font-bold text-2xl">Industries</h4>
          </div>
          <ul className="space-y-2 text-white">
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> SaaS & Tech</li>
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> FinTech</li>
            <li className="flex items-start"><span className="text-[#FF4937] mr-2">•</span> B2B Services</li>
          </ul>
        </div>
        
        {/* Not a Fit Card */}
        <div className="bg-[#2e2b2f] rounded-[12px] p-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <X className="w-5 h-5 text-red-500 mr-2" />
            <h4 className="font-heading text-red-500 font-bold text-2xl">Not a fit if</h4>
          </div>
          <ul className="space-y-2 text-white">
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Pre-seed stage</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span> No revenue yet</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Consumer products</li>
          </ul>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-8 text-right">
        <Button size="lg" className="group">Book a free growth audit</Button>
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Dark (`#202020`) with background image overlay
- **Typography**: H2 fluid (36px-80px), white on mobile, dark on desktop
- **Layout**: Cards in 70% width, 3-column grid on desktop
- **Colors**: White text, orange accents, red for "not a fit"
- **Icons**: Lucide React (Users, Building, X)

---

### 3. What We Do Section
**File**: `src/components/sections/WhatWeDo.tsx`

#### Content Structure
```jsx
<section className="min-h-screen bg-[#202020]">
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 h-[110vh] flex flex-col">
    {/* Top row - Text content */}
    <div className="text-white pt-[50px] mb-12 text-center lg:text-center">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-black tracking-tight leading-[1.2] mb-6 max-w-[70%] mx-auto">
        <div className="font-black">Delivering</div>
        <div>
          <span className="font-normal italic">execution</span>
          <span className="font-black"> that works.</span>
        </div>
      </h2>
      <div className="text-lg text-white/90 leading-relaxed max-w-[70%] mx-auto">
        <span>The queue seeks like an operator not an agency.</span>
        <span className="block">Clear direct and grounded in execution.</span>
        <span className="block">No hype, no buzzwords, no over-explaining.</span>
      </div>
    </div>

    {/* Bottom row - Process containers */}
    <div className="flex justify-end pb-[150px]">
      <div className="w-[70%] space-y-4">
        {processItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-8 bg-[#2e2c2f] rounded-sm backdrop-blur-sm min-h-[80px]">
            {/* Left side - Headline */}
            <div className="w-[12%]">
              <h4 className="text-white font-semibold" style={{ fontSize: '24px' }}>{item.title}</h4>
            </div>
            
            {/* Middle - Description */}
            <div className="w-[70%] mx-6 hidden lg:block">
              <p className="text-white/80" style={{ fontSize: '20px' }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
            
            {/* Right side - Icon */}
            <div className="w-[20%] flex items-center justify-end">
              <div className="bg-[#FF4937] rounded-full p-3">
                <ArrowRight className="h-6 w-6" style={{ color: '#202020' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Dark (`#202020`)
- **Layout**: Right-aligned process containers, 70% width
- **Typography**: H2 fluid (36px-80px), 24px headlines, 20px descriptions
- **Process Items**: Horizontal layout with headline, description, icon
- **Colors**: White text, orange circular icons, dark backgrounds

---

### 4. Services Section
**File**: `src/components/sections/Services.tsx`

#### Content Structure
```jsx
<section className="py-24 bg-gray-50 relative overflow-hidden">
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
    {/* Header */}
    <div className="mb-16 text-center">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[4rem] max-w-[70%] mx-auto mb-6">
        Services
      </h2>
      <p className="mt-4 text-gray-600 max-w-[500px] mx-auto">
        Comprehensive marketing solutions designed to accelerate your B2B growth and scale your business effectively.
      </p>
    </div>

    {/* Services Grid */}
    <div className="max-w-[80%] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="flex items-start space-x-4 group cursor-pointer">
          <div className="flex-shrink-0">
            <service.icon className="w-8 h-8 text-[#FF4937]" />
          </div>
          <div>
            <h4 className="font-heading text-[#2e2c2f] font-bold mb-2" style={{ fontSize: '20px' }}>{service.title}</h4>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Light gray (`bg-gray-50`)
- **Grid**: Responsive (1 col mobile, 2 col tablet, 3 col desktop)
- **Typography**: H2 fluid (36px-80px), 20px service titles
- **Layout**: 80% max width, icon + text horizontal layout
- **Colors**: Dark text, orange icons, light background

---

### 5. Our Approach Section
**File**: `src/components/sections/OurApproach.tsx`

#### Content Structure
```jsx
<section className="py-24 bg-[#f2f2f2] relative">
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
    {/* First Row - Title and Description */}
    <div className="mb-16 text-center">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[1.2] max-w-[70%] mx-auto">
        Our approach
      </h2>
      <p className="mt-4 text-gray-600 max-w-[500px] mx-auto">
        Strategy first, always. We start by understanding your ICP, market motion, and growth constraints.
      </p>
    </div>

    {/* Second Row - Process Steps */}
    <div className="relative w-[80%] mx-auto">
      {/* Desktop - Horizontal Layout */}
      <div className="hidden lg:block">
        {/* Connection Line Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand/30 via-brand/50 to-brand/30 origin-left"
        />
        
        <div className="grid grid-cols-4 gap-8 relative">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Node with Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-28 h-28 mx-auto rounded-full bg-brand border-2 border-brand/30 flex items-center justify-center group hover:border-brand transition-colors mb-6"
              >
                <span className="font-heading text-white font-bold text-3xl">
                  {index + 1}
                </span>
              </motion.div>
              
              {/* Process Content */}
              <div className="rounded-[12px] p-6 border border-gray-100">
                <h4 className="font-heading text-[#2e2c2f] font-bold mb-3 text-2xl">{approach.title}</h4>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '18px' }}>{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile - Vertical Layout */}
      <div className="lg:hidden">
        <div className="relative space-y-8">
          {/* Vertical Connection Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-brand/30 via-brand/50 to-brand/30 origin-top"
          />
          
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex items-start space-x-6"
            >
              {/* Node */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 rounded-full bg-brand border-2 border-brand/30 flex items-center justify-center group hover:border-brand transition-colors flex-shrink-0"
              >
                <span className="font-heading text-white font-bold text-xl">
                  {index + 1}
                </span>
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 rounded-[12px] p-6 border border-gray-100">
                <h4 className="font-heading text-[#2e2c2f] font-bold mb-3 text-2xl">{approach.title}</h4>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '18px' }}>{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Light gray (`#f2f2f2`)
- **Layout**: Horizontal timeline on desktop, vertical on mobile
- **Animations**: Framer Motion staggered reveals, connection line animations
- **Typography**: H2 fluid (36px-80px), 24px titles, 18px descriptions
- **Process Nodes**: Orange circles with white numbers, hover effects
- **Colors**: Dark text, orange brand color, light backgrounds

---

### 6. FAQ Section
**File**: `src/components/sections/FAQ.tsx`

#### Content Structure
```jsx
<section className="py-24 bg-[#f2f2f2] relative overflow-hidden">
  {/* Background Image */}
  <img src="/icons/v2.png" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20" />
  
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-16">
    {/* First Row - Title and Description */}
    <div className="text-center mb-16">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-black tracking-tight text-[#2e2c2f] leading-[4rem] max-w-[70%] mx-auto mb-6">
        Frequently Asked Questions
      </h2>
      <p className="font-heading text-gray-600 mx-auto" style={{ fontSize: '18px' }}>
        Find answers to common questions about our services and process.
      </p>
    </div>

    {/* Second Row - FAQ Items */}
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-[8px] bg-white/80 backdrop-blur-sm lg:overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-heading font-semibold text-[#2e2c2f] text-lg lg:text-2xl" style={{ fontSize: '18px' }}>{item.question}</h4>
              <ChevronDown 
                className={`h-6 w-6 text-[#FF4937] transition-transform ${
                  openIndexes.has(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`transition-all duration-300 ${
              openIndexes.has(index) ? 'max-h-fit' : 'max-h-0'
            } overflow-hidden`}>
              <div className="px-6 py-4 pb-10 lg:pb-4 bg-gray-50/80 backdrop-blur-sm">
                <p className="font-sans text-gray-600" style={{ fontSize: '16px' }}>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Light gray (`#f2f2f2`) with background image
- **Typography**: H2 fluid (36px-80px), 18px questions, 16px answers
- **Layout**: Centered FAQ items with expand/collapse functionality
- **Colors**: Dark text, orange chevrons, light backgrounds
- **Fonts**: Red Hat Display for questions, Inter for answers

---

### 7. About Section
**File**: `src/components/sections/About.tsx`

#### Content Structure
```jsx
<section className="py-24 bg-[#f2f2f2] relative overflow-hidden">
  {/* Background Image */}
  <img src="/icons/V1.png" className="absolute right-[150px] top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20" />
  
  <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
    {/* Header */}
    <div className="mb-16 text-center">
      <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[1.2] max-w-[70%] mx-auto">
        B2B growth, built to scale.
      </h2>
      <p className="mt-4 text-gray-600" style={{ fontSize: '18px' }}>
        Senior marketing leadership and execution for post-seed.
      </p>
      <p className="mt-4 text-gray-600" style={{ fontSize: '18px' }}>
        Piquiyo helps B2B teams move from early traction to predictable, scalable growth. We work alongside founders, CMOs, and Heads of Growth to design and run marketing systems that hold up under board scrutiny.
      </p>
      <div className="mt-8">
        <button className="px-8 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 transition-colors">
          Book a free growth audit
        </button>
      </div>
    </div>
  </div>
</section>
```

#### Key Styling
- **Background**: Light gray (`#f2f2f2`) with background image
- **Typography**: H2 fluid (36px-80px), 18px body text
- **Layout**: Centered content with background image offset
- **Colors**: Dark text, orange CTA button
- **Line Height**: 1.2 for tighter spacing

---

## 🔧 Technical Implementation Notes

### Responsive Strategy
- **Mobile-First**: Base styles for mobile, enhanced for desktop
- **Fluid Typography**: `clamp()` for smooth scaling
- **Flexible Layouts**: Grid systems that adapt to screen size
- **Touch-Friendly**: Larger tap targets on mobile

### Animation System
- **Framer Motion**: For complex animations (OurApproach)
- **CSS Transitions**: For hover states and simple animations
- **Staggered Reveals**: Sequential element animations
- **Viewport Triggers**: Animations start when visible

### Component Architecture
- **Section-Based**: Each major section is a separate component
- **Reusable Elements**: Buttons, cards, icons
- **Consistent Styling**: Shared color and typography system
- **Semantic HTML**: Proper heading hierarchy and structure

### Mobile Optimizations
- **Typography**: 36px H2 on mobile, 18px body text
- **Spacing**: 16px base spacing unit
- **Touch Targets**: Minimum 44px for interactive elements
- **Layout**: Single column on mobile, multi-column on desktop

### Performance Considerations
- **Lazy Loading**: Images and animations trigger on viewport
- **Optimized Animations**: Hardware-accelerated transforms
- **Efficient State Management**: Set-based state for FAQ
- **Minimal Re-renders**: Optimized component structure

---

## 📱 Mobile-Specific Features

### Typography Scaling
- **H1**: 48px mobile → 160px desktop
- **H2**: 36px mobile → 80px desktop
- **Body**: 18px consistent across devices

### Layout Adaptations
- **Hero**: Left-aligned mobile, two-column desktop
- **Process**: Vertical mobile, horizontal desktop
- **Cards**: Single column mobile, multi-column desktop

### Touch Optimizations
- **Button Sizes**: Minimum 44px tap targets
- **Spacing**: 16px minimum between interactive elements
- **Hover States**: Disabled on mobile, enabled on desktop
- **Scroll Behavior**: Smooth scrolling for long content

---

## 🎯 Design Principles

### Visual Hierarchy
1. **Primary**: H1 headings (48-160px)
2. **Secondary**: H2 headings (36-80px)
3. **Tertiary**: H4 headings (18-24px)
4. **Body**: Paragraph text (16-18px)

### Color Usage
1. **Brand**: #FF4937 (CTA buttons, accents)
2. **Text**: #2e2c2f (headings, body text)
3. **Backgrounds**: #202020 (dark), #f2f2f2 (light)
4. **Contrast**: High contrast for accessibility

### Spacing System
1. **Base Unit**: 8px grid
2. **Component Padding**: 16px-24px
3. **Section Spacing**: 64px-96px
4. **Container Margins**: 5% of viewport width

---

## 🦴 Skeleton Loading Implementation

### Overview
Add skeleton loading components for better user experience during data fetching and content loading.

### Skeleton Component Structure
**File**: `src/components/ui/Skeleton.tsx`

```tsx
import React from 'react'
import { cn } from '../../lib/cx'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
      {...props}
    />
  )
}

// Specific skeleton components
export const CardSkeleton = () => (
  <div className="rounded-lg border border-gray-200 p-4 space-y-3">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-5/6" />
  </div>
)

export const HeroSkeleton = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
    <div className="flex-1 space-y-4">
      <Skeleton className="h-16 w-3/4" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
    <div className="flex-1 flex justify-center">
      <Skeleton className="w-48 h-48 rounded-lg" />
    </div>
  </div>
)

export const ProcessSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="w-20 h-20 rounded-full mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-full" />
      </div>
    ))}
  </div>
)

export const FaqSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-5 rounded" />
        </div>
        <Skeleton className="h-4 w-full mt-3" />
      </div>
    ))}
  </div>
)
```

### Loading State Management
**File**: `src/hooks/useLoadingState.ts`

```tsx
import { useState, useEffect } from 'react'

interface LoadingState {
  isLoading: boolean
  isError: boolean
  data: any
}

export const useLoadingState = (fetcher: () => Promise<any>, dependencies: any[] = []) => {
  const [state, setState] = useState<LoadingState>({
    isLoading: true,
    isError: false,
    data: null
  })

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, isError: false }))
        const data = await fetcher()
        if (isMounted) {
          setState({ isLoading: false, isError: false, data })
        }
      } catch (error) {
        if (isMounted) {
          setState({ isLoading: false, isError: true, data: null })
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return state
}
```

### Section Implementations

#### Hero Section with Loading
```tsx
// In Hero.tsx
import { HeroSkeleton } from '../ui/Skeleton'
import { useLoadingState } from '../../hooks/useLoadingState'

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const { isLoading, data: heroData } = useLoadingState(
    () => Promise.resolve({ /* hero data */ }),
    []
  )

  if (isLoading) {
    return (
      <section className={cn('relative overflow-hidden bg-white', className)}>
        <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
          <HeroSkeleton />
        </div>
      </section>
    )
  }

  // Normal hero component rendering
  return (
    <section className={cn('relative overflow-hidden bg-white', className)}>
      {/* Hero content */}
    </section>
  )
}
```

#### Services Section with Loading
```tsx
// In Services.tsx
import { CardSkeleton } from '../ui/Skeleton'
import { useLoadingState } from '../../hooks/useLoadingState'

export const Services: React.FC<ServicesProps> = ({ className }) => {
  const { isLoading, data: servicesData } = useLoadingState(
    () => fetch('/api/services'),
    []
  )

  if (isLoading) {
    return (
      <section className={cn('py-24 bg-gray-50', className)}>
        <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>
          <div className="max-w-[80%] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Normal services component rendering
  return (
    <section className={cn('py-24 bg-gray-50', className)}>
      {/* Services content */}
    </section>
  )
}
```

#### FAQ Section with Loading
```tsx
// In FAQ.tsx
import { FaqSkeleton } from '../ui/Skeleton'
import { useLoadingState } from '../../hooks/useLoadingState'

export const FAQ: React.FC<FAQProps> = ({ className }) => {
  const { isLoading, data: faqData } = useLoadingState(
    () => fetch('/api/faq'),
    []
  )

  if (isLoading) {
    return (
      <section className={cn('py-24 bg-[#f2f2f2]', className)}>
        <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <FaqSkeleton />
          </div>
        </div>
      </section>
    )
  }

  // Normal FAQ component rendering
  return (
    <section className={cn('py-24 bg-[#f2f2f2]', className)}>
      {/* FAQ content */}
    </section>
  )
}
```

### Global Loading Component
**File**: `src/components/ui/LoadingSpinner.tsx`

```tsx
import React from 'react'
import { cn } from '../../lib/cx'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-brand',
          sizeClasses[size]
        )}
      />
    </div>
  )
}

// Full page loading overlay
export const LoadingOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
```

### Page-Level Loading Implementation
**File**: `src/pages/Home.tsx`

```tsx
import React, { Suspense } from 'react'
import { LoadingOverlay } from '../components/ui/LoadingSpinner'

// Lazy load sections for better performance
const Hero = React.lazy(() => import('../components/sections/Hero'))
const WhoWeWorkWith = React.lazy(() => import('../components/sections/WhoWeWorkWith'))
const WhatWeDo = React.lazy(() => import('../components/sections/WhatWeDo'))
const Services = React.lazy(() => import('../components/sections/Services'))
const OurApproach = React.lazy(() => import('../components/sections/OurApproach'))
const FAQ = React.lazy(() => import('../components/sections/FAQ'))
const About = React.lazy(() => import('../components/sections/About'))

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingOverlay />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <WhoWeWorkWith />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <WhatWeDo />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <OurApproach />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<LoadingOverlay />}>
        <About />
      </Suspense>
    </div>
  )
}
```

### Skeleton Loading Best Practices

#### 1. Match Real Content Structure
```tsx
// Good: Matches actual component structure
const CardSkeleton = () => (
  <div className="rounded-lg border p-4 space-y-3">
    <Skeleton className="h-4 w-3/4" />  // Matches h4 title
    <Skeleton className="h-3 w-full" />  // Matches p text
    <Skeleton className="h-3 w-5/6" />  // Matches additional text
  </div>
)
```

#### 2. Use Proper Animation
```tsx
// Good: Subtle pulse animation
<Skeleton className="animate-pulse rounded-md bg-gray-200" />

// Bad: No animation or too flashy
<Skeleton className="rounded-md bg-gray-200" />
```

#### 3. Responsive Skeletons
```tsx
// Good: Responsive skeleton grid
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {[...Array(6)].map((_, i) => (
    <CardSkeleton key={i} />
  ))}
</div>
```

#### 4. Loading State Types
```tsx
// Different loading states for different scenarios
const LoadingStates = {
  skeleton: 'Show skeleton placeholders',
  spinner: 'Show loading spinner',
  overlay: 'Show full-page overlay',
  shimmer: 'Show shimmer effect'
}
```

### Performance Considerations

#### 1. Lazy Loading
```tsx
// Lazy load heavy components
const HeavySection = React.lazy(() => import('./HeavySection'))

// Wrap with Suspense
<Suspense fallback={<Skeleton />}>
  <HeavySection />
</Suspense>
```

#### 2. Optimistic UI
```tsx
// Show skeleton immediately while fetching
const OptimisticComponent = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData().then(result => {
      setData(result)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) return <Skeleton />
  return <RealComponent data={data} />
}
```

#### 3. Skeleton Variants
```tsx
// Different skeleton styles for different content types
const SkeletonVariants = {
  text: <Skeleton className="h-4 w-full" />,
  heading: <Skeleton className="h-8 w-3/4" />,
  avatar: <Skeleton className="w-12 h-12 rounded-full" />,
  button: <Skeleton className="h-10 w-24 rounded" />,
  image: <Skeleton className="w-full h-48 rounded" />
}
```

### Custom Skeleton Animations

#### Shimmer Effect
```tsx
const ShimmerSkeleton = ({ className }: { className?: string }) => (
  <div className={cn('relative overflow-hidden', className)}>
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
    <Skeleton className="bg-gray-200" />
  </div>
)

// Add to Tailwind config
@keyframes shimmer {
  0% { transform: translateX(-100%) }
  100% { transform: translateX(100%) }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
```

#### Wave Animation
```tsx
const WaveSkeleton = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 animate-wave" />
    <div className="bg-transparent" />
  </div>
)

@keyframes wave {
  0%, 100% { transform: translateY(-100%) }
  50% { transform: translateY(100%) }
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}
```

### Implementation Checklist

#### Required Components
- [ ] `Skeleton.tsx` - Base skeleton component
- [ ] `LoadingSpinner.tsx` - Loading spinner
- [ ] `LoadingOverlay.tsx` - Full-page overlay
- [ ] `useLoadingState.ts` - Loading state hook

#### Section Updates
- [ ] Hero.tsx - Add skeleton loading
- [ ] Services.tsx - Add card skeletons
- [ ] FAQ.tsx - Add accordion skeletons
- [ ] OurApproach.tsx - Add process skeletons
- [ ] Other sections as needed

#### Performance Optimizations
- [ ] Implement lazy loading for heavy sections
- [ ] Add optimistic UI where appropriate
- [ ] Use proper loading states for API calls
- [ ] Add error boundaries for failed loads

#### User Experience
- [ ] Skeletons match real content structure
- [ ] Smooth transitions between loading and loaded states
- [ ] Proper loading indicators for async operations
- [ ] Graceful error handling for failed loads

---

## 🚀 Implementation Checklist

### Required Dependencies
```json
{
  "react": "^18.0.0",
  "typescript": "^4.0.0",
  "tailwindcss": "^3.0.0",
  "framer-motion": "^10.0.0",
  "lucide-react": "^0.263.1"
}
```

### File Structure Setup
```
src/
├── components/
│   ├── sections/ (7 section components)
│   ├── ui/ (reusable UI components)
│   └── layout/ (layout components)
├── lib/ (utility functions)
├── pages/ (page components)
└── styles/ (global styles)
```

### Tailwind Configuration
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Red Hat Display', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: '#FF4937',
        text: '#2e2c2f',
      },
    },
  },
}
```

---

## 📋 Content Guidelines

### Copywriting Style
- **Headlines**: Short, impactful, benefit-focused
- **Body Text**: Clear, concise, scannable
- **CTA Text**: Action-oriented, specific
- **Tone**: Professional, confident, direct

### Image Requirements
- **Format**: PNG, JPG, WebP
- **Optimization**: Compressed for web
- **Sizes**: Responsive variants
- **Alt Text**: Descriptive for accessibility

### Icon Usage
- **Library**: Lucide React
- **Size**: Consistent 16-32px
- **Color**: Brand orange (#FF4937)
- **States**: Hover effects for interactivity

---

This comprehensive guide provides everything needed to replicate the website with any development team or AI tool!
