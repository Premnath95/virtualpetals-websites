import React from "react";
import HeroSection from "@/components/HeroSection";
import CompanyStorySection from "@/components/CompanyStorySection";
import EnterpriseServicesSection from "@/components/EnterpriseServicesSection";
import BusinessOutcomesSection from "@/components/BusinessOutcomesSection";
import MitoShowcase from "@/components/MitoShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnerSection from "@/components/PartnerSection";
import TechEcosystem from "@/components/TechEcosystem";
import InsightsSection from "@/components/InsightsSection";
import WhyVirtualPetalsSection from "@/components/WhyVirtualPetalsSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section – Enterprise Editorial Hero */}
      <HeroSection />

      {/* 2. Who We Are – Company Story (Section 6) */}
      <CompanyStorySection />

      {/* 3. What We Do – Enterprise Service Architecture (Section 7) */}
      <EnterpriseServicesSection />

      {/* 4. How We Help – Business Outcomes 01-04 (Section 8) */}
      <BusinessOutcomesSection />

      {/* 5. Proprietary SaaS Product – MITO Showcase (Section 9) */}
      <MitoShowcase />

      {/* 6. Client Success Stories – 15 Authentic Testimonials (Section 10) */}
      <TestimonialsSection />

      {/* 7. Our Business Entities – NetFuxion Pro Registered Entity (Section 11) */}
      <PartnerSection />

      {/* 8. Technology Ecosystem & Partner Standards (Section 12) */}
      <TechEcosystem />

      {/* 9. Insights & Thought Leadership (Section 13) */}
      <InsightsSection />

      {/* 10. Why Virtual Petals – Your Technology Partner for What's Next (Section 14) */}
      <WhyVirtualPetalsSection />

      {/* 11. Enterprise Call to Action & Direct Consultation (Section 15) */}
      <ContactForm />
    </>
  );
}
