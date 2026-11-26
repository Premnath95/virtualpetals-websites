"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  tag: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    tag: "Cybersecurity & Cloud Solutions",
    headline: "Enterprise Cloud, Cybersecurity & IT Solutions Built for What's Next.",
    description:
      "Virtual Petals empowers businesses with secure cloud infrastructure, Microsoft 365 solutions, cybersecurity, IT automation and managed IT services.",
    image: "/images/hero/cybersecurity.jpg",
    imageAlt: "Enterprise Security Operations Center team monitoring threat intelligence",
  },
  {
    tag: "Cloud Architecture & Migration",
    headline: "Cloud engineered for performance, resilience and governance.",
    description:
      "Architect, migrate and govern enterprise Microsoft Azure and AWS environments with automated failover, strict compliance benchmarks and proactive FinOps cost management.",
    image: "/images/hero/cloud.jpg",
    imageAlt: "Enterprise Cloud Architects reviewing hybrid cloud infrastructure",
  },
  {
    tag: "IT Infrastructure & 24/7 Operations",
    headline: "Reliable infrastructure operations delivering peace of mind 24/7.",
    description:
      "Eliminate downtime with round-the-clock infrastructure telemetry, dedicated Tier 2/3 engineering support, immutable disaster recovery and automated patch pipelines.",
    image: "/images/hero/it-infrastructure.jpg",
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
    <section className="relative hero" id="hero" aria-label="What Virtual Petals does">
      <div className="hero-stage pt-20">
        {/* Background Plates */}
        <div className="hero-panels" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-panel ${idx === currentSlide ? "active" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover"
                style={{ objectPosition: "78% center" }}
              />
            </div>
          ))}
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          id="sPrev"
          className="snav-btn hidden sm:grid"
          aria-label="Previous slide"
          style={{ left: "max(16px, calc((100vw - 1280px)/2 - 34px))" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          id="sNext"
          className="snav-btn hidden sm:grid"
          aria-label="Next slide"
          style={{ right: "max(16px, calc((100vw - 1280px)/2 - 34px))" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Content Grid */}
        <div className="hero-grid">
          <div className="hero-copy">
            {/* Trust Chip / Social Proof Badge */}
            <span className="trust-chip">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span>Top rated on Google</span>
              <span className="sep" aria-hidden="true"></span>
              <span>ISO 27001 · 20000 · 9001</span>
            </span>

            {/* Headline */}
            <h1>{HERO_SLIDES[currentSlide].headline}</h1>

            {/* Subtitle */}
            <p className="sub">{HERO_SLIDES[currentSlide].description}</p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a
                className="btn-procain-primary"
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <Link className="btn-procain-ghost" href="#services">
                Explore Services
              </Link>
            </div>

            {/* Microcopy */}
            <div className="hero-micro">
              <span>Response within one business day</span>
              <span className="spark font-bold" style={{ color: "var(--yellow-2)" }}>✦</span>
              <span>Consulting-led, no lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
