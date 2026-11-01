'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Inbox,
  CalendarCheck2,
  FileSpreadsheet,
  Wallet,
  Clock,
  Layers,
  Heart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function TrustAndValueSection() {
  const [activeCard, setActiveCard] = useState(0);

  const values = [
    {
      id: 'inquiries',
      icon: Inbox,
      title: 'Unified Bridal Inquiries',
      tagline: 'Multi-Channel Intake',
      highlight: 'Zero Lead Leaks',
      description:
        'Never lose a bride to unread WhatsApp chats or Instagram DMs. Funnel every booking request into one structured pipeline with event dates, venue locations, and guest counts.',
      badge: 'Leads Pipeline',
      interactivePreview: {
        title: 'Incoming Bridal Requests',
        metric: '48 Inquiries Active',
        items: [
          { name: 'Meera K.', source: 'WhatsApp', date: 'Nov 18 Muhurtham', status: 'Quote Sent' },
          { name: 'Swetha R.', source: 'Website Form', date: 'Dec 02 Reception', status: 'Trial Booked' },
        ],
        badgeColor: 'bg-emerald-50 text-emerald-700',
      },
    },
    {
      id: 'calendar',
      icon: CalendarCheck2,
      title: 'Conflict-Free Muhurtham Calendar',
      tagline: 'Auspicious Scheduling',
      highlight: 'Collision Detection',
      description:
        'Easily visualize multi-event weddings, early morning bridal makeup slots, trials, and touch-ups with automated clash detection across multiple bridal dates.',
      badge: 'Muhurtham Engine',
      interactivePreview: {
        title: 'Morning Slots Visualizer',
        metric: 'Nov 2026 Peak Dates',
        items: [
          { name: 'Leela Palace Grand Hall', source: '04:30 AM Call', date: 'Nov 04', status: 'Locked' },
          { name: 'Taj Connemara Suite', source: '05:00 AM Call', date: 'Nov 08', status: 'Assigned' },
        ],
        badgeColor: 'bg-[#FFF0E5] text-[#FF6B00]',
      },
    },
    {
      id: 'quotations',
      icon: FileSpreadsheet,
      title: 'Tailored Bridal Quotations',
      tagline: 'Branded Estimates',
      highlight: '1-Click PDF & Link',
      description:
        'Generate branded, professional bridal quotes covering bride look, bridesmaids, mother-of-the-bride packages, travel expenses, and early-morning fees in seconds.',
      badge: 'Smart Quotations',
      interactivePreview: {
        title: 'Instant Quote Generator',
        metric: '₹75,000 Package Value',
        items: [
          { name: 'Bride HD Airbrush Look', source: 'Includes Trial', date: '1 Muhurtham', status: '₹45,000' },
          { name: 'Bridesmaids + Saree Draping', source: '3 Members', date: 'Reception', status: '₹30,000' },
        ],
        badgeColor: 'bg-purple-50 text-purple-700',
      },
    },
    {
      id: 'payments',
      icon: Wallet,
      title: 'Transparent Payment Tracking',
      tagline: 'Advance Settlements',
      highlight: 'UPI & Cash Receipts',
      description:
        'Track initial booking advances, milestone installments, and final payments before bridal delivery with automated receipt generation and balance reminders.',
      badge: 'Ledger & Receipts',
      interactivePreview: {
        title: 'Advance vs Pending Balance',
        metric: '₹3.55L Cleared',
        items: [
          { name: 'Advance Milestone (30%)', source: 'UPI Verified', date: 'Paid Online', status: '₹25,000' },
          { name: 'Ceremony Balance Due', source: 'Due Morning Call', date: 'Pending', status: '₹50,000' },
        ],
        badgeColor: 'bg-blue-50 text-blue-700',
      },
    },
    {
      id: 'packages',
      icon: Layers,
      title: 'Curated Services & Looks',
      tagline: 'Digital Service Menu',
      highlight: 'Bundled Offerings',
      description:
        'Showcase your signature packages: Airbrush HD, Traditional Muhurtham, Christian Bridal, Sangeet Glam, and Saree Draping with transparent terms.',
      badge: 'Package Catalog',
      interactivePreview: {
        title: 'Signature Bridal Tiers',
        metric: '5 Curated Packages',
        items: [
          { name: 'Signature Royal Muhurtham', source: 'Airbrush + Hair', date: 'Full Day', status: 'Popular' },
          { name: 'Cocktail & Sangeet Glow', source: 'Glam + Lashes', date: 'Evening', status: 'Active' },
        ],
        badgeColor: 'bg-amber-50 text-amber-700',
      },
    },
    {
      id: 'website',
      icon: ShieldCheck,
      title: 'Your Dedicated Studio Website',
      tagline: 'Online Client Acquisition',
      highlight: 'Social Bio Ready',
      description:
        'Delight potential brides with a personalized public studio profile where clients can explore your portfolio, services, and submit instant enquiries 24/7.',
      badge: 'Custom Domain Ready',
      interactivePreview: {
        title: 'Live Studio Showcase',
        metric: 'Active Lookbook & Bio',
        items: [
          { name: 'High-Res Bridal Gallery', source: '64 Looks Uploaded', date: 'Portfolio', status: 'Live' },
          { name: 'Direct Enquiry Form', source: 'Routes to WhatsApp', date: 'Instant', status: 'Online' },
        ],
        badgeColor: 'bg-emerald-50 text-emerald-700',
      },
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#F0E5DA] relative overflow-hidden">
      {/* Subtle modern background gradient orbs */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFF0E5]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFF8F0] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BRIDAL EXCELLENCE IN EVERY STEP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Everything Your Bridal Studio Needs. <br />
            <span className="text-[#FF6B00] italic font-serif">All in One Place.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Bridal artistry is an art form, but running a bridal business shouldn&apos;t be chaos. VARNAM equips makeup artists and studio owners with specialized tools to organize daily operations, present luxury professionalism, and deliver an elevated bridal client experience.
          </p>
        </motion.div>

        {/* 6 Interactive Modern Cards Grid with Staggered Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {values.map((item, idx) => {
            const Icon = item.icon;
            const isHoveredOrActive = activeCard === idx;
            const preview = item.interactivePreview;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActiveCard(idx)}
                onClick={() => setActiveCard(idx)}
                className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHoveredOrActive
                    ? 'bg-[#FFF8F0] border-2 border-[#FF6B00] shadow-[0_20px_45px_rgba(255,107,0,0.12)]'
                    : 'bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Interactive Pill */}
                  <div className="flex items-center justify-between pb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isHoveredOrActive
                          ? 'bg-[#FF6B00] text-white shadow-[0_4px_14px_rgba(255,107,0,0.35)] scale-105'
                          : 'bg-[#FFF0E5] text-[#FF6B00] border border-[#FF6B00]/20'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                        isHoveredOrActive
                          ? 'bg-white text-[#FF6B00] border border-[#FF6B00]/30 font-extrabold shadow-2xs'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#1F2937] mt-2 mb-1.5 group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF6B00] mb-2.5">
                    {item.tagline} • {item.highlight}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Micro Interactive Live Widget Preview inside each card */}
                  <div className="mt-5 p-3 rounded-2xl bg-white/90 border border-[#F0E5DA] space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#1F2937] pb-1 border-b border-stone-100">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                        {preview.title}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${preview.badgeColor}`}>
                        {preview.metric}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {preview.items.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between text-[10px] py-1 px-1.5 rounded-lg bg-stone-50/70"
                        >
                          <div className="truncate pr-2">
                            <span className="font-bold text-[#1F2937] block truncate">{row.name}</span>
                            <span className="text-[#6B7280] text-[9px]">{row.source} • {row.date}</span>
                          </div>
                          <span className="font-bold text-[#FF6B00] shrink-0">{row.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Modern Indicator */}
                <div className="mt-6 pt-4 border-t border-[#F0E5DA]/80 flex items-center justify-between text-xs font-bold">
                  <span
                    className={`transition-colors flex items-center gap-1 ${
                      isHoveredOrActive ? 'text-[#FF6B00]' : 'text-[#6B7280]'
                    }`}
                  >
                    <span>Explore Workflow</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isHoveredOrActive ? 'translate-x-1' : ''
                      }`}
                    />
                  </span>

                  <span className="text-[10px] text-stone-400 font-mono">0{idx + 1}/06</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
