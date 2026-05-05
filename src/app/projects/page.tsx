// app/projects/page.tsx - Fixed Filters

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, MapPin, Calendar, CheckCircle, 
  Briefcase, Building, Lightbulb, Zap, Wrench,
  Eye, ThumbsUp, Clock, Users
} from "lucide-react";

// Sample projects data
const projects = [
  { 
    id: 1,
    title: "Commercial Lighting Upgrade", 
    location: "Houston, TX",
    type: "Lighting",
    category: "Lighting",
    image: "/light.png",
    description: "Complete commercial lighting retrofit with energy-efficient LEDs",
    stats: "45% Energy Savings",
    duration: "2 Weeks",
    year: "2024"
  },
  { 
    id: 2,
    title: "Tenant Build-Out", 
    location: "Houston, TX",
    type: "Build-Out",
    category: "Build-Outs",
    image: "/build.jpg",
    description: "Full electrical build-out for commercial tenant space",
    stats: "10,000 sq ft",
    duration: "3 Weeks",
    year: "2024"
  },
  { 
    id: 3,
    title: "Panel & Service Upgrade", 
    location: "Houston, TX",
    type: "Panel Upgrade",
    category: "Panel Upgrades",
    image: "/panel.jpg",
    description: "800 amp commercial panel upgrade and modernization",
    stats: "800A Capacity",
    duration: "1 Week",
    year: "2024"
  },
  { 
    id: 4,
    title: "Office Building Rewire", 
    location: "Houston, TX",
    type: "Commercial",
    category: "Commercial",
    image: "/wire.jpg",
    description: "Complete electrical rewiring for 5-story office building",
    stats: "50+ Circuits",
    duration: "6 Weeks",
    year: "2023"
  },
  { 
    id: 5,
    title: "Restaurant Electrical", 
    location: "Houston, TX",
    type: "Build-Out",
    category: "Build-Outs",
    image: "/restraunt.jpg",
    description: "Full electrical installation for new restaurant",
    stats: "Commercial Kitchen",
    duration: "4 Weeks",
    year: "2024"
  },
  { 
    id: 6,
    title: "Warehouse Lighting", 
    location: "Houston, TX",
    type: "Lighting",
    category: "Lighting",
    image: "/house.jpg",
    description: "Energy-efficient LED lighting for 50,000 sq ft warehouse",
    stats: "70% Savings",
    duration: "2 Weeks",
    year: "2024"
  },
];

// Categories with matching logic
const categories = [
  { name: "All", filter: "All" },
  { name: "Commercial", filter: "Commercial" },
  { name: "Lighting", filter: "Lighting" },
  { name: "Panel Upgrades", filter: "Panel Upgrades" },
  { name: "Build-Outs", filter: "Build-Outs" }
];

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50 bg-[url('/project.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Briefcase size={14} className="text-blue-400" />
              <span className="text-sm font-medium">Our Work</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Project Spotlights
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              A closer look at the commercial electrical and construction work behind the finished result.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-20 bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.filter
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          {filteredProjects.length === 0 ? (
            // No projects found message
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                <Briefcase size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any projects in "{activeCategory}" category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View All Projects
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.stats}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {project.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{project.type}</span>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock size={12} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <Link 
                      href={`/projects/${project.id}`} 
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      View Project
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Project Count */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-12 text-gray-500 text-sm">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your project?</h2>
          <p className="mt-4 text-blue-100">Let us show you what Integra can do for your next commercial project.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bid" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Request a Bid
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="/commercial" 
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              View Commercial Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}