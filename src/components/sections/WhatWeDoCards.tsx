import { motion, useReducedMotion } from 'motion/react';
import type { ServiceCard } from '../../data/services';

export function WhatWeDoCards({ services }: { services: ServiceCard[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-primary/20 bg-background md:grid-cols-3">
      {services.map((service) => (
        <motion.article
          key={service.title}
          className="group relative flex aspect-[3/4] min-h-[21rem] flex-col justify-end overflow-hidden rounded-xl bg-primary p-5 text-background md:p-6"
          whileHover={reduceMotion ? undefined : { y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-[0px] h-full w-full object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: service.imagePosition }}
          />
          <div aria-hidden="true" className="absolute inset-[0px] bg-[linear-gradient(to_bottom,rgba(0,0,0,.02)_0%,rgba(0,0,0,.08)_40%,rgba(0,0,0,.46)_62%,rgba(0,0,0,.86)_88%)]"></div>

          <div className="relative">
            <h3 className="max-w-[13ch] font-heading text-3xl font-semibold uppercase leading-[0.95] md:text-4xl">
              {service.title}
            </h3>
            <p className="body-copy mt-4 max-w-[32ch] text-background/80">{service.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
