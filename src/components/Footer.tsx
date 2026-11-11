"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#02050E] dark:bg-[#02050E] light:bg-slate-900 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Virtual Petals Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center font-extrabold text-white text-base shadow-md">
                VP
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-lg text-white block leading-tight">
                  VIRTUAL PETALS
                </span>
                <span className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase block">
                  IT SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Virtual Petals delivers modern Microsoft cloud architectures, zero-downtime infrastructure migrations, Zero Trust security baselines, and enterprise managed IT services worldwide.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">UAE:</strong> Level 36, Etihad Towers 3, Abu Dhabi, UAE (P.O. Box: 28686)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">India:</strong> Chennai Technology Delivery Center, Tamil Nadu - 603202
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contacts.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contacts.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.emails.general}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contacts.emails.general}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={COMPANY_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 transition-all"
                aria-label="Virtual Petals LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="http://mito.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Launch Mito</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-cyan-400">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Microsoft 365 Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Azure Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Azure DevOps &amp; CI/CD
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Microsoft Intune (MDM)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-white transition-colors">
                  Cybersecurity &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Social Proof */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-violet-400">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-400 hover:text-white transition-colors">
                  Client Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#business-entities" className="text-slate-400 hover:text-white transition-colors">
                  Business Entities (NetFuxion)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/virtualpetals/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Product - Mito */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-blue-400">Software Product</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#products" className="text-slate-400 hover:text-white transition-colors">
                  Mito Platform
                </Link>
              </li>
              <li>
                <a
                  href="http://mito.virtualpetals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Mito</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/virtualpetals/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-violet-400 transition-colors"
                >
                  Book Live Demo
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
