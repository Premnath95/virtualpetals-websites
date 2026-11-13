import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtual Petals",
  description:
    "Privacy Policy for Virtual Petals corporate website and IT solutions, outlining data collection, usage, and protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="bg-brand-light/50 py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark font-semibold">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Privacy Policy</h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: January 1, 2026 | Last Updated: October 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-brand-charcoal text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">1. Introduction</h2>
            <p>
              Virtual Petals Private Limited ("Virtual Petals", "we", "our", or "us") respects your privacy and is committed to protecting the personal and organisational data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.virtualpetals.com), use our services, or interact with our SaaS applications, including Mito.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>
                <strong>Direct Enquiries:</strong> When you submit a contact form or request a consultation, we collect your full name, business email address, company name, phone number, and message contents.
              </li>
              <li>
                <strong>Product Assessments (Mito):</strong> When authorized by a tenant Global Administrator, Mito connects strictly with read-only permissions to query security configurations, baselines, and logs in your Microsoft 365 environment. We do not store, access, or modify confidential business files or email message content.
              </li>
              <li>
                <strong>Automated Site Telemetry:</strong> Basic web logs such as IP addresses, browser types, operating systems, and page navigation metrics collected to optimize performance and prevent fraudulent activity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">3. How We Use Your Information</h2>
            <p>Virtual Petals uses collected information solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Respond directly to business inquiries, service requests, and demo bookings.</li>
              <li>Deliver requested cloud consulting, IT management, and cybersecurity services.</li>
              <li>Perform automated read-only security posture evaluations via the Mito application.</li>
              <li>Maintain website integrity, enhance security controls, and prevent abuse.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">4. Data Residency & Protection</h2>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest). Cloud workloads and customer assessment data for our Mito application are hosted within Microsoft Azure UAE North, ensuring strict regional data residency and compliance with local regulatory frameworks.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">5. Third-Party Disclosures</h2>
            <p>
              Virtual Petals does not sell, rent, or trade your personal or business data to third parties. We only share information with vetted infrastructure partners (such as Microsoft Azure for cloud hosting and Calendly for appointment scheduling) as necessary to provide requested services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">6. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data protection practices, please contact us at:
            </p>
            <div className="bg-brand-light p-4 rounded-xl border border-brand-green/20 mt-3 text-xs space-y-1">
              <p><strong>Virtual Petals Private Limited</strong></p>
              <p>Address: Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)</p>
              <p>India Business Entity (NetFuxion Pro): Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014</p>
              <p>Email: <a href="mailto:contactus@virtualpetals.com" className="text-brand-green font-semibold">contactus@virtualpetals.com</a></p>
              <p>Phone: +971 2 409 3026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
