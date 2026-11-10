import React from "react";
import { Cloud, Layers, ShieldCheck, Terminal, Server, Cpu, Box, GitBranch } from "lucide-react";

const MICROSOFT_TECH = [
  { name: "Microsoft Azure", category: "Cloud Infrastructure & Compute" },
  { name: "Microsoft 365", category: "Modern Productivity Suite" },
  { name: "Microsoft Entra ID", category: "Cloud Identity & Access (IAM)" },
  { name: "Microsoft Intune", category: "Unified Endpoint Management (UEM)" },
  { name: "Microsoft Defender", category: "Extended Detection & Response (XDR)" },
  { name: "Exchange Online", category: "Enterprise Cloud Email & Archiving" },
  { name: "SharePoint Online", category: "Enterprise Intranet & Content Services" },
];

const DEVOPS_TECH = [
  { name: "Azure DevOps", category: "CI/CD & Agile Lifecycle" },
  { name: "GitHub Actions", category: "Automated Workflows & CI/CD" },
  { name: "Docker", category: "Application Containerization" },
  { name: "Kubernetes (AKS)", category: "Enterprise Container Orchestration" },
  { name: "Terraform", category: "Infrastructure as Code (IaC)" },
  { name: "CI/CD Automation", category: "Automated Build, Test & Deployment" },
];

export default function TechEcosystem() {
  return (
    <section className="py-20 md:py-28 bg-brand-light/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-teal/20 text-brand-dark text-xs font-semibold tracking-wide uppercase">
            Engineering Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Our Technology Ecosystem.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
            We architect solutions leveraging verified enterprise technologies, industry-standard frameworks, and modern automation platforms.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Microsoft Stack */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-card">
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Microsoft Cloud Technologies</h3>
                <p className="text-xs text-gray-500">Core enterprise foundation & security</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {MICROSOFT_TECH.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-brand-green/30 hover:bg-brand-light/50 transition-all flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{tech.name}</h4>
                    <p className="text-[11px] text-gray-500">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Stack */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-card">
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">DevOps & Cloud Automation</h3>
                <p className="text-xs text-gray-500">Modern CI/CD, containers & code-defined infrastructure</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DEVOPS_TECH.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-brand-teal/30 hover:bg-teal-50/50 transition-all flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{tech.name}</h4>
                    <p className="text-[11px] text-gray-500">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
