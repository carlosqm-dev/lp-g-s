---
name: visual-hierarchy
description: Use this skill when defining page structure, information architecture, wireframes, or deciding what should visually dominate each section — before colors, fonts, or final visuals are chosen. Trigger on "jerarquía visual", "estructura de la página", "wireframe", "qué debe destacar", "orden de las secciones", or right after the brainstorming skill has produced a site map. This skill turns a list of sections into a prioritized layout brief that visual-design can execute against.
---

# Jerarquía visual / arquitectura de información

Fase 2 de 7. Traduce el mapa del sitio de `design-system/brand.md` (fase 1)
en una estructura priorizada: qué elemento gana la atención primero en cada
sección, y cómo se reparte el peso visual antes de tocar tipografía o color.

## Antes de empezar

Lee `design-system/brand.md` (big idea, audiencia, mapa del sitio). Si no
existe o está vacío, corre primero la skill de brainstorming — no
inventes la estructura sin ese contexto.

Revisa `config/tools.config.json` → rol `design_reference`. Si hay una
herramienta de wireframe conectada por MCP (por ejemplo Figma), úsala para
dejar el wireframe ahí en vez de solo describirlo en texto.

## Principios

- **Un solo elemento dominante por sección.** Si todo grita, nada se
  escucha. Cada sección tiene un primario (lo primero que se ve), un
  secundario (lo que sostiene el mensaje) y el resto es terciario/soporte.
- **El above-the-fold decide si se quedan.** La primera pantalla necesita:
  qué es, para quién, y una acción clara — sin scroll.
- **Contraste, no solo tamaño.** El peso visual se logra con tamaño, peso
  tipográfico, color, espacio en blanco y posición — no dependas solo de
  "más grande".
- **El scroll cuenta una historia.** Cada sección debe dar una razón para
  seguir bajando (curiosidad, progreso, prueba social) — piensa en el
  ritmo de revelado, no solo en el layout estático.
- **La acción de conversión se repite**, no aparece una sola vez al final.
  Defínela una vez y decide en qué secciones vuelve a aparecer.

## Proceso

Para cada sección del mapa del sitio (de `brand.md`):

1. Nombra el **elemento primario** (headline, video, producto, dato clave).
2. Nombra el **elemento secundario** (subtítulo, CTA, prueba social).
3. Define el **propósito de conversión** de la sección (ya debería venir
   de la fase 1; ajústalo si hace falta).
4. Define el **ritmo de scroll**: ¿esta sección se revela de golpe, en
   stages, o es un momento de pausa/respiro entre secciones más densas?
5. Marca si la sección necesita **imagen, video, o ninguno** (esto
   alimenta directamente las fases 4 y 5 — no generes assets todavía,
   solo señala la necesidad).

## Salida

Un mapa de jerarquía, sección por sección, en este formato:

```
## [Nombre de sección]
- Primario:
- Secundario:
- Propósito de conversión:
- Ritmo de scroll:
- Assets necesarios: imagen | video | ninguno
```

Si hay una herramienta de wireframe conectada (rol `design_reference` en
`tools.config.json`), refleja esta misma estructura ahí. Si no, el
documento de texto es la entrega — pásalo a la fase 3 (diseño visual) como
input directo, junto con `design-system/brand.md`.
