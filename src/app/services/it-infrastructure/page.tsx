import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Activity,
  Clock,
  HardDrive,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Infrastructure & Managed Services | 24/7 Support | Virtual Petals",
  description:
    "24/7 infrastructure monitoring, Tier 2 & 3 dedicated technical support, IT administration, strategic consulting, disaster recovery, and managed cloud operations by Virtual Petals.",
};

const CAPABILITIES = [
  {
    title: "IT Infrastructure Management & Optimization",
    desc: "Complete operational management of physical and virtual servers, network switches, firewalls, and cloud subscriptions.",
  },
  {
    title: "Dedicated Tier 2 & Tier 3 Technical Support",
    desc: "Rapid resolution of complex infrastructure incidents by senior engineers rather than scripted call-center triage.",
  },
  {
    title: "24/7 Proactive Telemetry & System Monitoring",
    desc: "Continuous health tracking across compute, storage, memory, and network throughput with proactive threshold alerts.",
  },
  {
    title: "Strategic IT Consulting & Architecture Roadmaps",
    desc: "Quarterly IT reviews, technology modernization planning, budget forecasting, and executive technology advisory.",
  },
  {
    title: "Enterprise Migration & Deployment Services",
    desc: "Seamless system migrations, hardware lifecycle refreshes, and cloud transitions executed with zero business downtime.",
  },
  {
    title: "Disaster Recovery & Immutable Backup Governance",
    desc: "Automated daily backups, immutable cloud retention against ransomware, and semi-annual disaster recovery restore drills.",
  },
];

const SLA_METRICS = [
  { metric: "< 15 Min", label: "Critical Incident Response", note: "SLA-backed response for Priority 1 business-critical outages." },
  { metric: "99.95%", label: "Guaranteed Core Uptime", note: "High-availability clustering and redundant architecture design." },
  { metric: "24/7/365", label: "Continuous Telemetry", note: "Round-the-clock monitoring of servers, endpoints, and networks." },
  { metric: "Zero", label: "Ransomware Data Loss", note: "Immutable air-gapped backups prevent data encryption catastrophes." },
];

export default function ITInfrastructurePage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <section className="bg-brand-light/60 py-16 sm:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Managed Services Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Proactive Managed IT &amp; Enterprise Infrastructure.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            Eliminate operational interruptions with 24/7 infrastructure telemetry, dedicated Tier 2/3 engineering support, automated maintenance, and immutable disaster recovery governance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Managed IT Consultation</span>
            </a>
            <Link
              href="/contact"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Contact Support Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Narrative & Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Operational Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                Peace of Mind as a Service: Uncompromising Reliability.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Modern enterprises cannot afford system downtime, delayed support queues, or unpatched vulnerabilities. When mission-critical applications fail, every minute damages business reputation and productivity.
                </p>
                <p>
                  Virtual Petals acts as an embedded extension of your technology leadership. We manage servers, hypervisors, cloud tenants, network perimeter appliances, and identity directories with disciplined ITIL service management and automated patch pipelines.
                </p>
                <p>
                  Our engineers identify failing drives, degraded circuits, or anomalous login spikes before they impact business operations, providing continuous assurance so you can focus on core growth.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-brand-dark">
                  Azure Monitor
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-brand-dark">
                  Log Analytics
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-brand-dark">
                  Veeam &amp; Azure Backup
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-brand-dark">
                  ITIL Service Management
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-brand-dark">
                  Cisco &amp; Fortinet
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100">
                <Image
                  src="/images/services/managed-it.jpg"
                  alt="Enterprise Network Operations Center Engineers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Reliability Numbers */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Service Level Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Contractually Guaranteed Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SLA_METRICS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-teal">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-white">{item.label}</div>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Capabilities Cards */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Capabilities Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Complete Infrastructure Lifecycle Management
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80">
              From day-to-day administration to high-stakes disaster recovery simulations, we ensure comprehensive operational resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-xl hover:border-brand-teal/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light border border-brand-teal/20 flex items-center justify-center text-brand-dark">
                    <Headphones className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-brand-teal">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Enterprise SLA Supported</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16 pt-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Ready for Resilient IT Operations?
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Partner with an Engineering Team That Takes Ownership.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect with our managed operations leads to discuss proactive monitoring, SLA guarantees, and infrastructure cost optimization.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white font-semibold px-7 py-4 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Consultation</span>
              </a>

              <Link
                href="/contact"
                className="bg-white text-brand-dark font-semibold px-7 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Submit IT Inquiry</span>
                <ArrowRight className="w-4 h-4 text-brand-teal" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
