'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  HeartHandshake,
  Target,
  ShieldCheck,
  MapPin,
  TrendingUp,
  Award,
  Users2,
  CalendarCheck,
  Check,
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: CalendarCheck,
      title: 'Built for Bridal Realities',
      desc: 'Purpose-engineered for auspicious Muhurtham dates, early morning wedding slots, multi-day functions, and bridal trial scheduling without double bookings.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Reliability',
      desc: 'Bank-grade encrypted database protection, automated WhatsApp reminders, and real-time quotation engines that keep client and pricing records safe.',
    },
    {
      icon: HeartHandshake,
      title: 'Artist-First Mission',
      desc: 'Empowering makeup artists, hair stylists, and bridal salons across India to run professional, highly lucrative businesses without operational burnout.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-[#F0E5DA] relative overflow-hidden scroll-mt-20">
      {/* Background warm ambiance */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#FF8533]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About VARNAM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight leading-tight"
          >
            Redefining the Operating System for{' '}
            <span className="text-[#FF6B00] relative inline-block">
              Bridal Artistry.
              <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#FF6B00]/15 -z-10 rounded-sm" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed"
          >
            We are on a mission to free bridal artists from paperwork chaos, missed inquiries, and calendar clashes — so you can focus entirely on creating unforgettable bridal transformations.
          </motion.p>
        </div>

        {/* Narrative & Metrics 2-Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Story Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FFF8F0] border border-[#F0E5DA] text-xs font-bold text-[#FF6B00]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Conceived & Developed by VEXA TECH • Tamil Nadu, India</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
              Crafted with Deep Empathy for Wedding Makeup Artists & Stylists
            </h3>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
              Indian weddings are uniquely grand, multi-event occasions. Traditional generic booking software never understood Muhurtham timings, bridal trial dates, family package split-ups, or WhatsApp-driven customer inquiries.
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
              <strong>VARNAM</strong> was architected from the ground up to solve these exact friction points. Built with love by engineers, designers, and bridal studio owners, our platform brings clarity, peace of mind, and financial predictability to every artist&apos;s busy season.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F0E5DA]">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#FF6B00]">100%</p>
                <p className="text-xs text-[#6B7280] mt-1 font-semibold">Bridal Workflow Specialized</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F0E5DA]">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">24/7</p>
                <p className="text-xs text-[#6B7280] mt-1 font-semibold">Dedicated Studio Support</p>
              </div>
            </div>
          </motion.div>

          {/* Pillars Card Grid (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FFF8F0]/70 border border-[#F0E5DA] hover:bg-[#FFF8F0] hover:border-[#FF6B00]/40 transition-all duration-200 shadow-2xs group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E05E00] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#1F2937] mb-1 group-hover:text-[#FF6B00] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
