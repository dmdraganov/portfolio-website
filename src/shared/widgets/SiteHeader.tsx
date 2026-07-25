import Link from 'next/link';

import { MobileNavigation } from './MobileNavigation';

type SiteHeaderProps = Readonly<{
  brand: string;
  items: readonly Readonly<{ label: string; href: string }>[];
  labels: Readonly<{
    menu: string;
    menuTitle: string;
    navigation: string;
  }>;
}>;

export function SiteHeader({ brand, items, labels }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-[color-mix(in_srgb,var(--surface)_92%,transparent)]">
      <div className="mx-auto flex min-h-16 w-[min(100%-(2*var(--space-gutter)),96rem)] items-center justify-between gap-4">
        <Link className="font-semibold text-inherit no-underline" href="/">
          {brand}
        </Link>
        <nav
          aria-label={labels.navigation}
          className="site-header__canonical-navigation"
        >
          <ul className="flex flex-wrap gap-3 p-0">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-inherit underline-offset-4"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavigation items={items} labels={labels} />
      </div>
    </header>
  );
}
