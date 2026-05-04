// components/HeroWithTexture.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";

export default function HeroWithTexture() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-electrical-jobsite.jpg"
          alt="Commercial electrical panel and conduit installation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Blueprint Grid Texture - from PDF Page 11 */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div
          className={`max-w-3xl transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Commercial Electrical Work{" "}
            <span className="block text-blue-400">
              Done Clean, Coordinated, and On Schedule.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 sm:text-xl">
            Integra Electric & Construction supports general contractors,
            property managers, and business owners across Houston with
            dependable commercial electrical solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/bid"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Request a Bid
              <ArrowRight size={18} className="ml-2" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
            >
              <Briefcase size={18} className="mr-2" />
              View Project Spotlights
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Houston and surrounding areas
            </span>
            <span className="flex items-center">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Available for subcontracting
            </span>
            <span className="flex items-center">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Commercial electrical focus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}