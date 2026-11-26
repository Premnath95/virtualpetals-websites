import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  Stethoscope,
  Ship,
  Hotel,
  ShoppingBag,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  Lock,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { INDUSTRIES } from "@/data/industriesData";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise IT & Cloud Solutions | Virtual Petals",
  description:
    "Tailored cloud architecture, Microsoft 365 governance, and Zero Trust security for Financial Services, Healthcare, Logistics, Hospitality, Retail, and Education.",
};

const ICON_MAP: Record<string, any> = {
  Landmark,
  Stethoscope,
  Ship,
  Hotel,
  ShoppingBag,
  GraduationCap,
};

export default function IndustriesPage() {
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
            <span className="text-brand-dark">Industries</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Regulated Industry Expertise</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              Specialised IT Architecture for Complex Industries.
            </h1>

            <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal">
              Every sector operates under distinct regulatory mandates, operational rhythms, and security threats. We engineer cloud infrastructure, Zero Trust identity, and compliance frameworks aligned to your industry standards.
            </p>
          </div>

          {/* Quick jump pills */}
          <div className="pt-10 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200/90 text-xs font-semibold text-brand-dark hover:border-brand-teal hover:text-brand-teal hover:shadow-xs transition-all"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Industry Deep Dive Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {INDUSTRIES.map((industry, index) => {
            const Icon = ICON_MAP[industry.iconName] || Landmark;
            const isEven = index % 2 === 1;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-32 p-8 sm:p-12 rounded-3xl border border-gray-200/90 bg-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Overview and Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-light border border-brand-teal/20 flex items-center justify-center text-brand-dark shadow-2xs">
                        <Icon className="w-7 h-7 text-brand-teal" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                          Sector 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                          {industry.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-brand-teal">
                      {industry.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed font-normal">
                      {industry.description}
                    </p>

                    {/* Solutions List */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                        How Virtual Petals Delivers Value:
                      </h3>
                      <div className="space-y-2.5">
                        {industry.solutions.map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                            <span className="text-xs sm:text-sm text-brand-charcoal/85 font-medium leading-relaxed">
                              {sol}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Challenges & Compliance Standards */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Industry Challenges Box */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 space-y-4">
                      <div className="flex items-center gap-2 text-brand-dark text-xs font-bold uppercase tracking-wider">
                        <Lock className="w-4 h-4 text-amber-500" />
                        <span>Core Operational Challenges</span>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-charcoal/80">
                        {industry.challenges.map((chal, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            <span>{chal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance & Regulatory Badges */}
                    <div className="bg-brand-dark text-white rounded-2xl p-6 space-y-4 shadow-lg">
                      <div className="flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Regulatory Frameworks Supported</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {industry.compliance.map((comp, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-gray-200 font-semibold"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                        Our cloud architectures adhere to strict regulatory compliance frameworks, continuous telemetry, and verified automated baseline auditing.
                      </p>
                    </div>

                    {/* Direct Consultation Link */}
                    <div>
                      <a
                        href={COMPANY_INFO.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl border border-brand-teal/40 bg-brand-light text-brand-dark text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-teal hover:text-white transition-all shadow-2xs"
                      >
                        <span>Schedule {industry.name} Architecture Review</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Consultation CTA Section */}
      <section className="pb-16 pt-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Consult With Our Industry Architects
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Operating in a Regulated or High-Compliance Environment?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect with our certified engineers to discuss security architecture, compliance mandates, and cloud transformation tailored to your sector.
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
                <span>Book 30-Min Strategy Call</span>
              </a>

              <Link
                href="/contact"
                className="bg-white text-brand-dark font-semibold px-7 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Contact Engineering Team</span>
                <ArrowRight className="w-4 h-4 text-brand-teal" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
