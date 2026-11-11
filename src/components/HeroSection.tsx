"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cloud, Cpu, Lock, CheckCircle2, Server, Terminal } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-hero">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-brand-green/10 via-brand-teal/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-brand-light rounded-full blur-2xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-semibold text-brand-dark tracking-wide uppercase">
                Modern Microsoft Cloud & Security Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              Empowering Businesses Through{" "}
              <span className="bg-gradient-to-r from-brand-green via-brand-teal to-brand-green bg-clip-text text-transparent">
                Intelligent Technology.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-brand-charcoal/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Virtual Petals delivers innovative cloud solutions, Microsoft technologies, cybersecurity and modern IT services that help businesses transform, scale and succeed.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 group text-base"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white border border-gray-200 hover:border-brand-teal/40 text-brand-dark hover:bg-brand-light font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-xs"
              >
                <span>Talk to Our Experts</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-brand-dark font-bold text-lg sm:text-xl">
                  <span>Zero Trust</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Security First</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-brand-dark font-bold text-lg sm:text-xl">
                  <span>UAE & Global</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Enterprise Delivery</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-brand-dark font-bold text-lg sm:text-xl">
                  <span>Azure Cloud</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Certified Practices</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column – Enterprise Tech & Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Enterprise Technology Canvas */}
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-card p-6 relative overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-brand-green" />
                  </div>
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-brand-teal" />
                    <span>tenant-sec-engine.prod</span>
                  </div>
                </div>

                {/* Cloud Infrastructure Topology visual */}
                <div className="mt-4 space-y-3.5">
                  {/* Item 1: Cloud & M365 */}
                  <div className="p-3.5 rounded-xl bg-brand-light/70 border border-brand-green/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-dark">Microsoft 365 & Azure Estate</p>
                        <p className="text-[11px] text-gray-500">Intune · Entra ID · Exchange Online</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-brand-green bg-white px-2 py-0.5 rounded-md border border-brand-green/20">
                      Healthy
                    </span>
                  </div>

                  {/* Item 2: Cybersecurity & Zero Trust */}
                  <div className="p-3.5 rounded-xl bg-teal-50/60 border border-brand-teal/25 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-dark">Cybersecurity & Zero Trust</p>
                        <p className="text-[11px] text-gray-500">MFA · Conditional Access · Defender</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-brand-teal bg-white px-2 py-0.5 rounded-md border border-brand-teal/20">
                      Enforced
                    </span>
                  </div>

                  {/* Item 3: DevOps & IaC */}
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-200/60 flex items-center justify-center text-brand-charcoal">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-brand-dark">DevOps & Automated Pipelines</p>
                        <p className="text-[11px] text-gray-500">Terraform · CI/CD · Kubernetes</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700 bg-white px-2 py-0.5 rounded-md border border-gray-200">
                      Automated
                    </span>
                  </div>

                  {/* Item 4: Mito Assessment Preview Badge */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-brand-light to-teal-50/50 border border-brand-green/30">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-brand-dark flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-brand-green" />
                        Mito Security Assessment
                      </span>
                      <span className="font-bold text-brand-green">400+ Checks</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-green to-brand-teal h-1.5 rounded-full w-[94%]" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 mt-1">
                      <span>Baseline: CIS / CISA standards</span>
                      <span className="text-brand-green font-medium">94% Compliant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-xl p-3 shadow-card border border-gray-100 items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">99.9% Uptime</p>
                  <p className="text-[10px] text-gray-500">SLA-Backed Cloud Delivery</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="hidden sm:flex absolute -top-5 -right-3 bg-white rounded-xl p-3 shadow-card border border-gray-100 items-center gap-2.5">
                <Terminal className="w-4 h-4 text-brand-teal" />
                <span className="text-xs font-bold text-brand-dark">Automated IaC & Governance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
