'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XCircle,
  CheckCircle2,
  MessageSquareWarning,
  Sparkles,
  ArrowRight,
  Zap,
  Clock,
  Calendar,
  Wallet,
  Users,
} from 'lucide-react';

export default function ProblemSolutionSection() {
  const [activeItem, setActiveItem] = useState(0);

  const comparisons = [
    {
      id: 'enquiries',
      title: 'Enquiry Chaos vs Central Pipeline',
      icon: MessageSquareWarning,
      category: 'Lead Capture',
      problem: {
        headline: 'Scattered Across WhatsApp, DMs & Phone Calls',
        description:
          'Enquiries get buried under personal chats and unread direct messages. Customer dates are lost in paper diaries, and urgent bridal inquiries go cold before you can reply.',
        tag: 'Lost Opportunities',
      },
      solution: {
        headline: 'One Centralized Bridal Inquiry Cockpit',
        description:
          'Every request from your website, WhatsApp, and social media enters a unified pipeline with automatic date availability checks and 1-click quote conversion.',
        tag: '100% Lead Visibility',
        metric: '3x Faster Response Time',
      },
      interactiveDemo: {
        beforeText: 'Bride DM on Instagram: "Available on Nov 18?" (Left on read for 2 days)',
        afterText: 'Instant auto-intake: Muhurtham Nov 18 locked, quote dispatched via WhatsApp in 2 mins',
      },
    },
    {
      id: 'consultations',
      title: 'Missed Trials vs Automated Scheduling',
      icon: Clock,
      category: 'Client Conversion',
      problem: {
        headline: 'Missed Follow-Ups & Confusing Trial Dates',
        description:
          'Brides book trials over casual calls without clear time slots. No reminders are dispatched, leading to last-minute cancellations, no-shows, and lost high-ticket bookings.',
        tag: 'Wasted Studio Time',
      },
      solution: {
        headline: 'Automated Consultation Queue with Reminders',
        description:
          'Lock consultation slots with clear preparation instructions, automated WhatsApp reminders, and consultation history logged directly under the bride profile.',
        tag: '95% Trial Turnout',
        metric: 'Zero No-Shows',
      },
      interactiveDemo: {
        beforeText: 'No reminder sent -> Bride forgets consultation, artist waits 2 hours idle',
        afterText: 'Automated 24h & 2h WhatsApp reminders + trial skin prep checklist dispatched',
      },
    },
    {
      id: 'calendar',
      title: 'Double Booking vs Muhurtham Visualizer',
      icon: Calendar,
      category: 'Studio Schedule',
      problem: {
        headline: 'Confusing Schedules & Auspicious Date Clashes',
        description:
          'Muhurtham dates often bring multiple concurrent ceremony requests. Double-booking morning call-times causes catastrophic wedding day stress and studio reputation damage.',
        tag: 'Double-Booking Risk',
      },
      solution: {
        headline: 'Conflict-Free Visual Studio Calendar',
        description:
          'Color-coded timeline displaying multi-day ceremonies (Haldi, Muhurtham, Reception) with automated conflict detection and assigned junior stylist crews.',
        tag: 'Clash-Free Guarantee',
        metric: '100% Muhurtham Accuracy',
      },
      interactiveDemo: {
        beforeText: 'Artist accidentally booked 2 brides for 05:00 AM on the same auspicious morning',
        afterText: 'System flags time conflict immediately upon enquiry entry and prevents overlap',
      },
    },
    {
      id: 'payments',
      title: 'Notebook Tracking vs Instant Receipts',
      icon: Wallet,
      category: 'Financial Control',
      problem: {
        headline: 'Manual Payment Tracking in Paper Notebooks',
        description:
          'Unclear advance balances, scribbled notebook notes, and awkward ceremony morning payment conversations create tension between artists and clients.',
        tag: 'Uncollected Revenue',
      },
      solution: {
        headline: 'Digital Quotations, Advance Tracking & Receipts',
        description:
          'Issue branded digital estimates and receipts. Track exactly what has been collected via UPI/Cash and what is due upon arrival with automatic balance reminders.',
        tag: 'Full Balance Recovery',
        metric: 'Instant UPI Receipts',
      },
      interactiveDemo: {
        beforeText: 'Awkward chat: "Did you send the advance last week or was it cash?"',
        afterText: 'Digital itemized quotation showing ₹25,000 advance verified + ₹50,000 balance receipt',
      },
    },
    {
      id: 'operations',
      title: 'Event Confusion vs Crew Assignment',
      icon: Users,
      category: 'Logistics',
      problem: {
        headline: 'Disorganized Assistants, Venues & Travel Details',
        description:
          'Assistant hairstylists and saree drapers don’t receive reporting addresses or call times, resulting in delayed starts on time-critical wedding mornings.',
        tag: 'Morning Logistics Delay',
      },
      solution: {
        headline: 'Structured Bridal Event Agendas & Team Briefs',
        description:
          'Every ceremony includes venue GPS coordinates, client look reference photos, assistant assignments, and exact call-time reporting schedules.',
        tag: 'Flawless Execution',
        metric: 'On-Time Delivery Every Time',
      },
      interactiveDemo: {
        beforeText: 'Assistant draper arrives 45 mins late at the wrong venue banquet hall',
        afterText: 'Crew receives digital itinerary with exact ballroom, venue GPS & 04:30 AM call time',
      },
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFF0E5] rounded-full blur-3xl opacity-80 pointer-events-none -z-10"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200/80 shadow-2xs">
            <MessageSquareWarning className="w-3.5 h-3.5 text-rose-600" />
            <span>THE REALITY OF BRIDAL STUDIO CHAOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Stop Juggling Chats. <br />
            <span className="text-[#FF6B00] italic font-serif">Start Running a Master Studio.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Compare the daily friction of managing a growing bridal studio manually versus the peace of mind, luxury polish, and operational precision provided by VARNAM.
          </p>
        </motion.div>

        {/* Interactive Problem vs Solution Cockpit */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Interactive Scenario Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 custom-scrollbar">
            {comparisons.map((item, idx) => {
              const isSelected = activeItem === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#1F2937] text-white shadow-md'
                      : 'bg-white text-[#6B7280] border border-[#F0E5DA] hover:text-[#1F2937] hover:border-[#FF6B00]/40'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#FF6B00]' : 'bg-stone-300'}`} />
                  <span>{item.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Featured Transformation Comparison Card with Animated Presence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-6 rounded-3xl bg-white border border-[#F0E5DA] shadow-xl overflow-hidden"
            >
              {/* Top Transformation Banner */}
              <div className="px-6 py-4 bg-[#FFF8F0]/80 border-b border-[#F0E5DA] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF6B00]">
                    Scenario 0{activeItem + 1} of 05:
                  </span>
                  <span className="text-sm font-bold text-[#1F2937] font-serif">
                    {comparisons[activeItem].title}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{comparisons[activeItem].solution.metric}</span>
                </div>
              </div>

              {/* Side-by-Side Comparison Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F0E5DA]">
                {/* Left Column: The Problem */}
                <div className="p-7 sm:p-9 space-y-5 bg-rose-50/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                      <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                        <XCircle className="w-4 h-4" />
                      </div>
                      <span>Manual Studio Friction</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
                      {comparisons[activeItem].problem.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#1F2937]">
                    {comparisons[activeItem].problem.headline}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {comparisons[activeItem].problem.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white border border-rose-200/80 shadow-2xs space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      What Typically Happens:
                    </span>
                    <p className="text-xs text-stone-700 italic">
                      &ldquo;{comparisons[activeItem].interactiveDemo.beforeText}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right Column: The Solution */}
                <div className="p-7 sm:p-9 space-y-5 bg-[#FFFDF9]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>With VARNAM Platform</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {comparisons[activeItem].solution.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#1F2937]">
                    {comparisons[activeItem].solution.headline}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {comparisons[activeItem].solution.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#FFF8F0] border border-[#FF6B00]/30 shadow-2xs space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FF6B00]" />
                      How VARNAM Solves It:
                    </span>
                    <p className="text-xs text-stone-800 font-medium">
                      {comparisons[activeItem].interactiveDemo.afterText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Interactive Switcher Footer */}
              <div className="px-6 py-4 bg-stone-50 border-t border-[#F0E5DA] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-[#6B7280] font-medium">
                  Click any category above to view that workflow transformation.
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveItem((prev) => (prev > 0 ? prev - 1 : comparisons.length - 1))}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#F0E5DA] font-bold text-[#1F2937] hover:bg-stone-100 cursor-pointer"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setActiveItem((prev) => (prev < comparisons.length - 1 ? prev + 1 : 0))}
                    className="px-3 py-1.5 rounded-lg bg-[#FF6B00] text-white font-bold hover:bg-[#E05E00] cursor-pointer"
                  >
                    Next Scenario →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
