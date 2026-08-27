# Rediseño industrial expresivo de la landing G&S

## Objetivo

Rediseñar la landing de G&S Conexiones Estratégicas con una estética industrial expresiva, conservando el contenido, la estructura narrativa y el canal de conversión por WhatsApp. La experiencia se diseña primero para mobile y escala hacia desktop.

## Dirección creativa

La página combina tres principios tomados de las referencias sin replicarlas:

- Tipografía de gran escala y composiciones tensas de Iteloogs.
- Claridad editorial y control de jerarquía de Cargo.
- Lectura comercial directa y CTAs visibles de Transport.

La identidad se apoya en azul petróleo, blanco mineral y verde ácido de marca. La textura visual proviene de retículas técnicas, líneas de ruta, numeración sobredimensionada, bordes funcionales y fotografías conceptuales de logística. El resultado debe sentirse operativo, humano y en movimiento, no futurista ni corporativo genérico.

## Arquitectura y contenido

Se conserva el orden existente:

1. Header
2. Hero
3. Cifras
4. Qué hacemos
5. Cobertura
6. Por qué G&S
7. Impacto
8. Cómo trabajamos
9. Historia
10. CTA final
11. Footer

El copy seguirá viviendo en Content Collections y los datos repetibles en `src/data`. El rediseño se concentra en composición, estilo, recursos visuales y motion. No se inventarán cifras, fechas, testimonios ni capacidades operativas.

## Sistema visual

- Tipografía display: una familia condensada de carácter industrial para titulares y numeración.
- Tipografía de lectura: una sans humanista, compacta y legible para textos y controles.
- Color: azul petróleo como base estructural, blanco cálido como superficie principal y verde G&S como señal de acción y progreso.
- Formas: radios contenidos, marcos rectos, líneas finas, etiquetas técnicas y elementos circulares reservados para rutas, estados y CTAs.
- Composición: grids asimétricos en desktop y ritmo vertical de alto contraste en mobile.
- Fotografía: escenas conceptuales sin logos ni identidades empresariales falsas; carretera, carga PET, manos operativas y atmósferas de transporte en Antioquia.

## Diseño por sección

### Header

Barra flotante compacta con logotipo, navegación y CTA. En mobile conserva acceso inmediato a WhatsApp y menú táctil. Su transformación al hacer scroll refuerza la sensación de tablero operativo.

### Hero

Titular grande, dividido en líneas con jerarquía cinética. Imagen conceptual de carretera y camión como fondo editorial, con recorte oscuro y capas técnicas. CTA visible dentro del primer viewport móvil. Un indicador de recorrido introduce la narrativa de scroll.

### Cifras

Franja de datos de alto contraste, con números sobredimensionados y divisores que evocan una placa de control. En mobile las cifras aparecen como secuencia vertical breve.

### Qué hacemos

Servicios presentados como paneles editoriales con imagen, índice y revelado de información. Se evita una cuadrícula de tarjetas genéricas. En mobile cada servicio ocupa el ancho completo y mantiene targets táctiles amplios.

### Cobertura

Mapa como pieza principal, acompañado por líneas de ruta animadas y bloques geográficos jerarquizados. En mobile el texto antecede al mapa para asegurar comprensión antes del detalle visual.

### Por qué G&S

Carrusel táctil con atributos en gran formato, numeración y microinteracciones controladas. La navegación debe funcionar por gesto, botones y teclado.

### Impacto

Momento inmersivo en azul oscuro. La cifra ambiental se convierte en el foco tipográfico, acompañada por una fotografía conceptual de PET recuperado y elementos de progreso circular.

### Cómo trabajamos

Línea operativa de cuatro etapas. En desktop se lee horizontalmente; en mobile se convierte en recorrido vertical continuo. Cada etapa se activa al entrar al viewport.

### Historia

Composición editorial familiar con línea de tiempo, cita y una fotografía conceptual temporal. El módulo quedará preparado para reemplazar la imagen por una foto real sin alterar el layout.

### CTA y footer

Cierre directo, con una sola acción dominante. El footer resume navegación y contacto con apariencia de manifiesto de carga.

## Motion

GSAP y ScrollTrigger controlarán el storytelling global; Motion se limitará a las islas React. El sistema incluirá:

- Revelado escalonado del hero al cargar.
- Desplazamiento de líneas tipográficas y máscaras fotográficas.
- Contadores y bandas de datos activados al entrar al viewport.
- Progreso de rutas y procesos ligado al scroll.
- Staggers breves para paneles, hitos y atributos.
- Respuestas táctiles y hover entre 150 y 250 ms.

Las animaciones frecuentes usarán únicamente `transform` y `opacity`. Con `prefers-reduced-motion`, todo el contenido aparecerá completo y sin dependencia de timelines.

## Imágenes conceptuales

Se generarán entre dos y tres imágenes mediante Higgsfield, con tratamiento cinematográfico documental y paleta coherente. No mostrarán el logo de G&S, placas identificables ni personas presentadas como fundadores o empleados reales. Todas se implementarán en un directorio específico de assets conceptuales y con alt text que describa la escena, no una afirmación de propiedad.

## Responsive y accesibilidad

- Diseño base a 360–390 px; validación adicional a 768 px y 1440 px.
- CTA del hero visible sin scroll en móviles habituales.
- Navegación usable con teclado y lector de pantalla.
- Targets táctiles mínimos de 44 px.
- Contraste AA y foco visible.
- Sin texto horizontal artificialmente espaciado en mobile.
- Imágenes con dimensiones reservadas, variantes optimizadas y carga diferida fuera del hero.

## Manejo de estados y fallos

La landing no depende de datos remotos. Si una imagen conceptual no carga, el gradiente y la textura de fondo preservan legibilidad y composición. Si JavaScript falla o está deshabilitado, el contenido permanece visible y el CTA de WhatsApp sigue funcional.

## Verificación

- Build de producción sin errores.
- Revisión visual en 390 × 844, 768 × 1024 y 1440 × 1000.
- Prueba de menú, carruseles, enlaces y CTA.
- Prueba con `prefers-reduced-motion`.
- Revisión de overflow horizontal, CLS y jerarquía de encabezados.
- Confirmación de que no se modificaron cifras ni afirmaciones comerciales.

## Refinamiento aprobado

Antes de integrar las fotografías conceptuales se acordó simplificar la interfaz: hamburguesa sin contenedor, menú móvil con fondo navy sólido, header sensible a la dirección del scroll, encabezados de sección sin eyebrow, cards de servicios más compactas, mapa de cobertura más grande y libre de marcos decorativos, y controles del carrusel ubicados inmediatamente debajo de las cards.
