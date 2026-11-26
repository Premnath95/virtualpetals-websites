"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const SERVICE_OPTIONS = [
  "Cloud Solutions (Azure & AWS)",
  "Microsoft 365 Solutions & Governance",
  "Cybersecurity & Zero Trust Architecture",
  "DevOps, Kubernetes & Automation",
  "IT Infrastructure & Managed Services",
  "Mito Product Demo / Trial",
  "Other Enterprise IT Consultation",
];

export default function ContactBookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus({
        type: "success",
        message: data.message,
      });

      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        service: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An error occurred. Please contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Consultation &amp; Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Start Your Enterprise Technology Consultation.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-normal">
            Whether modernising your cloud infrastructure, hardening Microsoft 365 security, or deploying 24/7 managed IT operations, our senior engineers are ready to assist.
          </p>
        </div>

        {/* Dual Layout: Corporate Overview on Left, Working Form on Right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Calendly Scheduler & Corporate Offices */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Calendly Instant Booking Banner */}
            <div className="p-7 rounded-3xl bg-brand-dark text-white space-y-4 shadow-xl border border-brand-gold/30">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Immediate 1-on-1 Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Schedule a 30-Minute Video Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Connect directly with our senior cloud and cybersecurity consultants to review your current architecture and discuss your requirements.
              </p>
              <div className="pt-2">
                <a
                  href="https://calendly.com/virtualpetals/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  <span>Book Consultation via Calendly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Corporate Offices */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-dark shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="space-y-0.5 text-xs">
                  <strong className="text-sm font-bold text-brand-dark block">UAE Regional Headquarters</strong>
                  <p className="text-brand-charcoal/85">
                    Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-dark shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5 text-brand-dark" />
                </div>
                <div className="space-y-0.5 text-xs">
                  <strong className="text-sm font-bold text-brand-dark block">NetFuxion Pro Office (India)</strong>
                  <p className="text-brand-charcoal/85">
                    Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                  <a href={`tel:${COMPANY_INFO.contacts.phone}`} className="font-semibold text-brand-dark hover:text-brand-teal">
                    {COMPANY_INFO.contacts.phone}
                  </a>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-dark shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.contacts.emails.general}`} className="font-semibold text-brand-dark hover:text-brand-teal truncate">
                    {COMPANY_INFO.contacts.emails.general}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-brand-charcoal/70 mb-8 font-normal">
              Submit your technical requirements below. Our engineering team typically responds within one business day.
            </p>

            {status.type === "success" && (
              <div className="mb-6 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm font-medium">{status.message}</div>
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-sm font-medium">{status.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. David Mitchell"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                  Service Area of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal bg-white transition-all"
                >
                  <option value="">Select a service practice...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                  Technology Requirements / Context *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current IT infrastructure, objectives, or target timeline..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none text-sm text-brand-charcoal transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto gradient-button text-white font-semibold px-9 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 text-base disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Technical Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
