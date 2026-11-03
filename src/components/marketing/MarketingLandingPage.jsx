'use client';

import React, { useState, useEffect } from 'react';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import HeroSection from '@/components/marketing/HeroSection';
import TrustAndValueSection from '@/components/marketing/TrustAndValueSection';
import ProblemSolutionSection from '@/components/marketing/ProblemSolutionSection';
import AboutSection from '@/components/marketing/AboutSection';
import FeatureShowcaseSection from '@/components/marketing/FeatureShowcaseSection';
import HowItWorksSection from '@/components/marketing/HowItWorksSection';
import SolutionsSection from '@/components/marketing/SolutionsSection';
import PricingSection from '@/components/marketing/PricingSection';
import FAQSection from '@/components/marketing/FAQSection';
import FinalCTASection from '@/components/marketing/FinalCTASection';
import ContactSection from '@/components/marketing/ContactSection';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import VarnamAIFloatingAssistant from '@/components/marketing/VarnamAIFloatingAssistant';
import PWAInstallPrompt from '@/components/marketing/PWAInstallPrompt';

export default function MarketingLandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FFF8F0] text-[#1F2937] font-sans antialiased selection:bg-[#FF6B00] selection:text-white"
      suppressHydrationWarning
    >
      {/* 1. Header / Navbar */}
      <MarketingNavbar />

      <main suppressHydrationWarning>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust and Value Section */}
        <TrustAndValueSection />

        {/* 4. Problem & Solution Comparison */}
        <ProblemSolutionSection />

        {/* 5. About Us Section */}
        <AboutSection />

        {/* 6. 14 Feature Showcase */}
        <FeatureShowcaseSection />

        {/* 7. Three-step How It Works */}
        <HowItWorksSection />

        {/* 7. Solutions by Studio Persona */}
        <SolutionsSection />

        {/* 8. Subscription Pricing Table */}
        <PricingSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Contact & Sales Inquiries */}
        <ContactSection />

        {/* 12. Final Call to Action */}
        <FinalCTASection />
      </main>

      {/* 13. Marketing Footer with VEXA TECH Branding */}
      <MarketingFooter />

      {/* 14. Floating Circular VARNAM AI Assistant Icon */}
      {mounted && <VarnamAIFloatingAssistant />}

      {/* 15. PWA Install Experience */}
      {mounted && <PWAInstallPrompt />}
    </div>
  );
}
