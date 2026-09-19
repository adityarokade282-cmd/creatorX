import { Youtube, Heart } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { navLinks, socials, creator } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4">
              <span className="bg-red-600 rounded-lg p-1.5">
                <Youtube className="h-5 w-5 text-white" />
              </span>
              <span className="text-white">
                Creator<span className="text-red-500">X</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {creator.description} Join the community and never miss a video.
            </p>

            <a
              href={creator.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
            >
              <Youtube className="h-4 w-4" />
              Subscribe on YouTube
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-3">
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
            <p className="mt-4 text-sm text-gray-400">
              <a
                href={`mailto:${creator.email}`}
                className="hover:text-white transition-colors"
              >
                {creator.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} CreatorX. Made with
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            by CreatorX.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
