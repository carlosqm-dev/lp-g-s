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
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <CardCurtainReveal
          key={service.title}
          className="h-[560px] rounded-lg bg-primary text-background shadow-sm md:h-[600px]"
        >
          <CardCurtainRevealBody className="text-center">
            <CardCurtainRevealTitle className="font-heading text-3xl font-semibold leading-tight">
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
            <div className="flex h-64 items-center justify-center border-t border-dashed border-primary/30 bg-accent px-4 text-center text-xs text-primary/70">
              [Imagen — ver assets/images/shot-list.md]
            </div>
          </CardCurtainRevealFooter>
        </CardCurtainReveal>
      ))}
    </div>
  );
}
