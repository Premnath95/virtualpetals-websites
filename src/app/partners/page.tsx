import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight, ShieldCheck, Cpu, Globe, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Partners Ecosystem | NETFUXION PRO & Technology Alliances",
  description:
    "Explore the Virtual Petals technology partner ecosystem featuring NETFUXION PRO and collaborative enterprise technology solutions.",
};

export default function PartnersPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Strategic Alliances
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            {COMPANY_INFO.partner.heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            Collaborating with strategic technology partners to deliver integrated IT engineering, resilient cloud infrastructure, and modern solutions.
          </p>
        </div>
      </section>

      {/* Main Partner Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-card p-8 sm:p-14 relative overflow-hidden">
            {/* Ambient accent */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-brand-green/10 via-brand-teal/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Partner Logo */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl shadow-subtle">
                <div className="relative w-full max-w-[220px] aspect-[1/1] flex items-center justify-center">
                  <Image
                    src={COMPANY_INFO.partner.logoPath}
                    alt="NETFUXION PRO Official Logo"
                    width={220}
                    height={220}
                    className="object-contain max-h-52 w-auto"
                    priority
                  />
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 text-center w-full">
                  <span className="text-sm font-extrabold text-brand-dark tracking-wider uppercase block">
                    NETFUXION PRO
                  </span>
                  <span className="text-xs text-brand-green font-semibold tracking-wider uppercase">
                    IT SOLUTIONS
                  </span>
                </div>
              </div>

              {/* Partner Profile */}
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-brand-teal text-xs font-semibold">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Strategic Partner</span>
                </div>

                <h2 className="text-3xl font-extrabold text-brand-dark">
                  NETFUXION PRO
                </h2>

                <p className="text-brand-charcoal/85 text-base leading-relaxed">
                  {COMPANY_INFO.partner.description}
                </p>

                <div className="pt-2 space-y-3">
                  <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                    Partner Service Capabilities
                  </h3>
                  <div className="space-y-2 text-sm text-brand-dark">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-light/40 border border-brand-green/15">
                      <Cpu className="w-4 h-4 text-brand-green shrink-0" />
                      <span>IT Solutions Architecture & Technical Delivery</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-teal-50/40 border border-brand-teal/15">
                      <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Enterprise IT Infrastructure Support</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?subject=NetFuxion%20Pro%20Partnership"
                    className="gradient-button text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Inquire About Partner Solutions</span>
                  </Link>

                  <a
                    href="mailto:contactus@virtualpetals.com?subject=NETFUXION%20PRO%20Inquiry"
                    className="bg-white border border-gray-200 text-brand-dark hover:bg-brand-light font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                  >
                    <span>Direct Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Principles */}
          <div className="max-w-4xl mx-auto pt-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-dark">Our Ecosystem Philosophy</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                How we work together with technology partners to deliver superior outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-brand-light/50 border border-brand-green/15">
                <h3 className="font-bold text-brand-dark text-base mb-2">Technical Excellence</h3>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                  Adhering to strict architectural standards, security baselines, and quality engineering.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50/50 border border-brand-teal/15">
                <h3 className="font-bold text-brand-dark text-base mb-2">Customer First</h3>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                  Ensuring seamless alignment and transparent communication for every enterprise engagement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-brand-dark text-base mb-2">Integrated Solutions</h3>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                  Combining specialist capabilities to solve complex multi-cloud and security challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
