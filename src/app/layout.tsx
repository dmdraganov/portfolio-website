import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';

import { sharedSiteContent } from '@/content/site/shared';
import { RouteViewTracker } from '@/shared/analytics/RouteViewTracker';
import { YandexMetrica } from '@/shared/analytics/YandexMetrica';
import { SiteHeader } from '@/shared/widgets/SiteHeader';
import './globals.css';

const geistSans = Geist({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteHeader
          brand={sharedSiteContent.header.brand}
          items={sharedSiteContent.navigation}
          labels={{
            menu: sharedSiteContent.header.menuLabel,
            menuTitle: sharedSiteContent.header.menuTitle,
            navigation: sharedSiteContent.header.navigationLabel,
          }}
        />
        {children}
        <Suspense fallback={null}>
          <RouteViewTracker />
        </Suspense>
        <YandexMetrica />
      </body>
    </html>
  );
}
