export interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: 'Entendemos tu necesidad',
    description: 'Conocemos la carga, el origen, el destino y las condiciones de la operación.',
  },
  {
    title: 'Diseñamos la ruta',
    description: 'Definimos la alternativa más adecuada según volumen, tiempos y requerimientos.',
  },
  {
    title: 'Coordinamos el proceso',
    description: 'Organizamos la operación para que cada parte de la cadena esté conectada.',
  },
  {
    title: 'Hacemos que suceda',
    description: 'Movemos la carga y acompañamos el proceso hasta su destino.',
  },
];
