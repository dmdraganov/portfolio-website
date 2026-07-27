import {
  soundContacts,
  soundMobile,
  soundModal,
  soundOverviewSource,
  soundProjects,
  soundServices,
} from './media';

import { defineProject } from '../../define';

const soundOverview = {
  source: soundOverviewSource,
  alt: 'Главная страница Sound Engineer Website с фотографией звукорежиссёра',
  caption:
    'Первый экран сразу представляет специалиста и ведёт к прослушиванию его работ.',
} as const;

export const soundEngineer = defineProject({
  slug: 'sound-engineer',
  name: 'Sound Engineer Website',
  seo: {
    title: 'Sound Engineer Website — кейс Дмитрия Драганова',
    description:
      'Адаптивный шестистраничный сайт с кастомным аудиоплеером, модальными окнами и вкладками.',
    image: {
      source: soundOverviewSource,
      alt: soundOverview.alt,
    },
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
