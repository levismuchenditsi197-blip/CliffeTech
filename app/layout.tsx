import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CONTACT_INFO } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cliffetech.co.ke'),
  title: {
    default: 'CliffeTech Accounting Solutions | Accounting, Tax, Payroll & Zoho Books Services Kenya',
    template: '%s | CliffeTech Accounting Solutions',
  },
  description: 'Leading accounting firm in Kenya offering bookkeeping, tax filing, payroll management, financial reporting, business advisory, and Zoho Books implementation services for SMEs, NGOs, and growing businesses.',
  keywords: 'Accounting Services Kenya, Bookkeeping Services Kenya, Tax Consultants Kenya, Payroll Services Kenya, Zoho Books Kenya, Accounting Firm Nairobi, Business Advisory Kenya',
  authors: [{ name: 'CliffeTech Accounting Solutions' }],
  creator: 'CliffeTech Accounting Solutions',
  publisher: 'CliffeTech Accounting Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://cliffetech.co.ke',
    siteName: 'CliffeTech Accounting Solutions',
    title: 'CliffeTech Accounting Solutions | Accounting, Tax, Payroll & Zoho Books Services Kenya',
    description: 'Leading accounting firm in Kenya offering bookkeeping, tax filing, payroll management, financial reporting, business advisory, and Zoho Books implementation services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CliffeTech Accounting Solutions - Professional Accounting Services in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CliffeTech Accounting Solutions | Accounting Services Kenya',
    description: 'Professional accounting, tax, payroll, and Zoho Books services for Kenyan businesses.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href="https://cliffetech.co.ke" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://cliffetech.co.ke/#organization',
              name: 'CliffeTech Accounting Solutions',
              image: 'https://cliffetech.co.ke/logo.png',
              description: 'Professional accounting, tax, payroll, and business advisory services for Kenyan businesses.',
              url: 'https://cliffetech.co.ke',
              telephone: CONTACT_INFO.phone.link,
              email: CONTACT_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: CONTACT_INFO.address.display,
                addressLocality: 'Nairobi',
                addressCountry: 'KE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -1.2636,
                longitude: 36.8031,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
              },
              sameAs: [
                CONTACT_INFO.social.facebook,
                CONTACT_INFO.social.twitter,
                CONTACT_INFO.social.linkedin,
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
