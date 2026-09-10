# Radios pill para botones y cards

## Objetivo

Unificar la geometría de la interfaz para que todos los controles con apariencia de botón usen un radio completo tipo pill y todas las superficies reconocibles como cards usen un radio `xl`.

## Botones y CTAs

Se aplicará `rounded-full` a botones nativos, controles del carrusel y enlaces que visualmente funcionan como llamadas a la acción. Los enlaces de navegación, logos y enlaces editoriales conservarán su forma actual porque no representan botones.

## Cards

Se aplicará `rounded-xl` a las cards de servicios, atributos, impacto, estadísticas, historia y contacto. Las superficies con imágenes, fondos o capas animadas conservarán `overflow-hidden` para que todo el contenido respete el nuevo borde.

El header también usará `rounded-xl`, visible especialmente en su estado flotante con fondo translúcido. El menú móvil conservará su propio radio y permanecerá fuera del recorte del header.

## Implementación

Los radios se declararán explícitamente en cada componente mediante clases Tailwind. El componente base `Button` conservará `rounded-full` como valor predeterminado y se eliminarán sobrescrituras rectangulares en instancias concretas.

## Fuera de alcance

No se modificarán colores, sombras, espaciado, tamaños, tipografía, contenido ni animaciones. Tampoco se redondearán contenedores estructurales que no funcionen como cards.

## Verificación

- Build de producción sin errores.
- Búsqueda estática de botones y CTAs para confirmar `rounded-full`.
- Búsqueda estática de cards para confirmar `rounded-xl` y el recorte adecuado de su contenido.
