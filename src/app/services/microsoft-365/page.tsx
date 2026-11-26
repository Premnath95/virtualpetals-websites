import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Lock,
  Smartphone,
  Mail,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft 365 Solutions | Administration, Exchange & Intune",
  description:
    "Expert Microsoft 365 administration, Exchange Online migration, Microsoft Intune, Entra ID identity governance, and tenant-to-tenant migrations by Virtual Petals.",
};

const M365_CAPABILITIES = [
  {
    title: "Microsoft 365 Administration & Governance",
    desc: "Centralized tenant administration, license rightsizing, external sharing controls, retention rules, and automated onboarding workflows.",
  },
  {
    title: "Exchange Online Architecture & Migration",
    desc: "Complex on-premises to cloud mailbox cutovers, hybrid configurations, mail flow filtering, archiving compliance, and zero data loss.",
  },
  {
    title: "Microsoft Intune & Endpoint Management",
    desc: "Unified endpoint management across Windows, macOS, iOS, and Android with Windows Autopilot zero-touch out-of-the-box provisioning.",
  },
  {
    title: "Microsoft Entra ID (Azure AD) Identity",
    desc: "Zero Trust cloud identity, Conditional Access enforcement, Privileged Identity Management (PIM), and phishing-resistant MFA.",
  },
  {
    title: "Microsoft 365 Security & Compliance",
    desc: "Defender for Office 365 anti-phishing, safe attachments, Microsoft Purview Data Loss Prevention (DLP), and continuous posture audits.",
  },
  {
    title: "Tenant-to-Tenant (T2T) Migrations",
    desc: "Seamless cross-tenant mailbox, OneDrive, SharePoint, and Teams consolidation during corporate mergers, acquisitions, and restructuring.",
  },
];

export default function Microsoft365Page() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Modern Workplace Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Modern Collaboration &amp; Zero Trust Microsoft 365 Architecture.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            We architect, govern, and secure Microsoft 365 ecosystems that empower productive teamwork while protecting corporate identities and data.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule M365 Strategy Session</span>
            </a>
            <Link
              href="/contact"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Contact Specialists</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Narrative & Photography */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Enterprise Modern Workplace
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                Unified Productivity with Ironclad Identity Protection.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Microsoft 365 is the operational backbone for enterprise communication and document governance. Yet without experienced architectural oversight, organizations often suffer from bloated licensing costs, misconfigured permissions, and vulnerabilities to credential phishing.
                </p>
                <p>
                  Virtual Petals designs, migrates, and manages enterprise tenants with disciplined precision. We enforce least-privilege administrative access via Entra PIM, roll out zero-touch laptop provisioning via Windows Autopilot, and conduct continuous security checkups via our proprietary Mito platform.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Exchange &amp; Teams Governance</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Windows Autopilot &amp; Intune</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Phishing-Resistant MFA Rollout</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>License Rightsizing &amp; TCO Reductions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 group">
                <Image
                  src="/images/services/m365-workplace.jpg"
                  alt="Enterprise team collaborating in modern office with Microsoft 365"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark block">
                    Microsoft 365 Ecosystem
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    Zero Trust collaboration across Exchange, Teams, Intune &amp; Entra ID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Capabilities */}
      <section className="py-20 sm:py-28 bg-gray-50/70 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Detailed Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our Microsoft 365 Services Spectrum.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {M365_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-5 shadow-2xs">
                    <Layers className="w-5 h-5 text-brand-teal" />
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
                  <span>Verified Microsoft Standards</span>
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
                Tenant Optimization
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Microsoft 365 Tenant Review
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Let our certified Microsoft specialists assess your licenses, review Conditional Access policies, and provide actionable recommendations.
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
