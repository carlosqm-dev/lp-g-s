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
    imageAlt: 'Camión de carga de G&S junto a uno de sus conductores, listo para despachar',
    imagePosition: '50% center',
  },
  {
    title: 'Logística para la cadena de reciclaje',
    description: 'Conectamos la recuperación del PET con los procesos que permiten que vuelva a la industria.',
    image: '/images/product/pacas-pet-reciclaje.webp',
    imageAlt: 'Operario de G&S cargando pacas de botellas PET en el furgón de un camión',
    imagePosition: '50% center',
  },
  {
    title: 'Cobertura flexible',
    description: 'Operamos desde Antioquia y coordinamos soluciones nacionales según las características de cada carga y proyecto.',
    image: '/images/product/cobertura-antioquia.webp',
    imageAlt: 'Camiones de la flota de G&S estacionados en una vía de Antioquia',
    imagePosition: '50% center',
  },
];
