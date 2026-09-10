// Convierte imagenes de origen (assets/) a WebP optimizado en public/,
// que es la convencion del repo: los originales pesados viven en assets/
// y solo la version servible entra a public/.
//
// Uso:
//   node scripts/images-to-webp.mjs <dir-entrada> [dir-salida] [opciones]
//   pnpm images:webp                      # usa los valores por defecto
//
// Opciones:
//   --quality=80     calidad WebP (1-100)
//   --max-width=2000 ancho maximo en px; nunca amplia imagenes mas chicas
//   --force          reconvierte aunque el .webp ya exista
//
// Por defecto omite las que ya estan convertidas, asi correrlo de nuevo
// solo procesa lo nuevo.

import { readdir, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const args = process.argv.slice(2);
const flags = args.filter((a) => a.startsWith('--'));
const positional = args.filter((a) => !a.startsWith('--'));

const flag = (name, fallback) => {
  const found = flags.find((f) => f.startsWith(`--${name}=`));
  return found ? found.split('=')[1] : fallback;
};

const inputDir = path.resolve(root, positional[0] ?? 'assets/images-conexiones-estrategicas');
const outputDir = path.resolve(root, positional[1] ?? 'public/images/conexiones-estrategicas');
const quality = Number(flag('quality', 80));
const maxWidth = Number(flag('max-width', 2000));
const force = flags.includes('--force');

if (!Number.isFinite(quality) || quality < 1 || quality > 100) {
  console.error(`[images:webp] --quality invalido: ${flag('quality')}`);
  process.exit(1);
}
if (!Number.isFinite(maxWidth) || maxWidth < 1) {
  console.error(`[images:webp] --max-width invalido: ${flag('max-width')}`);
  process.exit(1);
}

const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.avif']);

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const entries = await readdir(inputDir, { withFileTypes: true }).catch((err) => {
  console.error(`[images:webp] no se pudo leer ${inputDir}: ${err.message}`);
  process.exit(1);
});

const files = entries
  .filter((e) => e.isFile() && SOURCE_EXT.has(path.extname(e.name).toLowerCase()))
  .map((e) => e.name)
  .sort();

if (files.length === 0) {
  console.warn(`[images:webp] no hay imagenes convertibles en ${inputDir}`);
  process.exit(0);
}

await mkdir(outputDir, { recursive: true });

let converted = 0;
let skipped = 0;
let failed = 0;
let bytesIn = 0;
let bytesOut = 0;

for (const name of files) {
  const from = path.join(inputDir, name);
  const to = path.join(outputDir, `${path.parse(name).name}.webp`);

  if (!force) {
    const exists = await stat(to).then(() => true, () => false);
    if (exists) {
      skipped += 1;
      continue;
    }
  }

  try {
    const source = sharp(from).rotate(); // respeta la orientacion EXIF
    const { width } = await source.metadata();

    const info = await source
      .resize({ width: Math.min(width ?? maxWidth, maxWidth), withoutEnlargement: true })
      .webp({ quality })
      .toFile(to);

    const { size: originalSize } = await stat(from);
    bytesIn += originalSize;
    bytesOut += info.size;
    converted += 1;

    const saved = ((1 - info.size / originalSize) * 100).toFixed(0);
    console.log(
      `[images:webp] ${name} -> ${path.basename(to)}  ` +
        `${kb(originalSize)} -> ${kb(info.size)} (-${saved}%)  ${info.width}x${info.height}`,
    );
  } catch (err) {
    failed += 1;
    console.error(`[images:webp] fallo ${name}: ${err.message}`);
  }
}

console.log(
  `\n[images:webp] ${converted} convertidas, ${skipped} omitidas (ya existian), ${failed} con error`,
);
if (converted > 0) {
  console.log(
    `[images:webp] ${kb(bytesIn)} -> ${kb(bytesOut)} ` +
      `(-${((1 - bytesOut / bytesIn) * 100).toFixed(0)}% en total)`,
  );
}
console.log(`[images:webp] salida: ${path.relative(root, outputDir)}`);

process.exit(failed > 0 ? 1 : 0);
