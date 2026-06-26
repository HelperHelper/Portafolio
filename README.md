# Mi Portfolio — Next.js 14

Landing page de portafolio personal construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: CSS animations + Intersection Observer
- **Deploy**: Vercel (cero configuración)

## 🛠 Setup local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

Abre [http://localhost:3000](http://localhost:3000)

## ✏️ Qué personalizar

### 1. Información personal
Edita `components/Hero.tsx`:
- Tu nombre en el logo (`TU_NOMBRE`)
- Estadísticas reales (años, proyectos, etc.)

Edita `components/About.tsx`:
- Tu bio en los párrafos de texto
- Tu nombre, ciudad
- Tu foto (reemplaza el div placeholder con `<Image>`)
- Ajusta las skills según tus tecnologías

Edita `components/Contact.tsx`:
- Cambia `EMAIL` por tu email real
- Actualiza los links de redes sociales

Edita `components/Footer.tsx`:
- Tu nombre en el pie de página

Edita `app/layout.tsx`:
- Título y descripción SEO

### 2. Proyectos del portafolio
Edita el array `projects` en `components/Portfolio.tsx`:
```js
const projects = [
  {
    id: 1,
    title: 'Nombre del proyecto',
    category: 'Web App',
    description: 'Descripción corta.',
    tech: ['React', 'Node.js'],
    video: '/videos/proyecto1.mp4', // ← Pon tus videos en /public/videos/
    poster: '/images/proyecto1.jpg', // ← Thumbnail del video
    live: 'https://tu-proyecto.com',
    github: 'https://github.com/tu/proyecto',
    featured: true, // El primero ocupa doble ancho
  },
  // ...
]
```

### 3. Videos de proyectos
- Crea la carpeta `public/videos/`
- Añade tus videos como `.mp4` (recomendado: comprimidos con HandBrake, < 5MB c/u)
- Actualiza los `src` en el array de proyectos

### 4. Tu foto
En `components/About.tsx`, reemplaza el div placeholder:
```jsx
import Image from 'next/image'

<Image
  src="/images/tu-foto.jpg"
  alt="Tu nombre"
  fill
  className="object-cover"
/>
```

### 5. Formulario de contacto
El formulario está listo para conectar con cualquier servicio:

**Opción A — Formspree (gratis):**
1. Crea cuenta en [formspree.io](https://formspree.io)
2. En `handleSubmit` reemplaza el `setTimeout` con:
```js
const res = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setStatus('sent')
else setStatus('error')
```

## 🌐 Deploy en Vercel

```bash
# Opción 1: desde CLI
npm i -g vercel
vercel

# Opción 2: conecta tu repo en vercel.com
# → Import Project → selecciona tu repo → Deploy
```

Vercel detecta Next.js automáticamente. Cero configuración necesaria.

## 📁 Estructura

```
portfolio/
├── app/
│   ├── layout.tsx      # Fuentes, metadata, HTML base
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales + utilidades
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx   # ← Edita tus proyectos aquí
│   ├── About.tsx       # ← Edita tu bio aquí
│   ├── Contact.tsx     # ← Edita tu email aquí
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   └── useReveal.ts    # Hook para animaciones scroll
├── public/
│   └── videos/         # ← Tus videos aquí
└── ...config files
```
