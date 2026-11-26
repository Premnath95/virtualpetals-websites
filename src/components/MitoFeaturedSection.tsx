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

const MITO_HIGHLIGHTS = [
  {
    icon: Shield,
    title: "500+ Automated Read-Only Security Checks",
    desc: "Rigorous automated baseline checks executed daily across Entra ID, Exchange, Teams, and SharePoint without modifying your production data.",
  },
  {
    icon: CheckCircle2,
    title: "Microsoft 365 Security Assessment",
    desc: "Discovers exposed external sharing links, weak tenant-wide settings, excessive administrative privileges, and risky app permissions.",
  },
  {
    icon: AlertTriangle,
    title: "Security Configuration Analysis",
    desc: "Pinpoints exactly what changed since yesterday—disabled policies, new admin roles, or unauthorized forwarding rules.",
  },
  {
    icon: FileText,
    title: "Detailed Assessment Reports",
    desc: "Automated executive summaries and technical audit logs ready for stakeholder review, risk committees, and external regulatory audits.",
  },
  {
    icon: BarChart3,
    title: "Actionable Security Recommendations",
    desc: "Prioritized remediation guidance with step-by-step instructions to eliminate high, medium, and low severity vulnerabilities.",
  },
  {
    icon: Eye,
    title: "Centralised Assessment Dashboard",
    desc: "A single unified pane of glass monitoring tenant compliance against CIS Microsoft 365 Foundations and CISA cloud baselines.",
  },
];

export default function MitoFeaturedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="mito" className="py-24 md:py-32 bg-brand-light/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Brand Header */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-brand-teal/20 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
            <span className="text-xs font-bold text-brand-dark tracking-wider uppercase">
              Featured Proprietary SaaS Product
            </span>
          </div>

          {/* Official Mito Logo */}
          <div className="pt-2">
            <Image
              src="/brand/mito-logo.png"
              alt="Mito Logo - Microsoft 365 Security Assessment Platform"
              width={260}
              height={75}
              className="h-14 sm:h-16 w-auto object-contain mx-auto"
              priority
            />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Introducing Mito – Microsoft 365 Security Assessment Platform.
          </h2>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal">
            Mito helps organisations assess their Microsoft 365 environments, discover risky configurations, and ensure compliance through 500+ automated read-only security checks.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              id="mito-explore-button"
              href="https://mito-app.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-8 py-4 rounded-xl shadow-md flex items-center gap-2 text-base hover:shadow-lg transition-all"
            >
              <span>Explore Mito</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-8 py-4 rounded-xl shadow-2xs flex items-center gap-2 text-base transition-all"
            >
              <Calendar className="w-4 h-4 text-brand-teal" />
              <span>Request a Demo</span>
            </a>

            <Link
              href="/products/mito"
              className="text-brand-dark hover:text-brand-teal font-semibold px-5 py-4 transition-colors text-base flex items-center gap-1"
            >
              <span>Product Details &amp; Architecture</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Live UI Screenshot Showcase with Tabs */}
        <div className="mt-16 bg-white border border-gray-200/90 rounded-3xl p-4 sm:p-8 shadow-xl">
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {SCREENSHOT_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left flex items-center gap-3 ${
                  activeTab === idx
                    ? "bg-brand-dark text-white shadow-md scale-[1.02]"
                    : "bg-gray-50 text-brand-charcoal hover:bg-gray-100 border border-gray-200/80"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeTab === idx ? "bg-brand-teal" : "bg-gray-300"
                  }`}
                />
                <div>
                  <span className="block font-bold">{tab.label}</span>
                  <span className={`text-[11px] hidden sm:block ${activeTab === idx ? "text-gray-300" : "text-gray-500"}`}>
                    {tab.sublabel}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Screenshot Container */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-brand-green inline-block" />
              </div>
              <span className="text-xs font-mono text-gray-500 truncate max-w-xs sm:max-w-none">
                https://mito-app.virtualpetals.com
              </span>
              <span className="text-xs font-semibold text-brand-dark bg-brand-light px-2.5 py-0.5 rounded border border-brand-teal/20">
                Live Application UI
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

            <div className="bg-white p-4 border-t border-gray-100 text-center">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                {SCREENSHOT_TABS[activeTab].caption}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Key Features Grid */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block mb-1">
              Platform Capabilities
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Engineered for Complete M365 Security Visibility
            </h3>
            <p className="text-sm sm:text-base text-brand-charcoal/75 mt-2">
              Automated checks that protect identities, enforce baselines, and eliminate configuration drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MITO_HIGHLIGHTS.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark mb-5 shadow-2xs">
                      <Icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark">{feat.title}</h4>
                    <p className="text-sm text-brand-charcoal/80 mt-2.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                    <CheckCircle className="w-4 h-4" />
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
