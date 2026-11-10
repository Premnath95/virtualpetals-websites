import React from "react";
import {
  Award,
  Users,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const REASONS = [
  {
    icon: <Award className="w-6 h-6 text-brand-green" />,
    title: "1. Technical Expertise",
    desc: "Deep domain knowledge across Microsoft 365, Microsoft Azure, Zero Trust security models, and automated DevOps architectures.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand-teal" />,
    title: "2. Customer-Focused Approach",
    desc: "We design technology around your operational workflows and strategic business objectives, ensuring zero disruption and high adoption.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
    title: "3. Secure Technology Solutions",
    desc: "Security is built into every layer—from identity governance and Conditional Access to continuous baseline posture monitoring.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-teal" />,
    title: "4. Scalable Cloud Infrastructure",
    desc: "Architectures engineered for resilience, flexible cloud scaling, regional high-availability, and optimized cloud spend.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-brand-green" />,
    title: "5. Reliable IT Support",
    desc: "Proactive management, continuous monitoring, and responsive technical assistance that resolves issues before they impact business.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-brand-teal" />,
    title: "6. End-to-End IT Services",
    desc: "A complete technology lifecycle partner from initial architectural assessment and migration to ongoing 24/7 managed operations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle green and teal ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-brand-light via-teal-50/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-xs font-semibold tracking-wide uppercase">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Why Businesses Choose Virtual Petals.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            We deliver enterprise-grade engineering discipline with the agility, transparency, and personal commitment of a dedicated technology partner.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-gray-200/90 shadow-subtle hover:shadow-card hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-light group-hover:bg-teal-50 flex items-center justify-center transition-colors mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-brand-charcoal/80 mt-3 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-medium text-brand-teal">
                <CheckCircle className="w-4 h-4" />
                <span>Enterprise Proven Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
