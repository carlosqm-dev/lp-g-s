import { useState } from 'react';
import { Pointer } from 'lucide-react';

import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from '../ui/card-curtain-reveal';

interface Service {
  title: string;
  description: string;
}

export function WhatWeDoCards({ services }: { services: Service[] }) {
  // Acordeon: una sola card abierta a la vez. Abrir otra cierra la anterior
  // y volver a tocar la abierta la cierra.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service, index) => {
        const isOpen = openIndex === index;

        return (
          <CardCurtainReveal
            key={service.title}
            open={isOpen}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => toggle(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggle(index);
              }
            }}
            className="h-[440px] cursor-pointer rounded-lg bg-primary text-background shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-[470px]"
          >
            <CardCurtainRevealBody className="text-center">
              <CardCurtainRevealTitle
                closedOffset={90}
                className="font-heading text-3xl font-semibold leading-tight"
              >
                {service.title}
              </CardCurtainRevealTitle>
              <CardCurtainRevealDescription className="mt-4">
                <p className="text-base text-background/80">{service.description}</p>
              </CardCurtainRevealDescription>
            </CardCurtainRevealBody>

            <CardCurtainRevealFooter className="mt-auto">
              {/* Foto real pendiente (ver assets/images/shot-list.md). Cuando
                  llegue: <img> full-bleed con object-cover reemplazando este
                  placeholder. */}
              <div className="flex h-48 items-center justify-center border-t border-dashed border-primary/30 bg-accent px-4 text-center text-xs text-primary/70">
                [Imagen — ver assets/images/shot-list.md]
              </div>
            </CardCurtainRevealFooter>

            {/* Afordancia de tap. Vive fuera de la cortina y se desvanece al
                abrir, para no competir con el contenido revelado. */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-2 text-background/70 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Pointer className="h-6 w-6 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Toca aquí</span>
            </span>
          </CardCurtainReveal>
        );
      })}
    </div>
  );
}
