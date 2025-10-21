'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/Button'
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi'

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto max-w-6xl space-y-24"
      >
        {/* Header */}
        <motion.header variants={staggerItem} className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-accent-violet-500 via-accent-pink-500 to-accent-orange-400 bg-clip-text text-transparent">
            Styleguide
          </h1>
          <p className="text-lg text-slate-400 max-w-prose mx-auto">
            Sistema de diseño del portfolio de Ángel Molina. Paleta de colores, tipografía, espaciado y componentes.
          </p>
        </motion.header>

        {/* Paleta de Colores */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Paleta de Colores</h2>
            <p className="text-slate-400">Colores dark neón con alto contraste para accesibilidad</p>
          </div>

          {/* Base Colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-300">Colores Base</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ColorSwatch color="bg-slate-950" name="slate-950" hex="#020617" />
              <ColorSwatch color="bg-slate-900" name="slate-900" hex="#0f172a" />
              <ColorSwatch color="bg-slate-800" name="slate-800" hex="#1e293b" />
              <ColorSwatch color="bg-slate-700" name="slate-700" hex="#334155" />
            </div>
          </div>

          {/* Accent Colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-300">Colores de Acento</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ColorSwatch color="bg-accent-violet-500" name="accent-violet-500" hex="#8b5cf6" />
              <ColorSwatch color="bg-accent-pink-500" name="accent-pink-500" hex="#ec4899" />
              <ColorSwatch color="bg-accent-orange-400" name="accent-orange-400" hex="#fb923c" />
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-300">Colores de Texto</h3>
            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-3">
              <p className="text-slate-100">Texto principal - slate-100 (Contraste 4.5:1)</p>
              <p className="text-slate-300">Texto secundario - slate-300 (Contraste 4.5:1)</p>
              <p className="text-slate-400">Texto terciario - slate-400 (Contraste 4.5:1)</p>
              <p className="text-slate-500">Texto desactivado - slate-500</p>
            </div>
          </div>
        </motion.section>

        {/* Tipografía */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Tipografía</h2>
            <p className="text-slate-400">Escala tipográfica fluida con Space Grotesk</p>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-2">7xl - 4.5rem</p>
                <h1 className="text-7xl font-bold">Heading 1</h1>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">6xl - 3.75rem</p>
                <h2 className="text-6xl font-bold">Heading 2</h2>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">5xl - 3rem</p>
                <h3 className="text-5xl font-bold">Heading 3</h3>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">4xl - 2.25rem</p>
                <h4 className="text-4xl font-bold">Heading 4</h4>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">3xl - 1.875rem</p>
                <h5 className="text-3xl font-bold">Heading 5</h5>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">2xl - 1.5rem</p>
                <h6 className="text-2xl font-bold">Heading 6</h6>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">xl - 1.25rem</p>
                <p className="text-xl">Text XL</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">lg - 1.125rem</p>
                <p className="text-lg">Text Large</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">base - 1rem (leading-relaxed)</p>
                <p className="text-base leading-relaxed max-w-prose">
                  Texto base con leading-relaxed para legibilidad óptima. El ancho máximo está limitado a 65 caracteres (max-w-prose) para una lectura cómoda. Este es el tamaño estándar para párrafos de contenido.
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">sm - 0.875rem</p>
                <p className="text-sm">Text Small</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">xs - 0.75rem</p>
                <p className="text-xs">Text Extra Small</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Espaciado */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Espaciado</h2>
            <p className="text-slate-400">Sistema de espaciado vertical coherente</p>
          </div>

          <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-accent-violet-500 rounded"></div>
              <span className="text-sm text-slate-400">py-4 (1rem) - Espaciado pequeño</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-8 bg-accent-pink-500 rounded"></div>
              <span className="text-sm text-slate-400">py-8 (2rem) - Espaciado medio</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-12 bg-accent-orange-400 rounded"></div>
              <span className="text-sm text-slate-400">py-12 (3rem) - Espaciado grande</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-16 bg-accent-violet-500 rounded"></div>
              <span className="text-sm text-slate-400">py-16 (4rem) - Espaciado extra grande</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-24 bg-accent-pink-500 rounded"></div>
              <span className="text-sm text-slate-400">py-24 (6rem) - Espaciado secciones</span>
            </div>
          </div>
        </motion.section>

        {/* Botones */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Botones</h2>
            <p className="text-slate-400">Variantes de botones con microinteracciones</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400">Primary</h3>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="md" disabled>Disabled</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400">Secondary</h3>
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
              <Button variant="secondary" size="md" disabled>Disabled</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400">Ghost</h3>
              <Button variant="ghost" size="sm">Small</Button>
              <Button variant="ghost" size="md">Medium</Button>
              <Button variant="ghost" size="lg">Large</Button>
              <Button variant="ghost" size="md" disabled>Disabled</Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400">Outline</h3>
              <Button variant="outline" size="sm">Small</Button>
              <Button variant="outline" size="md">Medium</Button>
              <Button variant="outline" size="lg">Large</Button>
              <Button variant="outline" size="md" disabled>Disabled</Button>
            </div>
          </div>
        </motion.section>

        {/* Cards */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Cards</h2>
            <p className="text-slate-400">Tarjetas con hover effects sutiles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-accent-violet-500/50 hover:shadow-card-hover transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-violet-500 to-accent-pink-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Card Title</h3>
              <p className="text-slate-400 text-sm">Card description with hover effect and subtle animations.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-accent-pink-500/50 hover:shadow-card-hover transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-pink-500 to-accent-orange-400 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Card Title</h3>
              <p className="text-slate-400 text-sm">Card description with hover effect and subtle animations.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-accent-orange-400/50 hover:shadow-card-hover transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-orange-400 to-accent-violet-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Card Title</h3>
              <p className="text-slate-400 text-sm">Card description with hover effect and subtle animations.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Forms */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Formularios</h2>
            <p className="text-slate-400">Inputs con focus states accesibles</p>
          </div>

          <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-6 max-w-md">
            <div>
              <label htmlFor="input-normal" className="block text-sm font-medium text-slate-300 mb-2">
                Input Normal
              </label>
              <input
                id="input-normal"
                type="text"
                placeholder="placeholder text"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-violet-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="input-success" className="block text-sm font-medium text-slate-300 mb-2">
                Input Success
              </label>
              <div className="relative">
                <input
                  id="input-success"
                  type="text"
                  placeholder="success@example.com"
                  className="w-full px-4 py-3 pr-10 bg-slate-800/50 border-2 border-green-500 rounded-lg text-slate-100"
                />
                <FiCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="input-error" className="block text-sm font-medium text-slate-300 mb-2">
                Input Error
              </label>
              <div className="relative">
                <input
                  id="input-error"
                  type="text"
                  placeholder="error@example.com"
                  className="w-full px-4 py-3 pr-10 bg-slate-800/50 border-2 border-red-500 rounded-lg text-slate-100"
                />
                <FiX className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
              </div>
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <FiAlertCircle size={14} />
                Este campo es requerido
              </p>
            </div>

            <div>
              <label htmlFor="textarea" className="block text-sm font-medium text-slate-300 mb-2">
                Textarea
              </label>
              <textarea
                id="textarea"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-violet-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>
        </motion.section>

        {/* Animaciones */}
        <motion.section variants={staggerItem} className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Animaciones</h2>
            <p className="text-slate-400">Animaciones útiles con propósito claro</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold">Fade In Up</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="h-20 bg-gradient-to-r from-accent-violet-500 to-accent-pink-500 rounded-lg flex items-center justify-center text-white font-semibold"
              >
                Fade In Up
              </motion.div>
              <p className="text-sm text-slate-400">Duración: 250ms | Easing: cubic-bezier(0.22, 1, 0.36, 1)</p>
            </div>

            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold">Scale In</h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="h-20 bg-gradient-to-r from-accent-pink-500 to-accent-orange-400 rounded-lg flex items-center justify-center text-white font-semibold"
              >
                Scale In
              </motion.div>
              <p className="text-sm text-slate-400">Duración: 200ms | Easing: cubic-bezier(0.22, 1, 0.36, 1)</p>
            </div>

            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold">Hover Scale</h3>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.15 }}
                className="h-20 bg-gradient-to-r from-accent-orange-400 to-accent-violet-500 rounded-lg flex items-center justify-center text-white font-semibold cursor-pointer"
              >
                Hover Me
              </motion.div>
              <p className="text-sm text-slate-400">Scale: 1.03 | Duración: 150ms</p>
            </div>

            <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold">Hover Lift</h3>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-20 bg-gradient-to-r from-accent-violet-500 via-accent-pink-500 to-accent-orange-400 rounded-lg flex items-center justify-center text-white font-semibold cursor-pointer"
              >
                Hover Me
              </motion.div>
              <p className="text-sm text-slate-400">Y: -4px | Duración: 200ms</p>
            </div>
          </div>
        </motion.section>

        {/* Accesibilidad */}
        <motion.section variants={staggerItem} className="space-y-8 pb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Accesibilidad</h2>
            <p className="text-slate-400">Cumplimiento WCAG 2.1 AA</p>
          </div>

          <div className="backdrop-blur-md bg-slate-900/50 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Contraste de color ≥ 4.5:1</h4>
                <p className="text-sm text-slate-400">Todos los textos cumplen con el ratio mínimo de contraste AA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Focus visible</h4>
                <p className="text-sm text-slate-400">Ring de 4px con 60% opacity para navegación por teclado</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Prefers-reduced-motion</h4>
                <p className="text-sm text-slate-400">Animaciones desactivadas automáticamente según preferencias del usuario</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">ARIA labels y roles</h4>
                <p className="text-sm text-slate-400">Etiquetas descriptivas y roles semánticos en todos los componentes interactivos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Navegación por teclado</h4>
                <p className="text-sm text-slate-400">Tab, Enter, Space y flechas funcionan en todos los componentes</p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

// Componente auxiliar para mostrar colores
function ColorSwatch({ color, name, hex }: { color: string; name: string; hex: string }) {
  return (
    <div className="space-y-2">
      <div className={`${color} h-20 rounded-lg border border-slate-700`}></div>
      <div className="text-sm">
        <p className="font-medium text-slate-300">{name}</p>
        <p className="text-slate-500 font-mono text-xs">{hex}</p>
      </div>
    </div>
  )
}
