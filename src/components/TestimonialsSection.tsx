"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Globe, CheckCircle2, Building2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonialsData";

const REGION_FILTERS = [
  { id: "all", label: "All Stories", count: 15 },
  { id: "uae", label: "UAE / Middle East", flag: "🇦🇪", count: 4 },
  { id: "australia", label: "Australia", flag: "🇦🇺", count: 5 },
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
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Genuine Client Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Trusted by Businesses Across the Globe.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            Real feedback and verified experiences from enterprise IT leaders, operations directors, and businesses who rely on Virtual Petals.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="mt-12 flex items-center flex-wrap gap-2.5">
          {REGION_FILTERS.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-brand-dark text-white shadow-xs"
                    : "bg-gray-100 text-brand-charcoal hover:bg-gray-200"
                }`}
              >
                {tab.flag && <span>{tab.flag}</span>}
                <span>{tab.label}</span>
                <span
                  className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* 5-Star Gold Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-gray-500 ml-1.5">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-brand-charcoal/90 leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile & Logo */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-brand-dark">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>{item.country}</span>
                    <span>•</span>
                    <span className="text-brand-teal font-medium">{item.designation}</span>
                  </p>
                </div>

                {item.logoPath && (
                  <div className="h-10 w-24 relative flex items-center justify-end shrink-0">
                    <Image
                      src={item.logoPath}
                      alt={`${item.clientName} logo`}
                      width={96}
                      height={36}
                      className="max-h-8 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
