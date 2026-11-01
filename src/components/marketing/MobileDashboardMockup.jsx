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
  Wifi,
  Battery,
  Signal,
  Bell,
  Home,
  UserCheck,
  FileText,
  Settings,
  Heart,
  Check,
} from 'lucide-react';

export default function MobileDashboardMockup() {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'calendar'
  const [selectedEnquiry, setSelectedEnquiry] = useState(0);
  const [whatsappSent, setWhatsappSent] = useState(false);

  const enquiries = [
    {
      name: 'Priyanka R.',
      date: '04 Nov • 04:30 AM',
      event: 'Muhurtham & Reception',
      package: 'HD Airbrush Look',
      venue: 'Leela Palace Ballroom',
      status: 'Confirmed',
      advance: '₹25,000',
      total: '₹65,000',
      tag: 'Wedding',
    },
    {
      name: 'Ananya S.',
      date: '06 Nov • 02:30 PM',
      event: 'Bridal Trial Consultation',
      package: 'Pre-Bridal Skincare',
      venue: 'Studio Suite A',
      status: 'Trial Scheduled',
      advance: '₹3,000',
      total: '₹5,000',
      tag: 'Trial',
    },
    {
      name: 'Keerthana M.',
      date: '09 Nov • 04:00 PM',
      event: 'Sangeet & Haldi Glam',
      package: 'Party Look (3 Pax)',
      venue: 'Taj West End Lawn',
      status: 'Advance Paid',
      advance: '₹15,000',
      total: '₹42,000',
      tag: 'Party',
    },
  ];

  const currentEnquiry = enquiries[selectedEnquiry];

  const handleSendWhatsApp = (e) => {
    e.stopPropagation();
    setWhatsappSent(true);
    setTimeout(() => {
      setWhatsappSent(false);
    }, 2800);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] animate-phone-float group">
      {/* Interactive Floating Halo Glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/20 to-amber-500/20 rounded-[52px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity -z-10"
        aria-hidden="true"
      />

      {/* Smartphone Outer Chassis with Realistic Luxury Shadow */}
      <div className="relative rounded-[44px] bg-[#1F2937] p-3 shadow-[0_30px_70px_rgba(255,107,0,0.22),0_15px_30px_rgba(0,0,0,0.18)] ring-1 ring-stone-900/10 transition-transform duration-300 group-hover:scale-[1.015]">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-stone-900 rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-950/80 ring-1 ring-white/10" />
        </div>

        {/* Mobile Screen Surface */}
        <div className="relative rounded-[36px] bg-[#FFFDF9] overflow-hidden border border-stone-200/80 text-[#1F2937]">
          {/* iOS-Style Status Bar */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-stone-700 bg-white border-b border-stone-100">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-stone-700" />
              <Wifi className="w-3 h-3 text-stone-700" />
              <Battery className="w-4 h-4 text-stone-700" />
            </div>
          </div>

          {/* In-App Header */}
          <div className="px-4 py-3 bg-white border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FFF0E5] text-[#FF6B00] font-serif font-bold text-xs flex items-center justify-center border border-[#FF6B00]/20 shadow-2xs">
                V
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1F2937] leading-none">
                    VARNAM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-[9px] text-[#6B7280]">Aara Bridal Studio</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-[9px] font-bold border border-[#FF6B00]/20">
                Peak Season
              </span>
              <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                <Bell className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Scrollable Screen Content Area */}
          <div className="p-3.5 space-y-3 max-h-[480px] overflow-y-auto custom-scrollbar bg-[#FFFDF9]">
            {/* Quick 4 Stats Grid in Mobile View */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7280]">Total Enquiries</span>
                  <Users className="w-3 h-3 text-[#FF6B00]" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-lg font-bold text-[#1F2937]">48</span>
                  <span className="text-[9px] text-emerald-600 font-bold">+14</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7280]">Consultations</span>
                  <Clock className="w-3 h-3 text-amber-600" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-lg font-bold text-[#1F2937]">12</span>
                  <span className="text-[9px] text-amber-600 font-bold">3 today</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7280]">Bookings</span>
                  <CalendarCheck className="w-3 h-3 text-emerald-600" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-lg font-bold text-[#1F2937]">26</span>
                  <span className="text-[9px] text-emerald-600 font-bold">Locked</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#F0E5DA] shadow-2xs hover:border-[#FF6B00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7280]">Total Revenue</span>
                  <IndianRupee className="w-3 h-3 text-[#1F2937]" />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-lg font-bold text-[#1F2937]">₹4.85L</span>
                  <span className="text-[9px] text-emerald-600 font-bold">₹1.4L adv</span>
                </div>
              </div>
            </div>

            {/* In-App Interactive Tab Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-stone-100 border border-stone-200">
              <button
                type="button"
                onClick={() => setActiveTab('pipeline')}
                className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeTab === 'pipeline'
                    ? 'bg-white text-[#FF6B00] shadow-2xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Recent Inquiries ({enquiries.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('calendar')}
                className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  activeTab === 'calendar'
                    ? 'bg-white text-[#FF6B00] shadow-2xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Muhurtham Calendar
              </button>
            </div>

            {/* Tab 1: Inquiries List */}
            {activeTab === 'pipeline' && (
              <div className="space-y-2">
                {enquiries.map((item, idx) => {
                  const isSelected = selectedEnquiry === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedEnquiry(idx)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#FFF0E5]/70 border-[#FF6B00] shadow-2xs ring-1 ring-[#FF6B00]/20'
                          : 'bg-white border-[#F0E5DA] hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#FF6B00] text-white shadow-2xs'
                              : 'bg-stone-100 text-[#1F2937]'
                          }`}
                        >
                          {item.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#1F2937] truncate">
                            {item.name}
                          </p>
                          <p className="text-[9px] text-[#6B7280] truncate">
                            {item.event}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#1F2937] block">
                          {item.total}
                        </span>
                        <span
                          className={`text-[8px] font-bold ${
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

                {/* Selected Client Card Action */}
                <div className="p-3 rounded-2xl bg-white border border-[#F0E5DA] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#1F2937] block">
                        {currentEnquiry.name}
                      </span>
                      <span className="text-[9px] text-[#6B7280]">
                        {currentEnquiry.date} • {currentEnquiry.venue}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {currentEnquiry.advance} Advance
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className={`flex-1 py-1.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1 shadow-2xs transition-all cursor-pointer ${
                        whatsappSent
                          ? 'bg-emerald-700 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {whatsappSent ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Dispatched to WhatsApp!</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Bride</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-bold transition-colors cursor-pointer"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Muhurtham Calendar Mobile */}
            {activeTab === 'calendar' && (
              <div className="p-3 rounded-2xl bg-white border border-[#F0E5DA] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>November 2026</span>
                  <span className="text-[9px] text-[#FF6B00] bg-[#FFF0E5] px-2 py-0.5 rounded">
                    Muhurtham Season
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[9px]">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <span key={i} className="font-bold text-stone-400">{d}</span>
                  ))}
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div
                      key={num}
                      className={`py-1.5 rounded-md font-bold text-[9px] ${
                        num === 4
                          ? 'bg-[#FF6B00] text-white shadow-2xs'
                          : num === 6
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-stone-50 text-stone-700'
                      }`}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-[#FFF8F0] border border-[#F0E5DA] text-[10px] space-y-0.5">
                  <div className="font-bold text-[#1F2937] flex justify-between">
                    <span>Nov 4 • Leela Palace</span>
                    <span className="text-[#FF6B00]">04:30 AM</span>
                  </div>
                  <p className="text-[9px] text-[#6B7280]">
                    Bride Priyanka • Muhurtham Look locked with 2 stylists
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="px-5 py-2.5 bg-white border-t border-stone-100 flex items-center justify-between text-stone-400">
            <div
              onClick={() => setActiveTab('pipeline')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
                activeTab === 'pipeline' ? 'text-[#FF6B00]' : 'hover:text-stone-700'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-[8px] font-bold">Home</span>
            </div>
            <div
              onClick={() => setActiveTab('calendar')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
                activeTab === 'calendar' ? 'text-[#FF6B00]' : 'hover:text-stone-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-[8px] font-medium">Calendar</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
              <FileText className="w-4 h-4" />
              <span className="text-[8px] font-medium">Quotes</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
              <Settings className="w-4 h-4" />
              <span className="text-[8px] font-medium">Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Alert Pill that hops with the device */}
      <div className="absolute -bottom-3 -left-3 bg-white border border-[#F0E5DA] shadow-xl rounded-2xl py-2 px-3 flex items-center gap-2 group-hover:scale-105 transition-transform duration-200">
        <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="text-[10px]">
          <span className="font-bold text-[#1F2937] block leading-none">Instant WhatsApp Alert</span>
          <span className="text-stone-400 text-[9px]">Enquiries routed 24/7</span>
        </div>
      </div>
    </div>
  );
}
