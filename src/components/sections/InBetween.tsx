import React from 'react'
import { cn } from '../../lib/cx'

interface InBetweenProps {
  className?: string
}

export const InBetween: React.FC<InBetweenProps> = ({ className }) => {
  return (
    <section className={cn('relative overflow-hidden bg-white', className)}>
      <div className="w-[90%] lg:w-[70%] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="relative w-full h-[600px] lg:h-full">
          {/* Full height background image */}
          <img 
            src="/images/team.jpg" 
            alt="Team Background" 
            className="w-full h-full object-cover"
            style={{ 
              minHeight: '600px',
              filter: 'grayscale(100%)'
            }}
          />
          
          {/* V1 icon 50px from left edge */}
          <div className="absolute -left-32 lg:-left-20 top-1/2 transform -translate-y-1/2 z-[100]">
            <img 
              src="/icons/V1.png" 
              alt="V1" 
              className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
