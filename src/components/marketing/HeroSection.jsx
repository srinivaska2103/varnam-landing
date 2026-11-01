'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import MobileDashboardMockup from './MobileDashboardMockup';

export default function HeroSection() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#FFF8F0]">
      {/* Background radial accent glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#FFF0E5] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern 2-Column Split: Hero Content on Left, Mobile App Device on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F0E5DA] shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#FF6B00]">
                THE FUTURE OF BRIDAL STUDIO MANAGEMENT
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1F2937] tracking-tight leading-[1.12]"
            >
              Your Bridal Business, <br />
              <span className="italic font-serif text-[#FF6B00]">Beautifully Managed.</span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg font-semibold text-[#1F2937]/90 leading-snug"
            >
              More Bookings. Less Busywork. More Beautiful Experiences.
            </motion.p>

            {/* Benefit Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-xl"
            >
              Manage enquiries, consultations, bridal bookings, customers, quotations, payments and your entire studio from one beautifully simple platform.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                onClick={(e) => handleScrollTo(e, '#pricing')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05E00] shadow-[0_4px_18px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_24px_rgba(255,107,0,0.45)] transition-colors cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                onClick={(e) => handleScrollTo(e, '#features')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#1F2937] bg-white border border-[#F0E5DA] hover:bg-stone-50 hover:border-[#FF6B00]/40 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Explore Features</span>
              </motion.a>
            </motion.div>

            {/* Trust bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 text-xs font-medium text-[#6B7280]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Built specifically for bridal artists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant WhatsApp & Email alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No credit card required for onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-event Muhurtham calendar</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Smartphone Mobile App Dashboard with Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <MobileDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
