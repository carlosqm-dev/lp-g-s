export interface Milestone {
  eyebrow: string;
  description: string;
  dateConfirmed: boolean;
  isCurrent?: boolean;
}

export const milestones: Milestone[] = [
  {
    eyebrow: 'Origen',
    description: 'Gentil funda la empresa con un solo vehículo y la convicción de hacer las cosas bien.',
    dateConfirmed: false,
  },
  {
    eyebrow: 'Consolidación',
    description: 'Santiago se une al negocio familiar; la operación crece en flota y cobertura.',
    dateConfirmed: false,
  },
  {
    eyebrow: 'Economía circular',
    description: 'G&S se especializa en el transporte de PET, conectando recuperación y reciclaje.',
    dateConfirmed: false,
  },
  {
    eyebrow: 'Hoy',
    description: 'Transportamos cerca de 2.500 toneladas de PET al mes, con la mirada puesta en seguir creciendo.',
    dateConfirmed: true,
    isCurrent: true,
  },
];

export const foundersQuote = {
  text: 'Construimos esto camión a camión, cliente a cliente.',
  attribution: 'Gentil y Santiago',
  confirmed: false,
};
