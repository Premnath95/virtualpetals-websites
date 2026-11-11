"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonialsData";

const REGION_FILTERS = [
  { id: "all", label: "All Stories", count: 15 },
  { id: "australia", label: "Australia", flag: "🇦🇺", count: 5 },
  { id: "uae", label: "UAE / Dubai", flag: "🇦🇪", count: 4 },
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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-violet-600/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge text-xs font-semibold text-violet-300 dark:text-violet-300 light:text-violet-700 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Real Client Results &amp; Experiences</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
          Trusted by Businesses Across the Globe
        </h2>

        <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
          From cloud infrastructure and Microsoft 365 to Azure migrations, DevOps, and managed IT services, Virtual Petals is proud to support organisations with practical technology solutions.
        </p>

        {/* Region Filter Tabs */}
        <div className="pt-6 flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
          {REGION_FILTERS.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md ring-2 ring-violet-500/30"
                    : "glass-panel text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-blue-600 border-slate-800"
                }`}
              >
                {tab.flag && <span>{tab.flag}</span>}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredTestimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>

      {/* Trust Notice */}
      <div className="mt-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>All testimonials shown are authentic reviews from enterprise engagements with Virtual Petals.</span>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const FLAG_MAP: Record<string, string> = {
    AE: "🇦🇪",
    AU: "🇦🇺",
    US: "🇺🇸",
    NZ: "🇳🇿",
    SG: "🇸🇬",
    ES: "🇪🇸",
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden shrink-0 border border-slate-700 shadow-sm flex items-center justify-center">
              <Image
                src={item.logoPath}
                alt={`${item.clientName} logo`}
                width={48}
                height={48}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-bold text-white dark:text-white light:text-slate-900 text-sm sm:text-base leading-tight group-hover:text-blue-400 transition-colors">
                {item.clientName}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium mt-0.5">
                {item.designation}
              </p>
            </div>
          </div>

          {/* Country Pill */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200 shrink-0">
            <span>{FLAG_MAP[item.countryCode] || "🌐"}</span>
            <span>{item.location}</span>
          </span>
        </div>

        {/* Verbatim Quote */}
        <div className="relative pt-2">
          <Quote className="w-5 h-5 text-violet-400/40 mb-2 transform -scale-x-100" />
          <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed italic">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Card Footer: Project Tag */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-950/40 dark:bg-blue-950/40 light:bg-blue-50 text-blue-300 dark:text-blue-300 light:text-blue-800 border border-blue-800/30 dark:border-blue-800/30 light:border-blue-200 max-w-full truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
          <span className="truncate">{item.project}</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider shrink-0">
          Verified
        </span>
      </div>
    </div>
  );
}
