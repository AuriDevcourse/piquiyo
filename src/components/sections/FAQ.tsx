import React from 'react'
import { cn } from '../../lib/cx'
import { ChevronDown } from 'lucide-react'

interface FAQProps {
  className?: string
}

interface FAQItem {
  question: string
  answer: string
}

export const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [openIndexes, setOpenIndexes] = React.useState<Set<number>>(new Set())

  const faqItems: FAQItem[] = [
    {
      question: "When should a B2B startup start investing seriously in marketing?",
      answer: "When sales can no longer be driven by the founder alone. This usually shows up when pipeline feels inconsistent, growth depends on last-minute pushes, and investors start asking how revenue will scale. It's not about ARR. It's about needing repeatable demand."
    },
    {
      question: "What stage companies do you typically work with?",
      answer: "Mostly post-seed through Series B B2B companies. In practice, that means teams with product-market fit, real revenue targets, and pressure to make growth predictable. Earlier teams usually need learning. Later teams need systems."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Rarely. Pre-seed and seed teams often need to validate the product and close early customers manually. Marketing becomes critical later, when the question shifts from 'can we sell this?' to 'how do we keep selling this every month?'"
    },
    {
      question: "Are you an agency?",
      answer: "No. Piquillo works as a senior growth partner. We combine strategic leadership with hands-on execution, but we don't operate like a traditional agency with tickets, handoffs, or junior delivery."
    },
    {
      question: "What's the difference between Piquillo and a fractional CMO?",
      answer: "Fractional CMOs often focus on direction and governance. We do that, but we also stay close to execution. We help design the system, run it with your team, and make sure it actually produces pipeline and learning."
    },
    {
      question: "What results should we expect, and how fast?",
      answer: "We don't promise numbers before diagnosis. What we do promise is speed to signal. Within the first 30–60 days, you should have clear indicators of what's working, what's not, and where to scale or stop."
    },
    {
      question: "Do you run paid ads, content, or outbound?",
      answer: "Sometimes. Only if the system requires it. We don't start with channels. We start with ICP, offer, funnel, and conversion logic. Execution follows strategy, not the other way around."
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className={cn('py-24 bg-white relative overflow-hidden min-h-[90vh]', className)}>
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* First Row - Title and Description (Centered) */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(36px,5vw,80px)] font-bold tracking-tight text-[#2e2c2f] leading-[2rem] md:leading-[4rem] max-w-[700px] mx-auto mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-heading text-gray-600 max-w-[400px] mx-auto" style={{ fontSize: '18px' }}>
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* Second Row - FAQ Items (Centered) */}
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
  )
}
