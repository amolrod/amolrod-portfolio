'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { staggerContainer, staggerItem } from '@/lib/motion'
import projectsData from '@/content/projects.json'

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Proyectos destacados
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-xl glass-dark font-semibold text-white border-2 border-white/20 hover:border-neon-cyan transition-all cursor-pointer"
            >
              Ver todos los proyectos →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
