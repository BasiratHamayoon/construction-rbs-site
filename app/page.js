import AboutSection from './Components/AboutSection';
import GallerySection from './Components/Galleryection';
import HeroSection from './Components/HeroSection';
import OurPurpose from './Components/OurPurpose';
import QuoteSection from './Components/QuoteSection';
import SaftySection from './Components/SaftySection';
import SubscriptionSection from './Components/SubscriptionSection';
import TestimonialSection from './Components/TestimonialSection';
import WhatWeDo from './Components/WhatWeDo';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurPurpose />
      <WhatWeDo />
      <GallerySection />
      <SubscriptionSection />
      <TestimonialSection />
      <SaftySection />
      <QuoteSection />
    </div>
  );
}
