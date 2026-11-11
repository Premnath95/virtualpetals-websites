import React from "react";
import HeroSection from "@/components/HeroSection";
import ClientLogosTicker from "@/components/ClientLogosTicker";
import ServicesSection from "@/components/ServicesSection";
import MitoShowcase from "@/components/MitoShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnerSection from "@/components/PartnerSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 3D WebGL Cloud Topology & Control Plane */}
      <HeroSection />

      {/* 2. Authentic Global Client Logos Ticker */}
      <ClientLogosTicker />

      {/* 3. 7 Core Enterprise Practice Areas (Bento Grid) */}
      <ServicesSection />

      {/* 4. Dedicated "Our Products" Section – MITO Platform */}
      <MitoShowcase />

      {/* 5. Authentic Client Success Stories & Testimonials */}
      <TestimonialsSection />

      {/* 6. Virtual Petals Business Entities – NetFuxion Pro */}
      <PartnerSection />

      {/* 7. High-Converting Consultation & Direct Booking CTA */}
      <ConsultationCTA />
    </>
  );
}
