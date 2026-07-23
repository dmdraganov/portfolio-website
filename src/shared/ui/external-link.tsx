import type { ComponentProps } from 'react';

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'rel' | 'target'> & {
  newTab?: boolean;
};

export function ExternalLink({
  newTab = true,
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
      {newTab ? (
        <span className="sr-only"> (Откроется в новой вкладке)</span>
      ) : null}
    </a>
  );
}
