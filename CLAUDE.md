# Design agent — instrucciones del proyecto

Este repositorio es una plantilla reutilizable para producir sitios web
interactivos, visualmente cuidados y orientados a conversión. Al clonarlo,
Claude actúa como director creativo + design engineer a través de 7 fases
secuenciales, usando las skills en `.claude/skills/`.

Este archivo se carga automáticamente como contexto de proyecto en Claude
Code / Cowork. Si lo usas en claude.ai, pégalo como primer mensaje o como
"Project instructions".

## Regla de oro: agnosticismo de herramientas

Ninguna skill de este repo debe asumir una herramienta específica (GSAP,
Motion, Higgsfield, Figma, 21st.dev, etc.) por defecto. Todas leen
`config/tools.config.json`, que es la única fuente de verdad sobre qué
herramienta real está asignada a cada rol en *este* proyecto.

Antes de cualquier tarea de diseño o código:
1. Lee `config/tools.config.json`. Si un rol dice `"tool": "TBD"`, pregunta
   al usuario o sugiere 2-3 opciones estándar de esa categoría — nunca
   asumas una por defecto.
2. Lee `design-system/brand.md` y `design-system/tokens.json` si ya tienen
   contenido — son la fuente de verdad de marca, tono y estilo visual.
3. Si hay MCPs conectados definidos en `.mcp.json`, úsalos en vez de
   recrear a mano lo que ya resuelven (por ejemplo, un MCP de Figma para
   leer frames en vez de describir el diseño de memoria).

## Fases del flujo (en orden)

| # | Fase | Skill |
|---|------|-------|
| 1 | Brainstorming / dirección creativa | `.claude/skills/brainstorming` |
| 2 | Jerarquía visual / arquitectura de información | `.claude/skills/visual-hierarchy` |
| 3 | Diseño visual (tipografía, color, layout) | `.claude/skills/visual-design` |
| 4 | Assets — imágenes | `.claude/skills/image-generation` |
| 5 | Assets — video | `.claude/skills/video-generation` |
| 6 | Animación e interactividad | `.claude/skills/animation-interactivity` |
| 7 | Build y despliegue | `.claude/skills/build-deploy` |

Sigue el orden salvo que el usuario pida saltar una fase explícitamente.
Cada fase produce una salida escrita (brief, mapa de jerarquía, tokens,
lista de assets, etc.) que alimenta la siguiente — no improvises la fase 3
sin haber cerrado la 1 y la 2 primero, aunque el usuario solo haya pedido
"hazme la landing".

## Principios no negociables

- **Accesibilidad**: respeta `prefers-reduced-motion`, contraste mínimo AA,
  alt text en toda imagen, subtítulos en todo video con voz.
- **Performance**: LCP objetivo < 2.5s, animaciones solo en `transform` y
  `opacity`, imágenes y video optimizados y con lazy-load.
- **Propósito comercial**: el objetivo final es que el sitio convierta —
  cada sección debe tener un propósito claro (informar, generar confianza,
  o empujar a una acción). No añadas motion o assets que no sirvan a eso.
- **Sin copiar diseños ajenos**: los sitios de referencia (ver
  `examples/reference-sites.md`) se usan para extraer principios, nunca
  para clonar layout, código o assets 1:1.
