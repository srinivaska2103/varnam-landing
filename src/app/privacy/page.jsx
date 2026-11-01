import Link from 'next/link';
import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import VarnamAIFloatingAssistant from '@/components/marketing/VarnamAIFloatingAssistant';

export const metadata = {
  title: 'Privacy Policy | VARNAM – Bridal Studio Management',
  description: 'Privacy Policy for VARNAM Bridal Studio Management platform by VEXA TECH.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F2937]">
      <MarketingNavbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0E5DA] shadow-xs space-y-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6B7280]">
            Last updated: November 1, 2026 • Operated by VEXA TECH
          </p>

          <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed">
            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              1. Information We Collect
            </h2>
            <p>
              VARNAM collects business information including studio names, artist contacts, telephone numbers, and email addresses necessary to provide bridal management services. For brides and clients entered into the system by studios, data is kept strictly private to that studio account.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              2. How We Use Information
            </h2>
            <p>
              We use information exclusively to maintain studio operations, process invoices and subscriptions, dispatch automated appointment and booking reminders, and provide technical customer support. We do not sell or monetize client or studio databases.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              3. Data Security & Storage
            </h2>
            <p>
              All data is stored in enterprise-grade secured PostgreSQL databases with strict role-based access control and encrypted communications. Subscriptions and payments are processed via PCI-DSS compliant payment gateways.
            </p>

            <h2 className="text-lg font-bold text-[#1F2937] font-serif pt-2">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please email us at{' '}
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

