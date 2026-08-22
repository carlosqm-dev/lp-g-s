export interface CoverageCore {
  eyebrow: string;
  title: string;
  description: string;
  variant: 'core' | 'on-demand';
}

export const coverageCores: CoverageCore[] = [
  {
    eyebrow: 'Núcleo',
    title: 'Valle de Aburrá',
    description: 'Medellín y municipios del área metropolitana. Operación diaria y respuesta inmediata.',
    variant: 'core',
  },
  {
    eyebrow: 'Núcleo',
    title: 'Oriente antioqueño',
    description: 'Rionegro, Marinilla, La Ceja y corredor industrial del oriente. Base operativa consolidada.',
    variant: 'core',
  },
  {
    eyebrow: 'Bajo requerimiento',
    title: 'Resto del país',
    description: 'Operamos a nivel nacional según la ruta y el volumen del proyecto, con capacidad coordinada.',
    variant: 'on-demand',
  },
];
