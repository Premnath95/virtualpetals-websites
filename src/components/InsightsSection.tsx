"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag, Sparkles } from "lucide-react";

interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  tag: string;
  featured?: boolean;
}

const INSIGHTS: InsightArticle[] = [
  {
    id: "m365-zero-trust",
    category: "Microsoft 365",
    tag: "Security Architecture",
    title: "Implementing Phishing-Resistant MFA and Conditional Access Across Microsoft 365",
    excerpt:
      "A pragmatic engineering blueprint for modern identity governance—moving beyond legacy SMS verification toward FIDO2 keys and Microsoft Authenticator number matching.",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "azure-cost-optimisation",
    category: "Azure Cloud",
    tag: "Cloud Governance",
    title: "Enterprise Azure Cost Governance: Rightsizing Compute and Automating Storage Tiers",
    excerpt:
      "How enterprise cloud teams identify zombie resources, leverage Azure Savings Plans, and apply tag-driven FinOps policies to achieve 25-40% infrastructure savings.",
    readTime: "5 min read",
  },
  {
    id: "m365-drift-detection",
    category: "Cybersecurity",
    tag: "Compliance & Risk",
    title: "Combating Configuration Drift: Why Daily Microsoft 365 Tenant Audits Matter",
    excerpt:
      "Undetected changes in mail forwarding rules and admin role grants present serious risks. Discover how automated assessments maintain security baselines.",
    readTime: "4 min read",
  },
  {
    id: "devops-iac-terraform",
    category: "DevOps",
    tag: "Infrastructure as Code",
    title: "Terraform vs. Bicep: Standardising Multi-Region Infrastructure as Code in Azure",
    excerpt:
      "Comparing declarative syntax, state file management, and GitHub Actions integration when provisioning enterprise landing zones at scale.",
    readTime: "7 min read",
  },
  {
    id: "intune-autopilot-playbook",
    category: "Endpoint Management",
    tag: "Modern Workplace",
    title: "Zero-Touch Provisioning: Modernising Endpoint Deployment with Windows Autopilot",
    excerpt:
      "Eliminate golden OS imaging. Deliver shrink-wrapped OEM laptops directly to global remote employees with corporate applications and compliance pre-configured.",
    readTime: "5 min read",
  },
  {
    id: "it-strategy-cloud-modernisation",
    category: "IT Strategy",
    tag: "Enterprise Transformation",
    title: "Legacy Datacenter to Cloud: Structuring a Phased Migration Without Business Disruption",
    excerpt:
      "Step-by-step methodology for application dependency mapping, database synchronization, and cutover testing during large-scale enterprise transitions.",
    readTime: "8 min read",
  },
];

const CATEGORIES = [
  "All Insights",
  "Microsoft 365",
  "Azure Cloud",
  "Cybersecurity",
  "DevOps",
  "Endpoint Management",
  "IT Strategy",
];

export default function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredInsights =
    activeCategory === "All Insights"
      ? INSIGHTS
      : INSIGHTS.filter((item) => item.category === activeCategory);

  const featuredArticle = INSIGHTS.find((item) => item.featured) || INSIGHTS[0];

  return (
    <section id="insights" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Knowledge & Perspectives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]">
            Insights That Drive Better Technology Decisions.
          </h2>

          <p className="text-lg sm:text-xl text-brand-charcoal/85 leading-relaxed pt-1">
            Analysis, guides and perspectives on Microsoft cloud, cybersecurity and modern IT operations from our practicing enterprise engineers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-12 flex items-center flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-dark text-white shadow-xs"
                    : "bg-gray-100 text-brand-charcoal hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Editorial Article: Kyndryl-Style Hero Banner */}
        {activeCategory === "All Insights" && (
          <div className="mt-10 bg-brand-light/60 rounded-3xl border border-brand-green/20 p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-brand-green text-white text-xs font-bold uppercase tracking-wider">
                    Featured Insight
                  </span>
                  <span className="text-xs text-brand-charcoal/70 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/insights/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-dark group transition-colors"
                  >
                    <span>Read Full Technical Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Key Takeaways
                </div>
                <ul className="space-y-2 text-xs text-brand-charcoal/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    <span>Enforce number matching to prevent MFA fatigue exploits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    <span>Eliminate legacy protocols across all Exchange mailboxes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    <span>Incorporate device compliance signals into Conditional Access.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-2xs hover:shadow-card hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-bold uppercase tracking-wider text-brand-teal">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                  {article.tag}
                </span>

                <Link
                  href={`/insights/${article.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:text-brand-teal transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
