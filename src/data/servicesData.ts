export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  capabilities: string[];
  features: string[];
  benefits: string[];
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Cloud Engineering & Hybrid Infrastructure",
    shortDesc:
      "Enterprise Microsoft Azure and AWS cloud architectures, seamless migration, high-availability infrastructure management, and FinOps cost governance.",
    longDesc:
      "Virtual Petals empowers organisations to build, migrate, and operate mission-critical workloads across Microsoft Azure and AWS. Our certified cloud consultants design resilient hybrid environments, configure virtual data centres, and optimize cloud expenditure while upholding strict SLAs and security baselines.",
    iconName: "Cloud",
    capabilities: [
      "Microsoft Azure Architecture & Management",
      "Cloud Infrastructure Management & Monitoring",
      "Cloud Migration (Lift-and-Shift & Modernisation)",
      "Azure DevOps Automation & Release Gates",
      "AWS Cloud Services (EC2, VPC, S3, RDS)",
      "FinOps & Cloud Cost Optimisation",
    ],
    features: [
      "Enterprise Azure compute, VM scale sets & storage",
      "AWS multi-account architecture & landing zones",
      "Hybrid networking (ExpressRoute, DirectConnect, VPN)",
      "Automated disaster recovery & business continuity",
      "Zero-downtime database and application cutovers",
      "Real-time resource rightsizing & billing analytics",
    ],
    benefits: [
      "Resilient high-availability with regional failover",
      "Predictable, transparent cloud expenditure",
      "Accelerated time-to-market for digital products",
      "Adherence to Well-Architected Framework guidelines",
    ],
    technologies: [
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
      "Azure Virtual WAN",
      "AWS DirectConnect",
      "Azure Monitor",
      "CloudWatch",
    ],
  },
  {
    id: "microsoft-365",
    slug: "microsoft-365",
    title: "Microsoft 365 Solutions",
    category: "Modern Workplace & Productivity",
    shortDesc:
      "Comprehensive Microsoft 365 administration, Exchange Online migration, Microsoft Intune endpoint governance, Entra ID identity, and tenant-to-tenant cutovers.",
    longDesc:
      "We architect, implement, and govern enterprise Microsoft 365 collaboration environments. From multi-thousand mailbox migrations to automated Conditional Access policies, Microsoft Teams voice deployments, and SharePoint document management, we deliver seamless everyday teamwork with zero disruption.",
    iconName: "LayoutGrid",
    capabilities: [
      "Microsoft 365 Administration & Tenant Governance",
      "Exchange Online Migration & Archiving",
      "Microsoft Intune Unified Endpoint Management",
      "Microsoft Entra ID (Azure AD) Identity Architecture",
      "Microsoft 365 Security & Threat Protection",
      "Tenant-to-Tenant (T2T) Mergers & Migrations",
    ],
    features: [
      "Exchange Online cross-tenant & hybrid migrations",
      "Microsoft Teams enterprise telephony & collaboration",
      "SharePoint Online intranet & permissions architecture",
      "Zero-touch Windows Autopilot deployment via Intune",
      "Privileged Identity Management (PIM) & Access Reviews",
      "Microsoft Purview data loss prevention (DLP)",
    ],
    benefits: [
      "Unified modern workplace with enterprise security",
      "Streamlined license utilization and operational savings",
      "Rapid, friction-free employee onboarding",
      "Protection against phishing, spoofing, and credential theft",
    ],
    technologies: [
      "Microsoft 365",
      "Exchange Online",
      "Microsoft Teams",
      "SharePoint Online",
      "Microsoft Entra ID",
      "Microsoft Intune",
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    category: "Zero Trust Defense & Risk Governance",
    shortDesc:
      "Zero Trust security architectures, Microsoft 365 security posture audits, Microsoft Defender XDR, Identity and Access Management, and compliance benchmarking.",
    longDesc:
      "Security is engineered into every tier of your IT ecosystem. Virtual Petals delivers end-to-end cybersecurity services: comprehensive vulnerability assessments, multi-factor authentication enforcement, Microsoft Defender XDR implementation, and automated tenant audits via our proprietary Mito platform.",
    iconName: "ShieldCheck",
    capabilities: [
      "Microsoft 365 Security Assessment & Baseline Checks",
      "Endpoint Security & Hardening (Defender for Endpoint)",
      "Identity and Access Management (IAM & MFA)",
      "Security Configuration & Policy Enforcement",
      "Compliance Assessment (CIS, ISO 27001, CISA)",
      "Proactive Threat Detection & Vulnerability Mitigation",
    ],
    features: [
      "500+ automated read-only tenant checks with Mito",
      "Conditional Access with risk-based sign-in evaluations",
      "Phishing-resistant MFA (FIDO2 & Microsoft Authenticator)",
      "BitLocker device encryption & hardware compliance",
      "Privileged account isolation & session recording",
      "Quarterly regulatory compliance readiness audits",
    ],
    benefits: [
      "Proactive defense against ransomware and account takeover",
      "Continuous posture visibility with zero blind spots",
      "Rapid incident containment and remediation guidance",
      "Compliance peace of mind for board and regulatory auditors",
    ],
    technologies: [
      "Microsoft Defender XDR",
      "Conditional Access",
      "Entra ID Protection",
      "Mito Assessment Platform",
      "Microsoft Sentinel",
      "BitLocker",
    ],
  },
  {
    id: "devops",
    slug: "devops",
    title: "DevOps & Automation",
    category: "Continuous Delivery & Infrastructure as Code",
    shortDesc:
      "Automated CI/CD pipelines, container orchestration with Docker & Kubernetes (AKS), and Infrastructure as Code using Terraform and GitHub Actions.",
    longDesc:
      "Accelerate software releases while maintaining rigorous quality and compliance standards. We implement automated build and deployment pipelines, containerize microservices on Kubernetes, and define infrastructure declaratively using Terraform for repeatable, error-free environments.",
    iconName: "Terminal",
    capabilities: [
      "CI/CD Pipeline Implementation (Azure DevOps & GitHub Actions)",
      "Docker Application Containerization",
      "Kubernetes & Azure Kubernetes Service (AKS)",
      "Terraform Infrastructure as Code (IaC)",
      "Infrastructure Automation & Configuration Management",
      "DevSecOps Automated Security Scanning",
    ],
    features: [
      "Automated multi-stage deployment gates and rollback logic",
      "High-availability Kubernetes clusters with autoscaling",
      "Declarative Terraform landing zones for cloud environments",
      "Container vulnerability scanning in build pipelines",
      "Centralised secrets management via Azure Key Vault",
      "GitOps workflows and branch protection policies",
    ],
    benefits: [
      "Up to 80% faster deployment velocity with zero manual errors",
      "Consistent, repeatable staging and production environments",
      "Zero-downtime blue/green and canary deployments",
      "Auditable, version-controlled infrastructure history",
    ],
    technologies: [
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes (AKS)",
      "Terraform",
      "Helm",
      "Azure Key Vault",
    ],
  },
  {
    id: "it-infrastructure",
    slug: "it-infrastructure",
    title: "IT Infrastructure & Managed Services",
    category: "Proactive Operations & Enterprise Support",
    shortDesc:
      "24/7 infrastructure monitoring, Tier 2/3 technical support, IT administration, strategic IT consulting, and managed migration services.",
    longDesc:
      "Ensure uninterrupted business operations with our managed IT services. We take end-to-end responsibility for your servers, network appliances, user accounts, backup retention, and disaster recovery so your internal teams can focus on strategic business growth.",
    iconName: "Headphones",
    capabilities: [
      "IT Infrastructure Management & Optimization",
      "Technical Support (Tier 2 & 3 Dedicated Engineers)",
      "24/7 Proactive Telemetry & System Monitoring",
      "Strategic IT Consulting & Architecture Roadmapping",
      "Migration and Deployment Services",
      "Disaster Recovery & Backup Governance",
    ],
    features: [
      "SLA-backed response times and proactive incident alerts",
      "Automated patch management across servers and endpoints",
      "Immutable cloud backup verification and recovery drills",
      "Vendor coordination and licensing optimization",
      "Executive quarterly IT review and technology roadmap",
      "On-demand IT engineering staff augmentation",
    ],
    benefits: [
      "Predictable monthly IT operational costs",
      "Drastically reduced system downtime and business impact",
      "Direct access to senior cloud and security engineers",
      "Comprehensive peace of mind for business leadership",
    ],
    technologies: [
      "Azure Monitor",
      "Log Analytics",
      "Veeam / Azure Backup",
      "ITIL Service Management",
      "Fortinet / Cisco Networking",
      "Syslog Telemetry",
    ],
  },
];
