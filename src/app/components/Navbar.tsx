// components/Navbar.tsx - Only Logo (No Text)

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Commercial Electrical", href: "/commercial" },
  { name: "Project Spotlights", href: "/projects" },
  { name: "Residential", href: "/residential" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm bg-white/95"
          : "bg-white shadow-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Only Logo - No Text */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40">
                <Image
                  src="/logo.1.jpg"
                  alt="Integra Electric & Construction Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-gray-700 transition-colors hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}

            {/* Click-to-Call (Desktop) */}
            <a
              href="tel:+18327902845"
              className="flex items-center gap-2 rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50"
            >
              <Phone size={16} />
              <span>832-790-2845</span>
            </a>

            {/* Request a Bid Button - Primary CTA */}
            <Link
              href="/bid"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-800 hover:shadow-lg"
            >
              Request a Bid
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Click-to-Call (Mobile Sticky) */}
            <a
              href="tel:+18327902845"
              className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 pb-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/bid"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-3 mt-3 block rounded-lg bg-blue-700 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Request a Bid
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
