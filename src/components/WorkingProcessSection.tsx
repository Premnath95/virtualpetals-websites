"use client";

import React from "react";
import { Search, Compass, Cpu, Headphones, Sparkles, CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    tagline: "Comprehensive Audit & Discovery",
    desc: "We perform a thorough evaluation of your existing cloud environments, on-premises systems, licensing structures, and security configurations to uncover hidden risks, inefficiencies, and compliance gaps.",
    icon: Search,
    deliverables: [
      "Tenant security baseline audit",
      "Cloud dependency & network mapping",
      "License utilization & FinOps assessment",
    ],
  },
  {
    step: "02",
    name: "Design",
    tagline: "Target-State Architecture Blueprint",
    desc: "Our certified engineers formulate a resilient, high-availability architecture aligned with Zero Trust principles, Microsoft Well-Architected Framework, and your strategic commercial objectives.",
    icon: Compass,
    deliverables: [
      "Zero Trust identity & access design",
      "Hybrid networking & failover topology",
      "Phased zero-disruption migration plan",
    ],
  },
  {
    step: "03",
    name: "Implement",
    tagline: "Disciplined Phased Execution",
    desc: "We execute deployments, migrations, and CI/CD pipelines with zero downtime. Automated validation, pilot user testing, and rollback safety gates ensure complete operational continuity.",
    icon: Cpu,
    deliverables: [
      "Automated Terraform infrastructure provisioning",
      "Staged mailbox, data & VM migrations",
      "Cutover verification & team onboarding",
    ],
  },
  {
    step: "04",
    name: "Manage",
    tagline: "Proactive 24/7 Governance & Support",
    desc: "Post-deployment, our team delivers round-the-clock monitoring, proactive patch management, automated configuration drift alerts, and dedicated Tier 2/3 engineering assistance.",
    icon: Headphones,
    deliverables: [
      "24/7 telemetry & infrastructure monitoring",
      "Mito automated daily security checkups",
      "SLA-backed rapid engineering support",
    ],
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Structured Delivery Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Our Working Process: From Strategy to Continuous Governance.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            A disciplined four-phase delivery framework that ensures total predictability, zero business disruption, and long-term infrastructure stability.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Large Step Number */}
                <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-gray-100 select-none pointer-events-none font-mono group-hover:text-brand-light transition-colors">
                  {step.step}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors mb-6 shadow-2xs relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
                    Phase {step.step}
                  </span>

                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs font-semibold text-gray-500 mb-3">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-brand-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
