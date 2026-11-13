"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Layers,
  Sparkles,
  Play,
  Pause,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* 1. Cinematic Full-Width Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-opacity duration-700"
        >
          <source src="/videos/hero-enterprise-bg.mp4" type="video/mp4" />
        </video>

        {/* 2. Premium Dual-Layer Editorial Overlay for High Contrast & Brand Integration */}
        {/* Layer A: Left-to-right gradient for crisp typography contrast while revealing video on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/45 z-10" />

        {/* Layer B: Top and bottom subtle vignettes for seamless navbar and section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/60 z-10" />

        {/* Layer C: Subtle brand teal/green ambient glow */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-green/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="max-w-3xl lg:max-w-4xl space-y-8 text-left">
          {/* Editorial Category Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-300">
              International IT Consulting & Microsoft Cloud Architecture
            </span>
          </div>

          {/* Large Cinematic Editorial Headline (60-76px on Desktop) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            Transforming Business Through{" "}
            <span className="bg-gradient-to-r from-brand-green via-brand-teal to-emerald-300 bg-clip-text text-transparent">
              Smarter Technology.
            </span>
          </h1>

          {/* Exact User Requested Supporting Description (18-20px) */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal max-w-2xl text-balance">
            Empowering organisations with innovative cloud solutions, cybersecurity, Microsoft technologies and intelligent IT services.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#services"
              className="gradient-button text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 text-base sm:text-lg group transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <span>Consult Our Experts</span>
            </Link>
          </div>

          {/* Micro-Editorial Proof Points */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Zero Trust</div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                Security by Default
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-green">Microsoft</div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                Cloud & Azure Stack
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-teal">UAE & Global</div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                Enterprise Delivery
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                Managed Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Playback Toggle & Scroll Indicator */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-3">
        {isClient && (
          <button
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all shadow-md"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        )}
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-gray-400 text-xs tracking-wider uppercase">
        <span className="text-[11px] font-semibold text-gray-300">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-teal" />
      </div>
    </section>
  );
}
