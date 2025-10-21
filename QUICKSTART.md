# ⚡ Quick Start - Portfolio Ángel Molina

## 🚀 Start in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd portfolio
npm install
```

### 2️⃣ Configure Environment
Create `.env.local` file:
```env
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_GITHUB_USERNAME=your_username
```

### 3️⃣ Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 🎉

---

## 📂 Project Structure

```
portfolio/
├── app/                      # Next.js 14 App Router
│   ├── api/contact/         # Email API endpoint
│   ├── about/               # About page
│   ├── projects/            # Projects page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
│
├── components/              # React Components
│   ├── Hero.tsx            # Hero with animations
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with gradient
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills badges
│   ├── GitHubStats.tsx     # GitHub statistics
│   ├── ProjectCard.tsx     # Project cards
│   ├── Contact.tsx         # Contact form
│   ├── CustomCursor.tsx    # Custom cursor
│   └── ParticlesBackground.tsx  # Animated background
│
├── content/
│   └── projects.json       # Projects data
│
├── lib/
│   ├── motion.ts           # Framer Motion variants
│   ├── seo.ts              # SEO configuration
│   └── utils.ts            # Utility functions
│
├── types/
│   └── index.ts            # TypeScript types
│
└── public/                 # Static assets
    └── site.webmanifest    # PWA manifest
```

---

## 🎨 Key Features

### ✨ Animations
- **Hero**: Typing effect, glow text, particles background
- **Scroll**: Fade in, stagger, parallax effects
- **Cards**: Hover tilt, 3D effects
- **Cursor**: Custom animated cursor (desktop)

### 🌓 Dark/Light Mode
- Toggle in navbar
- Persistent with localStorage
- Respects system preferences

### 📱 Responsive
- Mobile-first design
- Breakpoints: 640px, 768px, 1024px, 1280px
- Mobile menu with animations

### ♿ Accessible
- ARIA labels
- Keyboard navigation
- Focus states
- `prefers-reduced-motion` support

---

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📝 Quick Customization

### Change Colors
`tailwind.config.ts`:
```typescript
colors: {
  'neon-purple': '#YOUR_COLOR',
  'neon-cyan': '#YOUR_COLOR',
}
```

### Add Project
`content/projects.json`:
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Description",
  "tags": ["React", "Node.js"],
  "featured": true
}
```

### Update Personal Info
- `lib/seo.ts` - Metadata & social links
- `components/Hero.tsx` - Hero text
- `components/About.tsx` - Biography

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy! 

**Live in < 2 minutes** ⚡

---

## 📚 Documentation

- **Full Guide**: `README.md`
- **Customization**: `CUSTOMIZATION.md`
- **Deploy**: `DEPLOY.md`
- **Checklist**: `CHECKLIST.md`

---

## 🆘 Need Help?

- Check `README.md` for detailed instructions
- Review `CHECKLIST.md` for complete setup
- See `CUSTOMIZATION.md` for styling options

---

## 🎯 Performance Targets

- Lighthouse Performance: **≥90**
- Accessibility: **≥95**
- Best Practices: **≥95**
- SEO: **100**

---

**Made with ❤️ and Next.js**
