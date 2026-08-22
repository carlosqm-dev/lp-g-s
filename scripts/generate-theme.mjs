// Lee design-system/tokens.json (fuente de verdad, la llena la skill
// visual-design) y genera src/styles/theme.css con la sintaxis @theme de
// Tailwind v4. Correr con `npm run tokens:sync`, o automatico antes de
// `dev`/`build` via los hooks predev/prebuild en package.json.
//
// No edites src/styles/theme.css a mano — se sobreescribe en cada sync.
// Si necesitas un token nuevo, agregalo en tokens.json y vuelve a correr
// este script.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const tokensPath = path.join(root, 'design-system/tokens.json');
const outPath = path.join(root, 'src/styles/theme.css');

const tokens = JSON.parse(readFileSync(tokensPath, 'utf-8'));

const hasPlaceholders = JSON.stringify(tokens).includes('TBD');
if (hasPlaceholders) {
  console.warn(
    '[tokens:sync] design-system/tokens.json todavia tiene valores "TBD". ' +
    'Corre la skill visual-design antes de confiar en el theme generado.'
  );
}

const lines = ['@theme {'];

for (const [key, value] of Object.entries(tokens.color ?? {})) {
  lines.push(`  --color-${key.replace(/_/g, '-')}: ${value};`);
}

if (tokens.typography?.heading_font) {
  lines.push(`  --font-heading: ${tokens.typography.heading_font};`);
}
if (tokens.typography?.body_font) {
  lines.push(`  --font-body: ${tokens.typography.body_font};`);
}

(tokens.spacing_px ?? []).forEach((v, i) => {
  lines.push(`  --spacing-${i}: ${v}px;`);
});

for (const [key, value] of Object.entries(tokens.radius_px ?? {})) {
  lines.push(`  --radius-${key}: ${value}px;`);
}

if (tokens.motion) {
  lines.push(`  --duration-fast: ${tokens.motion.duration_fast_ms}ms;`);
  lines.push(`  --duration-base: ${tokens.motion.duration_base_ms}ms;`);
  lines.push(`  --duration-slow: ${tokens.motion.duration_slow_ms}ms;`);
  lines.push(`  --ease-standard: ${tokens.motion.easing_standard};`);
}

lines.push('}');

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, lines.join('\n') + '\n');
console.log(`[tokens:sync] src/styles/theme.css generado desde tokens.json`);
