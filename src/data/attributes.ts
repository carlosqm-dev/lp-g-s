// `icon` es una clave, no un componente: los datos se quedan libres de
// React para que este archivo siga siendo editable por cualquiera. El
// mapa clave -> icono vive en AttributesCarousel.tsx.
export type AttributeIcon = 'puntualidad' | 'flexibilidad' | 'eficiencia' | 'reputacion' | 'precio';

export interface Attribute {
  icon: AttributeIcon;
  title: string;
  description: string;
}

// Atributos de marca. Las descripciones son resumenes de una linea: el
// carrusel se lee de un vistazo, no es el lugar para el texto largo del
// documento de marca.
export const attributes: Attribute[] = [
  {
    icon: 'puntualidad',
    title: 'Puntualidad',
    description: 'Entregas a tiempo para que tu operación no se detenga.',
  },
  {
    icon: 'flexibilidad',
    title: 'Flexibilidad',
    description: 'Ajustamos rutas, horarios y tipo de carga a tu necesidad.',
  },
  {
    icon: 'eficiencia',
    title: 'Eficiencia',
    description: 'Rutas y tiempos optimizados: menos costo, menos huella.',
  },
  {
    icon: 'reputacion',
    title: 'Reputación y confiabilidad',
    description: 'Más de 20 años y la recomendación de nuestros clientes.',
  },
  {
    icon: 'precio',
    title: 'Relación calidad-precio',
    description: 'Tarifas competitivas sin bajar el estándar del servicio.',
  },
];
