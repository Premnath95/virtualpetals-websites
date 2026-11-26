import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Cpu,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Solutions | Microsoft Azure & AWS Architecture",
  description:
    "Enterprise Microsoft Azure and AWS cloud consulting, migration, infrastructure management, Azure DevOps, and FinOps cost governance by Virtual Petals.",
};

const CAPABILITIES = [
  {
    title: "Microsoft Azure Architecture & Engineering",
    desc: "Complete cloud topology design, Azure Virtual Machines, Virtual WAN, ExpressRoute, and automated failover zones.",
  },
  {
    title: "AWS Cloud Services & Landing Zones",
    desc: "Multi-account AWS architectures, Amazon EC2, VPC security, S3 immutable storage, RDS databases, and DirectConnect.",
  },
  {
    title: "Enterprise Cloud Migration",
    desc: "Proven lift-and-shift, re-platforming, and database modernisation with zero business interruption and strict rollback safeguards.",
  },
  {
    title: "Cloud Infrastructure Management",
    desc: "Continuous health monitoring, proactive patching, telemetry analytics, and SLA-backed 24/7 technical operations.",
  },
  {
    title: "Azure DevOps & Release Automation",
    desc: "Automated CI/CD pipelines, Infrastructure as Code using Terraform, and continuous delivery gates into Azure workloads.",
  },
  {
    title: "FinOps & Cloud Cost Optimisation",
    desc: "Granular cost attribution, detection of idle/zombie resources, reserved instance planning, and automated rightsizing.",
  },
];

export default function CloudSolutionsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Cloud Engineering Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Resilient Cloud Infrastructure Built for Enterprise Scale.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            We architect, migrate, and govern Microsoft Azure and AWS environments that eliminate downtime, ensure continuous compliance, and maximize cloud ROI.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule Cloud Architecture Review</span>
            </a>
            <Link
              href="/contact"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Contact Cloud Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Narrative & Photography */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Overview &amp; Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                Moving Beyond Legacy Infrastructure Constraints.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Modern enterprises cannot afford fragile on-premises servers, unscalable datacentres, or runaway cloud bills. Virtual Petals delivers disciplined cloud engineering aligned with the Microsoft Well-Architected Framework and AWS Best Practices.
                </p>
                <p>
                  Whether executing a complex multi-terabyte database cutover, setting up low-latency ExpressRoute connections between corporate offices and Azure UAE North, or establishing Infrastructure as Code using Terraform, our certified engineers deliver predictable, zero-downtime outcomes.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Azure &amp; AWS Certified Practice</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Zero-Downtime Data Cutover</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>24/7 Telemetry &amp; SLA Uptime</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>FinOps Cost Governance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 group">
                <Image
                  src="/images/services/azure-cloud-datacenter.jpg"
                  alt="Enterprise cloud infrastructure and datacenter engineering"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark block">
                    Cloud Core Capabilities
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    High-availability topologies across Azure &amp; AWS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Capabilities */}
      <section className="py-20 sm:py-28 bg-gray-50/70 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Detailed Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Comprehensive Cloud Solutions Spectrum.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-5 shadow-2xs">
                    <Cloud className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2.5 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enterprise SLA Backed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Ready to Migrate or Modernise?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Schedule a Cloud Readiness Assessment
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Our certified cloud architects will assess your workloads, determine migration feasibility, and calculate projected TCO savings.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white text-sm font-semibold px-7 py-4 rounded-xl shadow-md inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book 30-Min Session</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
