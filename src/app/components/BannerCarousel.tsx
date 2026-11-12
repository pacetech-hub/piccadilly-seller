import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Banner {
  src: string;
  alt: string;
}

interface BannerCarouselProps {
  banners: Banner[];
  /** Tempo entre slides, em ms. */
  interval?: number;
}

export function BannerCarousel({ banners, interval = 5000 }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = banners.length;

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), interval);
    return () => clearInterval(id);
  }, [paused, total, interval]);

  const go = (i: number) => setCurrent((i + total) % total);

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-border shadow-sm group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((b, i) => (
          <img
            key={b.src}
            src={b.src}
            alt={b.alt}
            className="w-full h-auto shrink-0 object-cover"
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            onClick={() => go(current - 1)}
            aria-label="Banner anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(current + 1)}
            aria-label="Próximo banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {banners.map((b, i) => (
              <button
                key={b.src}
                onClick={() => go(i)}
                aria-label={`Ir para o banner ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
