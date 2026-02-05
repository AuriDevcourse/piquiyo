import React from 'react'
import { cn } from '../../lib/cx'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative overflow-hidden bg-white', className)}>
      {/* Mobile background overlay */}
      <div className="lg:hidden absolute inset-0 opacity-30 flex items-start justify-end pt-8 pr-4">
        <img 
          src="/icons/V1.png" 
          alt="V1 Background" 
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
      
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col items-start justify-center space-y-8 py-16 md:py-24">
          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            {/* Left side - Text content */}
            <div className="flex-1 text-left lg:text-left space-y-6 lg:w-[60%]">
              <h1 className="font-heading text-[clamp(48px,8vw,160px)] font-black tracking-tight text-[#2e2c2f] leading-tight">
                <div className="font-black">Delivering</div>
                <div>
                  <span className="font-normal italic">Faster</span>
                  <span className="font-black" style={{ marginLeft: '10px' }}>Results</span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mt-6">
                The complete development platform for building modern web applications. 
                Ship faster with our intuitive tools and comprehensive documentation.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
                <Button size="lg" className="group px-[6px] sm:px-16">
                  Book a free growth audit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group px-[6px] sm:px-16">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right side - V1 icon */}
            <div className="hidden lg:flex flex-1 justify-end relative">
              {/* V1 icon aligned to right */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                <img 
                  src="/icons/V1.png" 
                  alt="V1" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Company logos */}
          <div className="w-full pt-12">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">Trusted by developers at</p>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-[2rem] sm:gap-[4rem] opacity-60 w-[90%] mx-auto">
              <img src="/icons/Zendesk Black.svg" alt="Zendesk" className="h-16 w-16 object-contain" />
              <img src="/icons/Seedra Ventures Black.svg" alt="Seedra" className="h-16 w-16 object-contain" />
              <img src="/icons/Default Partner Black.svg" alt="Partner 3" className="h-16 w-16 object-contain" />
              <img src="/icons/Zendesk Black.svg" alt="Partner 4" className="h-16 w-16 object-contain" />
              <img src="/icons/Seedra Ventures Black.svg" alt="Partner 5" className="h-16 w-16 object-contain" />
              <img src="/icons/Default Partner Black.svg" alt="Partner 6" className="h-16 w-16 object-contain" />
              <img src="/icons/Zendesk Black.svg" alt="Partner 7" className="h-16 w-16 object-contain" />
              <img src="/icons/Seedra Ventures Black.svg" alt="Partner 8" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/5 to-transparent" />
    </section>
  )
}
