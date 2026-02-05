import React from 'react'
import { Button } from '../components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="font-heading text-9xl font-bold text-muted-foreground/20">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Page not found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been removed, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.history.back()} className="group">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'} className="group">
            <Home className="mr-2 h-4 w-4" />
            Home Page
          </Button>
        </div>
      </div>
    </div>
  )
}
