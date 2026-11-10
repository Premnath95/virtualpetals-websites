export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  country: string;
  countryCode: string; // ISO code or emoji flag indicator
  designation: string;
  quote: string;
  project: string;
  logoPath: string;
  region: "uae" | "australia" | "usa" | "nz" | "singapore" | "spain";
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "ahoy-dubai",
    clientName: "AHOY LLC",
    location: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    designation: "CEO & Co Founder",
    quote:
      "Highly Recommended for Cloud Deployments and Managed IT Services. An amazing job was done to set up Microsoft Cloud and Apply Security best practices. The team has exceptional skills in this area.",
    project: "Cloud Deployments & Security Best Practices",
    logoPath: "/clients/ahoy.png",
    region: "uae",
  },
  {
    id: "flux-it-australia",
    clientName: "Flux IT",
    location: "Australia",
    country: "Australia",
    countryCode: "AU",
    designation: "CEO of Company",
    quote:
      "We are working with them closely on numerous projects. Exceptional and Professional Team. Never missed a Milestone so far. Very Responsive and reliable Support teams. Great to work with!",
    project: "Project Delivery & Support",
    logoPath: "/clients/flux.png",
    region: "australia",
  },
  {
    id: "wippli-australia",
    clientName: "Wippli",
    location: "Australia",
    country: "Australia",
    countryCode: "AU",
    designation: "Founder and CEO",
    quote:
      "Helped us to solve an issue that 20 other people couldn't solve with a great and patient experience - Highly recommended for anything related to Azure and .NET Developers! - Project Related to Azure Front Door and CDN",
    project: "Azure Front Door and CDN",
    logoPath: "/clients/wippli.webp",
    region: "australia",
  },
  {
    id: "dulsco-dubai",
    clientName: "DULSCO",
    location: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    designation: "IT Manager",
    quote:
      "Virtual Petals Team have been instrumental to service our clients. Great support for Exchange, O365, Active Directory, any IT services your enterprise needs. Highly Recommend!",
    project: "Exchange, O365, Active Directory",
    logoPath: "/clients/dulsco.webp",
    region: "uae",
  },
  {
    id: "st-ursula-australia",
    clientName: "St Ursula's College",
    location: "Australia",
    country: "Australia",
    countryCode: "AU",
    designation: "IT Officer",
    quote:
      "It was such a nice experience to work with. Your team is so supportive and accomplished every Task. Extraordinary Team I have ever seen. Again thank you so much team.",
    project: "Educational IT Support & Infrastructure",
    logoPath: "/clients/st-ursula.png",
    region: "australia",
  },
  {
    id: "octane-systems-australia",
    clientName: "Octane Systems",
    location: "Australia",
    country: "Australia",
    countryCode: "AU",
    designation: "Sr System Engineer",
    quote:
      "Virtual Petals Team was Excellent to work with. They went the extra mile and Completed my tasks, and We will definitely be hiring them again. - Project Related to Microsoft Endpoint Manager",
    project: "Microsoft Endpoint Manager (Intune)",
    logoPath: "/clients/octane.webp",
    region: "australia",
  },
  {
    id: "dataforce-usa",
    clientName: "Data Force Research",
    location: "United States",
    country: "United States",
    countryCode: "US",
    designation: "CEO",
    quote:
      "Virtual Petals have an awesome team! I would highly recommend it for any Azure migration needs. Very knowledgeable and were able to get us going pretty quickly.",
    project: "Azure Cloud Migration",
    logoPath: "/clients/dataforce.webp",
    region: "usa",
  },
  {
    id: "ad-ports-uae",
    clientName: "AD Ports Group",
    location: "UAE",
    country: "United Arab Emirates",
    countryCode: "AE",
    designation: "Team Lead",
    quote:
      "We got timely response, The team was accommodating and answered all our questions related to Digital Certificates!",
    project: "Digital Certificates & PKI Infrastructure",
    logoPath: "/clients/adports.webp",
    region: "uae",
  },
  {
    id: "bamboo-body-australia",
    clientName: "Bamboo Body",
    location: "Australia",
    country: "Australia",
    countryCode: "AU",
    designation: "IT Manager",
    quote:
      "Virtual Petals Team helped us migrate from Google Workspace to Microsoft 365. Team was perfect to work with! Excellent communication and very skilful. I couldn't be more happy with how the project was completed.",
    project: "Google Workspace to Microsoft 365 Migration",
    logoPath: "/clients/bamboo-body.png",
    region: "australia",
  },
  {
    id: "eatsbee-usa",
    clientName: "EatsBee",
    location: "United States",
    country: "United States",
    countryCode: "US",
    designation: "VP & Managing Partner",
    quote:
      "Great Job, Happy to have Virtual Petals Team onboard with us - Apps running on Azure Platform from App Service to Azure DevOps",
    project: "Azure App Service & Azure DevOps",
    logoPath: "/clients/eatsbee.png",
    region: "usa",
  },
  {
    id: "huddleston-nz",
    clientName: "Huddleston",
    location: "New Zealand",
    country: "New Zealand",
    countryCode: "NZ",
    designation: "Managing Director",
    quote:
      "Fast and Efficient. Knew what they were doing and was great to work with! - Microsoft 365 Adoption",
    project: "Microsoft 365 Adoption",
    logoPath: "/clients/huddleston.png",
    region: "nz",
  },
  {
    id: "ispec-singapore",
    clientName: "iSpec",
    location: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    designation: "Founder & CEO",
    quote:
      "VirtualPetals is the best we have worked with. They are an absolute expert at what they do. They solved problems for us that not even Microsoft could solve on their own apps and networks. We will definitely use them in the future and can recommend them wholeheartedly.",
    project: "Microsoft Apps & Network Engineering",
    logoPath: "/clients/ispec.png",
    region: "singapore",
  },
  {
    id: "majestic-dubai",
    clientName: "Majestic City Retreat Hotel",
    location: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    designation: "IT Manager",
    quote:
      "An amazing Job was done by the Virtual Petals Team. The Way they migrated emails was unbelievable. It was very smooth that none of the users could feel it. I highly recommend Virtual Petals Teams for Cloud Services. Thank you Guys",
    project: "Seamless Cloud Email Migration",
    logoPath: "/clients/majestic.webp",
    region: "uae",
  },
  {
    id: "thoe-dubai",
    clientName: "Cote D'azure Hotel, The Heart of Europe",
    location: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    designation: "Cluster Director of IT",
    quote:
      "I was referred to VirtualPetals by a friend. The most smooth upgrade/migration I have ever done. The very cooperative team is responsive at any time, even during the weekend. Fast, efficient, and professional",
    project: "Hospitality Cloud Upgrade & Migration",
    logoPath: "/clients/thoe.webp",
    region: "uae",
  },
  {
    id: "aray-spain",
    clientName: "Aray Asociados Abogados",
    location: "Spain",
    country: "Spain",
    countryCode: "ES",
    designation: "Director of Innovation and Development",
    quote:
      "Virtual Petals Team is Highly qualified. They have carried out the development in an agile and efficient way. The communication has been exceptional, and the understanding of our needs has exceeded expectations. We hope to continue counting on your help in future projects.",
    project: "Agile Cloud Application Development",
    logoPath: "/clients/aray.webp",
    region: "spain",
  },
];
