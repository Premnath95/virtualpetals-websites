"use client";

import React from "react";
import { Cloud, Terminal, ShieldCheck, Cpu, Server, Lock, Layers, Sparkles } from "lucide-react";

const MICROSOFT_CLOUD_TECH = [
  { name: "Microsoft Azure", role: "Scalable Cloud Compute, IaaS & PaaS" },
  { name: "Microsoft 365", role: "Enterprise Productivity, Exchange & Teams" },
  { name: "Microsoft Entra ID", role: "Cloud Identity, Conditional Access & PIM" },
  { name: "Microsoft Intune", role: "Unified Endpoint Management & Compliance" },
  { name: "SharePoint Online", role: "Intranet Architecture & Document Governance" },
  { name: "Windows Autopilot", role: "Zero-Touch Modern Device Deployment" },
];

const DEVOPS_TECH = [
  { name: "Azure DevOps", role: "Enterprise CI/CD Pipelines & Agile Boards" },
  { name: "GitHub Actions", role: "Automated Workflows & Deployment Gates" },
  { name: "Docker", role: "Microservices & Containerization" },
  { name: "Kubernetes (AKS)", role: "Orchestration, Ingress & Autoscaling" },
  { name: "Terraform", role: "Declarative Infrastructure as Code (IaC)" },
  { name: "Linux & Bash", role: "Systems Automation & Scripting" },
];

const SECURITY_TECH = [
  { name: "Microsoft Defender XDR", role: "Endpoints, Identities, Office 365 & Cloud" },
  { name: "Zero Trust Architecture", role: "Explicit Verification & Least Privilege" },
  { name: "Mito Platform", role: "Proprietary Automated M365 Baseline Audits" },
  { name: "Conditional Access & MFA", role: "Adaptive Risk-Based Access Control" },
  { name: "BitLocker & Endpoint Hardening", role: "Hardware-Level Data Encryption" },
  { name: "CIS Benchmark Compliance", role: "Hardened Security Configuration Standards" },
];

export default function TechEcosystem() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/70 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Technology Ecosystem & Partner Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Technologies That Power Enterprise Success.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            We architect, deploy, and govern solutions built on globally recognized, enterprise-grade technology platforms.
          </p>
        </div>

        {/* 3 Major Technology Pillars: Microsoft, DevOps, Security */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Microsoft Cloud Solutions */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-green">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">Microsoft Cloud Solutions</h3>
                  <p className="text-xs text-brand-charcoal/70">Core enterprise foundation & productivity</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {MICROSOFT_CLOUD_TECH.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-brand-green/30 hover:bg-brand-light/40 transition-all flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{item.name}</h4>
                      <p className="text-xs text-brand-charcoal/70">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
              Microsoft Cloud Partner Practices
            </div>
          </div>

          {/* 2. DevOps & Cloud Native */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-brand-teal">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">DevOps & Cloud Native</h3>
                  <p className="text-xs text-brand-charcoal/70">Continuous integration & infrastructure code</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {DEVOPS_TECH.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-brand-teal/30 hover:bg-teal-50/40 transition-all flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{item.name}</h4>
                      <p className="text-xs text-brand-charcoal/70">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
              Automated Delivery Standards
            </div>
          </div>

          {/* 3. Security & Identity */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark">
                  <ShieldCheck className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">Security & Identity</h3>
                  <p className="text-xs text-brand-charcoal/70">Zero Trust governance & proactive posture</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {SECURITY_TECH.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-brand-green/30 hover:bg-brand-light/40 transition-all flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{item.name}</h4>
                      <p className="text-xs text-brand-charcoal/70">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
              Zero Trust Architecture Standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
