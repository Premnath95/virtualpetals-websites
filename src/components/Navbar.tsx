"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Calendar,
  Cloud,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const SERVICES_MENU = [
  { name: "Microsoft 365 Solutions", href: "/#services", desc: "M365 Tenant Migration & Governance" },
  { name: "Azure Cloud Services", href: "/#services", desc: "IaaS, PaaS, Front Door & CDN" },
  { name: "Azure DevOps & CI/CD", href: "/#services", desc: "Continuous Integration & Deployment" },
  { name: "Microsoft Intune & Endpoint", href: "/#services", desc: "Zero Trust & Fleet Management" },
  { name: "Cloud Migration", href: "/#services", desc: "Google & On-Premises to Azure" },
  { name: "Cybersecurity & Compliance", href: "/#services", desc: "PKI, Identity & Defender" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`glass-panel rounded-2xl px-5 py-3.5 flex items-center justify-between border-slate-700/60 shadow-xl transition-all duration-300 ${
            isScrolled
              ? "bg-[#0B0F1D]/90 dark:bg-[#0B0F1D]/90 light:bg-white/90 shadow-2xl backdrop-blur-xl border-slate-700/80"
              : "bg-[#0B0F1D]/75 dark:bg-[#0B0F1D]/75 light:bg-white/80 backdrop-blur-lg"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Virtual Petals Home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center font-extrabold text-white text-sm shadow-md group-hover:scale-105 transition-transform duration-200">
              VP
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-base text-white dark:text-white light:text-slate-900 block leading-tight">
                VIRTUAL PETALS
              </span>
              <span className="text-[10px] text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold tracking-widest uppercase block">
                IT SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-colors flex items-center gap-1 py-1"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-4 w-72 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="glass-panel rounded-2xl p-3 border-slate-700/80 shadow-2xl bg-[#0B0F1D]/95 dark:bg-[#0B0F1D]/95 light:bg-white/95 space-y-1">
                    {SERVICES_MENU.map((srv) => (
                      <Link
                        key={srv.name}
                        href={srv.href}
                        onClick={() => setServicesOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-slate-800/80 dark:hover:bg-slate-800/80 light:hover:bg-slate-100 flex flex-col transition-colors group"
                      >
                        <span className="font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                          {srv.name}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                          {srv.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Our Products */}
            <Link
              href="/#products"
              className="hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <span>Our Products</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold">
                MITO
              </span>
            </Link>

            {/* Client Stories */}
            <Link
              href="/#testimonials"
              className="hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-colors"
            >
              Client Stories
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className="hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            {/* Business Entities */}
            <Link
              href="/#business-entities"
              className="hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-colors"
            >
              Business Entities
            </Link>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark and Light Mode"
              className="p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-blue-600 transition-all"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>

            {/* Primary Consultation CTA */}
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel rounded-2xl p-5 border-slate-700/80 bg-[#0B0F1D]/98 dark:bg-[#0B0F1D]/98 light:bg-white/98 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-blue-400"
              >
                Services &amp; Practice Areas
              </Link>
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 flex items-center justify-between hover:text-blue-400"
              >
                <span>Our Products</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-bold border border-violet-500/30">
                  MITO
                </span>
              </Link>
              <Link
                href="/#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-blue-400"
              >
                Client Success Stories
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-blue-400"
              >
                About Virtual Petals
              </Link>
              <Link
                href="/#business-entities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-blue-400"
              >
                Business Entities (NetFuxion Pro)
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-xs shadow-md"
              >
                Book 30-Min Strategy Call
              </a>
              <a
                href="http://mito.virtualpetals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-xs"
              >
                Explore Mito Platform
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
