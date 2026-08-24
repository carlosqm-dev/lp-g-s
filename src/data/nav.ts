// Fuente unica de los accesos directos del header. La misma lista alimenta
// la barra de escritorio y el menu hamburguesa, en este orden.
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Historia', href: '#historia' },
];
