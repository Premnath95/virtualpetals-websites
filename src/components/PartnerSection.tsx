import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, ArrowRight, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function PartnerSection() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase">
            Corporate Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Our Business Entities
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            Registered business entities operated and managed under Virtual Petals to support corporate technology services and enterprise operations.
          </p>
        </div>

        {/* Business Entity Showcase Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-card hover:shadow-cardHover transition-all duration-300 p-8 sm:p-12 relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-brand-green/10 via-brand-teal/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Official Logo in clean white container */}
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
                  <span className="text-[11px] text-brand-teal font-semibold tracking-wider uppercase">
                    REGISTERED BUSINESS ENTITY – INDIA
                  </span>
                </div>
              </div>

              {/* Profile Information */}
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-brand-teal text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Virtual Petals Business Entity</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  NETFUXION PRO
                </h3>

                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  NetFuxion Pro is a registered business entity in India, operated and managed by Virtual Petals.
                </p>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-xs sm:text-sm text-brand-charcoal/85">
                  <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>
                    Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/partners"
                    className="gradient-button text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5"
                  >
                    <span>View Business Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="bg-white border border-gray-200 text-brand-dark hover:bg-brand-light text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
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
