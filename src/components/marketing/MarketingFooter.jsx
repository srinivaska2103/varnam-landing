'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUp,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export default function MarketingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { label: 'Enquiry Management', href: '#features' },
    { label: 'Muhurtham Calendar', href: '#features' },
    { label: 'Bridal Booking Engine', href: '#features' },
    { label: 'Quotations & Estimates', href: '#features' },
    { label: 'Payment Tracking', href: '#features' },
    { label: 'Public Studio Website', href: '#features' },
  ];

  const planLinks = [
    { label: 'Starter Plan (₹599/mo)', href: '#pricing' },
    { label: 'Growth Plan (₹999/mo)', href: '#pricing' },
    { label: 'Premium Enterprise (₹29,999)', href: '#pricing' },
    { label: 'Feature Comparison', href: '#features' },
  ];

  // Specific Order Required:
  // Careers, Privacy Policy, Terms and Conditions, Studio Login, Contact Support
  const legalLinks = [
    { label: 'Careers', href: '/careers', isRoute: true },
    { label: 'Privacy Policy', href: '/privacy', isRoute: true },
    { label: 'Terms and Conditions', href: '/terms', isRoute: true },
    { label: 'Studio Login', href: 'https://app.varnam.vexatech.in/login', isExternal: true },
    { label: 'Contact Support', href: '#contact', isHash: true },
  ];

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-12 border-t border-stone-800/80 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-800/80">
          {/* Brand Column (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md border border-white/20 transition-transform group-hover:scale-105">
                <Image
                  src="/varnam-logo.png"
                  alt="VARNAM"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none transition-colors">
                  VARNAM
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              VARNAM is the premium, all-in-one bridal studio management platform built exclusively for makeup artists, hair stylists, and bridal styling salons across India.
            </p>

            {/* Platform Security Badge */}
            <div className="pt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-[11px] font-bold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Secured Platform</span>
              </span>
            </div>
          </div>

          {/* Product Modules (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Product Modules
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#FF6B00] transition-colors" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription Plans (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Subscription
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              {planLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#FF6B00] transition-colors" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal with Careers Link (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  {item.isRoute ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors flex items-center gap-1.5 group font-medium"
                    >
                      <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#FF6B00] transition-colors" />
                      <span className={item.label === 'Careers' ? 'text-white font-semibold' : ''}>
                        {item.label}
                      </span>
                    </Link>
                  ) : item.isExternal ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#FF6B00] transition-colors" />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className="hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#FF6B00] transition-colors" />
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Ribbon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2" suppressHydrationWarning>
            <span>© 2026 VARNAM. All rights reserved.</span>
            <span>•</span>
            <span>
              A Product of <span className="text-white font-bold tracking-wide">VEXA TECH</span>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-[#FF6B00]/40 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6B00]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
