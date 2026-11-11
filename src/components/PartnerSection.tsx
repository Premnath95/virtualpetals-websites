"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function PartnerSection() {
  return (
    <section id="business-entities" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge text-xs font-semibold text-violet-700 dark:text-violet-300 tracking-wider uppercase">
          <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
          <span>Corporate Operations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Our Business Entities
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Registered business entities operated and managed under Virtual Petals to support corporate technology services and enterprise operations.
        </p>
      </div>

      {/* Business Entity Showcase Card */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-12 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          {/* Ambient corner accent */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-600/10 via-violet-600/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Logo in clean white container */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xs border border-slate-200">
              <div className="relative w-full max-w-[200px] aspect-[1/1] flex items-center justify-center">
                <Image
                  src={COMPANY_INFO.partner.logoPath}
                  alt="NETFUXION PRO Official Logo"
                  width={200}
                  height={200}
                  className="object-contain max-h-44 w-auto"
                  priority
                />
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-center w-full">
                <span className="text-xs font-bold text-slate-900 tracking-wider uppercase block">
                  NETFUXION PRO
                </span>
                <span className="text-[11px] text-violet-700 font-bold tracking-wider uppercase">
                  REGISTERED BUSINESS ENTITY – INDIA
                </span>
              </div>
            </div>

            {/* Profile Information */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Virtual Petals Business Entity</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                NETFUXION PRO
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                NetFuxion Pro is a registered business entity in India, operated and managed by Virtual Petals.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/partners"
                  className="btn-gradient-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Business Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="glass-panel text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <span>Contact Virtual Petals</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
