import React from "react";
import HeroSection from "@/components/HeroSection";
import PartnerShowcase from "@/components/PartnerShowcase";
import AboutSection from "@/components/AboutSection";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechPlatformsSection from "@/components/TechPlatformsSection";
import MitoFeaturedSection from "@/components/MitoFeaturedSection";
import PartnerSection from "@/components/PartnerSection";
import ContactBookingSection from "@/components/ContactBookingSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section – Enterprise Headline & 3D Visuals */}
      <HeroSection />

      {/* 2. Client & Technology Partner Showcase */}
      <PartnerShowcase />

      {/* 3. About Virtual Petals – Confidentiality, Availability & Integrity */}
      <AboutSection />

      {/* 4. Company Statistics Section (Only Verified Figures) */}
      <StatisticsSection />

      {/* 5. Our Services Section with Premium Service Cards */}
      <ServicesGridSection />

      {/* 6. Our Working Process – Discover, Design, Implement, Manage */}
      <WorkingProcessSection />

      {/* 7. Why Choose Virtual Petals */}
      <WhyChooseSection />

      {/* 8. Client Testimonials (15 Genuine Stories) */}
      <TestimonialsSection />

      {/* 9. Industries We Serve */}
      <IndustriesSection />

      {/* 10. Technology Partners & Platforms */}
      <TechPlatformsSection />

      {/* 11. Featured Product – Mito (Microsoft 365 Security Assessment) */}
      <MitoFeaturedSection />

      {/* 12. Our Business Entities – NetFuxion Pro */}
      <PartnerSection />

      {/* 13. Contact & Consultation Booking Section */}
      <ContactBookingSection />
    </>
  );
}
