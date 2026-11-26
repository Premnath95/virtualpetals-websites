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
  Layers,
  Terminal,
  Smartphone,
  Headphones,
  Calendar,
  Sparkles,
  Lock,
  Building2,
  Server,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { SERVICES } from "@/data/servicesData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-subtle py-3"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Virtual Petals Home"
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-48 flex items-center">
              <Image
                src="/brand/virtualpetals-logo.png"
                alt="Virtual Petals Logo"
                width={192}
                height={48}
                className="object-contain h-full w-auto transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Enterprise Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {/* Home */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-brand-dark bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-brand-dark bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  pathname.startsWith("/services") || servicesDropdownOpen
                    ? "text-brand-dark bg-brand-light font-bold"
                    : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-dark" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] -translate-x-16 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Enterprise Solutions
                      </span>
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          onClick={handleLinkClick}
                          className="p-3 rounded-xl hover:bg-brand-light/70 transition-all flex items-start gap-3.5 group border border-transparent hover:border-brand-teal/20"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-dark group-hover:bg-brand-dark group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                            {srv.id === "cloud-solutions" && <Cloud className="w-4 h-4" />}
                            {srv.id === "microsoft-365" && <Layers className="w-4 h-4" />}
                            {srv.id === "cybersecurity" && <Shield className="w-4 h-4" />}
                            {srv.id === "devops" && <Terminal className="w-4 h-4" />}
                            {srv.id === "it-infrastructure" && <Headphones className="w-4 h-4" />}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-brand-dark group-hover:text-brand-dark block leading-snug">
                              {srv.title}
                            </span>
                            <span className="text-xs text-brand-charcoal/75 line-clamp-1">
                              {srv.shortDesc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <Link
              href="/industries"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/industries"
                  ? "text-brand-dark bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
              }`}
            >
              Industries
            </Link>

            {/* Mito Product */}
            <Link
              href="/products/mito"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                pathname.startsWith("/products")
                  ? "text-brand-dark bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Mito Platform</span>
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-brand-dark bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-dark hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://mito-app.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-brand-light text-brand-dark hover:bg-brand-light/90 border border-brand-teal/20 transition-all flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              <span>Launch Mito</span>
              <ArrowUpRight className="w-3 h-3 text-gray-400" />
            </a>

            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs hover:shadow flex items-center gap-2 transition-all border border-brand-gold/30"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://mito-app.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-brand-light text-brand-dark border border-brand-teal/20"
            >
              Launch Mito
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-dark hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname === "/" ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname === "/about" ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname.startsWith("/services") ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            Services Catalog
          </Link>

          {/* Mobile Services Sub-list */}
          <div className="pl-4 space-y-1.5 border-l-2 border-brand-teal/30 my-2">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                onClick={handleLinkClick}
                className="block text-xs font-medium text-brand-charcoal hover:text-brand-dark py-1"
              >
                • {s.title}
              </Link>
            ))}
          </div>

          <Link
            href="/industries"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname === "/industries" ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            Industries We Serve
          </Link>

          <Link
            href="/products/mito"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname.startsWith("/products") ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            Mito Platform (SaaS)
          </Link>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
              pathname === "/contact" ? "bg-brand-light text-brand-dark font-bold" : "text-brand-charcoal"
            }`}
          >
            Contact & Advisory
          </Link>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-sm font-semibold px-4 py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
