"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-dark/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (4 cols) */}
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

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Virtual Petals is an international IT solutions company providing modern Microsoft cloud solutions, infrastructure engineering, cybersecurity, and DevOps automation.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">UAE:</strong> Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
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
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
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
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-green/20 hover:border-brand-green/40 transition-all"
                aria-label="Virtual Petals LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="http://mito.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-teal/40 transition-all flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-brand-teal" />
                <span>Launch Mito</span>
              </a>
            </div>
          </div>

          {/* What We Do (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-teal">What We Do</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/microsoft-365" className="text-gray-300 hover:text-white transition-colors">
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link href="/services/azure-cloud" className="text-gray-300 hover:text-white transition-colors">
                  Azure Cloud
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
                <Link href="/services/endpoint-management" className="text-gray-300 hover:text-white transition-colors">
                  Endpoint Management
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting" className="text-gray-300 hover:text-white transition-colors">
                  Managed IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Are (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-green">Who We Are</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Virtual Petals
                </Link>
              </li>
              <li>
                <Link href="/#who-we-are" className="text-gray-300 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Client Success Stories
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

          {/* Products & SaaS (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-teal">Products</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products/mito" className="text-gray-300 hover:text-white transition-colors">
                  Mito Platform
                </Link>
              </li>
              <li>
                <a
                  href="http://mito.virtualpetals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-teal transition-colors flex items-center gap-1"
                >
                  <span>Explore Mito</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/virtualpetals/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <span>Book a Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  M365 Security Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights & Actions (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-brand-green">Insights & Legal</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#insights" className="text-gray-300 hover:text-white transition-colors">
                  Technology Blogs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs inline-flex items-center gap-1.5"
              >
                <span>Consult an Expert</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
              Terms & Conditions
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
