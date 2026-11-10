import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MitoShowcase from "@/components/MitoShowcase";
import PartnerSection from "@/components/PartnerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechEcosystem from "@/components/TechEcosystem";
import MitoDemoBooking from "@/components/MitoDemoBooking";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Virtual Petals */}
      <AboutSection />

      {/* 3. Our Services (8 Premium Cards) */}
      <ServicesSection />

      {/* 4. Our Product – MITO Showcase */}
      <MitoShowcase />

      {/* 5. Strategic Partner – NETFUXION PRO */}
      <PartnerSection />

      {/* 6. Why Choose Virtual Petals */}
      <WhyChooseUs />

      {/* 7. Client Success Stories (Authentic Testimonials) */}
      <TestimonialsSection />

      {/* 8. Our Technology Ecosystem */}
      <TechEcosystem />

      {/* 8. Mito Demo Booking */}
      <MitoDemoBooking />

      {/* 9. General Contact Section */}
      <ContactForm />
    </>
  );
}
