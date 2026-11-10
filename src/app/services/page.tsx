import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Services | Technology Solutions Designed for Your Business",
  description:
    "Explore Virtual Petals enterprise IT services: Microsoft 365, Azure Cloud, Microsoft Intune, Cybersecurity & Compliance, DevOps, Cloud Migration, Managed IT, and IT Consulting.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  Smartphone: <Smartphone className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  GitMerge: <GitMerge className="w-7 h-7" />,
  ArrowRightLeft: <ArrowRightLeft className="w-7 h-7" />,
  Headphones: <Headphones className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Enterprise Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Technology Solutions Designed for Your Business.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            From modern cloud workspaces to Zero Trust cybersecurity, Virtual Petals engineers solutions that ensure resilience, operational efficiency, and scalable growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-card hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light text-brand-green group-hover:bg-brand-teal/10 group-hover:text-brand-teal flex items-center justify-center transition-colors">
                      {ICON_MAP[srv.iconName]}
                    </div>
                    <span className="text-xs font-mono font-semibold text-gray-400">
                      0{SERVICES.indexOf(srv) + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                    {srv.title}
                  </h2>

                  <p className="text-sm text-brand-charcoal/85 mt-3 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-2.5">
                    <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                      Core Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-charcoal/90">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-600 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:text-brand-teal transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="rounded-3xl bg-brand-light p-8 sm:p-12 border border-brand-green/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-dark">Have specific IT architecture requirements?</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Schedule a discovery call with our certified cloud architects. We review your existing Microsoft and cloud estate and provide tailored recommendations.
              </p>
            </div>
            <Link
              href="/contact"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md shrink-0 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
