# Hero limpio y CTAs unificados

## Objetivo

Reducir el ruido visual del Hero y establecer una sola interacción para todos los accesos de WhatsApp.

## Hero

Se conservan la fotografía, el degradado de legibilidad, el contenido y el indicador de navegación hacia la siguiente sección. Se eliminan la retícula, el panel diagonal, las líneas de ruta y la línea divisoria del bloque de texto. También se elimina la animación GSAP asociada al panel decorativo.

## CTAs

Los accesos de WhatsApp del Header, Hero, Cómo trabajamos y CTA final mostrarán únicamente texto. Compartirán una clase CSS que desplaza el botón 8 px hacia arriba en 250 ms con salida suave, reproduciendo el comportamiento de hover de las cards de servicios sin añadir hidratación.

En dispositivos sin hover o con `prefers-reduced-motion`, el desplazamiento no se ejecutará. El texto “Contacto” permanecerá visible en el Header móvil para que el control no dependa de un icono.

## Menú móvil

Los accesos directos mostrarán únicamente el nombre de cada sección. Se eliminan sus flechas, conservando la interacción de apertura y cierre del menú.

## Elementos fuera de alcance

Las flechas del carrusel permanecen sin cambios. Los indicadores de secuencia del proceso y el enlace de exploración del Hero no son CTAs de WhatsApp y conservan su función.

## Verificación

- Build de producción sin errores.
- Revisión del Header y Hero a 390 × 844 y 1440 × 1000.
- Confirmación de que los cuatro CTAs comparten la misma transformación.
- Confirmación de que no quedan flechas en CTAs ni en el menú móvil.
- Revisión con movimiento reducido.
