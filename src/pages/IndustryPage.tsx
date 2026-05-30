import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { industryPages } from '../content/industries';
import { NotFound } from './NotFound';
import { Seo, SITE } from '../seo/Seo';
import { organizationSchema, breadcrumbSchema, serviceSchema } from '../seo/org';

const CATEGORIES = [
  { name: 'Low Voltage', to: '/services/low-voltage' },
  { name: 'Security', to: '/services/security' },
  { name: 'Fire & Life Safety', to: '/services/fire-life-safety' },
];

const WIRELESS = [
  { name: 'ERRCS', to: '/services/errcs' },
  { name: 'Cellular DAS', to: '/services/cellular-das' },
  { name: 'In-Building Wireless', to: '/services/in-building-wireless' },
];

export function IndustryPage() {
  const { slug } = useParams();
  const content = slug ? industryPages[slug] : undefined;
  if (!content) return <NotFound />;

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/' },
    { name: content.chip, path: `/industries/${content.slug}` },
  ];

  const jsonLd = [
    organizationSchema,
    breadcrumbSchema(trail),
    serviceSchema({
      name: content.seo.title,
      description: content.seo.description,
      path: `/industries/${content.slug}`,
      serviceType: `Systems Integration — ${content.name}`,
    }),
  ];

  return (
    <>
      <Seo
        title={content.seo.title}
        description={content.seo.description}
        canonical={`${SITE}/industries/${content.slug}`}
        jsonLd={jsonLd}
      />

      <nav aria-label="Breadcrumb" className="relative mx-auto max-w-7xl px-5 pt-28 md:pt-32">
        <ol className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gray-400">
          <li><Link to="/" className="hover:text-ember-500 transition">Home</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-gray-600">{content.chip}</li>
        </ol>
      </nav>

      <section className="relative pt-8 md:pt-10 pb-14 md:pb-20 overflow-hidden">
        <div className="ambient" />
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="max-w-3xl reveal">
            <div className="chip mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              Industries · {content.chip}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-gray-900">
              {content.h1}
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">{content.subhead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/#contact" className="btn-primary">
                Discuss a project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/#services" className="btn-ghost">
                Explore all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 reveal">
              <h2 className="section-title text-gray-900">What we deliver in this vertical</h2>
              <div className="mt-6 space-y-4">
                {content.intro.map((p, i) => (
                  <p key={i} className="text-gray-500 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 reveal">
              <div className="rounded-2xl glass p-7 md:p-8">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">
                  Scope highlights
                </div>
                <ul className="mt-5 space-y-4">
                  {content.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-ember-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-ember-500" />
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <h2 className="section-title text-gray-900 reveal">Capabilities we bring to {content.chip.toLowerCase()} projects</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-2xl glass p-6 reveal hover:border-ember-500/40 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="text-lg font-display font-semibold text-gray-900 flex items-center justify-between">
                  {c.name}
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-ember-500 transition" />
                </h3>
                <p className="mt-2 text-sm text-gray-500">Explore the category</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl glass-strong p-7 md:p-8 reveal">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">
              In-building wireless · by DAS Systems
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {WIRELESS.map((w) => (
                <Link
                  key={w.to}
                  to={w.to}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border border-gray-200 text-gray-700 hover:border-ember-500/50 hover:text-ember-500 transition"
                >
                  {w.name}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-28">
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="relative rounded-3xl glass-strong overflow-hidden p-10 md:p-16 text-center reveal">
            <div className="absolute inset-0 grid-bg-fine opacity-30" />
            <div className="ambient" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-gray-900">
                Planning a {content.chip.toLowerCase()} project?
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Site walks are no-commitment and end with a clear scope conversation across every system your building needs.
              </p>
              <div className="mt-8 flex items-center justify-center">
                <Link to="/#contact" className="btn-primary">
                  Discuss a project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
