# WPGraphQL Headless WordPress Setup Guide

## 🚀 **Why This Approach is Perfect for Piquiyo**

### Benefits
- **Keep your modern React stack** - no PHP conversion needed
- **Better SEO** with server-side rendering possibilities  
- **Content management** for non-technical team members
- **Scalable architecture** for future features
- **API-first design** matches your current tech stack

---

## 📋 **WordPress Backend Setup**

### Required Plugins
```bash
# Install these WordPress plugins:
1. WPGraphQL (core GraphQL API)
2. WPGraphiQL (GraphQL IDE for testing)
3. Advanced Custom Fields Pro (flexible content fields)
4. WPGraphQL for Advanced Custom Fields
5. WPGatsby by Gatsby (optional, but helpful)
```

### WordPress Content Structure

Based on your current React components, create:

#### Custom Post Types
```graphql
# Services Section
type Service {
  id: ID!
  title: String!
  content: String!
  serviceIcon: String!
  serviceDescription: String!
}

# Showcase/Clients Section  
type CaseStudy {
  id: ID!
  title: String!
  clientName: String!
  projectDescription: String!
  projectImage: MediaItem!
  technologies: [String!]!
}

# FAQ Section
type FAQ {
  id: ID!
  question: String!
  answer: String!
  category: String!
}

# Team Section
type TeamMember {
  id: ID!
  name: String!
  role: String!
  bio: String!
  photo: MediaItem!
}
```

#### Site Options (Custom Fields)
```graphql
# Hero Section
type HeroSection {
  headline: String!
  subheading: String!
  backgroundImage: MediaItem!
  ctaButton: Button!
  demoButton: Button!
}

# Company Logos
type CompanyLogo {
  logo: MediaItem!
  companyName: String!
}
```

---

## 🔧 **React App Modifications**

### 1. Install GraphQL Dependencies
```bash
npm install @apollo/client graphql
```

### 2. Create GraphQL Client
```typescript
// src/lib/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://your-wordpress-site.com/graphql'
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
```

### 3. Update Hero Component Example
```typescript
// src/components/sections/Hero.tsx
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { cn } from '../../lib/cx'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

const GET_HERO_DATA = gql`
  query GetHeroData {
    heroSection {
      headline
      subheading
      backgroundImage {
        sourceUrl
        altText
      }
      ctaButton {
        text
        url
      }
      demoButton {
        text
        url
      }
    }
    companyLogos {
      logo {
        sourceUrl
        altText
      }
      companyName
    }
  }
`

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const { loading, error, data } = useQuery(GET_HERO_DATA)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const { heroSection, companyLogos } = data

  return (
    <section className={cn('relative overflow-hidden bg-white', className)}>
      {/* Mobile background overlay */}
      <div className="lg:hidden absolute inset-0 opacity-30 flex items-start justify-end pt-8 pr-4">
        <img 
          src={heroSection.backgroundImage.sourceUrl} 
          alt={heroSection.backgroundImage.altText}
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
      
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col items-start justify-center space-y-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="flex-1 text-left lg:text-left space-y-6 lg:w-[60%]">
              <h1 className="font-heading text-[clamp(48px,8vw,160px)] font-black tracking-tight text-[#2e2c2f] leading-tight">
                <div className="font-black">{heroSection.headline}</div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mt-6">
                {heroSection.subheading}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
                <Button size="lg" className="group px-[6px] sm:px-16">
                  {heroSection.ctaButton.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group px-[6px] sm:px-16">
                  <Play className="mr-2 h-4 w-4" />
                  {heroSection.demoButton.text}
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 justify-end relative">
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                <img 
                  src={heroSection.backgroundImage.sourceUrl}
                  alt={heroSection.backgroundImage.altText}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full pt-12">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">Trusted by developers at</p>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-[2rem] sm:gap-[4rem] opacity-60 w-[90%] mx-auto">
              {companyLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.logo.sourceUrl} 
                  alt={logo.logo.altText || logo.companyName}
                  className="h-16 w-16 object-contain" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/5 to-transparent" />
    </section>
  )
}
```

---

## 🚀 **Deployment Options**

### Option 1: Static Site Generation (Recommended)
```bash
# Use Next.js or Gatsby for SSG
npm install next
# or
npm install gatsby-cli gatsby
```

### Option 2: Client-Side Rendering
- Keep current Vite setup
- Deploy to Netlify, Vercel, or similar
- WordPress as pure headless CMS

### Option 3: Hybrid (SSR + Static)
- Use Next.js with ISR (Incremental Static Regeneration)
- Best of both worlds: performance + fresh content

---

## 📊 **Performance Benefits**

| Approach | Load Time | SEO Score | Content Updates |
|----------|-----------|-----------|-----------------|
| Traditional WordPress | 2-3s | 70-80 | Easy (WordPress) |
| Headless + CSR | 1-2s | 60-70 | Easy (GraphQL) |
| Headless + SSG | 0.5-1s | 90-95 | Easy (Rebuild) |

---

## 🎯 **Migration Steps**

1. **Setup WordPress backend** with plugins
2. **Create custom post types** and fields
3. **Migrate existing content** to WordPress
4. **Update React components** to use GraphQL
5. **Test and optimize** performance
6. **Deploy to production**

---

## 💡 **Pro Tips**

- **Use WPGraphiQL** to test queries before implementing
- **Enable caching** in WPGraphQL for better performance
- **Consider WPGraphQL JWT** for authenticated content
- **Use Next.js Image** component for optimized images
- **Implement error boundaries** for GraphQL errors

This approach will give you the best of both worlds: WordPress's powerful content management combined with your modern, performant React frontend!
