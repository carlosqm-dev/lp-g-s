# Assets del proyecto

Esta carpeta es lo primero que llenas al arrancar un cliente nuevo.
Los nombres de archivo importan: el código en `src/` los referencia por
convención, no por búsqueda manual.

## brand/logo/

| Archivo | Uso |
|---|---|
| `logo-full-color.svg` | Header sobre fondo claro |
| `logo-white.svg` | Header sobre fondo oscuro / hero con imagen o video de fondo |
| `mark.svg` | Isotipo solo, para espacios reducidos (favicon, loading state) |

Pide siempre SVG vectorial al cliente. Si solo tiene PNG, es la primera
señal de que el proyecto necesita trabajo de identidad antes que de
landing page — dilo explícito, no lo escondas resolviéndolo con un PNG
de baja resolución.

## brand/favicon/

`favicon.svg` + `favicon.png` (32x32 y 180x180 para apple-touch-icon).
Se generan desde `mark.svg`.

## brand/fonts/

Solo si el cliente usa una tipografía custom con licencia propia
(`.woff2` self-hosted). Si la tipografía es de Google Fonts u otra
fuente con CDN, no la copies aquí — impórtala directo en
`astro.config.mjs`.

## images/hero/

Imagen o imagen de fallback (poster) para la sección above-the-fold.
Formato `webp`, ancho real de render (no subas un archivo de 6000px
para un contenedor de 1600px).

## images/product/

Fotografía o mockup del producto/servicio. Prioridad: fotografía real
del cliente > mockup generado. Ver `config/tools.config.json` → rol
`image_generation`.

## images/social-proof/

Logos de clientes/marcas que avalan (monocromo, mismo alto entre todos)
y avatares de testimonios.

## images/og/

Una sola imagen `og-default.png` (1200x630) para compartidos en redes.
Se referencia en el `<head>` del layout, no por sección.

## video/hero/

Loop de fondo del hero, ya optimizado (`.mp4` + `-poster.webp`). Ver la
skill `video-generation` para el checklist completo antes de subir algo
aquí (loopabilidad, peso, fallback de `prefers-reduced-motion`).

## video/b-roll/

Clips de apoyo para secciones de producto/features, no necesariamente
en loop.
