import { useState, type FormEvent } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Handshake, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { creator, socials } from '@/data/content';
import { getIcon } from '@/lib/icons';
import { useReveal } from '@/hooks/useReveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  isSponsorship: boolean;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    isSponsorship: false,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    else if (form.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      is_sponsorship: form.isSponsorship,
    });

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '', isSponsorship: false });
  };

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass =
    'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50';

  return (
    <section id="contact" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Let&apos;s create something together
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Have a question, a collaboration idea, or a sponsorship opportunity? I&apos;d love to hear from you.
                Fill out the form and I&apos;ll get back to you within 48 hours.
              </p>

              {/* Business email */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-red-600/10 border border-red-500/20">
                    <Mail className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Business Email</p>
                    <a
                      href={`mailto:${creator.email}`}
                      className="text-sm font-semibold text-white hover:text-red-400 transition-colors"
                    >
                      {creator.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Brand CTA */}
              <div className="mt-4 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-600/10 to-transparent p-5">
                <div className="flex items-start gap-3">
                  <Handshake className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white">Work With Me</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Looking for brand collaboration or sponsorship? Check the box in the form
                      and let&apos;s talk audience, reach, and ideas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = getIcon(s.icon);
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/30 transition-all hover:scale-110"
                      aria-label={s.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-8"
              >
                {status === 'success' && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-300">
                      Message sent! I&apos;ll get back to you within 48 hours.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-300">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`${inputClass} ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={`${inputClass} ${
                        errors.email ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                    className={`${inputClass} ${
                      errors.subject ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputClass} resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Tell me more..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <label className="mt-5 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.isSponsorship}
                    onChange={(e) => update('isSponsorship', e.target.checked)}
                    className="h-5 w-5 rounded border-white/20 bg-white/5 text-red-600 focus:ring-red-500/50 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">
                    This is a brand collaboration / sponsorship inquiry
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-base font-semibold text-white hover:bg-red-500 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
