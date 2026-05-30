import type { LucideIcon } from 'lucide-react';

export type Bullet = {
  title: string;
  body?: string;
  icon?: LucideIcon;
};

export type NavCard = {
  title: string;
  body: string;
  to: string;
  external?: boolean;
  related?: { label: string; to: string; external?: boolean }[];
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Callout = {
  heading: string;
  body: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

export type IndustryRef = {
  slug: string;
  name: string;
  blurb: string;
};

export type PageContent = {
  kind: 'category' | 'service' | 'industry';
  slug: string;
  // Full route path for canonical/breadcrumb/schema.
  path: string;
  breadcrumbParent: { name: string; path: string };
  seo: { title: string; description: string };
  serviceType: string;

  hero: {
    chip: string;
    h1: string;
    subhead: string;
    primaryCta: { label: string; to: string };
    secondaryCta?: { label: string; to: string; external?: boolean };
  };

  overview: { heading: string; body: string[] };

  whyItMatters: { heading: string; bullets: Bullet[] };

  // category -> nav cards into deeper pages; service -> "what's included" scope list
  includes: {
    heading: string;
    intro?: string;
    cards?: NavCard[];
    scope?: Bullet[];
  };

  process: { heading: string; steps: ProcessStep[] };

  industries: { heading: string; intro?: string; refs: IndustryRef[] };

  whyDishNet: { heading: string; body: string[]; callout?: Callout };

  // Optional extra cross-link callout (service pages -> dassystems.com technical pages)
  crossLink?: Callout;

  faqs: { heading: string; items: Faq[] };

  finalCta: {
    heading: string;
    subhead: string;
    primary: { label: string; to: string };
    secondary?: { label: string; to: string; external?: boolean };
  };
};
