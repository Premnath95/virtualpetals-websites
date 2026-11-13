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
  Cpu,
  Smartphone,
  Server,
  Compass,
  FileText,
  Users,
  Building2,
  Calendar,
  Sparkles,
  Lock,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-subtle py-3"
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

          {/* Desktop Enterprise Mega Menu Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
            {/* HOME */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/" && !activeMegaMenu
                  ? "text-brand-green bg-brand-light font-bold"
                  : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* WHAT WE DO (Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("what-we-do")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === "what-we-do" ? null : "what-we-do")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                  activeMegaMenu === "what-we-do"
                    ? "text-brand-green bg-brand-light"
                    : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                }`}
                aria-expanded={activeMegaMenu === "what-we-do"}
              >
                <span>What We Do</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "what-we-do" ? "rotate-180 text-brand-green" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown Panel */}
              {activeMegaMenu === "what-we-do" && (
                <div className="absolute top-full -left-20 w-[820px] pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-cardHover border border-gray-100 p-6 grid grid-cols-12 gap-6">
                    {/* Left 2 Columns: Services Grid */}
                    <div className="col-span-8 grid grid-cols-2 gap-3">
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Layers className="w-5 h-5 text-brand-green" />}
                        title="Microsoft 365 Solutions"
                        desc="Exchange Online, Teams, SharePoint & Modern Work"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Cloud className="w-5 h-5 text-brand-teal" />}
                        title="Azure Cloud Solutions"
                        desc="IaaS, PaaS, VMs, Front Door & Cost Governance"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Lock className="w-5 h-5 text-brand-green" />}
                        title="Cybersecurity & Compliance"
                        desc="Defender, Entra ID, MFA & Zero Trust Security"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Server className="w-5 h-5 text-brand-teal" />}
                        title="Cloud Infrastructure"
                        desc="Multi-Region Networks, Storage & Hybrid Connect"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Cpu className="w-5 h-5 text-brand-green" />}
                        title="DevOps & Automation"
                        desc="Azure DevOps, GitHub Actions, Terraform & CI/CD"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Smartphone className="w-5 h-5 text-brand-teal" />}
                        title="Endpoint Management"
                        desc="Microsoft Intune, Windows Autopilot & Mobile MDM"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Compass className="w-5 h-5 text-brand-green" />}
                        title="Managed IT Services"
                        desc="24/7 Monitoring, Administration & Support SLAs"
                      />
                      <MegaMenuItem
                        href="/#services"
                        onClick={handleLinkClick}
                        icon={<Sparkles className="w-5 h-5 text-brand-teal" />}
                        title="IT Consulting"
                        desc="Architecture Strategy & Digital Modernisation"
                      />
                    </div>

                    {/* Right Featured Column */}
                    <div className="col-span-4 bg-brand-light/60 rounded-xl p-5 border border-brand-green/15 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-brand-dark text-[11px] font-bold border border-brand-teal/20 mb-3 uppercase tracking-wide">
                          <Shield className="w-3.5 h-3.5 text-brand-green" />
                          <span>Featured Product</span>
                        </div>
                        <h4 className="font-extrabold text-brand-dark text-base">Mito Security Platform</h4>
                        <p className="text-xs text-brand-charcoal/80 mt-1.5 leading-relaxed">
                          Automated Microsoft 365 security assessment engine running 400+ CIS &amp; CISA baseline checks.
                        </p>
                      </div>

                      <div className="pt-4 space-y-2 border-t border-brand-green/10">
                        <a
                          href="http://mito.virtualpetals.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-dark transition-colors"
                        >
                          <span>Explore Mito SaaS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <br />
                        <Link
                          href="/#services"
                          onClick={handleLinkClick}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-brand-dark transition-colors"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WHO WE ARE (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("who-we-are")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === "who-we-are" ? null : "who-we-are")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                  activeMegaMenu === "who-we-are"
                    ? "text-brand-green bg-brand-light"
                    : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                }`}
                aria-expanded={activeMegaMenu === "who-we-are"}
              >
                <span>Who We Are</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "who-we-are" ? "rotate-180 text-brand-green" : "text-gray-400"
                  }`}
                />
              </button>

              {activeMegaMenu === "who-we-are" && (
                <div className="absolute top-full left-0 w-72 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-cardHover border border-gray-100 p-3 space-y-1">
                    <Link
                      href="/#who-we-are"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          About Virtual Petals
                        </div>
                        <div className="text-[11px] text-gray-500">Overview, Mission &amp; Values</div>
                      </div>
                    </Link>

                    <Link
                      href="/#how-we-help"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Compass className="w-4 h-4 text-brand-teal shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Our Approach
                        </div>
                        <div className="text-[11px] text-gray-500">Business Outcomes &amp; Delivery</div>
                      </div>
                    </Link>

                    <Link
                      href="/#expertise"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Cpu className="w-4 h-4 text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Our Expertise
                        </div>
                        <div className="text-[11px] text-gray-500">Microsoft &amp; DevOps Stack</div>
                      </div>
                    </Link>

                    <Link
                      href="/#testimonials"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Users className="w-4 h-4 text-brand-teal shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Client Success Stories
                        </div>
                        <div className="text-[11px] text-gray-500">15+ Authentic Global Reviews</div>
                      </div>
                    </Link>

                    <Link
                      href="/#partners"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Our Business Entities
                        </div>
                        <div className="text-[11px] text-gray-500">NetFuxion Pro (India)</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("products")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === "products" ? null : "products")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                  activeMegaMenu === "products"
                    ? "text-brand-green bg-brand-light"
                    : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                }`}
                aria-expanded={activeMegaMenu === "products"}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "products" ? "rotate-180 text-brand-green" : "text-gray-400"
                  }`}
                />
              </button>

              {activeMegaMenu === "products" && (
                <div className="absolute top-full left-0 w-80 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-cardHover border border-gray-100 p-4 space-y-2">
                    <div className="p-3 rounded-xl bg-brand-light/50 border border-brand-green/15">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-dark">MITO Security</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-green text-white">
                          SaaS
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Automated Microsoft 365 security &amp; compliance assessment platform.
                      </p>
                    </div>

                    <div className="pt-2 space-y-1">
                      <Link
                        href="/#products"
                        onClick={handleLinkClick}
                        className="px-3 py-2 rounded-lg text-xs font-semibold text-brand-charcoal hover:text-brand-green hover:bg-gray-50 flex items-center justify-between transition-colors"
                      >
                        <span>Mito Product Overview</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                      </Link>

                      <a
                        href="http://mito.virtualpetals.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg text-xs font-semibold text-brand-green hover:bg-brand-light flex items-center justify-between transition-colors"
                      >
                        <span>Explore Mito Official Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-teal" />
                      </a>

                      <a
                        href={COMPANY_INFO.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg text-xs font-semibold text-brand-dark hover:bg-brand-light flex items-center justify-between transition-colors"
                      >
                        <span>Book a Live 30-Min Demo</span>
                        <Calendar className="w-3.5 h-3.5 text-brand-green" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INSIGHTS (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("insights")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === "insights" ? null : "insights")}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                  activeMegaMenu === "insights"
                    ? "text-brand-green bg-brand-light"
                    : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                }`}
                aria-expanded={activeMegaMenu === "insights"}
              >
                <span>Insights</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "insights" ? "rotate-180 text-brand-green" : "text-gray-400"
                  }`}
                />
              </button>

              {activeMegaMenu === "insights" && (
                <div className="absolute top-full left-0 w-72 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-cardHover border border-gray-100 p-3 space-y-1">
                    <Link
                      href="/#insights"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Technology Blogs
                        </div>
                        <div className="text-[11px] text-gray-500">Cloud &amp; Modern Work Trends</div>
                      </div>
                    </Link>

                    <Link
                      href="/#insights"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Layers className="w-4 h-4 text-brand-teal shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Microsoft 365 Insights
                        </div>
                        <div className="text-[11px] text-gray-500">Security &amp; Tenant Governance</div>
                      </div>
                    </Link>

                    <Link
                      href="/#insights"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Cpu className="w-4 h-4 text-brand-green shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Cloud &amp; DevOps Articles
                        </div>
                        <div className="text-[11px] text-gray-500">IaC, Terraform &amp; CI/CD Pipelines</div>
                      </div>
                    </Link>

                    <Link
                      href="/#insights"
                      onClick={handleLinkClick}
                      className="p-2.5 rounded-xl hover:bg-brand-light/60 flex items-center gap-3 transition-colors group"
                    >
                      <Lock className="w-4 h-4 text-brand-teal shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                          Cybersecurity Insights
                        </div>
                        <div className="text-[11px] text-gray-500">Zero Trust &amp; CIS Baselines</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-charcoal hover:text-brand-green hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="http://mito.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-dark px-3 py-2 rounded-lg hover:bg-brand-light transition-colors flex items-center gap-1.5 border border-brand-teal/20"
            >
              <span>Launch Mito</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-teal" />
            </a>

            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-xs xl:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Consult an Expert</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:text-brand-green hover:bg-gray-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="px-4 py-2.5 rounded-lg text-base font-bold text-brand-dark hover:bg-brand-light"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
              What We Do
            </div>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-brand-green" />
              <span>Microsoft 365 Solutions</span>
            </Link>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center gap-2"
            >
              <Cloud className="w-4 h-4 text-brand-teal" />
              <span>Azure Cloud Solutions</span>
            </Link>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-brand-green" />
              <span>Cybersecurity &amp; Compliance</span>
            </Link>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-brand-teal" />
              <span>DevOps &amp; Automation</span>
            </Link>
            <Link
              href="/#services"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-brand-green" />
              <span>Endpoint Management</span>
            </Link>

            <div className="pt-3 pb-1 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
              Who We Are
            </div>
            <Link
              href="/#who-we-are"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              About Virtual Petals
            </Link>
            <Link
              href="/#how-we-help"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              Our Approach &amp; Outcomes
            </Link>
            <Link
              href="/#testimonials"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              Client Success Stories
            </Link>
            <Link
              href="/#partners"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              Our Business Entities (NetFuxion Pro)
            </Link>

            <div className="pt-3 pb-1 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
              Products &amp; Insights
            </div>
            <Link
              href="/#products"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light flex items-center justify-between"
            >
              <span>Mito Security Platform</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-green text-white">SaaS</span>
            </Link>
            <Link
              href="/#insights"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              Technology Insights &amp; Articles
            </Link>
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-lg text-sm text-brand-charcoal hover:bg-brand-light"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="http://mito.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full text-center py-2.5 px-4 rounded-lg font-semibold text-brand-dark bg-brand-light border border-brand-teal/20 flex items-center justify-center gap-1.5"
            >
              <span>Launch Mito</span>
              <ArrowUpRight className="w-4 h-4 text-brand-teal" />
            </a>

            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full text-center py-3 px-4 rounded-lg font-bold text-white gradient-button flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Consult an Expert</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenuItem({
  href,
  icon,
  title,
  desc,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="p-3 rounded-xl hover:bg-brand-light/60 transition-colors flex items-start gap-3 group border border-transparent hover:border-brand-green/15"
    >
      <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-dark group-hover:text-brand-green transition-colors flex items-center gap-1">
          <span>{title}</span>
          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-green" />
        </h4>
        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-1">{desc}</p>
      </div>
    </Link>
  );
}
