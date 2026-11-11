"use client";

import React from "react";
import { ShieldCheck, ArrowRight, ExternalLink, Calendar, Sparkles } from "lucide-react";

export default function MitoShowcase() {
  return (
    <section id="products" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-violet-200 dark:border-violet-500/40 relative overflow-hidden glow-violet shadow-2xl">
        {/* Background Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-200 dark:border-violet-500/40 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>OUR PROPRIETARY SOFTWARE PRODUCT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              MITO &ndash; Microsoft 365 Security &amp; Compliance Platform
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Developed by Virtual Petals, Mito provides automated tenant compliance auditing, security posture scoring, and real-time gap analysis across Microsoft 365 environments.
            </p>

            {/* 3 Value Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400">400+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Security Rule Checks
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">CIS &amp; NIST</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Benchmark Aligned
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">Instant</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Automated Audit Reports
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="http://mito.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-primary px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Mito Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Book Live Mito Demo</span>
              </a>
            </div>
          </div>

          {/* Right Product Audit Console Simulation */}
          <div className="lg:col-span-5 glass-card-navy rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-violet-400 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                mito-audit-engine v2.4
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40">
                100% COMPLIANT
              </span>
            </div>

            <div className="space-y-2 pt-1 text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                <span>Identity &amp; MFA Enforcement</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                <span>Exchange Mailbox Security</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                <span>Intune Endpoint Encryption</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                <span>SharePoint External Sharing Controls</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Continuous Tenant Audit</span>
              <span className="text-cyan-400 font-semibold">Zero Security Gaps</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
