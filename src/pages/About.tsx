import React from 'react'
import { MarkdownRenderer } from '../components/ui/MarkdownRenderer'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-[90%] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-4xl">
          <MarkdownRenderer filename="about.md" className="prose prose-lg" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
