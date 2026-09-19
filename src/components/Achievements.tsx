import { getIcon } from '@/lib/icons';
import { achievements } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Achievements() {
  const { ref, visible } = useReveal();

  return (
    <section id="achievements" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
              Achievements
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Milestones worth celebrating
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.title}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 hover:border-red-500/30 transition-all hover:-translate-y-2 duration-300 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-red-600/10 blur-3xl group-hover:bg-red-600/20 transition-colors" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-red-600/10 border border-red-500/20 mb-4">
                      <Icon className="h-6 w-6 text-red-500" />
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
