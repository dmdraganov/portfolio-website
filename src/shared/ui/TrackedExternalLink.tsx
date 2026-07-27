'use client';

import type { ComponentProps } from 'react';

import { TrackedLink } from './TrackedLink';

type TrackedExternalLinkProps = Omit<
  ComponentProps<typeof TrackedLink>,
  'rel' | 'target'
> & {
  newTabDescription: string;
};

export function TrackedExternalLink({
  children,
  newTabDescription,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <TrackedLink {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> ({newTabDescription})</span>
    </TrackedLink>
  );
}
