"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header shadow-subtle border-b border-gray-100 py-3"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Virtual Petals Home">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-brand-green bg-brand-light font-semibold"
                      : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book a Demo */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="http://mito.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-dark px-3 py-2 rounded-lg hover:bg-brand-light transition-colors flex items-center gap-1 border border-brand-teal/20"
            >
              <span>Launch Mito</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-teal" />
            </a>

            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Demo</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white text-xs font-semibold px-3 py-2 rounded-md flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Demo</span>
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

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-brand-green bg-brand-light font-semibold"
                      : "text-brand-charcoal hover:text-brand-green hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="http://mito.virtualpetals.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg font-medium text-brand-dark bg-brand-light border border-brand-teal/20 flex items-center justify-center gap-1.5"
            >
              <span>Launch Mito</span>
              <ArrowUpRight className="w-4 h-4 text-brand-teal" />
            </a>

            <a
              href={COMPANY_INFO.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-lg font-semibold text-white gradient-button flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 30-Min Demo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
