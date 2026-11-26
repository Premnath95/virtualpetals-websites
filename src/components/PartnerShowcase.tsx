"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { name: "AD Ports Group", logo: "/clients/adports.webp" },
  { name: "Dulsco", logo: "/clients/dulsco.webp" },
  { name: "Ahoy LLC", logo: "/clients/ahoy.png" },
  { name: "Flux IT", logo: "/clients/flux.png" },
  { name: "Wippli", logo: "/clients/wippli.webp" },
  { name: "St Ursula's College", logo: "/clients/st-ursula.png" },
  { name: "Octane Systems", logo: "/clients/octane.webp" },
  { name: "Majestic City Retreat Hotel", logo: "/clients/majestic.webp" },
  { name: "Cote D'azure Hotel", logo: "/clients/thoe.webp" },
  { name: "Aray Asociados", logo: "/clients/aray.webp" },
  { name: "Data Force Research", logo: "/clients/dataforce.webp" },
  { name: "Bamboo Body", logo: "/clients/bamboo-body.png" },
];

const TECH_PARTNERS = [
  { name: "Microsoft Cloud Partner Practices", badge: "Cloud & M365 Ecosystem" },
  { name: "Microsoft Azure", badge: "Enterprise Cloud Infrastructure" },
  { name: "Amazon Web Services (AWS)", badge: "Hybrid Cloud Workloads" },
  { name: "Microsoft Defender XDR", badge: "Zero Trust Threat Defense" },
  { name: "Microsoft Intune", badge: "Unified Endpoint Governance" },
  { name: "Terraform & Kubernetes", badge: "Infrastructure as Code" },
];

export default function PartnerShowcase() {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Exact Procain Subhead */}
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 sm:mb-10">
          TRUSTED BY ORGANISATIONS ACROSS INDUSTRIES
        </p>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="h-16 rounded-2xl bg-gray-50/60 border border-gray-200/80 p-3 flex items-center justify-center hover:bg-white hover:shadow-sm hover:border-brand-teal/40 transition-all duration-200 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={130}
                  height={40}
                  className="max-h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technology Ecosystem Badges */}
        <div className="mt-12 pt-10 border-t border-gray-100 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
            ENTERPRISE PLATFORMS &amp; TECHNOLOGY STANDARDS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {TECH_PARTNERS.map((tp, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200/70 text-xs font-semibold text-brand-dark flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                <span>{tp.name}</span>
                <span className="text-[10px] text-gray-400 hidden sm:inline">({tp.badge})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
