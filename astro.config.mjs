// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Astro + islas React (para 21st.dev/shadcn y Motion) + Tailwind v4 via plugin de Vite.
// Ver config/tools.config.json para la justificacion de cada eleccion.
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
