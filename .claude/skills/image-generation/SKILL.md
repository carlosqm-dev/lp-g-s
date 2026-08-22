---
name: image-generation
description: Use this skill whenever a project needs original images, illustrations, hero graphics, icons, or product-style photography for a website. Trigger on "genera una imagen", "necesito un hero image", "ilustración para esta sección", "product shots", "necesitamos fotos". Applies regardless of which image generation tool is actually used — always check config/tools.config.json first.
---

# Generación de imágenes

Fase 4 de 7. Produce los assets de imagen que la fase 2 (jerarquía visual)
marcó como necesarios para cada sección, consistentes con los tokens
definidos en la fase 3.

## Antes de empezar

Lee `config/tools.config.json` → rol `image_generation`. Si dice "TBD",
pregunta al usuario qué herramienta usa (o quiere usar) antes de generar
nada — las opciones cambian con el tiempo, no asumas una por defecto.
Ejemplos de categorías: generador de imágenes por prompt (Midjourney,
Ideogram, u otro vigente), edición manual (Photoshop), o banco de fotos
con licencia.

Lee `design-system/tokens.json` (paleta de color, para mantener
consistencia visual) y el mapa de jerarquía de la fase 2 (qué sección
necesita qué tipo de imagen y con qué peso/rol juega ahí).

## Checklist, independiente de la herramienta

- **Consistencia de estilo**: todas las imágenes de un mismo sitio deben
  sentirse de la misma familia (misma paleta, mismo tratamiento —
  fotográfico vs ilustrado vs 3D — mismo nivel de saturación/contraste).
  Si el usuario genera con IA, fija un prompt base o seed/estilo de
  referencia y reutilízalo entre imágenes.
- **Relación de aspecto por ubicación**: define el aspect ratio antes de
  generar (hero ≠ thumbnail ≠ imagen de fondo de sección) para evitar
  recortes destructivos después.
- **Peso y formato**: exporta en `webp` (con fallback `jpg` si hace falta
  compatibilidad), comprime sin degradar visiblemente, y no subas nada
  por encima de lo que la sección necesita en su tamaño de render real.
- **Accesibilidad**: cada imagen decorativa lleva `alt=""`; cada imagen
  con contenido informativo lleva alt text descriptivo, no genérico
  ("mockup del dashboard mostrando el gráfico de ventas", no "imagen 1").
- **Derechos de uso**: si la imagen es generada por IA para un sitio
  comercial, o si viene de un banco de fotos, confirma que la licencia
  cubre uso comercial antes de publicar.

## Proceso

1. Confirma con el usuario, sección por sección, qué imagen necesita
   (referencia el output de la fase 2).
2. Genera o edita siguiendo el checklist de arriba.
3. Nombra y organiza los archivos con esta convención:
   `assets/images/{seccion}/{nombre-descriptivo}.webp`
4. Anota en una tabla qué imagen va en qué sección, con su alt text, para
   que la fase de build (7) no tenga que adivinarlo.

## Salida

Carpeta `assets/images/` poblada + tabla de mapeo sección → archivo → alt
text, lista para integrarse en el prototipo de la fase 3 y para recibir
animación/interactividad en la fase 6.
