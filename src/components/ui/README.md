# Componentes UI (21st.dev / shadcn)

Carpeta destino para los componentes que instales desde 21st.dev (CLI de
shadcn). Se instalan como islas React — no conviertas toda la landing en
React, solo los componentes que necesiten estado o interacción real
(formularios, acordeones con lógica extra, toggles).

```bash
npx shadcn@latest add button
# o el comando equivalente del componente que copies desde 21st.dev
```

Los `.astro` de `src/components/sections/` los importan y montan con la
directiva de hidratación que corresponda, normalmente:

```astro
import Button from '../ui/button';
<Button client:visible>Reemplaza con el CTA</Button>
```

`client:visible` hidrata el componente solo cuando entra al viewport —
es el default correcto para una landing (no pagues JS por un botón que
el visitante nunca desplaza a ver).
