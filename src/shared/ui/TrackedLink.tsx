'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

import { analytics, type AnalyticsEvent } from '../lib/analytics';

type TrackedLinkProps = Omit<
  ComponentProps<typeof Link>,
  'onAuxClick' | 'onClick'
> & {
  event: AnalyticsEvent;
};

function shouldTrackClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.isTrusted && event.button === 0 && !event.defaultPrevented;
}

function shouldTrackAuxClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.isTrusted && event.button === 1 && !event.defaultPrevented;
}

export function TrackedLink({ event, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(clickEvent) => {
        if (shouldTrackClick(clickEvent)) {
          analytics.track(event);
        }
      }}
      onAuxClick={(auxClickEvent) => {
        if (shouldTrackAuxClick(auxClickEvent)) {
          analytics.track(event);
        }
      }}
    />
  );
}
