'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Inbox,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Globe,
  Share2,
  FileSpreadsheet,
  Wallet,
  MessageCircle,
  Play,
  Zap,
  Check,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Step 1: Capture Enquiries',
      subheading: 'Turn social visitors into verified bridal leads automatically.',
      description:
        'Receive customer enquiries effortlessly through your public website, shareable enquiry forms, and direct WhatsApp links. Every request logs wedding dates, preferred packages, and contact details automatically.',
      icon: Inbox,
      highlight: 'Unified Leads Intake',
      details: [
        'Branded shareable link for your Instagram bio & WhatsApp profile',
        'Built-in availability checking for requested Muhurtham dates',
        'Automatic alert notifications straight to your phone',
      ],
      interactiveWidget: {
        title: 'Step 1 Live Simulation: Lead Capture',
        badge: 'Incoming Online Form',
        headline: 'Bride Enquiry via Social Bio Link',
        items: [
          { label: 'Bride Name', value: 'Sneha Murthy (+91 98765 12345)' },
          { label: 'Auspicious Date', value: 'Sunday, 14 Dec 2026' },
          { label: 'Ceremony Type', value: 'Traditional Muhurtham + Sangeet' },
          { label: 'Preferred Look', value: 'Airbrush HD Bridal Signature' },
        ],
        liveActionText: 'Lead Captured -> Date Checked -> Alert Dispatched',
        statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      },
    },
    {
      step: '02',
      title: 'Step 2: Manage Your Studio',
      subheading: 'Organize consultations, trials, bookings, and payments with zero chaos.',
      description:
        'Organize consultations, trial makeup sessions, itemized quotations, multi-event bridal bookings, and payments from one clean screen. Free yourself from misplaced notebooks and confusing chat histories.',
      icon: CalendarCheck,
      highlight: 'Flawless Operations',
      details: [
        'Send professional itemized quotations with payment terms',
        'Lock Muhurtham and Reception slots without double booking',
        'Track advance deposits, milestone installments, and balance dues',
      ],
      interactiveWidget: {
        title: 'Step 2 Live Simulation: Studio Workflow',
        badge: 'Contract & Muhurtham Slot',
        headline: 'Automated Quote & Advance Logging',
        items: [
          { label: 'Quotation Generated', value: 'QT-2026-89 • ₹65,000 Total Value' },
          { label: 'Advance Deposit', value: '₹20,000 Collected via UPI / Bank Transfer' },
          { label: 'Calendar Status', value: '14 Dec Muhurtham 04:30 AM Locked' },
          { label: 'Crew Assigned', value: 'Lead Artist + 2 Junior Drapers' },
        ],
        liveActionText: 'Slot Guaranteed -> Digital Receipt Sent -> Team Notified',
        statusColor: 'text-[#FF6B00] bg-[#FFF0E5] border-[#FF6B00]/30',
      },
    },
    {
      step: '03',
      title: 'Step 3: Grow Your Business',
      subheading: 'Command luxury rates, automate client touchpoints, and scale clientele.',
      description:
        'Track performance, automate reminders, keep expenses in check, and elevate the client experience. Command higher rates and book out your entire bridal season with unshakeable confidence.',
      icon: TrendingUp,
      highlight: 'Studio Expansion',
      details: [
        'Automated reminders for bride trial dates & morning call times',
        'Real-time revenue, expense, and profitability reports',
        'Delighted brides who refer their friends and family',
      ],
      interactiveWidget: {
        title: 'Step 3 Live Simulation: Business Growth',
        badge: 'Season Performance',
        headline: 'Client Experience & Revenue Tracking',
        items: [
          { label: 'Annual Season Target', value: '₹18,50,000 Booked (92% to goal)' },
          { label: 'Client Satisfaction', value: '100% On-Time Muhurtham Delivery' },
          { label: 'WhatsApp Reminders', value: 'Automated 24h & 2h Skin Prep Guides' },
          { label: 'Word-of-Mouth Referrals', value: '14 Bridesmaid bookings acquired' },
        ],
        liveActionText: 'Season Target Met -> High Margins -> Luxury Studio Status',
        statusColor: 'text-purple-700 bg-purple-50 border-purple-200',
      },
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#F0E5DA] relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FFF8F0] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EFFORTLESS 3-STEP JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            How VARNAM Works. <br />
            <span className="text-[#FF6B00] italic font-serif">From First Inquiry to Final Muhurtham.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Experience a streamlined operational workflow engineered specifically around the Indian bridal season.
          </p>
        </div>

        {/* 3 Step Interactive Selector Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFF8F0] border-2 border-[#FF6B00] shadow-[0_20px_45px_rgba(255,107,0,0.14)] -translate-y-2'
                    : 'bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#F0E5DA]">
                    <span
                      className={`font-serif text-3xl sm:text-4xl font-extrabold transition-colors ${
                        isSelected ? 'text-[#FF6B00]' : 'text-stone-300 group-hover:text-[#FF6B00]'
                      }`}
                    >
                      {item.step}
                    </span>

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#FF6B00] text-white shadow-[0_4px_14px_rgba(255,107,0,0.35)] scale-105'
                          : 'bg-[#FFF0E5] text-[#FF6B00] border border-[#FF6B00]/20'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#1F2937] mt-5 mb-1.5 group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF6B00] mb-3">
                    {item.highlight}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#1F2937]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span className="font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Indicator Button */}
                <div className="mt-6 pt-4 border-t border-[#F0E5DA]/80 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold transition-colors flex items-center gap-1 ${
                      isSelected ? 'text-[#FF6B00]' : 'text-[#6B7280]'
                    }`}
                  >
                    <span>{isSelected ? 'Currently Viewing' : 'View Step Simulation'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'translate-x-1' : ''}`} />
                  </span>

                  <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#FF6B00] animate-ping' : 'bg-stone-300'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Step Simulation Showcase Box */}
        <div className="mt-12 rounded-3xl bg-[#FFF8F0]/70 border border-[#F0E5DA] p-6 sm:p-9 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F0E5DA]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase bg-[#FF6B00] text-white">
                  Step {currentStep.step} Live Simulation
                </span>
                <span className="text-xs font-bold text-[#6B7280]">Interactive Studio Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2937]">
                {currentStep.interactiveWidget.headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                {currentStep.subheading}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${currentStep.interactiveWidget.statusColor}`}>
                {currentStep.interactiveWidget.badge}
              </span>
            </div>
          </div>

          {/* Interactive Simulation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {currentStep.interactiveWidget.items.map((row, rIdx) => (
              <div
                key={rIdx}
                className="p-4 rounded-2xl bg-white border border-[#F0E5DA] shadow-2xs space-y-1"
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B7280] block">
                  {row.label}
                </span>
                <span className="text-xs font-bold text-[#1F2937] block leading-snug">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Flow status strip */}
          <div className="mt-6 pt-4 border-t border-[#F0E5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#FF6B00] font-bold">
              <Zap className="w-4 h-4 text-[#FF6B00]" />
              <span>Studio Flow: {currentStep.interactiveWidget.liveActionText}</span>
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F2937] hover:text-[#FF6B00] transition-colors"
            >
              <span>Ready to automate your studio? Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
