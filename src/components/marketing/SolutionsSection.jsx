'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  User,
  Building,
  Users2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Clock,
  Calendar,
  Wallet,
  Star,
} from 'lucide-react';

export default function SolutionsSection() {
  const [activePersona, setActivePersona] = useState(0);

  const solutions = [
    {
      id: 'solo-artist',
      title: 'Independent Bridal Makeup Artists',
      badge: 'Solo Artists',
      icon: User,
      subtitle: 'Elevate from chaotic WhatsApp chats to a polished luxury brand.',
      description:
        'Ideal for freelance bridal artists managing their own bookings, travel schedules, and client trials. Look 10x more professional with instant digital quotes, structured advance tracking, and an elegant portfolio website.',
      benefits: [
        'Centralize inquiries received via Instagram DM & WhatsApp',
        'Send branded digital quotes instead of awkward text messages',
        'Automatic payment advance tracking and receipt generation',
        'Never double-book high-value Muhurtham morning dates',
      ],
      recommendedPlan: 'Starter or Growth',
      stats: { primary: '5-15', label: 'Weddings / Month', metric: '₹1.5L - ₹4.5L Revenue' },
      simulation: {
        title: 'Freelance Artist Command Box',
        action: '1-Tap Quote to Bride on WhatsApp',
        preview: 'Bride asks: "Can you send packages for Nov 18?" -> Dispatches itemized digital link in 10 seconds.',
        highlight: 'Zero Administrative Burnout',
      },
    },
    {
      id: 'studios',
      title: 'Bridal Makeup Studios',
      badge: 'Studio Owners',
      icon: Building,
      subtitle: 'Streamline salon appointments, bridal trials, and walk-in consultations.',
      description:
        'Designed for established bridal studios with dedicated consultation suites. Manage multiple dressing stations, skincare trials, saree pre-pleating services, and staff schedules in a unified dashboard.',
      benefits: [
        'Organize multi-room trial schedules and bridal prep suites',
        'Manage full service menus: Airbrush, HD, Saree Draping & Hair',
        'Track studio overhead expenses, kit refills & staff fees',
        'Dedicated studio website with direct online booking forms',
      ],
      recommendedPlan: 'Growth or Premium',
      stats: { primary: '15-40', label: 'Brides / Season', metric: '₹5L - ₹15L Revenue' },
      simulation: {
        title: 'Studio Suite Coordination',
        action: 'Multi-Room Dressing & Trial Visualizer',
        preview: 'Room 1: Airbrush Trial (Keerthana) • Room 2: Saree Pleating (Priyanka) • Room 3: Reception Prep.',
        highlight: 'Station Efficiency Maximized',
      },
    },
    {
      id: 'teams',
      title: 'Makeup Artist Teams & Collectives',
      badge: 'Teams & Crews',
      icon: Users2,
      subtitle: 'Coordinate lead artists, junior stylists, and draper assistants seamlessly.',
      description:
        'For high-volume bridal teams catering to large bridal parties (bride, mother, bridesmaids, relatives). Easily delegate ceremonies to specific artists, track team assignments, and share clear call times.',
      benefits: [
        'Assign lead and assistant artists to specific wedding events',
        'Share bride look notes, allergies & reference photos across the team',
        'Track artist commissions and freelancer payout expenses',
        'Real-time schedule visibility across multiple concurrent weddings',
      ],
      recommendedPlan: 'Growth or Premium',
      stats: { primary: '30+', label: 'Ceremonies / Peak Wknd', metric: 'Multiple Simultaneous Crews' },
      simulation: {
        title: 'Crew Delegation Cockpit',
        action: 'Automated Team Call Sheet Dispatch',
        preview: 'Lead Stylist: Meera (04:30 AM Leela) • Junior Draper: Anjali (05:00 AM Taj) • Hair Assistant: Priya.',
        highlight: 'Zero Missing Stylists',
      },
    },
    {
      id: 'enterprises',
      title: 'Growing Beauty Businesses & Academies',
      badge: 'Luxury Enterprises',
      icon: TrendingUp,
      subtitle: 'Full luxury suite with a custom-hosted branded website on your own domain.',
      description:
        'For bridal academies, multi-city bridal artists, and luxury beauty enterprises looking to establish an authoritative independent digital presence on their own custom domain name with dedicated hosting.',
      benefits: [
        'Bespoke branded business website on your own custom domain',
        'Dedicated high-performance hosting with 1 year free domain & server',
        'Complete CRM, quotations, payments, and multi-event architecture',
        'VIP concierge onboarding and priority support',
      ],
      recommendedPlan: 'Premium Enterprise',
      stats: { primary: 'Enterprise', label: 'Multi-City Reach', metric: 'Custom Domain Included' },
      simulation: {
        title: 'Custom Brand Infrastructure',
        action: 'yourstudio.com Independent SaaS Profile',
        preview: 'Dedicated server hosting • White-labeled portal • Custom domain SSL • VIP 24/7 Concierge Setup.',
        highlight: 'Prestige Market Authority',
      },
    },
  ];

  const currentSolution = solutions[activePersona];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#FFF8F0]/40 border-b border-[#F0E5DA] relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[600px] h-[400px] bg-[#FFF0E5] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TAILORED FOR EVERY STAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Solutions Built for Your Studio Model.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Whether you are an independent freelance bridal artist or a multi-location luxury bridal collective, VARNAM adapts to your exact workflow.
          </p>
        </div>

        {/* Interactive Persona Pill Tabs */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 custom-scrollbar">
          {solutions.map((item, idx) => {
            const isSelected = activePersona === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActivePersona(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#FF6B00] text-white shadow-[0_4px_16px_rgba(255,107,0,0.35)] scale-102'
                    : 'bg-white text-[#6B7280] border border-[#F0E5DA] hover:text-[#1F2937] hover:border-[#FF6B00]/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.badge}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Cards Grid with Active Live Highlight */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activePersona === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActivePersona(idx)}
                className={`group relative rounded-3xl p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#FF6B00] shadow-[0_20px_50px_rgba(255,107,0,0.12)] -translate-y-1.5'
                    : 'bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Recommended Plan */}
                  <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#FF6B00] text-white shadow-md scale-105'
                            : 'bg-[#FFF0E5] text-[#FF6B00]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] block">
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-600">
                          {item.stats.metric}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border transition-colors ${
                        isSelected
                          ? 'bg-[#FFF0E5] text-[#FF6B00] border-[#FF6B00]/30'
                          : 'bg-stone-50 text-stone-600 border-stone-200'
                      }`}
                    >
                      {item.recommendedPlan}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-[#1F2937] mt-5 mb-1.5 group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#FF6B00] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Benefit Points */}
                  <div className="space-y-2.5 pt-3 border-t border-stone-100">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#1F2937]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Simulation Capsule */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1F2937]">
                      {item.stats.primary} {item.stats.label}
                    </span>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00]"
                  >
                    <span>View Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Persona Simulator Cockpit */}
        <div className="mt-12 rounded-3xl bg-white border border-[#F0E5DA] p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] block">
                  Interactive Studio Workflow Simulation
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#1F2937]">
                  {currentSolution.simulation.title} ({currentSolution.badge})
                </h4>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{currentSolution.simulation.highlight}</span>
            </span>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-[#FFF8F0]/60 border border-[#F0E5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">
                Real-Time Operation: {currentSolution.simulation.action}
              </span>
              <p className="text-xs sm:text-sm text-[#1F2937] font-medium leading-relaxed">
                {currentSolution.simulation.preview}
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#1F2937] hover:bg-black shrink-0 transition-colors shadow-xs"
            >
              <span>Explore {currentSolution.recommendedPlan}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
