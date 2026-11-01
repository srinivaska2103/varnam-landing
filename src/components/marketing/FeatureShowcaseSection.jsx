'use client';

import React, { useState } from 'react';
import {
  Inbox,
  Clock,
  Users,
  CalendarCheck2,
  Calendar,
  Sparkles,
  FileSpreadsheet,
  Wallet,
  TrendingDown,
  BarChart3,
  MessageCircle,
  Mail,
  Globe,
  Crown,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  IndianRupee,
  Layers,
  Search,
  Filter,
  Check,
  ChevronDown,
} from 'lucide-react';

export default function FeatureShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All 14 Modules' },
    { id: 'CLIENTS', label: 'Leads & CRM' },
    { id: 'SCHEDULE', label: 'Bookings & Calendar' },
    { id: 'FINANCE', label: 'Quotes & Payments' },
    { id: 'COMMUNICATION', label: 'Automation & Web' },
  ];

  const features = [
    {
      id: 'enquiry-management',
      number: '01',
      title: 'Enquiry Management',
      category: 'CLIENTS',
      tagline: 'Never lose a lead from WhatsApp, website forms, or phone calls.',
      icon: Inbox,
      description:
        'Capture incoming leads automatically with event dates, functions required, guest count, and venue details. Transition leads from initial enquiry to quotation to confirmed bridal booking seamlessly.',
      badge: 'Core Engine',
      points: [
        'Multi-channel enquiry capture (Web, WhatsApp, Direct call)',
        'Event date conflict detection on entry',
        'Direct 1-click conversion to Consultation or Quotation',
      ],
      preview: {
        type: 'enquiry',
        tag: 'New Inquiries Feed',
        accentColor: 'text-[#FF6B00]',
        items: [
          { title: 'Priyanka R.', subtitle: 'Nov 04 • Muhurtham & Reception', badge: 'New Lead', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Kavya S.', subtitle: 'Nov 12 • Engagement HD Makeup', badge: 'Quoted', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'Swetha M.', subtitle: 'Dec 02 • Sangeet & Bridal Glam', badge: 'Contacted', badgeColor: 'bg-amber-100 text-amber-800' },
        ],
        highlightLabel: 'Active Pipeline',
        highlightValue: '48 Leads',
        actionBtn: 'Convert to Quotation',
      },
    },
    {
      id: 'consultation-management',
      number: '02',
      title: 'Consultation Management',
      category: 'CLIENTS',
      tagline: 'Turn curious brides into confirmed bookings with organized trials.',
      icon: Clock,
      description:
        'Schedule skin assessment trials, makeup consultations, hairstyle testing sessions, and saree draping reviews. Set up trial reminders so brides arrive fully prepared.',
      badge: 'Client Conversion',
      points: [
        'Dedicated trial & consultation status tracking',
        'Bridal look notes, skin tones & allergy checklists',
        'Automated appointment confirmations & reminders',
      ],
      preview: {
        type: 'consultation',
        tag: 'Trial & Consultation Suite',
        accentColor: 'text-amber-600',
        items: [
          { title: 'Skin Tone & Sensitivity Analysis', subtitle: 'Warm Undertone • MAC NC35 match', badge: 'Verified', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Hairstyle Reference Selected', subtitle: 'South Indian Braided Poola Jada', badge: 'Approved', badgeColor: 'bg-purple-100 text-purple-800' },
          { title: 'Muhurtham Saree Drape Style', subtitle: 'Madisar / Traditional Pleats', badge: 'Noted', badgeColor: 'bg-stone-100 text-stone-800' },
        ],
        highlightLabel: 'Trial Slots Booked',
        highlightValue: '12 Brides',
        actionBtn: 'Send Prep Guidelines',
      },
    },
    {
      id: 'customer-management',
      number: '03',
      title: 'Customer Management (CRM)',
      category: 'CLIENTS',
      tagline: 'Comprehensive bridal client profiles that last across milestones.',
      icon: Users,
      description:
        'Maintain a single source of truth for every bride and family member. Access past interactions, wedding events, look preferences, family bookings, and complete payment history in seconds.',
      badge: 'Bridal CRM',
      points: [
        'Comprehensive bride contact & emergency phone records',
        'Direct communication history and payment logs',
        'Tag repeat clients, bridesmaids & bridal party members',
      ],
      preview: {
        type: 'crm',
        tag: 'Bride Master Profile',
        accentColor: 'text-blue-600',
        items: [
          { title: 'Bride: Ananya Swaminathan', subtitle: 'Phone: +91 98765 43210 • Chennai', badge: 'VIP Bride', badgeColor: 'bg-purple-100 text-purple-800' },
          { title: 'Events: Muhurtham + Sangeet', subtitle: 'Total Contract Value: ₹85,000', badge: 'Confirmed', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Family Members Tagged', subtitle: 'Mother + 2 Bridesmaids styling', badge: '3 Guests', badgeColor: 'bg-amber-100 text-amber-800' },
        ],
        highlightLabel: 'Customer Lifetime',
        highlightValue: '2 Bookings',
        actionBtn: 'Open Bride Dossier',
      },
    },
    {
      id: 'bridal-booking-management',
      number: '04',
      title: 'Bridal Booking Management',
      category: 'SCHEDULE',
      tagline: 'Manage multi-day ceremonies from Muhurtham to Reception flawlessly.',
      icon: CalendarCheck2,
      description:
        'Weddings rarely involve just one event. Handle Haldi, Mehndi, Sangeet, Muhurtham, and Reception bookings under a unified bridal reservation with exact reporting times.',
      badge: 'Specialized Bridal',
      points: [
        'Multi-event scheduling under single bridal contract',
        'Artist & assistant crew assignment per ceremony',
        'Venue locations, call times & early-morning logistics',
      ],
      preview: {
        type: 'booking',
        tag: 'Multi-Event Ceremony Tracker',
        accentColor: 'text-emerald-600',
        items: [
          { title: '1. Haldi & Mehndi (Eve)', subtitle: 'Nov 03 • 03:00 PM • Taj Gateway', badge: 'Stylist A', badgeColor: 'bg-stone-100 text-stone-700' },
          { title: '2. Auspicious Muhurtham', subtitle: 'Nov 04 • 04:30 AM • Leela Palace', badge: 'Lead Artist', badgeColor: 'bg-[#FFF0E5] text-[#FF6B00]' },
          { title: '3. Grand Reception Gala', subtitle: 'Nov 04 • 06:30 PM • Leela Ballroom', badge: 'Full Crew', badgeColor: 'bg-emerald-100 text-emerald-800' },
        ],
        highlightLabel: 'Ceremony Milestones',
        highlightValue: '3 Locked',
        actionBtn: 'Assign Crew Schedule',
      },
    },
    {
      id: 'studio-calendar',
      number: '05',
      title: 'Studio Calendar',
      category: 'SCHEDULE',
      tagline: 'High-visibility visual scheduling built for auspicious Muhurtham peaks.',
      icon: Calendar,
      description:
        'See your entire month or week at a glance. Filter by trial sessions, wedding mornings, evening receptions, or unavailable blackout dates to avoid accidental overbooking.',
      badge: 'Visual Schedule',
      points: [
        'Color-coded event tags (Trial, Wedding, Reception, Shoot)',
        'Fast Muhurtham date availability check for caller inquiries',
        'Assistant availability overview for multiple simultaneous brides',
      ],
      preview: {
        type: 'calendar',
        tag: 'Auspicious Muhurtham Grid',
        accentColor: 'text-[#FF6B00]',
        items: [
          { title: 'Nov 04: 3 Brides Scheduled', subtitle: '04:30 AM • 05:15 AM • 06:00 AM (Assigned)', badge: 'Peak Date', badgeColor: 'bg-rose-100 text-rose-800' },
          { title: 'Nov 08: 2 Trials + 1 Reception', subtitle: 'Afternoon & Evening slots locked', badge: 'Full Day', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'Nov 14: Muhurtham Morning', subtitle: 'ITC Grand Chola • Lead Artist', badge: 'Confirmed', badgeColor: 'bg-emerald-100 text-emerald-800' },
        ],
        highlightLabel: 'Schedule Clashes',
        highlightValue: 'Zero Clashes',
        actionBtn: 'Open Month Planner',
      },
    },
    {
      id: 'services-and-packages',
      number: '06',
      title: 'Services & Packages',
      category: 'FINANCE',
      tagline: 'Standardize your pricing and service tier descriptions with elegance.',
      icon: Sparkles,
      description:
        'Configure your signature service offerings: HD Airbrush Makeup, Traditional Bridal Looks, Pre-Bridal Skincare rituals, and Add-ons like Hair Extensions and Saree Pleating.',
      badge: 'Catalog Builder',
      points: [
        'Custom packages with bundled trial & touch-up inclusions',
        'Per-head pricing for bridesmaids, mothers & groom styling',
        'Instant insertion into quotations with predefined rates',
      ],
      preview: {
        type: 'services',
        tag: 'Signature Bridal Menu',
        accentColor: 'text-purple-600',
        items: [
          { title: 'Signature HD Airbrush Look', subtitle: 'Includes skin prep, mink lashes & draping', badge: '₹45,000', badgeColor: 'bg-purple-100 text-purple-800' },
          { title: 'Traditional South Indian Muhurtham', subtitle: 'High-definition base + floral styling', badge: '₹35,000', badgeColor: 'bg-stone-100 text-stone-800' },
          { title: 'Bridesmaid / Relative Styling', subtitle: 'Saree draping, party glam & basic hair', badge: '₹7,500/pax', badgeColor: 'bg-emerald-100 text-emerald-800' },
        ],
        highlightLabel: 'Active Offerings',
        highlightValue: '8 Packages',
        actionBtn: 'Customize Services',
      },
    },
    {
      id: 'quotations',
      number: '07',
      title: 'Quotations',
      category: 'FINANCE',
      tagline: 'Send immaculate, branded bridal quotations that command premium rates.',
      icon: FileSpreadsheet,
      description:
        'Create itemized bridal estimates including early morning surcharges, travel & accommodation terms, and payment schedules. Let brides review and approve with confidence.',
      badge: 'Sales Acceleration',
      points: [
        'Itemized breakdowns for bride and family party members',
        'Clear payment milestones (Advance, Trial Day, Event Morning)',
        'Professional print & PDF export with terms & conditions',
      ],
      preview: {
        type: 'quotation',
        tag: 'Branded Quote Generator',
        accentColor: 'text-emerald-600',
        items: [
          { title: 'Quote #QT-2026-104', subtitle: 'Client: Keerthana M. • 2 Events', badge: '₹75,000', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Payment Terms: 30% / 70%', subtitle: '₹22,500 Advance • ₹52,500 Event Morning', badge: 'Standard', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'PDF & WhatsApp Shareable', subtitle: 'Includes studio cancellation policy', badge: 'Ready', badgeColor: 'bg-stone-100 text-stone-800' },
        ],
        highlightLabel: 'Average Quote Value',
        highlightValue: '₹62,000',
        actionBtn: 'Share Digital Quote',
      },
    },
    {
      id: 'payment-tracking',
      number: '08',
      title: 'Payment Tracking',
      category: 'FINANCE',
      tagline: 'Crystal-clear advance settlements without uncomfortable money chats.',
      icon: Wallet,
      description:
        'Track every rupee: booking advance, stage-wise installments, and final balance clearances. Record payment modes (UPI, Cash, Bank Transfer) and issue instant digital receipts.',
      badge: 'Financial Control',
      points: [
        'Advance vs. Pending balance calculations in real-time',
        'Support for partial installments and UPI / Bank records',
        'Automated payment receipts and outstanding balance summaries',
      ],
      preview: {
        type: 'payments',
        tag: 'Payment Ledger & Balance',
        accentColor: 'text-emerald-600',
        items: [
          { title: 'Advance Collected (UPI: 9876...)', subtitle: 'Meera K. • Verified Instant Settlement', badge: '₹25,000 Paid', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Pending Muhurtham Settlement', subtitle: 'Due at 05:00 AM on wedding morning', badge: '₹40,000 Due', badgeColor: 'bg-amber-100 text-amber-800' },
          { title: 'Automated Digital Receipt #REC-88', subtitle: 'Dispatched directly via WhatsApp', badge: 'Delivered', badgeColor: 'bg-blue-100 text-blue-800' },
        ],
        highlightLabel: 'Season Collection',
        highlightValue: '₹3,55,000',
        actionBtn: 'Record Payment',
      },
    },
    {
      id: 'expenses',
      number: '09',
      title: 'Expenses Tracking',
      category: 'FINANCE',
      tagline: 'Know your true net margins per wedding season.',
      icon: TrendingDown,
      description:
        'Log product purchases (cosmetics, lashes, hair pieces), assistant artist fees, studio rent, travel costs, and fuel bills. Always understand your actual bridal studio profitability.',
      badge: 'Studio Margins',
      points: [
        'Category breakdown: Kit Refills, Travel, Freelancer Artist Pay',
        'Link expenses to specific wedding dates to calculate event margin',
        'Tax and receipt record keeping for hassle-free accounting',
      ],
      preview: {
        type: 'expenses',
        tag: 'Studio Margin Breakdown',
        accentColor: 'text-rose-600',
        items: [
          { title: 'Huda Beauty / Charlotte Tilbury Restock', subtitle: 'Setting sprays, highlighters & palettes', badge: '₹14,500', badgeColor: 'bg-stone-100 text-stone-800' },
          { title: 'Junior Stylist Freelancer Payout', subtitle: 'Saree draper & hair assistant (3 events)', badge: '₹12,000', badgeColor: 'bg-stone-100 text-stone-800' },
          { title: 'Cab / Travel Surcharge Reimbursement', subtitle: 'Outstation wedding trip to Mahabalipuram', badge: '₹4,200', badgeColor: 'bg-stone-100 text-stone-800' },
        ],
        highlightLabel: 'Studio Net Margin',
        highlightValue: '68% Profit',
        actionBtn: 'Log Kit Expense',
      },
    },
    {
      id: 'reports-and-analytics',
      number: '10',
      title: 'Reports & Analytics',
      category: 'FINANCE',
      tagline: 'Actionable business intelligence on revenue, peak months, and conversions.',
      icon: BarChart3,
      description:
        'Understand your studio growth with visual reports on monthly revenue, enquiry conversion rates, most requested packages, and top booking seasons across the bridal year.',
      badge: 'Business Insights',
      points: [
        'Monthly & seasonal revenue comparisons',
        'Conversion rate from initial inquiry to paid booking',
        'Popular bridal package metrics and average booking values',
      ],
      preview: {
        type: 'analytics',
        tag: 'Executive Performance Cockpit',
        accentColor: 'text-blue-600',
        items: [
          { title: 'Monthly Gross Bookings', subtitle: 'Nov 2026: ₹5,40,000 (32 Brides)', badge: '+22% YoY', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Enquiry to Booking Conversion', subtitle: '54 inquiries -> 32 paid bridal contracts', badge: '59% Rate', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'Top Performing Package', subtitle: 'Signature Airbrush HD (62% of bookings)', badge: 'Top Tier', badgeColor: 'bg-purple-100 text-purple-800' },
        ],
        highlightLabel: 'Total Booked Season',
        highlightValue: '₹18,40,000',
        actionBtn: 'Download Report',
      },
    },
    {
      id: 'whatsapp-automation',
      number: '11',
      title: 'WhatsApp Automation',
      category: 'COMMUNICATION',
      tagline: 'Engage clients directly on India’s most favored bridal communication channel.',
      icon: MessageCircle,
      description:
        'Deliver instant booking confirmations, quotation links, consultation reminders, and prep guidelines directly to the bride’s WhatsApp with minimal manual typing.',
      badge: 'Instant Reach',
      points: [
        '1-click templated WhatsApp messages to prospective brides',
        'Automated trial reminders and pre-wedding skincare prep guides',
        'Payment confirmation and receipt sharing via WhatsApp',
      ],
      preview: {
        type: 'whatsapp',
        tag: 'WhatsApp Bridal Template Hub',
        accentColor: 'text-emerald-600',
        items: [
          { title: 'Template: Booking Confirmed & Advance Receipt', subtitle: '"Dear Priyanka, your Muhurtham slot for Nov 4 is locked..."', badge: 'Auto-Trigger', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Template: 24-Hour Pre-Trial Preparation Guide', subtitle: '"Please arrive with clean moisturized skin & reference sari..."', badge: 'Ready', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'Template: Ceremony Morning Call-Time Check', subtitle: '"Our team departs at 03:45 AM to reach Leela Palace ballroom"', badge: 'Scheduled', badgeColor: 'bg-amber-100 text-amber-800' },
        ],
        highlightLabel: 'Messages Delivered',
        highlightValue: '100% Read',
        actionBtn: 'Test Message Template',
      },
    },
    {
      id: 'email-notifications',
      number: '12',
      title: 'Email Notifications',
      category: 'COMMUNICATION',
      tagline: 'Polished formal confirmations, receipts, and studio communications.',
      icon: Mail,
      description:
        'Automate professional studio emails for quotation delivery, contract confirmations, schedule updates, and payment receipts with your studio branding.',
      badge: 'Studio Polish',
      points: [
        'Automated welcome and booking confirmation emails',
        'Digital receipt delivery upon payment logging',
        'Team assignment notification for assistant artists',
      ],
      preview: {
        type: 'email',
        tag: 'Branded Studio Dispatch',
        accentColor: 'text-[#1F2937]',
        items: [
          { title: 'Booking Confirmation PDF Attached', subtitle: 'Sent to bride & wedding coordinator', badge: 'Delivered', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Official GST Payment Receipt #REC-104', subtitle: 'Sent to client accounting email', badge: 'Signed', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'Assistant Call Sheet Briefing', subtitle: 'Dispatched to 2 junior styling assistants', badge: 'Sent', badgeColor: 'bg-stone-100 text-stone-800' },
        ],
        highlightLabel: 'Delivery Status',
        highlightValue: '99.8% Inbox',
        actionBtn: 'Configure Templates',
      },
    },
    {
      id: 'public-studio-website',
      number: '13',
      title: 'Public Studio Website',
      category: 'COMMUNICATION',
      tagline: 'A luxury digital storefront that attracts and converts prospective brides 24/7.',
      icon: Globe,
      description:
        'Give your bridal brand a dedicated web presence. Showcase your portfolio gallery, verified services, packages, artist biography, and embedded interactive enquiry forms.',
      badge: 'Growth & Premium',
      points: [
        'Personalized public studio web profile',
        'Direct inquiry submission directly into your studio dashboard',
        'Custom domain support on the Premium plan',
      ],
      preview: {
        type: 'website',
        tag: 'Live Studio Public Profile',
        accentColor: 'text-[#FF6B00]',
        items: [
          { title: 'Branded Studio Domain Profile', subtitle: 'Personalized studio showcase & lookbook', badge: 'SSL Secure', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Embedded Client Intake Form', subtitle: 'Inquiries route straight into your Studio CRM', badge: 'Automated', badgeColor: 'bg-blue-100 text-blue-800' },
          { title: 'High-Resolution Lookbook Gallery', subtitle: 'Airbrush, Traditional, Christian & Sangeet looks', badge: 'Retina Ready', badgeColor: 'bg-purple-100 text-purple-800' },
        ],
        highlightLabel: 'Monthly Web Visitors',
        highlightValue: '1,420 Brides',
        actionBtn: 'Preview Studio Website',
      },
    },
    {
      id: 'subscription-management',
      number: '14',
      title: 'Subscription Management',
      category: 'COMMUNICATION',
      tagline: 'Transparent, flexible plans that scale as your bridal business grows.',
      icon: Crown,
      description:
        'Easily upgrade, manage payment plans, or unlock premium features as your clientele expands. Backed by secure automated billing infrastructure and dedicated support.',
      badge: 'Account Control',
      points: [
        'Seamless online billing for Starter and Growth tiers',
        'Instant feature unlocking upon upgrade',
        'Download official subscription receipts directly from your dashboard',
      ],
      preview: {
        type: 'subscription',
        tag: 'Subscription & Entitlements',
        accentColor: 'text-purple-600',
        items: [
          { title: 'Current Plan: Growth Tier (₹999/mo)', subtitle: 'Website Inquiry & Shareable Social Bio Link active', badge: 'Active', badgeColor: 'bg-emerald-100 text-emerald-800' },
          { title: 'Upgrade Option: Premium Luxury (₹29,999)', subtitle: 'Includes custom domain + dedicated hosting server', badge: 'Available', badgeColor: 'bg-purple-100 text-purple-800' },
          { title: 'Official Billing Receipts', subtitle: 'Monthly payment receipts downloadable with single click', badge: 'Compliant', badgeColor: 'bg-blue-100 text-blue-800' },
        ],
        highlightLabel: 'Next Renewal',
        highlightValue: 'Dec 01, 2026',
        actionBtn: 'Manage Subscription',
      },
    },
  ];

  const currentFeature = features[activeTab];

  // Helper to change module and keep category in sync
  const selectModule = (idx) => {
    setActiveTab(idx);
    const mod = features[idx];
    if (mod && activeCategory !== 'ALL' && mod.category !== activeCategory) {
      setActiveCategory('ALL');
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FFF8F0]/40 border-b border-[#F0E5DA] relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFF0E5]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPREHENSIVE STUDIO CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            14 Dedicated Modules. <br />
            <span className="text-[#FF6B00] italic font-serif">Crafted for the Modern Bridal Artist.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Every single feature has been purposefully designed to eliminate the daily operational headaches unique to bridal makeup artists and styling studios.
          </p>
        </div>

        {/* Clean Modern Category Filter Ribbon (Centered, Wrapped without Horizontal Moving Bars) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstIdx = features.findIndex((f) => cat.id === 'ALL' || f.category === cat.id);
                  if (firstIdx !== -1) setActiveTab(firstIdx);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isCatActive
                    ? 'bg-[#1F2937] text-white shadow-sm'
                    : 'bg-white text-[#6B7280] border border-[#F0E5DA] hover:text-[#1F2937] hover:border-[#FF6B00]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Modern Clean Grid of Modules (No Moving Scrollbar) */}
        <div className="mt-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {features.map((item, idx) => {
              const isSelected = activeTab === idx;
              const isMatchCategory = activeCategory === 'ALL' || item.category === activeCategory;
              const Icon = item.icon;

              if (!isMatchCategory) return null;

              return (
                <button
                  key={item.id}
                  onClick={() => selectModule(idx)}
                  className={`p-2.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-md scale-102 ring-2 ring-[#FF6B00]/30'
                      : 'bg-white text-[#1F2937] border-[#F0E5DA] hover:border-[#FF6B00]/40 hover:bg-[#FFF8F0]/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] font-bold font-mono ${
                        isSelected ? 'text-white/80' : 'text-[#6B7280]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#FF6B00]'}`} />
                  </div>

                  <span
                    className={`text-[11px] font-bold leading-tight line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-[#1F2937]'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Feature Stage (Left Details + Right Live Mockup) */}
        <div className="mt-8 rounded-3xl bg-white border border-[#F0E5DA] shadow-[0_20px_50px_rgba(31,41,55,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content (5.5 cols) */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F0E5DA]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#FFF0E5] text-[#FF6B00] font-bold text-xs flex items-center justify-center font-serif">
                      {currentFeature.number}
                    </span>
                    <span className="text-xs font-extrabold tracking-widest text-[#FF6B00] uppercase">
                      FEATURE {currentFeature.number} OF 14
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF0E5] text-[#FF6B00] border border-[#FF6B00]/20">
                    {currentFeature.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F2937]">
                  {currentFeature.title}
                </h3>

                <p className="text-base font-semibold text-[#1F2937]/90 leading-snug">
                  {currentFeature.tagline}
                </p>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {currentFeature.description}
                </p>

                {/* Key feature bullet points */}
                <div className="space-y-3 pt-2">
                  {currentFeature.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Navigator Controls */}
              <div className="pt-8 mt-6 border-t border-stone-100 flex items-center justify-between">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#E05E00] group"
                >
                  <span>Experience this in VARNAM</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => selectModule(activeTab > 0 ? activeTab - 1 : features.length - 1)}
                    className="p-2.5 rounded-xl border border-[#F0E5DA] text-stone-700 hover:bg-[#FFF8F0] hover:border-[#FF6B00]/40 transition-colors cursor-pointer"
                    aria-label="Previous feature"
                  >
                    ←
                  </button>
                  <span className="text-xs font-mono font-bold text-[#1F2937] px-1">
                    {activeTab + 1} / {features.length}
                  </span>
                  <button
                    onClick={() => selectModule(activeTab < features.length - 1 ? activeTab + 1 : 0)}
                    className="p-2.5 rounded-xl border border-[#F0E5DA] text-stone-700 hover:bg-[#FFF8F0] hover:border-[#FF6B00]/40 transition-colors cursor-pointer"
                    aria-label="Next feature"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Product UI Live Mockup (6.5 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-10 bg-[#FFF8F0]/50 flex items-center justify-center">
              <div className="w-full max-w-lg rounded-2xl bg-white border border-[#F0E5DA] shadow-xl overflow-hidden transition-all duration-300">
                {/* Browser Shell Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#FFF8F0] border-b border-[#F0E5DA]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-[#6B7280] ml-2">
                      VARNAM Studio • {currentFeature.title}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#FF6B00] bg-white px-2 py-0.5 rounded border border-[#F0E5DA]">
                    Interactive Preview
                  </span>
                </div>

                {/* Interactive Dynamic Canvas */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Canvas Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                          {currentFeature.preview.tag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-[#6B7280]">
                        Real-time studio data synchronization
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 block font-medium">
                        {currentFeature.preview.highlightLabel}
                      </span>
                      <span className="text-sm font-extrabold text-[#1F2937]">
                        {currentFeature.preview.highlightValue}
                      </span>
                    </div>
                  </div>

                  {/* List of Simulated Live Interactive Items */}
                  <div className="space-y-2.5">
                    {currentFeature.preview.items.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl bg-[#FFFDF9] border border-[#F0E5DA] hover:border-[#FF6B00]/40 transition-all flex items-center justify-between shadow-2xs"
                      >
                        <div className="truncate pr-3">
                          <span className="text-xs font-bold text-[#1F2937] block truncate">
                            {row.title}
                          </span>
                          <span className="text-[10px] text-[#6B7280] block truncate mt-0.5">
                            {row.subtitle}
                          </span>
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md shrink-0 ${row.badgeColor}`}>
                          {row.badge}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Button in Preview */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl bg-[#1F2937] hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{currentFeature.preview.actionBtn}</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-stone-400 italic pt-1">
                    * Interactive functional mockup aligned with VARNAM production studio architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
