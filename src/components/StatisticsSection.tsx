"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Globe, Clock, Award } from "lucide-react";

const STATS = [
  {
    value: "15+",
    label: "Enterprise Client Reviews",
    subtext: "Verified client partnerships across maritime, hospitality, education & tech",
    icon: Award,
    accent: "gold",
  },
  {
    value: "6",
    label: "Global Client Regions",
    subtext: "Delivering solutions across UAE, Australia, USA, Singapore, NZ & Europe",
    icon: Globe,
    accent: "teal",
  },
  {
    value: "500+",
    label: "Automated Security Checks",
    subtext: "Daily read-only baseline audits executed through our Mito SaaS platform",
    icon: ShieldCheck,
    accent: "dark",
  },
  {
    value: "24/7",
    label: "Operations & Monitoring",
    subtext: "Proactive infrastructure telemetry, incident alerts and dedicated Tier 2/3 engineering",
    icon: Clock,
    accent: "teal",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Verified Operational Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Proven Reliability by the Numbers.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Our commitment to technical rigor and customer outcomes is validated by genuine enterprise client engagements worldwide.
          </p>
        </div>

        {/* 4 Verified Stat Blocks with Subtle Gold/Teal Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-brand-gold/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono group-hover:text-amber-300 transition-colors">
                      {stat.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-gold/20 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Figure</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
