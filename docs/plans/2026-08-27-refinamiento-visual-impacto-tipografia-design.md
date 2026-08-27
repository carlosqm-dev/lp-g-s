# Refinamiento visual de servicios, impacto, historia y tipografía

## Objetivo

Reducir ruido decorativo, mejorar la legibilidad de los textos descriptivos y convertir la sección de Impacto en un momento fotográfico con movimiento ligado al scroll.

## Servicios

Las tres cards conservarán la fotografía, el título y la descripción. Se eliminan las etiquetas superiores, las líneas internas y cualquier elemento gráfico que compita con la escena. Un gradiente inferior mantendrá la legibilidad sin ocultar la imagen.

## Impacto

El placeholder abstracto se reemplaza por una fotografía documental vertical de botellas PET recuperadas avanzando por una línea de clasificación. La composición tendrá margen superior e inferior para admitir desplazamiento vertical dentro del contenedor.

La entrada lateral existente se conserva. Además, la fotografía se desplazará verticalmente y escalará de forma mínima mientras la sección cruza el viewport, replicando el principio de movimiento del mapa de Cobertura. Con `prefers-reduced-motion`, la imagen permanecerá estática y completamente visible.

## Historia

La fotografía de padre e hijo pierde el marco interior, la diagonal, las etiquetas superiores y la nota de imagen provisional. Solo permanece el titular “Dos generaciones. Una misma ruta.” sobre el gradiente inferior.

La cita se integra inmediatamente debajo de la fotografía y adopta exactamente el ancho de esa columna. Se elimina el bloque de atribución “Gentil y Santiago” y su estado pendiente. La cronología permanece en la columna derecha.

## Escala tipográfica

Los párrafos descriptivos y cuerpos de cards usarán 16 px en mobile y 20 px en desktop, igualando la escala del subtítulo de Impacto. Se aplica a Hero, introducciones de sección, servicios, cobertura, atributos, impacto, proceso, cronología, CTA final y texto descriptivo del footer.

Permanecen pequeños los metadatos, etiquetas, navegación, botones, notas metodológicas, estados de confirmación y cifras auxiliares para conservar jerarquía.

## Verificación

- Build de producción sin errores.
- Revisión visual a 390 × 844 y 1440 × 1000.
- Confirmación de recortes de las fotografías y legibilidad de los gradientes.
- Movimiento de Impacto verificado durante scroll.
- Contenido completo y estático con movimiento reducido.
