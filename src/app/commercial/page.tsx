// app/commercial/page.tsx - Images Visibility Fixed

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Building, Lightbulb, Zap, 
  CheckCircle, ClipboardList, HomeIcon,
  Wrench, AlertTriangle, Settings, Activity,
  Shield, Clock, MessageSquare, Briefcase,
  Upload, Send, Phone, Mail, MapPin, Star,
  Award, ThumbsUp, Truck, Calendar, FileText
} from "lucide-react";

// ============================================
// HERO SECTION - Image Visible (Opacity 70%, less gradient)
// ============================================
function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image - Higher opacity */}
      <div className="absolute inset-0">
        <Image
          src="/commercial.jpg"
          alt="Commercial electrical installation project in Houston"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        {/* Less gradient overlay - image zyada dikhe */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 z-10">
        <div className={`max-w-4xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-blue-400/50">
            <Zap size={14} className="text-blue-300" />
            <span className="text-sm font-medium text-white">Houston's Premier Commercial Electrical Contractor</span>
          </div>
          
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Commercial Electrical Services for{" "}
            <span className="text-blue-400">
              Build-Outs, Improvements, and Service Work
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-white/90 sm:text-xl leading-relaxed">
            Integra Electric & Construction provides commercial electrical support for contractors and businesses 
            that need work done <span className="text-blue-300 font-medium">correctly, cleanly, and with respect for the schedule</span>. 
            We understand that electrical work affects every other trade, and our job is to help keep the project moving.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link 
              href="/bid" 
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
            >
              Request a Bid
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-black/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20"
            >
              <Briefcase size={20} />
              View Our Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Award size={16} className="text-blue-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Truck size={16} className="text-blue-400" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star size={16} className="text-blue-400" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SERVICES SECTION WITH ICONS 
// ============================================
function ServicesSection() {
  const services = [
    { name: "Tenant Build-Outs", icon: Building, desc: "Complete electrical for commercial tenant spaces", features: "Lighting • Power • Data", color: "from-blue-600 to-blue-700" },
    { name: "Commercial Lighting", icon: Lightbulb, desc: "LED installation, upgrades, and retrofits", features: "Energy Efficient • Modern", color: "from-cyan-600 to-blue-700" },
    { name: "Panel & Service Upgrades", icon: Zap, desc: "Modern panels for increased capacity", features: "100A to 4000A", color: "from-amber-600 to-orange-700" },
    { name: "Rough-In & Trim-Out", icon: Wrench, desc: "Professional rough-in and finishing work", features: "Precision • Quality", color: "from-green-600 to-teal-700" },
    { name: "Troubleshooting", icon: AlertTriangle, desc: "Fast diagnosis of electrical issues", features: "24/7 Response", color: "from-red-600 to-rose-700" },
    { name: "Maintenance & Repairs", icon: Settings, desc: "Ongoing commercial electrical maintenance", features: "Preventative • Reactive", color: "from-purple-600 to-indigo-700" },
    { name: "Dedicated Circuits", icon: Activity, desc: "Installation of dedicated circuits for equipment", features: "Heavy Equipment • IT", color: "from-pink-600 to-rose-700" },
    { name: "Code Corrections", icon: Shield, desc: "Bringing electrical systems up to code", features: "Safety First", color: "from-indigo-600 to-purple-700" },
    { name: "Small to Mid-Size Projects", icon: Briefcase, desc: "Flexible support for any project size", features: "No Job Too Complex", color: "from-emerald-600 to-teal-700" },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
            <Zap size={14} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Complete Commercial Electrical Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            From tenant build-outs to service upgrades — we handle it all
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6">{service.name}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{service.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-medium">{service.features}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// GC TRUST SECTION - Image Visible (Opacity 30%)
// ============================================
function GCTrustSection() {
  const trustPoints = [
    { title: "Clear Scope Communication", icon: MessageSquare, desc: "Before the work starts, we ensure everyone understands the scope", color: "from-blue-500 to-blue-600", stat: "100% Clear" },
    { title: "Professional Jobsite Presence", icon: Briefcase, desc: "Clean execution and organized worksite at all times", color: "from-green-500 to-teal-600", stat: "Zero Complaints" },
    { title: "Responsive Communication", icon: Clock, desc: "Quick responses during active projects", color: "from-purple-500 to-indigo-600", stat: "< 2 Hour Response" },
    { title: "Code & Safety Focused", icon: Shield, desc: "Work performed with code, safety, and coordination in mind", color: "from-red-500 to-rose-600", stat: "100% Compliant" },
    { title: "Bid Opportunities Welcomed", icon: ClipboardList, desc: "Add Integra to your commercial project bid list", color: "from-amber-500 to-orange-600", stat: "48hr Bid Turnaround" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Image - More visible (opacity 30%) */}
      <div className="absolute inset-0">
        <Image
          src="/electric.jpg"
          alt="Professional electrician working on commercial electrical panel"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        {/* Less gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <ThumbsUp size={14} className="text-blue-300" />
            <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">For General Contractors</span>
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">Why GCs Choose Integra</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-200 mt-4 text-lg">Built for contractors who need dependable electrical support without babysitting</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {trustPoints.map((point, i) => (
            <div key={i} className="group text-center p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <point.icon size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mt-4 text-white">{point.title}</h3>
              <p className="text-gray-200 text-sm mt-2 leading-relaxed">{point.desc}</p>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-xs text-blue-300 font-semibold">{point.stat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-600/30 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-400/40">
            <CheckCircle size={20} className="text-blue-300" />
            <span className="text-gray-100 font-medium">Bid opportunities welcomed for commercial projects — Add Integra to your bid list</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION WITH SMALL IMAGE
// ============================================
function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you! We will respond within 24 hours.');
      setIsSubmitting(false);
      setFormData({ name: '', company: '', email: '', phone: '', projectType: '', location: '', timeline: '', message: '' });
    }, 1000);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - CTA Message */}
            <div className="p-10 md:p-14 text-white relative overflow-hidden">
              {/* Small decorative image */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-15">
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-blue-400/40">
                  <FileText size={14} className="text-blue-300" />
                  <span className="text-sm font-medium text-blue-200">Get a Quote Today</span>
                </div>
                
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                  Need a reliable electrical contractor on your next project?
                </h2>
                
                <p className="text-gray-200 mt-6 leading-relaxed text-lg">
                  Send plans, photos, or project details and Integra will follow up quickly. 
                  We respond to all commercial inquiries within <span className="text-blue-300 font-semibold">24 hours</span>.
                </p>
                
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300">Call us directly</p>
                      <a href="tel:+18327902845" className="text-white text-lg font-semibold hover:text-blue-300 transition">832-790-2845</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300">Email us</p>
                      <a href="mailto:bids@integraelectric.com" className="text-white text-lg font-semibold hover:text-blue-300 transition">bids@integraelectric.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <MapPin size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300">Service Area</p>
                      <p className="text-white font-semibold">Houston and surrounding areas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-blue-600/30 backdrop-blur-sm rounded-xl border border-blue-400/30">
                  <p className="text-sm text-blue-200 font-semibold mb-3">What happens next?</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-gray-200">Review details</span>
                    </div>
                    <ArrowRight size={14} className="text-blue-400" />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-gray-200">Scope assessment</span>
                    </div>
                    <ArrowRight size={14} className="text-blue-400" />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-gray-200">Bid within 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 md:p-14 bg-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Send Project Details</h3>
                <p className="text-gray-500 mt-1">Fill out the form and we'll respond quickly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                      placeholder="(832) 790-2845"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Tenant Build-Out">Tenant Build-Out</option>
                      <option value="Commercial Electrical">Commercial Electrical</option>
                      <option value="Service Upgrade">Service Upgrade</option>
                      <option value="Lighting">Lighting Installation</option>
                      <option value="Troubleshooting">Troubleshooting</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Residential Remodel">Residential Remodel</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-gray-50"
                      placeholder="Houston, TX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediate (within 2 weeks)">Immediate (within 2 weeks)</option>
                    <option value="Short-term (1 month)">Short-term (1 month)</option>
                    <option value="Medium-term (2-3 months)">Medium-term (2-3 months)</option>
                    <option value="Long-term (3+ months)">Long-term (3+ months)</option>
                    <option value="Planning stage only">Planning stage only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details / Scope *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-gray-50"
                    placeholder="Describe your project, scope, or any specific requirements..."
                  ></textarea>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer group">
                  <Upload size={32} className="mx-auto text-gray-400 group-hover:text-blue-500 transition mb-3" />
                  <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition">Click to upload plans, photos, or documents</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG, DWG up to 10MB</p>
                  <input type="file" className="hidden" id="file-upload" multiple />
                  <label htmlFor="file-upload" className="inline-block mt-3 text-sm text-blue-600 cursor-pointer hover:text-blue-700 font-medium">
                    Browse files →
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending... <Calendar size={18} className="animate-spin" /></>
                  ) : (
                    <>Send Project Details <Send size={18} /></>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export default function CommercialPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <ServicesSection />
      <GCTrustSection />
      <CTASection />
    </main>
  );
}