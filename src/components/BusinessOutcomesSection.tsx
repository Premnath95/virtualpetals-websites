"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Maximize, CheckCircle2 } from "lucide-react";

interface OutcomeItem {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const OUTCOMES: OutcomeItem[] = [
  {
    num: "01",
    title: "Modernise IT Infrastructure",
    subtitle: "Move from legacy operational friction to agile, cloud-native scalability.",
    desc: "We help organisations transition from outdated, fragmented on-premises systems toward agile, resilient Microsoft cloud environments. Our architecture blueprints reduce maintenance overhead, eliminate single points of failure, and give enterprise teams the flexible foundation needed to innovate quickly.",
    image: "/images/outcomes/outcome-1-modernise.jpg",
    imageAlt: "Modern high-tech corporate infrastructure and cloud transformation",
    icon: TrendingUp,
    highlights: [
      "Seamless migration to Microsoft Azure & M365",
      "Elimination of legacy single points of failure",
      "Optimised cloud operating expenditure & licensing",
    ],
  },
  {
    num: "02",
    title: "Strengthen Enterprise Security",
    subtitle: "Defend against sophisticated threats with Zero Trust and automated posture audits.",
    desc: "In an evolving threat landscape, security cannot be an afterthought. We implement multi-layered Zero Trust architectures, configure robust Microsoft Defender policies, enforce Conditional Access with phishing-resistant MFA, and leverage our proprietary Mito platform to proactively identify tenant vulnerabilities.",
    image: "/images/outcomes/outcome-2-security.jpg",
    imageAlt: "Cybersecurity operations and Zero Trust identity protection",
    icon: ShieldCheck,
    highlights: [
      "Zero Trust identity governance with Entra ID",
      "Continuous Microsoft 365 security posture audits",
      "Proactive endpoint threat detection & isolation",
    ],
  },
  {
    num: "03",
    title: "Improve Business Productivity",
    subtitle: "Automate repetitive workflows and empower modern digital teamwork.",
    desc: "By combining automated DevOps CI/CD pipelines with modern Microsoft 365 collaboration tools, we eliminate manual bottlenecks across engineering and business operations. Teams communicate effortlessly, deployments happen reliably in minutes, and IT teams focus on high-value strategic goals.",
    image: "/images/outcomes/outcome-3-efficiency.jpg",
    imageAlt: "Business professionals collaborating productively in a modern corporate meeting room",
    icon: Zap,
    highlights: [
      "Automated CI/CD workflows with GitHub Actions & Azure DevOps",
      "Streamlined modern collaboration via Microsoft Teams & SharePoint",
      "Windows Autopilot zero-touch device provisioning",
    ],
  },
  {
    num: "04",
    title: "Scale Cloud Infrastructure",
    subtitle: "Engineered for elastic growth without compromising stability or compliance.",
    desc: "Grow your organisation with cloud infrastructure designed to absorb peak demands effortlessly. Our certified engineers design multi-region Azure topologies, containerized microservices on Kubernetes, and code-defined infrastructure that scales predictably as your business expands globally.",
    image: "/images/outcomes/outcome-4-scale.jpg",
    imageAlt: "Executive business leader scaling an international enterprise technology environment",
    icon: Maximize,
    highlights: [
      "High-availability Azure architectures with automated failover",
      "Infrastructure as Code (IaC) with Terraform for repeatable scale",
      "Rigorous SLA adherence and proactive 24/7 monitoring",
    ],
  },
];

export default function BusinessOutcomesSection() {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>How We Help Businesses</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            From Technology Challenges to Business Opportunities.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            We partner with organisations at every stage of their digital journey, delivering measurable outcomes that reduce risk, increase productivity, and build sustainable enterprise value.
          </p>
        </div>

        {/* Section C: Full-Width Alternating Image and Text Blocks (Kyndryl-Style) */}
        <div className="mt-20 space-y-20 lg:space-y-28">
          {OUTCOMES.map((item, idx) => {
            const isImageLeft = idx % 2 === 1; // Alternating layout
            const Icon = item.icon;

            return (
              <div
                key={item.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Column 1: Image (or on left when isImageLeft) */}
                <div
                  className={`lg:col-span-6 relative ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] border border-gray-100 group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-green">
                          Business Outcome {item.num}
                        </span>
                        <span className="block text-sm font-bold text-brand-dark">
                          {item.title}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark shrink-0">
                        <Icon className="w-5 h-5 text-brand-teal" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Editorial Text (or on left when not isImageLeft) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-green">
                      {item.num}.
                    </span>
                    <span className="h-0.5 w-12 bg-brand-green" />
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-lg font-medium text-brand-teal">
                    {item.subtitle}
                  </p>

                  <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="pt-2 space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-brand-charcoal font-medium">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-base font-bold text-brand-green hover:text-brand-dark group transition-colors"
                    >
                      <span>Explore this outcome with our team</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
              Architectural Readiness
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Ready to address your key technology priorities?
            </h4>
            <p className="text-sm sm:text-base text-gray-300">
              Connect with our enterprise engineering team for an architectural review tailored to your exact IT environment.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="#contact"
              className="gradient-button text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2.5 group text-base"
            >
              <span>Consult Our Experts</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
