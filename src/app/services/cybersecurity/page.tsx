import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  AlertTriangle,
  Eye,
  FileText,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & Compliance | Zero Trust & M365 Security",
  description:
    "Enterprise Zero Trust cybersecurity, Microsoft 365 security assessments, Microsoft Defender XDR, identity governance, and compliance auditing by Virtual Petals.",
};

const SECURITY_CAPABILITIES = [
  {
    title: "Microsoft 365 Security Assessments",
    desc: "Rigorous evaluation of tenant-wide security configurations, sharing permissions, admin privileges, and identity baselines via 500+ automated checks in our Mito platform.",
  },
  {
    title: "Endpoint Security & Hardening (Defender XDR)",
    desc: "Deploying Microsoft Defender for Endpoint with automated threat isolation, attack surface reduction (ASR), and BitLocker hardware-level encryption.",
  },
  {
    title: "Identity & Access Management (IAM & MFA)",
    desc: "Enforcing adaptive Conditional Access, phishing-resistant FIDO2 MFA, Entra ID Protection, and Privileged Identity Management (PIM) with just-in-time approval.",
  },
  {
    title: "Security Configuration & Drift Detection",
    desc: "Continuous detection of unauthorized changes to mail routing, transport rules, external forwarding, or admin roles before attackers can exploit them.",
  },
  {
    title: "Compliance & Posture Benchmarking",
    desc: "Benchmarking tenant posture against CIS Microsoft 365 Foundations, NIST guidelines, and ISO 27001 regulatory frameworks with executive reporting.",
  },
  {
    title: "Threat Monitoring & Incident Mitigation",
    desc: "Proactive telemetry analysis, suspicious sign-in alerts, and swift remediation playbooks designed to minimize dwell time and operational disruption.",
  },
];

export default function CybersecurityPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Cybersecurity Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Zero Trust Cybersecurity Engineered for Modern Threats.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            We deliver multi-layered security architectures that protect enterprise identities, harden cloud environments, and continuously verify compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Security Posture Review</span>
            </a>
            <Link
              href="/products/mito"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Explore Mito Security SaaS</span>
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
                Zero Trust Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                Assume Breach. Verify Explicitly. Enforce Least Privilege.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Traditional perimeter security is obsolete in today's cloud-first world. Enterprise employees collaborate across home networks, mobile devices, and cloud tenants. Security must be identity-centric, context-aware, and continuously enforced.
                </p>
                <p>
                  Virtual Petals implements comprehensive Zero Trust defenses. We configure phishing-resistant MFA, enforce device compliance checks via Intune before granting access, and eliminate standing administrative privileges. Combined with automated daily checkups from our proprietary Mito platform, we ensure your organization remains resilient against ransomware, account takeovers, and compliance drift.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>500+ Automated Tenant Checks</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Phishing-Resistant MFA Enforcement</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Microsoft Defender XDR Implementation</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>CIS &amp; ISO 27001 Alignment</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 group">
                <Image
                  src="/images/services/cybersecurity-soc.jpg"
                  alt="Security operations centre analyst monitoring cyber threat telemetry"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark block">
                    Zero Trust Defense
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    Multi-tier threat isolation &amp; continuous posture verification
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
              Enterprise Cybersecurity Capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECURITY_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-5 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-brand-teal" />
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
                  <span>CIS Benchmark Compliant</span>
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
                Tenant Audit
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Assess Your Microsoft 365 Security Posture Today
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Identify hidden configuration gaps, risky admin privileges, and forwarding rules with our certified security consultants.
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
                <span>Book 30-Min Security Review</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
