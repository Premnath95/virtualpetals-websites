"use client";

import React from "react";
import { Calendar, Mail, ArrowRight, MapPin, Clock, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function ConsultationCTA() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <div className="glass-card-navy rounded-3xl p-8 sm:p-14 border border-violet-500/40 glow-violet relative overflow-hidden shadow-2xl">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/25 via-violet-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-500/40 text-xs font-semibold text-violet-300 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIRECT ARCHITECT ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Elevate Your Cloud Infrastructure?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior cloud architects. We audit your environment, identify security vulnerabilities, and propose a zero-downtime execution roadmap tailored for your business.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-primary px-8 py-4 rounded-xl font-extrabold text-sm shadow-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book a 30-Min Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${COMPANY_INFO.contacts.emails.contact}?subject=Enterprise%20Cloud%20Consultation`}
              className="bg-slate-900/90 text-slate-200 hover:bg-slate-800 px-6 py-4 rounded-xl font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>Email Solution Architects</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Level 36, Etihad Towers 3, Abu Dhabi, UAE</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Chennai Technology Delivery Center, India</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Response Time &lt; 2 Hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
