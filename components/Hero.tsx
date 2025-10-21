'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { fadeInUp, staggerContainer, staggerItem, buttonHover, buttonActive, shouldReduceMotion } from '@/lib/motion'
import ParticlesBackground from './ParticlesBackground'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/amolrod', label: 'GitHub' },
  { 
    icon: FiLinkedin, 
    href: 'https://www.linkedin.com/in/angel-molina-rodriguez-78714b252/', 
    label: 'LinkedIn' 
  },
  { icon: FiMail, href: 'mailto:angelmolinarodriguez15@gmail.com', label: 'Email' },
]

export default function Hero() {
  const reducedMotion = shouldReduceMotion()

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
      aria-labelledby="hero-title"
    >
      {/* Fondo de partículas animado (solo si no hay prefers-reduced-motion) */}
      {!reducedMotion && <ParticlesBackground />}

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge animado */}
          <motion.div
            variants={staggerItem}
            className="inline-block mb-8"
          >
            <motion.span
              animate={reducedMotion ? {} : {
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.4)',
                  '0 0 30px rgba(139, 92, 246, 0.6)',
                  '0 0 20px rgba(139, 92, 246, 0.4)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="backdrop-blur-md bg-slate-800/50 px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2.5 border border-slate-700/50"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full motion-safe-pulse" />
              <span className="text-slate-200">Disponible para nuevos proyectos</span>
            </motion.span>
          </motion.div>

          {/* Nombre con efecto glow y tipografía XL */}
          <motion.h1
            id="hero-title"
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-accent-violet-500 via-accent-pink-500 to-accent-orange-400 bg-clip-text text-transparent motion-safe-pulse">
              Ángel Molina
            </span>
          </motion.h1>

          {/* Subtítulo con typing effect */}
          <motion.div
            variants={staggerItem}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 min-h-[80px] flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer in training',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent font-medium"
            />
          </motion.div>

          {/* Descripción con max-width para legibilidad */}
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg leading-relaxed text-slate-400 mb-12 max-w-prose mx-auto"
          >
            Estudiante de Desarrollo de Aplicaciones Web (DAW) en Madrid. 
            Apasionado por crear experiencias digitales excepcionales con código limpio y diseño intuitivo.
          </motion.p>

          {/* Social Links con mejor accesibilidad */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center items-center gap-3 mb-12"
            role="list"
            aria-label="Enlaces de redes sociales"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reducedMotion ? {} : { scale: 1.05, y: -4 }}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl backdrop-blur-md bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-accent-violet-500/50 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-violet-500/60"
                aria-label={`Visitar mi perfil de ${social.label}`}
                role="listitem"
              >
                <social.icon 
                  size={22} 
                  className="text-slate-300 group-hover:text-white transition-colors duration-200" 
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons con microinteracciones */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/projects"
              whileHover={reducedMotion ? {} : buttonHover}
              whileTap={reducedMotion ? {} : buttonActive}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-violet-500 to-accent-pink-500 font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-violet-500/60"
            >
              Ver mis proyectos
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={reducedMotion ? {} : buttonHover}
              whileTap={reducedMotion ? {} : buttonActive}
              className="px-8 py-4 rounded-xl backdrop-blur-md bg-slate-800/50 font-semibold text-white border-2 border-slate-700/50 hover:border-accent-violet-500/50 hover:bg-slate-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-violet-500/60"
            >
              Contactar
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator (solo si no hay prefers-reduced-motion) */}
        {!reducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-sm font-medium">Scroll</span>
              <FiArrowDown size={18} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
