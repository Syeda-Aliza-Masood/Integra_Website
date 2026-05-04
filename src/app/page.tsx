// app/page.tsx - Only Commercial Services section updated

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Briefcase, Building, Lightbulb, Zap, 
  CheckCircle, Clock, MessageSquare, 
  ClipboardList, Building2, Store, HomeIcon,
  Wrench, AlertTriangle, Settings  // Added for new commercial section
} from "lucide-react";

// ============================================
// SECTION 1: HERO (Same as before)
// ============================================
function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black/60 bg-[url('/hero.jpg')] bg-cover bg-center"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className={`max-w-3xl transition-all ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Commercial Electrical Work{" "}
            <span className="text-blue-400">Done Clean, Coordinated, and On Schedule.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 sm:text-xl">
            Integra Electric & Construction supports general contractors, property managers, 
            and business owners across Houston with dependable commercial electrical solutions.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/bid" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
              Request a Bid →
            </Link>
            <Link href="/projects" className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-gray-900">
              View Project Spotlights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 2: COMMERCIAL SERVICES (UPDATED - More Professional)
// ============================================
function CommercialServices() {
  const services = [
    { name: "Tenant Build-Outs", icon: Building, desc: "Complete commercial space electrical", color: "from-blue-500 to-blue-600" },
    { name: "Commercial Lighting", icon: Lightbulb, desc: "LED upgrades & installation", color: "from-cyan-500 to-blue-600" },
    { name: "Panel & Service Upgrades", icon: Zap, desc: "Modern capacity & safety", color: "from-amber-500 to-orange-600" },
    { name: "Rough-In & Trim-Out", icon: Wrench, desc: "Professional finishing work", color: "from-green-500 to-teal-600" },
    { name: "Troubleshooting", icon: AlertTriangle, desc: "Fast diagnosis & repair", color: "from-red-500 to-rose-600" },
    { name: "Maintenance & Repairs", icon: Settings, desc: "Ongoing commercial support", color: "from-purple-500 to-indigo-600" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Commercial Electrical Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-3 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mt-3">For contractors and businesses across Houston</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">{service.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
              <Link href="/commercial" className="inline-flex items-center text-blue-600 font-medium text-sm mt-3 group-hover:translate-x-1 transition-all">
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 3: BUILT FOR GCs (Same as before)
// ============================================
function BuiltForGCs() {
  const features = [
    "Fast Communication", "Organized Jobsite", "Dependable Scheduling", "No Babysitting Required"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Built for General Contractors</h2>
        <p className="text-center text-gray-600 mt-2">We help keep your project moving</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <CheckCircle size={28} className="text-blue-700" />
              </div>
              <h3 className="font-semibold mt-3 text-gray-900">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 4: PROJECT SPOTLIGHTS (Same as before)
// ============================================
function ProjectSpotlights() {
  const projects = [
    { 
      title: "Commercial Lighting Upgrade", 
      location: "Houston, TX",
      type: "Lighting Installation",
      image: "/light.png",
      description: "Complete commercial lighting retrofit with energy-efficient LEDs"
    },
    { 
      title: "Tenant Build-Out", 
      location: "Houston, TX",
      type: "Tenant Improvement",
      image: "/build.jpg",
      description: "Full electrical build-out for commercial tenant space"
    },
    { 
      title: "Panel & Service Upgrade", 
      location: "Houston, TX",
      type: "Service Upgrade",
      image: "/panel.jpg",
      description: "800 amp commercial panel upgrade and modernization"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Project Spotlights</h2>
        <p className="text-center text-gray-600 mt-2">A closer look at our commercial work</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <div key={i} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-56 w-full overflow-hidden bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {project.type}
                </p>
                <h3 className="font-bold text-xl mt-1 text-gray-900">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{project.location}</p>
                <p className="text-gray-700 text-sm mt-2">{project.description}</p>
                <Link 
                  href={`/projects/${i}`} 
                  className="text-blue-700 font-semibold mt-3 inline-flex items-center hover:text-blue-800"
                >
                  View Project
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            View All Project Spotlights
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 5: WHO WE WORK WITH (Same as before)
// ============================================
function WhoWeWorkWith() {
  const audiences = [
    "General Contractors", "Property Managers", "Developers", "Business Owners"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Who We Work With</h2>
        <p className="text-center text-gray-600 mt-2">Commercial solutions for every role</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {audiences.map((audience, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition">
              <Building2 size={32} className="mx-auto text-blue-700" />
              <h3 className="font-semibold mt-3 text-gray-900">{audience}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {audience === "General Contractors" && "Add us to your bid list"}
                {audience === "Property Managers" && "Quick, clean solutions"}
                {audience === "Developers" && "Professional build-out support"}
                {audience === "Business Owners" && "Reliable commercial service"}
              </p>
              <Link href="/bid" className="text-blue-700 text-sm mt-3 inline-block font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 6: RESIDENTIAL (Same as before)
// ============================================
function ResidentialSecondary() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 text-white">
              <div className="flex items-center gap-2">
                <HomeIcon size={20} className="text-blue-400" />
                <span className="text-blue-400 text-sm uppercase tracking-wide">Secondary Lane</span>
              </div>
              <h2 className="text-2xl font-bold mt-2 text-white">Residential Remodel & Design-Build</h2>
              <p className="text-gray-300 mt-3">
                Integra accepts select quality remodel work for homeowners who demand 
                the same commercial-grade professionalism.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">✓ Whole home rewires</li>
                <li className="flex items-center gap-2">✓ Panel upgrades</li>
                <li className="flex items-center gap-2">✓ Kitchen & bathroom remodels</li>
                <li className="flex items-center gap-2">✓ New construction</li>
              </ul>
              <Link href="/residential" className="text-blue-400 mt-6 inline-flex items-center font-semibold hover:text-blue-300">
                Explore Residential Work
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative h-64 md:h-auto w-full overflow-hidden bg-gray-800">
              <Image
                src="/res.jpg"
                alt="Residential electrical remodel project in Houston"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION 7: FINAL CTA (Same as before)
// ============================================
function FinalCTA() {
  return (
    <section className="py-16 bg-blue-700">
      <div className="mx-auto max-w-3xl px-4 text-center text-white">
        <ClipboardList size={48} className="mx-auto text-white" />
        <h2 className="text-3xl font-bold mt-4 text-white">Ready to work with a reliable electrical contractor?</h2>
        <p className="text-blue-100 mt-2">Add Integra to your bid list for your next commercial project.</p>
        <Link href="/bid" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition shadow-lg">
          Add Integra to Your Bid List →
        </Link>
        <p className="text-blue-200 text-sm mt-4">Houston and surrounding areas • Available for subcontracting</p>
      </div>
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export default function HomePage() {
  return (
    <main>
      <Hero />
      <CommercialServices />
      <BuiltForGCs />
      <ProjectSpotlights />
      <WhoWeWorkWith />
      <ResidentialSecondary />
      <FinalCTA />
    </main>
  );
}