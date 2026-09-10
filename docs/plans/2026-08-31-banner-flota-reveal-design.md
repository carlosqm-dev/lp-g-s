# Banner de flota con revelación sticky

## Objetivo

Insertar después de “¿Qué hacemos?” un banner fotográfico de una flota de camiones que se perciba detrás de la página y se revele progresivamente al hacer scroll.

## Imagen

La imagen será una fotografía documental ultrapanorámica de entre cinco y siete camiones de carga alineados en un patio logístico limpio. La cámara usará una vista frontal en tres cuartos, luz natural suave y montañas de Antioquia discretas al fondo. No tendrá texto, logotipos, marcas ni matrículas legibles.

## Composición

El banner ocupará todo el ancho entre “¿Qué hacemos?” y “Cobertura”. La sección será un lienzo continuo con el blanco cálido de marca (`background`), sin borde, sombra ni apariencia de tarjeta. La imagen se recortará con `object-cover`, priorizando el centro de la flota en móvil.

## Revelación

El contenedor tendrá entre `155svh` y `165svh`. Dentro, un panel sticky de `100dvh` mantendrá la fotografía a la altura completa del viewport visible mientras una cortina del blanco de marca se desplaza hacia arriba mediante GSAP `ScrollTrigger` con `scrub`. Los límites superior e inferior usarán `0px` explícitos para no heredar el token de espaciado del proyecto. La cortina tendrá 1 px de sobrecobertura horizontal dentro del mismo recorte de la fotografía para evitar uniones subpíxel. La imagen reducirá sutilmente su escala durante el recorrido para reforzar la profundidad.

Con `prefers-reduced-motion`, la fotografía se mostrará completa y estática, sin cortina ni transformación.

## Verificación

- Imagen final persistida dentro del workspace.
- Build de producción sin errores.
- Revisión visual en escritorio y móvil.
- Confirmación del estado estático con movimiento reducido.
