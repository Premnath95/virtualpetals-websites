"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Cloud,
  Terminal,
  Headphones,
  Lock,
  Layers,
} from "lucide-react";
import { SERVICES } from "@/data/servicesData";

const SERVICE_ICONS: Record<string, any> = {
  "cloud-solutions": Cloud,
  "microsoft-365": Layers,
  cybersecurity: Lock,
  devops: Terminal,
  "it-infrastructure": Headphones,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? "border-b border-gray-200/90 shadow-sm py-3"
          : "border-b border-gray-100 py-4"
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Virtual Petals Home"
          >
            <div className="relative h-9 w-40 sm:h-10 sm:w-48 flex items-center">
              <Image
                src="/brand/virtualpetals-logo.png"
                alt="Virtual Petals"
                width={192}
                height={48}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links in Center (Clean, spacious typography, no pill outlines) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3" aria-label="Primary Navigation">
            {/* What we do (Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                  pathname.startsWith("/services")
                    ? "text-[#0D241E] font-bold"
                    : "text-gray-700 hover:text-[#0D241E]"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>What we do</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-dark" : ""
                  }`}
                />
              </button>

              {/* Services Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-gray-100 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Core Practices
                    </span>
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
                    >
                      <span>All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-1">
                    {SERVICES.map((srv) => {
                      const Icon = SERVICE_ICONS[srv.id] || Cloud;
                      return (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          onClick={handleLinkClick}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-light border border-brand-teal/20 flex items-center justify-center text-brand-dark shrink-0 mt-0.5 group-hover:border-brand-teal/40">
                            <Icon className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-gray-900 group-hover:text-brand-dark block leading-snug">
                              {srv.title}
                            </span>
                            <span className="text-xs text-gray-500 line-clamp-1">
                              {srv.shortDesc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Who we are */}
            <Link
              href="/about"
              onClick={handleLinkClick}
              className={`px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-[#0D241E] font-bold"
                  : "text-gray-700 hover:text-[#0D241E]"
              }`}
            >
              Who we are
            </Link>

            {/* Mito Platform */}
            <Link
              href="/products/mito"
              onClick={handleLinkClick}
              className={`px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                pathname.startsWith("/products")
                  ? "text-[#0D241E] font-bold"
                  : "text-gray-700 hover:text-[#0D241E]"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Mito Platform</span>
            </Link>

            {/* Industries */}
            <Link
              href="/industries"
              onClick={handleLinkClick}
              className={`px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                pathname === "/industries"
                  ? "text-[#0D241E] font-bold"
                  : "text-gray-700 hover:text-[#0D241E]"
              }`}
            >
              Industries
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={`px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-[#0D241E] font-bold"
                  : "text-gray-700 hover:text-[#0D241E]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Prominent CTA Button (Procain Style) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://mito-app.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-2 rounded-xl text-gray-600 hover:text-brand-dark hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Launch Mito</span>
              <ArrowUpRight className="w-3 h-3 text-gray-400" />
            </a>

            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_18px_rgba(245,158,11,0.45)] hover:scale-[1.02] transition-all flex items-center gap-1.5"
            >
              <span>Talk to an Expert</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs"
            >
              Talk to Expert
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                pathname === "/" ? "bg-gray-100 text-brand-dark font-bold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={handleLinkClick}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                pathname === "/about" ? "bg-gray-100 text-brand-dark font-bold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Who we are
            </Link>

            <div className="py-2">
              <span className="block px-3 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                What we do
              </span>
              <div className="pl-2 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/products/mito"
              onClick={handleLinkClick}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                pathname.startsWith("/products")
                  ? "bg-gray-100 text-brand-dark font-bold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Shield className="w-4 h-4 text-brand-teal" />
              <span>Mito Platform</span>
            </Link>

            <Link
              href="/industries"
              onClick={handleLinkClick}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                pathname === "/industries" ? "bg-gray-100 text-brand-dark font-bold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                pathname === "/contact" ? "bg-gray-100 text-brand-dark font-bold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://mito-app.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-100 text-brand-dark font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Launch Mito Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
