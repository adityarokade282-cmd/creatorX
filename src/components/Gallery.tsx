import { galleryImages } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
              Gallery
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Behind the scenes
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A look into the studio, the gear, and the moments that make the channel happen.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  i === 0 ? 'col-span-2 lg:col-span-1' : ''
                } ${i === 3 ? 'lg:row-span-2' : ''}`}
              >
                <div className={`overflow-hidden ${i === 3 ? 'h-full min-h-[300px]' : 'aspect-[4/3]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="rounded-full bg-red-600/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                    {img.label}
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
