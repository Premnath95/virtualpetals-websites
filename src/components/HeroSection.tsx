"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Layers,
  Sparkles,
  Calendar,
  Lock,
  Server,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Subtle background architectural grid & ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#123b32_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      {/* Gold & Emerald lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-teal/10 via-brand-gold/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-80 h-80 bg-brand-light rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column: Procain-Inspired Corporate Authority */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Pill Badge with subtle gold glow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-xs font-bold text-brand-dark tracking-wider uppercase">
                Peace of Mind as a Service
              </span>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">
                Enterprise IT Consulting
              </span>
            </div>

            {/* Main Corporate Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-brand-dark tracking-tight leading-[1.1] text-balance">
              Enterprise Cloud, Security &amp; IT Solutions{" "}
              <span className="bg-gradient-to-r from-brand-dark via-brand-teal to-emerald-600 bg-clip-text text-transparent">
                Built for What's Next.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-brand-charcoal/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Virtual Petals delivers managed cloud architecture, Microsoft 365 environments, Zero Trust cybersecurity, and DevOps automation that ensure business resilience, operational agility, and continuous compliance.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#services"
                className="w-full sm:w-auto gradient-button text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group text-base transition-all duration-200 border border-brand-teal/20"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border border-gray-300 hover:border-brand-teal text-brand-dark hover:bg-brand-light/60 font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-xs"
              >
                <Calendar className="w-4 h-4 text-brand-teal" />
                <span>Book a Consultation</span>
              </a>
            </div>

            {/* Trust Proof Points */}
            <div className="pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-dark">Zero Trust</div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">Security Architecture</p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-teal">Microsoft</div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">Cloud &amp; Azure Stack</p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-brand-dark">24/7</div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">Operations Coverage</p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-700">UAE &amp; Global</div>
                <p className="text-xs text-brand-charcoal/70 font-medium mt-0.5">Enterprise Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column: 3D Cloud & Security Interactive Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle Gold / Teal Ambient Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-teal/20 via-brand-gold/20 to-brand-teal/20 rounded-3xl blur-xl opacity-70" />

              {/* Console Canvas Card */}
              <div className="relative bg-white rounded-3xl border border-gray-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-brand-green inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                    <Activity className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                    <span>tenant-sec-mesh.vp.net</span>
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-brand-dark bg-brand-light rounded border border-brand-teal/30">
                    PROTECTED
                  </span>
                </div>

                {/* Cloud & Security Topology Visualization */}
                <div className="py-5 space-y-4">
                  {/* Cloud Core Layer */}
                  <div className="bg-brand-light/60 rounded-2xl p-4 border border-brand-teal/20">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-brand-dark" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Cloud Infrastructure Layer
                        </span>
                      </div>
                      <span className="text-[11px] text-brand-teal font-semibold">Healthy (99.9%)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs">
                        <span className="block text-xs font-bold text-brand-dark">Microsoft 365</span>
                        <span className="block text-[10px] text-gray-500">Zero Trust IAM</span>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs">
                        <span className="block text-xs font-bold text-brand-dark">Azure Cloud</span>
                        <span className="block text-[10px] text-gray-500">High Availability</span>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-2xs">
                        <span className="block text-xs font-bold text-brand-dark">AWS Services</span>
                        <span className="block text-[10px] text-gray-500">Hybrid Mesh</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Posture Telemetry Layer */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-200/90 shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Cybersecurity &amp; Compliance Telemetry
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        100% Enforced
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-brand-charcoal pt-1">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                          Conditional Access &amp; FIDO2 MFA
                        </span>
                        <span className="font-mono text-[11px] text-brand-dark font-semibold">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                          Microsoft Defender XDR Threat Isolation
                        </span>
                        <span className="font-mono text-[11px] text-brand-dark font-semibold">Guarded</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                          Mito 500+ Automated Daily Checks
                        </span>
                        <span className="font-mono text-[11px] text-brand-green font-semibold">Passed</span>
                      </div>
                    </div>
                  </div>

                  {/* DevOps Automation Layer */}
                  <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-brand-dark shadow-2xs">
                        <Server className="w-4 h-4 text-brand-dark" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark">DevOps Release Automation</div>
                        <div className="text-[10px] text-gray-500">Terraform IaC &amp; GitHub Actions</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-brand-teal font-semibold">Continuous CI/CD</span>
                  </div>
                </div>

                {/* Console Micro Footer */}
                <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                    <span>ISO &amp; Zero Trust Framework Aligned</span>
                  </span>
                  <span className="font-semibold text-brand-dark">Virtual Petals SLA 99.9%</span>
                </div>
              </div>

              {/* Inset Gold Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-brand-dark text-white p-3.5 rounded-2xl shadow-xl border border-brand-gold/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Featured Proprietary SaaS</div>
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
