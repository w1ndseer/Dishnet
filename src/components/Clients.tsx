const logos = [
  { name: 'Oracle', src: '/Oracle.png' },
  { name: 'Lennar', src: '/Lennar.png' },
  { name: 'Devcon', src: '/Devcon.png' },
  { name: 'Prometheus', src: '/Prometheus.png' },
];

const trust = [
  'Trusted Since 2002',
  '360+ Projects Completed',
  'Northern & Southern California',
  'Low Voltage Experts',
];

export function Clients() {
  const row = [...logos, ...logos];
  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-8 reveal">
          <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.35em] text-ember-400/80">
            Trusted by Industry Leaders
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="py-6 md:py-8">
            <div
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
              style={{ animation: 'marquee 45s linear infinite', width: 'max-content' }}
            >
              {row.map((logo, i) => (
                <LogoItem key={i} src={logo.src} alt={logo.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div
            className="flex gap-6 animate-marquee-slow whitespace-nowrap"
            style={{ animationDirection: 'reverse' as const }}
          >
            {[...trust, ...trust].map((t, i) => (
              <div
                key={i}
                className="glass rounded-full px-5 py-2.5 text-sm text-gray-600 font-mono uppercase tracking-widest border border-gray-200"
              >
                <span className="text-ember-400 mr-2">//</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group flex items-center justify-center shrink-0 h-10 md:h-12 px-4">
      <img
        src={src}
        alt={alt}
        className="h-full w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-500 ease-out"
        style={{
          filter: 'grayscale(1) brightness(0.5) contrast(1.1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLImageElement).style.filter =
            'grayscale(1) brightness(0.3) contrast(1.2) drop-shadow(0 0 10px rgba(255,99,80,0.25))';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLImageElement).style.filter =
            'grayscale(1) brightness(0.5) contrast(1.1)';
        }}
      />
    </div>
  );
}
