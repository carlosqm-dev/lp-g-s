export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export const services: ServiceCard[] = [
  {
    title: 'Transporte de carga industrial',
    description: 'Movemos grandes volúmenes con la puntualidad que la operación de tu empresa necesita.',
    image: '/images/product/carga-industrial.webp',
    imageAlt: 'Imagen conceptual de un camión recibiendo carga industrial en un patio logístico',
    imagePosition: '52% center',
  },
  {
    title: 'Logística para la cadena de reciclaje',
    description: 'Especialistas en el transporte de material PET dentro del ciclo de economía circular.',
    image: '/images/product/pacas-pet-reciclaje.webp',
    imageAlt: 'Imagen conceptual de pacas de botellas PET siendo cargadas para su transporte',
    imagePosition: '48% center',
  },
  {
    title: 'Cobertura flexible',
    description: 'Base en Antioquia, con operación a nivel nacional según el requerimiento del cliente.',
    image: '/images/product/cobertura-antioquia.webp',
    imageAlt: 'Imagen conceptual de un camión recorriendo una carretera montañosa de Antioquia',
    imagePosition: '43% center',
  },
];
