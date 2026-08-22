---
name: animation-interactivity
description: Use this skill whenever implementing scroll animations, hover states, transitions between sections, gestures, or any motion in code — for any animation library, not a specific one. Trigger on "anima esto", "animación de scroll", "efecto hover", "transición entre secciones", "hazlo interactivo", "scroll storytelling". Always check config/tools.config.json before writing animation code so the syntax matches the tool actually configured for this project.
---

# Animación e interactividad

Fase 6 de 7. Implementa el motion sobre el prototipo visual (fase 3) y los
assets (fases 4-5), siguiendo el ritmo de scroll definido en la fase 2.

## Antes de empezar

Lee `config/tools.config.json` → roles `animation_scroll` y
`animation_component`. Si ambos dicen "TBD", antes de escribir código
ayuda a decidir con la guía de abajo y actualiza el archivo tú mismo con
lo que se decida (así queda registrado para el resto del proyecto).

## Guía de decisión (agnóstica de herramienta)

No todo el motion es del mismo tipo — usa la categoría correcta:

- **Storytelling de scroll / timelines orquestados / morphing SVG /
  proyectos sin framework**: necesitas una librería con control fino de
  timeline ligada al scroll (categoría "scroll animation library" — rol
  `animation_scroll`). Es el motor detrás de sitios con narrativa de
  scroll pronunciada.
- **Micro-interacciones a nivel de componente en un framework declarativo
  (React/Vue)**: hover, entrada/salida de elementos, gestos (drag, tap) —
  encaja mejor con una librería de animación declarativa integrada al
  framework (rol `animation_component`).
- **Transiciones simples de estado (menos de ~300ms, sin orquestación)**:
  antes de traer cualquier librería, evalúa si CSS `transition` o
  `@keyframes` nativos ya resuelven el caso. No agregues una dependencia
  para lo que el navegador ya hace bien.

Ambas categorías pueden convivir en el mismo proyecto: una para el
scroll global, otra para interacciones de componentes. Revisa qué hay
configurado en `tools.config.json` antes de mezclar sintaxis de dos
herramientas sin necesidad.

## Principios no negociables

- **`prefers-reduced-motion` siempre.** Toda animación no esencial debe
  tener una variante reducida o desactivada para quien lo pida a nivel de
  sistema operativo. Esto no es opcional.
- **Solo `transform` y `opacity`** para animaciones frecuentes o de
  scroll — animar `width`, `top/left`, o `box-shadow` en cada frame causa
  layout thrashing y se siente entrecortado.
- **Inicializa fuera de viewport de forma perezosa** (IntersectionObserver
  o el mecanismo equivalente de la librería elegida) — no corras
  animaciones de secciones que el usuario no ha visto todavía.
- **Duración con propósito**: transiciones de UI (hover, focus) entre
  100-200ms; entradas de contenido entre 300-600ms; nada por encima de
  ~800ms salvo que sea una pieza narrativa deliberada y justificada por
  la fase 1 (big idea) o la fase 2 (ritmo de scroll).
- **El motion sirve a la jerarquía, no compite con ella.** Si una
  animación distrae del elemento primario de la sección (definido en la
  fase 2), es la animación la que se ajusta, no la jerarquía.

## Proceso

1. Recorre el mapa de jerarquía (fase 2) sección por sección y define, para
   cada una, qué elementos animan, en qué orden (stagger) y con qué
   trigger (on load, on scroll into view, on hover, on click).
2. Implementa con la(s) herramienta(s) que indique `tools.config.json`.
3. Verifica el checklist de performance: solo `transform`/`opacity`, lazy
   init, sin animaciones bloqueando el scroll principal.
4. Verifica `prefers-reduced-motion` con la herramienta de devtools del
   navegador (emular la preferencia) antes de dar la fase por cerrada.

## Salida

Código de animación integrado al prototipo, organizado por sección
(carpeta `animations/` o dentro de cada componente, según el framework
elegido en `tools.config.json` → rol `framework`), listo para la fase 7.
