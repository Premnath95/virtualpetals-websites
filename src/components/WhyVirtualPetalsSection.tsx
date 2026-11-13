"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Layers,
  ShieldCheck,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Cpu,
} from "lucide-react";

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Deep Microsoft Expertise",
    desc: "We focus where our engineering depth is strongest. Our certified specialists design, deploy, and govern Microsoft 365, Azure, Entra ID, Microsoft Intune, and Microsoft Defender environments that align strictly with Microsoft's Well-Architected Framework and Zero Trust principles.",
    icon: Layers,
    tag: "Certified Practices",
  },
  {
    num: "02",
    title: "Pragmatic Enterprise Engineering",
    desc: "We prioritize tangible business reliability over marketing hype. Every architecture, migration path, and automation script is engineered to be stable, maintainable, and aligned with your operational realities—ensuring zero disruption to daily business workflows.",
    icon: Workflow,
    tag: "Practical Architecture",
  },
  {
    num: "03",
    title: "Transparent & Predictable Delivery",
    desc: "Enterprise IT leaders appreciate our clear milestones, documented execution plans, and upfront communication. No hidden dependencies, no unexpected cost overruns, and no vague timelines—just disciplined delivery against clear commitments.",
    icon: Award,
    tag: "Accountable Delivery",
  },
  {
    num: "04",
    title: "Dedicated Engineering Support",
    desc: "When you reach out, you speak directly with practicing systems engineers who know your environment inside out—not tiered call-center scripts. Our proactive monitoring detects anomalies before they escalate into business outages.",
    icon: Headphones,
    tag: "Responsive Tier 2/3",
  },
  {
    num: "05",
    title: "Proprietary Innovation with Mito",
    desc: "Beyond consulting, we engineer our own enterprise SaaS software. Mito—our proprietary Microsoft 365 Security & Compliance platform—provides daily automated baseline audits, configuration drift tracking, and risk reporting for organisations worldwide.",
    icon: Cpu,
    tag: "Proprietary SaaS",
  },
];

export default function WhyVirtualPetalsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-brand-light/70 via-teal-50/30 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Why Virtual Petals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Your Technology Partner for What's Next.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            We deliver enterprise-grade engineering discipline with the agility, transparency, and personal commitment of a dedicated technology partner.
          </p>
        </div>

        {/* 5 Enterprise Differentiators Grid: Kyndryl-Style Editorial Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.num}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-2xs hover:shadow-card hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-dark group-hover:bg-teal-50 group-hover:text-brand-teal transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-brand-green px-2.5 py-1 rounded bg-brand-light">
                      {diff.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-sm text-brand-charcoal/80 mt-3 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-teal">{diff.tag}</span>
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Call to Action Card */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 border border-brand-dark shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-bl-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                Work With Us
              </span>
              <h3 className="text-2xl font-bold leading-tight">
                Experience the Difference in Your Next IT Initiative.
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect with our senior consultants for an initial technology assessment and architectural roadmap.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                href="#contact"
                className="gradient-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm w-full"
              >
                <span>Consult Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
