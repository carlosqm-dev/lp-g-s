// Header transparente sobre el Hero que pasa a fondo blanco (logo y
// enlaces oscuros) despues de superar su propia altura, usando el mismo
// motor de scroll ya establecido en el proyecto (GSAP + ScrollTrigger).

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const header = document.getElementById('site-header');

if (header) {
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { targets: header, className: 'is-scrolled' },
  });
}
