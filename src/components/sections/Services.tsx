import React from 'react'
import { cn } from '../../lib/cx'
import { TrendingUp, Target, FileText, Users, Share2, Megaphone } from 'lucide-react'

interface ServicesProps {
  className?: string
}

export const Services: React.FC<ServicesProps> = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  const services = [
    {
      icon: TrendingUp,
      title: 'Fractional Marketing Team',
      description: 'Get senior marketing leadership without the full-time cost. We integrate with your team to drive strategy and execution.'
    },
    {
      icon: Target,
      title: 'Growth Strategy & Planning',
      description: 'Data-driven approach to identify your ideal customer profile, market positioning, and scalable growth channels.'
    },
    {
      icon: FileText,
      title: 'Content Marketing & SEO',
      description: 'Create compelling content that ranks, converts, and establishes your brand as an industry authority.'
    },
    {
      icon: Users,
      title: 'Demand Generation',
      description: 'Multi-channel strategy to generate qualified pipeline and predictable revenue growth for your B2B business.'
    },
    {
      icon: Share2,
      title: 'Social Media & Brand',
      description: 'Build brand awareness and engagement across platforms where your customers spend their time.'
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising & Campaigns',
      description: 'Strategic paid campaigns across search, social, and display to drive measurable ROI and customer acquisition.'
    }
  ]

  return (
    <section className={cn('py-24 bg-gray-50 relative overflow-hidden', className)}>
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-[36px] md:text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[2rem] md:leading-[4rem] max-w-[700px] mx-auto mb-6">
            Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-[500px] mx-auto" style={{ fontSize: '18px' }}>
            Comprehensive marketing solutions designed to accelerate your B2B growth and scale your business effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[80%]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden bg-transparent rounded-lg transition-all duration-300 ${
                hoveredIndex === index ? 'border border-black/20' : 'border border-transparent'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-4">
                {/* First row - Icon and Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20">
                    <service.icon 
                      className="h-6 w-6 text-brand"
                    />
                  </div>
                  <h4 className="font-heading text-[#2e2c2f] font-semibold" style={{ fontSize: '24px', lineHeight: '1.1' }}>{service.title}</h4>
                </div>
                
                {/* Second row - Description */}
                <div className="w-full">
                  <p className="text-gray-600" style={{ fontSize: '18px' }}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
