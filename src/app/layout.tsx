// app/layout.tsx - Ismein schema + GA add karo
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integra Electric & Construction | Commercial Electrical Contractor Houston",
  description: "Commercial electrical work done clean, coordinated, and on schedule. Serving general contractors, property managers, and businesses across Houston.",
  keywords: "commercial electrical Houston, electrical contractor, tenant build-out, panel upgrade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "name": "Integra Electric & Construction",
              "url": "https://integraelectric.com",
              "logo": "https://integraelectric.com/logo.jpg",
              "image": "https://integraelectric.com/hero.jpg",
              "telephone": "+18327902845",
              "email": "info@integraelectric.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "City",
                "name": "Houston"
              },
              "openingHours": "Mo-Fr 07:00-18:00",
              "sameAs": [
                "https://facebook.com/integraelectric",
                "https://instagram.com/integraelectric"
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}