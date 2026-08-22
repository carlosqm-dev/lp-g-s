---
name: build-deploy
description: Use this skill when scaffolding the project's codebase, choosing a framework, preparing performance/SEO for launch, or deploying the site. Trigger on "monta el proyecto", "qué framework usamos", "prepara esto para producción", "despliega el sitio", "checklist antes de lanzar". This is the final phase — it assumes visual design, assets, and animation are already in place.
---

# Build y despliegue

Fase 7 de 7. Convierte el prototipo animado (fases 3-6) en un proyecto
desplegable, con performance y SEO cuidados desde el inicio, no como
parche al final.

## Antes de empezar

Lee `config/tools.config.json` → roles `framework` y `deployment`. Si
dicen "TBD", decide con el usuario antes de escribir estructura de
proyecto — cambiar de framework a mitad de build es caro.

## Checklist de performance (no negociable)

- **LCP objetivo < 2.5s**: el elemento más grande above-the-fold (imagen,
  video poster, o texto) debe tener prioridad de carga
  (`fetchpriority="high"` o equivalente del framework), no competir con
  scripts de animación no críticos.
- **Imágenes y video optimizados**: confirma que lo generado en las fases
  4-5 ya viene en formatos web-friendly (`webp`, `mp4` comprimido) y con
  `loading="lazy"` fuera del viewport inicial.
- **JS de animación no bloquea el render inicial**: carga las librerías de
  motion de forma que no retrasen el primer paint (defer, code-splitting
  por sección si el framework lo permite).
- **CLS bajo control**: reserva espacio (aspect-ratio, dimensiones
  explícitas) para imágenes/video antes de que carguen, para que no
  salten los elementos alrededor.

## Checklist de SEO y conversión

- Meta title/description por página, y OG image para compartidos en
  redes (idealmente generada o adaptada en la fase 4).
- Estructura de encabezados coherente (un solo `h1` por página, jerarquía
  lógica de `h2`/`h3` que refleje el mapa de jerarquía de la fase 2).
- Cada CTA de conversión (definido en las fases 1-2) es rastreable: deja
  un punto de enganche claro para analytics/pixel, aunque la
  implementación final de tracking no sea parte de esta skill.
- Formularios y CTAs son funcionales antes de dar el sitio por listo —
  no solo visualmente correctos.

## Proceso

1. Scaffold del proyecto con el framework definido en
   `tools.config.json`.
2. Integra prototipo + assets + animación de las fases anteriores.
3. Corre el checklist de performance y SEO de arriba.
4. Prueba `prefers-reduced-motion`, mobile, y conexión lenta (throttling)
   antes de considerar el sitio listo.
5. Despliega con la plataforma definida en `tools.config.json` → rol
   `deployment`.

## Salida

Proyecto desplegado + un resumen corto de qué se verificó del checklist,
para que quede como registro de que el sitio salió cumpliendo el estándar
de performance y no solo "se ve bien en mi máquina".
