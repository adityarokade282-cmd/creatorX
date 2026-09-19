import { getIcon } from '@/lib/icons';
import { useReveal } from '@/hooks/useReveal';
import { creator } from '@/data/content';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="relative order-1 lg:order-none">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 to-transparent blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <img
                  src={creator.profileImage}
                  alt={creator.realName}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-black text-white">3+</p>
                <p className="text-sm text-gray-400">Years Creating</p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Turning curiosity into content that matters
              </h2>

              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                {creator.bio}
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                {creator.journey}
              </p>

              {/* Stats grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {creator.stats.map((stat) => {
                  const Icon = getIcon(stat.icon);
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center hover:border-red-500/30 hover:bg-red-500/5 transition-all"
                    >
                      <Icon className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
