import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2002, label: 'Year Established', suffix: '', isYear: true },
  { value: 360, label: 'Projects Completed', suffix: '' },
  { value: 40, label: 'Active Projects', suffix: '' },
  { value: 0, label: 'Jobsite Injuries', suffix: '' },
];

export function Stats() {
  return (
    <section className="relative py-24 md:py-28 border-y border-gray-200">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <div className="chip mb-4">By the numbers</div>
            <h2 className="section-title text-gray-900">Track record.</h2>
          </div>
          <div className="hidden md:block font-mono text-xs uppercase tracking-[0.3em] text-gray-400">
            // CA-OPS / Q-LIVE
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <StatBlock key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  value,
  label,
  isYear,
}: {
  value: number;
  label: string;
  suffix: string;
  isYear?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1600;
          const start = performance.now();
          const from = isYear ? value - 25 : 0;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(from + (value - from) * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, isYear]);

  return (
    <div ref={ref} className="relative bg-white p-8 md:p-10 group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-ember-600/10 to-transparent" />
      <div className="relative">
        <div className="font-display text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">
          {display}
        </div>
        <div className="mt-4 h-px w-10 bg-ember-500" />
        <div className="mt-4 text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
          {label}
        </div>
      </div>
    </div>
  );
}
