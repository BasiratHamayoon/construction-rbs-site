import AboutHeroSection from '@/Components/AboutHeroSection'
import AwardsSection from '@/Components/AwardsSection'
import MissionVisionCards from '@/Components/MissionVisionCards'
import TeamSection from '@/Components/TeamSection'
import ValuesStatement from '@/Components/ValuesStatement'
import React from 'react'

function page() {
  return (
      <>
        <AboutHeroSection />
        <ValuesStatement />
        <MissionVisionCards />
        <TeamSection />
        <AwardsSection />
      </>
  )
}

export default page
