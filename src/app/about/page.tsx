import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Award,
  Clock,
  Globe,
  Layers,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import StatisticsSection from "@/components/StatisticsSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import PartnerSection from "@/components/PartnerSection";

export const metadata: Metadata = {
  title: "About Us | Enterprise IT Solutions & Cloud Consulting",
  description:
    "Learn about Virtual Petals, our mission to engineer resilient Microsoft cloud solutions, Zero Trust cybersecurity, and DevOps automation across the UAE and global markets.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* 1. Page Hero Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>About Virtual Petals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Engineering Peace of Mind Through Intelligent IT Solutions.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            We partner with organisations worldwide to design, secure, and govern cloud architectures that protect confidentiality, ensure high availability, and accelerate business growth.
          </p>
        </div>
      </section>

      {/* 2. Who We Are & Heritage */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Who We Are &amp; Our Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                An International IT Consulting Partner You Can Rely On.
              </h2>

              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Virtual Petals was founded with a singular conviction: modern enterprise IT infrastructure should empower business agility rather than create operational friction. We bridge the gap between complex cloud technologies and everyday enterprise productivity.
                </p>
                <p>
                  With regional headquarters in Abu Dhabi, United Arab Emirates (Level 36, Etihad Towers), and our registered business entity NetFuxion Pro in Coimbatore, India, our certified systems engineers deliver proactive cloud consulting, Microsoft 365 governance, hybrid infrastructure, and Zero Trust security architectures.
                </p>
                <p>
                  We do not believe in one-size-fits-all IT packages. Every engagement begins with an architecture-led evaluation of your business dependencies, regulatory constraints, and long-term commercial goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Microsoft Cloud &amp; Azure Stack Specialists</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-dark shrink-0" />
                  <span>Zero Trust Security Architecture by Default</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>24/7 Managed Infrastructure Monitoring</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-dark shrink-0" />
                  <span>Proprietary Innovation with Mito Platform</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 group">
                <Image
                  src="/images/who-we-are-team.jpg"
                  alt="Virtual Petals technology consulting team"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark block">
                    Operational Excellence
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    Disciplined delivery across UAE &amp; India offices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Statistics */}
      <StatisticsSection />

      {/* 4. Mission, Vision & Core Values */}
      <section className="py-20 sm:py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Our Core Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Values That Drive Every Architectural Decision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shadow-2xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Our Mission</h3>
              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed font-normal">
                {COMPANY_INFO.mission}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-teal shadow-2xs">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Our Vision</h3>
              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed font-normal">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-subtle hover:border-brand-teal/40 transition-all duration-200"
              >
                <span className="text-xs font-mono font-bold text-brand-teal bg-brand-light px-2.5 py-1 rounded inline-block mb-3">
                  0{i + 1}
                </span>
                <h4 className="text-base font-bold text-brand-dark mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Working Process */}
      <WorkingProcessSection />

      {/* 6. Registered Business Entity */}
      <PartnerSection />

      {/* 7. Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Partner with Virtual Petals
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to transform your enterprise IT infrastructure?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Schedule an architectural consultation with our senior engineering team to review your cloud and cybersecurity roadmap.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white text-sm font-semibold px-7 py-4 rounded-xl shadow-md text-center inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book a Consultation</span>
              </a>

              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-6 py-4 rounded-xl text-center transition-colors"
              >
                <span>Contact Our Offices</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
