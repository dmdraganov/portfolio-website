import { portrait } from './media';

export const sharedSiteContent = {
  seo: {
    title: 'Дмитрий Драганов — создание и доработка сайтов',
    description:
      'Создаю сайты с нуля, исправляю ошибки и развиваю существующие веб-проекты. Понятная оценка, работа по требованиям и прямое общение.',
    image: {
      source: portrait,
      alt: 'Портрет Дмитрия Драганова',
    },
  },
  header: {
    brand: 'Дмитрий Драганов',
    navigationLabel: 'Основная навигация',
    menuLabel: 'Меню',
    menuTitle: 'Навигация',
  },
  navigation: [
    { label: 'Проекты', href: '/#projects' },
    { label: 'Услуги', href: '/#services' },
    { label: 'Обо мне', href: '/#about' },
    { label: 'Контакты', href: '/#contacts' },
  ],
  contact: {
    telegram: { label: '@dmdraganov', href: 'https://t.me/dmdraganov' },
    email: {
      label: 'draganovdmitry@gmail.com',
      href: 'mailto:draganovdmitry@gmail.com',
    },
    github: {
      label: 'github.com/dmdraganov',
      href: 'https://github.com/dmdraganov',
    },
    kwork: {
      label: 'kwork.ru/user/draganov',
      href: 'https://kwork.ru/user/draganov',
    },
  },
  common: {
    externalLinkDescription: 'Откроется в новой вкладке',
  },
} as const;
