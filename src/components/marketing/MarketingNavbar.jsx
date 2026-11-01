'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export default function MarketingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Section tracking for active indicator
      const sections = ['contact', 'pricing', 'solutions', 'features', 'about', 'home'];
      const scrollPosition = window.scrollY + 160;

      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        if (section === 'home') continue;
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
  };

  return (
    <>
      {/* Sticky Top & Full Width Header */}
      <header
        className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF8F0]/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(31,41,55,0.08)] border-b border-[#F0E5DA]'
            : 'bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#F0E5DA]/70 shadow-[0_2px_10px_rgba(255,107,0,0.03)]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity with luxury styling */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/40 rounded-xl"
            >
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white shadow-xs border border-[#F0E5DA] flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(255,107,0,0.22)]">
                <Image
                  src="/varnam-logo.png"
                  alt="VARNAM"
                  width={42}
                  height={42}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FF6B00] leading-none transition-colors">
                  VARNAM
                </span>
              </div>
            </Link>

            {/* Center: Modern Floating Pill Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-sm p-1.5 rounded-full border border-[#F0E5DA] shadow-2xs"
              aria-label="Desktop Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href, link.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer select-none ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[#FF6B00] to-[#E05E00] shadow-[0_3px_12px_rgba(255,107,0,0.35)] font-bold'
                        : 'text-[#1F2937]/75 hover:text-[#FF6B00] hover:bg-[#FFF8F0]/80 transition-colors'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Login & Modern CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://app.varnam.vexatech.in/login"
                className="text-xs font-bold text-[#1F2937] hover:text-[#FF6B00] px-4 py-2 rounded-full hover:bg-white/70 transition-colors"
              >
                Login
              </a>

              <a
                href="#pricing"
                onClick={(e) => handleScrollTo(e, '#pricing', 'pricing')}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF6B00] hover:bg-[#E05E00] shadow-[0_4px_16px_rgba(255,107,0,0.32)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.42)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Actions: Compact Login + Modern Drawer Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="https://app.varnam.vexatech.in/login"
                className="text-[11px] font-bold text-[#1F2937] px-3 py-1.5 rounded-full bg-white border border-[#F0E5DA] shadow-2xs"
              >
                Login
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white border border-[#F0E5DA] text-[#1F2937] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B00]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Modern Top Dropdown Menu for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-3 right-3 sm:left-6 sm:right-6 z-50 max-w-lg mx-auto bg-[#FFF8F0]/98 backdrop-blur-xl border border-[#F0E5DA] rounded-3xl shadow-2xl overflow-hidden lg:hidden max-h-[85vh] flex flex-col"
          >
            {/* Dropdown Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
              <div className="flex items-center justify-between px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Navigation Menu</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-[#1F2937] hover:bg-white focus:outline-none transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href, link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF6B00] to-[#E05E00] text-white shadow-md shadow-[#FF6B00]/25 font-bold'
                        : 'text-[#1F2937] hover:bg-white/80 hover:text-[#FF6B00]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#6B7280]'}`} />
                  </a>
                );
              })}
            </div>

            {/* Dropdown Bottom Actions */}
            <div className="p-4 border-t border-[#F0E5DA] bg-white/70 space-y-2.5">
              <a
                href="https://app.varnam.vexatech.in/login"
                className="w-full flex items-center justify-center py-3 rounded-xl text-xs sm:text-sm font-bold text-[#1F2937] bg-white border border-[#F0E5DA] hover:bg-stone-50 shadow-2xs transition-colors"
              >
                Studio Dashboard Login
              </a>

              <a
                href="#pricing"
                onClick={(e) => handleScrollTo(e, '#pricing', 'pricing')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] shadow-md shadow-[#FF6B00]/25 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-[10px] text-[#6B7280] pt-1">
                Platform by <span className="font-bold text-[#1F2937]">VEXA TECH</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
