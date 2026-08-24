// Fuente unica de los accesos directos del header. `primary: true` marca
// los que ademas se muestran en la barra de escritorio; el menu hamburguesa
// (mobile) siempre muestra la lista completa.
export interface NavLink {
  label: string;
  href: string;
  primary?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Qué hacemos', href: '#que-hacemos', primary: true },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Nuestra historia', href: '#historia', primary: true },
  { label: 'Contacto', href: '#contacto' },
];
