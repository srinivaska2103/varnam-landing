'use client';

import React, { useState } from 'react';
import {
  Users,
  CalendarCheck,
  IndianRupee,
  Calendar,
  Clock,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Filter,
  Plus,
  Send,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function InteractiveHeroDashboard() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'calendar' | 'enquiries'
  const [selectedEnquiry, setSelectedEnquiry] = useState(0);

  const enquiries = [
    {
      name: 'Priyanka R.',
      date: '04 Nov 2026',
      event: 'Muhurtham & Reception',
      package: 'HD Airbrush Luxury',
      venue: 'Leela Palace Grand Ballroom',
      status: 'Confirmed',
      advance: '₹25,000',
      total: '₹65,000',
      time: '04:30 AM',
      tag: 'Wedding',
    },
    {
      name: 'Ananya S.',
      date: '06 Nov 2026',
      event: 'Bridal Trial Consultation',
      package: 'Pre-Bridal Glow + Hair Trial',
      venue: 'Studio Main Suite',
      status: 'Consultation',
      advance: '₹3,000',
      total: '₹5,000',
      time: '02:30 PM',
      tag: 'Trial',
    },
    {
      name: 'Keerthana M.',
      date: '09 Nov 2026',
      event: 'Sangeet & Haldi Party',
      package: 'Cocktail Glam Look (3 Pax)',
      venue: 'Taj West End Lawn',
      status: 'Advance Paid',
      advance: '₹15,000',
      total: '₹42,000',
      time: '04:00 PM',
      tag: 'Party',
    },
  ];

  const currentEnquiry = enquiries[selectedEnquiry];

  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#F0E5DA] shadow-[0_20px_50px_rgba(255,107,0,0.1),0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(255,107,0,0.14)]">
      {/* Top Application Browser Bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#FFF8F0]/90 border-b border-[#F0E5DA]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[11px] font-mono font-medium text-[#6B7280] ml-2 hidden sm:inline-block">
            app.varnam.vexatech.in/dashboard
          </span>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#F0E5DA]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-[#FF6B00] text-white shadow-2xs'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            Metrics
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
              activeTab === 'calendar'
                ? 'bg-[#FF6B00] text-white shadow-2xs'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
              activeTab === 'enquiries'
                ? 'bg-[#FF6B00] text-white shadow-2xs'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            Pipeline
          </button>
        </div>
      </div>

      {/* Main Studio Interactive Dashboard Body */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-4 bg-white">
        {/* Studio Profile Strip */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#1F2937] font-serif">
                Aara Bridal Studio
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Live
              </span>
            </div>
            <p className="text-[11px] text-[#6B7280]">
              November Peak Season • 6 sessions this weekend
            </p>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold text-[#FF6B00] bg-[#FFF0E5] px-2.5 py-1 rounded-lg border border-[#FF6B00]/20">
            <Sparkles className="w-3 h-3" />
            <span>Smart Automation Active</span>
          </div>
        </div>

        {/* 4 Essential Metric Cards (Total Enquiries, Upcoming Consultations, Confirmed Bookings, Revenue) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {/* Card 1: Total Enquiries */}
          <div className="p-3 rounded-xl bg-[#FFF8F0]/70 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#6B7280]">Total Enquiries</span>
              <div className="w-6 h-6 rounded-md bg-[#FFF0E5] text-[#FF6B00] flex items-center justify-center">
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline justify-between">
              <span className="text-xl font-bold text-[#1F2937]">48</span>
              <span className="text-[10px] text-emerald-600 font-semibold">+14 this wk</span>
            </div>
          </div>

          {/* Card 2: Upcoming Consultations */}
          <div className="p-3 rounded-xl bg-[#FFF8F0]/70 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#6B7280]">Consultations</span>
              <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline justify-between">
              <span className="text-xl font-bold text-[#1F2937]">12</span>
              <span className="text-[10px] text-amber-600 font-semibold">3 today</span>
            </div>
          </div>

          {/* Card 3: Confirmed Bookings */}
          <div className="p-3 rounded-xl bg-[#FFF8F0]/70 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#6B7280]">Confirmed Bookings</span>
              <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CalendarCheck className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline justify-between">
              <span className="text-xl font-bold text-[#1F2937]">26</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Slots locked</span>
            </div>
          </div>

          {/* Card 4: Revenue */}
          <div className="p-3 rounded-xl bg-[#FFF8F0]/70 border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#6B7280]">Total Revenue</span>
              <div className="w-6 h-6 rounded-md bg-stone-100 text-[#1F2937] flex items-center justify-center">
                <IndianRupee className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline justify-between">
              <span className="text-xl font-bold text-[#1F2937]">₹4.85L</span>
              <span className="text-[10px] text-emerald-600 font-semibold">₹1.4L adv</span>
            </div>
          </div>
        </div>

        {/* Tab 1: Interactive Studio Pipeline */}
        {activeTab === 'overview' || activeTab === 'enquiries' ? (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1F2937] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                Recent Enquiries & Bookings
              </span>
              <span className="text-[10px] text-[#6B7280]">Click bride to inspect</span>
            </div>

            {/* List of Enquiries with click to inspect */}
            <div className="space-y-2">
              {enquiries.map((item, idx) => {
                const isSelected = selectedEnquiry === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedEnquiry(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#FFF0E5]/60 border-[#FF6B00] shadow-xs'
                        : 'bg-white border-[#F0E5DA] hover:bg-[#FFF8F0]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-[#FF6B00] text-white'
                            : 'bg-stone-100 text-[#1F2937]'
                        }`}
                      >
                        {item.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-[#1F2937] truncate">
                            {item.name}
                          </p>
                          <span className="text-[9px] px-1.5 py-0.2 rounded font-semibold bg-stone-100 text-[#6B7280]">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#6B7280] truncate">
                          {item.event} • {item.date}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#1F2937] block">
                        {item.total}
                      </span>
                      <span
                        className={`text-[9px] font-bold ${
                          item.status === 'Confirmed'
                            ? 'text-emerald-600'
                            : 'text-[#FF6B00]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Bride Drawer Preview */}
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1F2937]">
                  Selected: {currentEnquiry.name} ({currentEnquiry.package})
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {currentEnquiry.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-[#6B7280]">
                <div>
                  <span className="text-stone-400 block">Reporting Call Time:</span>
                  <span className="font-semibold text-stone-800">{currentEnquiry.time}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Venue:</span>
                  <span className="font-semibold text-stone-800 truncate block">
                    {currentEnquiry.venue}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-stone-200">
                <button
                  type="button"
                  className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center gap-1 hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Send WhatsApp Info</span>
                </button>
                <button
                  type="button"
                  className="flex-1 py-1.5 rounded-lg bg-white border border-[#F0E5DA] text-[10px] font-bold text-[#1F2937] hover:bg-stone-50 transition-colors"
                >
                  View Quotation
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Tab 2: Interactive Studio Muhurtham Calendar */}
        {activeTab === 'calendar' ? (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1F2937] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                Muhurtham Calendar (Nov 2026)
              </span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Zero Double Bookings
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day} className="font-bold text-stone-400">{day}</span>
              ))}
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const isSelected = num === 4 || num === 6;
                return (
                  <div
                    key={num}
                    className={`py-2 px-1 rounded-lg border text-center font-bold transition-all ${
                      num === 4
                        ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-xs'
                        : num === 6
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-white text-stone-700 border-stone-100'
                    }`}
                  >
                    <span>{num}</span>
                    <span className="block text-[8px] font-normal opacity-90">
                      {num === 4 ? 'Muhurtham' : num === 6 ? 'Trials' : 'Open'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-[#FFF8F0] border border-[#F0E5DA] space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-bold text-[#1F2937]">
                <span>Wed, Nov 4 • Leela Palace</span>
                <span className="text-[#FF6B00]">04:30 AM</span>
              </div>
              <p className="text-[11px] text-[#6B7280]">
                Bride Priyanka R. • Lead Artist + 2 Junior Stylists assigned
              </p>
            </div>
          </div>
        ) : null}

        {/* Live Studio Footer Indicator */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-[#6B7280] border-t border-stone-100">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Automatic UPI Receipting Ready
          </span>
          <span className="font-mono text-[#FF6B00]">app.varnam.vexatech.in</span>
        </div>
      </div>
    </div>
  );
}

