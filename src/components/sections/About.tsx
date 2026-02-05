import React from 'react'
import { cn } from '../../lib/cx'

interface AboutProps {
  className?: string
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={cn('py-24 bg-gray-50 relative overflow-hidden', className)}>
      {/* Background Image */}
      <img 
        src="/icons/V1.png" 
        alt="V1 Background" 
        className="hidden lg:block absolute right-[150px] top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20"
      />
      
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* First Column - Title and Description */}
          <div className="text-left">
            <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[2rem] md:leading-[4rem] max-w-[300px] md:max-w-[700px]">
              B2B growth, built to scale.
            </h2>
            <p className="mt-4 text-gray-600 max-w-[500px]" style={{ fontSize: '18px' }}>
              Senior marketing leadership and execution for post-seed startups.
            </p>
            <p className="mt-4 text-gray-600 max-w-[500px]" style={{ fontSize: '18px' }}>
              Piquiyo helps B2B teams move from early traction to predictable, scalable growth. We work alongside founders, CMOs, and Heads of Growth to design and run marketing systems that hold up under board scrutiny.
            </p>
          </div>

          {/* Second Column - Contact Form */}
          <div className="bg-brand rounded-2xl p-8">
            {/* Title and Description */}
            <div className="mb-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white leading-[2rem] md:leading-[4rem] max-w-[300px] md:max-w-[70%] mb-6">Let's Talk</h3>
              <p className="text-white/90" style={{ fontSize: '18px' }}>
                If you're scaling past early traction and need marketing to become predictable, let's talk.
              </p>
            </div>
            
            <form className="space-y-4">
              {/* Name and Email Fields - Same Line */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-[#ffffff] text-sm font-bold mb-[5px]">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-[8px] text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-colors"
                    required
                  />
                </div>
                
                <div className="flex-1">
                  <label className="text-[#ffffff] text-sm font-bold mb-[5px]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your full email address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-[8px] text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-colors"
                    required
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div>
                <label className="text-[#ffffff] text-sm font-bold mb-[5px]">Your Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-[8px] text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-colors resize-none"
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button type="submit" className="w-full h-11 px-20 text-base inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-[#2e2c2f] border border-gray-200 hover:bg-gray-200">
                Book a free growth audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
