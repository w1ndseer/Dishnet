import { useLocation } from 'react-router-dom';
import { PageTemplate } from '../components/PageTemplate';
import { servicePages } from '../content/services';
import { NotFound } from './NotFound';

export function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/services\//, '').replace(/\/$/, '');
  const content = servicePages[slug];
  if (!content) return <NotFound />;
  return <PageTemplate content={content} />;
}
