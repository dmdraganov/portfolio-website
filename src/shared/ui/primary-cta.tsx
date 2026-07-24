import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils';

import { TrackedLink } from './tracked-link';

type PrimaryCtaProps = Omit<ComponentProps<typeof TrackedLink>, 'className'>;

export function PrimaryCta(props: PrimaryCtaProps) {
  return (
    <TrackedLink
      {...props}
      className={cn(
        'primary-cta inline-flex min-h-11 items-center justify-center rounded-full bg-signal px-6 py-3 font-semibold text-signal-contrast no-underline transition-[transform_140ms_var(--ease-out),background-color_180ms_var(--ease-out)] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[color-mix(in_srgb,var(--signal)_86%,var(--ink))]'
      )}
    />
  );
}
