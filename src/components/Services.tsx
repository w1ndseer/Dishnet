import { Cable, Shield, Flame, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { DAS_URL } from '../seo/org';

type Service = {
  id: string;
  icon: typeof Cable;
  title: string;
  tag: string;
  image: string;
  description: string;
  items: { label: ReactNode }[];
  to: string;
};

const services: Service[] = [
  {
    id: 'low-voltage',
    icon: Cable,
    title: 'Low Voltage',
    tag: '[SERVICE IMAGE PLACEHOLDER - LOW VOLTAGE]',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'We design, build, and maintain the cabling and AV backbone that everything in your building runs on — from structured wiring to digital signage. One integrator, one accountable team.',
    items: [
      { label: 'Audio Visual Systems' },
      { label: 'Structured Wiring' },
      { label: 'Central Satellite Systems' },
      { label: 'Off Air Antenna systems' },
      { label: 'Digital Signage' },
    ],
    to: '/services/low-voltage',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    tag: '[SERVICE IMAGE PLACEHOLDER - SECURITY]',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Access control, intrusion detection, and surveillance — designed against your actual threat model and integrated with the rest of your building systems, not bolted on after the fact.',
    items: [
      { label: 'Access Control Systems' },
      { label: 'Intrusion Alarm Systems' },
      { label: 'Surveillance Systems (CCTV)' },
    ],
    to: '/services/security',
  },
  {
    id: 'fire-life-safety',
    icon: Flame,
    title: 'Fire / Life Safety',
    tag: '[SERVICE IMAGE PLACEHOLDER - FIRE LIFE SAFETY]',
    image: '/how-do-commercial-fire-alarms-work.webp',
    description:
      'Code-compliant fire alarm, ERRCS, and life-safety integration — engineered with current 3D AutoCAD and delivered alongside our 25-year RF specialist division, DAS Systems.',
    items: [
      {
        label: (
          <>
            ERRCS / DAS Turnkey{' '}
            <a
              href={DAS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 text-xs text-gray-400 hover:text-ember-500 transition"
            >
              (specialist division: DAS Systems →)
            </a>
          </>
        ),
      },
      { label: 'FA Smoke/Fire Detection' },
      { label: 'Two-Way Communication' },
      { label: 'Systems Integration' },
    ],
    to: '/services/fire-life-safety',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-36">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <div className="chip mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              Capabilities
            </div>
            <h2 className="section-title text-gray-900 max-w-2xl">
              Integrated systems, engineered end to end.
            </h2>
          </div>
          <p className="max-w-md text-gray-500">
            Three disciplines. One team. From rough-in to turnkey handoff, every layer of the stack
            is owned by DishNet Direct — with our specialist RF division, DAS Systems, handling the
            in-building wireless layer.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <div
      id={service.id}
      className="group relative rounded-2xl glass overflow-hidden reveal hover:border-ember-500/40 transition-all duration-500 hover:-translate-y-1 flex flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        to={service.to}
        aria-label={`Explore ${service.title}`}
        className="absolute inset-0 z-10"
      />
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.tag}
          className="w-full h-full object-cover scale-110 group-hover:scale-105 transition duration-700 opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 grid-bg-fine opacity-30 mix-blend-overlay" />
        <div className="absolute top-4 left-4 chip">
          <span className="font-mono text-[10px]">0{index + 1}</span>
          {service.title}
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl glass-strong flex items-center justify-center">
          <Icon className="w-5 h-5 text-ember-400" />
        </div>
      </div>

      <div className="relative p-5 md:p-7 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">{service.description}</p>
        <ul className="mt-5 space-y-2">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-1 h-1 rounded-full bg-ember-500 shrink-0" />
              {item.label}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm text-ember-400 group-hover:text-ember-300">
          Explore {service.title}
          <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
           style={{ boxShadow: '0 0 0 1px rgba(229,31,8,0.35), 0 40px 80px -20px rgba(229,31,8,0.35)' }} />
    </div>
  );
}
