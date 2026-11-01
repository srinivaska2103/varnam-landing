import Link from 'next/link';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import VarnamAIFloatingAssistant from '@/components/marketing/VarnamAIFloatingAssistant';

export const metadata = {
  title: 'Terms and Conditions | VARNAM – Bridal Studio Management',
  description: 'Terms and Conditions of Service for VARNAM by VEXA TECH.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F2937]">
      <MarketingNavbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0E5DA] shadow-xs space-y-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937]">
            Terms and Conditions
          </h1>
          <p className="text-sm text-[#6B7280]">
            Last updated: November 1, 2026 • Operated by VEXA TECH
          </p>

          <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed">
            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By subscribing to or accessing the VARNAM Bridal Studio Management platform, you agree to comply with and be bound by these terms. VARNAM is a software-as-a-service solution provided by VEXA TECH.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              2. Subscription Plans & Billing
            </h2>
            <p>
              Subscription packages include Starter (₹599/month), Growth (₹999/month), and Premium (₹29,999 one-time license). Plan features and entitlements correspond strictly to the configured subscription tier. The Premium plan includes one year of complimentary domain registration and server hosting as per offer terms.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              3. Studio Content & Client Data
            </h2>
            <p>
              Bridal makeup studios and artists retain full copyright and ownership of all uploaded photographs, portfolio images, pricing packages, and customer logs. VEXA TECH does not claim ownership over studio content.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              4. Support & Inquiries
            </h2>
            <p>
              For enterprise billing, custom domain setup, or technical assistance, contact our team at{' '}
              <a href="mailto:vexatech.connect@gmail.com" className="text-[#FF6B00] font-semibold underline">
                vexatech.connect@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </main>
      <MarketingFooter />
      <VarnamAIFloatingAssistant />
    </div>
  );
}

