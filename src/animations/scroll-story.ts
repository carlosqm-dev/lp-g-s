// Motor de revelado por scroll para el arco narrativo de la landing.
// Trata cada `.gsap-section` como un beat: entra con un fade + slide-up
// la primera vez que cruza el 75% del viewport, una sola vez (once: true)
// para que el storytelling no se sienta repetitivo al hacer scroll hacia
// arriba y abajo.
//
// Este es el tratamiento DEFAULT para todas las secciones. Si una
// seccion especifica necesita algo mas elaborado (parallax, pin, texto
// carácter por carácter), agrega su propio timeline en un archivo nuevo
// dentro de esta misma carpeta y llamalo desde index.astro — no
// sobrecargues este archivo genérico con casos especiales.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const sections = document.querySelectorAll<HTMLElement>('.gsap-section');

sections.forEach((section) => {
  if (prefersReducedMotion) {
    // Sin animacion: el contenido ya es visible por defecto, no hay
    // nada que revertir.
    return;
  }

  const heading = section.querySelector('h1, h2');
  const rest = section.querySelectorAll(':scope > *:not(h1):not(h2)');

  if (heading) gsap.set(heading, { opacity: 0, y: 24 });
  if (rest.length) gsap.set(rest, { opacity: 0, y: 16 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      once: true,
    },
  });

  if (heading) {
    tl.to(heading, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }
  if (rest.length) {
    tl.to(
      rest,
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      heading ? '-=0.3' : 0
    );
  }
});
