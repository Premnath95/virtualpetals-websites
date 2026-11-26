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
    <section id="products" className="py-24 md:py-36 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Pill & Brand Header */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-brand-teal/20 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
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
          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Introducing Mito – Smarter Microsoft 365 Security & Compliance.
          </h2>

          {/* Exact User Requested Description */}
          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal">
            Mito helps organisations assess their Microsoft 365 environments, identify security gaps, discover risky configurations and understand compliance concerns through automated security assessments.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              id="mito-launch-button"
              data-testid="launch-mito-button"
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
              className="gradient-teal-button text-white font-semibold px-8 py-4 rounded-xl shadow-md flex items-center gap-2 text-base hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Demo</span>
            </a>

            <Link
              href="/products/mito"
              className="bg-white hover:bg-gray-100 text-brand-dark border border-gray-200 font-semibold px-6 py-4 rounded-xl transition-colors text-base flex items-center gap-1.5"
            >
              <span>Product Architecture</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Live Application Screenshot Showcase with Tabs */}
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
                    activeTab === idx ? "bg-brand-green" : "bg-gray-300"
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
              <span className="text-xs font-semibold text-brand-green bg-brand-light px-2.5 py-0.5 rounded border border-brand-green/20">
                Verified Live UI
              </span>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[640px] bg-slate-50">
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

        {/* 6 Verified Features Grid */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Verified Feature Set
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Engineered for Complete M365 Visibility
            </h3>
            <p className="text-sm sm:text-base text-brand-charcoal/75 mt-2">
              Automated checks that protect identities, enforce baselines, and eliminate configuration drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MITO_VERIFIED_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-green mb-5">
                      <Icon className="w-6 h-6" />
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
