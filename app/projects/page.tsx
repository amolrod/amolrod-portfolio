'use client'

import { motion } from 'framer-motion'
import { generateSEO } from '@/lib/seo'
import ProjectCard from '@/components/ProjectCard'
import { staggerContainer, staggerItem } from '@/lib/motion'
import projectsData from '@/content/projects.json'

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Todos mis proyectos
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Una colección de aplicaciones web que he desarrollado utilizando diferentes tecnologías y frameworks
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {projectsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              Próximamente agregaré más proyectos...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
