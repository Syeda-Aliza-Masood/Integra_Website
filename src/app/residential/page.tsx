// app/residential/page.tsx - Dark Text Fixed

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, CheckCircle, Home, Zap, Wrench, 
  Lightbulb, Shield, Clock, ThumbsUp, Award,
  Phone, Mail, MapPin, Star, Users, Settings,
  ClipboardList, Calendar, MessageSquare
} from "lucide-react";

export default function ResidentialPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Dark text? No, Hero has dark background */}
      {/* ============================================ */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/res.jpg"
            alt="Residential electrical remodel project in Houston"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 z-10">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-blue-400/30">
              <Home size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Secondary Lane • Select Quality Work</span>
            </div>
            
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
              Residential Remodel &{" "}
              <span className="text-blue-400">Design-Build Electrical</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-300 sm:text-xl leading-relaxed">
              Integra accepts select quality remodel work for homeowners who demand 
              the same commercial-grade professionalism. From whole home rewires to 
              kitchen remodels — we bring commercial discipline to residential projects.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link 
                href="/bid" 
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              >
                Request a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20"
              >
                View Our Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Award size={14} className="text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star size={14} className="text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Shield size={14} className="text-blue-400" />
                <span>Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECONDARY LANE BANNER - Dark background, light text */}
      {/* ============================================ */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            ⚡ Integra accepts select quality remodel work — Commercial-grade professionalism for your home
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SECTION - Dark text on white background (FIXED) */}
      {/* ============================================ */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
              <Wrench size={14} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Residential Electrical Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              Quality electrical work for homeowners who demand the best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Whole Home Rewires</h3>
              <p className="text-gray-600 mt-2">Complete home electrical rewiring for safety and modern capacity</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ Old wiring replacement</li>
                <li className="flex items-center gap-2">✓ Modern circuit breakers</li>
                <li className="flex items-center gap-2">✓ GFCI/AFCI protection</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Lightbulb size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Kitchen & Bathroom Remodels</h3>
              <p className="text-gray-600 mt-2">Complete electrical for your remodel project</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ Under-cabinet lighting</li>
                <li className="flex items-center gap-2">✓ Dedicated appliance circuits</li>
                <li className="flex items-center gap-2">✓ Exhaust fans & heaters</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Settings size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Panel Upgrades</h3>
              <p className="text-gray-600 mt-2">Upgrade your electrical panel for safety and capacity</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ 100A to 200A upgrades</li>
                <li className="flex items-center gap-2">✓ Service entrance upgrades</li>
                <li className="flex items-center gap-2">✓ Surge protection</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Home size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">New Construction</h3>
              <p className="text-gray-600 mt-2">Complete electrical for new home construction</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ Rough-in & trim-out</li>
                <li className="flex items-center gap-2">✓ Smart home pre-wiring</li>
                <li className="flex items-center gap-2">✓ Outdoor lighting</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Wrench size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">Electrical Repairs</h3>
              <p className="text-gray-600 mt-2">Fast, reliable repairs for any electrical issue</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ Outlet & switch repair</li>
                <li className="flex items-center gap-2">✓ Circuit breaker issues</li>
                <li className="flex items-center gap-2">✓ Light fixture installation</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6">EV Charger Installation</h3>
              <p className="text-gray-600 mt-2">Professional electric vehicle charger installation</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">✓ Level 2 charger install</li>
                <li className="flex items-center gap-2">✓ Dedicated circuit</li>
                <li className="flex items-center gap-2">✓ Garage wiring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE INTEGRA - Dark text fixed */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
              <ThumbsUp size={14} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Why Homeowners Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Commercial Discipline for Your Home
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <MessageSquare size={28} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Clear Communication</h3>
              <p className="text-gray-600 text-sm mt-2">We keep you informed every step of the way</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Clock size={28} className="text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">On Schedule</h3>
              <p className="text-gray-600 text-sm mt-2">We respect your time and project timeline</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
                <Shield size={28} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Clean Jobsite</h3>
              <p className="text-gray-600 text-sm mt-2">We leave your home cleaner than we found it</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <Award size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm mt-2">Workmanship warranty on all projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS SECTION - Dark text fixed */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">Simple, transparent, and professional</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Contact Us</h3>
              <p className="text-gray-600 text-sm mt-2">Call or fill out our form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Free Estimate</h3>
              <p className="text-gray-600 text-sm mt-2">We assess your project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Schedule Work</h3>
              <p className="text-gray-600 text-sm mt-2">We plan the project timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">4</div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Quality Completion</h3>
              <p className="text-gray-600 text-sm mt-2">We deliver clean, quality work</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION - Dark text? No, blue background */}
      {/* ============================================ */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <ClipboardList size={18} />
            <span className="text-sm">Select Quality Work</span>
          </div>
          
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Upgrade Your Home's Electrical?
          </h2>
          
          <p className="text-blue-100 mt-4 text-lg">
            Contact Integra today for a free estimate on your residential project.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bid" 
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="tel:+18327902845" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Call 832-790-2845
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span>✓ Free Estimates</span>
            <span>✓ Licensed & Insured</span>
            <span>✓ Workmanship Warranty</span>
            <span>✓ Clean & Professional</span>
          </div>
        </div>
      </section>

    </main>
  );
}