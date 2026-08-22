export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  { number: '01', title: 'Nos escribes por WhatsApp', description: 'Nos cuentas qué necesitas transportar.' },
  { number: '02', title: 'Cotizamos tu carga', description: 'Respuesta ágil, sin vueltas.' },
  { number: '03', title: 'Coordinamos la recolección', description: 'Definimos fecha y punto de recogida.' },
  { number: '04', title: 'Entregamos a tiempo', description: 'Con el seguimiento que tu operación necesita.' },
];
