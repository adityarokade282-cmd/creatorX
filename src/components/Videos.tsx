import { useState } from 'react';
import { Play, Eye, Calendar, Youtube, ArrowRight } from 'lucide-react';
import { videos, categories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Videos() {
  const [active, setActive] = useState('All');
  const { ref, visible } = useReveal();

  const filtered =
    active === 'All' ? videos : videos.filter((v) => v.category === active);

  return (
    <section id="videos" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
                Latest Videos
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Fresh from the channel
              </h2>
            </div>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors group"
            >
              Browse by category
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Video grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <article
                key={video.id}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-red-500/30 transition-all hover:bg-white/[0.05] hover:-translate-y-1 duration-300"
              >
                {/* Thumbnail */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600/90 backdrop-blur-sm shadow-lg">
                      <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {video.category}
                  </span>
                </a>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {video.date}
                    </span>
                  </div>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                    Watch Video
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@creatorx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              <Youtube className="h-5 w-5 text-red-500" />
              View All Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
