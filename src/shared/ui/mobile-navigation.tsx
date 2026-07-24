'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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

export function MobileNavigation({ items, labels }: MobileNavigationProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.navigationEnhancement = 'ready';
    triggerRef.current?.removeAttribute('hidden');

    return () => {
      delete document.documentElement.dataset.navigationEnhancement;
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            ref={triggerRef}
            className="mobile-navigation__trigger min-h-11 rounded-md border border-border bg-surface-raised px-3 font-inherit text-inherit"
            hidden
            type="button"
          >
            {labels.menu}
          </button>
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
