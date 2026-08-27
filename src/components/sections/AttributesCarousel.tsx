import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../ui/carousel';

type AttributeIcon = 'puntualidad' | 'flexibilidad' | 'eficiencia' | 'reputacion' | 'precio';

interface Attribute {
  icon: AttributeIcon;
  title: string;
  description: string;
}

export function AttributesCarousel({ attributes, headline }: { attributes: Attribute[]; headline: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSnaps(api.scrollSnapList());
      setSelected(api.selectedScrollSnap());
    };
    sync();
    api.on('select', sync);
    api.on('reInit', sync);
    return () => {
      api.off('select', sync);
      api.off('reInit', sync);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} aria-label="Atributos de la marca">
      <div className="border-b border-primary/20 pb-8">
        <h2 className="display-title text-6xl md:text-8xl">{headline}</h2>
      </div>

      <CarouselContent className="py-8 md:py-12">
        {attributes.map((attr, index) => {
          const isActive = index === selected;
          return (
            <CarouselItem key={attr.title} className="basis-[88%] md:basis-1/2 xl:basis-1/3">
              <article
                aria-current={isActive}
                className={`relative flex min-h-[25rem] flex-col border p-5 transition-all duration-500 md:min-h-[29rem] md:p-7 ${
                  isActive
                    ? 'border-primary bg-primary text-background'
                    : 'border-primary/20 bg-background-alt text-primary opacity-60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-heading text-6xl font-bold leading-none ${isActive ? 'text-accent' : 'text-primary/20'}`}>
                    0{index + 1}
                  </span>
                  <img
                    src={`/icons/${attr.icon}.webp`}
                    alt=""
                    aria-hidden="true"
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className={`h-14 w-14 md:h-16 md:w-16 ${isActive ? 'brightness-0 invert' : ''}`}
                  />
                </div>
                <div className="mt-auto border-t border-current/20 pt-5">
                  <h3 className="max-w-[12ch] font-heading text-4xl font-semibold uppercase leading-[0.92] md:text-5xl">{attr.title}</h3>
                  <p className={`mt-4 max-w-sm text-sm leading-relaxed ${isActive ? 'text-background/65' : 'text-secondary'}`}>
                    {attr.description}
                  </p>
                </div>
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="mt-1 flex items-center justify-center gap-3 border-t border-primary/20 pt-4">
        <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-none border-primary/20 bg-transparent shadow-none hover:bg-primary hover:text-background" />
        <div className="flex items-center gap-1.5">
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir al atributo ${index + 1}`}
              aria-current={index === selected}
              className={`h-2 min-w-2 transition-all duration-300 ${index === selected ? 'w-10 bg-accent' : 'bg-primary/20 hover:bg-primary/40'}`}
            />
          ))}
        </div>
        <CarouselNext className="static h-12 w-12 translate-y-0 rounded-none border-primary/20 bg-transparent shadow-none hover:bg-primary hover:text-background" />
      </div>
    </Carousel>
  );
}
