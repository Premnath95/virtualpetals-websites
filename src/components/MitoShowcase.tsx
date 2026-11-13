"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Eye,
  FileText,
  AlertTriangle,
  Lock,
  Layers,
  ChevronRight,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const SCREENSHOT_TABS = [
  {
    id: "assessment",
    label: "Security Dashboard",
    sublabel: "Automated baseline checkup",
    src: "/screenshots/mito-dashboard-assessment.png",
    caption: "Actual Mito Tenant Assessment: 754 checks, high-severity failure breakdown, and baseline status.",
  },
  {
    id: "runs",
    label: "Assessment History",
    sublabel: "Scheduled automated check runs",
    src: "/screenshots/mito-admin-runs.png",
    caption: "Mito Assessment Engine: Scheduled daily runs, change detection since previous day, and status tracking.",
  },
  {
    id: "checkup",
    label: "Microsoft Sign-In",
    sublabel: "Zero-touch read-only auth",
    src: "/screenshots/mito-checkup-screen.png",
    caption: "Mito Authentication: Simple Microsoft work account sign-in with 100% read-only access guarantee.",
  },
];

const MITO_VERIFIED_FEATURES = [
  {
    icon: Shield,
    title: "Microsoft 365 Security Assessments",
    desc: "Comprehensive automated evaluation across Exchange Online, Teams, SharePoint, and Entra ID.",
  },
  {
    icon: CheckCircle2,
    title: "Security Configuration Checks",
    desc: "Deep inspection of policies, admin privileges, forwarding rules, and baseline security configurations.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Identification",
    desc: "Immediate pinpointing of high, medium, and low-risk vulnerabilities before adversaries exploit them.",
  },
  {
    icon: Eye,
    title: "Compliance Insights",
    desc: "Automated benchmarking against CIS Microsoft 365 Foundations and CISA cloud compliance baselines.",
  },
  {
    icon: FileText,
    title: "Security Reporting",
    desc: "Executive summaries and technical audit logs ready for stakeholder review and regulatory compliance.",
  },
  {
    icon: BarChart3,
    title: "Actionable Recommendations",
    desc: "Step-by-step remediation guidance tailored to your exact Microsoft 365 tenant configuration.",
  },
];

export default function MitoShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-light/70 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Pill & Brand Header */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
            <span className="text-xs font-bold text-brand-dark tracking-wider uppercase">
              Proprietary SaaS Product – Microsoft 365 Security & Compliance Platform
            </span>
          </div>

          {/* Official Mito Logo */}
          <div className="pt-2">
            <Image
              src="/brand/mito-logo.png"
              alt="Mito Logo - Microsoft 365 Security Assessment"
              width={260}
              height={75}
              className="h-14 sm:h-16 w-auto object-contain mx-auto"
              priority
            />
          </div>

          {/* Exact User Requested Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Introducing Mito – Smarter Microsoft 365 Security & Compliance.
          </h2>

          {/* Exact User Requested Description */}
          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            Mito helps organisations assess their Microsoft 365 environments, identify security gaps, discover risky configurations and understand compliance concerns through automated security assessments.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              id="mito-launch-button"
              data-testid="launch-mito-button"
              href="http://mito.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
            >
              <span>Explore Mito</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-teal-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Demo</span>
            </a>

            <Link
              href="/products/mito"
              className="bg-gray-100 hover:bg-gray-200 text-brand-dark font-medium px-5 py-3.5 rounded-xl transition-colors text-sm sm:text-base flex items-center gap-1.5"
            >
              <span>Product Architecture</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Live Application Screenshot Showcase with Tabs */}
        <div className="mt-16 bg-brand-light/40 border border-brand-green/20 rounded-3xl p-4 sm:p-8 shadow-card">
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {SCREENSHOT_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left flex items-center gap-2.5 ${
                  activeTab === idx
                    ? "bg-brand-dark text-white shadow-md scale-[1.02]"
                    : "bg-white text-brand-charcoal hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activeTab === idx ? "bg-brand-green" : "bg-gray-300"
                  }`}
                />
                <div>
                  <span className="block font-bold">{tab.label}</span>
                  <span className={`text-[10px] hidden sm:block ${activeTab === idx ? "text-gray-300" : "text-gray-500"}`}>
                    {tab.sublabel}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Screenshot Container */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
            <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-brand-green inline-block" />
              </div>
              <span className="text-xs font-mono text-gray-500 truncate max-w-xs sm:max-w-none">
                http://mito.virtualpetals.com
              </span>
              <span className="text-[11px] font-semibold text-brand-green bg-brand-light px-2.5 py-0.5 rounded border border-brand-green/20">
                Verified Live UI
              </span>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[620px] bg-slate-50">
              <Image
                src={SCREENSHOT_TABS[activeTab].src}
                alt={SCREENSHOT_TABS[activeTab].caption}
                fill
                className="object-contain object-top"
                priority
              />
            </div>

            <div className="bg-white p-3.5 sm:p-4 border-t border-gray-100 text-center">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                {SCREENSHOT_TABS[activeTab].caption}
              </p>
            </div>
          </div>
        </div>

        {/* 6 User-Verified Features Grid */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Verified Feature Set
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Engineered for Complete M365 Visibility
            </h3>
            <p className="text-sm text-brand-charcoal/70 mt-2">
              Automated checks that protect identities, enforce baselines, and eliminate configuration drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MITO_VERIFIED_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-card hover:border-brand-teal/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-brand-dark">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-teal">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
