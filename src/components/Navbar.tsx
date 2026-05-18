import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = '#home';
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="relative w-full bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="nav-trail" aria-hidden="true">
          <div className="nav-trail__left" />
          <div className="nav-trail__right" />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 md:h-[88px] flex items-center justify-between">
          <a href="#home" className="flex items-center shrink-0 group -ml-3 md:-ml-6 overflow-visible">
            <img
              src="/dishnet.png"
              alt="Dishnet Direct"
              className="h-14 md:h-20 w-auto object-contain select-none transition-opacity group-hover:opacity-90"
              draggable={false}
            />
          </a>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-full hover:text-ember-500 ${
                    isActive ? 'text-ember-500' : 'text-gray-600'
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn-primary text-sm">
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-xl"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
