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
  task: 'Собрать в одном интерфейсе данные нескольких внешних сервисов и сделать повторные просмотры прогноза быстрыми и понятными.',
  solution:
    'Приложение разделено на независимые модули погоды, геолокации, локализации и темы. Получение данных и кэширование организованы через TanStack Query, а пользовательские настройки — через Zustand.',
  features: [
    'Интеграция Weather API, Yandex Maps, Yandex Geocoder и Yandex Geosuggest.',
    'Текущая погода, почасовой и расширенный прогноз.',
    'Поиск и выбор локации на интерактивной карте.',
    'Собственный график температуры на Canvas API без библиотеки визуализации.',
    'Русская и английская локализация.',
    'Светлая, тёмная и системная темы.',
    'Кэширование данных и сокращение повторных запросов.',
  ],
  technicalDecisions:
    'Главная сложность — синхронизировать несколько источников данных и сохранить предсказуемое состояние интерфейса. Модульное разделение уменьшает связанность, а кэширование ускоряет возврат к уже открытым прогнозам.',
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
  task: 'Организовать большой объём материалов на разных страницах и дать пользователю удобный способ прослушивать работы прямо на сайте.',
  solution:
    'Шесть адаптивных страниц объединены общей визуальной системой. Для аудиоматериалов разработан собственный плеер, а повторяющиеся сценарии оформлены как переиспользуемые модальные окна и вкладки.',
  features: [
    'Шесть адаптивных страниц для мобильных и настольных устройств.',
    'Кастомный аудиоплеер с воспроизведением, временной шкалой и громкостью.',
    'Переиспользуемые модальные окна.',
    'Компонент вкладок для структурирования контента.',
    'Единые правила отступов, типографики и интерактивных состояний.',
  ],
  technicalDecisions:
    'Аудиоплеер реализован без готового UI-компонента. Это позволило согласовать управление воспроизведением с визуальным языком сайта и контролировать поведение интерфейса на разных устройствах.',
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
