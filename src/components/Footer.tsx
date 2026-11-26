"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Shield, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-dark/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-xl p-3 inline-block shadow-sm">
              <Image
                src="/brand/virtualpetals-logo.png"
                alt="Virtual Petals Logo"
                width={180}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-normal">
              Virtual Petals delivers managed cloud infrastructure, Microsoft 365 governance, Zero Trust cybersecurity and DevOps automation, ensuring peace of mind for enterprises worldwide.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">UAE HQ:</strong> Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">NetFuxion Pro:</strong> Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
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
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Virtual Petals LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://mito-app.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-teal/40 transition-all flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-brand-teal" />
                <span>Launch Mito</span>
              </a>
            </div>
          </div>

          {/* Services Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-teal">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/microsoft-365" className="text-gray-300 hover:text-white transition-colors">
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-gray-300 hover:text-white transition-colors">
                  DevOps Automation
                </Link>
              </li>
              <li>
                <Link href="/services/it-infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-teal hover:underline transition-colors block pt-1">
                  View Full Catalog &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-emerald-400">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#methodology" className="text-gray-300 hover:text-white transition-colors">
                  Working Process
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                  NetFuxion Pro Entity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-teal">Industries</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/industries#financial-services" className="text-gray-300 hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare-life-sciences" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#logistics-maritime" className="text-gray-300 hover:text-white transition-colors">
                  Logistics &amp; Ports
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitality-leisure" className="text-gray-300 hover:text-white transition-colors">
                  Hospitality &amp; Leisure
                </Link>
              </li>
              <li>
                <Link href="/industries#retail-ecommerce" className="text-gray-300 hover:text-white transition-colors">
                  Retail &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-brand-teal hover:underline transition-colors block pt-1">
                  All Industries &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Product & Action Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-amber-300">Featured SaaS</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products/mito" className="text-gray-300 hover:text-white transition-colors">
                  Mito Platform
                </Link>
              </li>
              <li>
                <a
                  href="https://mito-app.virtualpetals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-teal transition-colors flex items-center gap-1"
                >
                  <span>Explore Mito App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/virtualpetals/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Request a Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs inline-flex items-center gap-1.5 border border-brand-gold/30"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Virtual Petals Private Limited. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
