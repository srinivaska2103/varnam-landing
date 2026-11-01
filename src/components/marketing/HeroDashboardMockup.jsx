'use client';

import React from 'react';
import {
  Users,
  CalendarCheck,
  IndianRupee,
  Calendar,
  Clock,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';

export default function HeroDashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl bg-white border border-[#F0E5DA] shadow-[0_20px_50px_rgba(255,107,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#FFF8F0]/80 border-b border-[#F0E5DA]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <span className="text-xs font-medium text-[#6B7280] ml-2 hidden sm:inline-block">
            app.varnam.vexatech.in/studio/dashboard
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FFF0E5] text-[#FF6B00] border border-[#FF6B00]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            Live Studio Preview
          </span>
        </div>
      </div>

      {/* Main Dashboard Canvas Preview */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 bg-white">
        {/* Studio Header Row inside dashboard */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] font-serif">
                Aara Bridal Studio & Academy
              </h3>
              <span className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-stone-100 text-[#6B7280] rounded">
                Active Season
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
              Today: Saturday, 1 Nov 2026 • 6 upcoming bridal sessions scheduled
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>92% Monthly Target Reached</span>
            </div>
          </div>
        </div>

        {/* 4 Key Metric Metric Cards Required: Total Enquiries, Upcoming Consultations, Confirmed Bookings, Revenue */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total Enquiries */}
          <div className="p-4 rounded-xl bg-[#FFF8F0]/60 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#6B7280]">Total Enquiries</span>
              <div className="w-8 h-8 rounded-lg bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-[#1F2937]">48</div>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-medium">
                <ArrowUpRight className="w-3 h-3" />
                <span>+14 this week</span>
              </div>
            </div>
          </div>

          {/* Card 2: Upcoming Consultations */}
          <div className="p-4 rounded-xl bg-[#FFF8F0]/60 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#6B7280]">Upcoming Consultations</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-[#1F2937]">12</div>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-600 font-medium">
                <span>3 scheduled today</span>
              </div>
            </div>
          </div>

          {/* Card 3: Confirmed Bookings */}
          <div className="p-4 rounded-xl bg-[#FFF8F0]/60 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#6B7280]">Confirmed Bookings</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CalendarCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-[#1F2937]">26</div>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>Muhurtham slots locked</span>
              </div>
            </div>
          </div>

          {/* Card 4: Revenue */}
          <div className="p-4 rounded-xl bg-[#FFF8F0]/60 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#6B7280]">Total Revenue</span>
              <div className="w-8 h-8 rounded-lg bg-stone-100 text-[#1F2937] flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-[#1F2937]">₹4,85,000</div>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-medium">
                <ArrowUpRight className="w-3 h-3" />
                <span>₹1,40,000 advances</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Studio Calendar & Recent Enquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Calendar Preview (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-[#F0E5DA] p-5 bg-[#FFF8F0]/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF6B00]" />
                <h4 className="text-sm font-semibold text-[#1F2937]">
                  Upcoming Studio Calendar
                </h4>
              </div>
              <span className="text-xs font-medium text-[#FF6B00] hover:underline cursor-pointer">
                View Month Grid
              </span>
            </div>

            {/* Event items */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#FFF0E5] text-[#FF6B00] flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold uppercase">NOV</span>
                  <span className="text-base font-extrabold leading-none">04</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#1F2937] truncate">
                      Priyanka R. • Muhurtham & Reception
                    </p>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    05:00 AM – Leela Palace Grand Ballroom • HD Airbrush + Saree Draping
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold uppercase">NOV</span>
                  <span className="text-base font-extrabold leading-none">06</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#1F2937] truncate">
                      Ananya Swaminathan • Trial Consultation
                    </p>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">
                      Consultation
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    02:30 PM – Studio Main Suite • Skin Analysis & Eye Makeup Trial
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-700 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold uppercase">NOV</span>
                  <span className="text-base font-extrabold leading-none">09</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#1F2937] truncate">
                      Keerthana M. • Sangeet & Haldi Look
                    </p>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-100 text-purple-800">
                      Advance Paid
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    04:00 PM – Taj West End • Glam Party Look + 3 Bridesmaids
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Enquiries Pipeline (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-[#F0E5DA] p-5 bg-[#FFF8F0]/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                <h4 className="text-sm font-semibold text-[#1F2937]">Recent Enquiries</h4>
              </div>
              <span className="text-xs font-semibold text-[#6B7280]">Real-Time Feed</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white border border-[#F0E5DA] space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1F2937]">Sneha Murthy</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                    Website Form
                  </span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Wedding on 14 Dec • Enquiring for Signature Luxury Package
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-[11px]">
                  <span className="text-stone-400">12 mins ago</span>
                  <span className="text-[#FF6B00] font-semibold flex items-center gap-0.5 cursor-pointer">
                    Create Quotation <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#F0E5DA] space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1F2937]">Harini Sundaram</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                    WhatsApp Enquiry
                  </span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Engagement & Muhurtham in Jan • Looking for saree stylist
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-[11px]">
                  <span className="text-stone-400">1 hr ago</span>
                  <span className="text-[#FF6B00] font-semibold flex items-center gap-0.5 cursor-pointer">
                    Schedule Trial <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#F0E5DA] space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1F2937]">Divya Narayanan</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">
                    Direct Studio Call
                  </span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Bride + Mother makeup • 18 Dec Morning Muhurtham
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-[11px]">
                  <span className="text-stone-400">3 hrs ago</span>
                  <span className="text-[#FF6B00] font-semibold flex items-center gap-0.5 cursor-pointer">
                    Send Proposal <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

