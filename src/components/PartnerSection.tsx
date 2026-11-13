"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, ArrowRight, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function PartnerSection() {
  return (
    <section id="partners" className="py-24 md:py-36 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>Corporate Operations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Our Business Entities
          </h2>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal">
            Registered business entities operated and managed under Virtual Petals to support corporate technology services and enterprise operations.
          </p>
        </div>

        {/* Business Entity Showcase Card: Large Editorial Split Layout with Real Facility Photo */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Official Logo + Facility Photography */}
              <div className="lg:col-span-5 relative bg-gradient-to-b from-brand-light/50 to-white p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-[200px] aspect-[1/1] flex items-center justify-center">
                      <Image
                        src={COMPANY_INFO.partner.logoPath}
                        alt="NETFUXION PRO Official Logo"
                        width={200}
                        height={200}
                        className="object-contain max-h-40 w-auto"
                        priority
                      />
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 text-center w-full">
                      <span className="text-xs font-bold text-brand-dark tracking-wider uppercase block">
                        NETFUXION PRO
                      </span>
                      <span className="text-[11px] text-brand-teal font-semibold tracking-wider uppercase">
                        REGISTERED BUSINESS ENTITY – INDIA
                      </span>
                    </div>
                  </div>

                  {/* Operational photo thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xs border border-gray-200 hidden sm:block">
                    <Image
                      src="/images/netfuxion-center.jpg"
                      alt="NetFuxion Pro enterprise delivery operations center"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-bold text-white uppercase tracking-wider">
                      India Delivery Operations
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 pt-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                  <span>Fully operated & managed by Virtual Petals</span>
                </div>
              </div>

              {/* Right Column: Profile Information & Address */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Virtual Petals Business Entity</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                    NETFUXION PRO
                  </h3>

                  <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
                    NetFuxion Pro is a registered business entity in India, operated and managed by Virtual Petals.
                  </p>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/90 text-sm text-brand-charcoal space-y-1">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        <strong className="text-brand-dark block text-xs uppercase tracking-wider font-bold mb-0.5">
                          Registered Office – India:
                        </strong>
                        Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-gray-100">
                  <Link
                    href="/partners"
                    className="gradient-button text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-xs flex items-center gap-2"
                  >
                    <span>View Business Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="#contact"
                    className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark hover:bg-brand-light text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors"
                  >
                    <span>Contact Virtual Petals</span>
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
