"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Cloud,
  Layers,
  ShieldCheck,
  GitMerge,
  Sparkles,
  CheckCircle2,
  Lock,
  Cpu,
} from "lucide-react";
import ThreeCloudHero from "@/components/ThreeCloudHero";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#050816] dark:via-[#0A0F26] dark:to-[#050816] transition-colors duration-300"
    >
      {/* Background Ambient Radial Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-violet-600/15 via-blue-600/15 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left relative z-20">
            {/* Enterprise Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge text-xs font-semibold text-violet-700 dark:text-violet-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>GLOBAL CLOUD &amp; MICROSOFT SOLUTIONS PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              Architecting Resilient{" "}
              <span className="gradient-text-primary">Enterprise Cloud</span>,
              Modern Workplaces &amp; Zero Trust.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Empowering global organizations across UAE, Australia, the United
              States, and New Zealand with scalable Microsoft Azure engineering,
              seamless M365 adoptions, Intune endpoint governance, and continuous
              DevOps automation.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/#services"
                className="btn-gradient-primary px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-violet-900/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Schedule 30-Min Strategy Call</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  15+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Enterprise Client Reviews
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-cyan-400">
                  6
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Global Regions Served
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400">
                  Zero
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Migration Downtime
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero: 3D Cloud Infrastructure + Floating Technology Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
            
            {/* The Real-Time Three.js 3D Cloud Canvas */}
            <div className="w-full relative z-10">
              <ThreeCloudHero />
            </div>

            {/* Floating Card 1: Top Left - Azure Cloud */}
            <div
              style={{
                transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px)`,
              }}
              className="absolute top-2 left-0 sm:left-4 z-20 glass-panel rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/90 dark:border-slate-700/80 max-w-[200px] sm:max-w-[220px] transition-transform duration-200 ease-out animate-float"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    Azure Cloud
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                    99.99% Uptime SLA
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Top Right - Microsoft 365 */}
            <div
              style={{
                transform: `translate(${mousePos.x * 22}px, ${mousePos.y * 22}px)`,
              }}
              className="absolute top-6 right-0 sm:right-2 z-20 glass-panel rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/90 dark:border-slate-700/80 max-w-[200px] sm:max-w-[220px] transition-transform duration-200 ease-out animate-float [animation-delay:1.5s]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-600/15 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    Microsoft 365
                  </span>
                  <span className="text-[10px] text-blue-600 dark:text-cyan-400 font-semibold block">
                    Zero Data Loss Cutover
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Bottom Left - Intune & Zero Trust */}
            <div
              style={{
                transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
              }}
              className="absolute bottom-4 left-0 sm:left-6 z-20 glass-panel rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/90 dark:border-slate-700/80 max-w-[210px] sm:max-w-[230px] transition-transform duration-200 ease-out animate-float [animation-delay:3s]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    Zero Trust &amp; Intune
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block">
                    CIS Benchmark Enforced
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 4: Bottom Right - Azure DevOps */}
            <div
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              }}
              className="absolute bottom-2 right-0 sm:right-4 z-20 glass-panel rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/90 dark:border-slate-700/80 max-w-[210px] sm:max-w-[230px] transition-transform duration-200 ease-out animate-float [animation-delay:4.5s]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <GitMerge className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    Azure DevOps CI/CD
                  </span>
                  <span className="text-[10px] text-violet-600 dark:text-violet-400 font-semibold block">
                    Automated IaC Pipelines
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Contrast Dark Navy Cloud Control Plane Console */}
        <div className="mt-14 max-w-5xl mx-auto glass-card-navy rounded-2xl p-5 sm:p-6 border border-violet-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
              </div>
              <span className="font-mono text-xs text-slate-300">
                virtualpetals.cloud/control-plane
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold">MULTI-REGION CLOUD TELEMETRY: ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30">
              <span className="text-slate-400 block text-[10px]">MICROSOFT AZURE</span>
              <span className="text-blue-400 font-bold text-xs mt-0.5 block">Front Door &amp; IaaS</span>
              <span className="text-emerald-400 text-[10px]">&check; 99.99% Latency &lt; 20ms</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-violet-500/30">
              <span className="text-slate-400 block text-[10px]">MICROSOFT 365</span>
              <span className="text-violet-400 font-bold text-xs mt-0.5 block">Tenant Migration</span>
              <span className="text-emerald-400 text-[10px]">&check; Zero Data Loss</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
              <span className="text-slate-400 block text-[10px]">INTUNE ZERO TRUST</span>
              <span className="text-cyan-400 font-bold text-xs mt-0.5 block">Endpoint Compliance</span>
              <span className="text-emerald-400 text-[10px]">&check; CIS Hardened</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30">
              <span className="text-slate-400 block text-[10px]">AZURE DEVOPS</span>
              <span className="text-emerald-400 font-bold text-xs mt-0.5 block">CI/CD Pipeline</span>
              <span className="text-emerald-400 text-[10px]">&check; Automated Release</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
