import React from "react";
import Link from "next/link";
import { Target, Eye, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-xs font-semibold tracking-wide uppercase">
            About Virtual Petals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Technology That Moves Your Business Forward.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Grid: Who We Are + Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Who We Are Card */}
          <div className="lg:col-span-6 bg-brand-light/60 rounded-2xl p-8 border border-brand-green/20 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-green/20 flex items-center justify-center text-brand-green shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Who We Are</h3>
              <p className="text-brand-charcoal/90 leading-relaxed text-sm sm:text-base">
                Virtual Petals is a technology solutions and consulting company founded to bridge the gap between complex enterprise technologies and everyday business operations.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed text-sm sm:text-base">
                Operating with enterprise delivery capabilities across the UAE and India, we specialize in architecting secure Microsoft 365 environments, scalable Azure cloud infrastructures, endpoint governance, and DevOps modernization.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-greenDark group"
              >
                <span>Read our company profile</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mission & Vision Column */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-card hover:border-brand-teal/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-dark">Our Mission</h3>
                  <p className="text-brand-charcoal/85 text-sm sm:text-base leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-card hover:border-brand-green/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-light border border-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-dark">Our Vision</h3>
                  <p className="text-brand-charcoal/85 text-sm sm:text-base leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-brand-dark">Our Core Values</h3>
            <p className="text-sm text-gray-500 mt-2">
              The foundational principles that guide every client partnership, technical engagement, and solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand-green font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-brand-dark text-base">{val.title}</h4>
                <p className="text-xs text-brand-charcoal/80 mt-1.5 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
