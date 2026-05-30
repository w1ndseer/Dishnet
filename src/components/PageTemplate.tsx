import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SmartLink } from './SmartLink';
import { Seo, SITE } from '../seo/Seo';
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  organizationSchema,
} from '../seo/org';
import type { PageContent, Callout as CalloutType, NavCard } from '../content/types';

function Breadcrumb({ content }: { content: PageContent }) {
  return (
    <nav aria-label="Breadcrumb" className="relative mx-auto max-w-7xl px-5 pt-28 md:pt-32">
      <ol className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gray-400">
        <li>
          <Link to="/" className="hover:text-ember-500 transition">Home</Link>
        </li>
        <ChevronRight className="w-3 h-3" />
        <li>
          <Link to={content.breadcrumbParent.path} className="hover:text-ember-500 transition">
            {content.breadcrumbParent.name}
          </Link>
        </li>
        <ChevronRight className="w-3 h-3" />
        <li className="text-gray-600">{content.hero.chip}</li>
      </ol>
    </nav>
  );
}

function PageHero({ content }: { content: PageContent }) {
  const { hero } = content;
  return (
    <section className="relative pt-8 md:pt-10 pb-14 md:pb-20 overflow-hidden">
      <div className="ambient" />
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-3xl reveal">
          <div className="chip mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
            {hero.chip}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-gray-900">
            {hero.h1}
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
            {hero.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SmartLink to={hero.primaryCta.to} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowUpRight className="w-4 h-4" />
            </SmartLink>
            {hero.secondaryCta && (
              <SmartLink
                to={hero.secondaryCta.to}
                external={hero.secondaryCta.external}
                className="btn-ghost"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </SmartLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview({ content }: { content: PageContent }) {
  return (
    <section className="relative py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-3xl reveal">
          <h2 className="section-title text-gray-900">{content.overview.heading}</h2>
          <div className="mt-6 space-y-4">
            {content.overview.body.map((p, i) => (
              <p key={i} className="text-gray-500 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItMatters({ content }: { content: PageContent }) {
  const { whyItMatters } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <h2 className="section-title text-gray-900 max-w-2xl reveal">{whyItMatters.heading}</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {whyItMatters.bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl glass p-6 reveal hover:border-ember-500/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center mb-4">
                  {Icon ? <Icon className="w-5 h-5 text-ember-500" /> : <Check className="w-5 h-5 text-ember-500" />}
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900">{b.title}</h3>
                {b.body && <p className="mt-2 text-sm text-gray-500 leading-relaxed">{b.body}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IncludeCard({ card }: { card: NavCard }) {
  const cardClass =
    'group rounded-2xl glass p-6 reveal hover:border-ember-500/40 hover:-translate-y-1 transition-all duration-500 flex flex-col';

  if (!card.related?.length) {
    return (
      <SmartLink to={card.to} external={card.external} className={cardClass}>
        <h3 className="text-xl font-display font-semibold text-gray-900 flex items-center gap-2">
          {card.title}
        </h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">{card.body}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm text-ember-500 group-hover:text-ember-400">
          Explore
          <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </SmartLink>
    );
  }

  return (
    <div className={`relative ${cardClass}`}>
      <SmartLink
        to={card.to}
        external={card.external}
        aria-label={card.title}
        className="absolute inset-0 z-10"
      />
      <h3 className="text-xl font-display font-semibold text-gray-900 flex items-center gap-2">
        {card.title}
      </h3>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">{card.body}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm text-ember-500 group-hover:text-ember-400">
        Explore
        <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <div className="relative z-20 mt-4 pt-4 border-t border-gray-200/70 flex flex-wrap gap-2">
        {card.related.map((r) => (
          <SmartLink
            key={r.to}
            to={r.to}
            external={r.external}
            className="inline-flex items-center gap-1 rounded-full glass-strong px-3 py-1 text-xs font-medium text-gray-700 hover:text-ember-500 transition"
          >
            {r.label}
            <ArrowUpRight className="w-3 h-3" />
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

function Includes({ content }: { content: PageContent }) {
  const { includes } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <h2 className="section-title text-gray-900">{includes.heading}</h2>
          {includes.intro && <p className="mt-5 text-gray-500 leading-relaxed">{includes.intro}</p>}
        </div>

        {includes.cards && (
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {includes.cards.map((c) => (
              <IncludeCard key={c.title} card={c} />
            ))}
          </div>
        )}

        {includes.scope && (
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-4">
            {includes.scope.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl glass p-5 reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="mt-1 w-6 h-6 rounded-full bg-ember-500/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-ember-500" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-gray-900">{s.title}</h3>
                  {s.body && <p className="mt-1 text-sm text-gray-500 leading-relaxed">{s.body}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProcessStepper({ content }: { content: PageContent }) {
  const { process } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <h2 className="section-title text-gray-900 max-w-2xl reveal">{process.heading}</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {process.steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl glass p-6 reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="font-mono text-sm text-ember-500">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-display font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCards({ content }: { content: PageContent }) {
  const { industries } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <h2 className="section-title text-gray-900">{industries.heading}</h2>
          {industries.intro && <p className="mt-5 text-gray-500 leading-relaxed">{industries.intro}</p>}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.refs.map((r, i) => (
            <Link
              key={r.slug}
              to={`/industries/${r.slug}`}
              className="group rounded-2xl glass p-6 reveal hover:border-ember-500/40 hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h3 className="text-lg font-display font-semibold text-gray-900 flex items-center justify-between">
                {r.name}
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-ember-500 transition" />
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{r.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalloutBlock({ callout }: { callout: CalloutType }) {
  return (
    <div className="relative rounded-2xl glass-strong p-7 md:p-9 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-ember-500/10 blur-3xl" />
      <div className="relative">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900">{callout.heading}</h3>
        <p className="mt-3 text-gray-500 leading-relaxed max-w-2xl">{callout.body}</p>
        <SmartLink
          to={callout.href}
          external={callout.external}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ember-500 hover:text-ember-400"
        >
          {callout.linkLabel}
          <ArrowUpRight className="w-4 h-4" />
        </SmartLink>
      </div>
    </div>
  );
}

function WhyDishNet({ content }: { content: PageContent }) {
  const { whyDishNet } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 reveal">
            <h2 className="section-title text-gray-900">{whyDishNet.heading}</h2>
            <div className="mt-6 space-y-4">
              {whyDishNet.body.map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          {whyDishNet.callout && (
            <div className="lg:col-span-6 reveal">
              <CalloutBlock callout={whyDishNet.callout} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CrossLink({ content }: { content: PageContent }) {
  if (!content.crossLink) return null;
  return (
    <section className="relative py-6 md:py-10">
      <div className="relative mx-auto max-w-7xl px-5 reveal">
        <CalloutBlock callout={content.crossLink} />
      </div>
    </section>
  );
}

function FaqAccordion({ content }: { content: PageContent }) {
  const [open, setOpen] = useState<number | null>(0);
  const { faqs } = content;
  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="relative mx-auto max-w-3xl px-5">
        <h2 className="section-title text-gray-900 reveal">{faqs.heading}</h2>
        <div className="mt-8 space-y-3">
          {faqs.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl glass overflow-hidden reveal">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ember-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1 text-sm text-gray-500 leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ content }: { content: PageContent }) {
  const { finalCta } = content;
  return (
    <section className="relative py-16 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="relative rounded-3xl glass-strong overflow-hidden p-10 md:p-16 text-center reveal">
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <div className="ambient" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-gray-900">
              {finalCta.heading}
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">{finalCta.subhead}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <SmartLink to={finalCta.primary.to} className="btn-primary">
                {finalCta.primary.label}
                <ArrowUpRight className="w-4 h-4" />
              </SmartLink>
              {finalCta.secondary && (
                <SmartLink
                  to={finalCta.secondary.to}
                  external={finalCta.secondary.external}
                  className="btn-ghost"
                >
                  {finalCta.secondary.label}
                  <ArrowRight className="w-4 h-4" />
                </SmartLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageTemplate({ content }: { content: PageContent }) {
  const trail = [
    { name: 'Home', path: '/' },
    { name: content.breadcrumbParent.name, path: content.breadcrumbParent.path },
    { name: content.hero.chip, path: content.path },
  ];

  const jsonLd = [
    organizationSchema,
    breadcrumbSchema(trail),
    serviceSchema({
      name: content.seo.title,
      description: content.seo.description,
      path: content.path,
      serviceType: content.serviceType,
    }),
    faqSchema(content.faqs.items.map((f) => ({ q: f.q, a: f.a }))),
  ];

  return (
    <>
      <Seo
        title={content.seo.title}
        description={content.seo.description}
        canonical={`${SITE}${content.path}`}
        jsonLd={jsonLd}
      />
      <Breadcrumb content={content} />
      <PageHero content={content} />
      <Overview content={content} />
      <WhyItMatters content={content} />
      <Includes content={content} />
      <ProcessStepper content={content} />
      <IndustryCards content={content} />
      <WhyDishNet content={content} />
      <CrossLink content={content} />
      <FaqAccordion content={content} />
      <FinalCta content={content} />
    </>
  );
}
