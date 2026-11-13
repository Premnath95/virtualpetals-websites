"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Maximize } from "lucide-react";

const OUTCOMES = [
  {
    num: "01",
    title: "Modernise IT Infrastructure",
    subtitle: "Move from legacy constraints to agile, cloud-native operational models.",
    desc: "We help organisations transition from outdated, fragmented on-premises systems toward agile, resilient Microsoft cloud environments. Our architecture blueprints reduce maintenance overhead, ensure continuous availability, and give teams the flexible foundation needed to innovate quickly.",
    icon: TrendingUp,
    accent: "green",
    highlights: [
      "Seamless migration to Microsoft Azure & M365",
      "Elimination of single points of failure",
      "Optimised cloud operating costs and licensing",
    ],
  },
  {
    num: "02",
    title: "Strengthen Security",
    subtitle: "Defend against sophisticated threats with Zero Trust and automated posture audits.",
    desc: "In an evolving threat landscape, security cannot be an afterthought. We implement multi-layered Zero Trust architectures, configure robust Microsoft Defender policies, enforce Conditional Access with phishing-resistant MFA, and leverage our proprietary Mito platform to proactively identify tenant vulnerabilities.",
    icon: ShieldCheck,
    accent: "teal",
    highlights: [
      "Zero Trust identity governance with Entra ID",
      "Continuous Microsoft 365 security posture audits",
      "Proactive endpoint threat detection & isolation",
    ],
  },
  {
    num: "03",
    title: "Improve Operational Efficiency",
    subtitle: "Automate repetitive workflows and empower modern digital teamwork.",
    desc: "By combining automated DevOps CI/CD pipelines with modern Microsoft 365 collaboration tools, we eliminate manual bottlenecks across engineering and business operations. Teams communicate effortlessly, deployments happen reliably in minutes, and IT teams focus on high-value strategic goals.",
    icon: Zap,
    accent: "green",
    highlights: [
      "Automated CI/CD workflows with GitHub Actions & Azure DevOps",
      "Streamlined modern collaboration via Microsoft Teams & SharePoint",
      "Windows Autopilot zero-touch device provisioning",
    ],
  },
  {
    num: "04",
    title: "Scale with Confidence",
    subtitle: "Engineered for elastic growth without compromising stability or compliance.",
    desc: "Grow your organisation with cloud infrastructure designed to absorb peak demands effortlessly. Our certified engineers design multi-region Azure topologies, containerized microservices on Kubernetes, and code-defined infrastructure that scales predictably as your business expands globally.",
    icon: Maximize,
    accent: "teal",
    highlights: [
      "High-availability Azure architectures with automated failover",
      "Infrastructure as Code (IaC) with Terraform for repeatable scale",
      "Rigorous SLA adherence and proactive 24/7 monitoring",
    ],
  },
];

export default function BusinessOutcomesSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-light/60 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>How We Help</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            From Technology Challenges to Business Opportunities.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            We partner with organisations at every stage of their digital journey, delivering measurable outcomes that reduce risk, increase productivity, and build sustainable enterprise value.
          </p>
        </div>

        {/* 4 Large Numbered Editorial Outcome Blocks: Kyndryl Inspiration */}
        <div className="mt-16 space-y-8">
          {OUTCOMES.map((outcome, idx) => {
            const Icon = outcome.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={outcome.num}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-card hover:shadow-cardHover transition-all duration-300 p-8 sm:p-12 relative overflow-hidden group"
              >
                {/* Large Background Editorial Number */}
                <span className="absolute -bottom-6 -right-4 text-8xl sm:text-9xl font-extrabold text-gray-100/70 select-none pointer-events-none font-mono group-hover:text-brand-light/70 transition-colors">
                  {outcome.num}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Number & Icon Column */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-green">
                      {outcome.num}.
                    </span>

                    <div className="w-14 h-14 rounded-2xl bg-brand-light border border-brand-green/20 flex items-center justify-center text-brand-dark group-hover:bg-teal-50 group-hover:text-brand-teal transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Outcome Content Column */}
                  <div className="lg:col-span-9 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                      {outcome.title}
                    </h3>

                    <p className="text-base sm:text-lg font-medium text-brand-teal">
                      {outcome.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                      {outcome.desc}
                    </p>

                    {/* Highlights */}
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-100">
                      {outcome.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                          <span className="text-xs sm:text-sm text-brand-charcoal font-medium">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outcome CTA Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="text-xl sm:text-2xl font-bold">Ready to address your key technology priorities?</h4>
            <p className="text-sm text-gray-300 max-w-xl">
              Connect with our enterprise engineering team for an architectural assessment tailored to your environment.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="#contact"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 group text-sm sm:text-base"
            >
              <span>Consult Our Experts</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
