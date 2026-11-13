"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cloud,
  Layers,
  ShieldCheck,
  Terminal,
  Smartphone,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Server,
  Lock,
  GitBranch,
  Shield,
  Workflow,
  Sparkles,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: "green" | "teal";
  capabilities: string[];
  technologies: string[];
  link: string;
}

const ENTERPRISE_CATEGORIES: ServiceCategory[] = [
  {
    id: "m365",
    category: "Microsoft Cloud & Modern Workplace",
    title: "Empower Your Modern Workforce with Secure Cloud Collaboration",
    shortDesc:
      "Modernise communications, document workflows, and enterprise identity with Microsoft 365, Teams, and Entra ID.",
    longDesc:
      "We architect, migrate, and govern Microsoft 365 environments tailored to enterprise productivity and strict compliance standards. From multi-geo tenant setups to automated collaboration governance, we ensure seamless day-to-day operations.",
    icon: Cloud,
    accentColor: "green",
    capabilities: [
      "Microsoft 365 Architecture & Governance",
      "Exchange Online Migration & Archiving",
      "Microsoft Teams Enterprise Voice & Collab",
      "SharePoint Online Intranet & Permissions",
      "Microsoft Entra ID (Azure AD) Identity",
      "Microsoft Intune Cloud Management",
    ],
    technologies: ["Microsoft 365", "Exchange Online", "Teams", "SharePoint", "Entra ID", "Intune"],
    link: "/services/microsoft-365",
  },
  {
    id: "azure",
    category: "Cloud & Infrastructure",
    title: "Scalable, Resilient & High-Performance Cloud Architectures",
    shortDesc:
      "Enterprise Azure compute, networking, hybrid integration, and infrastructure cost optimisation.",
    longDesc:
      "We build robust cloud foundations on Microsoft Azure designed for high availability, disaster recovery, and operational efficiency. Whether executing complex migrations or modernising existing infrastructure, we deliver resilient cloud topology.",
    icon: Server,
    accentColor: "teal",
    capabilities: [
      "Microsoft Azure Architecture & Design",
      "Azure Virtual Machines & Compute Scaling",
      "Cloud Migration (Lift-and-Shift & Modernisation)",
      "Azure Virtual WAN & Hybrid Networking",
      "Cost Optimisation & FinOps Governance",
      "Infrastructure Management & Resilience",
    ],
    technologies: ["Azure IaaS/PaaS", "Virtual WAN", "ExpressRoute", "Azure Backup", "Azure Monitor"],
    link: "/services/azure-cloud",
  },
  {
    id: "security",
    category: "Cybersecurity & Compliance",
    title: "Zero Trust Protection Across Identities, Endpoints & Data",
    shortDesc:
      "Comprehensive Microsoft Defender, Conditional Access, MFA, and automated compliance assessments.",
    longDesc:
      "Security is engineered into every component of your IT environment. We implement multi-layered Zero Trust architectures, enforce strict Conditional Access policies, conduct in-depth vulnerability assessments, and deploy automated continuous monitoring.",
    icon: ShieldCheck,
    accentColor: "green",
    capabilities: [
      "Microsoft Defender for Endpoint, Office & Cloud",
      "Conditional Access Policy Architecture",
      "Cloud Identity Security & PIM Governance",
      "Multi-Factor Authentication (MFA) Rollouts",
      "Microsoft 365 Security Posture Hardening",
      "Vulnerability & Compliance Assessments",
    ],
    technologies: ["Defender XDR", "Conditional Access", "Entra PIM", "Purview Compliance", "Mito Platform"],
    link: "/services/cybersecurity",
  },
  {
    id: "devops",
    category: "DevOps & Automation",
    title: "Accelerate Software Delivery with Continuous Automation",
    shortDesc:
      "CI/CD pipelines, container orchestration, and Infrastructure as Code using Terraform and GitHub Actions.",
    longDesc:
      "Modernise your development and deployment workflows. We implement automated CI/CD pipelines, containerize enterprise workloads with Docker and Kubernetes (AKS), and codify environments with Terraform for repeatable, error-free releases.",
    icon: Terminal,
    accentColor: "teal",
    capabilities: [
      "Azure DevOps Pipelines & Boards",
      "GitHub Actions Automated Workflows",
      "Continuous Integration & Continuous Delivery (CI/CD)",
      "Docker Application Containerization",
      "Kubernetes & Azure Kubernetes Service (AKS)",
      "Terraform Infrastructure as Code (IaC)",
    ],
    technologies: ["Azure DevOps", "GitHub Actions", "Docker", "Kubernetes (AKS)", "Terraform", "Helm"],
    link: "/services/devops",
  },
  {
    id: "endpoint",
    category: "Endpoint Management",
    title: "Unified Governance Across All Enterprise Laptops & Devices",
    shortDesc:
      "Zero-touch deployment with Windows Autopilot, Intune compliance, and remote device security.",
    longDesc:
      "Manage and protect corporate and BYOD endpoints with Microsoft Intune. We enable zero-touch out-of-the-box hardware deployment via Windows Autopilot, enforce compliance policies, and ensure sensitive business data remains protected anywhere.",
    icon: Smartphone,
    accentColor: "green",
    capabilities: [
      "Microsoft Intune MDM & MAM Configuration",
      "Windows Autopilot Zero-Touch Provisioning",
      "Endpoint Security Baselines & BitLocker",
      "Device Compliance & Risk Evaluation",
      "Cross-Platform Device Management (Windows/macOS/iOS/Android)",
      "Automated Application Packaging & Updates",
    ],
    technologies: ["Microsoft Intune", "Windows Autopilot", "BitLocker", "Defender for Endpoint", "Company Portal"],
    link: "/services/endpoint-management",
  },
  {
    id: "managed",
    category: "Managed IT & Consulting",
    title: "Proactive Infrastructure Administration & Strategic Advisory",
    shortDesc:
      "Reliable 24/7 technical operations, continuous monitoring, and executive IT strategy.",
    longDesc:
      "Ensure uninterrupted business operations with our managed IT services. We handle daily administration, proactive telemetry monitoring, routine patching, and strategic IT roadmapping so your internal teams can focus on strategic initiatives.",
    icon: Headphones,
    accentColor: "teal",
    capabilities: [
      "Enterprise IT Administration & Operations",
      "24/7 Cloud Telemetry & System Monitoring",
      "Tier 2 & 3 Responsive Technical Support",
      "IT Infrastructure Consulting & Roadmapping",
      "Technology Environment Optimisation",
      "Backup Governance & Disaster Recovery Readiness",
    ],
    technologies: ["ITIL Alignment", "Azure Monitor", "Log Analytics", "SLA-Backed Support", "Executive Consulting"],
    link: "/services/it-consulting",
  },
];

export default function EnterpriseServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(ENTERPRISE_CATEGORIES[0].id);

  const active =
    ENTERPRISE_CATEGORIES.find((cat) => cat.id === selectedCategory) ||
    ENTERPRISE_CATEGORIES[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Enterprise Services Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Technology Services That Move Your Business Forward.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            Engineered for high performance, compliance, and resilience across Microsoft cloud ecosystems, cloud infrastructure, cybersecurity, and modern automation.
          </p>
        </div>

        {/* Kyndryl-Style Interactive Enterprise Service Navigation Tabs */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {ENTERPRISE_CATEGORIES.map((cat) => {
            const isCurrent = cat.id === active.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between h-full ${
                  isCurrent
                    ? "bg-brand-dark text-white border-brand-dark shadow-md scale-[1.02]"
                    : "bg-white text-brand-dark hover:bg-white/80 border-gray-200/90 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isCurrent
                        ? "bg-white/10 text-brand-green"
                        : "bg-brand-light text-brand-dark"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? "bg-brand-green animate-pulse" : "bg-transparent"
                    }`}
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold leading-tight">
                    {cat.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Service Deep-Dive Canvas: Kyndryl-Inspired Editorial Showcase */}
        <div className="mt-8 bg-white rounded-3xl border border-gray-200/90 shadow-card p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand-light via-teal-50/30 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Content Area: Detailed Scope & Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-wider">
                <span>{active.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-snug">
                {active.title}
              </h3>

              <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-normal">
                {active.longDesc}
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-4">
                  Core Enterprise Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {active.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-charcoal/90 font-medium leading-tight">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2.5">
                  Core Platforms & Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-gray-100 text-brand-charcoal text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={active.link}
                  className="gradient-button text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs flex items-center gap-2 group transition-all"
                >
                  <span>Explore {active.category}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact"
                  className="text-sm font-semibold text-brand-dark hover:text-brand-green transition-colors"
                >
                  Consult Our Team &rarr;
                </Link>
              </div>
            </div>

            {/* Right Visual Card: Architecture Highlights & Metrics */}
            <div className="lg:col-span-5 bg-brand-light/50 rounded-2xl p-6 sm:p-8 border border-brand-green/20 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-green/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-green/20 flex items-center justify-center text-brand-green shadow-2xs">
                    {React.createElement(active.icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Service Architecture
                    </span>
                    <span className="block text-[11px] text-gray-500">
                      Standardized Delivery Model
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-brand-green bg-white px-2.5 py-1 rounded border border-brand-green/20">
                  ENTERPRISE
                </span>
              </div>

              {/* Three Value Pillars */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs">
                  <span className="text-xs font-bold text-brand-dark block mb-1">
                    01. Architectural Assessment
                  </span>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                    Comprehensive audit of existing configurations, licenses, security postures, and scalability constraints.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs">
                  <span className="text-xs font-bold text-brand-dark block mb-1">
                    02. Zero-Disruption Execution
                  </span>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                    Phased rollout with automated verification, fallback strategies, and transparent stakeholder communication.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs">
                  <span className="text-xs font-bold text-brand-dark block mb-1">
                    03. Ongoing Governance & Support
                  </span>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                    Continuous monitoring, regular posture reviews, drift alerts, and proactive engineering assistance.
                  </p>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-2 text-center text-xs text-brand-charcoal/70">
                Aligned with Microsoft Zero Trust & Well-Architected Frameworks
              </div>
            </div>
          </div>
        </div>

        {/* 6 Category Summary Grid at the bottom for quick overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-card hover:border-brand-teal/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark group-hover:bg-teal-50 group-hover:text-brand-teal transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                    {cat.category}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:text-brand-teal transition-colors"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
