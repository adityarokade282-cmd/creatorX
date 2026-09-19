import { useEffect, useState } from 'react';
import { Menu, X, Youtube } from 'lucide-react';
import { navLinks, creator } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="bg-red-600 rounded-lg p-1.5">
            <Youtube className="h-5 w-5 text-white" />
          </span>
          <span className="text-white">
            Creator<span className="text-red-500">X</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href={creator.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
          >
            <Youtube className="h-4 w-4" />
            Subscribe
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={creator.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-base font-semibold text-white hover:bg-red-500 transition-colors"
          >
            <Youtube className="h-5 w-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </header>
  );
}
