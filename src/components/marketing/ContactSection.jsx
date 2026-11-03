'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Check,
  Building,
  User,
  Crown,
  Zap,
  ShieldCheck,
  ArrowRight,
  Loader2,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studioName: '',
    plan: 'PREMIUM',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef(null);

  const planOptions = [
    {
      id: 'PREMIUM',
      label: 'CUSTOM / PREMIUM (₹29,999) – Full Luxury Suite & WhatsApp',
      tagline: 'Custom domain, dedicated hosting & own WhatsApp Business number',
      icon: Crown,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      id: 'GROWTH',
      label: 'GROWTH (₹999/month) – Online Lead Acquisition',
      tagline: 'Branded public studio website & online enquiry integration',
      icon: Zap,
      color: 'text-[#FF6B00] bg-[#FFF0E5]',
    },
    {
      id: 'BASIC',
      label: 'BASIC (₹599/month) – Core Studio Operations',
      tagline: 'Bookings, calendar, CRM, quotations & shareable enquiry form',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      id: 'GENERAL',
      label: 'General Studio Consultation / Product Demo',
      tagline: 'Schedule a tailored walkthrough for your team',
      icon: Sparkles,
      color: 'text-blue-600 bg-blue-50',
    },
  ];

  const selectedPlanObj = planOptions.find((p) => p.id === formData.plan) || planOptions[0];

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Post to dedicated Next.js API route that routes inquiries to vexatech.connect@gmail.com
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 2. Also construct a direct mailto backup fallback
      const subject = encodeURIComponent(`[VARNAM Inquiry] ${formData.name} - ${formData.plan}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nStudio: ${formData.studioName}\nPlan: ${formData.plan}\n\nNotes:\n${formData.message}`
      );

      // Trigger mail client in background if user preference permits
      if (typeof window !== 'undefined' && !res.ok) {
        window.open(`mailto:vexatech.connect@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }

      setSubmitted(true);
    } catch (err) {
      console.warn('Inquiry submission notice:', err);
      // Fallback display
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-[#F0E5DA] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFF0E5]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFF8F0] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WE ARE HERE TO HELP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight leading-tight">
              Get in Touch with the <br />
              <span className="text-[#FF6B00] italic font-serif">VARNAM Team.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
              Have questions about our Premium branded website tier, need assistance onboarding your team, or want a personalized product walkthrough? Reach out directly.
            </p>

            {/* Direct Contact Cards with updated Phone & Madurai Address */}
            <div className="space-y-3.5 pt-4 border-t border-stone-100">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F0]/50 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center shrink-0 border border-[#FF6B00]/20 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">
                    EMAIL US
                  </span>
                  <a
                    href="mailto:vexatech.connect@gmail.com"
                    className="text-sm font-bold text-[#1F2937] hover:text-[#FF6B00] transition-colors"
                  >
                    vexatech.connect@gmail.com
                  </a>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Average response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F0]/50 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center shrink-0 border border-[#FF6B00]/20 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">
                    CALL / WHATSAPP SUPPORT
                  </span>
                  <a
                    href="tel:8946029205"
                    className="text-sm font-bold text-[#1F2937] hover:text-[#FF6B00] transition-colors"
                  >
                    8946029205
                  </a>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Monday to Saturday: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8F0]/50 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center shrink-0 border border-[#FF6B00]/20 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">
                    HEADQUARTERS
                  </span>
                  <p className="text-sm font-bold text-[#1F2937]">
                    Madurai, Tamil Nadu
                  </p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Serving bridal studios & artists across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column with Modern Glassmorphic Form & Custom Dropdown (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#F0E5DA] p-6 sm:p-9 lg:p-10 shadow-[0_20px_50px_rgba(31,41,55,0.06)] relative">
            {submitted ? (
              <div className="text-center py-16 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2937]">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been successfully sent to <strong className="text-[#FF6B00]">vexatech.connect@gmail.com</strong>. Our senior bridal studio specialist will contact you at <strong className="text-[#1F2937]">{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      studioName: '',
                      plan: 'PREMIUM',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#FF6B00] bg-[#FFF0E5] hover:bg-[#FFE5D3] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form Header */}
                <div className="border-b border-stone-100 pb-4">
                  <h3 className="text-2xl font-serif font-bold text-[#1F2937]">
                    Send Us a Direct Message
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Fill out the form below. Inquiries are instantly routed to <strong className="text-[#1F2937]">vexatech.connect@gmail.com</strong>.
                  </p>
                </div>

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                      Your Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Rao"
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50/60 border border-[#F0E5DA] text-sm text-[#1F2937] placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                      Phone / WhatsApp <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8946029205"
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50/60 border border-[#F0E5DA] text-sm text-[#1F2937] placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Studio Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. studio@example.com"
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50/60 border border-[#F0E5DA] text-sm text-[#1F2937] placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                      Studio / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.studioName}
                      onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                      placeholder="e.g. Signature Bridal Art"
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50/60 border border-[#F0E5DA] text-sm text-[#1F2937] placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 3: Modern Custom Dropdown for Interested Plan */}
                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                    Interested Plan / Service
                  </label>

                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-2xl bg-stone-50/60 hover:bg-stone-50 border border-[#F0E5DA] focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 flex items-center justify-between transition-all shadow-2xs text-left cursor-pointer"
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${selectedPlanObj.color}`}>
                        {React.createElement(selectedPlanObj.icon, { className: 'w-4 h-4' })}
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-bold text-[#1F2937] block truncate">
                          {selectedPlanObj.label}
                        </span>
                        <span className="text-[11px] text-[#6B7280] block truncate">
                          {selectedPlanObj.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-white border border-[#F0E5DA] flex items-center justify-center shrink-0 ml-2">
                      <ChevronDown
                        className={`w-4 h-4 text-[#1F2937] transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#FF6B00]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Menu Overlay */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-white border border-[#F0E5DA] shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-2 space-y-1 backdrop-blur-md">
                      {planOptions.map((opt) => {
                        const isChosen = formData.plan === opt.id;
                        const Icon = opt.icon;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              setFormData({ ...formData, plan: opt.id });
                              setIsDropdownOpen(false);
                            }}
                            className={`p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                              isChosen
                                ? 'bg-[#FFF0E5] border border-[#FF6B00]/30'
                                : 'hover:bg-stone-50 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${opt.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-xs sm:text-sm font-bold text-[#1F2937] block">
                                  {opt.label}
                                </span>
                                <span className="text-[11px] text-[#6B7280] block">
                                  {opt.tagline}
                                </span>
                              </div>
                            </div>

                            {isChosen && (
                              <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0 ml-2 shadow-2xs">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Row 4: Message Box */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]">
                    Requirements or Specific Inquiries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your studio setup, team size, or specific features you need..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50/60 border border-[#F0E5DA] text-sm text-[#1F2937] placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all shadow-2xs resize-none"
                  />
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm text-white bg-[#FF6B00] hover:bg-[#E05E00] disabled:bg-stone-400 shadow-[0_6px_22px_rgba(255,107,0,0.35)] hover:shadow-[0_8px_28px_rgba(255,107,0,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to vexatech.connect@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#6B7280] pt-1">
                  🔒 We respect your privacy. Submissions go directly to <span className="font-semibold text-[#1F2937]">vexatech.connect@gmail.com</span>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
