'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-dark rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="text-6xl opacity-50">
            {project.video ? '🎥' : '💻'}
          </div>
        </motion.div>
        
        {/* Overlay con links */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={24} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={24} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-gray-300 border border-white/10"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
