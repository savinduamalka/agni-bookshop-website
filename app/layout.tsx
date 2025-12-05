import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Agni Bookshop & Communication | Printing, Laminating & Services in Galle, Sri Lanka',
  description:
    'Professional printing, laminating, typesetting, and communication services in Galle, Southern Province. Fast, reliable, modern technology. Call 072 545 1111 today!',
  keywords:
    'printing services Galle, laminating services, photocopy shop, typesetting, mug printing, seal cutting, bill payments, mobile reloads, Agni Bookshop, Sri Lanka',
  authors: [{ name: 'Agni Bookshop & Communication' }],
  creator: 'Agni Bookshop & Communication',
  openGraph: {
    title: 'Agni Bookshop & Communication | Printing & Services in Galle',
    description:
      'Professional printing, laminating, typesetting, and communication services in Galle, Southern Province, Sri Lanka.',
    url: 'https://agnibookshop.lk',
    siteName: 'Agni Bookshop & Communication',
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agni Bookshop & Communication',
    description:
      'Your One-Stop Solution for Printing, Communication & Services in Galle',
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
  icons: {
    icon: '/agni-logo.png',
    apple: '/agni-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Agni Bookshop & Communication',
              image: 'https://agnibookshop.lk/logo.png',
              telephone: '+94725451111',
              email: 'agnibookshop1@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Galle',
                addressRegion: 'Southern Province',
                addressCountry: 'Sri Lanka',
              },
              priceRange: '$$',
              openingHours: 'Mo-Sa 08:00-18:00',
              sameAs: ['https://wa.me/94725451111'],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
