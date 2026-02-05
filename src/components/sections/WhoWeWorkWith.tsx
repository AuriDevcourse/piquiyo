import React from 'react'
import { cn } from '../../lib/cx'
import { Clock, Users, ArrowRight } from 'lucide-react'

interface WhoWeWorkWithProps {
  className?: string
}

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ className }) => {
  return (
    <section className={cn('py-24 bg-[#202020] relative overflow-hidden', className)}>
      {/* Background Image */}
      <img 
        src="/icons/V4.png" 
        alt="V4 Background" 
        className="absolute left-[50px] top-1/2 transform -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-20"
      />
      
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-start">
          {/* First Column - Title, Subtitle, Description */}
          <div className="text-left relative z-10">
            <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight leading-[2rem] md:leading-[4rem] mb-6 max-w-[700px] mx-auto lg:mx-0 text-white">
              Who we <span className="font-normal italic">work</span> with
            </h2>
            <h3 className="mt-4 text-white font-semibold text-2xl max-w-[600px]">We partner with post-seed B2B startups that need growth execution, not more theory.</h3>
            <p className="mt-2 text-white/80 max-w-[500px]" style={{ fontSize: '18px' }}>
              Short, sharp, confident teams ready to scale.
            </p>
          </div>

          {/* Second Column - Three Container Boxes */}
          <div className="flex flex-col md:flex-row gap-8 justify-end w-[90%] md:w-[100%]">
            {/* First Box - Ideal Clients */}
            <div className="w-full md:w-[30%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-[12px] p-8 transition-all duration-300 hover:border-white/20 hover:transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 mb-6">
                <Users className="w-4 h-4 text-brand/60" />
                <h4 className="font-heading text-white font-bold text-xl">Ideal Clients</h4>
              </div>
              <ul className="space-y-4">
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>Post-seed B2B startups</span>
                </li>
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>$1M-$10M ARR</span>
                </li>
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>Product-market fit</span>
                </li>
              </ul>
            </div>

            {/* Second Box - Industries */}
            <div className="w-full md:w-[35%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-[12px] p-8 transition-all duration-300 hover:border-white/20 hover:transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-4 h-4 text-brand/60" />
                <h4 className="font-heading text-white font-bold text-xl">Industries</h4>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>SaaS & Tech</span>
                </li>
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>FinTech</span>
                </li>
                <li className="text-white font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand/60 rounded-full"></span>
                  <span>B2B Services</span>
                </li>
              </ul>
            </div>

            {/* Third Box - Not a fit if */}
            <div className="w-full md:w-[35%] bg-brand/10 backdrop-blur-sm border border-brand/20 rounded-[12px] p-8 transition-all duration-300 hover:border-brand/30 hover:transform hover:-translate-y-1">
              <div className="flex items-center space-x-2 mb-6">
                <ArrowRight className="w-4 h-4 text-brand" />
                <h4 className="font-heading text-brand font-bold text-xl">Not a fit if</h4>
              </div>
              <ul className="space-y-3">
                <li className="text-brand font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand rounded-full"></span>
                  <span>Pre-seed stage</span>
                </li>
                <li className="text-brand font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand rounded-full"></span>
                  <span>No revenue yet</span>
                </li>
                <li className="text-brand font-medium flex items-center space-x-2">
                  <span className="w-1.5 h-1 bg-brand rounded-full"></span>
                  <span>Consumer products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
