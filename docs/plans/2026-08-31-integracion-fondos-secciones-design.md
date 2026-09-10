# Integración de fondos entre secciones y cards

## Objetivo

Eliminar las superficies grises que aparecen detrás de cards y columnas redondeadas, haciendo que los espacios, separadores y esquinas compartan el color base de cada sección.

## Criterio visual

- Cobertura, Qué hacemos e Historia usarán el blanco cálido de marca (`background`).
- Los fondos auxiliares de Impacto usarán el azul de marca (`primary`).
- Los fondos auxiliares del footer serán transparentes para dejar visible su azul oscuro.
- Las imágenes y overlays dentro de cards redondeadas usarán límites explícitos de `0px` para evitar bordes producidos por el token de espaciado.
- El gris `background-alt` se conservará únicamente en las cards inactivas del carrusel de atributos.

## Verificación

- No debe aparecer `background-alt` fuera del carrusel de atributos.
- Las esquinas y separaciones deben coincidir con el fondo de su sección.
- La página debe conservar sus divisores, radios y jerarquía visual.
- El build de producción debe finalizar sin errores.
