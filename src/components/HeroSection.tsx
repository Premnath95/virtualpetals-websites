"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Cpu,
  Lock,
  CheckCircle2,
  Server,
  Activity,
  Layers,
  Terminal,
  Globe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Architectural Grid & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#35a853_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-brand-green/10 via-brand-teal/8 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-16 right-10 w-96 h-96 bg-brand-light/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text Column: Enterprise Editorial Presentation */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-bold text-brand-dark tracking-wider uppercase">
                Enterprise Cloud & Modern Workplace Architecture
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.1] text-balance">
              Transforming Business Through{" "}
              <span className="bg-gradient-to-r from-brand-green via-brand-teal to-brand-green bg-clip-text text-transparent">
                Smarter Technology.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-brand-charcoal/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Virtual Petals helps organisations modernise, secure and optimise their IT environments through Microsoft cloud solutions, cybersecurity, DevOps and intelligent technology services.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#services"
                className="w-full sm:w-auto gradient-button text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group text-base transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto bg-white border border-gray-300 hover:border-brand-teal text-brand-dark hover:bg-brand-light/60 font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-xs"
              >
                <span>Consult Our Experts</span>
              </Link>
            </div>

            {/* Editorial Micro-Metrics & Enterprise Highlights */}
            <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 sm:gap-8 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
                  Zero Trust
                </div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">
                  Security-First Architecture
                </p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-green tracking-tight">
                  Microsoft
                </div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">
                  Cloud & M365 Ecosystem
                </p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-teal tracking-tight">
                  Global
                </div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">
                  Enterprise Client Delivery
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Kyndryl-Inspired Enterprise Technology Architecture Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-green/20 via-brand-teal/20 to-brand-green/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Enterprise Canvas Console */}
              <div className="relative bg-white rounded-2xl border border-gray-200/90 shadow-2xl p-6 overflow-hidden">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-brand-green inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                    <Activity className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                    <span>cloud-mesh.vp-infra.net</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-brand-green bg-brand-light rounded border border-brand-green/30">
                    ACTIVE
                  </span>
                </div>

                {/* Cloud & Architecture Topology Visual */}
                <div className="py-5 space-y-4">
                  {/* Top Architecture Layer: Modern Cloud & Identity */}
                  <div className="bg-brand-light/60 rounded-xl p-4 border border-brand-green/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-brand-green" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Microsoft Cloud Core
                        </span>
                      </div>
                      <span className="text-[11px] text-brand-green font-semibold">Healthy</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs">
                        <span className="block text-[11px] font-bold text-brand-dark">M365 & Entra</span>
                        <span className="block text-[10px] text-gray-500">Zero Trust IAM</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs">
                        <span className="block text-[11px] font-bold text-brand-dark">Azure Cloud</span>
                        <span className="block text-[10px] text-gray-500">High Availability</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 border border-gray-100 shadow-2xs">
                        <span className="block text-[11px] font-bold text-brand-dark">Intune UEM</span>
                        <span className="block text-[10px] text-gray-500">Compliance</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Architecture Layer: Cybersecurity & Telemetry */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200/90 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Cybersecurity & Compliance Posture
                        </span>
                      </div>
                      <span className="text-[11px] text-brand-teal font-semibold">100% Protected</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-brand-charcoal">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                          Conditional Access & MFA
                        </span>
                        <span className="font-mono text-[11px] text-brand-dark font-semibold">Enforced</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-brand-charcoal">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                          Defender Threat Protection
                        </span>
                        <span className="font-mono text-[11px] text-brand-dark font-semibold">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-brand-charcoal">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                          Mito Automated Security Check
                        </span>
                        <span className="font-mono text-[11px] text-brand-teal font-semibold">Passed</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Architecture Layer: DevOps CI/CD Pipelines */}
                  <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-brand-dark shadow-2xs">
                        <Terminal className="w-4 h-4 text-brand-green" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark">DevOps Infrastructure Pipeline</div>
                        <div className="text-[10px] text-gray-500">Automated Terraform & GitHub Actions</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-brand-green font-semibold">Synced</span>
                  </div>
                </div>

                {/* Micro Footer Bar with Global Connectivity */}
                <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-teal" />
                    <span>UAE & Global Operations</span>
                  </span>
                  <span className="font-semibold text-brand-dark">Virtual Petals Enterprise Mesh</span>
                </div>
              </div>

              {/* Floating Floating Pill: Proprietary Tech Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-brand-dark text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Proprietary Innovation</div>
                  <div className="text-[10px] text-gray-300">Mito M365 Security Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
