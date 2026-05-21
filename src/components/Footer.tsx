import { Linkedin, Facebook, Instagram } from 'lucide-react';

const navGroups = [
  {
    title: 'Navigation',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '#low-voltage', label: 'Low Voltage' },
      { href: '#security', label: 'Security' },
      { href: '#fire-life-safety', label: 'Fire / Life Safety' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#about', label: 'Our Team' },
      { href: '#about', label: 'Dishnet in the Community' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'RF Test' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/60" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex flex-col items-start -ml-2">
              <img
                src="/dishnet.png"
                alt="Dishnet Direct"
                className="h-14 md:h-20 w-auto object-contain select-none"
                draggable={false}
              />
              <div className="ml-2 -mt-1 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-gray-500">
                Plan. Execute. Deliver.
              </div>
            </a>
            <p className="mt-5 text-sm text-gray-500 max-w-xs leading-relaxed">
              The Leader in Low Voltage &amp; Systems Integration. Design. Build. Maintain.
              Serving Northern &amp; Southern California since 2002.
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
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-600 hover:text-ember-500 active:text-ember-500 transition inline-block py-1.5">
                      {l.label}
                    </a>
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
          <div>© {new Date().getFullYear()} Dishnet Direct, Inc. All rights reserved.</div>
          <div>Northern &amp; Southern California</div>
        </div>
      </div>
    </footer>
  );
}
