// Menu hamburguesa (mobile). El estado vive en la clase `.menu-open` del
// header; toda la animacion es CSS (ver Header.astro) para que respete
// prefers-reduced-motion sin logica extra.

const header = document.getElementById('site-header');
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

if (header && toggle && menu) {
  const setOpen = (open: boolean) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    // Evita que el fondo haga scroll detras del panel abierto.
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const isOpen = () => header.classList.contains('menu-open');

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  // Cerrar al elegir un acceso directo: el ancla ya lleva a la seccion.
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Si el viewport pasa a escritorio con el menu abierto, se limpia el
  // estado para no dejar el body bloqueado.
  const desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches && isOpen()) setOpen(false);
  });
}
