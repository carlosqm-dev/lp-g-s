// Pantalla de carga: GSAP cuenta de forma fluida entre checkpoints fijos
// (no una carga real — decision explicita del cliente, ver memoria de
// fase 6) y dispara la entrada en stagger del hero al terminar, con
// salida en cortina diagonal (transform, ya definido como estado CSS
// `.is-leaving` en Preloader.astro).
//
// Ver design-system/prototype.html para el comportamiento original que
// este modulo porta 1:1.

import { gsap } from 'gsap';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const preloader = document.getElementById('preloader');
const percentEl = preloader?.querySelector<HTMLElement>('.preloader-percent') ?? null;
const truck = preloader?.querySelector<SVGElement>('.preloader-truck') ?? null;
const heroItems = document.querySelectorAll<HTMLElement>('.hero-reveal-item');

function revealHero() {
  if (heroItems.length) {
    gsap.to(heroItems, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' });
  }
}

if (!preloader || !percentEl || !truck || prefersReducedMotion) {
  // Sin loader: el hero ya es visible por defecto (no hay nada que ocultar).
  preloader?.style.setProperty('display', 'none');
} else {
  // Hero arranca oculto — no lleva .gsap-section, así que scroll-story.ts
  // no lo toca; el ocultamiento inicial vive acá.
  gsap.set(heroItems, { opacity: 0, y: 24 });

  const STEPS = [10, 30, 45, 67, 82, 94, 100];
  const PAUSE_MIN = 0.05;
  const PAUSE_MAX = 0.14;
  const counter = { val: 0 };
  let stepIndex = 0;

  const animateToStep = () => {
    const target = STEPS[stepIndex];
    gsap.to(counter, {
      val: target,
      duration: 0.22,
      ease: 'power1.out',
      onUpdate: () => {
        percentEl.textContent = String(Math.round(counter.val));
        truck.style.transform = `translateX(${(counter.val / 100) * 40}px)`;
      },
      onComplete: () => {
        stepIndex++;
        if (stepIndex < STEPS.length) {
          gsap.delayedCall(PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN), animateToStep);
        } else {
          gsap.delayedCall(0.3, finish);
        }
      },
    });
  };

  const finish = () => {
    preloader.classList.add('is-leaving');
    setTimeout(revealHero, 500);
  };

  animateToStep();
}
