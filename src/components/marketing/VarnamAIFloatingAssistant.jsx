'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  HelpCircle,
  Minimize2,
  RefreshCw,
  Cpu,
} from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  'What is VARNAM?',
  'How does VARNAM manage bridal bookings?',
  'What subscription plans are available?',
  'Can I manage customer enquiries?',
  'How can I get started?',
];

const PREDEFINED_ANSWERS = {
  'what is varnam?':
    'VARNAM is an all-in-one studio management platform created specifically for bridal makeup artists, hair stylists, and bridal salons across India. It organizes leads, multi-event Muhurtham dates, bridal look consultations, quotations, and automated WhatsApp/email reminders in one unified platform.',

  'how does varnam manage bridal bookings?':
    'VARNAM features a specialized conflict-free Muhurtham Calendar Engine. It tracks wedding ceremonies, early morning Muhurtham slots, reception look tests, and trial schedules with automated clash prevention and artist travel buffers.',

  'what subscription plans are available?':
    'VARNAM offers flexible plans:\n• Starter Plan: ₹599/month for solo artists.\n• Growth Plan: ₹999/month for expanding salons.\n• Premium Tier: ₹29,999 (one-time license) including your own custom branded website, domain registration, and VIP concierge onboarding.',

  'can i manage customer enquiries?':
    'Yes! VARNAM automatically captures bridal leads from WhatsApp, website forms, and phone inquiries. You can view event dates, venue details, guest counts, and seamlessly transition leads into confirmed bookings and payment receipts.',

  'how can i get started?':
    'You can click "Get Started" on the homepage or scroll down to our Pricing section to pick your preferred tier. Our team at VEXA TECH also provides free dedicated onboarding and setup assistance!',
};

export default function VarnamAIFloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I'm VARNAM AI. How can I help you discover smarter bridal studio management?",
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate smart AI reply after a short delay
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedAnswer = null;

      for (const [key, val] of Object.entries(PREDEFINED_ANSWERS)) {
        if (lower.includes(key.replace(/[?]/g, '')) || key.includes(lower)) {
          matchedAnswer = val;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
          matchedAnswer = PREDEFINED_ANSWERS['what subscription plans are available?'];
        } else if (lower.includes('contact') || lower.includes('call') || lower.includes('email') || lower.includes('support')) {
          matchedAnswer = 'You can reach our team directly at vexatech.connect@gmail.com or call/WhatsApp us at +91 8946029205 (Monday to Saturday, 9:00 AM – 7:00 PM).';
        } else if (lower.includes('career') || lower.includes('job') || lower.includes('hire')) {
          matchedAnswer = 'We are hiring! Visit our Careers page at /careers to explore available roles for Sales Executives and Digital Marketers and submit your application.';
        } else {
          matchedAnswer =
            'Thank you for asking! VARNAM is designed exclusively for bridal makeup studios. Feel free to explore our features, check our subscription plans, or submit a direct inquiry in the Contact section.';
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: matchedAnswer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: 'ai',
        text: "Hello! I'm VARNAM AI. How can I help you discover smarter bridal studio management?",
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* 1. FLOATING CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] md:w-[400px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-[#F0E5DA] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#FF6B00] to-[#E05E00] text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-xs">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-base font-bold tracking-tight text-white leading-none">
                      VARNAM AI
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                      Assistant
                    </span>
                  </div>
                  <p className="text-[10px] text-white/80 mt-0.5 font-medium">
                    Your Studio. Your Data. Your AI.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg hover:bg-white/15 text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-1.5 rounded-lg hover:bg-white/15 text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-stone-50/50 custom-scrollbar">
              {messages.map((msg, idx) => {
                const isAi = msg.sender === 'ai';
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${isAi ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAi && (
                      <div className="w-7 h-7 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-2xs ${
                        isAi
                          ? 'bg-white text-[#1F2937] border border-[#F0E5DA] rounded-tl-xs whitespace-pre-line'
                          : 'bg-[#1F2937] text-white rounded-tr-xs'
                      }`}
                    >
                      {msg.text}
                      <span
                        className={`block text-[9px] mt-1 text-right ${
                          isAi ? 'text-stone-400' : 'text-stone-300'
                        }`}
                      >
                        {msg.time}
                      </span>
                    </div>
                    {!isAi && (
                      <div className="w-7 h-7 rounded-full bg-stone-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-stone-400 text-xs pl-9">
                  <div className="flex gap-1 py-1">
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce" />
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium">VARNAM AI is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions Pill Scroller */}
            <div className="px-3.5 py-2 bg-white border-t border-stone-100 overflow-x-auto custom-scrollbar flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider shrink-0 flex items-center gap-1 pl-1">
                <HelpCircle className="w-3 h-3 text-[#FF6B00]" />
                <span>Suggestions:</span>
              </span>
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#FFF8F0] hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white border border-[#FF6B00]/25 text-[11px] font-semibold transition-all cursor-pointer shadow-2xs shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-[#F0E5DA] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask VARNAM AI anything..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs text-[#1F2937] placeholder:text-stone-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] text-white flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING CIRCULAR AI ASSISTANT BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
        {/* Hover Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="hidden sm:flex items-center gap-1.5 mr-3 px-3 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold shadow-lg pointer-events-none whitespace-nowrap"
            >
              <Bot className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Ask VARNAM AI</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Action Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Ask VARNAM AI"
          suppressHydrationWarning
          className="relative w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E05E00] hover:from-[#e05e00] hover:to-[#c45200] text-white shadow-[0_6px_22px_rgba(255,107,0,0.45)] hover:shadow-[0_8px_28px_rgba(255,107,0,0.6)] flex items-center justify-center cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/30"
        >
          {/* Glowing pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#FF6B00]/30 animate-ping pointer-events-none opacity-75" />

          {/* Small online indicator pill */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#FF6B00] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Bot className="w-7 h-7 stroke-[2.2]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
}

