import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Server,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DevOps & Automation | CI/CD, Kubernetes & Terraform",
  description:
    "Enterprise DevOps automation, CI/CD pipelines, Docker containerization, Kubernetes (AKS), and Terraform Infrastructure as Code by Virtual Petals.",
};

const DEVOPS_CAPABILITIES = [
  {
    title: "CI/CD Pipeline Implementation",
    desc: "Automating build, test, and release workflows using Azure DevOps and GitHub Actions with multi-stage deployment gates and rollback logic.",
  },
  {
    title: "Docker & Container Architecture",
    desc: "Containerizing enterprise applications with optimized multi-stage Dockerfiles, vulnerability scanning, and minimal base images.",
  },
  {
    title: "Kubernetes & Azure Kubernetes Service (AKS)",
    desc: "Enterprise cluster deployment, ingress controllers, horizontal pod autoscaling (HPA), persistent volumes, and GitOps delivery via Helm.",
  },
  {
    title: "Terraform Infrastructure as Code (IaC)",
    desc: "Codifying multi-cloud infrastructure into version-controlled, modular Terraform templates for repeatable, error-free staging and production deployments.",
  },
  {
    title: "DevSecOps & Automated Security Gates",
    desc: "Embedding static code analysis (SAST), software composition analysis (SCA), container image scanning, and secret detection directly into build pipelines.",
  },
  {
    title: "Observability, Telemetry & Logging",
    desc: "Centralizing logs and distributed tracing using Azure Monitor, Prometheus, and Grafana for rapid root-cause diagnosis and SLA tracking.",
  },
];

export default function DevOpsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="bg-brand-light/50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-teal/20 text-brand-dark text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>DevOps &amp; Cloud Native Practice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
            Accelerate Delivery with Continuous DevOps Automation.
          </h1>

          <p className="text-base sm:text-xl text-brand-charcoal/85 leading-relaxed font-normal max-w-3xl mx-auto pt-2">
            We implement automated CI/CD pipelines, container orchestration, and Infrastructure as Code that accelerate release velocity while upholding rigorous security standards.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/virtualpetals/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white font-semibold px-7 py-3.5 rounded-xl shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Schedule DevOps Consultation</span>
            </a>
            <Link
              href="/contact"
              className="bg-white border border-gray-300 hover:border-brand-teal text-brand-dark font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Contact Engineers</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Narrative & Photography */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
                Continuous Delivery Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-snug">
                Eliminate Manual Bottlenecks with Code-Defined Infrastructure.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed font-normal">
                <p>
                  Manual deployments and snowflake servers cause outages, configuration drift, and developer frustration. Virtual Petals codifies entire infrastructure topologies using Terraform and standardizes deployments using Docker and Kubernetes.
                </p>
                <p>
                  Our engineers build secure, multi-stage pipelines in Azure DevOps and GitHub Actions that automatically run unit tests, scan for container vulnerabilities, and provision cloud environments on demand—enabling your engineering teams to deploy confidently multiple times a day.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Azure DevOps &amp; GitHub Actions</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Kubernetes &amp; AKS Microservices</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Declarative Terraform Landing Zones</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Zero-Downtime Blue/Green Releases</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100 group">
                <Image
                  src="/images/services/devops-engineering.jpg"
                  alt="Software engineers and DevOps specialists collaborating in modern tech office"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark block">
                    Automation &amp; CI/CD
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    Terraform, Kubernetes, Docker &amp; GitHub Actions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Capabilities */}
      <section className="py-20 sm:py-28 bg-gray-50/70 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Detailed Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our DevOps Engineering Spectrum.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEVOPS_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-subtle hover:shadow-cardHover hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-5 shadow-2xs">
                    <Terminal className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2.5 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Automated Delivery Standards</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Pipeline Modernisation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Modernise Your CI/CD and Kubernetes Workloads
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Let our senior DevOps consultants review your deployment scripts, container registries, and Terraform state architectures.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://calendly.com/virtualpetals/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button text-white text-sm font-semibold px-7 py-4 rounded-xl shadow-md inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book 30-Min Session</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
