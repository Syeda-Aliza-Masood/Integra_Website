// app/contact/page.tsx - No CTA Section

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, 
  CheckCircle, Building, Briefcase, Users,
  Send, MessageSquare, Star, Shield, Truck,
} from "lucide-react";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <main className="bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 bg-black/50 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-blue-400/30">
              <MessageSquare size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Get in Touch</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
              Let's Talk About{" "}
              <span className="text-blue-400">Your Next Project</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl leading-relaxed">
              Have a question? Need a bid? Our team is ready to help. Reach out today 
              and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT INFO CARDS */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Call Us</h3>
              <a href="tel:+18327902845" className="text-gray-600 hover:text-blue-600 transition block mt-1">
                832-790-2845
              </a>
              <p className="text-xs text-gray-400 mt-2">Mon-Fri, 7am-6pm</p>
            </div>

            {/* Email Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Email Us</h3>
              <a href="mailto:info@integraelectric.com" className="text-gray-600 hover:text-blue-600 transition block mt-1">
                info@integraelectric.com
              </a>
              <a href="mailto:bids@integraelectric.com" className="text-gray-600 hover:text-blue-600 transition block text-sm">
                bids@integraelectric.com
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <MapPin size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Service Area</h3>
              <p className="text-gray-600 mt-1">Houston and surrounding areas</p>
              <p className="text-xs text-gray-400 mt-2">Katy • Cypress • Sugar Land • The Woodlands</p>
            </div>

            {/* Hours Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Clock size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">Business Hours</h3>
              <p className="text-gray-600 mt-1">Monday - Friday: 7am - 6pm</p>
              <p className="text-gray-600">Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FORM + INFO SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-2 rounded-full"></div>
                <p className="text-gray-500 mt-2">Fill out the form and we'll respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
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
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                      placeholder="(832) 790-2845"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Bid">Request a Bid</option>
                      <option value="Commercial Service">Commercial Service</option>
                      <option value="Residential Service">Residential Service</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-gray-50"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending... <Clock size={18} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Integra?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield size={18} className="text-blue-200" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={18} className="text-yellow-400" />
                    <span>5-Star Rated on Google</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck size={18} className="text-blue-200" />
                    <span>24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-blue-200" />
                    <span>100% Customer Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-blue-200" />
                    <span>Fast Response Time</span>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  We respond to all inquiries within <strong className="text-blue-600">24 hours</strong>. 
                  For emergency electrical issues, call us immediately at 
                  <a href="tel:+18327902845" className="text-blue-600 font-semibold"> 832-790-2845</a>.
                </p>
              </div>

              {/* Google Reviews Link */}
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="flex justify-center gap-1 mb-3">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 font-medium">"Professional, reliable, and on time"</p>
                <p className="text-gray-500 text-sm mt-1">- Happy Client</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Read more reviews on Google
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICE AREA SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
              <MapPin size={14} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Service Area</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">We Serve Houston & Beyond</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Houston", "Katy", "Cypress", "Pearland",
              "Spring", "Sugar Land", "The Woodlands", "Richmond",
              "Missouri City", "League City", "Pasadena", "Baytown"
            ].map((city, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle size={16} className="text-blue-600" />
                <span className="text-gray-700">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}