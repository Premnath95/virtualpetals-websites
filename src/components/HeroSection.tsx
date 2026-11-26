"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Cloud, Server, Sparkles } from "lucide-react";

interface SlideData {
  tag: string;
  headline: string;
  description: string;
  image: string;
  imageMobile: string;
  imageAlt: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    tag: "Cybersecurity & Cloud Solutions",
    headline: "Enterprise Cloud, Cybersecurity & IT Solutions Built for What's Next.",
    description:
      "Virtual Petals delivers enterprise cloud solutions, Microsoft 365 services, cybersecurity, IT infrastructure management and DevOps automation to help businesses build secure, scalable and reliable IT environments.",
    image: "/images/hero/cybersecurity.jpg",
    imageMobile: "/images/hero/cybersecurity-m.jpg",
    imageAlt: "Enterprise Security Operations Center team monitoring threat intelligence",
  },
  {
    tag: "Cloud Architecture & Migration",
    headline: "Cloud engineered for performance, resilience and governance.",
    description:
      "Architect, migrate and govern enterprise Microsoft Azure and AWS environments with automated failover, strict compliance benchmarks and proactive FinOps cost management.",
    image: "/images/hero/cloud.jpg",
    imageMobile: "/images/hero/cloud-m.jpg",
    imageAlt: "Enterprise Cloud Architects reviewing hybrid cloud infrastructure",
  },
  {
    tag: "IT Infrastructure & 24/7 Operations",
    headline: "Reliable infrastructure operations delivering peace of mind 24/7.",
    description:
      "Eliminate downtime with round-the-clock infrastructure telemetry, dedicated Tier 2/3 engineering support, immutable disaster recovery and automated patch pipelines.",
    image: "/images/hero/it-infrastructure.jpg",
    imageMobile: "/images/hero/it-infrastructure-m.jpg",
    imageAlt: "Network operations center engineers managing enterprise infrastructure",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#EDF3F8]" aria-label="Virtual Petals Enterprise IT Solutions">
      {/* Hero Stage Container */}
      <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center">
        {/* Background Plates: Real Enterprise IT / SOC Photography */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop Plate: High-res realistic operations center */}
              <div className="hidden sm:block absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-[78%_center] lg:object-[82%_center]"
                  quality={90}
                />
              </div>

              {/* Mobile Plate */}
              <div className="sm:hidden absolute inset-0 w-full h-full">
                <Image
                  src={slide.imageMobile || slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                  quality={85}
                />
              </div>
            </div>
          ))}

          {/* Desktop Gradient Overlay: Pure White on Left fading smoothly into photo on Right */}
          <div
            className="hidden sm:block absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(97deg, #ffffff 0%, rgba(255, 255, 255, 0.985) 30%, rgba(255, 255, 255, 0.90) 44%, rgba(255, 255, 255, 0.52) 58%, rgba(255, 255, 255, 0.12) 66%, rgba(255, 255, 255, 0) 74%)",
            }}
          />

          {/* Mobile Overlay: Solid top gradient to ensure crystal-clear text readability */}
          <div
            className="sm:hidden absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0.7) 75%, rgba(255,255,255,0.3) 100%)",
            }}
          />
        </div>

        {/* Carousel Navigation Buttons (Procain style snav) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white text-gray-700 hover:text-brand-dark border border-gray-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/95 hover:bg-white text-gray-700 hover:text-brand-dark border border-gray-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Content Grid (Left-Aligned, Full-Width Enterprise Blueprint) */}
        <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:py-24">
          <div className="max-w-[620px] lg:max-w-[660px]">
            {/* Trust Chip / Social Proof Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200/90 rounded-full px-4 py-2 text-xs sm:text-[13px] font-bold text-brand-dark shadow-sm mb-6 animate-fade-in">
              <span className="text-amber-500 tracking-wider text-sm font-black">★★★★★</span>
              <span className="text-gray-900 font-bold">Top rated on Google</span>
              <span className="w-px h-3.5 bg-gray-300" />
              <span className="text-gray-600 font-medium">ISO 27001 · 20000 · 9001</span>
            </div>

            {/* Category Subtitle */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-teal mb-3">
              {HERO_SLIDES[currentSlide].tag}
            </p>

            {/* Headline: Exact User Headline with Bold Corporate Authority */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-[#0D241E] tracking-tight leading-[1.08] text-balance">
              {HERO_SLIDES[currentSlide].headline}
            </h1>

            {/* Description: Exact User Description */}
            <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed mt-5 max-w-[560px] font-normal">
              {HERO_SLIDES[currentSlide].description}
            </p>

            {/* CTA Buttons (Exact Order & Procain Visual Weight) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA: Talk to an Expert (Golden Amber with Soft Glow) */}
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_24px_rgba(245,158,11,0.45)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-base text-center"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Explore Our Services (Clean White Card Button) */}
              <Link
                href="#services"
                className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-300 font-bold px-8 py-4 rounded-xl shadow-xs hover:border-brand-teal transition-all flex items-center justify-center text-base text-center"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Micro Trust Proof Text */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-brand-charcoal/75 font-medium">
              <span>Response within one business day</span>
              <span className="text-amber-500 font-bold">✦</span>
              <span>Consulting-led, no lock-in</span>
            </div>
          </div>
        </div>

        {/* Thin Accent Line at Bottom of Hero Section (Exact Procain Benchmark) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[4px] z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #F59E0B 0%, #12B8A6 28%, #35A853 48%, rgba(53, 168, 83, 0) 75%)",
          }}
        />
      </div>
    </section>
  );
}
