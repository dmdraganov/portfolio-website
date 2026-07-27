import {
  pharmacyAdminProducts,
  pharmacyCart,
  pharmacyCatalog,
  pharmacyOrders,
  pharmacyOverviewSource,
  pharmacyProduct,
} from './media';

import { defineProject } from '../../define';

const pharmacyOverview = {
  source: pharmacyOverviewSource,
  alt: 'Pharmacy E-Commerce: главная страница интернет-аптеки',
  caption:
    'Главный экран ведёт к каталогу и помогает быстро перейти к нужной категории товаров.',
} as const;

export const pharmacyECommerce = defineProject({
  slug: 'pharmacy-e-commerce',
  name: 'Pharmacy E-Commerce',
  seo: {
    title: 'Pharmacy E-Commerce — кейс Дмитрия Драганова',
    description:
      'SPA интернет-аптека на React и TypeScript с каталогом, корзиной, заказами и административной панелью.',
    image: {
      source: pharmacyOverviewSource,
      alt: pharmacyOverview.alt,
    },
  },
  card: {
    summary:
      'SPA интернет-аптека с каталогом, заказами, корзиной и административной панелью управления товарами.',
    highlights: [
      '20+ экранов',
      '100+ товаров',
      '2 роли доступа',
      'административная панель',
    ],
    actionLabel: 'Открыть кейс',
  },
  heading: 'Каталог, заказы и управление товарами в одном приложении',
  lead: 'SPA интернет-аптека, которая объединяет пользовательские сценарии покупки и административное управление ассортиментом.',
  role: 'Разработка SPA и frontend-архитектуры',
  story:
    'Разработал SPA интернет-аптеку на React и TypeScript: более 20 экранов пользовательской и административной частей покрывают цикл работы с каталогом, корзиной, заказами и товарами. Frontend-архитектура построена по Feature-Sliced Design и выделяет семь независимых бизнес-фич, чтобы функциональность было проще развивать и использовать повторно. Zustand централизует данные пользователя, корзины, региона и избранного, а TanStack Query отвечает за серверные данные. React Router и JWT-аутентификация защищают разделы для двух ролей доступа. Каталог с поиском, фильтрацией и пагинацией помогает работать с ассортиментом из более чем 100 позиций, а административная панель объединяет создание, редактирование и удаление товаров.',
  stack: [
    'React',
    'TypeScript',
    'React Router',
    'Zustand',
    'TanStack Query',
    'Tailwind CSS',
    'Laravel',
    'PostgreSQL',
    'Docker',
    'Nginx',
  ],
  links: {
    demo: {
      label: 'Открыть сайт',
      href: 'https://divmedica.ru',
    },
    repository: {
      label: 'Смотреть код на GitHub',
      href: 'https://github.com/dmdraganov/web-pharmacy',
    },
  },
  gallery: [
    pharmacyOverview,
    {
      source: pharmacyCatalog,
      alt: 'Pharmacy E-Commerce: каталог лекарственных товаров',
      caption:
        'Каталог объединяет поиск, фильтры и пагинацию для навигации по ассортименту из более чем 100 позиций.',
    },
    {
      source: pharmacyProduct,
      alt: 'Pharmacy E-Commerce: страница товара',
      caption:
        'На странице товара собрана информация, необходимая для выбора и добавления позиции в корзину.',
    },
    {
      source: pharmacyCart,
      alt: 'Pharmacy E-Commerce: корзина с выбранными товарами',
      caption:
        'Корзина использует единое состояние приложения, поэтому выбор пользователя сохраняется между экранами.',
    },
    {
      source: pharmacyOrders,
      alt: 'Pharmacy E-Commerce: список заказов пользователя',
      caption:
        'Раздел заказов делает историю покупок и их статусы доступными в личном кабинете.',
    },
    {
      source: pharmacyAdminProducts,
      alt: 'Pharmacy E-Commerce: административная панель управления товарами',
      caption:
        'Административная панель даёт доступ к созданию, редактированию и удалению позиций каталога.',
    },
  ],
});
