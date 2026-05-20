import { Radio, Calendar, Building2, Briefcase, ShieldCheck } from 'lucide-react';
import TraceButton from './GetAQuoteButton';

const logos = [
  { name: 'Oracle', src: '/Oracle.png' },
  { name: 'Lennar', src: '/Lennar.png' },
  { name: 'Devcon', src: '/Devcon.png' },
  { name: 'Prometheus', src: '/Prometheus.png' },
  { name: 'Swenson', src: '/Swenson.png' },
  { name: 'Essex', src: '/Essex.png' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] lg:h-screen lg:min-h-[760px] pt-20 md:pt-24 pb-32 md:pb-40 overflow-hidden flex flex-col"
    >
      {/* Desktop hero background — unchanged */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/redwhite.png')",
          backgroundSize: '58% auto',
          backgroundPosition: 'right 156px center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 80% at 78% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 100%)',
          maskImage:
            'radial-gradient(ellipse 70% 80% at 78% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Mobile hero background — large, behind everything as ambient */}
      <div
        className="lg:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/redwhite.png')",
          backgroundSize: '180% auto',
          backgroundPosition: 'right -40% center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 80% at 75% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0) 100%)',
          maskImage:
            'radial-gradient(ellipse 90% 80% at 75% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        className="absolute -left-40 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(229,31,8,0.08), transparent 65%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none"
        style={{
          height: '45%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%)',
        }}
      />

      <SideIndex />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-16 flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 w-full">
          <div className="lg:col-span-6 xl:col-span-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.25em] text-gray-500 border border-gray-200 bg-white/80 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-glow-pulse" />
              Design / Build / Maintain
            </div>

            <h1 className="mt-5 font-display font-semibold leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-gray-900">
              <span className="block">Plan.</span>
              <span className="block">Execute.</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #ff2d0a 0%, #ff4a1a 35%, #ff6a2a 65%, #ff2d0a 100%)',
                }}
              >
                Deliver.
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-10 bg-ember-500" />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-500">
                The Leader in Low Voltage &amp; Systems Integration
              </p>
            </div>

            <p className="mt-4 max-w-md text-gray-600 text-sm md:text-base leading-relaxed">
              Dishnet Direct engineers mission-critical low-voltage, security, and
              fire/life safety infrastructures for the buildings that power modern life.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <TraceButton
                href="#contact"
                buttonStyle="rounded-fill"
                colors={{ primary: '#ef4444', accent: '#f87171', text: '#ff2d0a' }}
              >
                Get a Quote
              </TraceButton>
              <a href="#services" className="btn-ghost">
                Explore Services
              </a>
            </div>

            <StatsStrip />
          </div>

          <div className="lg:col-span-6 xl:col-span-7 relative h-full min-h-[480px] hidden lg:block">
            <FloatingUI />
          </div>
        </div>
      </div>

      <TrustedMarquee />
    </section>
  );
}

function SideIndex() {
  return (
    <div className="hidden md:flex flex-col items-center gap-2 absolute left-4 top-1/2 -translate-y-1/2 z-10">
      <span className="text-ember-500 font-mono text-xs tracking-widest">01</span>
      <div className="w-px h-24 bg-gradient-to-b from-ember-500/60 to-transparent" />
      <div className="flex flex-col gap-1.5">
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="w-1 h-1 rounded-full bg-gray-200" />
        <span className="w-1 h-1 rounded-full bg-gray-200" />
      </div>
      <div className="w-px h-24 bg-gradient-to-t from-ember-500/60 to-transparent" />
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { icon: <Calendar className="w-4 h-4" />, value: '2002', label: 'Year Established' },
    { icon: <Building2 className="w-4 h-4" />, value: '360+', label: 'Projects Completed' },
    { icon: <Briefcase className="w-4 h-4" />, value: '40', label: 'Active Projects' },
    { icon: <ShieldCheck className="w-4 h-4" />, value: '0', label: 'Jobsite Injuries' },
  ];
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl">
      {stats.map((s, i) => (
        <div key={i} className="relative pl-4">
          {i > 0 && (
            <div className="hidden sm:block absolute -left-0 top-1 bottom-1 w-px bg-gray-200" />
          )}
          <div className="flex items-center gap-2 text-ember-500">
            {s.icon}
            <span
              className="font-display text-2xl md:text-3xl font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #ff2d0a 0%, #ff6a1a 35%, #ffb347 70%, #f5c26b 100%)',
              }}
            >
              {s.value}
            </span>
          </div>
          <div className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function FloatingUI({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative w-full ${compact ? 'h-[380px]' : 'h-full min-h-[480px]'}`}>
      <div className="absolute top-12 left-0">
        <GlassCard>
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">
            System Uptime
          </div>
          <div className="text-gray-900 font-display text-2xl mt-1">99.98%</div>
          <MiniChart />
        </GlassCard>
      </div>

      <div className="absolute top-12 right-0">
        <GlassCard className="min-w-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">
            Safety Record
          </div>
          <div className="text-gray-900 font-display text-2xl mt-1">0 Incidents</div>
          <div className="text-[10px] text-emerald-600 font-mono mt-0.5">Since 2002</div>
          <div className="mt-2 flex flex-col gap-1.5">
            {['OSHA Compliant', 'Licensed', 'Bonded & Insured'].map((label) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="absolute bottom-[60px] left-0">
        <GlassCard className="min-w-[220px]">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">
            DAS Coverage
          </div>
          <div className="text-gray-900 font-display text-xl mt-1">Active</div>
          <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-4/5 bg-gradient-to-r from-ember-600 to-ember-400" />
          </div>
        </GlassCard>
      </div>

      <div className="absolute bottom-[60px] right-0">
        <GlassCard className="min-w-[200px]">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">
            Expertise
          </div>
          <div className="text-gray-900 font-display text-xl mt-1">3 Disciplines</div>
          <div className="mt-2 flex flex-col gap-1.5">
            {['Low Voltage', 'Security', 'Fire / Life Safety'].map((label) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="absolute bottom-2 right-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
        <span className="text-gray-900">DND-OPS-01</span>
        <span
          className="flex items-center gap-1.5"
          style={{
            color: '#ff2d0a',
            textShadow: '0 0 6px rgba(255,45,10,0.9), 0 0 14px rgba(255,45,10,0.6)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
            style={{
              background: '#ff2d0a',
              boxShadow: '0 0 6px 2px rgba(255,45,10,0.9), 0 0 14px 4px rgba(255,45,10,0.6)',
            }}
          />
          Live
        </span>
      </div>

      <RadarGraphic />
    </div>
  );
}

function RadarGraphic() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
        {/* Bloom glow */}
        <div
          className="absolute inset-[-20%] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(220,38,18,0.18) 0%, rgba(200,30,10,0.07) 50%, transparent 72%)',
            filter: 'blur(18px)',
            animation: 'radar-bloom 4.5s ease-in-out infinite',
          }}
        />

        {/* Ping rings — ember on light bg */}
        <span
          className="absolute inset-0 rounded-full border border-ember-600/60"
          style={{ animation: 'radar-ping 4s cubic-bezier(0.25, 0.8, 0.4, 1) infinite' }}
        />
        <span
          className="absolute inset-0 rounded-full border border-ember-500/45"
          style={{
            animation: 'radar-ping 4s cubic-bezier(0.25, 0.8, 0.4, 1) infinite',
            animationDelay: '1.3s',
          }}
        />
        <span
          className="absolute inset-0 rounded-full border border-ember-400/30"
          style={{
            animation: 'radar-ping 4s cubic-bezier(0.25, 0.8, 0.4, 1) infinite',
            animationDelay: '2.6s',
          }}
        />

        {/* Static concentric rings — gray tones readable on white */}
        <div className="absolute inset-0 rounded-full border border-gray-300/70" />
        <div className="absolute inset-4 rounded-full border border-gray-300/50" />
        <div className="absolute inset-8 rounded-full border border-ember-500/50" />
        <div
          className="absolute inset-12 rounded-full border border-ember-600/70"
          style={{ animation: 'radar-inner-spin 18s linear infinite' }}
        />

        {/* Sweep */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden opacity-70"
          style={{ animation: 'radar-sweep 6s linear infinite' }}
        >
          <div
            className="absolute top-0 left-1/2 h-1/2 w-1/2 origin-bottom-left"
            style={{
              background:
                'conic-gradient(from 0deg at 0% 100%, rgba(220,38,18,0.55), rgba(220,38,18,0) 70deg)',
            }}
          />
        </div>

        {/* Center glow */}
        <div className="absolute inset-[35%] rounded-full bg-ember-600/30 blur-lg" />
        <Radio
          className="relative w-8 h-8 text-ember-600"
          strokeWidth={1.5}
          style={{
            animation: 'radar-breathe 3.2s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
}

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-strong rounded-2xl px-4 py-3 min-w-[180px] animate-float shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] ${className}`}
      style={{
        animationDelay: `${Math.random() * 2}s`,
        borderColor: 'rgba(0,0,0,0.08)',
      }}
    >
      {children}
    </div>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 120 36" className="mt-2 w-full h-8">
      <defs>
        <linearGradient id="uptime-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff3820" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff3820" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 L15 24 L30 26 L45 18 L60 20 L75 12 L90 14 L105 6 L120 10 L120 36 L0 36 Z"
        fill="url(#uptime-grad)"
      />
      <path
        d="M0 28 L15 24 L30 26 L45 18 L60 20 L75 12 L90 14 L105 6 L120 10"
        stroke="#ff3820"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}


function TrustedMarquee() {
  const row = [...logos, ...logos, ...logos];
  return (
    <div className="absolute bottom-4 md:bottom-6 inset-x-0 z-[5]">
      <div className="text-center mb-1">
        <span
          className="text-[11px] md:text-xs font-mono uppercase tracking-[0.4em]"
          style={{
            color: '#ff3b2a',
            textShadow:
              '0 0 6px rgba(255,45,20,0.9), 0 0 14px rgba(255,45,20,0.65), 0 0 28px rgba(255,80,40,0.45)',
          }}
        >
          Trusted by Industry Leaders
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />
        <div
          className="flex items-center gap-20 md:gap-28 whitespace-nowrap"
          style={{ animation: 'marquee 45s linear infinite', width: 'max-content' }}
        >
          {row.map((logo, i) => (
            <div
              key={i}
              className="group flex items-center justify-center shrink-0 h-16 md:h-20 px-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-500 ease-out"
                style={{ filter: 'grayscale(1) brightness(0.5) contrast(1.1)', transition: 'filter 0.4s ease, opacity 0.4s ease, transform 0.5s ease' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    'grayscale(1) sepia(1) hue-rotate(320deg) saturate(6) brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    'grayscale(1) brightness(0.5) contrast(1.1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
