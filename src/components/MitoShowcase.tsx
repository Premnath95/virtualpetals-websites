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
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const SCREENSHOT_TABS = [
  {
    id: "assessment",
    label: "Security Dashboard",
    sublabel: "Latest assessment & findings",
    src: "/screenshots/mito-dashboard-assessment.png",
    caption: "Actual Mito Tenant Assessment: 754 checks, high-severity failure breakdown, and baseline status.",
  },
  {
    id: "runs",
    label: "Assessment History",
    sublabel: "Daily automated check runs",
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

const MITO_KEY_CAPABILITIES = [
  {
    icon: <Shield className="w-5 h-5 text-brand-green" />,
    title: "400+ Automated Security Checks",
    desc: "Comprehensive daily verification across Exchange Online, Teams, SharePoint, and Entra ID.",
  },
  {
    icon: <Lock className="w-5 h-5 text-brand-teal" />,
    title: "100% Read-Only Assessment",
    desc: "Mito never alters any configurations, users, or data in your production Microsoft 365 tenant.",
  },
  {
    icon: <Eye className="w-5 h-5 text-brand-green" />,
    title: "Drift & Change Detection",
    desc: "Pinpoints exactly what changed since yesterday—disabled policies, new admin roles, or forwarded mail.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-brand-teal" />,
    title: "Severity-Ranked Risk Action Items",
    desc: "Categorizes findings into High, Medium, and Low severity with clear remediation instructions.",
  },
  {
    icon: <FileText className="w-5 h-5 text-brand-green" />,
    title: "Compliance & Baseline Insights",
    desc: "Benchmarked against industry security baselines (CIS Microsoft 365 Foundations and CISA standards).",
  },
  {
    icon: <Layers className="w-5 h-5 text-brand-teal" />,
    title: "UAE Regional Cloud Isolation",
    desc: "Engineered and hosted in Microsoft Azure UAE North for complete data residency and tenant isolation.",
  },
];

export default function MitoShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-light rounded-full blur-3xl -translate-y-1/2 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Product Pill & Brand Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-light border border-brand-teal/20">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
            <span className="text-xs font-bold text-brand-dark tracking-wide uppercase">
              Virtual Petals Proprietary SaaS Product
            </span>
          </div>

          {/* Mito Logo */}
          <div className="pt-2">
            <Image
              src="/brand/mito-logo.png"
              alt="Mito Logo"
              width={260}
              height={75}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            {COMPANY_INFO.product.headline}
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            {COMPANY_INFO.product.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.product.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Explore Mito</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_INFO.product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-teal-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Demo</span>
            </a>

            <Link
              href="/products/mito"
              className="bg-gray-100 hover:bg-gray-200 text-brand-dark font-medium px-5 py-3.5 rounded-xl transition-colors text-sm sm:text-base flex items-center gap-1.5"
            >
              <span>Product Details</span>
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
                https://mito.virtualpetals.com
              </span>
              <span className="text-[11px] font-semibold text-brand-green bg-brand-light px-2 py-0.5 rounded">
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

        {/* 6 Key Capabilities Grid */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-brand-dark">Engineered for Complete M365 Visibility</h3>
            <p className="text-sm text-gray-500 mt-2">
              Automated checks that protect identities, enforce baselines, and eliminate configuration drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MITO_KEY_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-subtle hover:shadow-card hover:border-brand-teal/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base font-bold text-brand-dark">{cap.title}</h4>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-2 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
