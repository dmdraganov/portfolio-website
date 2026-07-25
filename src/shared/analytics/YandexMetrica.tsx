import Script from 'next/script';

/* eslint-disable @next/next/no-before-interactive-script-outside-document -- The Metrica queue must exist before the route tracker can emit its initial hit. */
const counterId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

export function YandexMetrica() {
  if (counterId === undefined || counterId === '') {
    return null;
  }

  const initialization = [
    'window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments)};',
    `window.ym(${counterId},'init',{defer:true,clickmap:true,trackLinks:true,accurateTrackBounce:true});`,
  ].join('');

  return (
    <>
      <Script id="yandex-metrica-init" strategy="beforeInteractive">
        {initialization}
      </Script>
      <Script
        id="yandex-metrica-loader"
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="afterInteractive"
      />
    </>
  );
}
