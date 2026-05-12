import HeroSection from '@/components/sections/HeroSection';
import CapBand from '@/components/sections/CapBand';
import TrustSection from '@/components/sections/TrustSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WhySection from '@/components/sections/WhySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CapBand />
      <TrustSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  );
}
