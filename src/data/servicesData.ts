export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "m365",
    slug: "microsoft-365",
    title: "Microsoft 365 Solutions",
    shortDesc:
      "Modernize workplace productivity with comprehensive Microsoft 365 planning, deployment, exchange migration, and administrative governance.",
    longDesc:
      "Virtual Petals empowers organisations to harness the full power of Microsoft 365. From Exchange Online migrations and Microsoft Teams enterprise voice to SharePoint Online intranets and automated security policies, we ensure your business collaborates smoothly, securely, and efficiently.",
    iconName: "LayoutGrid",
    features: [
      "Microsoft 365 implementation",
      "Exchange Online architecture & configuration",
      "Microsoft Teams governance and rollouts",
      "SharePoint Online architecture & migration",
      "Seamless Microsoft 365 tenant migration",
      "Security baselines and administration",
    ],
    benefits: [
      "Accelerated workforce productivity with zero disruption",
      "Hardened tenant security configurations",
      "Consolidated licensing and lower operational overhead",
      "Expert governance frameworks for enterprise scale",
    ],
    technologies: ["Exchange Online", "Microsoft Teams", "SharePoint Online", "OneDrive", "Power Platform"],
  },
  {
    id: "azure",
    slug: "azure-cloud",
    title: "Azure Cloud Solutions",
    shortDesc:
      "Scalable, resilient Microsoft Azure cloud infrastructure, virtual machines, secure networking, storage, and cost optimization.",
    longDesc:
      "Transform and scale your digital estate with enterprise Azure solutions. We design, deploy, and manage cloud workloads with optimal cost governance, automated high-availability, hybrid interconnectivity, and disaster recovery.",
    iconName: "Cloud",
    features: [
      "Azure infrastructure design & architecture",
      "Azure Virtual Machines & compute scaling",
      "Azure networking (VNet, VPN, ExpressRoute)",
      "Azure storage & resilient data management",
      "Azure cloud migration with zero downtime",
      "Cost optimization & FinOps assessments",
    ],
    benefits: [
      "High reliability with regional redundancy & UAE North availability",
      "Granular cost transparency and resource right-sizing",
      "Automated scaling to meet peak customer demand",
      "End-to-end security aligned with Microsoft Well-Architected Framework",
    ],
    technologies: ["Azure VMs", "Virtual Networks", "Azure Blob", "Azure SQL", "Azure Monitor", "FinOps"],
  },
  {
    id: "intune",
    slug: "microsoft-intune",
    title: "Microsoft Intune & Endpoint Management",
    shortDesc:
      "Centralized device management, Windows Autopilot provisioning, zero-touch deployment, and automated compliance policies.",
    longDesc:
      "Enable modern work securely across Windows, macOS, iOS, and Android devices. We leverage Microsoft Intune and Windows Autopilot to automate endpoint provisioning, push application packages, and enforce security baselines wherever your team works.",
    iconName: "Smartphone",
    features: [
      "Microsoft Intune enterprise deployment",
      "Windows device management & configuration profiles",
      "Apple device management (macOS & iOS)",
      "Windows Autopilot zero-touch provisioning",
      "Endpoint security & BitLocker encryption",
      "Automated device compliance & health checks",
    ],
    benefits: [
      "Rapid employee onboarding without hands-on IT imaging",
      "Strict data protection on corporate and BYOD endpoints",
      "Continuous compliance verification before granting network access",
      "Centralized management across multi-platform device fleets",
    ],
    technologies: ["Microsoft Intune", "Windows Autopilot", "Apple Business Manager", "BitLocker", "Endpoint Defender"],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    shortDesc:
      "Enterprise threat protection, Microsoft Defender, Entra ID identity security, Conditional Access, and compliance assessments.",
    longDesc:
      "Safeguard your critical assets and identities with a Zero Trust architecture. We implement Microsoft Defender, Microsoft Entra ID Conditional Access, phishing-resistant MFA, and comprehensive security reviews that discover vulnerabilities before attackers can exploit them.",
    iconName: "ShieldCheck",
    features: [
      "Microsoft Defender for Endpoint, Identity & Office 365",
      "Microsoft Entra ID governance & Identity Protection",
      "Conditional Access policies & risk-based controls",
      "Phishing-resistant MFA implementation",
      "Identity security & Privileged Identity Management (PIM)",
      "Microsoft 365 security & compliance assessments",
    ],
    benefits: [
      "Proactive protection against ransomware and credential theft",
      "Enforced Zero Trust access policies across all entry points",
      "Demonstrated compliance with regulatory and regional standards",
      "Continuous visibility into identity vulnerabilities and risky sign-ins",
    ],
    technologies: ["Microsoft Defender", "Microsoft Entra ID", "Conditional Access", "Microsoft Purview", "Mito"],
  },
  {
    id: "devops",
    slug: "devops",
    title: "DevOps & Automation",
    shortDesc:
      "Modern CI/CD pipelines, Azure DevOps, GitHub Actions, Docker containers, Kubernetes orchestration, and Infrastructure as Code.",
    longDesc:
      "Accelerate software delivery with dependable DevOps practices. We implement automated CI/CD pipelines, container orchestration with Kubernetes, and Infrastructure as Code (IaC) with Terraform so your engineering teams release features faster with zero regressions.",
    iconName: "GitMerge",
    features: [
      "Azure DevOps pipelines & repository management",
      "GitHub Actions workflows and automation",
      "Automated CI/CD build & release pipelines",
      "Docker containerization & best practices",
      "Kubernetes & AKS cluster management",
      "Terraform & Infrastructure as Code (IaC)",
    ],
    benefits: [
      "Rapid, repeatable, error-free production releases",
      "Reproducible cloud environments defined in code",
      "Shift-left automated security and vulnerability scanning",
      "Reduced time-to-market for enterprise applications",
    ],
    technologies: ["Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "AKS", "Terraform"],
  },
  {
    id: "cloud-migration",
    slug: "cloud-migration",
    title: "Cloud Migration",
    shortDesc:
      "Structured, low-risk migration of email, files, databases, and on-premises infrastructure to Microsoft cloud environments.",
    longDesc:
      "Transition from legacy on-premises servers or competing cloud platforms with zero business interruption. We handle pre-migration assessments, automated data synchronization, cutover execution, and post-migration validation.",
    iconName: "ArrowRightLeft",
    features: [
      "Microsoft 365 tenant-to-tenant migration",
      "Enterprise email migration (Exchange, Google Workspace, IMAP)",
      "Cloud infrastructure migration from on-prem to Azure",
      "Database and file storage data migration",
      "Thorough migration planning and cutover runbooks",
      "Post-migration hypercare and administrative handoff",
    ],
    benefits: [
      "Zero email disruption during mail cutovers",
      "Elimination of legacy on-prem hardware maintenance fees",
      "Preserved permissions, metadata, and audit records",
      "Proven risk mitigation strategies for smooth cutovers",
    ],
    technologies: ["Azure Migrate", "Microsoft 365 Migration Tool", "SharePoint Migration Tool", "Azure Data Factory"],
  },
  {
    id: "managed-it",
    slug: "managed-it",
    title: "Managed IT Services",
    shortDesc:
      "Proactive 24/7 IT administration, cloud infrastructure monitoring, responsive technical support, and endpoint operations.",
    longDesc:
      "Ensure business continuity with Virtual Petals managed IT operations. We monitor your cloud infrastructure, manage users and licenses, patch endpoints, and resolve issues before they impact daily operations.",
    iconName: "Headphones",
    features: [
      "Comprehensive IT administration & operations",
      "24/7 infrastructure health and performance monitoring",
      "Dedicated technical support and SLA-backed resolution",
      "Ongoing Microsoft 365 & Azure tenant administration",
      "Endpoint health, software deployment & patch management",
      "Cloud operations and disaster recovery readiness",
    ],
    benefits: [
      "Predictable IT costs without staffing overhead",
      "Rapid resolution of operational disruptions",
      "Continuous optimization of licensing and cloud resources",
      "Executive reporting on system health and security posture",
    ],
    technologies: ["Azure Monitor", "Intune", "Ticketing & ITSM", "PowerShell", "Remote Monitoring"],
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting",
    shortDesc:
      "Strategic IT roadmap planning, cloud architecture reviews, technology assessments, and digital modernization consulting.",
    longDesc:
      "Align your technology investments directly with business goals. Our senior enterprise consultants review existing systems, formulate modern digital roadmaps, design resilient cloud architectures, and optimize ongoing IT investments.",
    iconName: "Compass",
    features: [
      "Comprehensive IT infrastructure & security assessments",
      "Strategic technology roadmapping & budgeting",
      "Enterprise cloud architecture & Well-Architected reviews",
      "IT efficiency and workflow optimization",
      "Vendor selection, licensing reviews & governance",
      "Technical consulting and executive advisory",
    ],
    benefits: [
      "Clear, actionable technology roadmap aligned to growth",
      "Elimination of costly IT redundancy and technical debt",
      "Vendor-neutral architectural guidance",
      "Accelerated digital transformation and modern work adoption",
    ],
    technologies: ["Cloud Architecture", "Enterprise Governance", "Risk Assessment", "Cost Modeling"],
  },
];
