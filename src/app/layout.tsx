import type { Metadata } from 'next';
import './globals.css';
import { NavigationHeader } from '@/components/organisms/NavigationHeader';
import { Footer } from '@/components/organisms/Footer';
import { COMPANY_INFO } from '@/data/constants';
import { generateOrganizationSchema } from '@/lib/seo';
import { WhatsAppCTA } from '@/components/atoms/WhatsAppCTA';
import { Animated3DBackground } from '@/components/atoms/Animated3DBackground';

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.websiteUrl),
  title: {
    default: 'Boulevard 01 — Landmark of Trust | Bahria Town Lahore & Islamabad',
    template: '%s | Boulevard 01',
  },
  description:
    'Boulevard 01 — Landmark of Trust. Enterprise-grade property developments in Bahria Town Lahore and Islamabad. 9+ years continuous operation, 500+ delivered units, and 15 completed high-rises with 100% on-time handovers. Active towers: Grand 15, Grand 14, Grand X, Grand 11, and Grand 12.',
  keywords: [
    'Boulevard 01',
    'Boulevard01',
    'Landmark of trust',
    'Bahria Town Lahore apartments',
    'shops for sale in Bahria Town Lahore',
    'Grand 15 Bahria Downtown',
    'Grand X Bahria Theme Park',
    'The View Grand 12 Islamabad Phase 8',
    'Grand 11 Midway Commercial',
    'Grand 14 Main Boulevard Bahria',
    'Roshan Digital Account property investment',
    'Etihad Town sales partner',
    'luxury high rise Lahore',
  ],
  authors: [{ name: 'Boulevard 01 (Pvt) Ltd' }],
  creator: 'Boulevard 01 Engineering',
  publisher: 'Boulevard 01',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: COMPANY_INFO.websiteUrl,
    siteName: 'Boulevard 01 — Landmark of Trust',
    title: 'Boulevard 01 — Landmark of Trust | Bahria Town Lahore & Islamabad',
    description:
      'Verified 9-year delivery track record. Explore luxury apartments, food courts, and corporate offices facing the Eiffel Tower replica, Theme Park, and Bahria Islamabad Phase 8.',
    images: [
      {
        url: '/images/boulevard01-logo.png',
        width: 1200,
        height: 630,
        alt: 'Boulevard 01 — Landmark of Trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boulevard 01 — Landmark of Trust',
    description: '15 High-Rise Developments, 500+ Delivered Units, 100% On-Time Record.',
    images: ['/images/boulevard01-logo.png'],
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
  alternates: {
    canonical: COMPANY_INFO.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="h-full scroll-smooth dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('boulevard_theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A101D] text-[#101B2E] dark:text-[#F5F2EB] selection:bg-[#C4A46A] selection:text-[#101B2E] transition-colors duration-300 relative">
        {/* Global 3D Interactive Canvas Background (Scroll & Mouse Parallax) */}
        <Animated3DBackground fixed intensity={1.1} />
        <NavigationHeader />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Persistent Floating WhatsApp Speed Dial */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppCTA
            message="Hello Boulevard 01, I am browsing your property platform and would like live assistance from a sales director."
            label="Live Desk"
            variant="floating"
            className="glow-gold"
          />
        </div>
      </body>
    </html>
  );
}
