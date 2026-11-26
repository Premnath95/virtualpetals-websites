"use client";

import React from "react";
import { Cloud, Terminal, ShieldCheck, Server, Sparkles, Cpu, Layers } from "lucide-react";

const PLATFORM_GROUPS = [
  {
    category: "Microsoft Cloud Ecosystem",
    role: "Core enterprise productivity, cloud identity and modern workplace",
    icon: Cloud,
    accent: "teal",
    technologies: [
      { name: "Microsoft Azure", role: "IaaS, PaaS, Virtual WAN & Compute" },
      { name: "Microsoft 365", role: "Exchange Online, Teams & SharePoint" },
      { name: "Microsoft Entra ID", role: "Zero Trust IAM, PIM & Conditional Access" },
      { name: "Microsoft Intune", role: "Unified Endpoint Management & Autopilot" },
    ],
  },
  {
    category: "Amazon Web Services (AWS)",
    role: "Scalable compute, multi-account landing zones & hybrid interconnectivity",
    icon: Server,
    accent: "gold",
    technologies: [
      { name: "Amazon EC2 & VPC", role: "Virtual Compute & Isolated Cloud Networks" },
      { name: "Amazon S3 & Glacier", role: "Immutable Archival & Resilient Object Storage" },
      { name: "AWS RDS & Aurora", role: "Managed Relational Database Engines" },
      { name: "AWS DirectConnect", role: "Low-Latency Dedicated Hybrid Uplinks" },
    ],
  },
  {
    category: "Zero Trust Cybersecurity",
    role: "Threat intelligence, baseline posture audits and endpoint isolation",
    icon: ShieldCheck,
    accent: "dark",
    technologies: [
      { name: "Microsoft Defender XDR", role: "Endpoints, Office 365, Identities & Cloud" },
      { name: "Mito SaaS Platform", role: "500+ Automated Daily Read-Only Tenant Checks" },
      { name: "Conditional Access & MFA", role: "Contextual Risk-Based Access Control" },
      { name: "Microsoft Sentinel", role: "Cloud-Native SIEM & Security Orchestration" },
    ],
  },
  {
    category: "DevOps & Infrastructure Automation",
    role: "Declarative infrastructure as code and automated release pipelines",
    icon: Terminal,
    accent: "teal",
    technologies: [
      { name: "Terraform", role: "Declarative Infrastructure as Code (IaC)" },
      { name: "Kubernetes & AKS", role: "Enterprise Container Orchestration" },
      { name: "Docker", role: "Microservices & Application Packaging" },
      { name: "Azure DevOps & GitHub Actions", role: "Automated Multi-Stage CI/CD Gates" },
    ],
  },
];

export default function TechPlatformsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Technology Partners &amp; Platforms</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Enterprise Platforms That Power Commercial Success.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            We architect, deploy, and govern solutions built on globally recognized, enterprise-grade technology ecosystems.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PLATFORM_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">{group.category}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{group.role}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {group.technologies.map((t) => (
                      <div
                        key={t.name}
                        className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-brand-teal/30 hover:bg-brand-light/40 transition-all flex items-start gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                        <div>
                          <h4 className="text-sm font-bold text-brand-dark">{t.name}</h4>
                          <p className="text-[11px] text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] text-gray-400 font-semibold uppercase tracking-wider flex items-center justify-between">
                  <span>Certified Enterprise Practices</span>
                  <span className="text-brand-teal">SLA Aligned</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
