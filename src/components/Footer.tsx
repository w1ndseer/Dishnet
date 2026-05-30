import { Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DAS_URL } from '../seo/org';

type FooterLink = { to: string; label: string; external?: boolean };

const navGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Navigation',
    links: [
      { to: '/#home', label: 'Home' },
      { to: '/#services', label: 'Services' },
      { to: '/#about', label: 'About' },
      { to: '/#projects', label: 'Projects' },
      { to: '/#contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services/low-voltage', label: 'Low Voltage' },
      { to: '/services/security', label: 'Security' },
      { to: '/services/fire-life-safety', label: 'Fire & Life Safety' },
      { to: '/services/errcs', label: 'ERRCS' },
      { to: '/services/cellular-das', label: 'Cellular DAS' },
      { to: '/services/in-building-wireless', label: 'In-Building Wireless' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/#about', label: 'Our Team' },
      { to: '/#about', label: 'DishNet in the Community' },
      { to: '/#projects', label: 'Projects' },
      { to: DAS_URL, label: 'DAS Systems', external: true },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const cls = 'text-sm text-gray-600 hover:text-ember-500 active:text-ember-500 transition inline-flex items-center gap-1 py-1.5';
  if (link.external) {
    return (
      <a href={link.to} target="_blank" rel="noopener noreferrer" className={cls}>
        {link.label}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    );
  }
  return (
    <Link to={link.to} className={cls}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/60" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col items-start -ml-2">
              <img
                src="/dishnet.png"
                alt="DishNet Direct"
                className="h-14 md:h-20 w-auto object-contain select-none"
                draggable={false}
              />
              <div className="ml-2 -mt-1 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500">
                Plan. Execute. Deliver.
              </div>
            </Link>
            <p className="mt-5 text-sm text-gray-500 max-w-xs leading-relaxed">
              The Leader in Low Voltage &amp; Systems Integration. Design. Build. Maintain.
              Serving Northern &amp; Southern California since 2002.
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
              In-building wireless is delivered by our specialist division,{' '}
              <a href={DAS_URL} target="_blank" rel="noopener noreferrer" className="text-ember-500 hover:text-ember-400 transition">
                DAS Systems
              </a>
              .
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/das_systems/' },
                { Icon: Facebook, href: 'https://www.facebook.com/dishnetdirect/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/234065/' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:border-ember-500/60 hover:text-ember-500 transition">
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-ember-500 transition" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-6 flex-wrap">
              {[
                { src: '/Butterfly.avif', alt: 'Butterfly' },
                { src: '/BGCSCC_logo_vert.avif', alt: 'BGCSCC' },
                { src: '/FullSizeRender-7.avif', alt: 'Community Partner' },
              ].map(({ src, alt }) => (
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  className="h-16 md:h-20 w-auto object-contain bg-transparent hover:scale-105 transition-transform duration-300"
                  style={{ mixBlendMode: 'multiply' }}
                />
              ))}
            </div>
          </div>

          {navGroups.map((g) => (
            <div key={g.title} className="lg:col-span-2">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">
                {g.title}
              </div>
              <ul className="mt-4 space-y-1">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <FooterAnchor link={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>142 Kennedy Avenue<br />Campbell, CA 95008</li>
              <li>
                <a href="tel:+14083405085" className="hover:text-ember-500 active:text-ember-500 transition">(408) 340-5085</a>
              </li>
              <li>
                <a href="mailto:info@dishnetdirect.com" className="hover:text-ember-500 active:text-ember-500 transition">
                  info@dishnetdirect.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-3 text-xs font-mono uppercase tracking-widest text-gray-400">
          <div>© {new Date().getFullYear()} DishNet Direct, Inc. All rights reserved.</div>
          <div>Northern &amp; Southern California</div>
        </div>
      </div>
    </footer>
  );
}
