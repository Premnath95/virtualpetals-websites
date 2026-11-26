import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Lock, Eye, Layers } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Products | Virtual Petals Software & SaaS Solutions",
  description:
    "Explore proprietary SaaS products by Virtual Petals, including Mito – our automated Microsoft 365 security, compliance and baseline assessment platform.",
};

export default function ProductsOverviewPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Proprietary Technology
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Software Solutions Built for Security & Scale.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            In addition to our enterprise consulting services, Virtual Petals develops specialized software tools that automate cloud governance, baseline compliance, and tenant security.
          </p>
        </div>
      </section>

      {/* Featured Product: MITO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>Flagship SaaS Product</span>
                </div>

                <div className="py-1">
                  <Image
                    src="/brand/mito-logo.png"
                    alt="Mito - Microsoft 365 Security Platform"
                    width={220}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                  {COMPANY_INFO.product.headline}
                </h2>

                <p className="text-brand-charcoal/85 text-base leading-relaxed">
                  {COMPANY_INFO.product.description}
                </p>

                <div className="space-y-2.5 pt-2 text-sm text-brand-dark font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>500+ automated daily tenant checks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span>Zero-touch read-only access (never modifies data)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>Daily change detection highlighting security drift</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span>Hosted securely in Microsoft Azure UAE North</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://mito-app.virtualpetals.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm"
                  >
                    <span>Launch Mito</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_INFO.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-teal-button text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Free Demo</span>
                  </a>

                  <Link
                    href="/products/mito"
                    className="bg-gray-100 hover:bg-gray-200 text-brand-dark font-medium px-5 py-3.5 rounded-xl transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span>Full Product Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Product preview image */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-lg bg-gray-50">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>mito-app.virtualpetals.com</span>
                    <span className="text-brand-green font-semibold">Active UI</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/screenshots/mito-dashboard-assessment.png"
                      alt="Mito Dashboard Assessment Preview"
                      fill
                      className="object-contain object-top p-2"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
