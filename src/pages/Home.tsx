import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Showcase } from '../components/sections/Showcase'
import { About } from '../components/sections/About'
import { WhoWeWorkWith } from '../components/sections/WhoWeWorkWith'
import { InBetween } from '../components/sections/InBetween'
import { OurApproach } from '../components/sections/OurApproach'
import { WhyPiquiyo } from '../components/sections/WhyPiquiyo'
import { FAQ } from '../components/sections/FAQ'
import { WhatWeDo } from '../components/sections/WhatWeDo'
import { Footer } from '../components/layout/Footer'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <About />
        <WhoWeWorkWith />
        <InBetween />
        <OurApproach />
        <WhyPiquiyo />
        <FAQ />
        <WhatWeDo />
      </main>
      <Footer />
    </div>
  )
}
