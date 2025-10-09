import AboutSection from '@/Components/AboutSection'
import GallerySection from '@/Components/Galleryection'
import HeroSection from '@/Components/HeroSection'
import OurPurpose from '@/Components/OurPurpose'
import QuoteSection from '@/Components/QuoteSection'
import SafetySection from '@/Components/SaftySection'
import SubscriptionSection from '@/Components/SubscriptionSection'
import TestimonialSection from '@/Components/TestimonialSection'
import WhatWeDo from '@/Components/WhatWeDo'
import React from 'react'

function Index() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurPurpose />
      <WhatWeDo />
      <GallerySection />
      <SubscriptionSection />
      <TestimonialSection />
      <SafetySection />
      <QuoteSection />
    </div>
  )
}

export default Index;
