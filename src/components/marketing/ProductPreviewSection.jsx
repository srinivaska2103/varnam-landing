'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  IndianRupee,
  Users,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Filter,
  Layers,
  FileCheck,
  Search,
  ChevronRight,
  Send,
  Zap,
  BarChart3,
  Check,
} from 'lucide-react';

export default function ProductPreviewSection() {
  const [activeDate, setActiveDate] = useState(4); // Day selected in calendar
  const [pipelineFilter, setPipelineFilter] = useState('ALL');

  // Simulated live event data for calendar dates
  const calendarData = {
    4: {
      date: 'Wednesday, 04 November 2026',
      tag: 'Auspicious Muhurtham Peak',
      sessions: [
        {
          bride: 'Aiswarya Rajendran',
          service: 'Royal Muhurtham HD Airbrush + Saree Draping',
          time: '04:30 AM',
          venue: 'Taj Connemara Ballroom',
          team: 'Lead Artist + 2 Junior Drapers',
          status: 'Confirmed',
          price: '₹65,000',
          paid: '₹25,000 Advance Paid',
        },
        {
          bride: 'Keerthana Sundar',
          service: 'Traditional Muhurtham Look + Hair Flowers',
          time: '05:45 AM',
          venue: 'Leela Palace Grand Hall',
          team: 'Senior Stylist Priya',
          status: 'Confirmed',
          price: '₹42,000',
          paid: '₹15,000 Advance Paid',
        },
      ],
    },
    6: {
      date: 'Friday, 06 November 2026',
      tag: 'Consultation & Trial Day',
      sessions: [
        {
          bride: 'Kavya Soundar',
          service: 'Bridal Trial • Skin Prep & 2 Hairstyle Trials',
          time: '11:00 AM',
          venue: 'Studio Suite A',
          team: 'Lead Artist',
          status: 'Trial Scheduled',
          price: '₹5,000',
          paid: 'Fully Paid',
        },
        {
          bride: 'Meera Krishnan',
          service: 'Saree Pre-Pleating & Draping Review',
          time: '03:30 PM',
          venue: 'Studio Suite B',
          team: 'Draper Specialist',
          status: 'Trial Scheduled',
          price: '₹3,500',
          paid: 'Fully Paid',
        },
      ],
    },
    8: {
      date: 'Sunday, 08 November 2026',
      tag: 'Reception & Sangeet Evening',
      sessions: [
        {
          bride: 'Divya Narayanan',
          service: 'Grand Evening Reception Glam + 4 Bridesmaids',
          time: '05:00 PM',
          venue: 'ITC Grand Chola',
          team: 'Lead Artist + 3 Styling Assistants',
          status: 'Confirmed',
          price: '₹85,000',
          paid: '₹30,000 Advance Paid',
        },
      ],
    },
  };

  const currentDayInfo = calendarData[activeDate] || calendarData[4];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#F0E5DA] relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FFF0E5]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNMATCHED VISUAL CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            The Command Center for High-End Bridal Studios.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Experience an interactive full-width showcase of the VARNAM operating system: statistics, multi-event Muhurtham calendar, real-time enquiry pipeline, and payment summaries all in one unified cockpit.
          </p>
        </div>

        {/* Full-Width Interactive Showcase Container */}
        <div className="mt-16 rounded-3xl bg-stone-900 border border-stone-800 p-2.5 sm:p-4 shadow-2xl overflow-hidden transition-all duration-300">
          {/* Top Window Bar (Clean branding without the previous URL) */}
          <div className="flex items-center justify-between px-4 py-3 bg-stone-900 border-b border-stone-800 text-stone-400">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-xs font-bold text-stone-300 tracking-wider uppercase font-serif ml-1">
                VARNAM Studio Cockpit
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Studio Operating System
              </span>
            </div>
          </div>

          {/* Interactive Cockpit Canvas */}
          <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6 text-[#1F2937]">
            {/* Top Stat Ribbon with Interactive Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                <span className="text-xs text-[#6B7280] font-semibold block">Monthly Bridal Revenue</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mt-1 font-serif">₹5,40,000</div>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-bold">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>+18% vs last wedding season</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                <span className="text-xs text-[#6B7280] font-semibold block">Active Muhurtham Bookings</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mt-1 font-serif">32 Brides</div>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% advance collected</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                <span className="text-xs text-[#6B7280] font-semibold block">Pipeline Enquiries</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mt-1 font-serif">54 Leads</div>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-600 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>8 awaiting trial dates</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                <span className="text-xs text-[#6B7280] font-semibold block">Pending Balance Dues</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mt-1 font-serif">₹1,85,000</div>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-[#FF6B00] font-bold">
                  <span>Due on ceremony mornings</span>
                </div>
              </div>
            </div>

            {/* Split Grid: Interactive Calendar & Live Pipeline Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Interactive Visual Calendar & Event Inspector (7 cols) */}
              <div className="lg:col-span-7 rounded-2xl bg-white border border-[#F0E5DA] p-5 sm:p-6 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FF6B00]" />
                    <h4 className="text-base font-bold text-[#1F2937] font-serif">
                      Interactive November 2026 Calendar
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#FF6B00] bg-[#FFF0E5] px-2.5 py-0.5 rounded-full border border-[#FF6B00]/20">
                    Click dates below to inspect
                  </span>
                </div>

                {/* Interactive Day Clicker */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-2 block">
                    Select Auspicious Muhurtham Date
                  </span>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                      <span key={d} className="font-bold text-[#6B7280] text-[11px]">{d}</span>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                      const isSelected = activeDate === num;
                      const hasEvents = num === 4 || num === 6;

                      return (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setActiveDate(num === 4 || num === 6 ? num : 4)}
                          className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                            isSelected
                              ? 'bg-[#FF6B00] text-white shadow-md scale-105 ring-2 ring-[#FF6B00]/40'
                              : hasEvents
                              ? 'bg-[#FFF0E5] text-[#FF6B00] border border-[#FF6B00]/40 hover:bg-[#FF6B00] hover:text-white'
                              : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          <span className="text-sm">{num}</span>
                          <span className="text-[9px] font-normal mt-0.5">
                            {num === 4 ? '3 Brides' : num === 6 ? '2 Trials' : 'Open'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Day Event Schedule Breakdown */}
                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1F2937]">
                      Ceremonies Scheduled: {currentDayInfo.date}
                    </span>
                    <span className="text-[10px] font-bold text-[#FF6B00] bg-[#FFF0E5] px-2 py-0.5 rounded">
                      {currentDayInfo.tag}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {currentDayInfo.sessions.map((session, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-[#FFF8F0]/50 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#1F2937]">
                              {session.bride}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">
                              {session.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#6B7280]">
                            {session.service}
                          </p>
                          <p className="text-[11px] text-[#FF6B00] font-semibold">
                            {session.time} • {session.venue} • {session.team}
                          </p>
                        </div>

                        <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200/60">
                          <span className="text-sm font-extrabold text-[#1F2937] block">
                            {session.price}
                          </span>
                          <span className="text-[10px] text-emerald-600 font-bold block">
                            {session.paid}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Enquiry Funnel & Financial Summary (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Pipeline Funnel */}
                <div className="rounded-2xl bg-white border border-[#F0E5DA] p-5 sm:p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <h4 className="text-sm font-bold text-[#1F2937] font-serif">
                      Enquiry Conversion Funnel
                    </h4>
                    <span className="text-xs font-semibold text-[#6B7280]">Active Month</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>New Bridal Inquiries</span>
                        <span className="font-bold text-[#1F2937]">54</span>
                      </div>
                      <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Quotations Dispatched</span>
                        <span className="font-bold text-[#1F2937]">42 (78%)</span>
                      </div>
                      <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '78%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Confirmed Muhurtham Bookings</span>
                        <span className="font-bold text-[#FF6B00]">32 (59%)</span>
                      </div>
                      <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF6B00] rounded-full" style={{ width: '59%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Clearance Ledger */}
                <div className="rounded-2xl bg-white border border-[#F0E5DA] p-5 sm:p-6 shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <h4 className="text-sm font-bold text-[#1F2937] font-serif">
                      Advance & Balance Settlement
                    </h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Payment Record
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                    <div>
                      <span className="font-semibold block">Total Advances Collected</span>
                      <span className="text-[10px] text-emerald-700">Locked in bank account</span>
                    </div>
                    <span className="font-extrabold text-base">₹3,55,000</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                    <div>
                      <span className="font-semibold block">Due Upon Morning Call</span>
                      <span className="text-[10px] text-amber-700">Automated reminder queued</span>
                    </div>
                    <span className="font-extrabold text-base">₹1,85,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
