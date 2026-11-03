'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
} from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      id: 'BASIC',
      name: 'BASIC',
      tagline: 'Essential studio management tool for independent bridal artists.',
      price: '₹599',
      period: '/month',
      badge: 'Basic',
      isPopular: false,
      ctaText: 'Get Started',
      ctaHref: 'https://app.varnam.vexatech.in/register?plan=BASIC_MONTHLY',
      featuresHeader: 'Includes core studio features:',
      features: [
        'Customer Management (CRM)',
        'Enquiry Management & Lead Capture',
        'Public Shareable Enquiry Form (Instagram Bio & WhatsApp)',
        'Bookings & Multi-Event Calendar',
        'Consultations & Bridal Trials',
        'Services & Packages Catalog',
        'Quotations & Pricing Estimates',
        'Manual Payment Records & Receipts',
        'Expenses & Margin Tracking',
        'Reports & Analytics Overview',
        'Studio & Email Notifications',
      ],
      excludedFeatures: [
        'Branded Public Studio Website',
        'Public Services & Packages Showcase',
        'Own WhatsApp Business Number Integration',
        'Custom Domain & Dedicated Hosting',
      ],
    },
    {
      id: 'GROWTH',
      name: 'GROWTH',
      tagline: 'Ideal for scaling studios that want online bridal client acquisition.',
      price: '₹999',
      period: '/month',
      badge: 'Most Popular',
      isPopular: true,
      ctaText: 'Get Started',
      ctaHref: 'https://app.varnam.vexatech.in/register?plan=GROWTH_MONTHLY',
      featuresHeader: 'All Basic features, plus online acquisition:',
      features: [
        'All Basic plan features included',
        'Branded Public Studio Website',
        'Public Website Enquiry Integration',
        'Public Services Catalogue',
        'Public Packages Catalogue',
        'Online Customer Enquiry Submissions',
        'Website-Based Lead Generation',
        'Priority Technical Support',
      ],
      excludedFeatures: [
        'Custom Domain Configuration',
        'Dedicated Server Hosting',
        'Own WhatsApp Business Number Integration',
      ],
    },
    {
      id: 'PREMIUM',
      name: 'CUSTOM / PREMIUM',
      tagline: 'Full luxury suite with a custom-hosted branded website on your own domain.',
      price: '₹29,999',
      period: 'one-time setup & license',
      badge: 'Luxury Suite',
      isPopular: false,
      ctaText: 'Contact Sales',
      ctaHref: '#contact',
      featuresHeader: 'All Growth features, plus custom infrastructure & WhatsApp:',
      features: [
        'All Growth plan features included',
        'Custom Domain Configuration',
        'Dedicated Server Hosting',
        '1 Year Free Domain Registration included',
        '1 Year Free Server Hosting included',
        'VIP Setup & Migration Assistance',
        'Dedicated Priority Support',
        'Own WhatsApp Business Number Integration (Meta Cloud API)',
        'WhatsApp Campaign Management Using Connected Number',
      ],
      excludedFeatures: [],
    },
  ];

  const handleScrollToContact = (e, href) => {
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
    <section id="pricing" className="py-20 md:py-28 bg-[#FFF8F0] border-b border-[#F0E5DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT, HONEST INVESTMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Simple Plans for Every Stage of Your Studio.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Choose the right tier to streamline your bookings, delight your brides, and scale your business without hidden surprises.
          </p>
        </motion.div>

        {/* Pricing Cards Grid with Framer Motion Stagger */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isGrowth = plan.isPopular;
            const isPremium = plan.id === 'PREMIUM';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between ${
                  isGrowth
                    ? 'border-2 border-[#FF6B00] shadow-[0_20px_50px_rgba(255,107,0,0.18)]'
                    : 'border border-[#F0E5DA] shadow-sm hover:shadow-xl hover:border-[#FF6B00]/40'
                } p-8 sm:p-9`}
              >
                {/* Popular Pill */}
                {isGrowth && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular For Studios</span>
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#1F2937]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-[220px]">
                        {plan.tagline}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isGrowth
                          ? 'bg-[#FFF0E5] text-[#FF6B00]'
                          : isPremium
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-stone-100 text-[#1F2937]'
                      }`}
                    >
                      {isGrowth ? (
                        <Zap className="w-5 h-5" />
                      ) : isPremium ? (
                        <Crown className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-stone-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm font-medium text-[#6B7280]">
                        {plan.period}
                      </span>
                    </div>

                    {isPremium && (
                      <p className="text-xs text-[#FF6B00] font-semibold mt-1">
                        Includes 1 Year Free Domain & Server Hosting
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={plan.ctaHref}
                      onClick={
                        plan.ctaHref.startsWith('#')
                          ? (e) => handleScrollToContact(e, plan.ctaHref)
                          : undefined
                      }
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        isGrowth
                          ? 'bg-[#FF6B00] text-white hover:bg-[#E05E00] shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.45)]'
                          : isPremium
                          ? 'bg-[#1F2937] text-white hover:bg-black shadow-sm'
                          : 'bg-white text-[#1F2937] border border-[#F0E5DA] hover:border-[#FF6B00] hover:text-[#FF6B00] hover:bg-[#FFF8F0]/40'
                      }`}
                    >
                      {plan.ctaText === 'Contact Sales' ? (
                        <PhoneCall className="w-4 h-4" />
                      ) : null}
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                      {plan.featuresHeader}
                    </p>

                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937]">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}

                      {plan.excludedFeatures.map((exFeature, eIdx) => (
                        <li key={`ex-${eIdx}`} className="flex items-start gap-2.5 text-xs text-stone-400 line-through">
                          <span className="w-4 h-4 flex items-center justify-center text-stone-300 shrink-0 mt-0.5 font-bold">
                            ✕
                          </span>
                          <span>{exFeature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Assurance */}
                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] text-[#6B7280] flex items-center justify-between">
                  <span>Official Business Receipts</span>
                  <span className="font-semibold text-[#1F2937]">Secure Encrypted Payments</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
