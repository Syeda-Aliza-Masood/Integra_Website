// app/about/page.tsx - Professional About Page

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, CheckCircle, Shield, Clock, 
  ThumbsUp, Award, Users, Briefcase, 
  Building, Zap, Star, Phone, Mail,
  MapPin, Calendar, ClipboardList, TrendingUp,
  MessageSquare, Wrench, Lightbulb, Heart
} from "lucide-react";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION - Bold, Direct, Capable */}
      {/* ============================================ */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 bg-black/50 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-blue-400/30">
              <Users size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Who We Are</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
              One of Houston's Most{" "}
              <span className="text-blue-400">Competent & Dependable</span> Electrical Contractors
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl leading-relaxed">
              We show up prepared, communicate clearly, and execute with the schedule in mind. 
              No babysitting required. Just reliable commercial electrical work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR THESIS - Commercial-first, GC-ready */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
                <Zap size={14} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Our Thesis</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Built for the Jobsite. Ready for the Bid List.
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-4 rounded-full"></div>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Integra Electric & Construction is not a residential handyman service. 
                We are a serious electrical subcontractor with construction discipline.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The website leads with commercial electrical. Our messaging, CTAs, and 
                navigation are engineered around commercial trust. GCs and commercial 
                clients aren't browsing for vibes — they're looking for proof that 
                Integra can communicate, coordinate, bid, and execute.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Commercial-first</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>GC-ready</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Bid-driven</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Project proof</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/restraunt.jpg"
                alt="Integra Electric commercial electrical project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Commercial electrical work done clean, coordinated, and on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE MESSAGE SECTION - PDF Page 1 */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-yellow-400" />
            <span className="text-sm font-medium">Our Promise</span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            "Commercial electrical work done clean, coordinated, and on schedule."
          </h2>
          <p className="mt-6 text-blue-100 text-lg">
            No gimmicks. No hype. Just capable, disciplined electrical work.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT MAKES US DIFFERENT */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
              <TrendingUp size={14} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Makes Integra Different
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              We're not everything for everybody. We're engineered around commercial trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <MessageSquare size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Clear Communication</h3>
              <p className="text-gray-600 mt-2">We communicate scope before work starts and stay responsive during active projects.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <Briefcase size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Professional Jobsite</h3>
              <p className="text-gray-600 mt-2">Organized presence, clean execution, and respect for every trade on site.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Dependable Scheduling</h3>
              <p className="text-gray-600 mt-2">We show up when promised and keep the project moving.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Shield size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Code & Safety Focused</h3>
              <p className="text-gray-600 mt-2">Work performed with code, safety, and coordination in mind.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                <ClipboardList size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Bid Opportunities</h3>
              <p className="text-gray-600 mt-2">Bid opportunities welcomed for commercial projects. Add us to your list.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Award size={28} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5">Houston Local</h3>
              <p className="text-gray-600 mt-2">Proudly serving Houston and surrounding areas with local expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHO WE SERVE - Priority Audiences (PDF Page 2) */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
              <Users size={14} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Who We Serve</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Built for Commercial Clients
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              We understand what each audience needs to believe before picking up the phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <Building size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mt-4">General Contractors</h3>
              <p className="text-gray-600 text-sm mt-2">Integra can price, communicate, coordinate, and keep the job moving.</p>
              <div className="mt-4 inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                Add Us to Your Bid List
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <Briefcase size={32} className="text-green-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mt-4">Property Managers</h3>
              <p className="text-gray-600 text-sm mt-2">Integra can solve problems cleanly with minimal disruption.</p>
              <div className="mt-4 inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Request Commercial Service
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mt-4">Developers / Owners</h3>
              <p className="text-gray-600 text-sm mt-2">Integra can support build-outs and improvements professionally.</p>
              <div className="mt-4 inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                Schedule a Consultation
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <Heart size={32} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mt-4">Residential Clients</h3>
              <p className="text-gray-600 text-sm mt-2">Integra accepts select quality remodel work.</p>
              <div className="mt-4 inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                Explore Residential Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALUES SECTION - No-fluff confidence */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-300 mt-4 text-lg">The principles that guide our work</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mt-4">Confident</h3>
              <p className="text-gray-400 text-sm mt-2">Not cocky. Just capable.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="font-bold text-xl mt-4">Direct</h3>
              <p className="text-gray-400 text-sm mt-2">Not vague. Clear communication.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-xl mt-4">Commercial</h3>
              <p className="text-gray-400 text-sm mt-2">Not casual. Professional.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-bold text-xl mt-4">Competent</h3>
              <p className="text-gray-400 text-sm mt-2">Not flashy. Built on proof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <ClipboardList size={18} />
            <span className="text-sm">Ready to Work Together</span>
          </div>
          
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to work with a reliable electrical contractor?
          </h2>
          
          <p className="text-blue-100 mt-4 text-lg">
            Add Integra to your bid list for your next commercial project.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bid" 
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Request a Bid
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/commercial" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              View Commercial Services
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span>✓ Houston and surrounding areas</span>
            <span>✓ Available for subcontracting</span>
            <span>✓ Licensed & Insured</span>
            <span>✓ Commercial electrical focus</span>
          </div>
        </div>
      </section>

    </main>
  );
}