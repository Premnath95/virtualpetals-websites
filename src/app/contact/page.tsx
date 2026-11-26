import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import ContactBookingSection from "@/components/ContactBookingSection";
import MitoDemoBooking from "@/components/MitoDemoBooking";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise IT Consulting & Advisory | Virtual Petals",
  description:
    "Connect with Virtual Petals. Reach our UAE headquarters at Etihad Towers Abu Dhabi or NetFuxion Pro office in Coimbatore for Microsoft cloud, cybersecurity, and DevOps consulting.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-10 bg-white">
      {/* Header */}
      <section className="bg-brand-light/60 py-16 sm:py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Direct Engineering Engagement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              Let's Architect Your Next Technology Breakthrough.
            </h1>
            <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
              Whether modernising your Microsoft 365 tenant, migrating workloads to Azure, hardening cybersecurity, or deploying DevOps automation, our senior team is ready to consult.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Office Locations */}
      <ContactBookingSection />

      {/* Inline Demo Booking Option */}
      <MitoDemoBooking />
    </div>
  );
}
