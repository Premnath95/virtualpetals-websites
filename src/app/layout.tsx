import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.virtualpetals.com"),
  title: {
    default: "Virtual Petals | Modern IT Solutions, Microsoft Cloud & Cybersecurity",
    template: "%s | Virtual Petals",
  },
  description:
    "Virtual Petals delivers innovative cloud solutions, Microsoft technologies, cybersecurity and modern IT services that help businesses transform, scale and succeed.",
  keywords: [
    "Virtual Petals",
    "Microsoft 365 Solutions",
    "Azure Cloud Solutions",
    "Cybersecurity UAE",
    "Mito Security App",
    "Microsoft Entra ID",
    "Microsoft Intune",
    "DevOps Automation",
    "Managed IT Services",
    "Abu Dhabi IT Solutions",
  ],
  authors: [{ name: "Virtual Petals" }],
  creator: "Virtual Petals",
  publisher: "Virtual Petals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.virtualpetals.com",
    siteName: "Virtual Petals",
    title: "Virtual Petals | Modern IT Solutions, Microsoft Cloud & Cybersecurity",
    description:
      "Innovative cloud infrastructure, Microsoft technologies, Zero Trust cybersecurity, and enterprise managed IT services.",
    images: [
      {
        url: "/brand/virtualpetals-logo.png",
        width: 1200,
        height: 630,
        alt: "Virtual Petals - Empowering Businesses Through Intelligent Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Petals | Modern IT Solutions",
    description:
      "Virtual Petals delivers innovative cloud solutions, Microsoft technologies, cybersecurity and modern IT services.",
    images: ["/brand/virtualpetals-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: "https://www.virtualpetals.com",
    logo: "https://www.virtualpetals.com/brand/virtualpetals-logo.png",
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.contacts.phone,
    email: COMPANY_INFO.contacts.emails.general,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Level 36, Etihad Towers 3",
        addressLocality: "Abu Dhabi",
        postOfficeBoxNumber: "28686",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 12 4th South Cross St, Kovai Thirunagar 4th St, Indira Nagar, Nehru Nagar West",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641014",
        addressCountry: "IN",
      },
    ],
    sameAs: [COMPANY_INFO.contacts.linkedin],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-brand-charcoal selection:bg-brand-green selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
