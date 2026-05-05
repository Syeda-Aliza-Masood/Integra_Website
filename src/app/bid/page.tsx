// app/bid/page.tsx - Fixed

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, CheckCircle, Upload, Send, 
  Phone, Mail, MapPin, Clock, FileText, 
  Star, Shield, Truck, Briefcase, Building,
  Calendar, User, Building2, PhoneCall
} from "lucide-react";

export default function BidPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    projectLocation: '',
    timeline: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);  // ← Separate state for file

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);  // ← Fixed
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, file: selectedFile });
      alert('Thank you! We will respond within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        projectType: '',
        projectLocation: '',
        timeline: '',
        message: ''
      });
      setSelectedFile(null);
    }, 1000);
  };

  return (
    <main className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/50 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <FileText size={14} className="text-blue-400" />
              <span className="text-sm font-medium">Request a Bid</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Submit Your Project for a{" "}
              <span className="text-blue-400">Commercial Electrical Bid</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tell us about your project and we'll respond with a detailed quote within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BUILDERS */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="text-blue-600" />
              <span>Houston and surrounding areas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase size={16} className="text-blue-600" />
              <span>Available for subcontracting</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield size={16} className="text-blue-600" />
              <span>Commercial electrical focus</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star size={16} className="text-yellow-500" />
              <span>5-Star Rated on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+18327902845" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Call us directly</p>
                        <p className="font-semibold">832-790-2845</p>
                      </div>
                    </a>
                    <a href="mailto:bids@integraelectric.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email us</p>
                        <p className="font-semibold">bids@integraelectric.com</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Response Time</p>
                        <p className="font-semibold">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Why Choose Integra?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-200" />
                      <span>Licensed & Insured</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-200" />
                      <span>Commercial Focus</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-200" />
                      <span>Fast Turnaround</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-200" />
                      <span>Clean Jobsite</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-200" />
                      <span>Clear Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Request a Bid</h2>
                  <p className="text-gray-500 mt-1">Fill out the form below and we'll respond within 24 hours</p>
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        placeholder="ABC Construction"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        placeholder="(832) 790-2845"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        placeholder="john@company.com"
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
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      placeholder="Describe your project, scope, or any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition cursor-pointer group">
                    <Upload size={32} className="mx-auto text-gray-400 group-hover:text-blue-500 transition mb-3" />
                    <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition">Click to upload plans, photos, or documents</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG, DWG up to 10MB</p>
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.dwg"
                    />
                    <label 
                      htmlFor="file-upload" 
                      className="inline-block mt-3 text-sm text-blue-600 cursor-pointer hover:text-blue-700 font-medium"
                    >
                      Browse files →
                    </label>
                    {selectedFile && (
                      <p className="text-xs text-green-600 mt-2">
                        ✓ {selectedFile.name} uploaded
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending... <Calendar size={18} className="animate-spin" /></>
                    ) : (
                      <>Send Bid Request <Send size={18} /></>
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

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Need a Quote Fast?</h2>
          <p className="mt-4 text-blue-100">Call us directly for immediate assistance</p>
          <a 
            href="tel:+18327902845" 
            className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-xl mt-6 hover:shadow-xl transition-all hover:scale-105"
          >
            <PhoneCall size={24} />
            Call 832-790-2845
          </a>
          <p className="mt-4 text-sm text-blue-200">Available Monday-Friday, 7am-6pm</p>
        </div>
      </section>

    </main>
  );
}