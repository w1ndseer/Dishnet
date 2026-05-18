import { ArrowUpRight, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute -left-20 top-1/3 w-[600px] h-[600px] rounded-full bg-ember-600/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="chip mb-5">
            <Users className="w-3 h-3" />
            Our Team
          </div>
          <h2 className="section-title text-gray-900">
            We are <span className="italic font-normal text-gray-600">Dishnet Direct.</span>
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-ember-400">
            Plan. Execute. Deliver.
          </p>

          <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
            <p>
              This is our motto, and at Dishnet Direct, Inc. we have been a trusted
              name in Low Voltage systems and a solution provider since 2002. We
              serve both Northern and Southern California while having offices in
              both regions. Being a great systems provider means having complete and
              total confidence in the people providing those services. We are proud
              to have the best people in the business working with us, with a focus
              on personalized/customized service, and competitive pricing, we are an
              easy choice to go with.
            </p>
            <p>
              Most of all we understand what customer service means. We are always
              striving to meet and exceed our high standards and our clients'
              expectations. We truly under promise and over deliver, it is in our
              DNA.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              See Our Work
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal">
          {/* Outer glow ring — animates on hover */}
          <div className="group relative">
            {/* Premium border frame */}
            <div
              className="absolute -inset-[3px] rounded-3xl z-10 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(135deg, rgba(255,56,32,0.8) 0%, rgba(255,160,80,0.4) 40%, rgba(255,56,32,0.1) 60%, rgba(255,100,50,0.7) 100%)',
                borderRadius: '26px',
                padding: '2px',
              }}
            >
              <div className="w-full h-full rounded-3xl bg-transparent" />
            </div>
            {/* Outer glow */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,56,32,0.18) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong transition-transform duration-500 group-hover:scale-[1.015]">
              <img
                src="/elia.png"
                alt="Dishnet Direct Team"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.04]"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute top-5 left-5 chip">
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-glow-pulse" />
                EST. 2002
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-5 w-52 animate-float">
            <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Since
            </div>
            <div className="font-display text-4xl text-gray-900 mt-1">2002</div>
            <div className="text-xs text-gray-500 mt-1">Trusted partner in low voltage</div>
          </div>
          <div className="absolute -top-6 -right-6 glass-strong rounded-2xl p-5 w-56 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="text-xs font-mono uppercase tracking-widest text-ember-400">
              Coverage
            </div>
            <div className="font-display text-2xl text-gray-900 mt-1 leading-tight">
              Northern &amp; Southern California
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
