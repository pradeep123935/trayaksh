import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d3b3b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trayaksh.com"),
  title: "Trayaksh | Professional Property Inspection & Consulting Services",
  description:
    "See beyond inspection with Trayaksh. Professional, detailed, and independent property inspections for apartments, villas, independent houses, and commercial properties.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "Property Inspection",
    "Home Inspection Services",
    "Building Inspection",
    "Pre-Purchase Inspection",
    "Commercial Property Inspection",
    "Trayaksh Consulting",
    "Real Estate Quality Audit",
  ],
  authors: [{ name: "Trayaksh Property Inspection & Consulting" }],
  creator: "Trayaksh",
  publisher: "Trayaksh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Trayaksh | Professional Property Inspection & Consulting Services",
    description:
      "Make confident property decisions with professional, detailed, and independent property inspections.",
    url: "https://trayaksh.com",
    siteName: "Trayaksh Property Inspection",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Trayaksh Property Inspection & Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trayaksh | Professional Property Inspection Services",
    description: "Make confident property decisions with independent inspections.",
    images: ["/hero.png"],
  },
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
};

// JSON-LD Structured Data for Local Business & Service SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Trayaksh Property Inspection & Consulting",
  image: "https://trayaksh.com/logo.png",
  "@id": "https://trayaksh.com",
  url: "https://trayaksh.com",
  telephone: "+91-9000000000",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  description:
    "Professional, detailed, and independent property inspection services for apartments, villas, and commercial spaces.",
  serviceType: [
    "Pre-Handover Inspection",
    "New Property Inspection",
    "Pre-Purchase Inspection",
    "Re-Inspection",
    "Commercial Property Inspection",
    "Property Consulting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#172525] font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
