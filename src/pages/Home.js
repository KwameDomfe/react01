import React from 'react'
import HeroSection from '../components/organisms/HeroSection'
import CorePurposeSection from '../components/organisms/CorePurposeSection'
import CoreServicesSection from '../components/organisms/CoreServicesSection'
import ProjectsSection from '../components/organisms/ProjectsSection'
import GlobabuildSection from '../components/organisms/GlobabuildSection'
import AddressSection from '../components/organisms/AddressSection'
import FAQsSection from '../components/organisms/FAQsSection'

export default function Home(){
  return (
    <div id="home" 
        className=""
    >
        {/* <HeroSection /> */}

        {/* <CorePurposeSection />

        <CoreServicesSection />

        <ProjectsSection />

        <GlobabuildSection />

        <AddressSection /> */}

        <FAQsSection />
    </div>
  )
}
