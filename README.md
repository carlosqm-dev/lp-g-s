# Design agent starter

Plantilla de repositorio para que Claude actúe como agente de diseño en
proyectos de sitios web interactivos y orientados a conversión. No está
atada a herramientas específicas (GSAP, Motion, Higgsfield, 21st.dev,
Figma, etc.) — todas se configuran en un único archivo, así que puedes
clonar este repo para cualquier proyecto y con cualquier stack.

## Qué incluye

```
design-agent-starter/
├── CLAUDE.md                    # system prompt del proyecto (se carga solo en Claude Code/Cowork)
├── .mcp.json                    # MCPs del proyecto (Figma de ejemplo, agrega los que uses)
├── config/
│   └── tools.config.json        # ÚNICO punto de personalización de herramientas
├── .claude/skills/               # 7 skills, una por fase del proceso
│   ├── brainstorming/
│   ├── visual-hierarchy/
│   ├── visual-design/
│   ├── image-generation/
│   ├── video-generation/
│   ├── animation-interactivity/
│   └── build-deploy/
├── design-system/
│   ├── brand.md                 # brief de marca (lo llena la skill brainstorming)
│   └── tokens.json              # tokens de diseño (los llena la skill visual-design)
└── examples/
    └── reference-sites.md       # catálogo de sitios de referencia
```

## Cómo funciona

`CLAUDE.md` define 7 fases en orden (brainstorming → jerarquía visual →
diseño visual → imágenes → video → animación → build/deploy). Cada fase
tiene su propia skill en `.claude/skills/`. Ninguna skill asume una
herramienta concreta: todas empiezan leyendo `config/tools.config.json`
para saber qué usar en *este* proyecto.

Esto significa que el mismo repo sirve tanto si tu stack es GSAP + Motion
+ Higgsfield + 21st.dev, como si es cualquier otra combinación — solo
cambias el archivo de configuración, no las skills.

## Quickstart

1. **Clona el repo** para tu nuevo proyecto:
   ```bash
   git clone <url-de-tu-fork-o-remoto> mi-sitio-nuevo
   cd mi-sitio-nuevo
   ```
2. **Personaliza `config/tools.config.json`**: reemplaza cada `"TBD"` por
   la herramienta real que vas a usar en ese rol (o déjalo en `"TBD"` y
   Claude te preguntará al llegar a esa fase).
3. **Configura `.mcp.json`** con los MCPs que tengas disponibles (Figma
   ya viene de ejemplo; agrega o quita servidores según tu stack).
4. **Abre el proyecto con Claude Code, Cowork, o pega `CLAUDE.md` como
   instrucciones de proyecto en claude.ai.**
5. **Empieza por el brainstorming** — aunque tengas prisa por ver la
   landing, deja que la fase 1 y 2 corran primero; son las que definen
   si el sitio se siente genérico o no.

## Personalización entre proyectos

- `design-system/brand.md` y `design-system/tokens.json` deberían
  vaciarse (o archivarse) al empezar un proyecto nuevo — son específicos
  de cada sitio, no de la plantilla.
- `config/tools.config.json` y `.mcp.json` sí pueden mantenerse iguales
  entre proyectos si usas el mismo stack de herramientas siempre; si
  cambias de stack proyecto a proyecto, edítalos cada vez.
- Las 7 skills en `.claude/skills/` están pensadas para no tocarse — son
  el proceso estándar. Si tu forma de trabajar cambia de verdad (por
  ejemplo, agregas una fase de testing con usuarios), agrega una skill
  nueva en vez de forzarla dentro de una existente.

## Publicar este repo en tu propio remoto

Este starter no viene conectado a ningún remoto de git. Para subirlo al
tuyo:

```bash
cd design-agent-starter
git init
git add .
git commit -m "Initial commit: design agent starter"
git branch -M main
git remote add origin <url-de-tu-repo-vacio-en-github-o-gitlab>
git push -u origin main
```

A partir de ahí, cada proyecto nuevo puede ser un fork o un clone de este
repo, o puedes mantenerlo como plantilla ("template repository" en
GitHub) y generar un repo nuevo desde ahí por cada sitio.

## Levantar el proyecto Astro (stack ya scaffoldeado en este repo)

Manejador de paquetes: **pnpm** (fijado en `package.json` vía
`packageManager`, así corepack usa siempre la misma versión sin
importar en qué máquina se clone el repo).

```bash
corepack enable        # una sola vez por máquina, si no lo tienes activo
pnpm install
pnpm dev
```

`pnpm dev` y `pnpm build` corren `tokens:sync` primero (encadenado en el
propio script, no como hook implícito — pnpm no ejecuta `predev`/
`prebuild` automáticamente como npm), así que
`design-system/tokens.json` siempre queda reflejado en
`src/styles/theme.css` sin pasos manuales.

Para el flujo completo de una landing (el entregable más común), ver
`.claude/skills/landing-page-storytelling/SKILL.md` — trae el checklist
de arranque cliente por cliente.
