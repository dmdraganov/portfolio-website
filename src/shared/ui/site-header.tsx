import Link from 'next/link';

import { MobileNavigation } from './mobile-navigation';

type SiteHeaderProps = Readonly<{
  items: readonly Readonly<{ label: string; href: string }>[];
}>;

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        Дмитрий Драганов
      </Link>
      <nav
        aria-label="Основная навигация"
        className="site-header__canonical-navigation"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileNavigation items={items} />
    </header>
  );
}
