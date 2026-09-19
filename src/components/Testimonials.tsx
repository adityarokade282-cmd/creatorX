import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const typeColor: Record<string, string> = {
  Brand: 'bg-red-500/10 text-red-400 border-red-500/20',
  Audience: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Collaboration Partner': 'bg-green-500/10 text-green-400 border-green-500/20',
};

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              What people say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 transition-colors"
              >
                <Quote className="h-8 w-8 text-red-500/30 mb-4" />
                <p className="text-gray-300 leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      typeColor[t.type] ?? 'bg-white/5 text-gray-400 border-white/10'
                    }`}
                  >
                    {t.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
