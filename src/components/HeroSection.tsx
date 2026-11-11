"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import ThreeCloudHero from "@/components/ThreeCloudHero";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Enterprise Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge text-xs font-semibold text-violet-300 dark:text-violet-300 light:text-violet-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>GLOBAL CLOUD &amp; MICROSOFT SOLUTIONS PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white dark:text-white light:text-slate-900">
              Architecting Resilient{" "}
              <span className="gradient-text-primary">Enterprise Cloud</span>,
              Modern Workplaces &amp; Zero Trust.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-xl leading-relaxed">
              Empowering global organizations across UAE, Australia, the United
              States, and New Zealand with scalable Microsoft Azure engineering,
              seamless M365 adoptions, Intune endpoint governance, and continuous
              DevOps automation.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/#services"
                className="btn-gradient-primary px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-violet-950/40 flex items-center gap-2"
              >
                <span>Explore Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-100 flex items-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Schedule 30-Min Strategy Call</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
                  15+
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                  Enterprise Client Reviews
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  6
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                  Global Regions Served
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-400">
                  Zero
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                  Migration Downtime
                </div>
              </div>
            </div>
          </div>

          {/* Right 3D Visual & Cloud Control Plane Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Three.js 3D Cloud Topology */}
            <div className="glass-panel rounded-3xl p-2 border-slate-700/60 shadow-2xl relative overflow-hidden">
              <ThreeCloudHero />
            </div>

            {/* Cloud Control Plane Terminal Simulator Card */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border-slate-700/70 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-400">virtualpetals.cloud/control-plane</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-blue-500/20">
                  <span className="text-slate-400 block text-[10px]">INFRASTRUCTURE</span>
                  <span className="text-blue-400 font-bold">Microsoft Azure</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-violet-500/20">
                  <span className="text-slate-400 block text-[10px]">COLLABORATION</span>
                  <span className="text-violet-400 font-bold">M365 Suite</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-cyan-500/20">
                  <span className="text-slate-400 block text-[10px]">SECURITY</span>
                  <span className="text-cyan-400 font-bold">Intune Zero Trust</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-emerald-500/20">
                  <span className="text-slate-400 block text-[10px]">PIPELINES</span>
                  <span className="text-emerald-400 font-bold">Azure DevOps</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Enterprise Support 24/7
                </span>
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-700 font-semibold">
                  100% Client Satisfaction
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
