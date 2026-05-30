import { ArrowUpRight } from 'lucide-react';
import { DAS_URL } from '../seo/org';

const integratorTags = ['Low Voltage', 'Security', 'Fire / Life Safety', 'AV', 'Structured Wiring'];
const specialistTags = ['ERRCS', 'Cellular DAS', 'In-Building Wireless', 'RF Engineering'];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border border-gray-200 text-gray-500 bg-gray-50">
      {label}
    </span>
  );
}

export function SpecialistDivision() {
  return (
    <section className="relative py-16 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <div className="chip mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
            One organization
          </div>
          <h2 className="section-title text-gray-900">Specialist depth, integrated delivery</h2>
          <p className="mt-5 text-gray-500 leading-relaxed">
            DishNet Direct delivers the integrated low-voltage, security, and life-safety stack. Our
            specialist division, DAS Systems, brings 25 years of dedicated RF engineering — ERRCS,
            cellular DAS, and in-building wireless — to every project that needs it.
          </p>
        </div>

        <div className="mt-10 md:mt-14 relative">
          {/* connecting element tying the two columns together */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-strong items-center justify-center text-[10px] font-mono uppercase tracking-widest text-ember-500 flex">
            <span>&amp;</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
            {/* Left — The Integrator */}
            <div className="rounded-2xl glass p-7 md:p-9 reveal">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ember-500">
                The Integrator
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-gray-900">
                DishNet Direct
              </h3>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                The full-service systems integrator delivering low voltage, security, and fire/life
                safety as one coordinated stack. New construction, retrofit, ongoing maintenance — one
                contract, one project manager, one accountable team for the entire building.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {integratorTags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="mt-6 text-xs font-mono uppercase tracking-widest text-gray-400">
                You are here
              </div>
            </div>

            {/* Right — The Specialist Division */}
            <div className="rounded-2xl glass-strong p-7 md:p-9 reveal">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ember-500">
                The Specialist Division
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-display font-semibold text-gray-900">
                DAS Systems
              </h3>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                25 years of focused RF engineering. ERRCS code compliance, cellular DAS design,
                in-building wireless strategy — for projects that need a specialist who has done it
                before, with Bay Area AHJ relationships and carrier coordination built over two and a
                half decades.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {specialistTags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <a
                href={DAS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember-500 hover:text-ember-400"
              >
                Visit dassystems.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 reveal">
          Same ownership. Same engineering bench. Same field crews. Two front doors, because the
          buyers are different.
        </p>
      </div>
    </section>
  );
}
