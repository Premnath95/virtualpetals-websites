"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Globe, CheckCircle2, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonialsData";

const REGION_FILTERS = [
  { id: "all", label: "All Stories", count: 15 },
  { id: "australia", label: "Australia", flag: "🇦🇺", count: 5 },
  { id: "uae", label: "UAE / Middle East", flag: "🇦🇪", count: 4 },
  { id: "usa", label: "United States", flag: "🇺🇸", count: 2 },
  { id: "singapore", label: "Singapore", flag: "🇸🇬", count: 1 },
  { id: "nz", label: "New Zealand", flag: "🇳🇿", count: 1 },
  { id: "spain", label: "Spain / Europe", flag: "🇪🇸", count: 1 },
];

export default function TestimonialsSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const filteredTestimonials =
    selectedRegion === "all"
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((item) => item.region === selectedRegion);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-brand-light/30 to-white relative overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-light/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light text-brand-dark text-xs font-bold tracking-wide uppercase border border-brand-green/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Building Long-Term Technology Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Trusted by Businesses Across the Globe.
          </h2>

          <p className="text-lg sm:text-xl font-medium text-brand-teal">
            Real experiences. Trusted partnerships. Proven results. Discover what our clients say about working with Virtual Petals.
          </p>

          <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed max-w-2xl mx-auto pt-1">
            From cloud infrastructure and Microsoft 365 to Azure migrations, DevOps and managed IT services, Virtual Petals is proud to support organisations with practical technology solutions.
          </p>
        </div>

        {/* Global Impact Metrics Pill Bar */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">15+</div>
            <div className="text-xs sm:text-sm text-brand-charcoal/70 font-medium mt-0.5">Enterprise Client Reviews</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-green">6</div>
            <div className="text-xs sm:text-sm text-brand-charcoal/70 font-medium mt-0.5">Countries Represented</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-teal">100%</div>
            <div className="text-xs sm:text-sm text-brand-charcoal/70 font-medium mt-0.5">Authentic Client Feedback</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-100 shadow-subtle">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">24/7</div>
            <div className="text-xs sm:text-sm text-brand-charcoal/70 font-medium mt-0.5">Responsive IT Support</div>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
          {REGION_FILTERS.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-brand-dark text-white shadow-sm ring-2 ring-brand-green/30"
                    : "bg-white text-brand-charcoal hover:bg-brand-light border border-gray-200/80"
                }`}
              >
                {tab.flag && <span>{tab.flag}</span>}
                <span>{tab.label}</span>
                <span
                  className={`ml-1 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-brand-charcoal/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {filteredTestimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Trust Bottom Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200/80 text-xs sm:text-sm text-brand-charcoal/80 shadow-subtle">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>All testimonials shown are authentic reviews from enterprise engagements with Virtual Petals.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  // Flag mapping
  const FLAG_MAP: Record<string, string> = {
    AE: "🇦🇪",
    AU: "🇦🇺",
    US: "🇺🇸",
    NZ: "🇳🇿",
    SG: "🇸🇬",
    ES: "🇪🇸",
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group relative">
      {/* Top Section: Client identity and Country Tag */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0 group-hover:border-brand-teal/30 transition-colors">
              <Image
                src={item.logoPath}
                alt={`${item.clientName} logo`}
                width={56}
                height={56}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-bold text-brand-dark text-base sm:text-lg leading-tight group-hover:text-brand-green transition-colors">
                {item.clientName}
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 font-medium mt-0.5">
                {item.designation}
              </p>
            </div>
          </div>

          {/* Country Flag Pill */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-dark border border-brand-green/15 whitespace-nowrap shrink-0">
            <span>{FLAG_MAP[item.countryCode] || "🌐"}</span>
            <span>{item.location}</span>
          </span>
        </div>

        {/* Quote */}
        <div className="relative pt-2">
          <Quote className="w-6 h-6 text-brand-teal/20 mb-2 transform -scale-x-100" />
          <p className="text-sm sm:text-base text-brand-charcoal/90 leading-relaxed font-normal">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Section: Project / Focus Tag */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200/50 max-w-full truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
          <span className="truncate">{item.project}</span>
        </div>
        <span className="text-[11px] font-semibold text-brand-charcoal/50 uppercase tracking-wider shrink-0">
          Verified
        </span>
      </div>
    </div>
  );
}
