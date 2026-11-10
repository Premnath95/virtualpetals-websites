import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MitoDemoBooking from "@/components/MitoDemoBooking";

export const metadata: Metadata = {
  title: "Contact Us | Connect with Virtual Petals",
  description:
    "Get in touch with Virtual Petals. Reach our UAE office at Etihad Towers Abu Dhabi or our India delivery center in Chennai for Microsoft cloud, security and IT consulting.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-10">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Let's Build Something Great Together.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
            Looking for reliable IT solutions? Connect with our team to discuss your technology requirements.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details */}
      <ContactForm />

      {/* Inline Demo Booking Option */}
      <MitoDemoBooking />
    </div>
  );
}
