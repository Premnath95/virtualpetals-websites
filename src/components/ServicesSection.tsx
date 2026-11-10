import React from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Cloud,
  Smartphone,
  ShieldCheck,
  GitMerge,
  ArrowRightLeft,
  Headphones,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/data/servicesData";

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  GitMerge: <GitMerge className="w-6 h-6" />,
  ArrowRightLeft: <ArrowRightLeft className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-grey/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-xs font-semibold tracking-wide uppercase">
            Our Enterprise Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Technology Solutions Designed for Your Business.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            From modern cloud workspaces to Zero Trust cybersecurity, Virtual Petals engineers solutions that ensure resilience, operational efficiency, and scalable growth.
          </p>
        </div>

        {/* 8 Premium Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-green group-hover:bg-brand-teal/10 group-hover:text-brand-teal flex items-center justify-center transition-colors duration-200 mb-5">
                  {ICON_MAP[srv.iconName] || <LayoutGrid className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  {srv.title}
                </h3>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-2.5 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Key features bullets */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  {srv.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More link */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/services/${srv.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:text-brand-teal transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-brand-dark">Need a tailored IT architecture for your business?</h4>
            <p className="text-sm text-gray-500">
              Our certified cloud consultants conduct thorough infrastructure and security reviews.
            </p>
          </div>
          <Link
            href="/contact"
            className="gradient-button text-white text-sm font-semibold px-6 py-3 rounded-xl shrink-0 flex items-center gap-2"
          >
            <span>Request Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
