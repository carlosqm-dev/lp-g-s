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

// Iconos de marca en WebP con transparencia, generados desde los JPEG de
// assets/brand/icons (recorte al glifo, lienzo cuadrado, 320px para cubrir
// pantallas de alta densidad). La clave del dato es el nombre del archivo.

export function AttributesCarousel({
  attributes,
  headline,
}: {
  attributes: Attribute[];
  headline: string;
}) {
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
    // El titulo vive dentro del carrusel para que comparta fila con las
    // flechas; por eso WhyUs.astro ya no lo renderiza.
    <Carousel
      setApi={setApi}
      opts={{ align: 'center', loop: true }}
      aria-label="Atributos de la marca"
    >
      <h2 className="mb-10 font-heading text-3xl md:text-4xl">{headline}</h2>

      {/* El `py-6` reserva el espacio vertical de la sombra de la card
          activa, que si no queda recortada por el overflow del carrusel. */}
      <CarouselContent className="py-6">
        {attributes.map((attr, index) => {
          const isActive = index === selected;

          return (
            // Anchos que caben enteros en la caja del carrusel: 1 card bajo
            // md y 3 arriba. Cualquier fraccion intermedia (46%, 64%) deja
            // las vecinas cortadas contra el overflow del contenedor.
            <CarouselItem key={attr.title} className="basis-full md:basis-1/3">
              <article
                aria-current={isActive}
                className={`flex h-full min-h-[19rem] flex-col justify-center rounded-2xl bg-background px-6 py-10 text-center transition-all duration-500 md:min-h-[21rem] ${
                  isActive ? 'scale-100 opacity-100 shadow-xl' : 'scale-95 opacity-55 shadow-md'
                }`}
              >
                <img
                  src={`/icons/${attr.icon}.webp`}
                  alt=""
                  aria-hidden="true"
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto h-16 w-16 md:h-20 md:w-20"
                />
                <h3 className="mt-6 font-heading text-2xl">{attr.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-secondary">{attr.description}</p>
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {/* Controles bajo la card: flechas y puntos en la misma fila.
          `static` neutraliza el posicionamiento absoluto que traen las
          flechas por defecto, para que caigan en el flujo. */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <CarouselPrevious className="static h-11 w-11 translate-y-0 border-0 bg-background shadow-md hover:bg-background" />

        <div className="flex items-center gap-2">
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir al atributo ${index + 1}`}
              aria-current={index === selected}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selected ? 'w-8 bg-accent' : 'w-2 bg-primary/20 hover:bg-primary/35'
              }`}
            />
          ))}
        </div>

        <CarouselNext className="static h-11 w-11 translate-y-0 border-0 bg-background shadow-md hover:bg-background" />
      </div>
    </Carousel>
  );
}
