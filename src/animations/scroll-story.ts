import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const revealSection = (section: HTMLElement) => {
    const intro = section.querySelectorAll<HTMLElement>('.section-kicker, .display-title');
    if (!intro.length) return;

    gsap.from(intro, {
      yPercent: 45,
      opacity: 0,
      duration: 0.75,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 78%', once: true },
    });
  };

  document.querySelectorAll<HTMLElement>('.gsap-section').forEach(revealSection);

  const stats = document.querySelector<HTMLElement>('[data-section="stats"]');
  if (stats) {
    const panels = stats.querySelectorAll<HTMLElement>('.stat-panel');
    gsap.from(panels, {
      yPercent: 55,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: stats, start: 'top 88%', once: true },
    });

    stats.querySelectorAll<HTMLElement>('.stat-value').forEach((element) => {
      const original = element.textContent?.trim() ?? '';
      const numeric = Number(original.replace(/[^0-9]/g, ''));
      if (!numeric) return;
      const suffix = original.replace(/[0-9.]/g, '');
      const counter = { value: 0 };
      gsap.to(counter, {
        value: numeric,
        duration: 1.35,
        ease: 'power2.out',
        scrollTrigger: { trigger: stats, start: 'top 84%', once: true },
        onUpdate: () => {
          element.textContent = `${Math.round(counter.value).toLocaleString('es-CO')}${suffix}`;
        },
      });
    });
  }

  const services = document.querySelector<HTMLElement>('[data-section="what-we-do"]');
  if (services) {
    gsap.from(services.querySelectorAll('article'), {
      yPercent: 18,
      opacity: 0,
      duration: 0.75,
      stagger: 0.13,
      ease: 'power3.out',
      scrollTrigger: { trigger: services, start: 'top 65%', once: true },
    });
  }

  const coverage = document.querySelector<HTMLElement>('[data-section="coverage"]');
  if (coverage) {
    gsap.from(coverage.querySelectorAll('.coverage-item'), {
      xPercent: -10,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: coverage, start: 'top 68%', once: true },
    });
    gsap.from(coverage.querySelector('.map-frame'), {
      xPercent: 10,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: coverage, start: 'top 72%', once: true },
    });
    gsap.to(coverage.querySelector('.map-image'), {
      yPercent: -5,
      ease: 'none',
      scrollTrigger: { trigger: coverage, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
  }

  const impact = document.querySelector<HTMLElement>('[data-section="impact"]');
  if (impact) {
    gsap.from(impact.querySelector('.impact-copy'), {
      xPercent: -12,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: impact, start: 'top 70%', once: true },
    });
    gsap.from(impact.querySelector('.impact-visual'), {
      xPercent: 12,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: impact, start: 'top 70%', once: true },
    });
    gsap.from(impact.querySelectorAll('.impact-card'), {
      yPercent: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      scrollTrigger: { trigger: impact.querySelector('.impact-card'), start: 'top 82%', once: true },
    });
  }

  const process = document.querySelector<HTMLElement>('[data-section="how-it-works"]');
  if (process) {
    const media = gsap.matchMedia();
    media.add('(max-width: 767px)', () => {
      gsap.from(process.querySelector('.process-line'), {
        scaleY: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: process, start: 'top 65%', once: true },
      });
    });
    media.add('(min-width: 768px)', () => {
      gsap.from(process.querySelector('.process-line'), {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: process, start: 'top 65%', once: true },
      });
    });
    gsap.from(process.querySelectorAll('.process-step'), {
      yPercent: 16,
      opacity: 0,
      duration: 0.65,
      stagger: 0.14,
      ease: 'power2.out',
      scrollTrigger: { trigger: process, start: 'top 62%', once: true },
    });
  }

  const history = document.querySelector<HTMLElement>('[data-section="history"]');
  if (history) {
    gsap.from(history.querySelector('.history-visual'), {
      yPercent: 12,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: history, start: 'top 70%', once: true },
    });
    gsap.from(history.querySelectorAll('.history-item'), {
      xPercent: 8,
      opacity: 0,
      duration: 0.55,
      stagger: 0.12,
      scrollTrigger: { trigger: history, start: 'top 62%', once: true },
    });
  }

  gsap.to('.hero-beam', {
    yPercent: 16,
    rotate: -4,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.7 },
  });
}
