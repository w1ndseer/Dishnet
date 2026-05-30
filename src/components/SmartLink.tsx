import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Props = {
  to: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function SmartLink({ to, external, className, children }: Props) {
  if (external || /^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
