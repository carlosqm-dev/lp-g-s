export interface ImpactCard {
  tag: string;
  tagVariant: 'confirmed' | 'estimated';
  number: string;
  label: string;
  method: string;
}

export const impactCards: ImpactCard[] = [
  {
    tag: 'Dato confirmado',
    tagVariant: 'confirmed',
    number: '2.500 t',
    label: 'De PET movilizadas hacia reciclaje cada mes',
    method: 'Cómo se calcula: volumen mensual reportado por el cliente actual.',
  },
  {
    tag: 'Estimado',
    tagVariant: 'estimated',
    number: '~100 M',
    label: 'De botellas equivalentes desviadas de relleno sanitario',
    method: 'Cómo se calcula: toneladas de PET × factor de conversión peso→unidades (supuesto: ~25 g por botella). Confirmar con dato real antes de publicar.',
  },
];

// La cifra destacada se parte en fragmentos para poder resaltar los dos
// valores clave (accent1/accent2) sin meter markup dentro del dato.
export const impactHighlight = {
  before: '¿Sabías que ',
  accent1: '2.500 toneladas',
  middle: ' de PET al mes equivalen aproximadamente a ',
  accent2: '100 millones de botellas',
  after: ' desviadas de un relleno sanitario?',
  note: 'estimado — confirmar peso promedio por botella',
};
