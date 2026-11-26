"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Server,
  Cloud,
  Workflow,
  Globe,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
          <span>About Virtual Petals</span>
        </div>

        {/* Top Split Layout: Corporate Narrative & Facility Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.14]">
              Protecting Confidentiality, Availability &amp; Integrity{" "}
              <span className="text-brand-teal">Through Engineering Discipline.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
              <p>
                Virtual Petals is an international IT solutions and technology consulting company dedicated to engineering resilient, secure, and modern digital environments. We partner with business leaders and enterprise IT departments to eliminate operational friction and ensure absolute peace of mind.
              </p>
              <p>
                With cross-border delivery capabilities across the United Arab Emirates (Abu Dhabi) and India (operated through our registered business entity NetFuxion Pro in Coimbatore), our certified systems engineers bring specialized expertise in Microsoft 365 governance, hybrid Azure and AWS cloud infrastructure, Zero Trust cybersecurity, and automated DevOps pipelines.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-gray-100">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Cloud Transformation:</strong> Azure &amp; AWS architecture.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>Zero Trust Cybersecurity:</strong> Continuous threat isolation.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>DevOps Automation:</strong> Fast, repeatable CI/CD delivery.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" />
                <span className="text-sm text-brand-charcoal font-medium">
                  <strong>24/7 Managed IT:</strong> SLA-backed operational peace of mind.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="gradient-button text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-xs inline-flex items-center gap-2 group"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Column: High-Resolution Corporate Team & Offices */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] border border-gray-100 group">
              <Image
                src="/images/who-we-are-team.jpg"
                alt="Virtual Petals technology consulting team in modern corporate workspace"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />

              {/* Bottom Inset Credibility Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark">
                    Enterprise IT Practice
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-brand-charcoal">
                    Operating across UAE &amp; India delivery centres
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center text-brand-teal shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Banners */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-light/60 rounded-3xl p-8 border border-brand-teal/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-brand-teal/20 flex items-center justify-center text-brand-dark shadow-2xs">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
              Our Mission
            </span>
            <h3 className="text-xl font-bold text-brand-dark">Empowering Business Resilience</h3>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          <div className="bg-teal-50/50 rounded-3xl p-8 border border-brand-teal/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-brand-teal/20 flex items-center justify-center text-brand-teal shadow-2xs">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
              Our Vision
            </span>
            <h3 className="text-xl font-bold text-brand-dark">Trusted Global Cloud Leadership</h3>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
