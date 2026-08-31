import { motion, useReducedMotion } from 'motion/react';
import type { ServiceCard } from '../../data/services';

export function WhatWeDoCards({ services }: { services: ServiceCard[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-primary/20 bg-primary/20 md:grid-cols-3">
      {services.map((service) => (
        <motion.article
          key={service.title}
          className="group relative flex min-h-[21rem] flex-col justify-end overflow-hidden rounded-xl bg-primary p-5 text-background md:min-h-[28rem] md:p-6"
          whileHover={reduceMotion ? undefined : { y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
            style={{ objectPosition: service.imagePosition }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,42,65,.12),rgba(0,42,65,.34)_48%,rgba(0,42,65,.98)_88%)]"></div>

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
