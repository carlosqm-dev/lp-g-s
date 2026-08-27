import { motion, useReducedMotion } from 'motion/react';

interface Service {
  title: string;
  description: string;
}

const visualLabels = ['Carga / volumen', 'PET / circularidad', 'Ruta / alcance'];

export function WhatWeDoCards({ services }: { services: Service[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-px overflow-hidden border border-primary/20 bg-primary/20 md:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          className="group relative flex min-h-[21rem] flex-col justify-between overflow-hidden bg-primary p-5 text-background md:min-h-[27rem] md:p-6"
          whileHover={reduceMotion ? undefined : { y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
            style={{
              background:
                index === 1
                  ? 'radial-gradient(circle at 70% 42%, rgba(148,194,61,.52), transparent 7%), radial-gradient(circle at 60% 50%, rgba(243,241,234,.25), transparent 4%), radial-gradient(circle at 78% 58%, rgba(243,241,234,.22), transparent 5%), linear-gradient(145deg, transparent 40%, rgba(148,194,61,.16))'
                  : `linear-gradient(${index === 0 ? '125deg' : '155deg'}, transparent 28%, rgba(148,194,61,.24) 28.2%, transparent 28.5%, transparent 45%, rgba(243,241,234,.18) 45.2%, transparent 45.5%)`,
            }}
          />
          <div className="relative flex items-start justify-between border-b border-background/20 pb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-background/55">
            <span>Servicio / 0{index + 1}</span>
            <span>{visualLabels[index]}</span>
          </div>

          <div aria-hidden="true" className="relative my-auto flex items-center justify-center py-4">
            <span className="font-heading text-[7rem] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(243,241,234,.2)] md:text-[9rem]">
              0{index + 1}
            </span>
            <span className="absolute h-16 w-16 border border-accent/70 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 md:h-20 md:w-20"></span>
            <span className="absolute h-2 w-2 bg-accent"></span>
          </div>

          <div className="relative border-t border-background/20 pt-5">
            <h3 className="max-w-[13ch] font-heading text-3xl font-semibold uppercase leading-[0.95] md:text-4xl">
              {service.title}
            </h3>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-background/68">{service.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
