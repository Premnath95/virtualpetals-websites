import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Terms & Conditions | Virtual Petals",
  description:
    "Terms and Conditions governing the use of Virtual Petals website, technology consulting services, and software applications.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="bg-brand-light/50 py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-dark font-semibold">Terms & Conditions</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Terms & Conditions</h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: January 1, 2026 | Last Updated: October 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-brand-charcoal text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Virtual Petals corporate website (www.virtualpetals.com), engaging our professional IT consulting services, or registering for our software applications (including Mito), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from accessing our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, this website, its source code, design systems, text, illustrations, graphics, and official trademarks—including "Virtual Petals" and "Mito"—are the proprietary property of Virtual Petals Private Limited and are protected by applicable intellectual property and copyright laws. Strategic partner marks, including "NETFUXION PRO", remain the exclusive property of their respective owners.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">3. Professional Consulting & Service Delivery</h2>
            <p>
              All IT consulting engagements, Microsoft 365 implementations, Azure cloud architectures, and cybersecurity assessments are governed by individual Statements of Work (SOW) or Master Services Agreements (MSA) executed between Virtual Petals and the client organisation. Service Level Agreements (SLAs) apply exclusively as defined in such signed agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">4. Software Application Usage (Mito)</h2>
            <p>
              Access to our proprietary security assessment platform, Mito (mito-app.virtualpetals.com), requires explicit tenant authorization by an authorized Microsoft 365 Global Administrator. Mito is provided strictly as a read-only assessment and configuration monitoring tool. Users agree not to attempt to reverse engineer, decompile, or compromise the integrity of the application platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Virtual Petals shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of the use or inability to use our website, recommendations, or automated assessments. While we strive to provide accurate security baselines, organisations remain ultimately responsible for implementing their own administrative governance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates and India respectively, corresponding to the jurisdiction of the corporate entity engaged for delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">7. Contact Information</h2>
            <p>
              For formal legal notices or inquiries concerning these Terms & Conditions, please contact:
            </p>
            <div className="bg-brand-light p-4 rounded-xl border border-brand-green/20 mt-3 text-xs space-y-1">
              <p><strong>Virtual Petals Private Limited</strong></p>
              <p>Corporate Office: Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)</p>
              <p>Email: <a href="mailto:info@virtualpetals.com" className="text-brand-green font-semibold">info@virtualpetals.com</a></p>
              <p>Phone: +971 2 409 3026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
