import { defineCollection, z } from 'astro:content';

// Cada entrada de esta coleccion es un "beat" narrativo de la landing.
// El copy vive aca, separado de los componentes .astro, para que
// editarlo no implique tocar codigo ni animaciones.
const landing = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    eyebrow: z.string().optional(),
    headline: z.string(),
    subheadline: z.string().optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
  }),
});

export const collections = { landing };
