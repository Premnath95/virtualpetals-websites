"use client";

import React from "react";
import Image from "next/image";
import { Cloud, ShieldCheck, Terminal, Layers } from "lucide-react";

const TECH_PARTNERS = [
  { name: "Microsoft Cloud Partner Practices", badge: "Cloud & M365 Ecosystem" },
  { name: "Microsoft Azure", badge: "Enterprise Cloud Infrastructure" },
  { name: "Amazon Web Services (AWS)", badge: "Hybrid Cloud Workloads" },
  { name: "Microsoft Defender XDR", badge: "Zero Trust Threat Defense" },
  { name: "Microsoft Intune", badge: "Unified Endpoint Governance" },
  { name: "Terraform & Kubernetes", badge: "Infrastructure as Code" },
];

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

export default function PartnerShowcase() {
  return (
    <section className="py-16 bg-brand-light/40 border-y border-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Technology Ecosystem Badges */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block mb-2">
            Enterprise Platforms &amp; Technology Standards
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {TECH_PARTNERS.map((tp, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200/80 shadow-2xs text-xs font-semibold text-brand-dark flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                <span>{tp.name}</span>
                <span className="text-[10px] text-gray-500 hidden sm:inline">({tp.badge})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="pt-8 border-t border-gray-200/80">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
            Trusted by Enterprises Across the UAE, Australia, USA &amp; Global Markets
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="h-16 rounded-2xl bg-white border border-gray-200/80 p-3 flex items-center justify-center shadow-2xs hover:shadow-subtle hover:border-brand-teal/40 transition-all duration-200 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={130}
                    height={40}
                    className="max-h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
