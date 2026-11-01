import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import CareersPage from '@/components/careers/CareersPage';
import VarnamAIFloatingAssistant from '@/components/marketing/VarnamAIFloatingAssistant';

export const metadata = {
  title: 'Careers | Build Your Career With VARNAM',
  description:
    'Join VARNAM and build innovative digital products for bridal salons, makeup artists, and wedding beauty studios. Open positions for freshers and experienced professionals.',
  openGraph: {
    title: 'Careers at VARNAM',
    description:
      'Be part of a team building innovative digital products and transforming bridal studios through technology.',
    url: 'https://varnam.vexatech.in/careers',
    siteName: 'VARNAM',
    type: 'website',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F2937]">
      <MarketingNavbar />
      <main className="pt-24 sm:pt-28 pb-16">
        <CareersPage />
      </main>
      <MarketingFooter />
      <VarnamAIFloatingAssistant />
    </div>
  );
}
