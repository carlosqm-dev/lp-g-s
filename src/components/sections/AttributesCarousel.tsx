import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../ui/carousel';

import type { Attribute } from '../../data/attributes';

export function AttributesCarousel({ attributes, headline }: { attributes: Attribute[]; headline: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;

    const sync = () => {
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
    <Carousel setApi={setApi} opts={{ align: 'center', loop: true }} aria-label="Atributos de la marca">
      <div className="border-b border-primary/20 pb-8">
        <h2 className="display-title text-6xl md:text-8xl">{headline}</h2>
      </div>

      <CarouselContent className="-ml-3 items-center pb-6 pt-8 sm:-ml-5 md:-ml-6 md:py-14">
        {attributes.map((attr, index) => {
          const isActive = index === selected;
          const hasLongContent = attr.icon === 'precio';

          return (
            <CarouselItem
              key={attr.title}
              aria-label={`${index + 1} de ${attributes.length}`}
              className="basis-[86%] pl-3 sm:basis-[68%] sm:pl-5 md:basis-[44%] md:pl-6 lg:basis-[36%] xl:basis-[32%]"
            >
              <button
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={isActive ? `${attr.title}, atributo seleccionado` : `Mostrar ${attr.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group block w-full origin-center cursor-pointer text-left transition-[transform,opacity] duration-500 ease-out focus-visible:outline-none',
                  isActive
                    ? 'relative z-10 opacity-100 md:-translate-y-[8px]'
                    : 'opacity-40 hover:opacity-70 md:translate-y-[8px] md:scale-[0.94]'
                )}
              >
                <span
                  className={cn(
                    'flex h-[20rem] items-center justify-center border transition-[background-color,border-color,color,box-shadow] duration-500 sm:h-[22rem] md:h-[24rem]',
                    isActive
                      ? 'border-primary bg-primary text-background shadow-xl'
                      : 'border-primary/20 bg-background-alt text-primary group-hover:border-primary/40'
                  )}
                >
                  <img
                    src={`/icons/${attr.icon}.webp`}
                    alt=""
                    aria-hidden="true"
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      'object-contain transition-transform duration-500 ease-out',
                      isActive && 'scale-110',
                      hasLongContent ? 'h-20 w-20 md:h-24 md:w-24' : 'h-24 w-24 md:h-28 md:w-28'
                    )}
                  />
                </span>

                <span
                  aria-hidden={!isActive}
                  className={cn(
                    'block h-[9.5rem] transition-opacity duration-500 ease-out md:h-[10rem]',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <span className="block pt-4 md:pt-5">
                    <span
                      className={cn(
                        'block max-w-[13ch] font-heading font-semibold uppercase leading-[0.92] text-primary',
                        hasLongContent ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
                      )}
                    >
                      {attr.title}
                    </span>
                    <span className="mt-3 block max-w-md text-base leading-relaxed text-secondary">
                      {attr.description}
                    </span>
                  </span>
                </span>
              </button>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="flex items-center justify-end gap-2 border-t border-primary/20 pt-4 md:hidden">
        <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-none border-primary/20 bg-transparent shadow-none hover:bg-primary hover:text-background" />
        <CarouselNext className="static h-12 w-12 translate-y-0 rounded-none border-primary/20 bg-transparent shadow-none hover:bg-primary hover:text-background" />
      </div>
    </Carousel>
  );
}
