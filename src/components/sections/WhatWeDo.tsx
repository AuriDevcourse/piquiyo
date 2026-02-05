import React from 'react'
import { cn } from '../../lib/cx'
import { ArrowRight } from 'lucide-react'

interface WhatWeDoProps {
  className?: string
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ className }) => {
  const processItems = [
    {
      title: "Calm precision",
      description: "Short sentences. Clear language. No noise.<br/>Confidence comes from knowing what to do next.",
      icon: ArrowRight
    },
    {
      title: "Execution honesty",
      description: "We name the work as it is.<br/> What ships, what breaks, and what actually moves the needle.",
      icon: ArrowRight
    },
    {
      title: "Speed with intent",
      description: "Fast doesn't mean rushed.<br/> It means focus, decisions, and momentum.",
      icon: ArrowRight
    },
    {
      title: "System mindset",
      description: "Nothing in isolation.<br/> Strategy, execution, and iteration working as one.",
      icon: ArrowRight
    }
  ]

  return (
    <section className={cn('min-h-screen bg-[#202020]', className)}>
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 min-h-[110vh] flex flex-col">
          {/* Top row - Text content */}
          <div className="text-white pt-[50px] mb-12 text-center lg:text-left">
            <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight leading-[2rem] md:leading-[4rem] mb-6 max-w-[700px] mx-auto lg:mx-0">
              <div className="font-black">Delivering</div>
              <div>
                <span className="font-normal italic">execution</span>
                <span className="font-black"> that works.</span>
              </div>
            </h2>
            <div className="text-lg text-white/90 leading-relaxed max-w-[350px] mx-auto lg:max-w-[500px] lg:mx-0">
              <span>The queue seeks like an operator<br className="lg:hidden" /> not an agency.</span>
              <span className="block">Clear direct and grounded in execution.</span>
              <span className="block">No hype, no buzzwords, no over-explaining.</span>
            </div>
          </div>

          {/* Bottom row - Process containers */}
          <div className="flex-1 flex items-start justify-end pb-[150px] lg:items-end">
            <div className="w-full lg:w-[70%] space-y-4">
              {processItems.map((item, index) => (
                <div key={index} className="p-4 lg:p-8 bg-[#2e2c2c2f] rounded-sm backdrop-blur-sm min-h-[60px] lg:min-h-[80px]">
                  {/* First row - Title */}
                  <div className="w-full flex justify-start lg:justify-between mb-4">
                    <h4 className="text-white font-semibold text-sm lg:text-[24px] text-left lg:text-left">{item.title}</h4>
                  </div>
                  
                  {/* Second row - Description and Icon */}
                  <div className="flex items-start justify-between w-full">
                    <div className="w-[80%] lg:w-[70%] ml-0">
                      <p className="text-white/80 text-sm lg:text-[20px] text-left" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                    
                    {/* Right side - Icon with arrow */}
                    <div className="w-[20%] lg:w-[20%] flex items-center justify-end">
                      <div className="bg-[#FF4937] rounded-full p-2 lg:p-3">
                        <item.icon className="h-4 w-4 lg:h-6 lg:w-6" style={{ color: '#202020' }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
