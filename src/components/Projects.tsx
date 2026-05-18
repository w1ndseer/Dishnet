import { MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Revere',
    location: 'Campbell, CA',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600',
    services: [
      'ERRCS (Emergency Responder Radio Coverage System)/DAS (Distributed Antenna System)',
      'Fire Alarm/Two Way Communication',
      'Access Control',
      'CCTV',
      'Structured Wiring',
      'Wifi Systems',
      'Audio Visual (A/V)',
    ],
  },
  {
    name: 'Epic I, II, III',
    location: 'San Jose, CA',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1600',
    services: [
      'ERRCS (Emergency Responder Radio Coverage System)/DAS (Distributed Antenna System)',
      'Neutral Host Wireless DAS',
      'IP CCTV System',
    ],
  },
  {
    name: 'Sequoia Belle Haven',
    location: 'Menlo Park, CA',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600',
    services: [
      'ERRCS (Emergency Responder Radio Coverage System)/DAS (Distributed Antenna System)',
      'CSN',
      'Off Air Antenna',
    ],
  },
  {
    name: 'Ohlone Apartments',
    location: 'San Jose, CA',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    services: ['Low Voltage Systems Integration'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <div className="chip mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              Selected Projects
            </div>
            <h2 className="section-title text-gray-900 max-w-2xl">
              Built to spec. <br />
              <span className="text-gray-400">Delivered without compromise.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost self-start md:self-auto">
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative rounded-3xl overflow-hidden glass border border-gray-200 hover:border-ember-500/40 transition-all duration-500 reveal ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative ${featured ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
        <img
          src={project.image}
          alt={`[PROJECT IMAGE PLACEHOLDER] ${project.name}`}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-[1200ms] opacity-75 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 grid-bg-fine opacity-20 mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
          style={{
            background:
              'radial-gradient(600px 300px at 30% 100%, rgba(229,31,8,0.35), transparent 60%)',
          }}
        />

        <div className="absolute top-5 left-5 chip">
          <MapPin className="w-3 h-3" />
          {project.location}
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
          <h3 className="font-display text-3xl md:text-5xl font-semibold text-white">
            {project.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.services.slice(0, featured ? 7 : 4).map((s) => (
              <span
                key={s}
                className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </article>
  );
}
