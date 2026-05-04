// components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Star, ExternalLink } from "lucide-react";

const commercialServices = [
  "Tenant Build-Outs",
  "Commercial Lighting",
  "Panel & Service Upgrades",
  "Rough-In & Trim-Out",
  "Troubleshooting",
  "Maintenance & Repairs",
];

const quickLinks = [
  { name: "Commercial Electrical", href: "/commercial" },
  { name: "Project Spotlights", href: "/projects" },
  { name: "Residential", href: "/residential" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Request a Bid", href: "/bid" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer CTA Section - From PDF Page 3 */}
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a reliable electrical contractor for your next project?
          </h2>
          <div className="mt-6">
            <Link
              href="/bid"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Add Integra to Your Bid List
              <ExternalLink size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Column */}
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                INTEGRA<span className="text-blue-500">⚡</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Commercial electrical work done clean, coordinated, and on schedule.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+18327902845"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Phone size={16} className="text-blue-500" />
                <span>832-790-2845</span>
              </a>
              <a
                href="mailto:info@integraelectric.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                <Mail size={16} className="text-blue-500" />
                <span>info@integraelectric.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 text-blue-500" />
                <span>Serving Houston and surrounding areas</span>
              </div>
            </div>

            {/* Google Review Link */}
            <a
              href="https://g.page/r/your-google-place-id/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-yellow-400 transition-colors hover:bg-gray-700"
            >
              <Star size={16} fill="currentColor" />
              <span>Review us on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Commercial Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white">Commercial Services</h3>
            <ul className="mt-4 space-y-2">
              {commercialServices.map((service) => (
                <li key={service}>
                  <Link
                    href={`/commercial#${service.toLowerCase().replace(/[&\s]+/g, "-")}`}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* License & Credentials Column */}
          <div>
            <h3 className="text-lg font-semibold text-white">Credentials</h3>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-400">
                <span className="block font-medium text-gray-300">License #:</span>
                TDLR 123456 (Example - replace with actual)
              </p>
              <p className="text-sm text-gray-400">
                <span className="block font-medium text-gray-300">Insured & Bonded</span>
              </p>
              <div className="mt-4 rounded-lg border border-gray-800 bg-gray-800/50 p-3">
                <p className="text-xs text-gray-500">
                  Available for subcontracting on commercial projects across Houston and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Privacy Policy & Sitemap */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              © {currentYear} Integra Electric & Construction. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link
                href="/privacy-policy"
                className="text-gray-500 transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/sitemap.xml"
                className="text-gray-500 transition-colors hover:text-blue-400"
              >
                Sitemap
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/accessibility"
                className="text-gray-500 transition-colors hover:text-blue-400"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}