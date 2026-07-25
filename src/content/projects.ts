import soundContacts from '../../public/media/soundengineer-contacts.webp';
import soundMobile from '../../public/media/soundengineer-mobile.webp';
import soundModal from '../../public/media/soundengineer-modal.webp';
import soundProjects from '../../public/media/soundengineer-projects.webp';
import soundServices from '../../public/media/soundengineer-services.webp';
import soundOverviewSource from '../../public/media/soundengineer.webp';
import weatherLight from '../../public/media/weather-app-light.webp';
import weatherLocation from '../../public/media/weather-app-location.webp';
import weatherMobile from '../../public/media/weather-app-mobile.webp';
import weatherModal from '../../public/media/weather-app-modal.webp';
import weatherSettings from '../../public/media/weather-app-settings.webp';
import weatherOverviewSource from '../../public/media/weather-app.webp';

import { defineProject } from './define.ts';

const weatherOverview = {
  source: weatherOverviewSource,
  alt: 'Weather Application: прогноз для Череповца в тёмной теме',
  caption:
    'Главный экран объединяет текущую погоду, почасовой прогноз и подробные показатели воздуха.',
} as const;

const soundOverview = {
  source: soundOverviewSource,
  alt: 'Главная страница Sound Engineer Website с фотографией звукорежиссёра',
  caption:
    'Первый экран сразу представляет специалиста и ведёт к прослушиванию его работ.',
} as const;

export const weatherApp = defineProject({
  slug: 'weather-app',
  name: 'Weather Application',
  seo: {
    title: 'Weather Application — кейс Дмитрия Драганова',
    description:
      'Погодное приложение на React и TypeScript с картой, поиском локаций, кэшированием данных, локализацией и Canvas-графиком.',
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

export const soundEngineer = defineProject({
  slug: 'sound-engineer',
  name: 'Sound Engineer Website',
  seo: {
    title: 'Sound Engineer Website — кейс Дмитрия Драганова',
    description:
      'Адаптивный шестистраничный сайт с кастомным аудиоплеером, модальными окнами и вкладками.',
  },
  card: {
    summary:
      'Адаптивный шестистраничный сайт с кастомным аудиоплеером и интерактивными компонентами.',
    highlights: [
      '6 страниц',
      'аудиоплеер',
      'модальные окна',
      'адаптивная вёрстка',
    ],
    actionLabel: 'Открыть кейс',
  },
  heading: 'Портфолио, которое можно услышать',
  lead: 'Многостраничный сайт, где аудиоматериалы становятся полноценной частью интерфейса, а не обычным списком внешних ссылок.',
  role: 'Вёрстка, клиентская логика и интерактивные компоненты',
  story:
    'Задача была организовать большой объём материалов на шести страницах и встроить прослушивание работ в основной пользовательский сценарий. Страницы объединены общей адаптивной системой, а повторяющиеся сценарии — переиспользуемыми модальными окнами и вкладками. Кастомный аудиоплеер реализован без готового UI-компонента, поэтому управление воспроизведением, временной шкалой и громкостью согласовано с визуальным языком сайта и предсказуемо работает на разных устройствах.',
  stack: ['HTML', 'CSS', 'TypeScript'],
  links: {
    demo: {
      label: 'Открыть сайт',
      href: 'https://dmdraganov.github.io/soundengineer-website/',
    },
    repository: {
      label: 'Смотреть код на GitHub',
      href: 'https://github.com/dmdraganov/soundengineer-website',
    },
  },
  gallery: [
    soundOverview,
    {
      source: soundServices,
      alt: 'Sound Engineer Website: карточки услуг с ценами и сроками',
      caption:
        'Услуги разделены по задачам, а стоимость, сроки и следующий шаг видны прямо в карточках.',
    },
    {
      source: soundProjects,
      alt: 'Sound Engineer Website: сетка аудиопроектов',
      caption:
        'Портфолио собрано в сетку с обложками и быстрым запуском прослушивания.',
    },
    {
      source: soundContacts,
      alt: 'Sound Engineer Website: форма заявки и контактные данные',
      caption:
        'Форма заявки и прямые контакты объединены в завершающем блоке страницы.',
    },
    {
      source: soundModal,
      alt: 'Sound Engineer Website: подтверждение отправки заявки',
      caption:
        'После отправки пользователь получает короткое подтверждение и понятный способ закрыть окно.',
    },
    {
      source: soundMobile,
      alt: 'Sound Engineer Website: главный экран мобильной версии',
      caption:
        'На мобильном экране сохраняются фирменная подача и быстрый доступ к навигации.',
    },
  ],
});

export const projects = [weatherApp, soundEngineer] as const;

export type Project = (typeof projects)[number];
export type ProjectSlug = Project['slug'];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: ProjectSlug): Project {
  return projects.find((project) => project.slug !== slug) ?? projects[0];
}
