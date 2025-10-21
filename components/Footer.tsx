'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { siteConfig } from '@/lib/seo'

const socialLinks = [
  { icon: FiGithub, href: siteConfig.links.github, label: 'GitHub' },
  { icon: FiLinkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: siteConfig.links.email, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Onda gradiente animada */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-[length:200%_100%] animate-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent mb-4">
              Ángel Molina
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer in training
              <br />
              Frontend + Backend + UI/UX
            </p>
          </motion.div>

          {/* Columna 2: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map((item, index) => (
                <li key={item}>
                  <Link
                    href={index === 0 ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Conecta</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg glass-dark hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-cyan transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Ángel Molina.
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FiHeart className="text-red-500" />
            </motion.span>{' '}
            y Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
