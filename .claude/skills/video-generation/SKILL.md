---
name: video-generation
description: Use this skill whenever a project needs hero videos, background loops, product demos, or any motion b-roll for a website. Trigger on "video de fondo", "hero video", "demo del producto en video", "necesitamos b-roll", "loop de fondo". Applies regardless of which video generation platform is actually used — always check config/tools.config.json first.
---

# Generación de video

Fase 5 de 7. Produce los assets de video que la fase 2 marcó como
necesarios, pensados para web (peso, loop, fallback) y no para broadcast.

## Antes de empezar

Lee `config/tools.config.json` → rol `video_generation`. Si dice "TBD",
pregunta al usuario antes de generar nada. Ejemplos de categorías:
plataformas de generación de video por IA (multi-modelo o de un solo
modelo), o grabación real editada externamente.

Lee el mapa de jerarquía de la fase 2 (qué sección necesita video, con
qué propósito) y `design-system/tokens.json` (paleta y tono visual, para
que el video no desentone con el resto del sitio).

## Checklist, independiente de la herramienta

- **Loopabilidad**: si el video es de fondo, debe poder repetirse sin
  corte perceptible — plantea el prompt/edición pensando en el primer y
  último frame desde el inicio, no lo arregles después.
- **Duración vs propósito**: un video de fondo no necesita más de unos
  segundos en loop; un demo de producto necesita la duración justa para
  comunicar una sola idea (si dura más de lo que tarda alguien en perder
  el interés, es un candidato a cortar).
- **Formato y peso**: exporta `mp4` (h.264) como base, con `webm` como
  alternativa más liviana si el stack lo soporta. Sirve el video con
  `poster` (imagen estática) para el primer paint y considera lazy-load
  para video fuera del viewport inicial.
- **Fallback de accesibilidad y performance**: respeta
  `prefers-reduced-motion` (sirve el poster estático o pausa el loop) y
  ten siempre un fallback mobile de menor peso o directamente una imagen
  si la conexión es lenta.
- **Subtítulos**: cualquier video con voz lleva subtítulos o captions,
  incluso si es autoplay sin sonido (que debería ser el default).
- **Consistencia de sujeto**: si varios clips muestran el mismo
  producto/persona/personaje, mantén consistencia visual entre
  generaciones (esto varía según la herramienta — revisa si la
  configurada en `tools.config.json` ofrece algún mecanismo de
  consistencia de personaje/sujeto entre generaciones).

## Proceso

1. Confirma con el usuario, sección por sección, qué video necesita y su
   propósito (fondo ambiental vs demo explicativo vs prueba social).
2. Genera o edita siguiendo el checklist de arriba.
3. Nombra y organiza los archivos:
   `assets/video/{seccion}/{nombre-descriptivo}.mp4` (+ `.webm` si aplica)
   y su poster: `assets/video/{seccion}/{nombre-descriptivo}-poster.webp`
4. Anota en una tabla qué video va en qué sección, con su propósito y si
   es autoplay/loop o requiere interacción del usuario para reproducirse.

## Salida

Carpeta `assets/video/` poblada + tabla de mapeo sección → archivo →
comportamiento (loop/autoplay/click-to-play), lista para integrarse en el
prototipo y para recibir tratamiento en la fase 6.
