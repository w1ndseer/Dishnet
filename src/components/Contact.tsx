import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Printer, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('contact_inquiries').insert([form]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute -right-40 top-1/4 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(229,31,8,0.28), transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <div className="chip mb-5">Get in touch</div>
            <h2 className="text-5xl md:text-7xl font-display font-semibold text-gray-900">
              Get a <span className="bg-gradient-to-br from-ember-300 to-amber2-500 bg-clip-text text-transparent">Quote.</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              For any inquiries or questions, please call{' '}
              <a href="tel:+14083405085" className="text-gray-900 font-medium underline decoration-ember-500/50">
                (408) 340-5085
              </a>{' '}
              or fill out the following form. We will get back to you within the next few hours.
            </p>

            <div className="mt-10 space-y-5">
              <InfoRow icon={MapPin} label="Head Office">
                142 Kennedy Avenue<br />Campbell, CA 95008
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href="mailto:info@dishnetdirect.com" className="hover:text-ember-400 transition">
                  info@dishnetdirect.com
                </a>
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                Tel: (408) 340-5085<br />Toll Free: (888) 203-0855
              </InfoRow>
              <InfoRow icon={Printer} label="Fax">
                (408) 340-5092
              </InfoRow>
            </div>

            <div className="mt-10 glass rounded-2xl p-5">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-ember-400">
                Employment
              </div>
              <p className="mt-2 text-sm text-gray-600">
                To apply for a job with Dishnet Direct Inc., please send a cover letter
                together with your C.V. to:{' '}
                <a href="mailto:info@dishnetdirect.com" className="text-white underline decoration-ember-500/50">
                  info@dishnetdirect.com
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative">
              <div className="glass-strong rounded-3xl p-6 md:p-10">
                {status === 'sent' ? (
                  <div className="flex flex-col items-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-ember-500/20 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-ember-400" />
                    </div>
                    <h3 className="font-display text-3xl text-gray-900">Message Sent!!</h3>
                    <p className="mt-3 text-gray-600 max-w-sm">
                      We will get back to you in the next 12 hours!! Look forward to working with you!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 btn-ghost"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
                    <Field label="Name" value={form.name}
                           onChange={(v) => setForm({ ...form, name: v })} required />
                    <Field label="Email" type="email" value={form.email}
                           onChange={(v) => setForm({ ...form, email: v })} required />
                    <Field label="Phone" value={form.phone}
                           onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Company" value={form.company}
                           onChange={(v) => setForm({ ...form, company: v })} />
                    <div className="md:col-span-2">
                      <Field label="Message" value={form.message} textarea
                             onChange={(v) => setForm({ ...form, message: v })} required />
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between gap-4 mt-2">
                      <div className="text-xs font-mono uppercase tracking-widest text-gray-400">
                        // Secure transmission
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-primary disabled:opacity-60"
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                    {status === 'error' && (
                      <div className="md:col-span-2 text-sm text-ember-400">
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}
                  </form>
                )}
              </div>

              <div className="mt-6 relative rounded-3xl overflow-hidden glass-strong aspect-[16/8] group">
                <img
                  src="/image copy.png"
                  alt="Map of 142 Kennedy Avenue, Campbell, CA 95008"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'brightness(0.8) contrast(1.05) saturate(0.85)' }}
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(600px 300px at 50% 55%, rgba(229,31,8,0.18), transparent 65%), linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 100%)',
                  }}
                />

                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[115%] flex flex-col items-center">
                  <div
                    className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-md"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(18,10,10,0.92) 0%, rgba(8,4,4,0.94) 100%)',
                      border: '1px solid rgba(255,56,32,0.45)',
                      boxShadow:
                        '0 10px 40px -10px rgba(229,31,8,0.55), 0 0 0 1px rgba(255,56,32,0.12) inset, 0 0 28px -4px rgba(255,99,60,0.35)',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: '#ff3b2a',
                        boxShadow:
                          '0 0 8px rgba(255,56,32,0.95), 0 0 16px rgba(255,56,32,0.6)',
                      }}
                    />
                    <div>
                      <div className="font-display text-sm font-semibold text-white leading-tight">
                        Dishnet Direct Inc.
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 leading-tight mt-0.5">
                        142 Kennedy Ave, Campbell CA
                      </div>
                    </div>
                    <div
                      className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 rotate-45"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(18,10,10,0.92) 0%, rgba(8,4,4,0.94) 100%)',
                        borderRight: '1px solid rgba(255,56,32,0.45)',
                        borderBottom: '1px solid rgba(255,56,32,0.45)',
                      }}
                    />
                  </div>

                  <div className="relative mt-3 flex items-center justify-center">
                    <span
                      className="absolute w-10 h-10 rounded-full"
                      style={{
                        background: 'rgba(255,56,32,0.25)',
                        animation: 'radar-ping 2.6s cubic-bezier(0.25, 0.8, 0.4, 1) infinite',
                      }}
                    />
                    <span
                      className="absolute w-6 h-6 rounded-full"
                      style={{
                        background: 'rgba(255,56,32,0.45)',
                        filter: 'blur(2px)',
                      }}
                    />
                    <MapPin
                      className="relative w-7 h-7 text-ember-400"
                      strokeWidth={2.5}
                      fill="#ff3b2a"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(255,56,32,0.85))',
                      }}
                    />
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=142+Kennedy+Avenue,+Campbell,+CA+95008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-white/90 hover:text-white transition"
                  style={{
                    background: 'rgba(0,0,0,0.65)',
                    border: '1px solid rgba(255,56,32,0.35)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  Get Directions
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl glass flex-shrink-0 flex items-center justify-center">
        <Icon className="w-5 h-5 text-ember-400" />
      </div>
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-gray-400">{label}</div>
        <div className="text-gray-800 mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  textarea,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-ember-500/50 focus:outline-none focus:ring-2 focus:ring-ember-500/20 transition';
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
        {label}{required && <span className="text-ember-500"> *</span>}
      </span>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={`${base} mt-2 resize-none`}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} mt-2`}
        />
      )}
    </label>
  );
}
