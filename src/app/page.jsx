import MarketingLandingPage from '@/components/marketing/MarketingLandingPage';

export const metadata = {
  title: 'VARNAM – Bridal Studio Management Software & VARNAM AI',
  description:
    'Manage bridal enquiries, consultations, bookings, customers and payments with VARNAM & VARNAM AI, an intelligent assistant designed to help bridal studios understand business performance and manage daily operations.',
  keywords: [
    'bridal studio management software',
    'bridal makeup artist software',
    'VARNAM AI',
    'AI bridal assistant',
    'makeup studio CRM',
    'muhurtham booking software',
    'bridal artist booking app',
    'VARNAM software',
    'VEXA TECH',
  ],
  authors: [{ name: 'VEXA TECH', url: 'https://vexatech.in' }],
  creator: 'VEXA TECH',
  publisher: 'VARNAM by VEXA TECH',
  metadataBase: new URL('https://varnam.vexatech.in'),
  alternates: {
    canonical: 'https://varnam.vexatech.in',
  },
  openGraph: {
    title: 'VARNAM – Bridal Studio Management Software',
    description:
      'Manage bridal enquiries, consultations, bookings, customers and payments with VARNAM, an all-in-one bridal studio management platform by VEXA TECH.',
    url: 'https://varnam.vexatech.in',
    siteName: 'VARNAM',
    images: [
      {
        url: '/varnam-logo.png',
        width: 1200,
        height: 630,
        alt: 'VARNAM Bridal Studio Management Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VARNAM – Bridal Studio Management Software',
    description:
      'Manage bridal enquiries, consultations, bookings, customers and payments with VARNAM, an all-in-one bridal studio management platform by VEXA TECH.',
    images: ['/varnam-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return <MarketingLandingPage />;
}
