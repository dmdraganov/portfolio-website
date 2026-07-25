import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';

import { siteContent } from '../content/site';
import { RouteViewTracker } from '../shared/analytics/RouteViewTracker';
import { YandexMetrica } from '../shared/analytics/YandexMetrica';
import { SiteHeader } from '../shared/widgets/SiteHeader';
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
    >
      <body>
        <SiteHeader
          brand={siteContent.header.brand}
          items={siteContent.navigation}
          labels={{
            menu: siteContent.header.menuLabel,
            menuTitle: siteContent.header.menuTitle,
            navigation: siteContent.header.navigationLabel,
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
