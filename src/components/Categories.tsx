import { categories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const categoryInfo: Record<string, { description: string; emoji: string }> = {
  All: { description: 'Everything in one place', emoji: '✨' },
  Technology: { description: 'Latest tech reviews & gadgets', emoji: '💻' },
  AI: { description: 'AI tools, news & experiments', emoji: '🤖' },
  Tutorials: { description: 'Step-by-step how-to guides', emoji: '📚' },
  Vlogs: { description: 'Day-in-the-life & adventures', emoji: '🎬' },
  Lifestyle: { description: 'Productivity & daily routines', emoji: '🌱' },
  Entertainment: { description: 'Reactions, challenges & fun', emoji: '🎉' },
};

export default function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section id="categories" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
              Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Find what interests you
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore content by topic — from deep-dive AI breakdowns to behind-the-scenes vlogs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const info = categoryInfo[cat];
              return (
                <a
                  key={cat}
                  href="#videos"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-red-500/30 hover:bg-red-500/5 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="text-3xl mb-3">{info.emoji}</div>
                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {cat}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 leading-snug">
                    {info.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
