# Plan de implementación — landing industrial expresiva G&S

## 1. Sistema visual

- Actualizar tipografías, superficies y radios en `design-system/tokens.json`.
- Sincronizar los tokens a `src/styles/theme.css`.
- Incorporar utilidades globales de grilla, textura, foco y etiquetas industriales.

## 2. Estructura mobile-first

- Rediseñar `Header.astro` y `Hero.astro` para mantener navegación y CTA dentro del primer viewport móvil.
- Replantear cada sección existente sin cambiar su orden ni su fuente de contenido.
- Transformar servicios, cifras, cobertura, atributos, proceso e historia en composiciones editoriales responsive.

## 3. Assets conceptuales

- Generar con Higgsfield una imagen hero 16:9, una escena PET 4:3 y una escena humana/operativa 3:2.
- Guardarlas en `src/assets/images/conceptual/` y pasarlas por `astro:assets`.
- Mantener fondos de respaldo para que la UI no dependa de las imágenes.

## 4. Motion

- Sustituir el revelado uniforme por timelines específicos para hero, cifras, paneles, mapa, proceso e historia.
- Conservar GSAP/ScrollTrigger para el scroll global y Motion/CSS para las islas React.
- Evitar animaciones de layout y desactivar motion no esencial cuando corresponda.

## 5. Verificación

- Ejecutar sincronización de tokens y build de Astro.
- Revisar visualmente 390 × 844, 768 × 1024 y 1440 × 1000.
- Probar menú, carruseles, CTAs, teclado, reducción de movimiento y overflow horizontal.
