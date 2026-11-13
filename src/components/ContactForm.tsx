"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const SERVICE_OPTIONS = [
  "Microsoft 365 Solutions",
  "Azure Cloud Solutions",
  "Microsoft Intune & Endpoint Management",
  "Cybersecurity & Compliance",
  "DevOps & Automation",
  "Cloud Migration",
  "Managed IT Services",
  "IT Consulting",
  "Mito Product Demo / Trial",
  "Partnership with NetFuxion Pro",
  "Other Technology Requirements",
];

export default function ContactForm() {
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

      // Reset form
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
    <section id="contact" className="py-20 md:py-28 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details & official presence */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-xs font-semibold tracking-wide uppercase">
                Direct Consultation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Let's Build Something Great Together.
              </h2>
              <p className="text-brand-charcoal/80 text-base leading-relaxed">
                Looking for reliable IT solutions? Connect with our team to discuss your technology requirements.
              </p>
            </div>

            {/* Official offices */}
            <div className="space-y-6 pt-2">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-brand-dark text-base">United Arab Emirates</h3>
                  <p className="text-xs text-brand-charcoal/85 leading-relaxed">
                    Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates
                  </p>
                  <p className="text-xs text-gray-400">P.O. Box: 28686</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-brand-dark text-base">India Delivery Center</h3>
                  <p className="text-xs text-brand-charcoal/85 leading-relaxed">
                    Chennai, Tamil Nadu - 603202, India
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-brand-dark text-base">NetFuxion Pro Office</h3>
                  <p className="text-xs text-brand-charcoal/85 leading-relaxed">
                    Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-brand-dark text-base">Phone & Voice</h3>
                  <p className="text-xs text-brand-charcoal/85">
                    <a href={`tel:${COMPANY_INFO.contacts.phone}`} className="hover:text-brand-green transition-colors">
                      {COMPANY_INFO.contacts.phone}
                    </a>
                  </p>
                  <p className="text-[11px] text-gray-400">Sunday - Thursday, 9:00 AM - 6:00 PM GST</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-brand-dark text-base">Electronic Mail</h3>
                  <p className="text-xs text-brand-charcoal/85">
                    <a href={`mailto:${COMPANY_INFO.contacts.emails.general}`} className="hover:text-brand-green transition-colors">
                      {COMPANY_INFO.contacts.emails.general}
                    </a>
                  </p>
                  <p className="text-xs text-brand-charcoal/85">
                    <a href={`mailto:${COMPANY_INFO.contacts.emails.contact}`} className="hover:text-brand-green transition-colors">
                      {COMPANY_INFO.contacts.emails.contact}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Send an Enquiry</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              Fill out the details below and a senior solutions engineer will contact you shortly.
            </p>

            {status.type === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">{status.message}</div>
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">{status.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam honeypot (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Leave blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your organization's goals, current IT environment, or specific project requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-button text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                We respect your privacy. Your information is held securely and never shared with unauthorized parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
