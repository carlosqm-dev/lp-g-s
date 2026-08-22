---
name: landing-page-storytelling
description: Use this skill specifically when the deliverable is a landing page in a scroll-storytelling format — the most common client request in this operation. Trigger on "landing page", "página de aterrizaje", "necesito una landing para [producto]", or whenever a client project maps to a single scrolling page meant to convert. This skill specializes the generic 7-phase flow (brainstorming → hierarchy → design → images → video → animation → build) into the concrete arc, folder structure, and stack already scaffolded in this repo, so it doesn't need to be reinvented per client.
---

# Landing page en formato storytelling

Esta skill es la especialización del flujo general para el entregable más
repetido: una landing page de una sola página, con narrativa de scroll,
que vende un producto o servicio de cualquier marca. No reemplaza las 7
skills de fase — les da una plantilla concreta para no partir de cero en
cada cliente.

## El arco narrativo (fijo, no lo reinventes por cliente)

Este repo ya trae 7 "beats" narrativos en `src/content/landing/`, en este
orden. Cambia el copy por cliente; no cambies el orden salvo que el
usuario tenga una razón explícita para saltarse un beat:

| # | Beat | Archivo de copy | Componente | Pregunta que responde |
|---|------|------------------|------------|------------------------|
| 1 | Hero / gancho | `01-hero.md` | `Hero.astro` | ¿Qué es esto y para quién? |
| 2 | Problema / tensión | `02-problem.md` | `Problem.astro` | ¿Por qué me importa? |
| 3 | Solución / giro | `03-solution.md` | `Solution.astro` | ¿Qué lo resuelve? |
| 4 | Cómo funciona / plan | `04-how-it-works.md` | `HowItWorks.astro` | ¿Es fácil de adoptar? |
| 5 | Prueba social | `05-proof.md` | `Proof.astro` | ¿Le funcionó a alguien más? |
| 6 | Objeciones / FAQ | `06-faq.md` | `Faq.astro` | ¿Qué me detiene todavía? |
| 7 | CTA final | `07-final-cta.md` | `FinalCta.astro` | ¿Qué hago ahora? |

Cada beat es intercambiable en contenido pero no en función: si un
cliente insiste en saltarse "problema" porque "no queremos sonar
negativos", el resultado suele convertir peor — la tensión es lo que le
da al visitante una razón para seguir bajando. Puedes suavizar el tono,
no eliminar el beat.

## Cómo arrancar un cliente nuevo (checklist de entorno)

1. **Clona o abre este repo** para el proyecto del cliente.
2. **Corre la skill `brainstorming`** — llena `design-system/brand.md`
   con el big idea, audiencia, tono y referencias de ese cliente
   específico. No reutilices el brief de un cliente anterior.
3. **Corre la skill `visual-hierarchy`** — para una landing de un solo
   scroll, el "mapa del sitio" de `brand.md` normalmente ya es la lista
   de los 7 beats de arriba; ajusta primario/secundario por beat.
4. **Reescribe el copy** en `src/content/landing/*.md` (7 archivos,
   frontmatter + cuerpo). No toques los componentes `.astro` para
   cambiar texto — si el copy vive en el frontmatter, ese es el único
   lugar que se edita por cliente.
5. **Llena `design-system/tokens.json`** (color, tipografía, spacing) con
   la identidad del cliente — ver la skill `visual-design`.
6. **Corre `npm run tokens:sync`** (o simplemente `npm run dev`, que lo
   corre automático) para que `tokens.json` se refleje en
   `src/styles/theme.css` y por lo tanto en las clases de Tailwind
   (`bg-primary`, `font-heading`, etc.).
7. **Coloca los assets de marca** — ver `assets/README.md` para la
   convención exacta de nombres y carpetas (logo, favicon, imágenes,
   video).
8. **Ajusta `HowItWorks.astro` y `Faq.astro`** — los pasos y preguntas no
   viven en el content collection porque su cantidad varía por cliente;
   edítalos directo en el componente.
9. **Revisa `config/tools.config.json`** — ya viene con el stack
   definitivo de la operación. Solo edítalo si este cliente puntual pide
   algo distinto (por ejemplo, ya tiene su propio proveedor de video).

## Dónde va cada tipo de asset (resumen — el detalle está en `assets/README.md`)

```
assets/brand/logo/       → logo-full-color.svg, logo-white.svg, mark.svg
assets/brand/favicon/    → favicon.svg, favicon.png
assets/brand/fonts/      → solo si la tipografía es custom con licencia propia
assets/images/hero/      → imagen o poster de la sección 1
assets/images/product/   → fotografía real > mockup generado, ver tools.config.json
assets/images/social-proof/ → logos de clientes, avatares de testimonios
assets/images/og/        → una sola og-default.png (1200x630)
assets/video/hero/       → loop de fondo del hero, .mp4 + poster.webp
assets/video/b-roll/     → clips de apoyo para "cómo funciona" / producto
```

## El motor de animación ya está resuelto

`src/animations/scroll-story.ts` aplica un fade + slide-up a cada
`.gsap-section` la primera vez que entra en el viewport, respetando
`prefers-reduced-motion`. Es el tratamiento default — sirve para el 90%
de los clientes sin tocarlo. Si un cliente puntual pide algo más
elaborado en un beat específico (parallax en el hero, texto que se arma
carácter por carácter en la prueba social), sigue el proceso de la skill
`animation-interactivity` para ese beat puntual — no reescribas el motor
genérico para un caso especial.

## Checklist antes de entregar al cliente

- [ ] Los 7 beats tienen copy real del cliente, cero placeholders
      ("Reemplaza con...") en `src/content/landing/`.
- [ ] `tokens.json` no tiene ningún valor `"TBD"` — correr
      `npm run tokens:sync` debe salir sin warning.
- [ ] Logo en las 2-3 variantes de `assets/brand/logo/` están puestas.
- [ ] Cada imagen tiene `alt` real, no genérico.
- [ ] Se probó con `prefers-reduced-motion` activado (emulado en
      devtools) — el contenido debe verse completo, sin animación.
- [ ] El CTA del hero y el del beat final son consistentes entre sí (
      mismo verbo, misma promesa).
- [ ] Deploy de preview corriendo en Vercel para aprobación del cliente
      antes de pasar a producción (ver skill `build-deploy`).
