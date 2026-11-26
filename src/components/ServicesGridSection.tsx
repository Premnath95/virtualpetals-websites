"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Layers,
  ShieldCheck,
  Terminal,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/servicesData";

const SERVICE_IMAGES: Record<string, string> = {
  "cloud-solutions": "/images/services/azure-cloud-datacenter.jpg",
  "microsoft-365": "/images/services/m365-workplace.jpg",
  "cybersecurity": "/images/services/cybersecurity-soc.jpg",
  "devops": "/images/services/devops-engineering.jpg",
  "it-infrastructure": "/images/services/managed-it-consulting.jpg",
};

export default function ServicesGridSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Our Enterprise Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Technology Solutions Engineered for Business Growth.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            From modern cloud workspaces to Zero Trust cybersecurity and 24/7 managed infrastructure, we deliver disciplined IT engineering that guarantees resilience and scale.
          </p>
        </div>

        {/* 5 Enterprise Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const imgPath = SERVICE_IMAGES[srv.slug] || "/images/services/azure-cloud-datacenter.jpg";

            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={imgPath}
                      alt={`${srv.title} engineering representation`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                    
                    {/* Badge Pill */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                        {srv.category}
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                      {srv.shortDesc}
                    </p>

                    {/* Verified Capabilities Checklist */}
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Core Capabilities
                      </span>
                      {srv.capabilities.slice(0, 4).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-teal transition-colors"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <span className="text-[11px] font-semibold text-gray-400">
                      SLA-Backed
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Advisory CTA */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 border border-brand-dark shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-teal/15 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-brand-gold/15 rounded-tr-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                Custom Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Need a Tailored IT Infrastructure Solution?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Our senior cloud architects conduct comprehensive audits of your current tenants, licenses, security policies, and performance constraints.
              </p>
            </div>

            <div className="pt-6 relative z-10 space-y-3">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm w-full border border-brand-gold/30"
              >
                <span>Schedule an Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-gray-400">
                Direct 30-minute consultation with practicing engineers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
