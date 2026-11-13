import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Eye, Shield, Users, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "About Us | Technology That Moves Your Business Forward",
  description:
    "Learn about Virtual Petals, our mission to empower businesses through reliable cloud solutions, Microsoft technologies, cybersecurity, and continuous innovation.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase mb-4">
            About Virtual Petals
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Technology That Moves Your Business Forward.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Who We Are */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark">Who We Are</h2>
              <p className="text-brand-charcoal/90 text-base leading-relaxed">
                Virtual Petals is an international IT solutions company focused on helping organisations modernise their technology infrastructure through Microsoft cloud solutions, IT management, cybersecurity, and DevOps.
              </p>
              <p className="text-brand-charcoal/80 text-base leading-relaxed">
                We believe that modern technology should not add operational friction. Instead, our engineers design and maintain cloud systems that operate smoothly, defend against sophisticated cyber threats, and scale seamlessly as our clients expand globally.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Enterprise Microsoft 365 Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Microsoft Azure Cloud Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>Zero Trust Security Models</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Continuous DevOps Automation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-light/70 rounded-3xl p-8 border border-brand-green/20 space-y-6">
              <h3 className="text-xl font-bold text-brand-dark">Operating Presence</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-xs flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">United Arab Emirates</h4>
                    <p className="text-xs text-gray-500">{COMPANY_INFO.contacts.uae.address}</p>
                    <p className="text-xs text-gray-400">{COMPANY_INFO.contacts.uae.poBox}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-xs flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">NetFuxion Pro Office</h4>
                    <p className="text-xs text-gray-500">{COMPANY_INFO.contacts.netfuxion.address}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full gradient-button text-white text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-brand-teal mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Our Mission</h3>
              <p className="text-brand-charcoal/85 text-base leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                We empower organisations to navigate digital transformation with confidence, pairing deep technical acumen with responsive, transparent execution.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-green mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Our Vision</h3>
              <p className="text-brand-charcoal/85 text-base leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                To set the benchmark for modern cloud consultancy, recognized for uncompromising security baselines and enduring client relationships.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-brand-dark">Our Values</h2>
              <p className="text-gray-500 mt-2">
                The principles that guide our technical decisions and client commitments every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {COMPANY_INFO.values.map((val, idx) => (
                <div
                  key={val.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-green font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-brand-dark text-lg">{val.title}</h3>
                  <p className="text-xs text-brand-charcoal/80 mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <TestimonialsSection />
    </div>
  );
}
