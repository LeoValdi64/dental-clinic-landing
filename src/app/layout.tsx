import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bright Smile Dental | Premier Dental Care",
  description:
    "Professional dental care for the whole family. From general dentistry to cosmetic procedures, our experienced team provides personalized care in a comfortable environment. Book your appointment today!",
  keywords: [
    "dentist",
    "dental clinic",
    "cosmetic dentistry",
    "teeth whitening",
    "dental implants",
    "orthodontics",
    "emergency dental care",
    "Bright Smile Dental",
  ],
  authors: [{ name: "Bright Smile Dental" }],
  openGraph: {
    title: "Bright Smile Dental | Professional Dental Care",
    description:
      "Professional dental care for the whole family. Our team of experienced dentists provides general, cosmetic, and emergency dental services.",
    url: "https://dental-clinic-landing.vercel.app",
    siteName: "Bright Smile Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bright Smile Dental - Professional Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Smile Dental | Professional Dental Care",
    description:
      "Professional dental care for the whole family. Book your appointment today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dental-clinic-landing.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Bright Smile Dental",
    description: "Professional dental care for the whole family",
    url: "https://dental-clinic-landing.vercel.app",
    telephone: "+1-555-DENTAL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressRegion: "WA",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
