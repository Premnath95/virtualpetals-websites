import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight, ShieldCheck, CheckCircle2, Globe, Cpu } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function PartnerSection() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase">
            Collaborative Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            {COMPANY_INFO.partner.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            We collaborate with strategic technology partners to extend technical capabilities, deliver integrated enterprise services, and accelerate business modernization.
          </p>
        </div>

        {/* Featured Partner Showcase Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-card hover:shadow-cardHover transition-all duration-300 p-8 sm:p-12 relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-brand-green/10 via-brand-teal/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Partner Official Logo in clean white container */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-subtle">
                <div className="relative w-full max-w-[220px] aspect-[1/1] flex items-center justify-center">
                  <Image
                    src={COMPANY_INFO.partner.logoPath}
                    alt="NETFUXION PRO Official Logo"
                    width={220}
                    height={220}
                    className="object-contain max-h-48 w-auto"
                    priority
                  />
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-center w-full">
                  <span className="text-xs font-bold text-brand-dark tracking-wider uppercase block">
                    NETFUXION PRO
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
                    Strategic Technology Partner
                  </span>
                </div>
              </div>

              {/* Partner Profile Information */}
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-brand-teal text-xs font-semibold">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Featured Partner</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  NETFUXION PRO
                </h3>

                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  {COMPANY_INFO.partner.description}
                </p>

                {/* Partner Areas */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                    Partner Technology Collaboration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-charcoal/90">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <Cpu className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>IT Solutions Engineering</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>Enterprise Technology Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/partners"
                    className="gradient-button text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5"
                  >
                    <span>View Partner Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact?subject=Partnership"
                    className="bg-white border border-gray-200 text-brand-dark hover:bg-brand-light text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <span>Connect with Partner Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
