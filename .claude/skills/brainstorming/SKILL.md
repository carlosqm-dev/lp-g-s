---
name: brainstorming
description: Use this skill at the very start of any new web project, before any wireframe, mockup, or code exists — whenever the user wants to define positioning, a big idea, creative direction, or tone for a site. Trigger on "brainstorm", "ideas for the site", "creative direction", "concepto", "qué hacemos con este sitio", or whenever the user asks for a landing/website but hasn't yet said what makes it different. Always run this before visual-hierarchy or visual-design, even if the user jumps straight to "hazme la landing" — a page built without a defined angle looks generic.
---

# Brainstorming / dirección creativa

Fase 1 de 7. Tu objetivo aquí no es producir diseño ni código: es dejar por
escrito el ángulo del sitio, para qué existe y a quién le habla, de forma
que las fases siguientes no tengan que inventarlo sobre la marcha.

## Antes de empezar

Lee `config/tools.config.json` (para saber qué herramientas hay disponibles
más adelante, útil si el usuario pregunta qué es viable) y
`design-system/brand.md` si ya tiene contenido de proyectos previos.

## Preguntas a resolver

No hace falta preguntarlas todas de forma literal si el usuario ya dio el
contexto — extrae lo que puedas de la conversación primero y solo pregunta
lo que falte, en un batch corto:

1. **Producto/negocio**: ¿qué es, qué vende o qué acción quiere que tome el
   visitante (comprar, agendar, dejar el email, contratar)?
2. **Diferenciador**: ¿por qué este sitio y no el de la competencia? Si el
   usuario no tiene uno claro, ayúdale a encontrarlo — no avances sin esto.
3. **Audiencia**: ¿quién llega al sitio y con qué nivel de intención
   (frío/tibio/caliente)?
4. **Tono**: serio/corporativo, editorial, lúdico, minimalista-premium,
   maximalista, etc.
5. **Referencias**: 2-4 sitios que le gusten (puede ser
   `examples/reference-sites.md` de este repo, o sitios nuevos). Si no
   tiene, busca 2-3 ejemplos relevantes al rubro.
6. **Restricciones**: presupuesto de motion (alto/medio/bajo), deadline,
   assets de marca ya existentes (logo, fuentes, fotos).

## Proceso

1. **Diagnóstico rápido**: resume en 2-3 líneas qué entiendes del negocio y
   confirma con el usuario antes de seguir.
2. **Analiza referencias**: para cada sitio de referencia, extrae 2-3
   principios reutilizables (ritmo de scroll, jerarquía tipográfica, uso
   de video/imagen, tono del copy) — nunca layout ni assets literales. El
   objetivo es entender *por qué* funciona, no clonarlo.
3. **Define el big idea**: una sola frase que resuma el ángulo único del
   sitio. Debe poder decirse en voz alta sin sonar genérica
   ("otra landing más de SaaS de productividad" es una señal de que hay
   que seguir iterando).
4. **Borra el mapa del sitio**: lista de secciones en orden, con el
   propósito de conversión de cada una (qué debe pensar o hacer el
   visitante al terminar esa sección).
5. **Deja el tono por escrito**: 3-5 adjetivos + 1 frase de referencia de
   copy (cómo sonaría un titular de ese sitio).

## Salida

Escribe (o actualiza) `design-system/brand.md` con las secciones: Big idea,
Audiencia, Tono de voz, Referencias, Restricciones — usa la plantilla que
ya trae el archivo. No sigas a la fase 2 (jerarquía visual) sin que el
usuario haya confirmado el big idea; es la pieza que más cuesta corregir
después de que hay código escrito.
