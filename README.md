# Virtual Petals – Modern Corporate Website

This repository contains the complete modern redesign and development of the **Virtual Petals** corporate website.

## Company Overview

- **Company Name:** VIRTUAL PETALS (Virtual Petals Private Limited)
- **Primary Domain:** [virtualpetals.com](https://www.virtualpetals.com/)
- **Core Focus:** Modern Microsoft 365 Solutions, Azure Cloud Architecture, Zero Trust Cybersecurity & Compliance, Intune Endpoint Management, and DevOps Automation.
- **Offices:**
  - **UAE Regional Office:** Level 36, Etihad Towers 3, Abu Dhabi, United Arab Emirates (P.O. Box: 28686)
  - **India Office (NetFuxion Pro):** Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Civil Aerodrome Post, Nehru Nagar West, Coimbatore, Tamil Nadu 641014
  - **Contact Phone:** +971 2 409 3026
  - **Contact Email:** info@virtualpetals.com / contactus@virtualpetals.com

## Ecosystem Highlights

1. **Flagship Product – Mito:**
   - Microsoft 365 Security & Compliance Platform
   - Official Mito Website: [https://mito-app.virtualpetals.com/](https://mito-app.virtualpetals.com/)
   - Demo Scheduling: [calendly.com/virtualpetals/30min](https://calendly.com/virtualpetals/30min)
   - 500+ automated daily security checks, 100% read-only tenant review, daily drift detection, hosted in Azure UAE North.
2. **Strategic Partner – NETFUXION PRO:**
   - Featured technology partner with official green branding and IT solutions collaboration.

---

## Brand Design System

- **Primary Green:** `#35A853` (Primary CTA buttons, highlights, and active branding)
- **Teal:** `#12B8A6` (Secondary buttons, icons, and visual accents)
- **White:** `#FFFFFF` (Clean backgrounds and content areas)
- **Dark Green:** `#123B32` (Enterprise headings and footer sections)
- **Light Green:** `#F3FAF6` (Subtle card and section backgrounds)
- **Charcoal:** `#253B38` (High-readability body text)
- **Soft Grey:** `#F5F7F6` (Card borders and alternate stripes)

---

## Page Architecture

1. **Home (`/`):**
   - Hero Section: *"Empowering Businesses Through Intelligent Technology"*
   - About Section: *"Technology That Moves Your Business Forward"*
   - 8 Enterprise Services Cards
   - Dedicated Mito SaaS Product Showcase with interactive tabs and live UI screenshots
   - Strategic Partner Showcase (NETFUXION PRO)
   - 6 Core Feature Cards (*"Why Businesses Choose Virtual Petals"*)
   - Technology Ecosystem (Microsoft Cloud & DevOps stacks)
   - Mito 30-Min Demo Booking (Calendly embed & modal options)
   - Enterprise Contact Form & Office Presence
2. **About Us (`/about`):** Detailed company profile, Mission, Vision, 5 Core Values, and Global Delivery Presence.
3. **Services Overview (`/services`):** Full breakdown of all 8 capabilities.
4. **Microsoft 365 Solutions (`/services/microsoft-365`):** Exchange, Teams, SharePoint, Tenant Migration & Security Governance.
5. **Azure Cloud Solutions (`/services/azure-cloud`):** Azure VMs, Networking, Blob Storage, Cloud Migration, and Cost Optimization.
6. **Microsoft Intune & Endpoint Management (`/services/microsoft-intune`):** Autopilot, Windows & Apple MDM, Compliance Policies, BitLocker.
7. **Cybersecurity & Compliance (`/services/cybersecurity`):** Microsoft Defender, Entra ID, Conditional Access, MFA, and Security Audits.
8. **DevOps & Automation (`/services/devops`):** Azure DevOps, GitHub Actions, Docker, Kubernetes, Terraform IaC.
9. **Cloud Migration (`/services/cloud-migration`):** Low-risk email, data, and infrastructure migrations.
10. **Managed IT Services (`/services/managed-it`):** 24/7 monitoring, technical support, cloud operations.
11. **IT Consulting (`/services/it-consulting`):** Architecture reviews, roadmaps, and optimization.
12. **Products Overview (`/products`):** SaaS products suite overview.
13. **Mito Product Details (`/products/mito`):** In-depth platform specs, CIS/CISA baseline analysis, real dashboard screenshots, and launch links.
14. **Partners (`/partners`):** Strategic alliance profile for NETFUXION PRO.
15. **Contact Us (`/contact`):** Full contact form connected to `/api/contact` with server validation and honeypot spam protection.
16. **Privacy Policy (`/privacy-policy`):** Corporate privacy and read-only data disclosures.
17. **Terms & Conditions (`/terms`):** Terms of service and intellectual property disclosures.
18. **SEO Essentials (`/sitemap.xml`, `/robots.txt`):** Dynamic XML sitemap and indexing directives.

---

## Local Development & Build

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Server starts on http://localhost:3000

# Create production build
npm run build

# Start production server
npm run start
```

### Docker Deployment
```bash
# Build Docker image
docker build -t virtualpetals-corporate:latest .

# Run container
docker run -p 3000:3000 virtualpetals-corporate:latest
```

---

## Final Acceptance Criteria Verification

- [x] Complete Virtual Petals corporate redesign
- [x] Green + White + Teal brand identity
- [x] Professional homepage
- [x] Dedicated About Us section
- [x] Complete IT services showcase (8 services + individual detail pages)
- [x] Dedicated Mito product section
- [x] Working Launch Mito button (`http://mito.virtualpetals.com/`)
- [x] Working Calendly demo booking button (`https://calendly.com/virtualpetals/30min`)
- [x] Dedicated NetFuxion Pro partner section
- [x] Original NetFuxion Pro logo displayed correctly without alterations
- [x] Contact form connected to a real backend (`/api/contact`)
- [x] Responsive desktop, tablet and mobile
- [x] SEO optimisation (Meta tags, Open Graph, Sitemap, Robots.txt, JSON-LD)
- [x] Accessibility improvements (ARIA attributes, semantic HTML, readable contrast)
- [x] Performance optimisation (Clean Next.js SSR/SSG, lightweight CSS, zero bloat)
- [x] No broken links
- [x] No fake functionality
- [x] Existing live Mito application remains unaffected
- [x] Production deployment configuration preserved
