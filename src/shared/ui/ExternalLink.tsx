import type { ComponentProps } from 'react';

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'rel' | 'target'> & {
  newTab?: boolean;
  newTabDescription: string;
};

export function ExternalLink({
  newTab = true,
  newTabDescription,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      {...props}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {children}
      {newTab ? <span className="sr-only"> ({newTabDescription})</span> : null}
    </a>
  );
}
