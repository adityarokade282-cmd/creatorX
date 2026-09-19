import { ArrowUpRight } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { socials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function SocialMedia() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
              Stay Connected
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Follow me everywhere
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Join the community across all platforms — never miss a post, a video, or an update.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {socials.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-white/20 transition-all hover:-translate-y-2 duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} mb-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{s.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{s.handle}</p>
                    <p className="mt-2 text-lg font-black text-white">{s.followers}</p>
                    <p className="text-xs text-gray-500">
                      {s.name === 'YouTube' ? 'subscribers' : 'followers'}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-red-400 transition-colors">
                      Follow
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
