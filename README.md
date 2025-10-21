# 🎨 Portfolio de Ángel Molina

Portfolio personal interactivo construido con Next.js 14, TypeScript, TailwindCSS y Framer Motion. Diseño profesional con **sistema de diseño v2.0**: animaciones útiles, accesibilidad WCAG AA y experiencia visual limpia.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amolrod/portfolio)

## 🎨 Sistema de Diseño v2.0

Este portfolio cuenta con un **sistema de diseño profesional completamente documentado**:

- 🎨 **Paleta dark neón**: Slate-950 base con acentos violet/pink/orange
- ✍️ **Tipografía fluida**: Escala 7xl → xs con leading optimizado
- 🎭 **Animaciones útiles**: 150-250ms con easing natural, no decorativas
- ♿ **WCAG 2.1 AA**: Contraste ≥4.5:1, focus visible, prefers-reduced-motion
- 📚 **Documentación visual**: `/styleguide` con todos los componentes
- 🔘 **Componentes reutilizables**: Button con 4 variantes y 3 tamaños

👉 **Ver el Styleguide**: [localhost:3001/styleguide](http://localhost:3001/styleguide) después de iniciar el proyecto

📖 **Guía completa**: Lee [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) para detalles técnicos

## ✨ Características

- 🎭 **Animaciones Premium**: Transiciones fluidas, scroll-based animations con Framer Motion
- 🌓 **Modo Oscuro/Claro**: Toggle persistente con localStorage
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- ♿ **Accesible**: ARIA labels, keyboard navigation, prefers-reduced-motion
- ⚡ **Performance**: Lighthouse score ≥90, lazy loading, optimización de imágenes
- 🎨 **Cursor Personalizado**: Cursor interactivo en desktop
- 📊 **GitHub Stats**: Integración con APIs de estadísticas de GitHub
- 📧 **Formulario de Contacto**: Integrado con Resend (email API gratuita)
- 🎯 **SEO Optimizado**: Meta tags, Open Graph, sitemap

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Animaciones**: Framer Motion
- **Icons**: React Icons
- **Email**: Resend API
- **Deployment**: Vercel

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/amolrod/portfolio.git
cd portfolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Resend API Key (Obtén una gratis en https://resend.com/signup)
RESEND_API_KEY=re_your_api_key_here

# Email donde recibirás los contactos
CONTACT_EMAIL=angelmolinarodriguez15@gmail.com

# Tu username de GitHub (para las stats)
NEXT_PUBLIC_GITHUB_USERNAME=amolrod
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔑 Configuración de Resend (Envío de Emails)

1. Regístrate gratis en [resend.com](https://resend.com/signup)
2. Verifica tu email
3. Crea una API Key en el dashboard
4. Copia la key y pégala en `.env.local` como `RESEND_API_KEY`
5. El tier gratuito incluye **100 emails/día** (¡más que suficiente!)

### Alternativa sin Resend

Si prefieres no usar Resend, puedes:
- Usar **Mailtrap** para testing (gratis)
- Modificar `/app/api/contact/route.ts` para usar otro servicio SMTP
- Simplemente mostrar un mensaje de éxito sin enviar email real

## 📁 Estructura del Proyecto

```
portfolio/
├── app/
│   ├── api/contact/          # API route para formulario
│   ├── about/                # Página Sobre mí
│   ├── projects/             # Página de Proyectos
│   ├── contact/              # Página de Contacto
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Home page
│   └── globals.css           # Estilos globales
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── FeaturedProjects.tsx
│   ├── Footer.tsx
│   ├── GitHubStats.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ParticlesBackground.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
├── content/
│   └── projects.json         # Data de proyectos
├── lib/
│   ├── motion.ts             # Variantes de animación
│   ├── seo.ts                # Configuración SEO
│   └── utils.ts              # Utilidades
├── types/
│   └── index.ts              # TypeScript types
└── public/                   # Assets estáticos
```

## 🎨 Personalización

### 1. Cambiar información personal

Edita los siguientes archivos:

- `lib/seo.ts` - Metadata y links sociales
- `components/Hero.tsx` - Texto del hero
- `components/About.tsx` - Biografía y timeline
- `content/projects.json` - Tus proyectos

### 2. Modificar colores

En `tailwind.config.ts`, cambia los colores neón:

```ts
colors: {
  'neon-purple': '#a855f7',
  'neon-cyan': '#06b6d4',
  'neon-pink': '#ec4899',
}
```

### 3. Añadir proyectos

Edita `content/projects.json`:

```json
{
  "id": "unique-id",
  "title": "Nombre del Proyecto",
  "description": "Descripción breve",
  "tags": ["React", "Node.js"],
  "image": "/projects/imagen.jpg",
  "github": "https://github.com/...",
  "demo": "https://demo.com",
  "featured": true
}
```

## 🚢 Deploy a Vercel

### Opción 1: Deploy automático (Recomendado)

1. Push tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Añade las variables de entorno:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_GITHUB_USERNAME`
5. Click en **Deploy** 🎉

### Opción 2: CLI de Vercel

```bash
npm i -g vercel
vercel login
vercel
```

Sigue las instrucciones y añade las variables de entorno cuando se te pida.

## ✅ Checklist de Producción

- [x] **SEO**: Meta tags, Open Graph, sitemap
- [x] **Performance**: Lazy loading, code splitting, optimización de imágenes
- [x] **Accesibilidad**: ARIA labels, keyboard navigation, contraste de colores
- [x] **Animaciones**: 60fps, prefers-reduced-motion respetado
- [x] **Responsive**: Mobile, tablet, desktop
- [x] **Formulario**: Validación, feedback, integración email
- [x] **Build**: `npm run build` sin errores
- [x] **Deploy**: Vercel con dominio personalizado opcional

## 📊 Lighthouse Score Target

- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: 100

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animaciones lentas
- Verifica que `prefers-reduced-motion` esté desactivado
- Reduce el número de partículas en `ParticlesBackground.tsx`

### Formulario no envía emails
- Verifica que `RESEND_API_KEY` esté configurada
- Revisa los logs en Vercel Dashboard
- Comprueba que el email `from` esté verificado en Resend

## 📄 Licencia

MIT License - Siéntete libre de usar este template para tu portfolio.

## 🤝 Contacto

- **Email**: angelmolinarodriguez15@gmail.com
- **LinkedIn**: [Ángel Molina](https://www.linkedin.com/in/angel-molina-rodriguez-78714b252/)
- **GitHub**: [@amolrod](https://github.com/amolrod)

---

Hecho con Next.js por Ángel Molina
