# “Nuestra ruta” como carretera gráfica

## Objetivo

Reemplazar la cuadrícula de cuatro cards de la sección “Nuestra ruta” por un recorrido gráfico visto desde arriba, manteniendo la claridad del proceso y la identidad industrial de G&S.

## Dirección visual

La ruta se construirá con SVG y HTML. Una carretera azul oscuro recorrerá un campo verde en forma de “S”, con hombros claros y línea central discontinua. Los cuatro pasos se integrarán directamente sobre el asfalto como estaciones numeradas, sin depender de una imagen raster.

Cada estación mostrará el número de etapa, título y descripción actuales. Un parche del mismo color de la vía despejará la línea central detrás del texto sin introducir una nueva card visual.

## Composición responsive

En escritorio, la carretera avanzará horizontalmente con dos curvas suaves y estaciones alternadas en altura. En móvil, se renderizará una versión vertical sinuosa con las cuatro estaciones en una sola columna. Ambas representaciones consumirán los mismos datos de `steps.ts`.

## Movimiento

Al entrar en pantalla, la carretera se dibujará de inicio a fin y las estaciones aparecerán en secuencia mediante la animación GSAP existente. Con `prefers-reduced-motion`, el recorrido se mostrará completo desde el inicio.

## Alcance

Se conservarán el encabezado, el CTA de WhatsApp, la paleta, la tipografía y el contenido. No se generará ni incorporará una imagen de fondo.

## Verificación

- Build de producción sin errores.
- Revisión visual en escritorio y móvil.
- Confirmación de orden y legibilidad de los cuatro pasos.
- Confirmación del estado estático con movimiento reducido.

## Refinamiento aprobado

El fondo del mapa será verde plano, sin retícula ni rótulos de origen o destino. Las estaciones usarán fondo blanco y texto azul oscuro. La carretera de escritorio será uniformemente más ancha para contener por completo las estaciones; en móvil será una vía recta y vertical. El dibujo de la ruta durará 2.6 segundos y la secuencia completa aproximadamente 3.5 segundos.

El mapa ocupará todo el ancho de la ventana, fuera del límite de `section-shell`, sin borde, radio ni recorte. El SVG incorporará margen verde interno para mostrar completos los hombros, las curvas y los remates de la carretera tanto en escritorio como en móvil.
