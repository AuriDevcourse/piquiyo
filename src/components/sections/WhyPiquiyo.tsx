import React from 'react'
import { cn } from '../../lib/cx'
import { Target, TrendingUp, Shield } from 'lucide-react'

interface WhyPiquiyoProps {
  className?: string
}

export const WhyPiquiyo: React.FC<WhyPiquiyoProps> = ({ className }) => {
  const reasons = [
    {
      title: "Speed",
      description: "Move fast without breaking things. We deliver in weeks, not months."
    },
    {
      title: "Precision",
      description: "Data-driven decisions. Every action is measured and optimized."
    },
    {
      title: "Results",
      description: "91% average growth rate. Our track record speaks for itself."
    }
  ]

  return (
    <section className={cn('relative overflow-hidden bg-[#202020]', className)}>
      {/* Background Image */}
      <img 
        src="/icons/V1.png" 
        alt="V1 Background" 
        className="absolute right-0 top-4 lg:right-[50px] lg:top-1/2 lg:transform lg:-translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20"
      />
      
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* First Column - Title, Description, and Three Reasons */}
          <div className="text-left">
            <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight leading-[2rem] md:leading-[4rem] mb-6 max-w-[700px] text-white">
              Why Piquiyo
            </h2>
            <p className="mt-4 text-white/90 max-w-[500px]" style={{ fontSize: '18px' }}>
              Clients work with Piquiyo because they value strategic leadership over tactical execution.
            </p>
            
            {/* Three Reasons */}
            <div className="mt-8 space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="space-y-2">
                  {/* First row - Icon and Title */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-[50px] h-[50px] bg-brand/20 flex items-center justify-center" style={{ borderRadius: '8px' }}>
                      {index === 0 && <Target className="w-[30px] h-[30px] text-brand" />}
                      {index === 1 && <TrendingUp className="w-[30px] h-[30px] text-brand" />}
                      {index === 2 && <Shield className="w-[30px] h-[30px] text-brand" />}
                    </div>
                    <h3 className="text-white font-semibold" style={{ fontSize: '24px' }}>{reason.title}</h3>
                  </div>
                  
                  {/* Second row - Description */}
                  <div className="ml-[70px]">
                    <p className="text-white/80" style={{ fontSize: '18px' }}>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Column - Container with Bullet Points and Icons */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[12px] p-4 flex items-center justify-start">
            <div className="text-left w-full lg:w-full">
              <h3 className="mt-4 text-[#f2f2f2] font-semibold text-2xl max-w-[600px] mb-8">What sets us apart</h3>
              <ul className="space-y-6">
              <li className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="flex-1 lg:flex-initial">Strategic leadership and guidance</span>
              </li>
              <li className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="flex-1 lg:flex-initial">Data-driven marketing decisions</span>
              </li>
              <li className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="flex-1 lg:flex-initial">Sustainable growth systems</span>
              </li>
              <li className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="flex-1 lg:flex-initial">Direct access to senior operators</span>
              </li>
              <li className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="flex-1 lg:flex-initial">Board-ready marketing systems</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
