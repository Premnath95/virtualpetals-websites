"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  Server,
  Cloud,
  Workflow,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function CompanyStorySection() {
  return (
    <section id="who-we-are" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-light/70 via-teal-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Who We Are</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Technology Expertise. Practical Innovation. Business Impact.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            Virtual Petals is an IT solutions company dedicated to helping organisations modernise, secure and govern their digital environments through disciplined engineering and practical technology strategies.
          </p>
        </div>

        {/* Company Overview & Approach: Kyndryl-Style Editorial Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Block */}
          <div className="lg:col-span-7 bg-brand-light/50 rounded-3xl p-8 sm:p-12 border border-brand-green/20 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Company Overview
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-snug">
                Bridging Enterprise Technology with Measurable Business Results.
              </h3>

              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  At Virtual Petals, we believe that modern IT infrastructure should be a catalyst for business agility rather than a source of operational complexity. We collaborate closely with enterprise IT leaders, security teams, and business stakeholders to design and implement cloud architectures that are resilient, scalable, and inherently secure.
                </p>
                <p>
                  With international delivery capabilities across the United Arab Emirates and India (operated through our registered entity NetFuxion Pro), our consulting engineers bring deep technical depth across the Microsoft cloud ecosystem, hybrid infrastructure, DevSecOps automation, and unified endpoint security.
                </p>
              </div>

              {/* Our Approach Highlights */}
              <div className="pt-6 border-t border-brand-green/20">
                <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-4">
                  Our Engineering Approach
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-charcoal/90">
                      <strong>Architecture-Led:</strong> Thorough assessment before design.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-charcoal/90">
                      <strong>Zero Disruption:</strong> Phased and verified migrations.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-charcoal/90">
                      <strong>Security First:</strong> Zero Trust models implemented by default.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-charcoal/90">
                      <strong>Continuous Support:</strong> Dedicated managed lifecycle.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-dark group transition-colors"
              >
                <span>Read our full company story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mission & Vision Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Our Mission */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-card hover:border-brand-teal/40 transition-all flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-brand-teal/20 flex items-center justify-center text-brand-teal mb-5">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Empowering Business Potential
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-card hover:border-brand-green/40 transition-all flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-light border border-brand-green/20 flex items-center justify-center text-brand-green mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Trusted Global Technology Excellence
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values: Editorial 5-Card Banner */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                Guiding Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
                Our Core Values
              </h3>
            </div>
            <p className="text-sm text-brand-charcoal/70 max-w-md">
              The foundational commitments that govern every architecture review, cloud deployment, and client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {COMPANY_INFO.values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle hover:shadow-card hover:border-brand-green/40 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-green font-bold text-xs flex items-center justify-center mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-brand-dark mb-2">{v.title}</h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
