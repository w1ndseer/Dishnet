import { Cable, Shield, Flame, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'low-voltage',
    icon: Cable,
    title: 'Low Voltage',
    tag: '[SERVICE IMAGE PLACEHOLDER - LOW VOLTAGE]',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Dishnet Direct is a SI (Systems Integrator) in Low Voltage applications that are key to running successful businesses, healthcare and entertainment facilities, campuses and industrial properties. We design, build, monitor and maintain security, CCTV, A/V, Fire/life safety systems as well as Tele/Data communication infrastructures. Our partnerships with top technology hardware suppliers plus the ongoing training and certification of our team members makes Dishnet Direct a trusted partner and resource.',
    items: [
      'Audio Visual Systems',
      'Structured Wiring',
      'Central Satellite Systems',
      'Off Air Antenna systems',
      'Digital Signage',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    tag: '[SERVICE IMAGE PLACEHOLDER - SECURITY]',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Dishnet Direct completely understands security systems. We are experts at determining which technology suits your needs, and designing, installing and maintaining your security system. Our partnerships with leading developers and manufacturers mean that when you work with Dishnet Direct you are always receiving state-of-the-art solutions.',
    items: [
      'Access Control Systems',
      'Intrusion Alarm Systems',
      'Surveillance Systems (CCTV)',
    ],
  },
  {
    id: 'fire-life-safety',
    icon: Flame,
    title: 'Fire / Life Safety',
    tag: '[SERVICE IMAGE PLACEHOLDER - FIRE LIFE SAFETY]',
    image: '/how-do-commercial-fire-alarms-work.webp',
    description:
      'Dishnet Direct specifically partners with leading suppliers and engineered system distributors to provide the best design/build, design/assist and plan-spec engineering services that focuses on the utilization of the latest 3D AutoCAD and other current technologies.',
    items: [
      'ERRCS/DAS Turnkey',
      'FA Smoke/Fire Detection',
      'Two-Way Communication',
      'Systems Integration',
    ],
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
            Three disciplines. One team. From rough-in to turnkey handoff, every
            layer of the stack is owned by Dishnet Direct.
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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div
      id={service.id}
      className="group relative rounded-2xl glass overflow-hidden reveal hover:border-ember-500/40 transition-all duration-500 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.tag}
          className="w-full h-full object-cover scale-110 group-hover:scale-105 transition duration-700 opacity-70 group-hover:opacity-100"
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

      <div className="p-5 md:p-7">
        <h3 className="text-2xl font-display font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-5 group-hover:line-clamp-none transition-all">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <span className="w-1 h-1 rounded-full bg-ember-500" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1 text-sm text-ember-400 group-hover:text-ember-300"
        >
          Discuss a project
          <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
           style={{ boxShadow: '0 0 0 1px rgba(229,31,8,0.35), 0 40px 80px -20px rgba(229,31,8,0.35)' }} />
    </div>
  );
}
