import { Youtube, Play, Users, Sparkles } from 'lucide-react';
import { creator } from '@/data/content';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 pb-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px] animate-pulse-slow-delayed" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-6">
              <Sparkles className="h-4 w-4" />
              Digital Creator & Storyteller
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Hey, I&apos;m <br className="hidden sm:block" />
              CreatorX
              <span className="inline-block ml-2 animate-wave origin-bottom-right">
                👋
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-400">
              {creator.tagline}
            </p>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed mx-auto lg:mx-0">
              {creator.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={creator.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-red-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
              >
                <Youtube className="h-5 w-5" />
                Watch on YouTube
              </a>
              <a
                href="#videos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
              >
                <Play className="h-5 w-5 fill-white" />
                Explore My Videos
              </a>
            </div>

            {/* Subscriber count pill */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-500" />
                <span className="text-2xl font-black text-white">10.2K</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <span className="text-sm text-gray-400">Subscribers and counting</span>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-red-600/30 to-transparent blur-2xl scale-110" />

              {/* Floating stat cards */}
              <div className="absolute -top-6 -left-6 z-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-3 shadow-xl hidden sm:block animate-float">
                <div className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-gray-400">Latest Video</p>
                    <p className="text-sm font-bold text-white">312K Views</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-3 shadow-xl hidden sm:block animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="text-xs text-gray-400">Content</p>
                    <p className="text-sm font-bold text-white">150+ Videos</p>
                  </div>
                </div>
              </div>

              {/* Avatar image */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={creator.avatar}
                  alt="CreatorX"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
