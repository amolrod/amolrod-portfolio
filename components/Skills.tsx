'use client'

import { motion } from 'framer-motion'
import {
  SiAngular, SiReact, SiNodedotjs, SiDotnet,
  SiTypescript, SiHtml5, SiCss3, SiPostgresql, SiFirebase,
  SiMongodb, SiMysql, SiFigma, SiCanva, SiGit, SiDocker,
  SiTailwindcss, SiNextdotjs, SiJavascript
} from 'react-icons/si'
import { staggerContainer, staggerItem } from '@/lib/motion'

const skills = [
  { name: 'Angular', icon: SiAngular, category: 'frontend', color: '#DD0031' },
  { name: 'React', icon: SiReact, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', color: '#339933' },
  { name: '.NET', icon: SiDotnet, category: 'backend', color: '#512BD4' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'database', color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, category: 'database', color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, category: 'database', color: '#4479A1' },
  { name: 'Firebase', icon: SiFirebase, category: 'database', color: '#FFCA28' },
  { name: 'Figma', icon: SiFigma, category: 'tools', color: '#F24E1E' },
  { name: 'Canva', icon: SiCanva, category: 'tools', color: '#00C4CC' },
  { name: 'Git', icon: SiGit, category: 'tools', color: '#F05032' },
  { name: 'Docker', icon: SiDocker, category: 'tools', color: '#2496ED' },
]

const categories = [
  { id: 'frontend', name: 'Frontend', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', gradient: 'from-purple-500 to-pink-500' },
  { id: 'database', name: 'Databases', gradient: 'from-green-500 to-emerald-500' },
  { id: 'tools', name: 'Tools & Design', gradient: 'from-orange-500 to-red-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Stack tecnológico
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino y utilizo en mis proyectos
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.name}
              </span>
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills
                .filter((skill) => skill.category === category.id)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.05,
                      boxShadow: `0 20px 40px ${skill.color}30`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-dark p-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
                  >
                    <skill.icon 
                      size={48} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-white font-medium text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
