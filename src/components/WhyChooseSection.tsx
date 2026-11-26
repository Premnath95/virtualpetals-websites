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
  Cpu,
  Globe,
  Clock,
} from "lucide-react";

const REASONS = [
  {
    num: "01",
    title: "Deep Microsoft & Cloud Specialization",
    desc: "We focus where our engineering depth is strongest. Certified cloud architects design, deploy, and govern Microsoft 365, Azure, Entra ID, and AWS environments aligned with Well-Architected Frameworks.",
    icon: Layers,
    tag: "Certified Practices",
  },
  {
    num: "02",
    title: "Zero Trust Security Architecture by Default",
    desc: "Security is never an afterthought or bolt-on. We enforce explicit verification, least-privilege administrative access, phishing-resistant MFA, and automated vulnerability isolation across every layer.",
    icon: ShieldCheck,
    tag: "Enterprise Protection",
  },
  {
    num: "03",
    title: "Transparent, Predictable & SLA-Backed",
    desc: "Enterprise IT leaders trust our clear milestones, documented execution plans, and honest communication. No hidden dependencies, no vague scopes, and strict adherence to service level agreements.",
    icon: Award,
    tag: "Accountable Delivery",
  },
  {
    num: "04",
    title: "Direct Access to Senior Engineers",
    desc: "When you contact us, you consult directly with practicing systems engineers who know your environment inside out—never tier-1 script readers or automated support loops.",
    icon: Headphones,
    tag: "Dedicated Engineering",
  },
  {
    num: "05",
    title: "Proprietary Innovation with Mito",
    desc: "Beyond consulting, we engineer our own enterprise SaaS technology. Mito provides daily automated baseline checkups across 500+ configurations, detecting configuration drift before adversaries do.",
    icon: Cpu,
    tag: "Proprietary Platform",
  },
  {
    num: "06",
    title: "UAE Regional & Global Delivery",
    desc: "With established corporate offices in Abu Dhabi (Etihad Towers) and India (operated through our registered entity NetFuxion Pro), we provide round-the-clock international client coverage.",
    icon: Globe,
    tag: "Global Footprint",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Why Virtual Petals</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Engineering Discipline. Measurable Peace of Mind.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            We combine enterprise-grade architectural standards with the agility, transparency, and personal commitment of a dedicated technology partner.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.num}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-brand-teal bg-brand-light px-2.5 py-1 rounded">
                      {r.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors leading-snug">
                    {r.title}
                  </h3>

                  <p className="text-sm text-brand-charcoal/80 mt-3 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-dark">{r.tag}</span>
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
