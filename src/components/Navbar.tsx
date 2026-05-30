import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { href: '/#home', label: 'Home', section: 'home' },
  { href: '/#services', label: 'Services', section: 'services' },
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#projects', label: 'Projects', section: 'projects' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
];

const serviceMenu = {
  categories: [
    { to: '/services/low-voltage', label: 'Low Voltage' },
    { to: '/services/security', label: 'Security' },
    { to: '/services/fire-life-safety', label: 'Fire & Life Safety' },
  ],
  wireless: [
    { to: '/services/errcs', label: 'ERRCS' },
    { to: '/services/cellular-das', label: 'Cellular DAS' },
    { to: '/services/in-building-wireless', label: 'In-Building Wireless' },
  ],
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = 'home';
      for (const l of links) {
        const el = document.getElementById(l.section);
        if (el && el.offsetTop <= y) current = l.section;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="relative w-full bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="nav-trail" aria-hidden="true">
          <div className="nav-trail__left" />
          <div className="nav-trail__right" />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 md:h-[88px] flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0 group -ml-3 md:-ml-6 overflow-visible">
            <img
              src="/dishnet.png"
              alt="DishNet Direct"
              className="h-14 md:h-20 w-auto object-contain select-none transition-opacity group-hover:opacity-90"
              draggable={false}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const isActive = isHome && active === l.section;
              if (l.section === 'services') {
                return (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={l.href}
                      className={`px-4 py-2 text-sm transition-colors rounded-full hover:text-ember-500 inline-flex items-center gap-1 ${
                        isActive || pathname.startsWith('/services') ? 'text-ember-500' : 'text-gray-600'
                      }`}
                    >
                      {l.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                        <div className="w-[320px] rounded-2xl glass-strong p-4 shadow-xl">
                          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 px-2">
                            Capabilities
                          </div>
                          <div className="mt-2 grid gap-1">
                            {serviceMenu.categories.map((s) => (
                              <Link
                                key={s.to}
                                to={s.to}
                                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-100 hover:text-ember-500 transition"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 px-2">
                            In-Building Wireless · DAS Systems
                          </div>
                          <div className="mt-2 grid gap-1">
                            {serviceMenu.wireless.map((s) => (
                              <Link
                                key={s.to}
                                to={s.to}
                                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:bg-gray-100 hover:text-ember-500 transition"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-full hover:text-ember-500 ${
                    isActive ? 'text-ember-500' : 'text-gray-600'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/#contact" className="btn-primary text-sm">
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
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
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
            <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-xl"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 px-4 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400">
                Capabilities
              </div>
              {serviceMenu.categories.concat(serviceMenu.wireless).map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  {s.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-3"
              >
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
