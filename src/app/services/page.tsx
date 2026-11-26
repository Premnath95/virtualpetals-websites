import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Layers,
  ShieldCheck,
  Terminal,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
} from "lucide-react";
import { SERVICES } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services Catalog | Cloud, Microsoft 365, Cybersecurity & DevOps",
  description:
    "Explore Virtual Petals enterprise IT services: Cloud Solutions, Microsoft 365 Solutions, Zero Trust Cybersecurity, DevOps Automation, and Managed IT Infrastructure.",
};

const SERVICE_IMAGES: Record<string, string> = {
  "cloud-solutions": "/images/services/azure-cloud-datacenter.jpg",
  "microsoft-365": "/images/services/m365-workplace.jpg",
  "cybersecurity": "/images/services/cybersecurity-soc.jpg",
  "devops": "/images/services/devops-engineering.jpg",
  "it-infrastructure": "/images/services/managed-it-consulting.jpg",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Enterprise Solutions Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Technology Services Engineered for Business Resilience.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            From modern cloud workspaces to Zero Trust cybersecurity, automated CI/CD pipelines, and 24/7 managed infrastructure, we engineer solutions that guarantee security and continuous uptime.
          </p>
        </div>
      </section>

      {/* Comprehensive Services List */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((srv, idx) => {
            const isEven = idx % 2 === 1;
            const imgPath = SERVICE_IMAGES[srv.slug] || "/images/services/azure-cloud-datacenter.jpg";

            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-card hover:shadow-cardHover transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900 group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={imgPath}
                      alt={srv.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                        Enterprise Practice 0{idx + 1}
                      </span>
                      <span className="text-base font-bold text-white block">
                        {srv.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                        {srv.category}
                      </span>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-snug">
                        {srv.title}
                      </h2>

                      <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
                        {srv.longDesc}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                          Key Capabilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {srv.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal font-medium">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Stack */}
                      <div className="pt-3 border-t border-gray-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                          Standard Platforms
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {srv.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md bg-gray-100 text-brand-charcoal text-xs font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="gradient-button text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-xs inline-flex items-center gap-2 group"
                      >
                        <span>Dedicated Service Architecture</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <a
                        href="https://calendly.com/virtualpetals/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-teal transition-colors flex items-center gap-1.5"
                      >
                        <Calendar className="w-4 h-4 text-brand-teal" />
                        <span>Book an Architect Consultation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-light/40 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Need a Multi-Disciplinary Cloud Assessment?
          </h3>
          <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-normal">
            Our certified consultants evaluate cross-tenant dependencies, security configurations, and automation workflows to deliver actionable architecture blueprints.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="gradient-button text-white text-sm font-semibold px-8 py-4 rounded-xl shadow-md inline-flex items-center gap-2"
            >
              <span>Connect with Our Consulting Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
