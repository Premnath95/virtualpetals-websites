import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Lock,
  Layers,
  Eye,
  FileText,
  AlertTriangle,
  Server,
  Terminal,
  ChevronRight,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  BarChart3,
  Cpu,
  RefreshCw,
  Zap,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Mito – Microsoft 365 Security & Compliance Platform | Virtual Petals",
  description:
    "Mito runs 500+ read-only automated security checks against your Microsoft 365 tenant daily, discovers risky configurations, audits Entra ID and Exchange, and pinpoints configuration drift.",
};

const MITO_PILLARS = [
  {
    icon: ShieldCheck,
    title: "500+ Automated Security Checks",
    desc: "Continuous, automated evaluation of tenant configurations across Microsoft Entra ID, Exchange Online, Microsoft Teams, SharePoint, and OneDrive.",
  },
  {
    icon: Lock,
    title: "100% Read-Only Guarantee",
    desc: "Mito operates strictly with read-only API permissions. It never modifies configurations, alters mailbox rules, or deletes client tenant data.",
  },
  {
    icon: RefreshCw,
    title: "Automated Daily Drift Detection",
    desc: "Daily automated assessment runs track posture changes over time, instantly highlighting newly opened risks or resolved security findings.",
  },
  {
    icon: Layers,
    title: "CIS & CISA Industry Baselines",
    desc: "Evaluates your tenant against established industry benchmarks including CIS Microsoft 365 Foundations and CISA cloud security baselines.",
  },
  {
    icon: Eye,
    title: "Privileged Identity & Role Auditing",
    desc: "Deep audits into Global Administrator assignments, break-glass emergency accounts, Privileged Identity Management (PIM), and credential hygiene.",
  },
  {
    icon: FileText,
    title: "Executive & Remediation Reporting",
    desc: "Generates clear pass/fail breakdowns, severity-ranked remediation guidance, and direct administrator center links for rapid resolution.",
  },
];

const ASSESSMENT_CATEGORIES = [
  {
    name: "Microsoft Entra ID (Azure AD)",
    checks: "180+ Automated Checks",
    highlight: "MFA enforcement, Conditional Access policy gaps, legacy auth protocols, app registration permissions, and dormant admin accounts.",
  },
  {
    name: "Exchange Online",
    checks: "140+ Automated Checks",
    highlight: "External mail forwarding rules, mailbox delegation, transport security, basic auth protocols, SPF/DKIM/DMARC configurations.",
  },
  {
    name: "SharePoint & OneDrive for Business",
    checks: "90+ Automated Checks",
    highlight: "External sharing policies, anonymous access links, default link permissions, guest domain restrictions, and access expiry limits.",
  },
  {
    name: "Microsoft Teams & Collaboration",
    checks: "50+ Automated Checks",
    highlight: "Guest calling permissions, external domain federation, cloud file storage providers, meeting recording policies, and private channel governance.",
  },
  {
    name: "Microsoft Defender & Intune Compliance",
    checks: "60+ Automated Checks",
    highlight: "Safe Attachments, Safe Links, anti-phishing protection policies, endpoint compliance profiles, and device compliance health.",
  },
];

export default function MitoProductPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Editorial Breadcrumb & Hero */}
      <section className="bg-brand-light/60 py-16 sm:py-24 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle decorative gold lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-brand-green transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark">Mito</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold uppercase tracking-wider shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Proprietary SaaS Platform</span>
              </div>

              <div className="py-1">
                <Image
                  src="/brand/mito-logo.png"
                  alt="Mito Official Logo"
                  width={240}
                  height={65}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Smarter Microsoft 365 Security & Compliance Assessment.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
                Mito automatically reviews your Microsoft 365 tenant against 500+ security baselines daily, identifying exposed data, misconfigurations, and compliance risks with 100% read-only tenant safety.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://mito-app.virtualpetals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
                >
                  <span>Launch Mito Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-teal-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Live Demo</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs text-brand-charcoal/80 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Zero write permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Azure UAE North Hosted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>~10-min setup</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Mito Platform Specs</span>
                  </div>
                  <span className="text-xs font-bold text-brand-teal bg-brand-light px-3 py-1 rounded-full border border-brand-teal/20">
                    Production v2.4
                  </span>
                </div>

                <div className="space-y-3.5 text-xs text-brand-charcoal/90">
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Automated Checks</span>
                    <span className="font-bold text-brand-dark">500+ Evaluated Daily</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Tenant Impact</span>
                    <span className="font-bold text-emerald-600">100% Read-Only Guaranteed</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Hosting Region</span>
                    <span className="font-bold text-brand-dark">Microsoft Azure (UAE North)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Baseline Frameworks</span>
                    <span className="font-bold text-brand-dark">CIS M365 Foundations · CISA</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Drift Detection</span>
                    <span className="font-bold text-brand-teal">Automated Daily Delta Log</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Onboarding Time</span>
                    <span className="font-bold text-brand-dark">Under 10 Minutes</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500 font-medium">Official Portal</span>
                    <a
                      href="https://mito-app.virtualpetals.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-green hover:underline inline-flex items-center gap-1"
                    >
                      <span>mito-app.virtualpetals.com</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Application Dashboard Screenshots Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5 text-brand-teal" />
              <span>Real Platform Interface</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Verified Production Application Previews
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80">
              Live interface views demonstrating posture scorecards, failure severity rankings, and daily automated execution logs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Screenshot 1 */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-gray-100/80 px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-brand-dark ml-2">Assessment Scorecard</span>
                  </div>
                  <span className="text-brand-teal font-semibold">Tenant Baseline Results</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-slate-50">
                  <Image
                    src="/screenshots/mito-dashboard-assessment.png"
                    alt="Mito Dashboard Assessment Results"
                    fill
                    className="object-contain object-top"
                    priority
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <h3 className="font-bold text-brand-dark text-base">Security Score & Findings Severity</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-1 leading-relaxed">
                  Clear overview of passed versus failed checks categorized into High, Medium, and Low severity. Instant visibility into unblocked legacy authentication and missing phishing-resistant MFA.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-gray-100/80 px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-brand-dark ml-2">Automated Assessment Engine</span>
                  </div>
                  <span className="text-brand-green font-semibold">Daily Runs & Drift</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-slate-50">
                  <Image
                    src="/screenshots/mito-admin-runs.png"
                    alt="Mito Scheduled Runs and Change Tracking"
                    fill
                    className="object-contain object-top"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <h3 className="font-bold text-brand-dark text-base">Daily Automated Run Tracking</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-1 leading-relaxed">
                  Scheduled daily assessments compare findings against the previous snapshot. Pinpoint exactly when a tenant setting changed or an unauthorized forwarding rule appeared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Architecture Pillars */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Engineered for Enterprise Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Why IT Teams Rely on Mito
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80">
              Eliminate blind spots across your Microsoft cloud estate with continuous automated auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MITO_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-subtle hover:shadow-xl hover:border-brand-teal/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light border border-brand-teal/20 flex items-center justify-center text-brand-dark">
                      <Icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Coverage Across Microsoft Cloud Suite */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Coverage Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              500+ Automated Checks Across All Key Workloads
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80">
              Mito queries Microsoft Graph and Management APIs securely, evaluating policies against hardened CIS Microsoft 365 Foundations and CISA baseline standards.
            </p>
          </div>

          <div className="space-y-4">
            {ASSESSMENT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-brand-teal/30 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 md:max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-brand-dark">{cat.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {cat.checks}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
                    {cat.highlight}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-brand-teal">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Continuous Daily Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-16 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Background lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Get Started with Mito
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Benchmark Your Tenant Security Posture in Minutes.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect your tenant in under 10 minutes with 100% read-only safety, or schedule a personalized walkthrough with our cloud architects.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href={COMPANY_INFO.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white font-semibold px-7 py-4 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule 30-Min Demo</span>
              </a>

              <a
                href="https://mito-app.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-dark font-semibold px-7 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Launch Mito Portal</span>
                <ExternalLink className="w-4 h-4 text-brand-teal" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
