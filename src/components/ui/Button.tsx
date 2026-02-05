import React from 'react'
import { cn } from '../../lib/cx'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  loading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-strong',
      secondary: 'bg-gray-100 text-[#2e2c2f] border border-gray-200 hover:bg-gray-200',
      outline: 'border border-gray-200 bg-white hover:bg-gray-50 text-[#2e2c2f]',
      ghost: 'hover:bg-gray-100 text-[#2e2c2f]',
      destructive: 'bg-red-900 text-white hover:bg-red-800'
    }
    
    const sizes = {
      sm: 'h-9 px-12 text-sm',
      md: 'h-10 px-16 py-2',
      lg: 'h-11 px-20 text-base',
      icon: 'h-10 w-10'
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
