# Shot list — fotografía real G&S Conexiones Estratégicas

> Salida de la fase 4 (`image-generation`), adaptada: el cliente va a
> tomar las fotos reales en vez de generarlas por IA. Este documento es
> el brief para esa sesión de fotos. Cuando las entreguen, renómbralas
> según la tabla de abajo y bórrense estas notas.

## Estilo general (aplica a todas las fotos)

- Luz natural, de día. Evitar flash directo o luz fluorescente fría de bodega.
- Sin filtros ni saturación fuerte — colores reales. Evitar dominantes
  cálidos (naranja/amarillo intenso) que choquen con el verde de marca
  `#94C23D`.
- Encuadre limpio: patio/bodega ordenado, sin chatarra o desorden visible
  detrás del sujeto.
- Preferir horizontal (landscape) sobre vertical — el sitio es desktop-first.
- Resolución mínima 2400px en el lado más largo. JPG o HEIC de cámara/celular
  está bien: se optimiza a `webp` al integrarlo al sitio.
- Sujeto "en acción" siempre que se pueda (camión cargando, en ruta) — evitar
  fotos estáticas de vehículo vacío y parqueado, se sienten menos creíbles.

## Por sección

| Sección | Qué fotografiar | Encuadre | Prioridad |
|---|---|---|---|
| Hero | Camión G&S en carretera o en plena carga, transmitiendo movimiento | Horizontal, 3:2 o 4:3 | Alta — es lo primero que se ve |
| Qué hacemos → Transporte de carga industrial | Camión cargado, vista de 3/4, en patio o carretera | Horizontal, 4:3 | Media |
| Qué hacemos → Logística de reciclaje | Pacas/bultos de botellas PET siendo cargados en el camión | Horizontal, 4:3 | **Alta** — es la imagen que más conecta con el ángulo ambiental; priorizarla si solo alcanza para pocas fotos |
| Qué hacemos → Cobertura flexible | Camión en carretera, idealmente con algún elemento reconocible de Antioquia (paisaje, señalización) | Horizontal, 4:3 | Media |
| Nuestra historia | Gentil y Santiago juntos, en la operación (patio, junto a un camión) — candid, no foto de estudio posada | Horizontal, 3:2 | Alta — refuerza el ángulo familiar, es la foto más humana del sitio |

## Nombrar y ubicar al recibir las fotos

| Sección | Archivo destino | Alt text sugerido |
|---|---|---|
| Hero | `assets/images/hero/camion-en-ruta.webp` | "Camión de G&S Conexiones Estratégicas circulando por una carretera de Antioquia" |
| Qué hacemos — carga industrial | `assets/images/product/carga-industrial.webp` | "Camión de G&S cargado, listo para transportar mercancía industrial" |
| Qué hacemos — reciclaje PET | `assets/images/product/pacas-pet-reciclaje.webp` | "Pacas de botellas PET siendo cargadas en un camión de G&S para su reciclaje" |
| Qué hacemos — cobertura | `assets/images/product/cobertura-antioquia.webp` | "Camión de G&S en carretera, operando en Antioquia" |
| Nuestra historia | `assets/images/historia/fundadores-gentil-santiago.webp` | "Gentil y Santiago, fundadores de G&S Conexiones Estratégicas, en su patio de operaciones" |

`assets/images/historia/` es una carpeta nueva (no estaba en la
convención original de `assets/README.md`, que solo cubre hero/product/
social-proof/og) — se agrega porque la fase 2 definió una foto de los
fundadores como elemento secundario de esa sección.

## Pendiente

- Confirmar con el cliente si hay más fotos disponibles de flota/patio
  para variar el "Qué hacemos" más allá de una sola sesión.
- `og-default.png` (1200×630, para compartidos en redes) no depende de
  esta sesión de fotos — se compone en la fase de build reutilizando
  logo + paleta de marca.
