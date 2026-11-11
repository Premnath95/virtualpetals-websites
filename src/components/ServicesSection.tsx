"use client";

import React from "react";
import Link from "next/link";
import {
  Cloud,
  Layers,
  GitMerge,
  Smartphone,
  ArrowRightLeft,
  ShieldCheck,
  Headphones,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "microsoft-365",
    tag: "M365",
    title: "Microsoft 365 Solutions",
    description:
      "Seamless tenant migrations, Exchange Online, SharePoint architecture, and modern workplace adoption tailored for enterprise scale.",
    features: [
      "Google Workspace to M365 Migration",
      "Tenant Consolidation & Governance",
      "Zero Data Loss Mailbox Cutover",
    ],
    accent: "blue",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    badgeColor: "bg-blue-600/20 border-blue-500/30 text-blue-400",
  },
  {
    id: "azure-cloud",
    tag: "AZURE",
    title: "Microsoft Azure Cloud Services",
    description:
      "Scalable Azure architectures, App Services, Front Door CDN, and hybrid cloud integration built for 99.99% availability.",
    features: [
      "Azure Front Door & Global CDN",
      "Infrastructure as a Service (IaaS)",
      "Cost & Performance Optimization",
    ],
    accent: "cyan",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    badgeColor: "bg-cyan-600/20 border-cyan-500/30 text-cyan-400",
  },
  {
    id: "azure-devops",
    tag: "CI/CD",
    title: "Azure DevOps & CI/CD Pipelines",
    description:
      "Automated continuous integration, deployment pipelines, container orchestration, and Infrastructure-as-Code engineering.",
    features: [
      "Automated Build & Release Pipelines",
      "App Service Deployment Workflows",
      "Bicep & Terraform Infrastructure",
    ],
    accent: "violet",
    icon: <GitMerge className="w-5 h-5 text-violet-400" />,
    badgeColor: "bg-violet-600/20 border-violet-500/30 text-violet-400",
  },
  {
    id: "microsoft-intune",
    tag: "MDM",
    title: "Microsoft Intune & Endpoint Management",
    description:
      "Zero Trust endpoint compliance, unified fleet configuration, conditional access, and automated application packaging.",
    features: [
      "Endpoint Manager (Intune) Rollout",
      "Conditional Access & Compliance",
      "Windows, macOS & Mobile Policies",
    ],
    accent: "indigo",
    icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
    badgeColor: "bg-indigo-600/20 border-indigo-500/30 text-indigo-400",
  },
  {
    id: "cloud-migration",
    tag: "MIGRATION",
    title: "Cloud Migration & Infrastructure",
    description:
      "End-to-end migration from legacy on-premises servers to Microsoft Azure and Microsoft 365 with zero interruption to business users.",
    features: [
      "On-Premise to Azure Cloud Cutover",
      "Active Directory to Entra ID Hybrid",
      "Database & Storage Modernization",
    ],
    accent: "blue",
    icon: <ArrowRightLeft className="w-5 h-5 text-blue-400" />,
    badgeColor: "bg-blue-600/20 border-blue-500/30 text-blue-400",
  },
  {
    id: "cybersecurity",
    tag: "SECURITY",
    title: "Cybersecurity & Compliance",
    description:
      "Zero Trust architecture, PKI Digital Certificate lifecycle, multi-factor authentication, and enterprise threat defense.",
    features: [
      "Digital Certificates & PKI Infrastructure",
      "Microsoft Defender Suite Deployment",
      "Enterprise Identity Protection",
    ],
    accent: "purple",
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    badgeColor: "bg-purple-600/20 border-purple-500/30 text-purple-400",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge text-xs font-semibold text-violet-300 dark:text-violet-300 light:text-violet-700 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Our Enterprise Practice Areas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
          Comprehensive Microsoft &amp; Cloud IT Solutions
        </h2>
        <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
          Engineered to remove technical friction, safeguard critical data assets, and empower scalable digital operations for modern enterprises.
        </p>
      </div>

      {/* 6 Grid Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {SERVICES_DATA.map((srv) => (
          <div
            key={srv.id}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Card Header with Icon & Tag */}
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm ${srv.badgeColor}`}>
                  {srv.icon}
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500 px-2 py-0.5 rounded bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 uppercase">
                  {srv.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {srv.description}
              </p>

              {/* Key Features Bullet List */}
              <ul className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-2 pt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                {srv.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">&#x2713;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Inquire Action */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
                Enterprise Solution
              </span>
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 7th Feature Banner: Managed IT & Cloud Operations */}
      <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border-violet-500/30 glow-violet flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 tracking-wider uppercase">
            <Headphones className="w-4 h-4 text-cyan-400" />
            <span>PROACTIVE 24/7 INFRASTRUCTURE SUPPORT</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
            Managed IT &amp; Cloud Infrastructure Operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Continuous cloud health monitoring, automated security patching, user identity lifecycle governance, and technical escalation support tailored for global enterprises.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://calendly.com/virtualpetals/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-primary px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2"
          >
            <span>Get Managed IT Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
