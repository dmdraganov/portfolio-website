import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { navigation } from '../content/site';
import { SiteHeader } from '../shared/ui/site-header';
import { RouteViewTracker } from '../shared/ui/route-view-tracker';
import { YandexMetrica } from '../shared/ui/yandex-metrica';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteHeader items={navigation} />
        {children}
        <RouteViewTracker />
        <YandexMetrica />
      </body>
    </html>
  );
}
