// app/projects/[id]/page.tsx - Blue Theme Result Section, No CTA

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, MapPin, Calendar, CheckCircle, 
  Briefcase, Building, Lightbulb, Zap, Wrench,
  ThumbsUp, Clock, Users, FileText, Phone, Mail
} from "lucide-react";

// Sample project data - Replace with actual data from CMS/API
const getProjectData = (id: string) => {
  const projects: Record<string, any> = {
    "1": {
      // Project Snapshot
      name: "Commercial Lighting Upgrade",
      location: "Houston, TX",
      type: "Lighting Installation",
      clientType: "Property Manager",
      timeline: "2 Weeks",
      status: "Completed",
      image: "/light.png",
      images: ["/light.png", "/panel.jpg", "/build.jpg"],
      scope: "LED lighting retrofit, fixture replacement, dimming controls, energy management system",
      description: "Complete commercial lighting retrofit with energy-efficient LEDs",
      // The Challenge
      challenge: "The client needed to upgrade their outdated fluorescent lighting system to energy-efficient LEDs while keeping the commercial office space fully operational during business hours. The existing system was failing frequently and causing high energy bills.",
      // Our Scope (bullet list)
      scopeItems: [
        "Reviewed the project requirements and work area",
        "Completed LED lighting installation and fixture replacement",
        "Installed new dimming controls and energy management system",
        "Maintained clean work areas and coordinated around active jobsite needs",
        "Addressed punch items quickly and professionally"
      ],
      // Execution
      execution: "We worked after hours and weekends to minimize disruption to daily operations. The installation was completed in phases, starting with the back offices and moving to the front. Our team coordinated closely with the property management team throughout the process, providing daily updates and maintaining a clean, organized jobsite.",
      // Result
      result: "A clean commercial electrical finish ready for business use. The client now enjoys 45% energy savings, improved lighting quality, and a modern aesthetic that tenants love.",
      // Additional stats
      energySavings: "45%",
      squareFeet: "25,000 sq ft",
      fixtures: "342 fixtures"
    },
    "2": {
      name: "Tenant Build-Out",
      location: "Houston, TX",
      type: "Tenant Improvement",
      clientType: "General Contractor",
      timeline: "3 Weeks",
      status: "Completed",
      image: "/build.jpg",
      images: ["/build.jpg", "/panel.jpg", "/light.png"],
      scope: "Full electrical build-out including panels, lighting, data, and power",
      description: "Full electrical build-out for commercial tenant space",
      challenge: "The project required dependable electrical work that could be completed cleanly while keeping the job moving for the client and other trades. The timeline was tight at 3 weeks with multiple trades working in the same space.",
      scopeItems: [
        "Reviewed the project requirements and work area",
        "Installed new 400 amp panel and distribution system",
        "Completed all rough-in and trim-out electrical work",
        "Installed LED lighting throughout the 10,000 sq ft space",
        "Coordinated with GC and other trades daily"
      ],
      execution: "We sequenced work efficiently to avoid conflicts with other trades. Our team maintained a clean jobsite daily, communicated progress every morning, and completed all rough-in work ahead of schedule to allow drywall and painting to proceed without delay.",
      result: "A clean commercial electrical finish ready for business use. The build-out was completed on time and under budget, with zero punch list items at final walkthrough.",
      energySavings: "30%",
      squareFeet: "10,000 sq ft",
      fixtures: "156 fixtures"
    },
    "3": {
      name: "Panel & Service Upgrade",
      location: "Houston, TX",
      type: "Service Upgrade",
      clientType: "Business Owner",
      timeline: "1 Week",
      status: "Completed",
      image: "/panel.jpg",
      images: ["/panel.jpg", "/light.png", "/build.jpg"],
      scope: "800 amp commercial panel upgrade, new feeders, safety disconnects",
      description: "800 amp commercial panel upgrade and modernization",
      challenge: "The existing electrical panel was outdated, undersized, and couldn't support new equipment being installed. The client needed the upgrade completed with minimal downtime to their manufacturing operation.",
      scopeItems: [
        "Reviewed the project requirements and work area",
        "Coordinated utility shutdown with CenterPoint Energy",
        "Removed old 400 amp panel and installed new 800 amp panel",
        "Installed new feeders, breakers, and safety disconnects",
        "Completed all code corrections and passed inspection"
      ],
      execution: "We coordinated with the utility company to schedule a weekend shutdown. Our team worked around the clock Saturday and Sunday to complete the installation. All work was performed with code, safety, and coordination in mind.",
      result: "A clean commercial electrical finish ready for business use. The client now has capacity for future growth, improved safety, and reliable power without interruptions.",
      energySavings: "N/A",
      squareFeet: "15,000 sq ft",
      fixtures: "N/A"
    }
  };
  return projects[id] || projects["1"];
};

export default function SingleProjectPage({ params }: { params: { id: string } }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const project = getProjectData(params.id);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <main className="bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 bg-black/40">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/projects" className="hover:text-blue-200 transition">Project Spotlights</Link>
              <span>/</span>
              <span className="text-gray-300">{project.type}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            
            {/* Location */}
            <div className="flex items-center gap-2 mt-4 text-gray-300">
              <MapPin size={18} />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROJECT SNAPSHOT */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Briefcase size={24} className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Project Type</p>
              <p className="font-semibold text-gray-900 mt-1">{project.type}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <MapPin size={24} className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
              <p className="font-semibold text-gray-900 mt-1">{project.location}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Users size={24} className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Client Type</p>
              <p className="font-semibold text-gray-900 mt-1">{project.clientType}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Calendar size={24} className="mx-auto text-blue-600 mb-2" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Timeline</p>
              <p className="font-semibold text-gray-900 mt-1">{project.timeline}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <CheckCircle size={24} className="mx-auto text-green-600 mb-2" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Status</p>
              <p className="font-semibold text-green-600 mt-1">{project.status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE CHALLENGE */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR SCOPE */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap size={24} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Scope</h2>
              <ul className="space-y-4">
                {project.scopeItems.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EXECUTION */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Wrench size={24} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Execution</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.execution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* IMAGES GALLERY */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Project Gallery</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-600 mt-3">A closer look at the work behind the finished result</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.map((img: string, idx: number) => (
              <div key={idx} className="group">
                <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={img}
                    alt={`${project.name} - image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Click to expand</span>
                  </div>
                </div>
                {/* Photo Caption */}
                <p className="text-center text-sm text-gray-500 mt-3">
                  {idx === 0 && "Finished LED lighting installation"}
                  {idx === 1 && "Organized panel work"}
                  {idx === 2 && "Clean conduit runs and fixtures"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE RESULT - BLUE THEME GRADIENT (No CTA) */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <ThumbsUp size={14} />
            <span className="text-sm font-medium">The Result</span>
          </div>
          
          <h2 className="text-3xl font-bold md:text-4xl mb-6">
            A clean commercial electrical finish ready for business use.
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
            {project.result}
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <CheckCircle size={16} />
              <span className="text-sm">Passed inspection</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Clock size={16} />
              <span className="text-sm">Completed on schedule</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Briefcase size={16} />
              <span className="text-sm">Ready for next phase</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}