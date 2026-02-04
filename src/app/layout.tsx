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
  title: "BrightSmile Dental | Premier Dental Care in Seattle, WA",
  description:
    "BrightSmile Dental offers comprehensive dental care in Seattle, WA. From general dentistry to cosmetic procedures, our experienced team provides personalized care in a comfortable environment. Book your appointment today!",
  keywords: [
    "dentist Seattle",
    "dental clinic Seattle WA",
    "cosmetic dentistry",
    "teeth whitening",
    "dental implants",
    "orthodontics",
    "emergency dental care",
    "BrightSmile Dental",
  ],
  authors: [{ name: "BrightSmile Dental" }],
  openGraph: {
    title: "BrightSmile Dental | Your Smile, Our Priority",
    description:
      "Experience modern dental care at BrightSmile Dental in Seattle, WA. Our team of experienced dentists provides general, cosmetic, and emergency dental services.",
    url: "https://brightsmile-dental.com",
    siteName: "BrightSmile Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrightSmile Dental - Premier Dental Care in Seattle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSmile Dental | Premier Dental Care in Seattle, WA",
    description:
      "Experience modern dental care at BrightSmile Dental. Book your appointment today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brightsmile-dental.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
