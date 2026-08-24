// Pantalla de carga: logo + texto centrados durante un tiempo fijo
// (no una carga real), luego dispara la entrada en stagger del hero,
// con salida en cortina diagonal (transform, ya definido como estado
// CSS `.is-leaving` en Preloader.astro).

import { gsap } from 'gsap';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const preloader = document.getElementById('preloader');
const heroItems = document.querySelectorAll<HTMLElement>('.hero-reveal-item');

function revealHero() {
  if (heroItems.length) {
    gsap.to(heroItems, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' });
  }
}

if (!preloader || prefersReducedMotion) {
  // Sin loader: el hero ya es visible por defecto (no hay nada que ocultar).
  preloader?.style.setProperty('display', 'none');
} else {
  // Hero arranca oculto — no lleva .gsap-section, así que scroll-story.ts
  // no lo toca; el ocultamiento inicial vive acá.
  gsap.set(heroItems, { opacity: 0, y: 24 });

  const DURATION = 1.8;

  const finish = () => {
    preloader.classList.add('is-leaving');
    setTimeout(revealHero, 500);
  };

  gsap.delayedCall(DURATION, finish);
}
