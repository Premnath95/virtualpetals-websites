"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function CompanyStorySection() {
  return (
    <section id="who-we-are" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-green" />
          <span>Who We Are</span>
        </div>

        {/* Section A: Large Editorial Split Layout (Heading + Text on one side, Large Human Photograph on the other side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column: Strong Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              Technology Expertise. Practical Innovation.{" "}
              <span className="text-brand-green">Business Impact.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
              <p>
                Virtual Petals is an international IT solutions company founded to help organisations modernise, secure and govern their digital environments through disciplined engineering and practical technology strategies.
              </p>
              <p>
                Operating with enterprise delivery capabilities across the United Arab Emirates and India (managed through our registered entity NetFuxion Pro), our consulting engineers bring deep technical depth across the Microsoft cloud ecosystem, hybrid infrastructure, DevSecOps automation, and unified endpoint security.
              </p>
            </div>

            {/* Approach Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-gray-100">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Architecture-Led:</strong> Thorough assessment before design.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Zero Disruption:</strong> Phased and verified migrations.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Security by Default:</strong> Zero Trust architecture.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Managed Lifecycle:</strong> 24/7 dedicated engineering.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-base font-bold text-brand-green hover:text-brand-dark group transition-colors"
              >
                <span>Learn more about our company story</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Image Column: High-Resolution Authentic Human Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] border border-gray-100 group">
              <Image
                src="/images/who-we-are-team.jpg"
                alt="Virtual Petals technology consulting team collaborating in modern office"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

              {/* Inset Credibility Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                    Engineering Depth
                  </span>
                  <span className="block text-sm font-bold text-brand-dark">
                    Cross-functional cloud and cybersecurity specialists
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Decorative background blur element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </div>

        {/* Mission & Vision Banners: Kyndryl-Style Editorial Layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-brand-light/60 rounded-3xl p-8 sm:p-10 border border-brand-green/20 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-green/20 flex items-center justify-center text-brand-green shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold text-brand-dark">
                Empowering Business Potential
              </h3>
              <p className="text-base text-brand-charcoal/85 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-teal pt-2">
              Driven by architectural discipline and customer outcomes
            </div>
          </div>

          {/* Vision */}
          <div className="bg-teal-50/50 rounded-3xl p-8 sm:p-10 border border-brand-teal/20 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-teal/20 flex items-center justify-center text-brand-teal shadow-xs">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold text-brand-dark">
                Trusted Global Technology Excellence
              </h3>
              <p className="text-base text-brand-charcoal/85 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-green pt-2">
              Building long-term enterprise partnerships worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
