import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
};

const SITE = 'https://www.dishnetdirect.com';

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function Seo({ title, description, canonical, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = canonical ?? SITE;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setLink('canonical', url);

    const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const nodes = blocks.map((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'page');
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, [title, description, canonical, jsonLd]);

  return null;
}

export { SITE };
