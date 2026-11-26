export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  compliance: string[];
  iconName: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "finance",
    slug: "financial-services",
    name: "Financial Services & Banking",
    subtitle: "High-security cloud architecture & regulatory governance",
    description:
      "Financial institutions, fintech innovators, and asset managers demand impenetrable cybersecurity, continuous auditing, and zero latency. We engineer hardened Microsoft 365 and Azure environments enforcing strict Zero Trust identity, data loss prevention, and immutable logging.",
    challenges: [
      "Strict data privacy regulations and routine external audits",
      "Sophisticated financial phishing, social engineering, and ransomware",
      "Legacy banking core systems requiring hybrid cloud integration",
    ],
    solutions: [
      "Conditional Access with FIDO2 hardware MFA enforcement",
      "Privileged Identity Management (PIM) with just-in-time access approval",
      "Microsoft Purview DLP preventing unauthorized data exfiltration",
      "Mito automated baseline audits against financial security baselines",
    ],
    compliance: ["PCI-DSS", "ISO 27001", "SOC 2", "UAE Central Bank Standards"],
    iconName: "Landmark",
  },
  {
    id: "healthcare",
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    subtitle: "Resilient systems protecting sensitive patient information",
    description:
      "Healthcare providers and pharmaceutical organisations need secure, highly available IT infrastructure. We ensure electronic health records (EHR) and tele-health collaboration channels operate seamlessly while upholding the highest patient data confidentiality standards.",
    challenges: [
      "Ransomware threats targeting medical devices and hospital servers",
      "Clinicians needing rapid, multi-device mobile access across hospitals",
      "Strict confidentiality mandates regarding electronic health records",
    ],
    solutions: [
      "Microsoft Intune device governance across medical tablets & workstations",
      "Defender for Endpoint automated threat isolation and endpoint protection",
      "Encrypted SharePoint clinical document management and access reviews",
      "24/7 infrastructure telemetry monitoring with immediate failover",
    ],
    compliance: ["HIPAA", "ISO 27001", "GDPR", "UAE Health Data Law"],
    iconName: "Stethoscope",
  },
  {
    id: "logistics",
    slug: "logistics-maritime",
    name: "Logistics, Ports & Supply Chain",
    subtitle: "Mission-critical 24/7 uptime for global transport networks",
    description:
      "In modern maritime shipping, port operations, and distribution networks, downtime directly delays global commerce. We engineer high-availability cloud infrastructure and SD-WAN networks that maintain continuous operations across terminals, warehouses, and vessels.",
    challenges: [
      "24/7 continuous operations with zero tolerance for system downtime",
      "Geographically distributed facilities and remote terminal connectivity",
      "Interconnected IoT sensors and warehouse operational technologies",
    ],
    solutions: [
      "Multi-region Azure and AWS redundant cloud infrastructure",
      "Hybrid networking with SD-WAN, ExpressRoute, and automated failover",
      "Automated CI/CD deployment pipelines for logistics tracking software",
      "24/7 managed IT support and proactive telemetry alerts",
    ],
    compliance: ["ISO 20000", "ISO 27001", "Maritime Cyber Security Guidelines"],
    iconName: "Ship",
  },
  {
    id: "hospitality",
    slug: "hospitality-leisure",
    name: "Hospitality & Multi-Property Leisure",
    subtitle: "Reliable guest experience and secure multi-property IT",
    description:
      "From luxury resort destinations to boutique hotel chains, hospitality brands rely on dependable property management systems (PMS), high-speed guest networks, and secure payment processing. We provide centralized IT management and guest network segmentation across multi-property portfolios.",
    challenges: [
      "Segmenting open public guest WiFi from sensitive corporate payment networks",
      "High staff turnover requiring rapid account onboarding and offboarding",
      "Multi-location IT management across distinct hotels and resorts",
    ],
    solutions: [
      "Network isolation separating PMS, POS payment systems, and guest WiFi",
      "Automated Microsoft Entra ID lifecycle workflows for seasonal staff",
      "Centralized cloud monitoring across all resort servers and endpoints",
      "Windows Autopilot rapid kiosk and reception terminal deployment",
    ],
    compliance: ["PCI-DSS", "GDPR", "Local Tourism Compliance Standards"],
    iconName: "Hotel",
  },
  {
    id: "retail",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    subtitle: "Elastic cloud compute for peak seasonal shopping demand",
    description:
      "Modern retail requires unified omnichannel commerce, reliable inventory sync, and instant scalability during peak events like Black Friday or White Friday. We build autoscaling cloud backends and containerized microservices that handle massive traffic spikes with zero performance degradation.",
    challenges: [
      "Severe traffic surges overwhelming checkout infrastructure",
      "Distributed POS hardware across physical store chains",
      "Inventory synchronization delays between stores and e-commerce platforms",
    ],
    solutions: [
      "Kubernetes (AKS) autoscaling microservices for e-commerce checkouts",
      "Azure CDN and edge caching for sub-second page load times",
      "Centralized Intune management for retail tablets and barcode scanners",
      "Disaster recovery configurations guaranteeing zero data loss during flash sales",
    ],
    compliance: ["PCI-DSS", "ISO 27001", "Data Protection Directives"],
    iconName: "ShoppingBag",
  },
  {
    id: "education",
    slug: "education-public-sector",
    name: "Education & Professional Services",
    subtitle: "Collaborative modern campus IT with cost-effective licensing",
    description:
      "Universities, private colleges, legal practices, and research institutions require collaborative digital classrooms and secure document workflows. We configure Microsoft 365 Education/Business suites, student identity safeguards, and managed laptop fleets with optimized licensing.",
    challenges: [
      "Managing thousands of student and faculty identities with distinct privileges",
      "Preventing unauthorized sharing of intellectual property and student data",
      "Budget constraints necessitating optimal software licensing utilization",
    ],
    solutions: [
      "Microsoft 365 Education tenant consolidation and license rightsizing",
      "Intune automated provisioning for student 1:1 laptop programs",
      "Confidential SharePoint libraries for research and legal case files",
      "Phishing defense policies tailored to educational academic settings",
    ],
    compliance: ["FERPA / COPPA Alignment", "ISO 27001", "Public Sector Guidelines"],
    iconName: "GraduationCap",
  },
];
