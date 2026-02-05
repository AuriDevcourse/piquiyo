import React from 'react'
import { cn } from '../../lib/cx'
import { motion } from 'framer-motion'

interface OurApproachProps {
  className?: string
}

export const OurApproach: React.FC<OurApproachProps> = ({ className }) => {
  const approaches = [
    {
      title: "Strategy first, always",
      description: "We start by understanding your ICP, market motion, and growth constraints. No channels. No tactics. Just clear priorities."
    },
    {
      title: "Build the system",
      description: "We design a GTM model that connects positioning, demand generation, and sales enablement into one coherent engine."
    },
    {
      title: "Execute with discipline",
      description: "We don't hand over decks. We stay involved and help run the system with your team."
    },
    {
      title: "Measure what matters",
      description: "Pipeline, conversion, velocity, and repeatability. If it doesn't affect revenue, we don't optimise it."
    }
  ]

  return (
    <section className={cn('py-24 bg-[#f2f2f2] relative', className)}>
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
        {/* First Row - Title and Description */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[2rem] md:leading-[4rem] max-w-[700px] mx-auto">
            Our approach
          </h2>
          <p className="mt-4 text-gray-600 max-w-[500px] mx-auto" style={{ fontSize: '18px' }}>
            Strategy first, always. We start by understanding your ICP, market motion, and growth constraints.
          </p>
        </div>

        {/* Second Row - Process Steps */}
        <div className="relative w-full lg:w-[80%] mx-auto">
          {/* Desktop - Horizontal Layout */}
          <div className="hidden lg:block">
            {/* Connection Line Animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 
                         bg-gradient-to-r from-brand/30 via-brand/50 to-brand/30 
                         origin-left"
            />
            
            <div className="grid grid-cols-4 gap-8 relative">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.15,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node with Hover Effect */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-28 h-28 mx-auto rounded-full bg-brand 
                               border-2 border-brand/30 flex items-center justify-center 
                               group hover:border-brand transition-colors mb-6"
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
                className="absolute left-8 top-8 bottom-0 w-0.5 
                           bg-gradient-to-b from-brand/30 via-brand/50 to-brand/30 
                           origin-top z-10"
              />
              
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.15,
                  }}
                  className="flex items-start"
                >
                  {/* Node Column - 20% */}
                  <div className="w-[20%] flex justify-center relative z-20">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 rounded-full bg-brand 
                                 border-2 border-brand/30 flex items-center justify-center 
                                 group hover:border-brand transition-colors flex-shrink-0"
                    >
                      <span className="font-heading text-white font-bold text-xl">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Content Column - 80% */}
                  <div className="w-[80%] pl-0 lg:pl-6">
                    <div className="rounded-[12px] p-[0.9rem] lg:p-6 border border-gray-100">
                      <h4 className="font-heading text-[#2e2c2f] font-bold mb-3 text-2xl">{approach.title}</h4>
                      <p className="text-gray-600 leading-relaxed" style={{ fontSize: '18px' }}>{approach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
