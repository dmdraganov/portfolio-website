import weatherLight from '../../../public/media/weather-app-light.webp';
import weatherLocation from '../../../public/media/weather-app-location.webp';
import weatherMobile from '../../../public/media/weather-app-mobile.webp';
import weatherModal from '../../../public/media/weather-app-modal.webp';
import weatherSettings from '../../../public/media/weather-app-settings.webp';
import weatherOverviewSource from '../../../public/media/weather-app.webp';

import { defineProject } from '../define';

const weatherOverview = {
  source: weatherOverviewSource,
  alt: 'Weather Application: прогноз для Череповца в тёмной теме',
  caption:
    'Главный экран объединяет текущую погоду, почасовой прогноз и подробные показатели воздуха.',
} as const;

export const weatherApp = defineProject({
  slug: 'weather-app',
  name: 'Weather Application',
  seo: {
    title: 'Weather Application — кейс Дмитрия Драганова',
    description:
      'Погодное приложение на React и TypeScript с картой, поиском локаций, кэшированием данных, локализацией и Canvas-графиком.',
    image: {
      source: weatherOverviewSource,
      alt: weatherOverview.alt,
    },
  },
  card: {
    summary:
      'Приложение с прогнозом погоды, поиском локаций, картой и интерактивной визуализацией данных.',
    highlights: [
      '4 внешних сервиса',
      'Canvas-график',
      'кэширование',
      'локализация',
    ],
    actionLabel: 'Открыть кейс',
  },
  heading: 'Погода, карта и данные в одном интерфейсе',
  lead: 'Веб-приложение, которое объединяет прогноз, поиск мест, геолокацию и почасовую визуализацию без перегруженного пользовательского сценария.',
  role: 'Разработка приложения и техническая архитектура',
  story:
    'Задача была собрать данные нескольких внешних сервисов в понятном интерфейсе и сделать повторные просмотры быстрыми. Приложение разделено на модули погоды, геолокации, локализации и темы; Weather API, Yandex Maps, Yandex Geocoder и Yandex Geosuggest работают через единый сценарий поиска и выбора места. TanStack Query отвечает за запросы и кэширование, Zustand — за настройки, а почасовая температура визуализируется собственным Canvas-графиком. Интерфейс поддерживает русский и английский языки, а также светлую, тёмную и системную темы.',
  stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Canvas API'],
  links: {
    demo: {
      label: 'Открыть приложение',
      href: 'https://weather-app-self-three-95.vercel.app/',
    },
    repository: {
      label: 'Смотреть код на GitHub',
      href: 'https://github.com/dmdraganov/weather-app',
    },
  },
  gallery: [
    weatherOverview,
    {
      source: weatherLight,
      alt: 'Weather Application: прогноз погоды в светлой теме',
      caption:
        'Светлая тема сохраняет ту же структуру данных и визуальные приоритеты.',
    },
    {
      source: weatherLocation,
      alt: 'Weather Application: поиск мест и выбор точки на карте',
      caption:
        'Поиск, избранные и недавние места собраны рядом с интерактивной картой.',
    },
    {
      source: weatherModal,
      alt: 'Weather Application: окно выбора сохранённой локации',
      caption:
        'Локацию можно сменить из компактного окна, не покидая экран прогноза.',
    },
    {
      source: weatherSettings,
      alt: 'Weather Application: настройки темы и языка',
      caption:
        'Тема оформления и язык интерфейса настраиваются в отдельном понятном разделе.',
    },
    {
      source: weatherMobile,
      alt: 'Weather Application на мобильном экране',
      caption:
        'Мобильная версия сохраняет прогноз читаемым и оставляет основные разделы под рукой.',
    },
  ],
});
