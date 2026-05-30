import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Seo, SITE } from '../seo/Seo';

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | DishNet Direct"
        description="The page you're looking for could not be found."
        canonical={SITE}
      />
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="ambient" />
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center reveal">
          <div className="chip mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
            404
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-gray-900">
            We couldn't find that page.
          </h1>
          <p className="mt-5 text-gray-500 leading-relaxed">
            The page may have moved, or the link may be out of date. Head back home and pick up from there.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link to="/" className="btn-primary">
              Back to home
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
