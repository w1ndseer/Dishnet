import { useParams } from 'react-router-dom';
import { PageTemplate } from '../components/PageTemplate';
import { categoryPages } from '../content/categories';
import { NotFound } from './NotFound';

export function CategoryPage() {
  const { slug } = useParams();
  const content = slug ? categoryPages[slug] : undefined;
  if (!content) return <NotFound />;
  return <PageTemplate content={content} />;
}
