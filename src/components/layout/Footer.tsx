import React from 'react'
import { cn } from '../../lib/cx'
import { Linkedin, Instagram } from 'lucide-react'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('border-t border-gray-200 bg-[#FF4937]', className)}>
      {/* First row - Logo and Year */}
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-12 pb-6 md:pb-12">
        <div className="flex flex-row items-center justify-between">
          {/* First column - Logo */}
          <div className="flex items-center">
            <img 
              src="/icons/Piquiyo logo -white.png" 
              alt="Piquillo" 
              className="h-8"
            />
          </div>

          {/* Second column - Year headline */}
          <div className="flex items-end">
            <h2 className="text-white font-bold text-2xl md:text-3xl">{currentYear}</h2>
          </div>
        </div>

        {/* Divider inside first row */}
        <div className="w-full h-[1px] bg-white opacity-[0.6] mt-[20px]"></div>
      </div>

      {/* Second row - Links and Social */}
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 pb-8">
        {/* First row - Description */}
        <div className="mb-8">
          <p className="text-white text-sm leading-relaxed max-w-[400px] text-start">
            Execution that works. No hype, no buzzwords—just clear strategy, measurable outcomes, and delivery that moves the needle.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white opacity-[0.6] mb-8 md:hidden"></div>

        {/* Second row - Social and Legal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Column - Legal Info */}
          <div className="text-start md:text-left md:w-auto">
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-sm text-white hover:text-white/80 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-white hover:text-white/80 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Second Column - Social Links */}
          <div className="text-end md:text-start md:w-auto">
            <h3 className="text-sm font-semibold text-white mb-4">Follow us</h3>
            <div className="flex justify-end md:justify-start space-x-4">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Third Column - Logo (Desktop only) */}
          <div className="hidden md:flex justify-end items-center md:flex-1 -mt-[150px]">
            <img 
              src="/icons/Piquiyo logo-White.png" 
              alt="Piquiyo" 
              className="h-auto w-[200px]"
            />
          </div>
        </div>
      </div>

      {/* Third row - Copyright */}
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 pb-8">
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white">
            © {currentYear} piquiyo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
