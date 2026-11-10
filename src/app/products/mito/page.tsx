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
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Mito – Microsoft 365 Security & Compliance Platform",
  description:
    "Mito runs 400+ read-only automated security checks against your Microsoft 365 tenant daily, discovers risky configurations, and shows what changed since yesterday.",
};

const FEATURES_LIST = [
  {
    title: "400+ Automated Security Checks",
    desc: "Rigorous automated baseline checks executed daily against Entra ID, Exchange, Teams, and SharePoint.",
  },
  {
    title: "Microsoft 365 Security Assessment",
    desc: "Identifies exposed sharing links, weak tenant-wide settings, and unauthorized application permissions.",
  },
  {
    title: "Microsoft Entra ID Security Assessment",
    desc: "Audits administrative roles, Privileged Identity Management (PIM), risky sign-ins, and emergency access accounts.",
  },
  {
    title: "Exchange Online Configuration Checks",
    desc: "Detects unauthorized external mail forwarding rules, basic authentication usage, and mailbox delegation anomalies.",
  },
  {
    title: "Security Baseline Analysis",
    desc: "Evaluates your tenant against established industry benchmarks including CIS Microsoft 365 Foundations and CISA baselines.",
  },
  {
    title: "Compliance & Posture Insights",
    desc: "Tracks security maturity over time, providing visibility into compliance drift before annual audits occur.",
  },
  {
    title: "Risk Identification & Severity Ranking",
    desc: "Categorizes findings into High, Medium, and Low severity so engineering teams know exactly what to address first.",
  },
  {
    title: "Actionable Recommendations",
    desc: "Provides clear, step-by-step remediation guidance with direct links to the relevant Microsoft Admin Centers.",
  },
  {
    title: "Detailed Security Reporting",
    desc: "Automated executive and technical reports highlighting pass/fail rates, high-priority vulnerabilities, and historical trends.",
  },
  {
    title: "Read-Only Assessment Approach",
    desc: "Zero write permissions required. Mito never makes modifications or deletes data within your Microsoft 365 tenant.",
  },
];

export default function MitoProductPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Breadcrumb & Hero */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-brand-green transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark font-semibold">Mito</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Microsoft 365 Security & Compliance Platform</span>
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

              <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                {COMPANY_INFO.product.headline}
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
                {COMPANY_INFO.product.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.product.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>Launch Mito Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-teal-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Free Demo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-card space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Platform Specs</span>
                  <span className="text-xs font-semibold text-brand-green bg-brand-light px-2.5 py-1 rounded-full">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-3 text-xs text-brand-charcoal/90">
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500">Security Checks</span>
                    <span className="font-bold text-brand-dark">400+ Automated Daily</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500">Access Mode</span>
                    <span className="font-bold text-brand-green">100% Read-Only</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500">Hosting Cloud</span>
                    <span className="font-bold text-brand-dark">Microsoft Azure (UAE North)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500">Baseline Frameworks</span>
                    <span className="font-bold text-brand-dark">CIS M365 Foundations · CISA</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500">Onboarding Time</span>
                    <span className="font-bold text-brand-teal">~10 Minutes (Scripted)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500">Support Contact</span>
                    <span className="font-bold text-brand-dark">{COMPANY_INFO.product.supportEmail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actual Application Screenshots Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-brand-dark">Real Application Dashboard Previews</h2>
            <p className="text-sm text-gray-500 mt-2">
              Verified interface screenshots showing tenant assessment metrics, failure ranking, and historical execution logs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Screenshot 1 */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Mito Assessment Overview</span>
                  <span className="text-brand-green font-semibold">Tenant Score & Failures</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-slate-50">
                  <Image
                    src="/screenshots/mito-dashboard-assessment.png"
                    alt="Mito Dashboard Assessment Results"
                    fill
                    className="object-contain object-top"
                  />
                </div>
              </div>
              <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                <h3 className="font-bold text-brand-dark text-sm">Security Findings & Baseline Failures</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Categorized summary of passed versus failed checks with instant visibility into high-severity risks like unblocked legacy authentication and missing phishing-resistant MFA.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Mito Assessment Engine</span>
                  <span className="text-brand-teal font-semibold">Daily Run Tracking</span>
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
              <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                <h3 className="font-bold text-brand-dark text-sm">Automated Daily Runs & Drift Detection</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Mito tracks recurring scheduled daily runs, showing exact changes since the previous day (new failures and resolved issues).
                </p>
              </div>
            </div>
          </div>

          {/* 10 Key Features */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-brand-dark">Comprehensive Security & Compliance Capabilities</h2>
              <p className="text-sm text-gray-500 mt-2">
                Built specifically to solve the configuration oversight challenges faced by modern Microsoft 365 environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES_LIST.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-subtle hover:shadow-card hover:border-brand-green/30 transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-brand-dark text-base">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center md:text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to evaluate your tenant security posture?</h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Book a personalized 30-minute demonstration or connect directly with the Mito application team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <a
                href={COMPANY_INFO.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule 30-Min Demo</span>
              </a>

              <a
                href={COMPANY_INFO.product.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-dark font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-sm"
              >
                <span>Open Mito App</span>
                <ExternalLink className="w-4 h-4 text-brand-teal" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
