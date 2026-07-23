'use client';

import { useEffect, useId, useRef, useState } from 'react';

type MobileNavigationProps = Readonly<{
  items: readonly Readonly<{ label: string; href: string }>[];
}>;

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    document.documentElement.dataset.navigationEnhancement = 'ready';
    triggerRef.current?.removeAttribute('hidden');

    return () => {
      delete document.documentElement.dataset.navigationEnhancement;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 48rem)');
    const closeOnDesktop = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener('change', closeOnDesktop);
    closeOnDesktop();

    return () => mediaQuery.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const body = document.body;
    const trigger = triggerRef.current;
    scrollYRef.current = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollYRef.current}px`;
    body.style.width = '100%';

    const focusable =
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.focus();

    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === 'Escape') {
        keyboardEvent.preventDefault();
        setOpen(false);
        return;
      }

      if (keyboardEvent.key !== 'Tab' || panelRef.current === null) {
        return;
      }

      const elements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      const first = elements[0];
      const last = elements.at(-1);

      if (first === undefined || last === undefined) {
        return;
      }

      if (keyboardEvent.shiftKey && document.activeElement === first) {
        keyboardEvent.preventDefault();
        last.focus();
      } else if (!keyboardEvent.shiftKey && document.activeElement === last) {
        keyboardEvent.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, scrollYRef.current);
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        ref={triggerRef}
        aria-controls={menuId}
        aria-expanded={open}
        className="mobile-navigation__trigger"
        hidden
        onClick={() => setOpen(true)}
        type="button"
      >
        Меню
      </button>
      {open ? (
        <div
          className="mobile-navigation__backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            ref={panelRef}
            aria-labelledby={`${menuId}-title`}
            aria-modal="true"
            className="mobile-navigation__sheet"
            id={menuId}
            onClick={(clickEvent) => clickEvent.stopPropagation()}
            role="dialog"
          >
            <div className="mobile-navigation__sheet-header">
              <p id={`${menuId}-title`}>Навигация</p>
              <button onClick={() => setOpen(false)} type="button">
                Закрыть
              </button>
            </div>
            <nav aria-label="Основная навигация">
              <ul>
                {items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
