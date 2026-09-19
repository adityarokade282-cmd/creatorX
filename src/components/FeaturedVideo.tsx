import { Play, Youtube, Clock, Eye } from 'lucide-react';
import { featuredVideo } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedVideo() {
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
              Featured Video
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              The one everyone is talking about
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Video player */}
            <div className="lg:col-span-3 relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={featuredVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-20 w-20 rounded-full bg-red-600/90 backdrop-blur-sm hover:bg-red-500 transition-all hover:scale-110 shadow-lg shadow-red-600/50"
                  aria-label="Play featured video"
                >
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </a>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-black/80 backdrop-blur-sm px-3 py-1.5 text-sm text-white">
                <Clock className="h-4 w-4" />
                {featuredVideo.duration}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {featuredVideo.views}
                </span>
                <span>•</span>
                <span>{featuredVideo.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {featuredVideo.description}
              </p>

              <a
                href={featuredVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-red-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
              >
                <Youtube className="h-5 w-5" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
