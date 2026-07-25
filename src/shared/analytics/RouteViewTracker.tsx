'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { analytics } from '../lib/analytics';
import { toAnalyticsPath } from '../lib/url';

export function RouteViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef<string | undefined>(undefined);
  const search = searchParams.toString();
  const path = toAnalyticsPath(
    `${pathname}${search === '' ? '' : `?${search}`}`
  );

  useEffect(() => {
    if (previousPath.current === path) {
      return;
    }

    analytics.pageView(path, previousPath.current);
    previousPath.current = path;
  }, [path]);

  return null;
}
