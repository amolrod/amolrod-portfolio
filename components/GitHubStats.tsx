'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/motion'

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'amolrod'

const stats = [
  {
    title: 'GitHub Stats',
    url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=06b6d4&text_color=ffffff`,
  },
  {
    title: 'GitHub Streak',
    url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=a855f7&fire=06b6d4&currStreakLabel=06b6d4`,
  },
  {
    title: 'Top Languages',
    url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=ffffff`,
  },
]

const trophies = {
  title: 'GitHub Trophies',
  url: `https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&no-bg=true&column=4&margin-w=15&margin-h=15`,
}

export default function GitHubStats() {
  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              GitHub Stats
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi actividad y contribuciones en GitHub
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-dark p-4 rounded-xl overflow-hidden"
            >
              <h3 className="text-white font-semibold mb-4 text-center">
                {stat.title}
              </h3>
              <div className="relative w-full h-48 flex items-center justify-center">
                <img
                  src={stat.url}
                  alt={stat.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trophies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-6 rounded-xl overflow-hidden"
        >
          <h3 className="text-white font-semibold mb-6 text-center text-2xl">
            {trophies.title}
          </h3>
          <div className="relative w-full flex items-center justify-center">
            <img
              src={trophies.url}
              alt={trophies.title}
              className="w-full h-auto object-contain max-w-4xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan font-semibold text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver perfil completo en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
