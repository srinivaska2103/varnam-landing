'use client';

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTASection() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
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
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#FFF8F0] border-b border-[#F0E5DA] overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[750px] h-[300px] sm:h-[450px] bg-gradient-to-r from-[#FF6B00]/15 via-[#FF8533]/10 to-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#F0E5DA] shadow-xs text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>Transform Your Studio Today</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F2937] tracking-tight leading-[1.15]"
        >
          Your Bridal Studio Deserves{' '}
          <span className="text-[#FF6B00] relative inline-block">
            Better Management.
            <span className="absolute left-0 bottom-1 sm:bottom-1.5 w-full h-2 sm:h-2.5 bg-[#FF6B00]/15 -z-10 rounded-sm" />
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Bring every enquiry, consultation, booking and payment together with{' '}
          <strong className="text-[#1F2937] font-semibold">VARNAM</strong>. Deliver an extraordinary bridal client experience from day one.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href="#pricing"
            onClick={(e) => handleScrollTo(e, '#pricing')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#FF6B00]/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="https://app.varnam.vexatech.in/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-[#1F2937] bg-white border border-[#F0E5DA] hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 shadow-xs cursor-pointer"
          >
            <span>Studio Login</span>
          </a>
        </motion.div>

        {/* Feature / Trust Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-stone-600"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F0E5DA] shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
            <span className="font-medium text-[#1F2937]">Dedicated setup assistance</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F0E5DA] shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
            <span className="font-medium text-[#1F2937]">Cancel or change plans anytime</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F0E5DA] shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="font-medium text-[#1F2937]">A Product of VEXA TECH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
