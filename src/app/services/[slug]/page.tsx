import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Cloud,
  LayoutGrid,
  Smartphone,
  GitMerge,
  ArrowRightLeft,
  Headphones,
  Compass,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/companyData";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | Virtual Petals`,
    description: service.shortDesc,
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  GitMerge: <GitMerge className="w-8 h-8" />,
  ArrowRightLeft: <ArrowRightLeft className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
};

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      {/* Breadcrumb & Header */}
      <section className="bg-brand-light/50 py-14 sm:py-18 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-brand-green transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-green/20 text-brand-green flex items-center justify-center shadow-xs">
              {ICON_MAP[service.iconName] || <Cloud className="w-8 h-8" />}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-dark">Overview & Enterprise Value</h2>
                <p className="text-base text-brand-charcoal/90 leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              {/* What We Deliver / Capabilities */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-dark">What We Deliver</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-brand-light/40 border border-brand-green/15 rounded-xl p-4 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-brand-dark">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Business Benefits */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-dark">Business Benefits</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-brand-teal flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        {i + 1}
                      </div>
                      <p className="text-sm text-brand-charcoal/90 leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Associated Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-brand-dark text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: CTA & Consultation */}
            <div className="lg:col-span-4 space-y-6">
              {/* Action Card */}
              <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2 relative z-10">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                    Get Started
                  </span>
                  <h3 className="text-xl font-bold">
                    Need {service.title} Consulting?
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Connect with our cloud architects to discuss your infrastructure scope and receive a tailored implementation plan.
                  </p>
                </div>

                <div className="space-y-3 relative z-10">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full text-center gradient-button text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md block"
                  >
                    <span>Request Service Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={COMPANY_INFO.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs border border-white/15 transition-colors block"
                  >
                    <Calendar className="w-4 h-4 text-brand-teal" />
                    <span>Book 30-Min Discovery</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-gray-400 relative z-10 space-y-1">
                  <p>Direct Phone: {COMPANY_INFO.contacts.phone}</p>
                  <p>Email: {COMPANY_INFO.contacts.emails.general}</p>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-subtle space-y-4">
                <h4 className="font-bold text-brand-dark text-sm">Explore Other Services</h4>
                <div className="space-y-3">
                  {otherServices.map((os) => (
                    <Link
                      key={os.id}
                      href={`/services/${os.slug}`}
                      className="p-3 rounded-xl bg-gray-50 hover:bg-brand-light flex items-center justify-between group transition-colors"
                    >
                      <span className="text-xs font-semibold text-brand-dark group-hover:text-brand-green">
                        {os.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-green transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
