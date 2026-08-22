---
name: visual-design
description: Use this skill when choosing typography, color palette, spacing, or producing actual mockups/prototypes of how a page looks — after the site's information hierarchy is already defined. Trigger on "diseña la página", "mockup", "qué colores usamos", "tipografía", "estilo visual", "cómo se debería ver esto". This skill turns the hierarchy map into concrete design tokens and a visual prototype.
---

# Diseño visual

Fase 3 de 7. Convierte el mapa de jerarquía (fase 2) en decisiones
visuales concretas: tokens de diseño y, cuando aplique, un prototipo real
(HTML/React o el archivo de la herramienta de diseño conectada).

## Antes de empezar

Lee, en este orden:
1. `design-system/brand.md` (tono, big idea, referencias)
2. El mapa de jerarquía producido en la fase 2
3. `design-system/tokens.json` (si ya tiene valores reales, respétalos;
   si sigue con placeholders "TBD", esta skill es la que los define)
4. `config/tools.config.json` → roles `component_library` y
   `design_reference`

## Proceso

1. **Tipografía**: elige máximo 2 familias (display + texto, o una sola
   con varios pesos). Define una escala modular, no tamaños sueltos.
   Actualiza `typography` en `tokens.json`.
2. **Color**: define paleta con regla 60-30-10 (dominante / secundario /
   acento) partiendo del tono definido en `brand.md`. Verifica contraste
   AA mínimo entre texto y fondo. Actualiza `color` en `tokens.json`.
3. **Espaciado**: usa una escala consistente (base 4 u 8px), no valores
   arbitrarios por sección. Ya debería estar en `tokens.json`; ajústala
   si el layout lo requiere.
4. **Layout por sección**: para cada sección del mapa de jerarquía,
   describe (o construye) la composición: grid, alineación, cómo se
   distribuyen primario/secundario/terciario en desktop y mobile.
5. **Componentes**: si `component_library` en `tools.config.json` tiene
   una herramienta asignada (por ejemplo un registro de componentes),
   úsala para no reconstruir desde cero elementos estándar (nav, cards,
   formularios). Si dice "TBD", pregunta o usa HTML/CSS semántico simple.
6. **Prototipo**: si hay una herramienta de diseño conectada por MCP (rol
   `design_reference`), construye ahí. Si no, o si el usuario quiere ver
   código directamente, produce un prototipo HTML/React estático (sin
   animación todavía — eso es la fase 6) usando la skill
   `frontend-design` de este entorno para la calidad de ejecución.

## Reglas de jerarquía visual (recordatorio, no las repitas de la fase 2)

- El contraste de tamaño/peso entre primario y secundario debe ser
  evidente incluso si alguien mira la sección medio segundo.
- Nunca más de un CTA con máximo peso visual por pantalla.
- El espacio en blanco es una decisión de diseño, no lo que sobra.

## Salida

- `design-system/tokens.json` actualizado con valores reales (no "TBD").
- Un prototipo (archivo de diseño o HTML/React) por sección o de la
  página completa, listo para pasar a assets (fases 4-5) y animación
  (fase 6).
