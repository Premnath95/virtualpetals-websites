"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, ShieldCheck, CheckCircle2, ArrowRight, Video, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function MitoDemoBooking() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <section id="demo" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-dark via-brand-dark to-[#0B2520] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-brand-teal uppercase tracking-wide">
                <Video className="w-3.5 h-3.5" />
                <span>Live 30-Minute Interactive Demonstration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                See How Mito Can Strengthen Your Microsoft 365 Security.
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Book a personalised demonstration and discover how Mito helps identify security gaps, detect risky configurations, and improve your Microsoft 365 security posture.
              </p>

              {/* What to expect bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Interactive dashboard walkthrough</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Real baseline review (CIS / CISA)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Zero disruption, 100% read-only setup</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Q&A with cloud security architect</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button text-white font-semibold px-7 py-4 rounded-xl shadow-lg flex items-center gap-2.5 text-base hover:scale-[1.02] transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Your Mito Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowIframe(!showIframe)}
                  className="bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-4 rounded-xl border border-white/20 transition-colors text-sm"
                >
                  {showIframe ? "Hide Embedded Calendar" : "View Interactive Calendar"}
                </button>
              </div>

              <div className="text-xs text-gray-400 flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-brand-teal" />
                <span>30 minutes · Microsoft Teams / Web Meeting · No commitment required</span>
              </div>
            </div>

            {/* Right Card / Preview */}
            <div className="lg:col-span-5">
              {!showIframe ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center">
                        <Image
                          src="/brand/mito-mark.png"
                          alt="Mito Mark"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">Virtual Petals</h3>
                        <p className="text-xs text-brand-teal">Mito 30-Minute Security Demo</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-brand-green/20 text-brand-green font-semibold border border-brand-green/30">
                      Available
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>30-minute tailored demonstration focused on your organisation’s security priorities.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>Discover how automated daily checks replace manual audit checklists.</span>
                    </div>
                  </div>

                  <a
                    href={COMPANY_INFO.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-brand-dark bg-white hover:bg-gray-100 flex items-center justify-center gap-2 shadow-md transition-all block"
                  >
                    <span>Choose Date & Time</span>
                    <ArrowRight className="w-4 h-4 text-brand-dark" />
                  </a>
                </div>
              ) : (
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[560px] w-full">
                  <iframe
                    src="https://calendly.com/virtualpetals/30min?embed_domain=virtualpetals.com&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a Mito Demo"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
