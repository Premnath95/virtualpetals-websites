"use client";

import React from "react";
import Link from "next/link";
import {
  Landmark,
  Stethoscope,
  Ship,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { INDUSTRIES } from "@/data/industriesData";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Hotel: <Hotel className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Sectors &amp; Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Tailored IT Solutions for Regulated Industries.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            Every sector faces unique regulatory compliance, scalability, and threat profiles. We engineer industry-specific cloud architectures aligned with global security baselines.
          </p>
        </div>

        {/* 6 Industries Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors flex items-center justify-center shadow-2xs mb-6">
                  {INDUSTRY_ICONS[ind.iconName] || <Landmark className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                  {ind.name}
                </h3>

                <p className="text-xs font-semibold text-brand-teal mt-1 mb-3">
                  {ind.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                  {ind.description}
                </p>

                {/* Compliance Badges */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Key Compliance Standards
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.compliance.map((c, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-gray-100 text-brand-charcoal text-[11px] font-semibold"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-teal transition-colors"
                >
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
