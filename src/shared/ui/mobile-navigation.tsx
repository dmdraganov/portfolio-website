'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';

type MobileNavigationProps = Readonly<{
  items: readonly Readonly<{ label: string; href: string }>[];
  labels: Readonly<{
    menu: string;
    menuTitle: string;
    navigation: string;
  }>;
}>;

const DESKTOP_NAVIGATION_QUERY = '(min-width: 48rem)';

export function MobileNavigation({ items, labels }: MobileNavigationProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktopNavigation = window.matchMedia(DESKTOP_NAVIGATION_QUERY);
    const closeOnDesktop = () => {
      if (desktopNavigation.matches) {
        setOpen(false);
      }
    };

    desktopNavigation.addEventListener('change', closeOnDesktop);
    closeOnDesktop();
    document.documentElement.dataset.navigationEnhancement = 'ready';
    triggerRef.current?.removeAttribute('hidden');

    return () => {
      desktopNavigation.removeEventListener('change', closeOnDesktop);
      delete document.documentElement.dataset.navigationEnhancement;
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            ref={triggerRef}
            aria-label={labels.menu}
            className="mobile-navigation__trigger size-11"
            hidden
            size="icon-lg"
            type="button"
            variant="outline"
          >
            <MenuIcon aria-hidden="true" />
            <span className="sr-only">{labels.menu}</span>
          </Button>
        }
      />
      <SheetContent
        className="w-full max-w-[26rem] border-border bg-surface-raised p-0 text-ink"
        closeLabel="Закрыть меню"
      >
        <SheetHeader className="border-b border-border p-6">
          <SheetTitle>{labels.menuTitle}</SheetTitle>
        </SheetHeader>
        <nav aria-label={labels.navigation} className="p-6">
          <ul className="flex flex-col gap-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
