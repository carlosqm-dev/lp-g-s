import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada entrada de esta coleccion es un "beat" narrativo de la landing.
// El copy vive aca, separado de los componentes .astro, para que
// editarlo no implique tocar codigo ni animaciones.
//
// Migrado a la Content Layer API (Astro 7): el archivo vive en
// src/content.config.ts (no dentro de src/content/) y la coleccion
// necesita un loader explicito — la sintaxis `type: 'content'` legacy
// ya no es valida en esta version.
const landing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landing' }),
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
