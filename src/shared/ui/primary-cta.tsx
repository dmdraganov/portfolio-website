import type { ComponentProps } from 'react';

import { TrackedLink } from './tracked-link';

type PrimaryCtaProps = Omit<ComponentProps<typeof TrackedLink>, 'className'>;

export function PrimaryCta(props: PrimaryCtaProps) {
  return <TrackedLink {...props} className="primary-cta" />;
}
