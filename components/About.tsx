'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'
import { FiCode, FiDatabase, FiLayout, FiGitBranch } from 'react-icons/fi'

const timeline = [
  {
    year: '2024 - Presente',
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    institution: 'Formación Profesional',
    description: 'Estudiando desarrollo full stack, bases de datos, y arquitectura de aplicaciones web modernas.',
    current: true,
  },
  {
    year: '2023',
    title: 'Proyectos Freelance',
    institution: 'Autónomo',
    description: 'Desarrollo de aplicaciones web para pequeñas empresas y startups.',
    current: false,
  },
]

const features = [
  {
    icon: FiCode,
    title: 'Frontend',
    description: 'Angular, React, Next.js con TypeScript',
  },
  {
    icon: FiDatabase,
    title: 'Backend',
    description: 'Node.js, .NET, Java con APIs RESTful',
  },
  {
    icon: FiLayout,
    title: 'UI/UX',
    description: 'Figma, Canva, diseño responsive',
  },
  {
    icon: FiGitBranch,
    title: 'DevOps',
    description: 'Git, GitHub, CI/CD, Docker',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales únicas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagen / GIF */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-dark p-8">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  alt="Coding animation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="text-gray-300 text-lg">
              ¡Hola! Soy <span className="text-neon-cyan font-semibold">Ángel Molina</span>, 
              estudiante de Desarrollo de Aplicaciones Web en Madrid, España.
            </motion.p>
            
            <motion.p variants={staggerItem} className="text-gray-400">
              Me especializo en crear aplicaciones web modernas y escalables, 
              combinando tanto frontend como backend. Mi objetivo es escribir 
              código limpio, mantenible y que resuelva problemas reales.
            </motion.p>

            <motion.p variants={staggerItem} className="text-gray-400">
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
              contribuir a proyectos open source y mejorar mis habilidades en 
              diseño UI/UX.
            </motion.p>

            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-dark p-4 rounded-xl"
                >
                  <feature.icon className="text-neon-cyan mb-2" size={24} />
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Mi trayectoria
          </h3>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-neon-purple/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan" />
                
                <div className="glass-dark p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neon-cyan font-semibold">{item.year}</span>
                    {item.current && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Actual
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
