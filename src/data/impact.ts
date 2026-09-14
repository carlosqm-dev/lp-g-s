export interface ImpactCard {
  value: string;
  unit?: string;
  label: string;
}

// Estadísticas globales sobre contaminación plástica.
// Fuentes: IUCN Marine Plastic Pollution (2021) y UNEP From Pollution
// to Solution (2021).
export const impactCards: ImpactCard[] = [
  {
    value: '14 millones',
    unit: 'de toneladas',
    label: 'De plástico llegan al océano cada año.',
  },
  {
    value: '85%',
    label: 'De la basura marina está compuesta por plásticos.',
  },
  {
    value: '23–37 millones',
    unit: 'de toneladas',
    label: 'Podrían llegar al océano cada año para 2040.',
  },
];

// La pregunta se parte en fragmentos para resaltar palabras clave sin
// introducir markup dentro de los datos.
export const impactHighlight = {
  before: '¿Sabías que detrás de cada ',
  accent1: 'material',
  middle1: ' que vuelve a ',
  accent2: 'circular',
  middle2: ', existe una cadena que debe mantenerse en ',
  accent3: 'movimiento',
  after: '?',
  description:
    'Detrás de cada tonelada hay algo más que carga: hay materiales que pueden reintegrarse, procesos que pueden continuar y recursos que tienen una nueva oportunidad.',
};
