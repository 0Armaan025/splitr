import HeroSection from '@/components/hero/hero-section';
import React from 'react'

const HomePage = () => {
  return (
    <div className="homePage  ">
        {/* let's have the navbar first
        // for that let's create the components folder that can be reused and a lib/utils.ts file too :) */}

        {/* now let's make the heroSection as a component */}
          <HeroSection/>
    </div>
  )
}

export default HomePage;