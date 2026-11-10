import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-dark/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
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

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">UAE:</strong> Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">India:</strong> Chennai, Tamil Nadu - 603202, India
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
              <Link
                href={COMPANY_INFO.product.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-teal/40 transition-all flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-brand-teal" />
                <span>Mito Security App</span>
              </Link>
            </div>
          </div>

          {/* Quick Links & Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-teal">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                  Partners Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-green">Product – Mito</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/mito" className="text-gray-300 hover:text-white transition-colors">
                  Mito Platform
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.product.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-teal transition-colors flex items-center gap-1"
                >
                  <span>Launch Mito</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <span>Book a Mito Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  M365 Security Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-teal">Partners & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  <span>NETFUXION PRO</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark bg-brand-teal hover:bg-brand-tealDark text-white px-3.5 py-2 rounded-lg transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>{COMPANY_INFO.copyright}</p>
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
