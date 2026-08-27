import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const header = document.getElementById('site-header');

if (header) {
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const scrollPosition = self.scroll();
      header.classList.toggle('is-scrolled', scrollPosition > 80);

      if (header.classList.contains('menu-open') || scrollPosition < 120) {
        header.classList.remove('is-hidden');
        return;
      }

      header.classList.toggle('is-hidden', self.direction === 1);
    },
  });
}
