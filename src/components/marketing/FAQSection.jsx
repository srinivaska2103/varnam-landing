'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is VARNAM?',
      answer:
        'VARNAM is an all-in-one bridal studio management software platform created by VEXA TECH specifically for bridal makeup artists, hair stylists, and bridal salons. It organizes customer enquiries, consultation trials, multi-day bridal bookings, quotations, payments, studio calendars, and expenses into one unified, elegant workspace.',
    },
    {
      question: 'Who can use VARNAM?',
      answer:
        'VARNAM is tailored for independent freelance bridal makeup artists, bridal salons, multi-artist makeup collectives, and beauty academies. Whether you manage 5 high-end weddings a month or a high-volume team with multiple simultaneous bridal dates, VARNAM scales to your studio.',
    },
    {
      question: 'Can I manage multiple bridal bookings?',
      answer:
        'Yes. VARNAM features a specialized bridal booking engine designed for Indian weddings. You can schedule multiple ceremonies (Haldi, Sangeet, Muhurtham, Reception) under a single bride’s booking, assign assistant artists to different events, and track individual call-times without date collisions.',
    },
    {
      question: 'Can customers submit enquiries online?',
      answer:
        'Yes. With our Growth and Premium plans, you get access to a Website Enquiry module and a publicly shareable enquiry form link. You can place this link in your Instagram bio or WhatsApp business profile. Prospective brides fill out event dates, desired packages, and venue details, which land instantly into your studio dashboard.',
    },
    {
      question: 'Does VARNAM support WhatsApp notifications?',
      answer:
        'Yes. VARNAM provides built-in WhatsApp templates allowing you to dispatch instant booking confirmations, quotation estimates, consultation trial reminders, and pre-bridal skin preparation guides directly to the bride with one tap.',
    },
    {
      question: 'Can I use my own business domain?',
      answer:
        'Yes. Our Premium plan includes full custom domain support (e.g. yourstudio.com or yourbrand.in), a bespoke branded business website, and dedicated self-server hosting with one full year of free domain registration and server hosting included.',
    },
    {
      question: 'How do subscriptions work?',
      answer:
        'VARNAM offers transparent pricing with no hidden commissions. Starter is available at ₹599/month for core studio operations. Growth is ₹999/month and unlocks online client acquisition via public website forms. The Premium suite is ₹29,999 and includes a custom domain website, dedicated hosting, and VIP concierge onboarding. Subscriptions are billed securely through encrypted payment processing.',
    },
    {
      question: 'How can I contact support?',
      answer:
        'You can reach our dedicated support team directly via email at vexatech.connect@gmail.com or contact our sales specialists for guided onboarding and Premium package setup through our contact form.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFF8F0]/40 border-b border-[#F0E5DA] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]/20 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280]">
            Everything you need to know about VARNAM, subscriptions, and studio features.
          </p>
        </motion.div>

        {/* Accordion List with Framer Motion Entrance */}
        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#FF6B00]/50 shadow-md ring-1 ring-[#FF6B00]/20'
                    : 'border-[#F0E5DA] shadow-xs hover:border-[#FF6B00]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  suppressHydrationWarning
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#1F2937]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#FF6B00] text-white rotate-180 shadow-2xs'
                        : 'bg-stone-100 text-[#1F2937]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6B7280] leading-relaxed border-t border-stone-100"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
