# 🎨 Guía de Personalización

## 📝 Información Personal

### 1. Metadata y SEO (`lib/seo.ts`)
```typescript
const siteConfig = {
  name: 'Tu Nombre',
  description: 'Tu descripción profesional',
  url: 'https://tu-dominio.com',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    email: 'mailto:tu@email.com',
  },
}
```

### 2. Hero Section (`components/Hero.tsx`)
- **Nombre**: Busca `Ángel Molina` y reemplázalo
- **Typing Animation**: Edita el array en TypeAnimation:
  ```typescript
  sequence={[
    'Tu primer rol',
    2000,
    'Tu segundo rol',
    2000,
    // ...
  ]}
  ```
- **Descripción**: Modifica el párrafo debajo del typing effect
- **Social Links**: Ya toman datos de `lib/seo.ts`

### 3. About Section (`components/About.tsx`)
- **Biografía**: Edita los párrafos dentro de `motion.p`
- **Timeline**: Modifica el array `timeline`:
  ```typescript
  const timeline = [
    {
      year: '2024 - Presente',
      title: 'Tu posición actual',
      institution: 'Empresa/Universidad',
      description: 'Descripción',
      current: true,
    },
    // Añade más items
  ]
  ```

### 4. Proyectos (`content/projects.json`)
```json
{
  "id": "proyecto-unico",
  "title": "Nombre del Proyecto",
  "description": "Descripción detallada de lo que hace",
  "tags": ["React", "Node.js", "MongoDB"],
  "image": "/projects/mi-proyecto.jpg",
  "github": "https://github.com/usuario/repo",
  "demo": "https://demo.com",
  "featured": true
}
```

**Tips para proyectos:**
- `featured: true` los muestra en la home
- Añade imágenes en `/public/projects/`
- Dimensiones recomendadas: 800x600px
- Usa WebP para mejor rendimiento

## 🎨 Personalización Visual

### Colores (`tailwind.config.ts`)
```typescript
colors: {
  'neon-purple': '#a855f7',  // Color principal
  'neon-cyan': '#06b6d4',    // Color secundario
  'neon-pink': '#ec4899',    // Color acento
}
```

**Paletas sugeridas:**
- **Cyberpunk**: `#ff006e`, `#8338ec`, `#3a86ff`
- **Sunset**: `#ff6b6b`, `#f9ca24`, `#6c5ce7`
- **Ocean**: `#0984e3`, `#00cec9`, `#6c5ce7`
- **Forest**: `#00b894`, `#55efc4`, `#fdcb6e`

### Fuentes
Por defecto usa **Space Grotesk**. Para cambiar:

1. En `app/layout.tsx`:
```typescript
import { Tu_Fuente } from 'next/font/google'

const tuFuente = Tu_Fuente({
  subsets: ['latin'],
  variable: '--font-tu-fuente',
})
```

2. En `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['var(--font-tu-fuente)', 'system-ui', 'sans-serif'],
}
```

**Fuentes recomendadas:**
- **Moderna**: Inter, Poppins, Outfit
- **Tech**: JetBrains Mono, Fira Code, IBM Plex Mono
- **Elegante**: Playfair Display, Cormorant, Libre Baskerville

### Animaciones

**Velocidad global** (`lib/motion.ts`):
```typescript
transition: { duration: 0.5 } // Aumenta o reduce
```

**Desactivar animación específica**:
- Comenta o elimina el componente `<ParticlesBackground />`
- Elimina `animate-glow` en el nombre del Hero
- Reduce `particleCount` en `ParticlesBackground.tsx`

## 🖼️ Assets Requeridos

### Favicon e Iconos
Crea estos archivos en `/public`:

1. **favicon.ico** (16x16, 32x32)
2. **icon-192.png** (192x192) - PWA
3. **icon-512.png** (512x512) - PWA
4. **apple-touch-icon.png** (180x180)

**Herramienta recomendada**: https://realfavicongenerator.net/

### Open Graph Image
- **Archivo**: `/public/og.png`
- **Dimensiones**: 1200x630px
- **Contenido**: Tu nombre, rol, y branding visual

**Herramienta recomendada**: https://www.canva.com/

### Imágenes de Proyectos
- **Ubicación**: `/public/projects/`
- **Formato**: WebP o PNG
- **Dimensiones**: 800x600px (ratio 4:3)
- **Peso**: < 200KB por imagen

## ⚙️ Configuración Avanzada

### GitHub Stats
Si quieres cambiar los temas:
```typescript
// En components/GitHubStats.tsx
theme=tokyonight  // Opciones: dark, radical, merko, gruvbox, etc.
```

Ver todos los temas: https://github.com/anuraghazra/github-readme-stats

### Formulario de Contacto

**Cambiar destinatario**: Modifica `.env.local`:
```env
CONTACT_EMAIL=nuevo@email.com
```

**Personalizar email** (`app/api/contact/route.ts`):
- Modifica el `html` en `resend.emails.send()`
- Cambia el `subject`
- Personaliza los estilos inline

**Sin Resend** (alternativa SMTP):
```typescript
// Usa nodemailer o similar
import nodemailer from 'nodemailer'
```

### Añadir Sección Nueva

1. **Crea el componente** en `/components/TuSeccion.tsx`
2. **Importa en home** (`app/page.tsx`):
```typescript
import TuSeccion from '@/components/TuSeccion'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TuSeccion />  {/* Nueva sección */}
      <About />
      // ...
    </>
  )
}
```

3. **Añade al navbar** si quieres link directo

## 🌐 Internacionalización (i18n)

Para añadir múltiples idiomas:

1. Instala `next-intl`:
```bash
npm install next-intl
```

2. Crea `/messages/es.json`, `/messages/en.json`
3. Configura middleware para rutas i18n
4. Envuelve componentes con traducciones

**Documentación**: https://next-intl-docs.vercel.app/

## 📊 Analytics

### Vercel Analytics (Recomendado)
```bash
npm install @vercel/analytics
```

En `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics
Añade en `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## 🎯 Checklist de Personalización

- [ ] Actualizar información personal en `lib/seo.ts`
- [ ] Modificar textos en Hero y About
- [ ] Añadir tus proyectos en `projects.json`
- [ ] Cambiar colores en `tailwind.config.ts` (opcional)
- [ ] Crear y añadir favicon e iconos
- [ ] Generar imagen Open Graph
- [ ] Añadir imágenes de proyectos
- [ ] Configurar variables de entorno
- [ ] Probar formulario de contacto
- [ ] Verificar GitHub stats con tu username
- [ ] Actualizar URLs en robots.ts y sitemap.ts

¡Listo para personalizar! 🚀
