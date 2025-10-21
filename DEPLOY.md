# 🎨 Guía de despliegue rápido en Vercel

## Pasos para deploy (5 minutos):

### 1. Preparar el repositorio
```bash
# Inicializar git si no lo has hecho
git init
git add .
git commit -m "Initial commit: Portfolio Ángel Molina"

# Crear repositorio en GitHub y pushear
git branch -M main
git remote add origin https://github.com/TU_USERNAME/portfolio.git
git push -u origin main
```

### 2. Configurar Resend (Email API)
1. Ve a https://resend.com/signup
2. Crea una cuenta gratis
3. Verifica tu email
4. Ve a "API Keys" en el dashboard
5. Crea una nueva API Key
6. Copia la key (empieza con `re_`)

### 3. Deploy en Vercel
1. Ve a https://vercel.com
2. Login con GitHub
3. Click en "Add New..." → "Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente Next.js
6. En "Environment Variables" añade:
   - `RESEND_API_KEY` = tu_key_de_resend
   - `CONTACT_EMAIL` = angelmolinarodriguez15@gmail.com
   - `NEXT_PUBLIC_GITHUB_USERNAME` = amolrod
7. Click en "Deploy" 🚀

### 4. Post-Deploy
- Tu sitio estará en: `https://tu-proyecto.vercel.app`
- Prueba el formulario de contacto
- Verifica las animaciones
- Ejecuta Lighthouse para verificar performance

## Dominio personalizado (Opcional)
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Añade tu dominio custom
4. Sigue las instrucciones para configurar DNS

## Troubleshooting

### Error: "Module not found"
- Verifica que todas las dependencias estén en package.json
- Ejecuta `npm install` localmente

### Formulario no funciona
- Verifica que RESEND_API_KEY esté configurada
- Revisa los logs en Vercel Dashboard → Functions
- El tier gratuito de Resend permite 100 emails/día

### GitHub Stats no cargan
- Verifica que NEXT_PUBLIC_GITHUB_USERNAME esté bien escrito
- Las stats pueden tardar unos segundos en cargar

¡Listo! Tu portfolio está online 🎉
