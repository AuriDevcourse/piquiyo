import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cx'
import { Button } from '../ui/Button'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false) // Scrolling down
      } else {
        setIsScrollingUp(true) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={cn(`sticky top-0 z-[100] w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-transform duration-300 ${
      isScrollingUp ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'shadow-md' : ''}`, className)}>
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4 relative z-[101]">
            <img 
              src="/icons/Piquillo Logo.png" 
              alt="Piquillo" 
              className="h-8"
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-brand"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button size="sm">
              Book a free growth audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-[101]">
            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80" 
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Sliding menu */}
            <div className="absolute inset-0 right-0 w-full h-screen bg-white/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-out">
              {/* Header with logo only */}
              <div className="flex justify-start items-center p-4 border-b border-gray-200">
                <img 
                  src="/icons/Piquiyo logo-White.png" 
                  alt="Piquiyo" 
                  className="h-8"
                />
              </div>
              
              {/* Navigation items */}
              <div className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="space-y-6 text-center">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-lg font-medium text-gray-900 hover:text-brand transition-all duration-300 transform"
                      style={{
                        animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Bottom button */}
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="w-full"
                    style={{
                      animation: isMenuOpen ? `slideIn 0.3s ease-out 0.5s both` : 'none'
                    }}
                  >
                    Book a free growth audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
